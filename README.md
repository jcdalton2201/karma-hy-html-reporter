karma-hy-html-reporter
======================

a karma reporter that produce a simple angular page for display

## Installation
add karma-hy-html-reporter to your `package.json`. 
```json
{ 
  "devDependencies": {
    "karma": "~0.10",
    "karma-hy-html-reporter" : "~0.0.1"
    }
}
```
this can be simplified by running the command:
```bash
npm install karma-hy-heml-reporter --save-dev
```

##Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    // reporters configuration
    reporters: ['hy-reporter'],
  });
};
```

There are some overwrites you can set for the reports 
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    // reporters configuration
    reporters: ['hy-reporter'],
    htmlAngularReport:{
      outputFile:'nameOfFile.html',
      reportFolder:'folderName',
      reportTitle:'title of report'
    }
  });
};
```
##Release History
### v0.0.1
*first release

##Author
Jason Dalton
