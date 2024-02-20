const SongItem = ({ album, name, performedBy, picture, id }: { album: string; name: string; performedBy: string; picture: string; id: number }) => {
  const imgUrl = new URL(`./assets/songlist/${picture}`, import.meta.url).href;

  return (
    <div className="songDiv">
      <img id="albumcover" src={imgUrl} alt="albumPicture" />

      <div className="songInfoDiv">
        <span>{name}</span>
        <span>{performedBy}</span>
        <span>{album}</span>
        <span hidden>{id}</span>
      </div>
    </div>
  );
};

export default SongItem;
