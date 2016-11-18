# WORDS IN A WORD GAME
------------------------------------
[![Run Status](https://api.shippable.com/projects/582dcb83c5316610006abd20/badge?branch=master)](https://app.shippable.com/projects/582dcb83c5316610006abd20) [![Coverage Badge](https://api.shippable.com/projects/582dcb83c5316610006abd20/coverageBadge?branch=master)](https://app.shippable.com/projects/582dcb83c5316610006abd20)

Built with React, Redux, Webpack.

Demo - https://yanasavchenko.github.io/words-in-word/

**_Instead of [yarn](https://github.com/yarnpkg/yarn) you could use npm_** - npm install, npm run devserver, npm run build.

## HOW TO START
1. yarn
2. yarn run devserver
3. open http://localhost:8090 in browser

## CREATE BUILD
1. yarn
2. yarn run build
3. root folder contains bundle. Just open index.html in browser

## RUN NIGHTWATCH TESTS
1. yarn
2. node ./node_modules/selenium-standalone/bin/selenium-standalone install
3. yarn run devserver
4. in https://github.com/YanaSavchenko/words-in-word/blob/master/nightwatch.json#L9 use this config:  
    "selenium": {  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"start_process": true,  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"server_path": "node_modules/selenium-standalone/.selenium/selenium-server/2.53.1-server.jar",  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"log_path": "./tmp",  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"host": "127.0.0.1",  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"port": 4444,  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cli_args": {  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"webdriver.chrome.driver": "node_modules/selenium-standalone/.selenium/chromedriver/2.25-x64-chromedriver",  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"webdriver.ie.driver": ""  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
    }  
5. yarn test (in new CLI window)
