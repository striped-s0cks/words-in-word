module.exports = (
    function(settings) {
        settings.test_settings.default.launch_url = __dirname + '/index.html';
        console.log(settings)

        return settings;
    }
)(
    require('./nightwatch.json'),
    require('babel-register')
);
