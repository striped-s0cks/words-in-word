module.exports = (
    function(settings) {
        settings.test_settings.default.launch_url = __dirname + '/index.html';

        return settings;
    }
)(
    require('./nightwatch.json')
);
