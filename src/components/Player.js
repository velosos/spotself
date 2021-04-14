import { useContext, useRef, useEffect } from 'react'
import { soundsContext } from '../context/SoundContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPlay, 
    faAngleLeft, 
    faAngleRight,
    faPause,
 } from '@fortawesome/free-solid-svg-icons'

    const Player = () => {

    const { currentSong, 
            isPlaying, 
            songInfo,
            setAudioRef,
            playSongHandle, 
            timeUpdateHandler,
            getTime,
            dragHandler,
            skipTrackHandler,
            songEndHandler
            } = useContext(soundsContext)
    const audioRef = useRef(null)

    useEffect(() => {
        setAudioRef(audioRef)
    })
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                    <input 
                        min={0} 
                        max={songInfo.duration} 
                        value={songInfo.currentTime}
                        onChange={dragHandler} 
                        type='range'/>
                    <p>{getTime(songInfo.duration || 0)}</p>
                </div>
            <div className="play-control">
                <FontAwesomeIcon 
                    className='skip-back' 
                    size='2x' 
                    icon={faAngleLeft}
                    onClick={() => skipTrackHandler('skip-back')}/>
                <FontAwesomeIcon 
                    onClick={() => playSongHandle()} 
                    className='play' 
                    size='2x' 
                    icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon 
                    className='skip-forward' 
                    size='2x' 
                    icon={faAngleRight}
                    onClick={() => skipTrackHandler('skip-forward')}/>
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}  
                ref={audioRef} 
                src={currentSong.audio}
                onEnded={songEndHandler}>
            </audio>
        </div>
    )
}

export default Player;