"use strict";
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
    key: 'createCategories',
    value: function createCategories(data) {
      for (var _i = 0; _i < data.categories.length; _i++) {
        console.log(data.categories[_i].title);
        var categoryTitle = data.categories[_i].title;
        var categoryVideos = data.categories[_i].videos;
        var category = document.createElement('div');
        category.classList.add('.cardlist');
        var titleNode = document.createElement('h2');
        titleNode.appendChild(document.createTextNode(categoryTitle));
        category.appendChild(titleNode);
        this.createVideos(data);

        this.cardlists.appendChild(category);
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
    value: function createVideos(data) {
      var currCategory = data.categories[i];
      for (var _i2 = 0; _i2 < currCategory.videos.length; _i2++) {
        console.log(data.videos[currCategory.videos[_i2]]);
        var videoId = currCategory.videos[_i2];
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
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('I AM KET');
  //console.log('Wowsa');
  var videos = new Videos();
  videos.load();
});

//# sourceMappingURL=script-compiled.js.map