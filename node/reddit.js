var r = require('nraw');
var Reddit = new r("User");
var imageArray = [];

function getImages(req, res){
	Reddit.subreddit("ImaginaryJedi").exec(function(data){
		console.log('my data', data)
		var array = data.data.children
		array.forEach(function(url){
			if ((url.data.url).indexOf('jpg' || 'jpeg') > -1 ){
				imageArray.push(url.data.url)
			}
	})
})

  Reddit.subreddit("ImaginaryWesteros").exec(function(data){
  	console.log('my data', data)
		var array = data.data.children
		array.forEach(function(url){
			if ((url.data.url).indexOf('jpg' || 'jpeg') > -1 ){
				imageArray.push(url.data.url)
			}
		})
  })
  return res.json(imageArray)
}

exports.serverSetup = function (server) {
  server.get('/images', getImages);
};