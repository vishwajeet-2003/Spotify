console.log("welcome to spotify");
let masterPlay = document.querySelector("#button");
let progressBar = document.querySelector("#PB");
let audioElement = new Audio("./music/1.mp3");
let isPlaying = false;

masterPlay.addEventListener("click", () => {
    if (isPlaying == false) {
        console.log("button is clicked");
        audioElement.play();
        console.log("song is playing");
        isPlaying = true;
        masterPlay.innerHTML = "Pause";
    } else {
        console.log("button is clicked");
        audioElement.pause();
        console.log("song is paused");
        isPlaying = false;
        masterPlay.innerHTML = "Play";
    }
});

audioElement.addEventListener("timeupdate", () => {
    console.log("progress");
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    progressBar.value = progress;
});

progressBar.addEventListener("click" , () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})