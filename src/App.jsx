import { useState } from 'react'
import './App.css'

import Nav from './components/Navbar/Nav'
import Vscode from './components/Vscode/Vscode'
import Foot from './components/Footer/Foot'

function App() {
  return (
    <div className='app'>
      <Nav />
      <Vscode />
      <Foot />
    </div>
  )
}

export default App
