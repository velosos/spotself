import {createContext, useState, useEffect} from 'react';
import data from '../util';

export const soundsContext = createContext();

export function SoundsProvider({children}){
    const [audioRef, setAudioRef] = useState(null);
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryStatus, setLibraryStatus] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime:0,
        duration:0,
    })

    const playSongHandle = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime:current, duration})
    }
    const getTime = (time) => {
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})

    }
    const songSelectHandler = (song) => {
        const newSongs = songs.map((songMap) =>{
            if (songMap.id === song.id){
                return{
                ...songMap,
                active: true,
                }
            }else{
                return{
                ...songMap,
                active: false,
                }    
            }
            
        });
        setSongs(newSongs)
        setCurrentSong(song);
        setIsPlaying(false);
    }
    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }else{
            if((currentIndex - 1) % songs.length === -1){
            setCurrentSong(songs[songs.length - 1]);
            return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }

    }
    useEffect(() => {
        setIsPlaying(true)
    }, [songInfo.currentTime > 0])

    useEffect(() => {
        songSelectHandler(currentSong);
        {audioRef && audioRef.current.play()}
    }, [currentSong])
    return(
        <soundsContext.Provider 
        value={{
            songs, 
            currentSong, 
            isPlaying,
            songInfo,
            libraryStatus,
            setAudioRef, 
            setIsPlaying, 
            playSongHandle,
            timeUpdateHandler,
            getTime,
            dragHandler,
            songSelectHandler,
            setLibraryStatus,
            skipTrackHandler}}>
            {children}
        </soundsContext.Provider>
    )
}
