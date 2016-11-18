class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentVideo: null,
      videos: []
    }
  }

  componentDidMount() {
    this.getYouTubeVideos('puppies');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) =>
      this.setState({
        currentVideo: videos[0],
        videos: videos,
      })
    )
  }

  handleListClick (video) {
    this.setState({
      currentVideo: video
    })
  }

  render() {
    return (
      <div>
        <Nav
          handleSearchInputChange={this.getYouTubeVideos.bind(this)}
        />
        <div className="col-md-7">
          <VideoPlayer
            video = {this.state.currentVideo}
          />
        </div>
        <div className="col-md-5">
          <VideoList
            videos = {this.state.videos}
            onListClick = {this.handleListClick.bind(this)}
          />
        </div>
      </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
