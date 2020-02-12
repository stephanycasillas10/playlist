var songNames = ["Lo que siento", "The Less I know the Better", "SUGAR"];
var songArtists = ["Cuco", "Tame Impala", "Brockhampton"];
var songLength = [];
var songImg = [];
var songLink = [];

songNames.forEach(function(song){
    $('.songList').append("<p>" + song + "</p>");
});

songArtists.forEach(function(Artist){
    $('.artistList').append("<p>" + Artist + "</p>");
});

songLength.forEach(function(Length){
    
});

songImg.forEach(function(imgURL){
    $('.songImg').append("<img>" +image + "</img>");
});