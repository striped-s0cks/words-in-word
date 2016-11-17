# WORDS IN A WORD GAME
------------------------------------
[![Run Status](https://api.shippable.com/projects/582dcb83c5316610006abd20/badge?branch=master)](https://app.shippable.com/projects/582dcb83c5316610006abd20) [![Coverage Badge](https://api.shippable.com/projects/582dcb83c5316610006abd20/coverageBadge?branch=master)](https://app.shippable.com/projects/582dcb83c5316610006abd20)

Built with React, Redux, Webpack.

Demo - https://yanasavchenko.github.io/words-in-word/

**_Instead of [yarn](https://github.com/yarnpkg/yarn) you could use npm_** - npm install, npm run devserver, npm run build.

## HOW TO START
1. yarn
2. remove '/words-in-word' in https://github.com/YanaSavchenko/words-in-word/blob/master/index.html#L15 (because of github pages)
3. yarn run devserver
4. open http://localhost:8090 in browser

## CREATE BUILD
1. yarn
2. yarn run build
3. remove '/words-in-word' in https://github.com/YanaSavchenko/words-in-word/blob/master/index.html#L15 (because of github pages)
4. root folder contains bundle. Just open index.html in browser

## RUN NIGHTWATCH TESTS
1. yarn
2. node ./node_modules/selenium-standalone/bin/selenium-standalone install
3. yarn run devserver
4. in https://github.com/YanaSavchenko/words-in-word/blob/master/nightwatch.json#L9 use this config:
    ```"selenium": {
        "start_process": true,
        "server_path": "node_modules/selenium-standalone/.selenium/selenium-server/2.53.1-server.jar",
        "log_path": "./tmp",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "node_modules/selenium-standalone/.selenium/chromedriver/2.25-x64-chromedriver",
            "webdriver.ie.driver": ""
        }
    }
    ```
5. yarn test (in new CLI window)
