let searchButton = document.querySelector('#search-button');
let results = document.querySelector('.results');
let songs = '';
let word = document.querySelector('#searchfield')
let url = 'https://itunes.apple.com/search?media=music&term=';
let artist = document.querySelector('.search-results');
let player = document.querySelector('.player');


searchButton.addEventListener('click', function() {
  songs = '';
  fetch(url + word.value)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          console.log(data.results);


          for (var i = 0; i < data.results.length; i++) {

            songs += `

              <div class="search-results">
              <img class="artists" src="${data.results[i].artworkUrl100}" title="${data.results[i].previewUrl}" alt "Album cover">
              <p id="song-title"> ${data.results[i].trackName}</p>
              <p id="band-name">${data.results[i].artistName} </p>
              </div>
              `;
            results.innerHTML = songs
          };

          results.addEventListener('click', function(e) {
            let audio = `
            <audio  controls autoplay src="${e.target.title}" class="music-player">
            <p> Now playing:
            </audio>
                          `
            player.innerHTML = audio;

            console.log("artist click event works")
            console.log(e);

          });
        })

      })

});
