class Videos {
  constructor() {
    this.categories = document.querySelector('.categories');
    this.player = document.querySelector('.player');
  }

  createCategories(data) {
    for(let i = 0; i < data.categories.length; i++){
      const categoryTitle = data.categories[i].title;
      const categoryVideos = data.categories[i].videos;
      const category = document.createElement('div');
      category.classList.add('.category');
      const titleNode = document.createElement('h2');
      titleNode.appendChild(document.createTextNode(categoryTitle));
      category.appendChild(titleNode);

      const cardlist = document.createElement('div');
      cardlist.classList.add('.cardlist');
      category.appendChild(cardlist);

      const currCategory = data.categories[i].videos;

      for (let j = 0; j < currCategory.length; j++){
        const videoId = currCategory[j] -1;
        const currVideo = this.createVideos(data, videoId);
        cardlist.appendChild(currVideo);
      }


      this.categories.appendChild(category);
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

  createVideos(data, videoId){

      console.log('id : ' + videoId);
      const videoName = data.videos[videoId].title;
      console.log('Title : ' + videoName);
      const videoDuration = data.videos[videoId].duration;
      console.log('duration : ' + videoDuration);
      const videoAge = data.videos[videoId].created;
      console.log('Age : ' + videoAge);
      const videoImgUrl = data.videos[videoId].poster;
      console.log('poster : ' + videoImgUrl);

      const videoCard = document.createElement('div');
      videoCard.classList.add('.card');

      const videoPoster = document.createElement('div');
      videoPoster.classList.add('.videoPoster');
      videoCard.appendChild(videoPoster);

      const videoImg = document.createElement('img');
      videoImg.src = videoImgUrl;
      videoPoster.appendChild(videoImg);

      const videoLength = document.createElement('div');
      const lengthNode = document.createTextNode(this.parseLength(videoDuration));
      videoLength.appendChild(lengthNode);
      videoPoster.appendChild(videoLength);

      const videoDescription = document.createElement('div');
      videoDescription.classList.add('.videoDescription');
      videoCard.appendChild(videoDescription);

      const videoTitle = document.createElement('h3');
      videoTitle.classList.add('.videoTitle');
      videoTitle.appendChild(document.createTextNode(videoName));
      videoDescription.appendChild(videoTitle);

      const videoDate = document.createElement('p');
      videoDate.classList.add('.videoDate');
      const dateNode = document.createTextNode(this.parseDate(videoAge));
      videoDate.appendChild(dateNode);
      videoDescription.appendChild(videoDate);

      return videoCard;
  }


  parseLength(duration){
    // Fríða lagar
    return duration;
  }


  parseDate(videoAge){
    // Fríða lagar
    return videoAge;

  }


}
