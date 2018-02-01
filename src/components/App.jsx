class App extends React.Component {
  constructor(props) {
    super(props);
    document.title = this.props.title;
    
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };
  }

  onTitleClick(clickedVideo) {
    this.setState({
      currentVideo: clickedVideo,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer default={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList click={this.onTitleClick.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
