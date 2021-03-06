karma-hy-html-reporter
======================

a karma reporter that produce a simple angular page for display.  Click on the suite card to see all of the tests.

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
npm install karma-hy-html-reporter --save-dev
```

##Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    // reporters configuration
    reporters: ['hy-html'],
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

##Screenshots

![Full Page](/fullPage.png)

![Popup](/popup.png)

##Release History
### v0.0.8
*first release

##Author
Jason Dalton
