var searchYouTube = (options, callback) => {

  var defaults = {
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    videoEmbedabble: true,
    part: 'snippet',
    type: 'video',
  }

  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: 'GET',
    data: defaults,
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      throw new Error("FAILED!", data);
    }
  })

};

window.searchYouTube = searchYouTube;
