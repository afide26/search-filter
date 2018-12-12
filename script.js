const adventuresList = [];

const adventures = document.getElementsByClassName('adventure');
for (var i = 0; i < adventures.length; i++) {
  adventuresList.push(adventures[i].innerHTML.toLowerCase());
}

const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keyup', function (e) {
  e.preventDefault();

  const text = searchBar.value.toLowerCase();

  for (var b = 0; b < adventuresList.length; b++) {
    if (adventuresList[b].indexOf(text) < 0) {
      adventures[b].style.display = "none";
    } else {
      adventures[b].style.display = "block";
    }
  }
})