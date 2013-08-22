var myfiles = [];
var fs = require('fs');
fs.readdir('../data/', function (err, files) { 
	if (err) throw err;
  	files.forEach( function (file) {
    		myfiles.push(file);
  	});
	console.log(myfiles);
});
