var VideoList = (props) => (
  <div className="video-list media">
    { console.log("props videos currently: ", props.videos);
      props.videos ? props.videos.map( video => {
      return <VideoListEntry video = {video} onListClick={props.onListClick} key={video.etag} />
    }) : "NO VIDEOS WHAT!?"}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
