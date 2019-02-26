var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Updated text',function (err){
    if(err) throw err;
    console.log('Updated!');
});