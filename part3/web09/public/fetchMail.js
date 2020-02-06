/* global XMLHttpRequest */

document.getElementById('fetch').addEventListener('click', () => {
  const inbox = document.getElementById('inbox');
  const request = new XMLHttpRequest();
  request.addEventListener('load', () => {
    const mail = JSON.parse(request.response);
    mail.forEach(mail => {
      const line = document.createElement('div');
      line.textContent = mail;
      inbox.appendChild(line);
    });
  });
  request.open('GET', 'http://localhost:1971/inbox', false);
  request.send();
});
