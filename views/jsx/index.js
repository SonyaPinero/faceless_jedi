var redux = require('redux');
var createStore = redux.createStore;
var Provider = require('react-redux').Provider;
var reducer = require('../reducers');
var App = require('./App');

var store = createStore(reducer);

var AppIndex = React.createClass({
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>

    )
  }

});

ReactDOM.render(<AppIndex />, document.getElementById('main'));