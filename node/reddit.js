var r = require('nraw');
var Reddit = new r("User");

function getJedi(){
		return new Promise(function(resolve, reject){
			var images = [];
			Reddit.subreddit("ImaginaryJedi").exec(function(data){
			var array = data.data.children
			array.forEach(function(url){
				if ((url.data.url).indexOf('jpg' || 'jpeg') > -1 ){
					images.push(url.data.url)
				}
			})
			resolve(images)
		})
	})
}

function getWesteros(array){
		return new Promise(function(resolve, reject){
			var images = [];
			Reddit.subreddit("ImaginaryWesteros").exec(function(data){
			var array = data.data.children
			array.forEach(function(url){
				if ((url.data.url).indexOf('jpg' || 'jpeg') > -1 ){
					images.push(url.data.url)
				}
			})
  		resolve(images);
  	})
	})
}

function getImages(req, res){
	var imageArray = [];
	
	getJedi()
		.then(function(jediImages){
			imageArray = imageArray.concat(jediImages);
			return getWesteros()
		})
		.then(function(westerosImages){
			imageArray = imageArray.concat(westerosImages)
			return res.json(imageArray)
		})
}

exports.serverSetup = function (server) {
  server.get('/images', getImages);
};