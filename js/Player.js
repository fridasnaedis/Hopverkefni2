class Player {


  //látum smiðinn taka við ID á videóinu = querystring
  constructor() {
    this.player = document.querySelector('.player');
  }

  //setja þetta í SCC
  createButton(buttonName) {
    let button = document.createElement('button');
    button.classList.add(buttonName);
    this.player.appendChild(button);
      console.log(buttonName);
    switch(buttonName) {

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

  //hér þrufum við að taka við ID á videóinu og tengja við data
  load() {


  /**const title = document.getElementById('title');
    document.appendChild(document.createTextNode('Big Bunny'));
**/

    //video
    //nota data.videos[id].video ekki beinann link
    const source = './videos/bunny.mp4';
    const video = document.createElement('div');
    //add classlist?
    const currentVideo = document.createElement('video');
    currentVideo.classList.add('video');
    currentVideo.src = source;
    video.appendChild(currentVideo);
    this.player.appendChild(video);


    //gera í css
    currentVideo.setAttribute("type", "video/mp4");
    currentVideo.setAttribute("height", "846");
    currentVideo.setAttribute("width", "565");
    currentVideo.setAttribute('poster', './videos/bunny.png'); //data.videos.poster

    //gera takka
    const buttons = ['backButton', 'playButton', 'muteButton',
                      'fullscrButton', 'nextButton'];

    buttons.forEach(item => {
      this.createButton(item);
    });
  }


  //Meðan vídeó er ekki að spila er sýnt overlay með play takka í miðju og
  //gegnsæum bakgrunn ( rgba(0, 0, 0, 0.2) í fyrirmynd).
  overlay() {
    // mun verða að array shitti seinna líklegast
    const vid = './videos/bunny.mp4';

    if (video.paused) {
      vid.play();
      console.log('spilastu fucboi');
    }
  }


  //Ef vídeó er ekki til ( id er ekki í videos.json ) er skilaboð um það birt.
  errorMessage() {

  }

  /***********PLAYER CONTROLS**************/

  //Spila takki, ef videó er ekki að spila er það spilað,
  //annars er pásu táknmynd sýnd og vídeó pásað
  //querystring, t.d. video.html?id=1
  playButton() {
    console.log('ýtti á play');

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

    //video.currentTime(video.currentTime() + 3);


  }

  //Til baka takki, þegar ýtt er á hann og myndband er að spila,
  // er það fært til baka um 3 sekúndur eða á byrjun
  backButton() {
    console.log('ýtti á back');

  }

  //Slökkva á hljóði takki, ef hljóð er að spila er slökkt á því annars öfugt
  muteButton() {

    console.log('ýtti á mute');
    const video = document.querySelector('.video');

    if(video.muted) {
        video.muted = false;
        //this.video.classList.remove('.mute');
        }
    else {
          video.muted = true;
        //  this.video.classList.add('.mute');

}

  }
}
