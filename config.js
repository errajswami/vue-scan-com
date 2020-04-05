let externalConfig = {};
try{
    externalConfig = require("../../vue-scan-com.config.json");
}catch(error) {}

const defaultConfig = {
    patternToMatchFileNames: "**/*.vue"
};

const config = {...defaultConfig, ...externalConfig};
exports.config = config;