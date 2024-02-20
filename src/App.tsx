import { useState } from "react";
import NavBar from "./NavBar";
import SongItem from "./SongItem";
import Player from "./Player";

let songs: Array<{ album: string; song: string; performedBy: string; albumPicture: string; id: number; source: string }> = [];

songs = [
  {
    album: "Jupiter",
    song: "Say_Goodbye_-_VITNE",
    performedBy: "VITNE",
    albumPicture: "Say_Goodbye_-_VITNE.jpg",
    id: 0,
    source: "Say_Goodbye_-_VITNE.mp3",
  },
  {
    album: "Jupiter",
    song: "Masquerade_-_VITNE",
    performedBy: "VITNE",
    albumPicture: "Say_Goodbye_-_VITNE.jpg",
    id: 1,
    source: "Masquerade_-_VITNE.mp3",
  },
  {
    album: "Jupiter",
    song: "Are_You_Real_-_VITNE",
    performedBy: "VITNE",
    albumPicture: "Say_Goodbye_-_VITNE.jpg",
    id: 2,
    source: "Are_You_Real__-_VITNE.mp3",
  },
  {
    album: "Eye Of The Storm",
    song: "Boys,_Girls,_Toys_&(_Words)",
    performedBy: "MODERN PITCH",
    albumPicture: "Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.jpg",
    id: 3,
    source: "Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.mp3",
  },
  {
    album: "Higher And Higher",
    song: "Higher_And_Higher_-_Scream_Inc",
    performedBy: "SCREAM INC.",
    albumPicture: "Higher_And_Higher_-_Scream_Inc.jpg",
    id: 4,
    source: "Higher_And_Higher_-_Scream_Inc.mp3",
  },
  {
    album: "Jupiter",
    song: "Mirror_-_VITNE",
    performedBy: "VITNE",
    albumPicture: "Say_Goodbye_-_VITNE.jpg",
    id: 5,
    source: "Mirror_-_VITNE.mp3",
  },
  {
    album: "Not_My_Problem",
    song: "Not_My_Problem_-_All_My_Friends_Hate_Me",
    performedBy: "All_My_Friends_Hate_Me",
    albumPicture: "Not_My_Problem_-_All_My_Friends_Hate_Me.jpg",
    id: 6,
    source: "Not_My_Problem_-_All_My_Friends_Hate_Me.mp3",
  },
  {
    album: "Apply Within",
    song: "Old_News_-_Hot_Fiction",
    performedBy: "Hot_Fiction",
    albumPicture: "Old_News_-_Hot_Fiction.jpg",
    id: 7,
    source: "Old_News_-_Hot_Fiction.mp3",
  },
  {
    album: "Kites",
    song: "Peyote_-_Kinematic",
    performedBy: "Kinematic",
    albumPicture: "Peyote_-_Kinematic.jpg",
    id: 8,
    source: "Peyote_-_Kinematic.mp3",
  },
  {
    album: "Kites",
    song: "Already_Here_-_Kinematic",
    performedBy: "Kinematic",
    albumPicture: "Peyote_-_Kinematic.jpg",
    id: 9,
    source: "Already_Here_-_Kinematic.mp3",
  },
  {
    album: "Encephalon",
    song: "Encephalon_-_VITNE.mp3",
    performedBy: "VITNE",
    albumPicture: "Enchaphalon-VITNE.jpg",
    id: 10,
    source: "Encephalon_-_VITNE.mp3",
  },
  {
    album: "Encephalon",
    song: "Encephalon_(Instrumental)_-_VITNE.mp3",
    performedBy: "VITNE",
    albumPicture: "Enchaphalon-VITNE.jpg",
    id: 11,
    source: "Encephalon_(Instrumental)_-_VITNE.mp3",
  },
  {
    album: "Special",
    song: "Special_-_Kinematic",
    performedBy: "Kinematic",
    albumPicture: "Special-Kinematic.jpg",
    id: 12,
    source: "Special_-_Kinematic.mp3",
  },
  {
    album: "Special",
    song: "Glide_-_Kinematic",
    performedBy: "Kinematic",
    albumPicture: "Special-Kinematic.jpg",
    id: 13,
    source: "Glide_-_Kinematic.mp3",
  },
  {
    album: "Special",
    song: "Dissipate_-_Kinematic",
    performedBy: "Kinematic",
    albumPicture: "Special-Kinematic.jpg",
    id: 14,
    source: "Dissipate_-_Kinematic.mp3",
  },
];

