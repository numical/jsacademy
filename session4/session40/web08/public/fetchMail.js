const mail = [
  'Your regulatory training is due',
  'Nigerian princess wishes to marry you with dowry of $10M',
  'JIRA pointless notification'
];

document.getElementById('fetch').addEventListener('click', () => {
  const inbox = document.getElementById('inbox');
  mail.forEach(mail => {
    const line = document.createElement('div');
    line.textContent = mail;
    inbox.appendChild(line);
  });
});
