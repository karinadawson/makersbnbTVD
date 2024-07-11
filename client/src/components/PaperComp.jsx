import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import Card from "./Card"
import axios from 'axios'





const PaperComp = () => {
const [spacesState, setSpacesState] = useState([])

const fetchSpaces = async () => {
    const response = await axios.get('http://127.0.0.1:5002/spaces');
    if (response.status === 200) {
      console.log(response)
      setSpacesState(response.data)
    }
  }

  useEffect(() => {
    fetchSpaces()
  }, [])

  //return (
    // <>
    //   <h1>For the sake of sanity</h1>
      {/* <ul>
        {response.data.map((space, id) => {
          return <li key={id}>{space}</li>
        })}
      </ul> */}

return (
  <>
  <ul>
    {spacesState.map((value, index) => {
      return <li key={index}>{value}</li>
    })}
  </ul>

    </>
  )



}

export default PaperComp