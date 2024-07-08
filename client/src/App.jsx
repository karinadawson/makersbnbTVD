import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {users}
      </p>
    </>
  )
}

export default App
