module.exports = (
    function(settings) {
        return settings;
    }
)(
    require('./nightwatch.json'),
    require('babel-register')
);
