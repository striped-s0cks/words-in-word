'use strict';

module.exports = {
    'Load app page': client => {
        const appPage = client.page.appPage();
        const buttons = appPage.section.buttons;

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);
        appPage.waitForElementVisible('@initialWord', 3000);
        appPage.waitForElementVisible('@userWord', 3000);
        appPage.waitForElementVisible('@allWords', 3000);

        // all buttons are active
        buttons.waitForElementVisible('@generateButton', 3000);
        buttons.getAttribute('@generateButton', 'disabled', function(result) {
            this.assert.equal(result.value, null);
        });

        buttons.waitForElementVisible('@clearButton', 3000);
        buttons.getAttribute('@clearButton', 'disabled', function(result) {
            this.assert.equal(result.value, null);
        });

        buttons.waitForElementVisible('@helpButton', 3000);
        buttons.getAttribute('@helpButton', 'disabled', function(result) {
            this.assert.equal(result.value, null);
        });

        buttons.waitForElementVisible('@customButton', 3000);
        buttons.getAttribute('@customButton', 'disabled', function(result) {
            this.assert.equal(result.value, null);
        });

        buttons.waitForElementVisible('@aboutButton', 3000);
        buttons.getAttribute('@aboutButton', 'disabled', function(result) {
            this.assert.equal(result.value, null);
        });

        // main word is not empty
        client.elements('class name', 'CharBox', function(res) {
            this.assert.notEqual(res.value.length, 0);
        });

        // user input is empty
        appPage.expect.element('@userWord').text.to.equal('');

        // words are hidden
        client.elements('class name', 'Word', function(res) {
            for ( let index = 1; index <= res.value.length; index++ ) {
                const className = `li:nth-child(${index}) .Word`;

                this.assert.containsText(className, '_');
            }
        });

        client.pause(2000);
        client.end();
    }
};
