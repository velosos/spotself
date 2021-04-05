import { useContext } from 'react'
import { soundsContext } from '../context/SoundContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const { setLibraryStatus, libraryStatus } = useContext(soundsContext)
    return (
        <nav>
            <h1>{!libraryStatus && 'spotSelf'}</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;