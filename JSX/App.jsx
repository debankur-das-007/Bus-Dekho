import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Body from './Body/Body.jsx'
import Footer from './Footer/Footer.jsx'
// import './App.css'
import '../CSS/App.css'
function App() {
  return (
    <div className='app'>
      <div className='top'>
        <Navbar />
      </div>
      <div className='mid'>
        <Body />
      </div>
      <div className='bottom'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
