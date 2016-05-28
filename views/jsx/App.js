var App = React.createClass({
  getInitialState: function() {
    return {
      images: [],
      randomImage: '',
      showAllImages: false
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

  renderAllImages(){
   return this.state.images.map(function(image){
      return (
        <img style={{ width: '33%' }} src={image} />
      )
    })
  },

  renderRandomImage(){
    var imageSrc = this.state.randomImage;

    return (
      <img style={{ width: '33%'}} src={imageSrc} />
    )
  },

  onShowAllClick(){
    this.setState({
      showAllImages: true
    })
  },

  onToggleAllClick(){
    this.setState({
      showAllImages: !this.state.showAllImages
    })
  },

  onRandomizedClick(){
    var randomIndex = Math.floor((Math.random() * this.state.images.length) + 1);

    this.setState({
      randomImage: this.state.images[randomIndex],
      showAllImages: false
    });
  },

  render(){
    return (
      <div>
        <h1 style={{textAlign: 'center' }}>Faceless Jedi</h1>
        <button onClick={this.onShowAllClick}>Show All</button>
        <button onClick={this.onToggleAllClick}>Toggle All</button>
        <button onClick={this.onRandomizedClick}>Randomize</button>
        <div>
          {this.state.showAllImages ? this.renderAllImages() : null}
          {this.state.randomImage ? this.renderRandomImage() : null}
        </div>
      </div>
    )
  }

})

module.exports = App;