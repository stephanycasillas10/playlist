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
    name:"The Less I Know The Better",
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

let songs=[songOne, songTwo, songThree]

songs.forEach(function(song) {
    $('.content').append("<div class='song'>" + "<span>" + song.name + "</span>" + "<span>" + song.artist + "</span>" + "<span>" + song.runtime + "</span>"+ "<span>" + `<img src="${song.songImg}" height=100px width=100px />` + "</span>" + "<span>"+ `<a href="${song.songLink}"> Music Video </a>` + "</span>" + "</div>");
});






// $('.content').append("<span>" + songOne.name + "</span>" + "<span>" + songOne.artist + "</span>" + "<span>" + songOne.runtime + "</span>"+ "<span>" + `<img src="${songOne.songImg}" height=100px width=100px />` + "</span>" + "<span>"+ `<a href="${songOne.songLink}"> Music Video </a>` + "</span>");

// $('.songTwo').append("<span>" + songTwo.name + "</span>" + "<span>" + songTwo.artist + "</span>" + "<span>" + songTwo.runtime + "</span>"+ "<span>" + `<img src="${songTwo.songImg}" height=100px width=100px />` + "</span>" + "<span>"+ `<a href="${songTwo.songLink}"> Music Video </a>` + "</span>");

// $('.songThree').append("<span>" + songThree.name + "</span>" + "<span>" + songThree.artist + "</span>" + "<span>" + songThree.runtime + "</span>"+ "<span>" + `<img src="${songThree.songImg}" height=100px width=100px />` + "</span>" + "<span>"+ `<a href="${songThree.songLink}"> Music Video </a>` + "</span>");




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