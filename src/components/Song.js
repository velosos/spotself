import { useContext } from 'react'
import { soundsContext } from '../context/SoundContext'


const Song = () => {
    const { currentSong } = useContext(soundsContext)
    return (
    <div className="song-container">
        <img alt={currentSong.name} src={currentSong.cover}/>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
    </div>
    )
}
export default Song;