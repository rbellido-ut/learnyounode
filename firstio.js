var fs = require('fs');

var data = fs.readFile(process.argv[2], 'utf8', function(err, data){
    if (err) throw err;
    var line_count = data.toString().trim().split('\n').length - 1;
    console.log(line_count);
});

