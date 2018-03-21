// if node had existed in 1995

const floppy = require('floppy');

async function mainFn() {
  await floppy.prompt('Please insert disk 1');
  const data1 = await floppy.load('disk1');
  store(data1);
  await floppy.prompt('Please insert disk 2');
  const data2 = await floppy.load('disk2');
  store(data2);
  await floppy.prompt('Please insert disk 3');
  const data3 = await floppy.load('disk3');
  store(data3);
  await floppy.prompt('Please insert disk 4');
  const data4 = await floppy.load('disk4');
  store(data4);
  await floppy.prompt('Please insert disk 5');
  const data5 = await floppy.load('disk5');
  store(data5);
  await floppy.prompt('Please insert disk 6');
  const data6 = await floppy.load('disk6');
  store(data6);
  useData();
}

mainFn();
