var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
let ready;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player");
  ready = true;
}

const int = setInterval(() => {
  if (!ready) return;
  if (!player?.playVideo) return;
  player.playVideo();
  player.unMute();
  clearInterval(int);
}, 1000);
