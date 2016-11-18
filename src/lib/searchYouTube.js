var searchYouTube = ({key, query, max = 5}, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

  // $.ajax({
  //   url: "https://www.googleapis.com/youtube/v3/search",
  //   type: 'GET',
  //   data: defaults,
  //   dataType: 'json',           // left out these lines?
  //   contentType: 'application/json',
  //   success: function(data) {
  //     callback(data.items);
  //   },
  //   error: function(data) {
  //     throw new Error("FAILED!", data);
  //   }
  // })

window.searchYouTube = searchYouTube;
