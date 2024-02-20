// https://browsersl.ist/#q=%3E+0.2%25+and+not+dead+and+fully+supports+es6-module+and+fully+supports+es6-module-dynamic-import+and+not+iOS+%3C+13%2C%0Amaintained+node+versions

module.exports = [
  // We try to support most markets while also scoping it to browsers that fully supports ESM, and can natively call import()
  // as much of our products and tooling rely on ESM and dynamic imports being available to the runtime.
  // iOS older than 13 is not supported due to esbuild not considering it fully supporting template literals: https://github.com/evanw/esbuild/blob/40711afe0baa545012b813c5c7788225be9ef74c/internal/compat/js_table.go#L839
  // it's probably related to: https://bugs.webkit.org/show_bug.cgi?id=190756
  '> 0.2% and not dead and fully supports es6-module and fully supports es6-module-dynamic-import and not iOS < 13',
  // Most of our npm libraries also need to work in Node.js, at least to the LTS versions.
  'maintained node versions',
]
