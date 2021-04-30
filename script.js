const fs = require('fs');

fs.readFile('hello.txt','utf8',(err,data)=>{
	if(err){
		console.log('errorerrrerrerere')
	}
	console.log(data);
});

// console.log(fs)