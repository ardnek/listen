"use strict";

// (Path, Callback)
$( document ).ready(function() {
  $.getJSON('data.json', function(tracks) {
    var $tracksTemplate = $('#tracksTemplate').html();
    var newHTML = Mustache.to_html($tracksTemplate, tracks);
    $('.player').html(newHTML);
  });

  $('.player').on('click', '.fa-play', function () {
    $('.fa-stop').removeClass('fa-stop').addClass('fa-play');
    $(this).removeClass('fa-play').addClass('fa-stop');

    var title = 'Now playing: <em>' + $(this).attr('data-title') + '</em>';
    $('.playerHeader h2').html(title);

    var file = 'tracks/' + $(this).attr('data-file') + '.mp3';
    $('audio').attr('src', file);
    $('audio')[0].play();
  });


  $('.player').on('click', '.fa-stop', function() {
    $(this).removeClass('fa-stop').addClass('fa-play');

    var title = 'Select a song!';
    $('.playerHeader h2').html(title);

    $('audio')[0].pause();
  });

});
