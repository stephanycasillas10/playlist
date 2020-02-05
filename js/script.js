var songNames = ["Lo que siento", "The Less I know the Better", "Sugar"];
var songArtists = ["Cuco", "Tame Impala", "Brockhampton"];
var songLength = [""];
var songImg = [];
var songLink = [];

songNames.forEach(function(song){
    $('.songNames').append(song + " ");
});

songArtists.forEach(function(Artist){
    $('.songArtists').append(Artist);
});

songLength.forEach(function(Length){
    $('.songLength').append(Length);
});

songImg.forEach(function(){
    $('.songImg').append();
})