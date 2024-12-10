import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Analytics } from "@vercel/analytics/react"


function App() {
  useEffect(() => {
    // Check if this is a direct page load (not an internal navigation)
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_NAVIGATE) {
      // Replace this URL with your YouTube video URL
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Analytics />
    </div>
  );
}

export default App;
