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
    const minutes = Math.floor(duration/60);
    const seconds = duration - minutes*60;
    let time = '';
    if(minutes < 10){
	     time = '0'.concat(minutes.toString().concat(':'));
     } else {
	     time = minutes.toString().concat(':');
     }

     if(seconds < 10){
	       return time.concat('0'.concat(seconds.toString()));
       } else {
	       return time.concat(seconds.toString());
       }
  }


  parseDate(videoAge){
    const timeSince = Math.floor((new Date() - videoAge)/1000);
const minutes = Math.floor(timeSince/60);
const hours = Math.floor(minutes/60);
const days = Math.floor(hours/24);
const weeks = Math.floor(days/7);
const months = Math.floor(days/30);
const years = Math.floor(days/365);

const fyrir = 'Fyrir ';

if(years > 0){
	return fyrir.concat(years.toString().concat(' ári/árum síðan'));

} else if (months > 0){
	return fyrir.concat(months.toString().concat(' mánuði/mánuðum síðan'));

} else if (weeks > 0){
	return fyrir.concat(weeks.toString().concat(' viku/vikum síðan'));
fyrir
} else if (days > 0){
	return fyrir.concat(days.toString().concat(' degi/dögum síðan'));

} else if (hours > 0){
	return fyrir.concat(hours.concat(' klukustund/klukkustundum síðan'));

} else {
	return fyrir.concat(minutes.concat(' mínútu/mínútum síðan'));
}

  }


}
