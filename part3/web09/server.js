const express = require('express');
const app = express();

const mail = [
  'Your regulatory training is due',
  'Nigerian princess wishes to marry you with dowry of $10M',
  'JIRA pointless notification'
];

app.use(express.static('public'));

app.get('/inbox', (request, response) => {
  response.send(mail);
});

app.listen(1971, () => console.log('Express listening on port 1971'));
