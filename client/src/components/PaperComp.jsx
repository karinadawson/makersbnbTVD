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
    setSpacesState(data);
  };

  useEffect(() => {
    fetchSpaces();
  }, []);


  return (
    <>
      <h1>Spaces</h1>

      {spacesState.map((space) => {

        const { place_name, location, description, price } = space;

        return (
          <>
          <CardComponent
          
          key={space.id}
          title={place_name}
          description={`${location} - ${description}`}
          location={location}
          price={price}
          button1Text={"Book Now"}
          button2Text={"Details"}
          />
          </>
        );
      })}
                <div>
          {" "}
          <button onClick={() => navigateTo("/me")}>
            Me{" "}
          </button>
        </div>
    </>
  );
};

export default PaperComp;
