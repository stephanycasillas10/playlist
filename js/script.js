// var songNames = ["Lo que siento", "The Less I know the Better", "SUGAR"];
// var songArtists = ["Cuco", "Tame Impala", "Brockhampton"];
// var songruntime = ["5:12"];
// var songImg = ["https://cont-5.p-cdn.us/images/public/int/5/9/2/9/191061299295_1080W_1080H.jpg", "https://c.saavncdn.com/807/Currents-English-2015-500x500.jpg", "https://www.guitartabsexplorer.com/images/tabs/brockhampton_sugar.jpg"];
// var songLink = [];

let songOne= {
    name:"Lo que Siento",
    artist:"Cuco",
    runtime:"5:12",
    songImg :"https://cont-5.p-cdn.us/images/public/int/5/9/2/9/191061299295_1080W_1080H.jpg",
    songLink:"https://www.youtube.com/watch?v=AjGkbFqi67c",
};

let songTwo= {
    name:"The less I know the Better",
    artist:"Tame Impala",
    runtime:"3:36",
    songImg:"https://c.saavncdn.com/807/Currents-English-2015-500x500.jpg",
    songLink:"https://www.youtube.com/watch?v=PvM79DJ2PmM",
};

let songThree={
    name:"SUGAR",
    artist:"Brockhampton",
    runtime:"3:25",
    songImg:"https://www.guitartabsexplorer.com/images/tabs/brockhampton_sugar.jpg",
    songLink:"https://www.youtube.com/watch?v=sZd-t5-I5uA",
};

$('.content').append("<div>" +"<div>" + songOne.name + "</div>" + "<div>" + songOne.artist + "</div>" +"</div>");

// songNames.forEach(function(song){
   
//     $('.songList').css("font-size", "20px");
//     $('.songList').css("font-family", "Quicksand");
// });

// songArtists.forEach(function(Artist){
//     $('.artistList').append("<p>" + Artist + "</p>");
//     $('.artistList').css("font-size", "20px");
//     $('.artistList').css("font-family", "Quicksand");
// });

// songLength.forEach(function(Length){
    
// });

// songImg.forEach(function(imgURL){
//     $('.songImg').append("<img src=" + imgURL + ">");
//     $('img').css("width", "70px", "height", "70px")
    
// });