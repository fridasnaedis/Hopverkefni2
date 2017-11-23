document.addEventListener('DOMContentLoaded', () => {
  const url = document.URL.toString();
  if (url.indexOf('player.html') !== -1) {
    const player = new Player();
    player.load();
  } else {
    const videos = new Videos();
    videos.load();
  }
});
