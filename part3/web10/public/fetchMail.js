/* global fetch */

document.getElementById('fetch').addEventListener('click', () => {
  const inbox = document.getElementById('inbox');

  fetch('http://localhost:1971/inbox')
    .then(response => response.json())
    .then(mail => {
      mail.forEach(mail => {
        const line = document.createElement('div');
        line.textContent = mail;
        inbox.appendChild(line);
      });
    });
});
