import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleUpdateFormData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:5003/register', formData);
        console.log(response)
        if(response.status === 200){
          console.log(response)
          // console.log('Registration successful:', response.data);

          navigateTo("/login")
          // return <Redirect to="/login" />
        }

      } catch (error) {
        console.error('Registration error:', error);
      }
  };

  return (
      <>
    <div>
      <h1>Register</h1>
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
        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleUpdateFormData("confirmPassword", e.target.value)
            }
          />
        </div>
        <button type="submit">Register</button>
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      </form>

      <div>
        {" "}
        <p style={{ color: "orange" }} onClick={() => navigateTo("/login")}>
          Login{" "}
        </p>
      </div>
    </div>
    </>
  );
};

export default Register;
