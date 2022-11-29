import React from "react"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/"/>
      <Route path="/sell"/>
      <Route path="/bids"/>
    </Routes>
  </Router>
  )
}

export default App;
