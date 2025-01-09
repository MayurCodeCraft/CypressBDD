const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/multiple-cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '131'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Cypress BDD Cucumber',
        data: [
            {label: 'Project', value: 'Orange HRM'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'Dec 2024'},
            {label: 'Execution Start Time', value: (new Date).toString()},
            {label: 'Execution End Time', value: (new Date).toString()}
        ]
    }
});