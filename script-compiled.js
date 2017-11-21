<<<<<<< HEAD
<<<<<<< HEAD
=======
"use strict";
<<<<<<< HEAD
=======
>>>>>>> e24fbc7a88e81148733a1fca158cc0e8488c44e0
=======
>>>>>>> f93d2f815f75da45af700f79372ec481cee5349b
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('I AM KET');
  //console.log('Wowsa');
  var videos = new Videos();
  videos.load();
});
<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
=======
>>>>>>> 6564dcd7b050b672f695a638fe497c2e10567836
>>>>>>> e24fbc7a88e81148733a1fca158cc0e8488c44e0
=======
"use strict";
>>>>>>> f93d2f815f75da45af700f79372ec481cee5349b
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Videos = function () {
  function Videos() {
    _classCallCheck(this, Videos);

    this.categories = document.querySelector('.categories');
    this.player = document.querySelector('.player');
  }

  _createClass(Videos, [{
    key: 'createCategories',
    value: function createCategories(data) {
      for (var i = 0; i < data.categories.length; i++) {
        var categoryTitle = data.categories[i].title;
        var categoryVideos = data.categories[i].videos;
        var category = document.createElement('div');
        category.classList.add('.category');
        var titleNode = document.createElement('h2');
        titleNode.appendChild(document.createTextNode(categoryTitle));
        category.appendChild(titleNode);

        var cardlist = document.createElement('div');
        cardlist.classList.add('.cardlist');
        category.appendChild(cardlist);

        var currCategory = data.categories[i].videos;

        for (var j = 0; j < currCategory.length; j++) {
          var videoId = currCategory[j] - 1;
          var currVideo = this.createVideos(data, videoId);
          cardlist.appendChild(currVideo);
        }

        this.categories.appendChild(category);
      }
    }
  }, {
    key: 'load',
    value: function load() {
      var _this = this;

      console.log('Testy test :)');
      var request = new XMLHttpRequest();
      request.open('GET', './videos.json', true);

      request.onload = function () {
        _this.data = JSON.parse(request.response);
        _this.createCategories(_this.data);
      };

      request.send();
    }
  }, {
    key: 'createVideos',
    value: function createVideos(data, videoId) {

      console.log('id : ' + videoId);
      var videoName = data.videos[videoId].title;
      console.log('Title : ' + videoName);
      var videoDuration = data.videos[videoId].duration;
      console.log('duration : ' + videoDuration);
      var videoAge = data.videos[videoId].created;
      console.log('Age : ' + videoAge);
      var videoImgUrl = data.videos[videoId].poster;
      console.log('poster : ' + videoImgUrl);

      var videoCard = document.createElement('div');
      videoCard.classList.add('.card');

      var videoPoster = document.createElement('div');
      videoPoster.classList.add('.videoPoster');
      videoCard.appendChild(videoPoster);

      var videoImg = document.createElement('img');
      videoImg.src = videoImgUrl;
      videoPoster.appendChild(videoImg);

      var videoLength = document.createElement('div');
      var lengthNode = document.createTextNode(this.parseLength(videoDuration));
      videoLength.appendChild(lengthNode);
      videoPoster.appendChild(videoLength);

      var videoDescription = document.createElement('div');
      videoDescription.classList.add('.videoDescription');
      videoCard.appendChild(videoDescription);

      var videoTitle = document.createElement('h3');
      videoTitle.classList.add('.videoTitle');
      videoTitle.appendChild(document.createTextNode(videoName));
      videoDescription.appendChild(videoTitle);

      var videoDate = document.createElement('p');
      videoDate.classList.add('.videoDate');
      var dateNode = document.createTextNode(this.parseDate(videoAge));
      videoDate.appendChild(dateNode);
      videoDescription.appendChild(videoDate);

      return videoCard;
    }
  }, {
    key: 'parseLength',
    value: function parseLength(duration) {
      // Fríða lagar
      return duration;
    }
  }, {
    key: 'parseDate',
    value: function parseDate(videoAge) {
      // Fríða lagar
      return videoAge;
    }
  }]);

  return Videos;
}();

//# sourceMappingURL=script-compiled.js.map