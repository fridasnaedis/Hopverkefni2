'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player() {
    _classCallCheck(this, Player);

    this.player = document.querySelector('.player');
  }

  // náum í JSON

  _createClass(Player, [{
    key: 'load',
    value: function load() {
      var _this = this;

      var request = new XMLHttpRequest();
      request.open('GET', './videos.json', true);

      request.onload = function () {
        _this.data = JSON.parse(request.response);
        _this.createHtml(_this.data);
      };
      request.send();
    }

    // búum til HTML og takka

  }, {
    key: 'createHtml',
    value: function createHtml(data) {
      var _this2 = this;

      // get id from html link

      var idNr = window.location.search;
      var id = parseInt(idNr.match(/\d+/)[0], 10);

      // titleNode

      var title = document.createElement('h1');
      var node = data.videos[id - 1];
      if (node) {
        var titleNode = document.createTextNode(data.videos[id - 1].title);
        title.appendChild(titleNode);
        title.classList.add('text', 'text__playerTitle');
        this.player.appendChild(title);

        // Setja titil í tabtexta

        var htmlTitle = document.querySelector('.videoTitle');
        htmlTitle.appendChild(document.createTextNode(data.videos[id - 1].title));

        // videobox

        var videoBox = document.createElement('div');
        videoBox.classList.add('videoBox');
        this.player.appendChild(videoBox);

        // video

        var source = data.videos[id - 1].video;
        var currentVideo = document.createElement('video');
        currentVideo.classList.add('video');
        currentVideo.src = source;
        title.appendChild(currentVideo);
        videoBox.appendChild(currentVideo);

        // overlay

        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        var overlayButton = document.createElement('div');
        overlayButton.classList.add('overlayButton', 'playButton');
        overlay.appendChild(overlayButton);
        videoBox.appendChild(overlay);

        // event listener - play

        var videoHandler = document.querySelector('.videoBox');
        videoHandler.addEventListener('click', this.playButton.bind(this));

        this.buttons = document.createElement('div');
        this.buttons.classList.add('buttons');
        this.player.appendChild(this.buttons);

        // til baka á forsíðu

        var back = document.createElement('a');
        back.classList.add('text', 'text__home');
        back.setAttribute('href', './.');
        back.appendChild(document.createTextNode('Til baka'));
        this.player.appendChild(back);

        currentVideo.addEventListener('ended', this.reset.bind(this));

        // gera takka

        var buttons = ['backButton', 'playButton', 'muteButton', 'fullscrButton', 'nextButton'];

        buttons.forEach(function (item) {
          _this2.createButton(item);
        });
      } else {
        this.errorMsg();
      }
    }

    //  býr til takka og setur á þá eventlistener

  }, {
    key: 'createButton',
    value: function createButton(buttonName) {
      var button = document.createElement('button');
      button.classList.add(buttonName);
      button.classList.add('button');
      this.buttons.appendChild(button);
      switch (buttonName) {
        case 'playButton':
          button.addEventListener('click', this.playButton.bind(this));
          button.setAttribute('aria-label', 'Play/pause');
          break;
        case 'muteButton':
          button.addEventListener('click', this.muteButton.bind(this));
          button.setAttribute('aria-label', 'Mute/unmute');
          break;
        case 'nextButton':
          button.addEventListener('click', this.nextButton.bind(this));
          button.setAttribute('aria-label', 'Fast-forward 3 sec');
          break;
        case 'backButton':
          button.addEventListener('click', this.backButton.bind(this));
          button.setAttribute('aria-label', 'Rewind 3 sec');
          break;
        case 'fullscrButton':
          button.addEventListener('click', this.fullscrButton.bind(this));
          button.setAttribute('aria-label', 'Fullscreen');
          break;
        default:
      }
    }

    // Spila takki, ef videó er ekki að spila er það spilað,
    // annars er pásu táknmynd sýnd og vídeó pásað

  }, {
    key: 'playButton',
    value: function playButton() {
      var video = document.querySelector('.video');
      var overlay = document.querySelector('.overlay');
      var overlayButton = document.querySelector('.overlayButton');
      if (video.paused) {
        var button = document.querySelector('button.playButton');
        video.play();
        if (button.classList.contains('playButton')) {
          button.classList.remove('playButton');
          button.classList.add('pauseButton');
          overlayButton.classList.remove('playButton');
          overlay.classList.add('overlay__hidden');
        }
      } else {
        var _button = document.querySelector('.pauseButton');
        video.pause();
        if (_button.classList.contains('pauseButton')) {
          _button.classList.remove('pauseButton');
          _button.classList.add('playButton');
          overlay.classList.remove('overlay__hidden');
          overlayButton.classList.add('playButton');
        }
      }
    }

    // Fullscreen takki, setur vídeó í fullscreen (athuga þarf stuðning og gera
    // ráðstafanir með requestFullscreen API)

  }, {
    key: 'fullscrButton',
    value: function fullscrButton() {
      var video = document.querySelector('.video');
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }

    // Áfram takki, þegar ýtt er á hann og myndband er að spila,
    // er það fært áfram um 3 sekúndur eða á enda

  }, {
    key: 'nextButton',
    value: function nextButton() {
      var video = document.querySelector('.video');
      video.currentTime += 3;
    }

    // Til baka takki, þegar ýtt er á hann og myndband er að spila,
    // er það fært til baka um 3 sekúndur eða á byrjun+

  }, {
    key: 'backButton',
    value: function backButton() {
      var video = document.querySelector('.video');
      video.currentTime -= 3;
    }

    // Slökkva á hljóði takki, ef hljóð er að spila er slökkt á því annars öfugt

  }, {
    key: 'muteButton',
    value: function muteButton() {
      var video = document.querySelector('.video');
      if (video.muted) {
        var button = document.querySelector('.unmuteButton');
        video.muted = false;
        if (button.classList.contains('unmuteButton')) {
          button.classList.remove('unmuteButton');
          button.classList.add('muteButton');
        }
      } else {
        var _button2 = document.querySelector('.muteButton');
        video.muted = true;
        if (_button2.classList.contains('muteButton')) {
          _button2.classList.remove('muteButton');
          _button2.classList.add('unmuteButton');
        }
      }
    }

    // Lætur myndband fara aftur á byrjun og á pásu

  }, {
    key: 'reset',
    value: function reset() {
      var video = document.querySelector('.video');
      video.currentTime = 0;
      var overlay = document.querySelector('.overlay');
      var overlayButton = document.querySelector('.overlayButton');
      var button = document.querySelector('.pauseButton');
      button.classList.remove('pauseButton');
      button.classList.add('playButton');
      overlay.classList.remove('overlay__hidden');
      overlayButton.classList.add('playButton');
    }

    // Fall sem sýnir villumeldingu ef id er ekki til

  }, {
    key: 'errorMsg',
    value: function errorMsg() {
      var title = document.createElement('h1');
      var htmlTitle = document.querySelector('.videoTitle');
      htmlTitle.appendChild(document.createTextNode('Ekkert myndband fannst'));
      var titleNode = document.createTextNode('Þetta myndband er ekki til');
      var el = document.createElement('p');
      var palli = document.createTextNode('En hér er mynd af Palla í staðinn:');
      var mynd = document.createElement('img');
      mynd.src = './img/palli2.png';
      mynd.classList.add('errorMynd');

      el.appendChild(palli);
      title.appendChild(titleNode);

      title.classList.add('text', 'text__playerTitle');
      el.classList.add('text');

      this.player.appendChild(title);
      this.player.appendChild(el);
      this.player.appendChild(mynd);
    }
  }]);

  return Player;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Videos = function () {
  function Videos() {
    _classCallCheck(this, Videos);

    this.categories = document.querySelector('.categories');
    this.player = document.querySelector('.player');
  }

  // náum í JSON

  _createClass(Videos, [{
    key: 'load',
    value: function load() {
      var _this = this;

      this.onLoad();

      var request = new XMLHttpRequest();
      request.open('GET', './videos.json', true);

      request.onload = function () {
        _this.data = JSON.parse(request.response);
        _this.createCategories(_this.data);
      };
      request.send();
    }

    // Búum til þau catagories sem eru í JSON skránni

  }, {
    key: 'createCategories',
    value: function createCategories(data) {
      var _this2 = this;

      this.clear();

      var categories = data.categories;


      categories.forEach(function (thisCategory) {
        var categoryTitle = thisCategory.title;

        var category = document.createElement('div');
        category.classList.add('category');

        var titleNode = document.createElement('h1');
        titleNode.classList.add('text', 'text__categoryTitle');
        titleNode.appendChild(document.createTextNode(categoryTitle));
        category.appendChild(titleNode);

        var cardlist = document.createElement('div');
        cardlist.classList.add('cardlist');
        category.appendChild(cardlist);

        var currCategory = thisCategory.videos;

        currCategory.forEach(function (currId) {
          var videoId = currId - 1;
          var currVideo = _this2.createVideos(data, videoId);
          cardlist.appendChild(currVideo);
        });

        var cardlistLine = document.createElement('span');
        cardlistLine.classList.add('cardlist__line');
        category.appendChild(cardlistLine);

        _this2.categories.appendChild(category);
      });
    }

    // Gerum clickable skjáskot af myndbandi

  }, {
    key: 'createVideos',
    value: function createVideos(data, videoId) {
      var videoName = data.videos[videoId].title;
      var videoDuration = data.videos[videoId].duration;
      var videoAge = data.videos[videoId].created;
      var videoImgUrl = data.videos[videoId].poster;
      var videoCard = document.createElement('a');
      videoCard.classList.add('card');
      var videoLinkUrl = 'player.html?id='.concat(videoId + 1);
      videoCard.setAttribute('href', videoLinkUrl);

      var videoPoster = document.createElement('div');
      videoPoster.classList.add('card__videoPoster');
      videoCard.appendChild(videoPoster);

      var videoImg = document.createElement('img');
      videoImg.src = videoImgUrl;
      videoImg.classList.add('card__videoImg');
      videoImg.alt = videoName;
      videoPoster.appendChild(videoImg);

      var lengthFlex = document.createElement('div');
      lengthFlex.classList.add('card__lengthFlex');
      videoPoster.appendChild(lengthFlex);

      var videoLength = document.createElement('div');
      videoLength.classList.add('card__videoLength');
      var lengthNode = document.createTextNode(this.parseLength(videoDuration));
      videoLength.appendChild(lengthNode);
      lengthFlex.appendChild(videoLength);

      var videoDescription = document.createElement('div');
      videoDescription.classList.add('card__videoDescription');
      videoCard.appendChild(videoDescription);

      var videoTitle = document.createElement('div');
      videoTitle.classList.add('text', 'text__videoTitle');
      videoTitle.appendChild(document.createTextNode(videoName));
      videoDescription.appendChild(videoTitle);

      var videoDate = document.createElement('p');
      videoDate.classList.add('text', 'text__videoDate');
      var dateNode = document.createTextNode(this.parseDate(videoAge));
      videoDate.appendChild(dateNode);
      videoDescription.appendChild(videoDate);

      return videoCard;
    }

    // Tekur lengd inn í sekúndum
    // skilar í mínútum og sekúndum

  }, {
    key: 'parseLength',
    value: function parseLength(duration) {
      var minutes = Math.floor(duration / 60);
      var seconds = duration - minutes * 60;
      var time = '';
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

  }, {
    key: 'parseDate',
    value: function parseDate(videoAge) {
      var timeSince = Math.floor((new Date() - videoAge) / 1000);
      var minutes = Math.floor(timeSince / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      var weeks = Math.floor(days / 7);
      var months = Math.floor(days / 30);
      var years = Math.floor(days / 365);

      var fyrir = 'Fyrir ';

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

  }, {
    key: 'onLoad',
    value: function onLoad() {
      var loading = document.createElement('h2');
      loading.classList.add('text');
      loading.appendChild(document.createTextNode('Hleð upplýsingum...'));
      this.categories.appendChild(loading);
    }

    // Hreinsar allt út af síðu nema heading mynd

  }, {
    key: 'clear',
    value: function clear() {
      while (this.categories.hasChildNodes()) {
        this.categories.removeChild(this.categories.firstChild);
      }
    }
  }]);

  return Videos;
}();
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var url = document.URL.toString();
  if (url.indexOf('player.html') !== -1) {
    var player = new Player();
    player.load();
  } else {
    var videos = new Videos();
    videos.load();
  }
});

//# sourceMappingURL=script-compiled.js.map