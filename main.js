/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play


// click on picture icon of song (click event)
// pull audio file and push to "src" attribute

let searchButton = document.querySelector('#search-button');
let results = document.querySelector('.results');
let songs = '';
let word = document.querySelector('#searchfield')
let url = 'https://itunes.apple.com/search?media=music&term=';
let artist = document.querySelector('.search-results');
let player = document.querySelector('.player');

// console.log("url", url);
// console.log("search field", word);
// console.log("test", word.value);
// console.log("button", searchButton);

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



// console.log("songs",songs);


          };
          results.addEventListener('click', function(e) {
            let audio = `
            <audio  controls autoplay src="${e.target.title}" class="music-player">
            <p> Now playing:
            </audio>
                          `
            player.innerHTML = audio;
            console.log("artist click event works")

                        });
        })

      })

});

// results.addEventListener('click', function(e) {
//     console.log(data.results[i].previewUrl)
//               });
