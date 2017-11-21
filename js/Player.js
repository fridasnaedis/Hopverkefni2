class Player{


  //látum smiðinn taka við ID á videóinu = querystring
  constructor() {
    this.player = document.querySelector('.player');
  }


//Býr til takka, loader myndum
//Þarf að laga það að myndirnar birtist í html-inu
// Myndindar eru hvítar, svo til að þær sjáist þarf background =/= white
  createButton(buttonName){

    const buttons = document.createElement('div');
    const button = document.createElement('IMG');
    // nota buttonName til að fá alla takkana, í stað bara einn
    button.src = buttonName;
    button.setAttribute("height", "28");
    button.setAttribute("width", "110");
    button.setAttribute("alt", "javascript button");
    buttons.appendChild(button);
    this.player.appendChild(buttons);

    if (buttonName = './img/back.svg') {
      console.log('hvað er i gangi');
      paused();
    }

    /**á að líta svona út í HTML-inu
    <img name="backButton" src="/back.svg" width="110" height="28" border="0"
    alt="javascript button">
    **/
  }

  //hér þrufum við að taka við ID á videóinu og tengja við data
  load(){

    /**
    const title = document.getElementById('title';)
    title.document.createElement(createTextNode(data.videos[id].title));
    **/

    //video
    //nota data.videos[id].video ekki beinann link
    const source = './videos/bunny.mp4';
    const video = document.createElement('div');
    //add classlist?
    const currentVideo = document.createElement('video');
    //add classlist?
    currentVideo.src = source;
    currentVideo.setAttribute("type", "video/mp4");
    currentVideo.setAttribute("height", "640");
    currentVideo.setAttribute("width", "365");
    currentVideo.setAttribute("controls", "autoplay");

    video.appendChild(currentVideo);
    this.player.appendChild(video);

    //bý til JS hlust fyrir hvern takka
    const backButton =  this.createButton('./img/back.svg');
    const playButton = this.createButton('./img/play.svg');
    const muteButton = this.createButton('./img/mute.svg');
    const fullscrButton = this.createButton('./img/fullscreen.svg');
    const nextButton = this.createButton('./img/next.svg');

  }

  //Meðan vídeó er ekki að spila er sýnt overlay með play takka í miðju og
  //gegnsæum bakgrunn ( rgba(0, 0, 0, 0.2) í fyrirmynd).
  paused(){
    // mun verða að array shitti seinna líklegast
    const vid = './videos/bunny.mp4';

    if (video.paused) {
      vid.play();
      console.log('spilastu fucboi');
    }
  }


  //Ef vídeó er ekki til ( id er ekki í videos.json ) er skilaboð um það birt.
  errorMessage(){

  }



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
  }**/
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
    **/
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
    **/
  }

}
