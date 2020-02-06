/* global alert */

// with thanks: https://stackoverflow.com/a/24707088
const freezeGif = () => {
  const img = document.images[0];
  const { width, height } = img;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.getContext('2d').drawImage(img, 0, 0, width, height);
  Array.from(img.attributes).forEach(({ name, value }) => {
    canvas.setAttribute(name, value);
  });
  img.parentNode.insertBefore(canvas, img);
  img.parentNode.removeChild(img);
};

document.getElementById('stop').addEventListener('click', () => {
  freezeGif();
  setTimeout(() => alert("That's better."), 0);
});
