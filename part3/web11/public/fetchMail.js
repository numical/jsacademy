/* global fetch */

document.getElementById('fetch').addEventListener('click', async() => {
  const inbox = document.getElementById('inbox');

  const response = await fetch('http://localhost:1971/inbox');
  const mail = await response.json();
  mail.forEach(mail => {
    const line = document.createElement('div');
    line.textContent = mail;
    inbox.appendChild(line);
  });
});
