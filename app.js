"use strict";

// (Path, Callback)

$( document ).ready(function() {

  $.getJSON('data.json', function(tracks) {
    console.log("json received");

    var $tracksTemplate = $('#tracksTemplate').html();
    var newHTML = Mustache.to_html($tracksTemplate, tracks);
    $('.player').html(newHTML);
  });

  console.log("after getJSON");

  $('.player').on('click', '.fa-play', function () {

    $('.fa-stop').removeClass('fa-stop').addClass('fa-play');

    // `this` refers to the actual HTML element the user clicked on...
    $(this).removeClass('fa-play').addClass('fa-stop');
    // var music_counter = $(this).closest("article div h2").attr("id") -1;
    // $('audio').get(music_counter).play();
  });

  console.log("after on Play");

  $('.player').on('click', '.fa-stop', function() {
    $(this).removeClass('fa-stop').addClass('fa-play');
    var music_counter = $(this).closest("article div h2").attr("id") -1;
    $('audio').get(music_counter).pause();
    console.log($('audio'));
  });

  console.log("after on Stop");

});

console.log("after on Ready");
