// if node had existed in 1995

// promises

const floppy = require('floppy');
 function mainFn() {
   floppy
     .prompt('Please insert disk 1')
     .then(() => {
       return floppy.load('disk1')
     })
     .then((data1) => {
       store(data1);
       return prompt('Please insert disk 2');
    })
     .then(() => {
       return floppy.load('disk2')
     })
     .then((data2) => {
       store(data2);
       return prompt('Please insert disk 3');
     })
     .then(() => {
       return floppy.load('disk3')
     })
     .then((data3) => {
       store(data3);
       return prompt('Please insert disk 4');
     })
     .then(() => {
       return floppy.load('disk4')
     })
     .then((data4) => {
       store(data4);
       return prompt('Please insert disk 5');
     })
     .then(() => {
       return floppy.load('disk5')
     })
     .then((data5) => {
       store(data5);
       return prompt('Please insert disk 6');
     })
     .then(() => {
       return floppy.load('disk6')
     })
     .then((data6) => {
       store(data6);
       useData();
     })
}

mainFn();
