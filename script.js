class Videos {
  constructor() {
    this.cardlists = document.querySelector('.cardlists');
    this.player = document.querySelector('.player');
  }



  load() {
    console.log('Testy test :)');
    const request = new XMLHttpRequest();
    request.open('GET', './videos.json',true);


    request.onload = function() {
      const result = JSON.parse(request.response);
      createCategories(result);
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
      //createVideos(currCategory);

      this.cardlists.appendChild(category);
    }
  }


}





document.addEventListener('DOMContentLoaded', () => {
  console.log('Wowsa');
  const videos = new Videos();
  videos.load();
});
