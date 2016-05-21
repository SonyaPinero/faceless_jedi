var App = React.createClass({
  getInitialState: function() {
    return {
      images: ''
    }
  },

  componentDidMount: function(e){
     $.ajax({
      url: '/images',
      method: 'GET',
      contentType: 'application/json',
      success: function(data){
        this.setState({images: data});
        console.log('this is my state', this.state);
      }.bind(this),
      error: function(data){
        console.log(data);
        console.log('Error!');
      }.bind(this)
    });
  },

  render(){
    return (
      <div>
        <h1 style={{textAlign: 'center' }}>Faceless Jedi</h1>
      </div>
    )
  }

})

ReactDOM.render(<App />, document.getElementById('main'));