var RedditApi = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Faceless Jedi</h1>
      </div>
    )
  }
});

var App = React.createClass({
  render(){
    return (
      <div>
        <RedditApi />
      </div>
    )
  }

})

ReactDOM.render(<App />, document.getElementById('main'));