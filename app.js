"use strict";

// make an AJAX call to data.json
jQuery.getJSON('data.json', function(tracks) {
  var $tracksTemplate = $('#tracksTemplate').html();
  var newHTML = Mustache.to_html($tracksTemplate, tracks);
  $('.player').html(newHTML);
});

$( document ).ready(function() {
  $('.player').on('click', '.fa-play', function () {
    $(this).removeClass('fa-play').addClass('fa-stop');
    var music_counter = $(this).closest("article div h2").attr("id") -1;
    $('audio').get(music_counter).play();
  });

  $('.player').on('click', '.fa-stop', function() {
    $(this).removeClass('fa-stop').addClass('fa-play');
    var music_counter = $(this).closest("article div h2").attr("id") -1;
    $('audio').get(music_counter).pause();
    console.log($('audio'));
  });

});
