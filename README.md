# Repro for [webpack/webpack#7278](https://github.com/webpack/webpack/issues/7278)

```sh
$ git clone https://github.com/dbkaplun/webpack-7278-repro.git
$ cd webpack-7278-repro
$ npm test

> webpack-7278-repro@1.0.0 test /Users/dbkaplun/webpack-7278-repro
> webpack && node .

...

WARNING in ./src/index.js
4:33-56 "export 'STLBinaryExporter' (imported as 'THREE') was not found in 'three'
 @ ./src/index.js

...

STLBinaryExporter: function (t){var e=[],n=0;t.traverse...}
```
