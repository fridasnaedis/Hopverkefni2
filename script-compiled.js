'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {

  //látum smiðinn taka við ID á videóinu = querystring
  function Player() {
    _classCallCheck(this, Player);

    this.cardlists = document.querySelector('.cardlists');
    this.player = document.querySelector('.player');
  }

  /**  <div id="video-container">
    <!-- Video -->
    <video id="video" width="640" height="365">
      <source src="videos/mikethefrog.webm" type="video/webm">
      <source src="videos/mikethefrog.ogv" type="video/ogv">
      <source src="videos/mikethefrog.mp4" type="video/mp4">
      <p>
        Your browser doesn't support HTML5 video.
        <a href="videos/mikethefrog.mp4">Download</a> the video instead.
      </p>
    </video>
    <!-- Video Controls -->
    <div id="video-controls">
      <button type="button" id="play-pause">Play</button>
      <input type="range" id="seek-bar" value="0">
      <button type="button" id="mute">Mute</button>
      <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
      <button type="button" id="full-screen">Full-Screen</button>
    </div>
  </div>**/

  _createClass(Player, [{
    key: 'createHtml',
    value: function createHtml() {

      //header
      /**
      const title = document.getElementById('title';)
      title.document.createElement(createTextNode(video.titile));
      **/

      //video
      var source = './bunny.mp4';
      var currentVideo = document.createElement('video');
      currentVideo.appendChild(document.createTextNode('helló'));
      currentVideo.scr = './bunny.mp4';
      currentVideo.setAttribute("type", "video/mp4");
      currentVideo.setAttribute("height", "640");
      currentVideo.setAttribute("width", "365");

      /**
      var videlem = document.createElement("video");
      const sourceMP4 = document.createElement("source");
      sourceMP4.type = "video/mp4";
      sourceMP4.src = "./bunny.mp4";
      videlem.appendChild(sourceMP4);
       this.player.appendChild(videlem);
      **/
      /**
        var backButton =  createButton('./back.svg');
       var nextButton = createButton('./next.svg');
       var fullscrButton = createButton('./fullscr.svg');
       var muteButton = createButton('./mute.svg');
       var playButton = createButton('./play.svg');
      **/
    }

    //Meðan vídeó er ekki að spila er sýnt overlay með play takka í miðju og
    //gegnsæum bakgrunn ( rgba(0, 0, 0, 0.2) í fyrirmynd).

  }, {
    key: 'paused',
    value: function paused() {}

    //Ef vídeó er ekki til ( id er ekki í videos.json ) er skilaboð um það birt.

  }, {
    key: 'errorMessage',
    value: function errorMessage() {}

    //Býr til takka, loader myndum

  }, {
    key: 'createButton',
    value: function createButton(buttonName) {

      var button = document.createElement('IMG');
      button.setAttribute("src", buttonName);
      button.setAttribute("height", "28");
      button.setAttribute("width", "110");
      button.setAttribute("alt", "javascript button");
      this.player.appendChild(button);

      /**á að líta svona út í HTML-inu
      <img name="backButton" src="/back.svg" width="110" height="28" border="0"
      alt="javascript button">
       <img name="nextButton" src="/next.svg" width="110" height="28" border="0"
      alt="javascript button">
        <img name="fullscrButton" src="/fullscren.svg" width="110" height="28" border="0"
      alt="javascript button">
       <img name="muteButton" src="/mute.svg" width="110" height="28" border="0"
      alt="javascript button">
       <img name="playButton" src="/play.svg" width="110" height="28" border="0"
      alt="javascript button">
      **/
    }
    /**
      //Fullscreen takki, setur vídeó í fullscreen (athuga þarf stuðning og gera
      //ráðstafanir með requestFullscreen API)
      fullScreen(){
        /**
        var elem = document.getElementById("myvideo");
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
            elem.classList.add('fullscren');
          }
    
      }
    
      //eða gera svona?
      function toggleFullScreen() {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
    
      //Áfram takki, þegar ýtt er á hann og myndband er að spila,
      //er það fært áfram um 3 sekúndur eða á enda
      jumpForward(){
    
      }
    
      //Til baka takki, þegar ýtt er á hann og myndband er að spila,
      // er það fært til baka um 3 sekúndur eða á byrjun
      jumpBackwards(){
    
      }
    
      //Slökkva á hljóði takki, ef hljóð er að spila er slökkt á því annars öfugt
       muteVolume(){
      /**  if(!muted){
          classList.add('muted');
          document.images["jsbutton"].src= "/unmute.jpg";
          return true;
        }
        else {
          classList.remove('muted');
        }
    
       }
       //Spila takki, ef videó er ekki að spila er það spilað,
       //annars er pásu táknmynd sýnd og vídeó pásað
       //querystring, t.d. video.html?id=1
      playVideo(id){
        /**
        // Video
        if(!id){
          errorMessage();
        }
        var video = document.getElementById("video");
    
      }
    
    **/

  }]);

  return Player;
}();
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
      for (var i = 0; i < data.categories.length; i++) {
        console.log(data.categories[i].title);
        var categoryTitle = data.categories[i].title;
        var categoryVideos = data.categories[i].videos;
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
      var currCategory = data.categories[0];
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
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('I AM KET');
  //console.log('Wowsa');
  var videos = new Videos();
  //const player = new Player();
  videos.load();
  //player.createHtml();
});

//# sourceMappingURL=script-compiled.js.map