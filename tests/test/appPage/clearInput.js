'use strict';

module.exports = {
    'Clear user input': client => {
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
        client.pause(500);
        initialWord.click('@secondChar');
        client.pause(500);

        appPage.expect.element('@userWord').text.to.not.equal('');

        buttons.click('@clearButton');
        appPage.expect.element('@userWord').text.to.equal('');

        client.pause(2000);
        client.end();
    }
};