export function App() {
  let selectedSongs: Array<{ album: string; song: string; performedBy: string; albumPicture: string; id: number; source: string }> = [];
  let numberOfSongs = 10;
  let randomSongIndexes: number[] = [];

  function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function cleanSongName(songs: any, index: number): string {
    let songNameWithSpace = songs[index].song.replaceAll("_", " ");
    return songNameWithSpace.indexOf("-") >= 0 ? songNameWithSpace.substring(0, songNameWithSpace.indexOf("-")) : songNameWithSpace;
  }

  function cleanPerformedBy(songs: any, index: number): string {
    let performedByWithSpace = songs[index].performedBy.replaceAll("_", " ");
    return performedByWithSpace.indexOf("-") >= 0 ? performedByWithSpace.substring(0, performedByWithSpace.indexOf("-")) : performedByWithSpace;
  }

  let randomSongsStorage = localStorage.getItem("randomSongs");
  while (randomSongIndexes.length < numberOfSongs) {
    let randomIndex = randomIntFromInterval(1, songs.length);
    if (!randomSongIndexes.includes(randomIndex)) {
      randomSongIndexes.push(randomIndex);
      for (let i = 0; i < songs.length; i++) {
        if (songs[i].id == randomIndex) {
          songs[i].song = cleanSongName(songs, i);
          songs[i].performedBy = cleanPerformedBy(songs, i);

          if (randomSongsStorage == null || randomSongsStorage == undefined) {
            selectedSongs.push(songs[i]);
          }
        }
      }
    }
  }

  if (randomSongsStorage == null || randomSongsStorage == undefined) {
    localStorage.setItem("randomSongs", JSON.stringify(selectedSongs));
  } else {
    let randomSongsStorageString = JSON.parse(randomSongsStorage);
    randomSongsStorageString.forEach((song: any) => {
      selectedSongs.push(song);
    });
  }

  const [selectedSongId, setSelectedSongId] = useState(0);
  const [selectedSongAudioUrl, setSelectedSongAudioUrl] = useState("");

  const handleClickedSong = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    let clickedSongDiv = e.target.parentElement;
    if (clickedSongDiv.children[1].children[3] !== undefined) {
      let clickedSongId = clickedSongDiv.children[1].children[3].innerText;

      setSelectedSongId(clickedSongId);
    }
  };

  const getSelectedSong = (selectedSongId: number) => {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id == selectedSongId) {
        let selectedSong: { album: string; song: string; performedBy: string; albumPicture: string; id: number; source: string };
        selectedSong = songs[i];
        return selectedSong;
      }
    }
  };

  let clickedSongObject = getSelectedSong(selectedSongId);

  const imgUrl = new URL(`./assets/songlist/${clickedSongObject?.albumPicture}`, import.meta.url).href;
  const audioUrl = new URL(`./assets/songlist/${clickedSongObject?.source}`, import.meta.url).href;

  return (
    <>
      <NavBar />
      <hr></hr>
      <main>
        <Player audioUrl={audioUrl} imgUrl={imgUrl} clickedSongObject={clickedSongObject} />
        <section id="songSection">
          {selectedSongs.map((selectedSong) => (
            <button id="songItemAsButton" onClick={(event: any) => handleClickedSong(event)} key={selectedSong.id}>
              <SongItem
                album={selectedSong.album}
                name={selectedSong.song}
                performedBy={selectedSong.performedBy}
                picture={selectedSong.albumPicture}
                id={selectedSong.id}
                key={selectedSong.id}
              />
            </button>
          ))}
        </section>
      </main>
    </>
  );
}
