'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Videos = function () {
  function Videos() {
    _classCallCheck(this, Videos);

    this.cardlists = document.querySelector('.cardlists');
    this.player = document.querySelector('.player');
  }

  _createClass(Videos, [{
    key: 'load',
    value: function load() {
      console.log('Testy test :)');
      var request = new XMLHttpRequest();
      request.open('GET', './videos.json', true);

      var parent = this;

      request.onload = function () {
        var result = JSON.parse(request.response);
        parent.createCategories(result);
      };

      request.send();
    }
  }, {
    key: 'createCategories',
    value: function createCategories(data) {
      for (var i = 0; i < data.categories.length; i++) {
        console.log(data.categories[i].title);
        var categoryTitle = data.categories[i].title;
        var categoryVideos = data.categories[i].videos;
        var category = document.createElement('div');
        category.classList.add('.cardlist');
        var titleNode = document.createElement('h2');
        titleNode.appendChild(document.createTextNode(categoryTitle));
        category.appendChild(titleNode);
        createVideos(data, currCategory);

        this.cardlists.appendChild(category);
      }
    }
  }, {
    key: 'createVideos',
    value: function createVideos(data, currCategory) {
      for (var i = 0; i < currCategory.videos.length; i++) {
        console.log(data.videos[currCategory.videos[i]]);
        var videoId = currCategory.videos[i];
        console.log('id : ' + videoId);
        var videoTitle = data.videos[videoId].title;
        console.log('Title : ' + videoTitle);
        var videoAge = data.videos[videoId].created;
        console.log('Age : ' + videoAge);
        var videoPoster = data.videos[videoId].poster;
        console.log('poster : ' + videoPoster);
      }
    }
  }]);

  return Videos;
}();

document.addEventListener('DOMContentLoaded', function () {
  console.log('Wowsa');
  var videos = new Videos();
  videos.load();
});

//# sourceMappingURL=script-compiled.js.map