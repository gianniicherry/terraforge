import React from "react"
import "./App.css"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import ItemList from "./components/ItemList"
import ItemForm from "./components/ItemForm"


function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Sell" element={<ItemForm/>}/>
      <Route path="/Bids" element={<ItemList/>}/>
    </Routes>
  </Router>
  )
}

export default App;
