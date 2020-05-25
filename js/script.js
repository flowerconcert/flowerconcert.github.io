var song = document.getElementById('song');
var isPlaying = true;

$(".vol").click(function(){
  $(".bi-volume-down").toggleClass("d-none");
  $(".bi-volume-mute").toggleClass("d-none");
  song.muted = !song.muted;
});


  $(".play").click(function(){
    $(".bi-pause").toggleClass("d-none");
    $(".bi-play").toggleClass("d-none");
    if (isPlaying) {
      song.pause();
    } else {
      song.play();
    }
    isPlaying = !isPlaying
  });

//   song.oncanplaythrough = function() {
//     $(".loading").addClass("d-none");
//     $(".play").removeClass("d-none");
//     $(".vol").removeClass("d-none");
// };
