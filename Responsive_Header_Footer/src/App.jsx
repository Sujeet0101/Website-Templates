import React from "react"
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Main from './components/Main.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './components/Footer.jsx'



function App() {
  return (
    
        <div className="page-wrapper">
          <header>
              <Navbar />
          </header>

          <main>
            < Main />
          </main>

          <footer>
            
          </footer>
        </div>
    
  );
}

export default App
