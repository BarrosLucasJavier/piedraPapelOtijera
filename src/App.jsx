import Home from "./pages/Home"
import './index.css'
import { GameProvider } from "./context/game.context"

function App() {

  return (
    <GameProvider>
      <Home/>
    </GameProvider>
  )
}

export default App
