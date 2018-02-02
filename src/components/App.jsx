class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null,
    };
  }

  componentDidMount() {
    this.getVideos('react tutorials');
  }

  getVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
    
  }

  onTitleClick(video) {
    this.setState({
      currentVideo: video,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.getVideos.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer current={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList onTitleClick={this.onTitleClick.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
