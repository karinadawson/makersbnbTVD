import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import axios from "axios"
import './App.css'

import Login from './components/OldLogin'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState()

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:5001/");
    console.log(response)
  }

  const getEmoji = async () => {
    const response = await axios.get("http://127.0.0.1:5001/emoji");
    console.log(response.data)
  }

  useEffect(() => {
    getEmoji()
  }, [])

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route for the Home component */}
        <Route path="/about" element={<About />} />  {/* Route for the About component */}
        <Route path="/login" element={<Login />} />  {/* Route for the Login component */}
      </Routes>
    </Router>
  );

    </>
  )
}

export default App
