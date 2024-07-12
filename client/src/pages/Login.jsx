import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleUpdateFormData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      const response = await axios.post('http://127.0.0.1:5003/login', formData);
      if(response.status === 200){
        console.log('Login successful:', response.data);
        navigateTo("/me", {username:response.data.username})
      }

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
    
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={(e) => handleUpdateFormData("username", e.target.value)}
        />
      </div>
      <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleUpdateFormData("password", e.target.value)}
        />
      </div>
        <button onClick={()=>{navigateTo("/")}}>Back to Home</button>
      <button type="submit" style={{ backgroundColor: "green"}}>Login</button>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      <div>
        {" "}
        <p style={{ color: "orange" }} onClick={() => navigateTo("/register")}>
          Don&apos;t have account?{" "}
        </p>
      </div>
    </form>

    </>
  );
}

export default Login;
