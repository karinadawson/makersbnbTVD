import { Paper } from '@mui/material';
import Card from "../components/Card"
import axios from 'axios'

const fetchSpaces = async () => {
    const response = await axios.get('http://127.0.0.1:5002/spaces');
}


const PaperComp = () => {
  return (
    <Paper>
        <Card>Card 1</Card>
    </Paper>
  )
}

export default PaperComp