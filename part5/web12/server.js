const express = require('express');
const app = express();

const port = 1971;

const mail = [
  'Your regulatory training is due',
  'Nigerian princess wishes to marry you with dowry of $10M',
  'JIRA pointless notification'
];

app.use(express.static('public'));

app.get('/inbox', (request, response) => {
  response.send(mail);
});

app.listen(port, () => console.log(`Express listening on port ${port}`));
