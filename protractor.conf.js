exports.config = {
    acceptInsecureCerts : true,
    restartBrowserBetweenTests: true,

    chromeDriver: require('chromedriver/lib/chromedriver').path,
    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,

    allScriptsTimeout: 110000,

    framework:      'custom',
    frameworkPath:  require.resolve('protractor-cucumber-framework'),

    specs: [ 'features/**/*.feature' ],

    cucumberOpts: {
        require:            [ 'features/**/*.ts' ],
        format:             require.resolve('@serenity-js/cucumber/register'),
        'require-module':   'ts-node/register',
        tags:               [ '~@wip' ]
    },

    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [
                '--disable-infobars',
                '--no-sandbox',
                '--headless',
                '--disable-gpu',
                '--window-size=1024x768',
            ]
        }
    }
};
