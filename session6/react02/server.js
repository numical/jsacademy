const express = require('express');
const app = express();

const port = 1971;

app.use(express.static('public'));

app.listen(port, () => console.log(`Express listening on port ${port}`));
