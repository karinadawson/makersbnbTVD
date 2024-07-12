import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
// import {flask, session} from "flask"
// import Card from "../components/Card"

function Me({username}) {
  // const [username, setUsername] = useState("fetching username..")
  const navigateTo = useNavigate();

// const get_username = async () => {
//   const get_username_response = await axios.get('http://127.0.0.1:5003/me')
//   setUsername(get_username_response.data.username)
// }


// useEffect(() => {
//   get_username()
// }, [])


const [formData, setFormData] = useState({
  place_name: "",
  location: "",
  description: "",
  price: 0,
});

const handleUpdateFormData = (name, value) => {
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const response = await axios.post('http://127.0.0.1:5003/add-space', formData);
      console.log(response)
      if(response.status === 200){
        console.log(response)
        // console.log('Registration successful:', response.data);

        navigateTo("/spaces")
        // return <Redirect to="/login" />
      }

    } catch (error) {
      console.error('Space entry error:', error);
    }
};

  return (
    <div>
      <h1>My account</h1>
      <div>
       <label>Hello!</label>
       <br/>
       <label>Create a new space here</label>
       <span></span>
       <br/>




       <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="place_name">Place Name</label>
        <input
          type="text"
          id="place_name"
          name="place_name"
          value={formData.place_name}
          onChange={(e) => handleUpdateFormData("place_name", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="location"
          id="location"
          name="location"
          value={formData.location}
          onChange={(e) => handleUpdateFormData("location", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="description"
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) => handleUpdateFormData("description", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price Per Night</label>
        <input
          type="price"
          id="price"
          name="price"
          value={formData.price}
          onChange={(e) => handleUpdateFormData("price", e.target.value)}
        />
      </div>
      <button type="submit">Add Space</button>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      {/* <div>
        {" "}
        <p style={{ color: "blue" }} onClick={() => navigateTo("/register")}>
        don&apos;t have account?{" "}
        </p>
        </div> */}
    </form>
        {" "}<button onClick={()=>navigateTo("/spaces")}>Back to Spaces</button>{" "}
      </div>
    </div>
  );
}

export default Me;
