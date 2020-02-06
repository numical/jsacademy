const addLine = (parent, text) => {
  const line = document.createElement('div');
  line.textContent = text;
  parent.appendChild(line);
}


document.getElementById('fetch').addEventListener('click', async() => {
  const inbox = document.getElementById('inbox');
  try {
    const response = await fetch('/inbox');
    const mail = await response.json();
    mail.forEach(mail => addLine(inbox, mail));
  } catch (err) {
    console.error(err);
    addLine(inbox, 'There was an error retrieving your mail');
  }
});
