// This file isn't transpiled, so must use Common JS and ES5

// Register babel to transpile beofre our tests run.
require('babel-register')();

// Disable webpack features that mocha doesn't understand.
require.extensions['.css'] = function() {};