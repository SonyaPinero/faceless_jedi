var axios = require('axios');

var GET_IMAGES = 'GET_IMAGES';
var SHOW_ALL_IMAGES = 'SHOW_ALL_IMAGES';
var TOGGLE_ALL_IMAGES = 'TOGGLE_ALL_IMAGES';
var GET_RANDOM_IMAGE = 'GET_RANDOM_IMAGE';

function getImages(){
	var requestData = axios.get('/images');
	
	return {
		type: GET_IMAGES,
		payload: requestData
	}
}

module.exports = {
	GET_IMAGES: GET_IMAGES,
	SHOW_ALL_IMAGES: SHOW_ALL_IMAGES,
	TOGGLE_ALL_IMAGES: TOGGLE_ALL_IMAGES,
	GET_RANDOM_IMAGE: GET_RANDOM_IMAGE
}