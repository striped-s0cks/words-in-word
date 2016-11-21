'use strict';

module.exports = {
    'Generate word': client => {
        const appPage = client.page.appPage();
        const buttons = appPage.section.buttons;

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);
        appPage.waitForElementVisible('@initialWord', 3000);

        let oldWord = '';
        let newWord = '';

        client.elements('class name', 'CharBox', function(res) {
            for ( let index = 1; index <= res.value.length; index++ ) {
                const className = `.CharBox:nth-child(${index})`;

                this.getText(className, function(text){
                    oldWord += text.value;
                });
            }
        }).perform( function() {
            client.pause(500);
            buttons.click('@generateButton');
        }).perform( function() {
            appPage.waitForElementVisible('@initialWord', 3000);

            client.elements('class name', 'CharBox', function(res) {
            for ( let index = 1; index <= res.value.length; index++ ) {
                const className = `.CharBox:nth-child(${index})`;

                this.getText(className, function(text){
                    newWord += text.value;
                });
            }
            });
        }).perform( function() {
            client.assert.notEqual(oldWord, newWord);
        });

        appPage.waitForElementVisible('@userWord', 3000);
        appPage.expect.element('@userWord').text.to.equal('');

        appPage.waitForElementVisible('@allWords', 3000);
        client.elements('class name', 'Word', function(res) {
            for ( let index = 1; index <= res.value.length; index++ ) {
                const className = `li:nth-child(${index}) .Word`;

                this.expect.element(className).text.to.not.match(/[a-z]+/);
            }
        });

        client.pause(2000);
        client.end();
    }
};
