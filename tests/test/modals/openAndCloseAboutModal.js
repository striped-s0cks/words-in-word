'use strict'

module.exports = {
    'Open and close About modal': client => {
        const appPage     = client.page.appPage();
        const pageButtons = appPage.section.buttons;

        const aboutModal   = client.page.aboutModal();
        const modalButtons = aboutModal.section.buttons;

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);

        pageButtons.click('@aboutButton');

        aboutModal.waitForElementVisible('@modal', 3000);
        aboutModal.waitForElementVisible('@header', 3000);
        aboutModal.waitForElementVisible('@body', 3000);
        aboutModal.waitForElementVisible('@footer', 3000);
        modalButtons.waitForElementVisible('@closeButton', 3000);
        modalButtons.waitForElementNotVisible('@submitButton', 3000);

        client.pause(500);
        modalButtons.click('@closeButton');

        appPage.waitForElementVisible('@appPage', 3000);
        aboutModal.waitForElementNotPresent('@modal', 3000);

        client.pause(2000);
        client.end();
    }
};
