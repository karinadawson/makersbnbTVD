import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
// import Card from "../components/Card"

function Me() {

const navigateTo = useNavigate();

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
      const response = await axios.post('http://127.0.0.1:5002/add-space', formData);
      console.log(response)
      if(response.status === 200){
        console.log(response)
        // console.log('Registration successful:', response.data);

        navigateTo("/")
        // return <Redirect to="/login" />
      }

    } catch (error) {
      console.error('Space entry error:', error);
    }
};

  return (
    <div>
      <div>My account</div>
      <div>
       <label>Hello... user</label>




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
      <div>
        {" "}
        <p style={{ color: "blue" }} onClick={() => navigateTo("/register")}>
          don&apos;t have account?{" "}
        </p>
      </div>
    </form>
      </div>
    </div>
  );
}

export default Me;
