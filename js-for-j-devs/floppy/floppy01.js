// if node had existed in 1995

const floppy = require('floppy');

floppy.prompt('Please insert disk 1', function() {
  floppy.load('disk1', function (data1) {
    store(data1);
    floppy.prompt('Please insert disk 2', function() {
      floppy.load('disk2', function (data2) {
        store(data2);
        floppy.prompt('Please insert disk 3', function() {
          floppy.load('disk3', function (data3) {
            store(data3);
            floppy.prompt('Please insert disk 4', function() {
              floppy.load('disk4', function (data4) {
                store(data4);
                floppy.prompt('Please insert disk 5', function() {
                  floppy.load('disk5', function (data5) {
                    store(data5);
                    floppy.prompt('Please insert disk 6', function() {
                      floppy.load('disk6', function (data6) {
                        store(data6);
                        useData();
                      });
                    });
                  });
                }):
              });
            });
          });
        });
      }):
    });
  });
});
