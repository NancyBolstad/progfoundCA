class MediaPlayer {

    constructor(userName, mediaType, playListArray) {
        this.userName = userName;
        this.mediaType = mediaType;
        this.btnPlay = "play";
        this.btnPlayListShow = "play list";
        this.btnShuffle = "shuffle";
        this.isShuffleModeOn = false;
        this.btnDownload = "download";
        this.playListArray = playListArray;
        this.defaultStartPlaying = this.playListArray[0];
    }

    openPlayer() {
        console.log("Hi " + this.userName + "! Welcome to use this " + this.mediaType + " player. Click the " + this.btnPlay + " button to play. Click the " + this.btnShuffle + " button to turn on or turn off the shuffle mode. Click the " + this.btnDownload + " button to download it. Click the " + this.btnPlayListShow + " to check the play list.");
    }

    randomMedia() {
        return this.playListArray[Math.floor((Math.random() * this.playListArray.length))];
    }

    shuffle() {
        console.log("The shuffle mode is demonstrated as below: ");
        for (var i = 0; i < 3; i++) {
            console.log(this.randomMedia() + " is playing now.");
        }
    }

    showPlaylist() {
        for (var i = 0; i < this.playListArray.length; i++) {
            console.log(i + 1 + ": " + this.playListArray[i]);
        }
    }

    pressBtn(btnName) {
        switch (btnName) {
            case btnName = this.btnPlay:
                console.log("Button " + this.btnPlay + " has been pressed. Playing " + this.defaultStartPlaying + " now.");
                break;
            case btnName = this.btnDownload:
                console.log("Button " + this.btnDownload + " has been pressed. Downloading the " + this.mediaType + " now.");
                break;
            case btnName = this.btnShuffle:
                if (this.isShuffleModeOn === false) {
                    console.log("Button " + this.btnShuffle + " has been pressed. Shuffle play mode is on now.");
                    this.isShuffleModeOn = true;
                    this.shuffle();
                    break;
                } else {
                    this.isShuffleModeOn = false;
                    console.log("Button " + this.btnShuffle + " has been pressed again. Shuffle play mode is off now.");
                    break;
                }
            case btnName = this.btnPlayListShow:
                console.log("Button " + this.btnPlayListShow + " has been pressed. The current play list has been shown as below.");
                this.showPlaylist();
        }
    }
}

function testMediaPlayer() {
    var videoPlayer = new MediaPlayer("User 1", "video", ["video1", "video2", "video4", "video5"]);
    var audioPlayer = new MediaPlayer("User 2", "audio", ["audio1", "audio2", "audio3"]);
    videoPlayer.openPlayer();
    videoPlayer.pressBtn("play list");
    videoPlayer.pressBtn("play");
    videoPlayer.pressBtn("download");
    videoPlayer.pressBtn("shuffle");
    videoPlayer.pressBtn("shuffle");
    videoPlayer.pressBtn("shuffle");
    audioPlayer.openPlayer();
    audioPlayer.pressBtn("play");
    audioPlayer.pressBtn("download");
    audioPlayer.pressBtn("shuffle");
}

testMediaPlayer();

/*
Result:
Hi User 1! Welcome to use this video player. Click the play button to play. Click the shuffle button to turn on or turn off the shuffle mode. Click the download button to download it. Click the play list to check the play list.
Button play list has been pressed. The current play list has been shown as below.
1: video1
2: video2
3: video4
4: video5
Button play has been pressed. Playing video1 now.
Button download has been pressed. Downloading the video now.
Button shuffle has been pressed. Shuffle play mode is on now.
The shuffle mode is demonstrated as below: 
video4 is playing now.
video2 is playing now.
video3 is playing now.
Button shuffle has been pressed again. Shuffle play mode is off now.
Button shuffle has been pressed. Shuffle play mode is on now.
The shuffle mode is demonstrated as below: 
video1 is playing now.
video2 is playing now.
video4 is playing now.
Hi User 2! Welcome to use this audio player. Click the play button to play. Click the shuffle button to turn on or turn off the shuffle mode. Click the download button to download it. Click the play list to check the play list.
Button play has been pressed. Playing audio1 now.
Button download has been pressed. Downloading the audio now.
Button shuffle has been pressed. Shuffle play mode is on now.
The shuffle mode is demonstrated as below: 
audio3 is playing now.
audio1 is playing now.
audio3 is playing now.
*/