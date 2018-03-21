// if node had existed in 1995

const floppy = require('floppy');

async function mainFn() {
  for( let i = 1; i < 7; i++ ) {
    await floppy.prompt(`Please insert disk ${i}`);
    const data = await floppy.load(`disk${i}`);
    store(data);
  }
  useData();
}

mainFn();
