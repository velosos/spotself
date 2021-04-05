import { useContext } from 'react'
import { soundsContext } from '../context/SoundContext'
import LibrarySong from './LibrarySong'

const Library = () => {
    const { songs, 
            songSelectHandler, 
            libraryStatus } = useContext(soundsContext)
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library spotSelf</h2>
            <div className="library-songs">
                {songs.map((song) => ( 
                <LibrarySong 
                    song={song}
                    key={song.id}
                    songSelectHandler={songSelectHandler}/>
                ))}
            </div>
        </div>
    )
}

export default Library;