'use strict';

module.exports = {
    'Input custom word': client => {
        const appPage     = client.page.appPage();
        const pageButtons = appPage.section.buttons;

        const customWordModal = client.page.customWordModal();
        const modalButtons    = customWordModal.section.buttons;

        const customWord = 'SomeCoolWORD';

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);

        pageButtons.click('@customButton');
        customWordModal.waitForElementVisible('@modal', 3000);
        customWordModal.waitForElementVisible('@body', 3000);

        customWordModal.inputValue(client, customWord);
        modalButtons.click('@submitButton');

        appPage.waitForElementVisible('@appPage', 3000);
        customWordModal.waitForElementNotPresent('@modal', 3000);

        let newWord = '';

        client.elements('class name', 'CharBox', function(res) {
            for ( let index = 1; index <= res.value.length; index++ ) {
                const className = `.CharBox:nth-child(${index})`;

                this.getText(className, function(text){
                    newWord += text.value;
                });
            }
        }).perform( function() {
            client.assert.equal(newWord, customWord.toLowerCase());
        });

        appPage.expect.element('@userWord').text.to.equal('');

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
