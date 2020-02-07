## The Plan

### web12
1. where we were
 - async/await with error handling
 
### web13 - add eslint
1. npm install --save-dev eslint
2. package.json lint script
3. .eslintrc file blank - see errors
4. .eslintrc parser options
5. .elintrc recommended
6. .eslintrc envs

### web14 - basic unit test
1. first see new src/ directory
2. test getMail
 - npm install --save-dev mocha
 - update package script
 - update .eslintrc

### web15 - server test
1. server.js returns app (not best way)
2. npm install --save-dev supertest
3. new tests

### web16 - fix test hang
1. add after close server
2. add start > change start script

### web17 - client test
browser-based, implementation-independent
1. based on instructions [here](https://github.com/numical/wonderwall/wiki/Add-Acceptance-Test-Framework)
2. npm run selenium-setup
3. note: npm run selenium-remove
4. npm install -save-dev selenium-webdriver
5. client.test.js
lots of complexity as intrically bound up with dom

### web18 - react 
1. note react-prod libsa
2. simplify index.html
3. goto fetchMail.js
4. each element now a function

###  web19 built react
1. move fetchMail.js to new dir client
2. delete react libs
3. edit index.html remove all external links, rename to bundle.js
4. add requires for react and react-dom
5. npm i --save-dev webpack webpack-cli
6. create webpack.config.js
7. npm build
8. note size of bundle.js then do prod build

### web20 - componentised, tested react
1. seperate out components
2. remember about ReactDOM
3. npm i --save-dev enzyme enzyme-adapter-react-16 sinon
4. add client path to mocha tests
5. add tests
6. start with Heading
7. then Button - interactive
8. then Inbox - gotchas and key tidy-up

### web21 - JSX
1. convert to JSX format
2. npm i -D babel-core babel-loader babel-preset-env babel-preset-react babel-polyfill
3. webpack.config.s - add loader config & babel-polyfill entry point
