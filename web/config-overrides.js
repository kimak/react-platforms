const rewireYarnWorkspaces = require('react-app-rewire-yarn-workspaces')

module.exports = {
  webpack: function(config, env) {
    return rewireYarnWorkspaces(config, env)
  },
  jest: function(config) {
    config.rootDir = ".."
    config.roots = ["web","core"]
    config.transformIgnorePatterns = config.roots.map(
      key => `<rootDir>/node_modules/(?!${key})`
    )
    config.testMatch = ['**/?(*)!(.native).(spec|test).js?(x)']
    return config
  },
}
