// if node had existed in 1995

const floppy = require('floppy');

async function loadFloppy(id) {
  await floppy.prompt(`Please insert disk ${id}`);
  return floppy.load(`disk${id}`);
}

async function mainFn() {
  const floppyIds = [1,2,3,4,5,6,7];
  const loadFromAllFloppies = Array.from(floppyIds, loadFloppy);
  const floppyData = await Promise.all(loadFromAllFloppies);
  floppyData.forEach(store);
  useData();
}

mainFn();
