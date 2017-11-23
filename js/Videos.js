class Videos {
  constructor() {
    this.categories = document.querySelector('.categories');
    this.player = document.querySelector('.player');
  }

  // náum í JSON

  load() {
    this.onLoad();

    const request = new XMLHttpRequest();
    request.open('GET', './videos.json', true);

    request.onload = () => {
      this.data = JSON.parse(request.response);
      this.createCategories(this.data);
    };
    request.send();
  }

  // Búum til þau catagories sem eru í JSON skránni

  createCategories(data) {
    this.clear();

    const { categories } = data;

    categories.forEach((thisCategory) => {
      const categoryTitle = thisCategory.title;

      const category = document.createElement('div');
      category.classList.add('category');

      const titleNode = document.createElement('h1');
      titleNode.classList.add('text', 'text__categoryTitle');
      titleNode.appendChild(document.createTextNode(categoryTitle));
      category.appendChild(titleNode);

      const cardlist = document.createElement('div');
      cardlist.classList.add('cardlist');
      category.appendChild(cardlist);

      const currCategory = thisCategory.videos;

      currCategory.forEach((currId) => {
        const videoId = currId - 1;
        const currVideo = this.createVideos(data, videoId);
        cardlist.appendChild(currVideo);
      });

      const cardlistLine = document.createElement('span');
      cardlistLine.classList.add('cardlist__line');
      category.appendChild(cardlistLine);


      this.categories.appendChild(category);
    });
  }

  // Gerum clickable skjáskot af myndbandi

  createVideos(data, videoId) {
    const videoName = data.videos[videoId].title;
    const videoDuration = data.videos[videoId].duration;
    const videoAge = data.videos[videoId].created;
    const videoImgUrl = data.videos[videoId].poster;
    const videoCard = document.createElement('a');
    videoCard.classList.add('card');
    const videoLinkUrl = 'player.html?id='.concat(videoId + 1);
    videoCard.setAttribute('href', videoLinkUrl);

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

  // Tekur lengd inn í sekúndum
  // skilar í mínútum og sekúndum

  parseLength(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);
    let time = '';
    if (minutes < 10) {
      time = '0'.concat(minutes.toString(), ':');
    } else {
      time = minutes.toString().concat(':');
    }

    if (seconds < 10) {
      return time.concat('0', seconds.toString());
    }
    return time.concat(seconds.toString());
  }

  // Tekur inn upload tíma í millisekúndum
  // skilar námunudum tíma í árum, mánuðum, vikum o.s.frv eftir hvað á við

  parseDate(videoAge) {
    const timeSince = Math.floor((new Date() - videoAge) / 1000);
    const minutes = Math.floor(timeSince / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    const fyrir = 'Fyrir ';

    if (years > 0) {
      if (years === 1) {
        return fyrir.concat(years.toString(), ' ári síðan');
      }
      return fyrir.concat(years.toString(), ' árum síðan');
    } else if (months > 0) {
      if (months === 1) {
        return fyrir.concat(months.toString(), ' mánuði síðan');
      }
      return fyrir.concat(months.toString(), ' mánuðum síðan');
    } else if (weeks > 0) {
      if (weeks === 1) {
        return fyrir.concat(weeks.toString(), ' viku síðan');
      }
      return fyrir.concat(weeks.toString(), ' vikum síðan');
    } else if (days > 0) {
      if (days === 1) {
        return fyrir.concat(days.toString(), ' degi síðan');
      }
      return fyrir.concat(days.toString(), ' dögum síðan');
    } else if (hours > 0) {
      if (hours === 1) {
        return fyrir.concat(hours.toString(), ' klukustund síðan');
      }
      return fyrir.concat(hours.toString(), ' klukkustundum síðan');
    }
    if (minutes === 1) {
      return fyrir.concat(minutes.toString(), ' mínútu síðan');
    }
    return fyrir.concat(minutes.toString(), ' mínútum síðan');
  }

  // Sýnir að verið sé að sækja uppýsingar fyrir síðu

  onLoad() {
    const loading = document.createElement('h2');
    loading.classList.add('text');
    loading.appendChild(document.createTextNode('Hleð upplýsingum...'));
    this.categories.appendChild(loading);
  }

  // Hreinsar allt út af síðu nema heading mynd

  clear() {
    while (this.categories.hasChildNodes()) {
      this.categories.removeChild(this.categories.firstChild);
    }
  }
}
