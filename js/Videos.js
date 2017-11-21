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
      category.classList.add('category');
      const titleNode = document.createElement('h1');
      titleNode.classList.add('text', 'text__categoryTitle');
      titleNode.appendChild(document.createTextNode(categoryTitle));
      category.appendChild(titleNode);

      const cardlist = document.createElement('div');
      cardlist.classList.add('cardlist');
      category.appendChild(cardlist);

      const currCategory = data.categories[i].videos;

      for (let j = 0; j < currCategory.length; j++){
        const videoId = currCategory[j] -1;
        const currVideo = this.createVideos(data, videoId);
        cardlist.appendChild(currVideo);
      }

      const cardlistLine = document.createElement('span');
      cardlistLine.classList.add('cardlist__line');
      category.appendChild(cardlistLine);


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
      videoCard.classList.add('card');
      videoCard.setAttribute('id', videoId+1)

      const videoPoster = document.createElement('div');
      videoPoster.classList.add('card__videoPoster');
      videoCard.appendChild(videoPoster);

      const videoImg = document.createElement('img');
      videoImg.src = videoImgUrl;
      videoImg.classList.add('card__videoImg');
      videoPoster.appendChild(videoImg);

      const lengthFlex = document.createElement('div');
      lengthFlex.classList.add('card__lengthFlex');
      videoPoster.appendChild(lengthFlex);


      const videoLength = document.createElement('div');
      videoLength.classList.add('card__videoLength');
      const lengthNode = document.createTextNode(this.parseLength(videoDuration));
      videoLength.appendChild(lengthNode);
      lengthFlex.appendChild(videoLength);

      const videoDescription = document.createElement('div');
      videoDescription.classList.add('card__videoDescription');
      videoCard.appendChild(videoDescription);

      const videoTitle = document.createElement('h3');
      videoTitle.classList.add('text', 'text__videoTitle');
      videoTitle.appendChild(document.createTextNode(videoName));
      videoDescription.appendChild(videoTitle);

      const videoDate = document.createElement('p');
      videoDate.classList.add('text', 'text__videoDate');
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
  if (years === 1){
    return fyrir.concat(years.toString().concat(' ári síðan'));
  }else {
	   return fyrir.concat(years.toString().concat(' árum síðan'));
  }
} else if (months > 0){
  if (months === 1){
    return fyrir.concat(months.toString().concat(' mánuði síðan'));
  }else {
	   return fyrir.concat(months.toString().concat(' mánuðum síðan'));
  }
} else if (weeks > 0){
  if (weeks === 1){
    return fyrir.concat(weeks.toString().concat(' viku síðan'));
  }else {
	   return fyrir.concat(weeks.toString().concat(' vikum síðan'));
  }
} else if (days > 0){
  if (days === 1){
    return fyrir.concat(days.toString().concat(' degi síðan'));
  }else {
	   return fyrir.concat(days.toString().concat(' dögum síðan'));
  }
} else if (hours > 0){
  if (hours === 1){
    return fyrir.concat(hours.concat(' klukustund síðan'));
  }else {
	   return fyrir.concat(hours.concat(' klukkustundum síðan'));
  }
} else {
  if (minutes === 1){
    return fyrir.concat(minutes.concat(' mínútu síðan'));
  }else {
	   return fyrir.concat(minutes.concat(' mínútum síðan'));
}}

  }


}
