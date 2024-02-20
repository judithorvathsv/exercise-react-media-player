function NavBar():JSX.Element {
  return (
    <header>
      <span id="title">Music Player</span>
      <div id="headerMenuDiv">
        <span>
          <a href="index.html">PLAYLISTS</a>
        </span>
        <span>
          <a href="artists.html">ARTISTS</a>
        </span>
        <span>
          <a href="albums.html">ALBUMS</a>
        </span>
        <span>
          <a href="tracks.html">TRACKS</a>
        </span>
      </div>
    </header>
  );
}

export default NavBar;
