// CS 330 - Homework 3 starter code

// This is the JSON (JavaScript Object Notation) object that stores all of our
// album information.
var albums = [
  {
    title : "Currents",
    artist : "Tame Impala",
    cover : "images/currents.jpg",
    tracks : [
      "Let It Happen",
      "Nangs",
      "The Moment",
      "Yes I'm Changing",
      "Eventually",
      "Gossip",
      "The Less I Know The Better",
      "Past Life",
      "Disciples",
      "'Cause I'm A Man"
    ]
  },
  {
    "title" : "Telefone",
    "artist" : "Noname",
    "cover" : "images/telefone.jpg",
    "tracks" : [
      "Yesterday",
      "Sunny Duet",
      "Diddy Bop",
      "All I Need",
      "Reality Check",
      "Freedom Interlude",
      "Casket Pretty",
      "Forever",
      "Bye Bye Baby",
      "Shadow Man"
    ]
  },
  {
    "title" : "Crybaby",
    "artist" : "Melanie Martinez",
    "cover" : "images/crybaby.jpg",
    "tracks" : [
      "Cry Baby",
      "Dollhouse",
      "Sippy Cup",
      "Carousel",
      "Alphabet Boy",
      "Soap",
      "Training Wheels",
      "Pity Party",
      "Tag, You're It",
      "Milk and Cookies",
      "Pacify Her",
      "Mrs. Potato Head",
      "Mad Hatter"
    ]
  },
  {
    "title" : "Coloring Book",
    "artist" : "Chance The Rapper",
    "cover" : "images/cbook.jpg",
    "tracks" : [
      "All We Got",
      "No Problem",
      "Summer Friends",
      "D.R.A.M. Sings Special",
      "Blessings",
      "Same Drugs",
      "Mixtape",
      "Angels",
      "Juke Jam",
      "All Night",
      "How Great",
      "Smoke Break",
      "Finish Line / Drown",
      "Blessings"
    ]
  }
];


// Fill in this function to dyamically construct the HTML elements for the album list
function buildAlbumList() {
  var albumList = document.getElementById("album-list");
  if (albumList != null) {
    for (i = 0; i < albums.length; i++) {
      var albumDiv = document.createElement('div');
      albumDiv.classList.add('albums-album-wrapper');
      albumDiv.innerHTML = `<image class='albums-album-art' src=${albums[i].cover}>
                            <div class='albums-album-name'>${albums[i].title}</div>
                            <div class='albums-artist-name'>${albums[i].artist}</div>`;
      albumList.appendChild(albumDiv);
    }
  }
}
