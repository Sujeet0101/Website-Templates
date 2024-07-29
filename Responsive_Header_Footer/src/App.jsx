import React from "react"
import './App.css'
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
        <div className="page-wrapper">
          <header>
              <Navbar />
          </header>

          <main>
            <p>This is main content</p>
          </main>

          <footer>
            <h1>footer</h1>
          </footer>
        </div>
    </>
  );
}

export default App
