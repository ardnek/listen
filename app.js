"use strict";

jQuery.getJSON('data.json', function(tracks) {

  var $tracksTemplate = $('#tracksTemplate').html();

  var newHTML = Mustache.to_html($tracksTemplate, tracks);

  $('.player').html(newHTML);
});


$( document ).ready(function() {


  // var output="id";
  // for (var i in data.users) {
  //   output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month+"</li>";
  // }
  // output+="</ul>";
  //
  // document.getElementById("placeholder").innerHTML=output;
  //
  //
  // $.each(data, function(key, value) {
  //   alert(value.id + ", " + value.title + ", " + value.path);
  // });



$('.container').on('click', '.fa-play', function () {
  $(this).removeClass('fa-play').addClass('fa-stop');
  var music_counter = $(this).closest("article div h2").attr("id");
  var music_final = music_counter - 1;
  $("audio").get(music_final).play();
});

$('.container').on('click', '.fa-stop', function() {
  $(this).removeClass('fa-stop').addClass('fa-play');
  var music_counter = $(this).closest("h2").attr("id");
  var music_final = music_counter - 1;
  $("audio").get(music_final).pause();
  console.log($("audio"));

});

});





// $('.container').on('click', function() {
//   var track = $(this).data("track");
//   var element = $(this).hasClass('fa-pause')
//   if(element){
//     SC.stream("/tracks/" + track, function(sound) {
//       audio = sound;
//       soundManager.stopAll();
//       audio.play();
//     })
//   } else {
//     audio.pause();
//   }
// });
// });
