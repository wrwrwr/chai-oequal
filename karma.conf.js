module.exports = function(config) {
    config.set({
        files: ['tests/*.js'],
        browsers: ['PhantomJS', 'Firefox', 'Chrome'],
        frameworks: ['browserify', 'chai', 'jasmine'],
        preprocessors: {'tests/*.js': ['browserify']},
        reporters: ['progress'],
        reportSlowerThan: 100,
        singleRun: true
    });
};
