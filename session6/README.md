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
TODO

### web20 - componentised, tested react
TODO

### web21 - JSX
TODO

### react01 - a react app
1. edit index.html
2. create reactApp.js

### react02 - a built react app
1. install webpack
2. create src dir and move reactApp into it
3. change index.html to ref bundle.js and not CDN
4. create webpack.config.js
5. install react react-dom
6. add build command

next steps webpack-dev-server
OR JSX?







