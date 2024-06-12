import "./App.css"
import DrumKit from "./components/DrumKit"
import { Game } from "./components/Game"
import Games from "./components/Games"
import { Home } from "./components/Home"
import { Institute } from "./components/Institute"

import { Navbar } from "./components/Navbar"
import { Study } from "./components/Study"
import TicTacToe from "./components/TicTacToe"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Game />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/tictactoe" element={<TicTacToe/>}/>
          <Route path="/drum" element={<DrumKit/>}/>
          <Route path='/study' element={<Study/>}/>
        </Routes>

    </div>
  )
}

export default App
