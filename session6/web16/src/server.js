/* eslint no-console:0 */

const express = require('express');
const getMail = require('./getMail');

const app = express();

const port = 1971;

app.use(express.static('public'));

app.get('/inbox', (request, response) => {
  const mail = getMail();
  response.send(mail);
});

const server = app.listen(port, () => console.log(`Express listening on port ${port}`));

module.exports = {
  app,
  stop: server.close.bind(server)
};
