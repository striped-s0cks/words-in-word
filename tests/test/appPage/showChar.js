'use strict';

module.exports = {
    'Show character': client => {
        const appPage = client.page.appPage();
        const buttons = appPage.section.buttons;

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);
        appPage.waitForElementVisible('@allWords', 3000);

        client.pause(500);
        buttons.click('@helpButton');

        let shownWords = 0;

        appPage.waitForElementVisible('@allWords', 3000);
        client.elements('class name', 'Word', function(res) {
            const regexp = /_*[a-z]{1}_*/;

            for ( let index = 1; index <= res.value.length; index++ ) {
                const className = `li:nth-child(${index}) .Word`;

                this.getText(className, function(text){
                    if ( text.value.match(regexp) ) {
                        shownWords++;
                    }
                });
            }
        }).perform( function() {
            client.assert.equal(shownWords, 1);
        });

        client.pause(2000);
        client.end();
    }
};
