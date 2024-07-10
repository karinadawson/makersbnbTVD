import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    console.log(formData);

    // const response = await fetch('http://localhost:5002/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password }),
    // });

    // if (!response.ok) {
    //   setErrorMessage('Login failed. Please check your credentials.');
    //   return;
    // }

    // const data = await response.json();

    // Handle successful login (e.g., store token, redirect)
    // console.log('Login successful:', data); // Replace with your logic

    // setUsername('');
    // setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={(e) => handleUpdateFormData("username", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleUpdateFormData("password", e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      <div>
        {" "}
        <p style={{ color: "blue" }} onClick={() => navigateTo("/register")}>
          don&apos;t have account?{" "}
        </p>
      </div>
    </form>
  );
}

export default Login;
