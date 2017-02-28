'use strict';

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            './app/Endscreen/endscreen.spec.js'
        ],
        reporters: ['progress'],
        port: 8081,
        colors: true,
        browsers: ['PhantomJS'],
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    windowName: 'window',
                    settings: {
                        webSecurityEnabled: false
                    }
                }
            }
        },
        singleRun: true
    })
};