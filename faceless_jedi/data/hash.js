var json = require('./hash.json');

var url = json.data.children[0].data.url

for (var key in json) {
  if (json.hasOwnProperty(key)) {
    for (var i = 0; i < json.data.children.length; i++){
    	console.log(json.data.children[i].data.url);
    }
  
  }
}

