import { useState } from 'react'
// import './Styles/menu.css';
import '../../CSS/Styles/menu.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <nav>
          <input type="checkbox" id="open" />
          <label className='active' htmlFor="open"><img src='#' /></label>
          <div className="super">
            <div className="top1">
              <div className='app-name'>Bus App Name</div>
              <div className='cross'>
                <input type="checkbox" id="close" />
                <label for="open">
                  <img src='\src\assets\png-transparent-computer-icons-share-icon-hamburger-button-crossed-logo-share-icon-symbol.png' />
                </label>
              </div>
            </div>
            <div className="bottom1">
              <div className="cards">
                <a href="#">
                  <div className="content">
                    <div className="icon1">
                      <img src="#" />
                    </div>
                    <div className="text-holder">Language</div>
                  </div>
                </a>
                <a href="#">
                  <div className="content">
                    <div className="icon1">
                      <img src="#" />
                    </div>
                    <div className="text-holder">Settings</div>
                  </div>
                </a>
                <a href="#">
                  <div className="content">
                    <div className="icon1">
                      <img src="#" />
                    </div>
                    <div className="text-holder">Share</div>
                  </div>
                </a>
                <a href="#">
                  <div className="content">
                    <div className="icon1">
                      <img src="#" />
                    </div>
                    <div className="text-holder">Report Issue</div>
                  </div>
                </a>
              </div>
              <div className="nav">
                <div>App Version 1.0.0</div>
                <div>Date</div>
              </div>
            </div>
          </div>
        </nav>
      </>

    </>
  )
}

export default App
