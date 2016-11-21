'use strict'

module.exports = {
    'Input value': client => {
        const appPage = client.page.appPage();
        const buttons = appPage.section.buttons;
        const initialWord = appPage.section.initialWord;

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);
        appPage.waitForElementVisible('@initialWord', 3000);
        appPage.waitForElementVisible('@userWord', 3000);

        client.pause(500);
        initialWord.click('@firstChar');
        client.assert.cssClassPresent('.InitialWord .CharBox:nth-child(1) .char', 'clicked');
        client.pause(500);

        initialWord.click('@secondChar');
        client.assert.cssClassPresent('.InitialWord .CharBox:nth-child(1) .char', 'clicked');
        client.pause(500);

        client.getText('.UserWord', function(text){
            this.assert.equal(text.value.length, 2);
        });

        initialWord.click('@firstChar');
        client.assert.cssClassPresent('.InitialWord .CharBox:nth-child(1) .char', 'clicked');

        client.getText('.UserWord', function(text){
            this.assert.equal(text.value.length, 2);
        });

        client.pause(2000);
        client.end();
    }
};
