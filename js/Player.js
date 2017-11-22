class Player {

  constructor() {
    this.player = document.querySelector('.player');
  }

  //býr til takka og setur á þá eventlistener
  createButton(buttonName) {
    let button = document.createElement('button');
    button.classList.add(buttonName);
    this.player.appendChild(button);
    console.log(buttonName);
    switch (buttonName) {

      case "playButton":
        button.addEventListener('click', this.playButton.bind(this));
        break;
      case "muteButton":
        button.addEventListener('click', this.muteButton.bind(this));
        break;
      case "nextButton":
        button.addEventListener('click', this.nextButton.bind(this));
        break;
      case "backButton":
        button.addEventListener('click', this.backButton.bind(this));
        break;
      case "fullscrButton":
        button.addEventListener('click', this.fullscrButton.bind(this));
        break;
      default:
        return;
    }
  }

  //náum í JSON
  load() {

    console.log('Testy test :)');
    const request = new XMLHttpRequest();
    request.open('GET', './videos.json', true);

    request.onload = () => {
      this.data = JSON.parse(request.response);
      this.createHtml(this.data);
    };

    request.send();
  }

  //búum til HTML og takka
  createHtml(data) {

    //get id from html link
    const idNr = (window.location.search);
    console.log(idNr);
    const id = parseInt(idNr.match(/\d+/)[0]);


    //titleNode
    const title = document.createElement('h2');
    const titleNode = document.createTextNode(data.videos[id - 1].title);
    title.appendChild(titleNode);
    this.player.appendChild(title);

    //video
    const source = data.videos[id - 1].video;
    const video = document.createElement('div');
    video.classList.add('player');
    const currentVideo = document.createElement('video');
    currentVideo.classList.add('video');
    currentVideo.src = source;
    video.appendChild(currentVideo);
    this.player.appendChild(video);


    /**gera í css
    currentVideo.setAttribute("type", "video/mp4");
    currentVideo.setAttribute("height", "846");
    currentVideo.setAttribute("width", "565");
    currentVideo.setAttribute('poster', './videos/bunny.png'); //data.videos.poster
**/

    //gera takka
    const buttons = ['backButton', 'playButton', 'muteButton',
      'fullscrButton', 'nextButton'
    ];

    buttons.forEach(item => {
      this.createButton(item);
    });
  }


  //Meðan vídeó er ekki að spila er sýnt overlay með play takka í miðju og
  //gegnsæum bakgrunn ( rgba(0, 0, 0, 0.2) í fyrirmynd).

  //Ef vídeó er ekki til ( id er ekki í videos.json ) er skilaboð um það birt.
  errorMessage() {

  }

  /***********PLAYER CONTROLS**************/

  //Spila takki, ef videó er ekki að spila er það spilað,
  //annars er pásu táknmynd sýnd og vídeó pásað
  //querystring, t.d. video.html?id=1
  playButton() {
    const video = document.querySelector('.video');
    if (video.paused) {
      const button = document.querySelector('.pauseButton');
      console.log('ýtti á play');
      video.play();
      button.classList.remove('pauseButton');
      button.classList.add('playButton');
      video.classList.add('overlay');
    } else {
      const button = document.querySelector('.playButton');
      video.pause();
      console.log('ýtti á pause');
      button.classList.remove('playButton');
      button.classList.add('pauseButton');
      video.classList.remove('overlay');
    }

  }

  //Fullscreen takki, setur vídeó í fullscreen (athuga þarf stuðning og gera
  //ráðstafanir með requestFullscreen API)
  fullscrButton() {

    console.log('ýtti á fullscreen');
    const video = document.querySelector('.video');

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

  //Áfram takki, þegar ýtt er á hann og myndband er að spila,
  //er það fært áfram um 3 sekúndur eða á enda
  nextButton() {
    console.log('ýtti á next');
    const video = document.querySelector('.video');
    video.currentTime += 3;
  }

  //Til baka takki, þegar ýtt er á hann og myndband er að spila,
  // er það fært til baka um 3 sekúndur eða á byrjun
  backButton() {

    console.log('ýtti á back');
    const video = document.querySelector('.video');
    video.currentTime -= 3;

  }

  //Slökkva á hljóði takki, ef hljóð er að spila er slökkt á því annars öfugt
  muteButton() {

    console.log('ýtti á mute');
    const video = document.querySelector('.video');

    if (video.muted) {
      const button = document.querySelector('.unmuteButton');
      video.muted = false;
      button.classList.remove('unmuteButton');
      button.classList.add('muteButton');
      //this.video.classList.remove('.mute');
    } else {
      const button = document.querySelector('.muteButton');
      video.muted = true;
      button.classList.remove('muteButton');
      button.classList.add('unmuteButton');
      //  this.video.classList.add('.mute');
    }
  }
}
