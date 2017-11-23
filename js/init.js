document.addEventListener('DOMContentLoaded', () => {
  console.log('I AM KET');
  const videos = new Videos();
  const player = new Player();
  videos.load();
  player.load();
});
