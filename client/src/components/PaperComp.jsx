import { useState, useEffect } from "react";
// import { Paper } from '@mui/material';
import CardComponent from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PaperComp = () => {
  const navigateTo = useNavigate();

  const [spacesState, setSpacesState] = useState([]);

  const fetchSpaces = async () => {
    const response = await axios.get("http://127.0.0.1:5003/spaces");
    const data = response.data;
    console.log(data)
    setSpacesState(data);
  };

  useEffect(() => {
    fetchSpaces();
  }, []);


  return (
    <>
      <h1>Spaces</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

      

      {spacesState.map((space) => {

        const { place_name, location, description, price, image_url } = space;

        return (
          <>
          

          <CardComponent
        
        key={space.id}
        title={place_name}
        description={`${location} - ${description}`}
        location={location}
        price={price}
        image={image_url}
        button1Text={"Book Now"}
        button2Text={"Details"}
        />
          </>
        );
      })}
      </div>
                <div>
          {" "}
          {" "}<button onClick={()=>navigateTo("/")}>Back to Home</button>{" "}
          <button onClick={() => navigateTo("/me")}>
            My Account{" "}
          </button>
        </div>
    </>
  );
};

export default PaperComp;
