var r = require('nraw');
var Reddit = new r("User");
var imageArray = [];

function getJedi(){
		return new Promise(function(resolve, reject){
			Reddit.subreddit("ImaginaryJedi").exec(function(data){
			console.log('my data', data)
			var array = data.data.children
			array.forEach(function(url){
				if ((url.data.url).indexOf('jpg' || 'jpeg') > -1 ){
					imageArray.push(url.data.url)
				}
			})
			resolve(imageArray)
		})
	})
}

function getWesteros(array){
		return new Promise(function(resolve, reject){
			Reddit.subreddit("ImaginaryWesteros").exec(function(data){
  		console.log('my data', data)
			var array = data.data.children
			array.forEach(function(url){
				if ((url.data.url).indexOf('jpg' || 'jpeg') > -1 ){
					imageArray.push(url.data.url)
				}
			})
  		resolve(imageArray)
  	})
	})
}

function getImages(req, res){
	getJedi()
		.then(function(){
			return getWesteros()
		})
		.then(function(){
			return res.json(imageArray)
		})
}

exports.serverSetup = function (server) {
  server.get('/images', getImages);
};