// var https = require('https');

var json = require('./hash.json');

// var url = json.data.children[0].data.url

// for (var key in json) {
//   if (json.hasOwnProperty(key)) {
//     for (var i = 0; i < json.data.children.length; i++){
//     	console.log(json.data.children[i].data.url);
//     }
  
//   }
// }



for (var key in json) {
  if (json.hasOwnProperty(key)) {
    for (var i = 0; i < json.data.children.length; i++){
    	if (json.data.children[i].data.url.indexOf("jpg") > -1){
    		console.log(json.data.children[i].data.url);
    	}    	
    }
  }
}

// var site = 'http://www.reddit.com/r/ImaginaryWesteros/.json'


