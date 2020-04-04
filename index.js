const fs = require('fs');
const path = require('path')

var glob = require("glob");
const compName = 'advMaskedinput';
let matchedFiles = [];

function getMatchedFiles(componentName, callBack){
glob("**/*.vue", function (er, files) {
  if (files) {
    files.forEach((file) => {
      console.log(path.basename(file, '.vue'));
      const doc = fs.readFileSync(file, 'utf-8');
      const pattern = `import.*${compName}(.vue)*`;
      const isMatched = doc.match(new RegExp(pattern, "gm"))
      if(isMatched) {
        matchedFiles.push(file);
      }
    })
    callBack(matchedFiles)
  }
})
}

getMatchedFiles(compName, (matchedFiles) =>{
  console.log(matchedFiles);
});

