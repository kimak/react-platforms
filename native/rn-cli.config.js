const getConfig = require('metro-bundler-config-yarn-workspaces');
const getWorkspaces = require('get-yarn-workspaces')
module.exports = getConfig(__dirname);
