'use strict';
var chalk = require('chalk');
var os = require('os');
var path = require('path');
var fs = require('fs');
var template = require('./htmlTemplate.js');
/**
 * The hyHtmlReporter.
 *
 * @param {!object} baseReporterDecorator The karma base reporter.
 * @param {!object} config The karma config.
 * @constructor
 */
var hyHtmlReporter = function (baseReporterDecorator, config, logger, helper, formatError) {
    // extend the base reporter
    baseReporterDecorator(this);

    var self = this;
    var firstRun = true;
    var reporterConfig = config.htmlAngularReport || {};
    var folder = reporterConfig.reportFolder || 'htmlReport';
    var baseFolder = config.basePath + '/' + folder;
    var outputFile = helper.normalizeWinPath(path.resolve(baseFolder, reporterConfig.outputFile|| 'htmlReport.html'));
    var reportTitle = reporterConfig.reportTitle || 'Javascript Unit Tests';
    
    function formatTimeInterval (time) {
        var mins = Math.floor(time / 60000);
        var secs = (time - mins * 60000) / 1000;
        var str = secs + (secs === 1 ? ' sec' : ' secs');

        if (mins) {
            str = mins + (mins === 1 ? ' min ' : ' mins ') + str;
        }

        return str;
    }

    function repeatString (text, n) {
        var res = [];
        var i;

        for (i = 0; i < n; i++) {
            res.push(text);
        }

        return res.join('');
    }


    /**
     * Called each time a test is completed in a given browser.
     *
     * @param {!object} browser The current browser.
     * @param {!object} result The result of the test.
     */
    function specComplete (browser, result) {
        var suiteItem = self.suite[result.suite[0]];
        self.allResults.total++;
        if(!suiteItem){
          suiteItem =self.suite[result.suite[0]] = {};
          suiteItem.name = result.suite[0];
          suiteItem.tests = [];
          suiteItem.success = 0;
          suiteItem.error = 0;
          suiteItem.skipped = 0;
        }
        var test = {
            id: result.id,
            description: result.description,
            success: result.success,
            skipped: result.skipped,
            time: result.time,
            log: result.log
        };
        if(test.success){
            suiteItem.success++;
            self.allResults.success++;

        }
        if(!test.success){
            suiteItem.error++;
            self.allResults.fail++;

        }
        if(test.skipped){
            suiteItem.skipped++;
        }
        suiteItem.tests.push(test);

      }

    self.specSuccess = specComplete;
    self.specSkipped = specComplete;
    self.specFailure = specComplete;

    self.onSpecComplete = function (browser, result) {
        specComplete(browser, result);
    };

    self.onRunStart = function (browsers) {
        self._browsers = [];
        self.suite = {};
        self.allResults = {
            total:0,
            success:0,
            fail:0
        };
        self.totalTime = 0;
        self.numberOfSlowTests = 0;
        self.numberOfSkippedTests = 0;
        self.numberOfBrowsers = (browsers || []).length;
    };

    self.onBrowsersStart = function (browsers) {
        self._browsers.push(browsers);
        self.numberOfBrowsers += 1;
    };

    self.getSuiteArray = function (){
        var tempArray = [];
        var prop;
        for (prop in self.suite) {
            if (self.suite.hasOwnProperty(prop)) {
                tempArray.push(self.suite[prop]);
            }
        }
        return tempArray;
    };

    self.onRunComplete = function (browsers, results) {
        var page = template.htmlTop;
        var total = '$scope.totals = ' + JSON.stringify(self.allResults) + ' ; ';
        var suiteArray = self.getSuiteArray();
        page = page + JSON.stringify(suiteArray) + ' ; ';
        page = page + '$scope.reportTitle = \'' + reportTitle + '\' ; ';
        page = page + total;
        page = page + template.htmlBottom;
        helper.mkdirIfNotExists(path.dirname(outputFile), function (){
            fs.writeFile(outputFile, page, function (error){
                if(error){
                    self.write(chalk.red.underline.bold('Can not write the report:') + '\n');
                    
                }else{
                    self.write(chalk.green.underline.bold('result written to file:' + outputFile) + '\n');
                }
            });
        });
        
    };
};

// inject karma runner baseReporter and config
hyHtmlReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

// PUBLISH DI MODULE
module.exports = {
    'reporter:hy-html': ['type', hyHtmlReporter]
};
