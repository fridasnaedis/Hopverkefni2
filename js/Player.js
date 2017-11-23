class Player {
  constructor() {
    this.player = document.querySelector('.player');
  }

  //  býr til takka og setur á þá eventlistener

  createButton(buttonName) {
    const button = document.createElement('button');
    button.classList.add(buttonName);
    button.classList.add('button');
    this.buttons.appendChild(button);
    switch (buttonName) {
      case 'playButton':
        button.addEventListener('click', this.playButton.bind(this));
        break;
      case 'muteButton':
        button.addEventListener('click', this.muteButton.bind(this));
        break;
      case 'nextButton':
        button.addEventListener('click', this.nextButton.bind(this));
        break;
      case 'backButton':
        button.addEventListener('click', this.backButton.bind(this));
        break;
      case 'fullscrButton':
        button.addEventListener('click', this.fullscrButton.bind(this));
        break;
      default:
    }
  }

  // náum í JSON

  load() {
    const request = new XMLHttpRequest();
    request.open('GET', './videos.json', true);

    request.onload = () => {
      this.data = JSON.parse(request.response);
      this.createHtml(this.data);
    };

    request.send();
  }

  // búum til HTML og takka

  createHtml(data) {
    // get id from html link

    const idNr = (window.location.search);
    const id = parseInt(idNr.match(/\d+/)[0], 10);

    // titleNode

    const title = document.createElement('h2');
    const titleNode = document.createTextNode(data.videos[id - 1].title);
    title.appendChild(titleNode);
    title.classList.add('text', 'text__playerTitle');
    this.player.appendChild(title);

    // videobox

    const videoBox = document.createElement('div');
    videoBox.classList.add('videoBox');
    this.player.appendChild(videoBox);

    // video

    const source = data.videos[id - 1].video;
    const currentVideo = document.createElement('video');
    currentVideo.classList.add('video');
    currentVideo.src = source;
    title.appendChild(currentVideo);
    videoBox.appendChild(currentVideo);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const overlayButton = document.createElement('div');
    overlayButton.classList.add('overlayButton', 'playButton');
    overlay.appendChild(overlayButton);
    videoBox.appendChild(overlay);
    const videoHandler = document.querySelector('.videoBox');
    videoHandler.addEventListener('click', this.playButton.bind(this));

    this.buttons = document.createElement('div');
    this.buttons.classList.add('buttons');
    this.player.appendChild(this.buttons);

    const back = document.createElement('a');
    back.classList.add('text', 'text__home');
    back.setAttribute('href', '..');
    back.appendChild(document.createTextNode('Til baka'));
    this.player.appendChild(back);

    currentVideo.addEventListener('ended', this.reset.bind(this));

    // gera takka
    const buttons = ['backButton', 'playButton', 'muteButton',
      'fullscrButton', 'nextButton'];

    buttons.forEach((item) => {
      this.createButton(item);
    });
  }

  // Ef vídeó er ekki til ( id er ekki í videos.json ) er skilaboð um það birt.

  errorMessage() {

  }

  reset() {
    const video = document.querySelector('.video');
    video.currentTime = 0;
    const overlay = document.querySelector('.overlay');
    const overlayButton = document.querySelector('.overlayButton');
    const button = document.querySelector('.pauseButton');
    button.classList.remove('pauseButton');
    button.classList.add('playButton');
    overlay.classList.remove('overlay__hidden');
    overlayButton.classList.add('playButton');
  }

  // Spila takki, ef videó er ekki að spila er það spilað,
  // annars er pásu táknmynd sýnd og vídeó pásað
  // querystring, t.d. video.html?id=1

  playButton() {
    const video = document.querySelector('.video');
    const overlay = document.querySelector('.overlay');
    const overlayButton = document.querySelector('.overlayButton');
    if (video.paused) {
      const button = document.querySelector('button.playButton');
      video.play();
      if (button && button.classList.contains('playButton')) {
        button.classList.remove('playButton');
        button.classList.add('pauseButton');
        overlayButton.classList.remove('playButton');
        overlay.classList.add('overlay__hidden');
      }
    } else {
      const button = document.querySelector('.pauseButton');
      video.pause();
      if (button && button.classList.contains('pauseButton')) {
        button.classList.remove('pauseButton');
        button.classList.add('playButton');
        overlay.classList.remove('overlay__hidden');
        overlayButton.classList.add('playButton');
      }
    }
  }

  // Fullscreen takki, setur vídeó í fullscreen (athuga þarf stuðning og gera
  // ráðstafanir með requestFullscreen API)

  fullscrButton() {
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

  // Áfram takki, þegar ýtt er á hann og myndband er að spila,
  // er það fært áfram um 3 sekúndur eða á enda

  nextButton() {
    const video = document.querySelector('.video');
    video.currentTime += 3;
  }

  // Til baka takki, þegar ýtt er á hann og myndband er að spila,
  // er það fært til baka um 3 sekúndur eða á byrjun+

  backButton() {
    const video = document.querySelector('.video');
    video.currentTime -= 3;
  }

  // Slökkva á hljóði takki, ef hljóð er að spila er slökkt á því annars öfugt

  muteButton() {
    const video = document.querySelector('.video');
    if (video.muted) {
      const button = document.querySelector('.unmuteButton');
      video.muted = false;
      if (button && button.classList.contains('unmuteButton')) {
        button.classList.remove('unmuteButton');
        button.classList.add('muteButton');
      }
    } else {
      const button = document.querySelector('.muteButton');
      video.muted = true;
      if (button && button.classList.contains('muteButton')) {
        button.classList.remove('muteButton');
        button.classList.add('unmuteButton');
      }
    }
  }
}
