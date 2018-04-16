const assert = require('assert');
const getMail = require('./getMail.js');

describe('getMail', () => {
  it('returns 3 mails', () => {
    const mail = getMail();
    assert.equal(mail.length, 3);
  })
})
