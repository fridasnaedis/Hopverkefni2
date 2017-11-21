class Videos {
  constructor() {
    this.cardlists = document.querySelector('.cardlists');
    this.player = document.querySelector('.player');
  }

  createCategories(data) {
    for(let i = 0; i < data.categories.length; i++){
      console.log(data.categories[i].title);
      const categoryTitle = data.categories[i].title;
      const categoryVideos = data.categories[i].videos;
      const category = document.createElement('div');
      category.classList.add('.cardlist');
      const titleNode = document.createElement('h2');
      titleNode.appendChild(document.createTextNode(categoryTitle));
      category.appendChild(titleNode);
      this.createVideos(data);

      this.cardlists.appendChild(category);
    }
  }

  load() {
    console.log('Testy test :)');
    const request = new XMLHttpRequest();
    request.open('GET', './videos.json',true);

    request.onload = () => {
      this.data = JSON.parse(request.response);
      this.createCategories(this.data);
    };

    request.send();

  }




  createVideos(data){
    const currCategory = data.categories[i];
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
