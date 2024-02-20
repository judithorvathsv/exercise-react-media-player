const Player = ({ audioUrl, imgUrl, clickedSongObject }: { audioUrl: string; imgUrl: string; clickedSongObject: any }) => {
  //start music
  let playMusic = (e: any) => {
    let audio = e.target.parentElement.parentElement.children[0];
    audio.src = audioUrl;
    if (e.target.classList.contains("pauseButton")) {
      audio.play();
      e.target.classList.remove("pauseButton");
      e.target.classList.add("startButton");
    } else {
      //stop music
      audio.pause();
      e.target.classList.remove("startButton");
      e.target.classList.add("pauseButton");
    }
  };

  return (
    <section id="player">
      <audio></audio>
      <img id="playerPicture" src={imgUrl} alt="" />
      <h2 id="playedSongtitle">{clickedSongObject?.song}</h2>
      <h3 id="artist">{clickedSongObject?.performedBy}</h3>
      <h4 id="album">{clickedSongObject?.album}</h4>
      <input id="slider" type="range" min="1" max="100" value="0" />
      <div id="timesDiv">
        <span id="elapsedTime">00:00</span>
        <span id="timeLength">00:00</span>
      </div>
      <div id="buttonsDiv">
        <span id="goBackButton" className="material-symbols-outlined">
          arrow_back_ios_new
        </span>
        <span id="goForwardButton" className="material-symbols-outlined">
          arrow_forward_ios
        </span>
        <span id="pauseAndStartButton" className="pauseButton material-symbols-outlined" onClick={playMusic}>
          not_started
        </span>
        <span id="loopButton" className="material-symbols-outlined">
          laps
        </span>
        <span id="shuffleButton" className="material-symbols-outlined">
          shuffle
        </span>
      </div>
      <span hidden>{"playlistIndex"}</span>
    </section>
  );
};

export default Player;
