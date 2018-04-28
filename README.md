cleanup-webpack-plugin [![Build Status](https://travis-ci.org/ali322/cleanup-webpack-plugin.svg?branch=master)](https://travis-ci.org/ali322/cleanup-webpack-plugin) [![npm version](https://badge.fury.io/js/cleanup-webpack-plugin.svg)](https://badge.fury.io/js/cleanup-webpack-plugin)
===
[![NPM](https://nodei.co/npm/cleanup-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cleanup-webpack-plugin/)

inspired by [webpack-cleanup-plugin](https://github.com/gpbl/webpack-cleanup-plugin/blob/master/src/WebpackCleanupPlugin.js),cleanup files before run or after done


Usage
===

add plugin in your webpack.config.js

```javascript
var CleanupPlugin = require('cleanup-webpack-plugin')

module.exports = {
    entry:{
        index:"./index.js"
    },
    module:{
        loaders:[
            ...
        ]
    },
    output:{
        path:'./dist',
        filename:'[name]-[hash:8].min.js'
    },
    plugins:[
      new CleanupPlugin({
        include: ['./dist/*.js']
      })
    ]
}
```

this plugin will delete all .js files in dist directory before webpack bundle run everytime

Plugin Options
===

- **include**: delete files include which match glob patterns
- **exclude**: delete all files exclude which match glob patterns, if include options is provide, then this option will be ignore
- **when**: should be `before` or `after`


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)