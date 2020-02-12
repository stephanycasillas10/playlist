var songNames = ["Lo que siento", "The Less I know the Better", "SUGAR"];
var songArtists = ["Cuco", "Tame Impala", "Brockhampton"];
var songLength = [];
var songImg = ["https://cont-5.p-cdn.us/images/public/int/5/9/2/9/191061299295_1080W_1080H.jpg", "https://c.saavncdn.com/807/Currents-English-2015-500x500.jpg", "https://www.guitartabsexplorer.com/images/tabs/brockhampton_sugar.jpg"];
var songLink = [];

songNames.forEach(function(song){
    $('.songList').append("<h4>" + song + "</h4>");
    $('.songList').css("font-size", "20px");
    $('.songList').css("font-family", "Quicksand");
});

songArtists.forEach(function(Artist){
    $('.artistList').append("<p>" + Artist + "</p>");
    $('.artistList').css("font-size", "20px");
    $('.artistList').css("font-family", "Quicksand");
});

songLength.forEach(function(Length){
    
});

songImg.forEach(function(imgURL){
    $('.songImg').append("<img src=" + imgURL + ">");
    $('img').css("width", "70px", "height", "70px")
    
});