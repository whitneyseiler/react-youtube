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
  console.log('callback')
      if (callback) {
        callback(items);
      }
    })

    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
  setTimeout(()=>console.log('timeout'), 5000)
console.log('testing')
};

window.searchYouTube = _.debounce(searchYouTube, 500);
