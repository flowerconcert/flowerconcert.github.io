var song = document.getElementById('song');
var isPlaying = true;

$(".vol").click(function(){
  $(".bi-volume-down").toggleClass("d-none");
  $(".bi-volume-mute").toggleClass("d-none");
  song.muted = !song.muted;
});

$(".play").click(function(){
  if (isPlaying) {
    song.pause();
    $(".bi-pause").addClass("d-none");
    $(".bi-play").removeClass("d-none");
  } else {
    song.play();
    $(".bi-pause").removeClass("d-none");
    $(".bi-play").addClass("d-none");
  }
  isPlaying = !isPlaying
});


song.addEventListener("playing", function() {
   $(".bi-pause").removeClass("d-none");
   $(".bi-play").addClass("d-none");
   isPlaying = true;
 }, true);

 song.addEventListener('canplay', (event) => {
   $(".loading").addClass("d-none");
   $(".bi-pause").addClass("d-none");
   $(".bi-play").removeClass("d-none");
   isPlaying = false;
 });
