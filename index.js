const fs = require('fs');
const glob = require("glob");
const {config} = require("./config");

const patternToMatchFileNames = config.patternToMatchFileNames;

function getComponentName() {
  const cmdArguments = process.argv.slice(0);
  return cmdArguments[2] ? cmdArguments[2] : null;
}

function getFileListToMatch(callback) {
  glob(patternToMatchFileNames, function (er, files) {
    if (files) {
      return callback(files);
    }
    return callback(null);
  });
}

function isComponentUsedInFile(compName, fileContent) {

  const pattern = `import.*${compName}(.vue)*`;
  const isMatched = fileContent.match(new RegExp(pattern, "gm"))
  return isMatched;
}

function findUsedComponents(compName, files, callBack) {
  let matchedFiles = [];
  files.forEach((file) => {
    console.log(`* Scanning ${file}`);
    const fileContent = fs.readFileSync(file, 'utf-8');
    const isMatched = isComponentUsedInFile(compName, fileContent)
    if (isMatched) {
      matchedFiles.push(file);
    }
  })
  callBack(matchedFiles)
}

function outputResult(output) {
  const compName = getComponentName();
  console.log("\n")
  console.log(`${compName} is used in following components`)
  console.log(output);
}

function main() {
  let matchedFiles = [];
  const compName = getComponentName();
  getFileListToMatch(function (files) {
    if (!(files && Array.isArray(files) && files.length > 0)) {
      outputResult([]);
      return;
    }

    findUsedComponents(compName, files, function (usedComponents) {
      outputResult(usedComponents);
    })
  })
}

main();