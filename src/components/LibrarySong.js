
const LibrarySong = ({song, songSelectHandler}) => {
    return (
    <div onClick={() => songSelectHandler(song)} className={`library-song ${song.active && 'selected'}`}>
        <img alt={song.name} src={song.cover}/>
        <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    </div>
    )
}
export default LibrarySong;