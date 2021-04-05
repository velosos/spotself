import "./styles/app.scss"
import { SoundsProvider } from './context/SoundContext'
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'; 


function App() {
  return (
    <SoundsProvider>
      <div className="app">
        <Nav/>
        <Song/>
        <Player/>
        <Library/>
      </div>
    </SoundsProvider>
  );
}

export default App;
