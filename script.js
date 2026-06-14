console.log("Welcome To Spotify");

// Variables

let songIndex = 0;

let audioElement = new Audio("songs/Aaya Sher.mp3");

let masterPlay = document.getElementById("masterPlay");

let myProgressBar = document.getElementById("myprogress");

let gif = document.getElementById("gif");

let masterSongName =
document.getElementById("masterSongName");

let songItemContainer =
document.querySelector(".songitemContainer");

// Songs

let songs = [

{
    SongName:"Aaya Sher",
    filePath:"songs/Aaya Sher.mp3",
    coverPath:"coverphotos/AayaSher.jpg",
    duration:"4:47"
},

{
    SongName:"Ayudha Pooja",
    filePath:"songs/Ayudha Pooja.mp3",
    coverPath:"coverphotos/AyudhaPooja.jpg",
    duration:"2:55"
},

{
    SongName:"Chinni Gundelo",
    filePath:"songs/Chinni Gundelo.mp3",
    coverPath:"coverphotos/chinnigundelo.jpg",
    duration:"3:39"
},

{
    SongName:"Chuttamalle",
    filePath:"songs/Chuttamalle.mp3",
    coverPath:"coverphotos/Chuttamalle.jpg",
    duration:"3:44"
},

{
    SongName:"Godari Gattu",
    filePath:"songs/Godari Gattu.mp3",
    coverPath:"coverphotos/Godarigattumeedha.jpg",
    duration:"4:09"
},

{
    SongName:"Hai Re",
    filePath:"songs/Hai Re.mp3",
    coverPath:"coverphotos/hai re.jpg",
    duration:"3:32"
},

{
    SongName:"Odiyamma",
    filePath:"songs/Odiyamma.mp3",
    coverPath:"coverphotos/odiyamma.jpg",
    duration:"3:17"
},

{
    SongName:"Samayama",
    filePath:"songs/Samayama.mp3",
    coverPath:"coverphotos/samayama.jpg",
    duration:"3:22"
}

];

// Generate Song List Automatically

songs.forEach((song,index)=>{

    songItemContainer.innerHTML += `

    <div class="songitem">

        <img src="${song.coverPath}" alt="">

        <span>${song.SongName}</span>

        <span class="songlistplay">

            <span class="timestamp">
                ${song.duration}
            </span>

            <i class="fa-regular fa-circle-play songItemPlay"
               id="${index}">
            </i>

        </span>

    </div>

    `;
});

// Song Play Buttons

let songItemPlay =
Array.from(document.getElementsByClassName("songItemPlay"));

function makeAllPlays(){

    songItemPlay.forEach((element)=>{

        element.classList.remove("fa-circle-pause");

        element.classList.add("fa-circle-play");
    });
}

// Master Play

masterPlay.addEventListener("click",()=>{

    if(audioElement.paused || audioElement.currentTime<=0){

        audioElement.play();

        masterPlay.classList.remove("fa-circle-play");

        masterPlay.classList.add("fa-circle-pause");

        gif.style.opacity = 1;
    }
    else{

        audioElement.pause();

        masterPlay.classList.remove("fa-circle-pause");

        masterPlay.classList.add("fa-circle-play");

        gif.style.opacity = 0;
    }
});

// Progress Bar

audioElement.addEventListener("timeupdate",()=>{

    let progress =
    parseInt(
        (audioElement.currentTime /
        audioElement.duration) * 100
    );

    myProgressBar.value = progress;
});

// Seek

myProgressBar.addEventListener("change",()=>{

    audioElement.currentTime =
    (myProgressBar.value *
    audioElement.duration)/100;
});

// Individual Song Click

songItemPlay.forEach((element)=>{

    element.addEventListener("click",()=>{

        makeAllPlays();

        songIndex = parseInt(element.id);

        element.classList.remove("fa-circle-play");

        element.classList.add("fa-circle-pause");

        audioElement.src =
        songs[songIndex].filePath;

        masterSongName.innerText =
        songs[songIndex].SongName;

        audioElement.currentTime = 0;

        audioElement.play();

        gif.style.opacity = 1;

        masterPlay.classList.remove("fa-circle-play");

        masterPlay.classList.add("fa-circle-pause");
    });

});

// Next

document.getElementById("next")
.addEventListener("click",()=>{

    if(songIndex >= songs.length-1){

        songIndex = 0;
    }
    else{

        songIndex++;
    }

    audioElement.src =
    songs[songIndex].filePath;

    masterSongName.innerText =
    songs[songIndex].SongName;

    audioElement.currentTime = 0;

    audioElement.play();

    masterPlay.classList.remove("fa-circle-play");

    masterPlay.classList.add("fa-circle-pause");
});

// Previous

document.getElementById("previous")
.addEventListener("click",()=>{

    if(songIndex <= 0){

        songIndex = songs.length-1;
    }
    else{

        songIndex--;
    }

    audioElement.src =
    songs[songIndex].filePath;

    masterSongName.innerText =
    songs[songIndex].SongName;

    audioElement.currentTime = 0;

    audioElement.play();

    masterPlay.classList.remove("fa-circle-play");

    masterPlay.classList.add("fa-circle-pause");
});

// Auto Next Song

audioElement.addEventListener("ended",()=>{

    if(songIndex >= songs.length-1){

        songIndex = 0;
    }
    else{

        songIndex++;
    }

    audioElement.src =
    songs[songIndex].filePath;

    masterSongName.innerText =
    songs[songIndex].SongName;

    audioElement.currentTime = 0;

    audioElement.play();
});