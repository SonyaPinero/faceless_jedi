var actions = require('../actions');
var INITIAL_STATE = {
	  images: [],
    randomImage: '',
    showAllImages: false
};


function reducer(state, action){
	state = state || INITIAL_STATE;

	switch (action.type){
		case actions.GET_IMAGES:
			return {
				images: action.payload,
				randomImage: '',
				showAllImages: false
			};
		default: 
			return state;
	}
}

module.exports = reducer;