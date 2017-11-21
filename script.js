class Videos {
  constructor() {
    this.cardlists = document.querySelector('.cardlists');
    this.player = document.querySelector('.player');
  }



  load() {
    console.log('Testy test :)');
    const request = new XMLHttpRequest();
    request.open('GET', './videos.json',true);

    const parent = this;

    request.onload = function() {
      const result = JSON.parse(request.response);
      parent.createCategories(result);
    };

    request.send();

  }

  createCategories(data) {
    for(let i = 0; i < data.categories.length; i++){
      console.log(data.categories[i].title)
      const categoryTitle = data.categories[i].title;
      const categoryVideos = data.categories[i].videos;
      const category = document.createElement('div');
      category.classList.add('.cardlist');
      const titleNode = document.createElement('h2');
      titleNode.appendChild(document.createTextNode(categoryTitle));
      category.appendChild(titleNode);
      createVideos(data, currCategory);

      this.cardlists.appendChild(category);
    }
  }


  createVideos(data, currCategory){
    for (let i = 0; i < currCategory.videos.length; i++){
      console.log(data.videos[currCategory.videos[i]]);
      const videoId = currCategory.videos[i];
      console.log('id : ' + videoId);
      const videoTitle = data.videos[videoId].title;
      console.log('Title : ' + videoTitle);
      const videoAge = data.videos[videoId].created;
      console.log('Age : ' + videoAge);
      const videoPoster = data.videos[videoId].poster;
      console.log('poster : ' + videoPoster);
    }

  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Wowsa');
  const videos = new Videos();
  videos.load();
});
