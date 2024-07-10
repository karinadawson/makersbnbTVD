import { useState, useEffect } from 'react';
import axios from 'axios'; // for making HTTP requests

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [entryData, setEntryData] = useState({ /* Your entry data fields */ });

  // Handle form submissions
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { username, password });
      console.log('Registration successful:', response.data);
      setIsLoggedIn(true); // Assuming success response indicates login
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { username, password });
      console.log('Login successful:', response.data);
      setIsLoggedIn(true); // Assuming success response indicates login
    } catch (error) {
      console.error('Login error:', error);
    }
  };

//   const handleAddEntry = async (e) => {
//     e.preventDefault();
//     if (!isLoggedIn) {
//       console.error('Please log in to add entries.');
//       return;
//     }
//     try {
//       const response = await axios.post('/add_entry', { ...entryData }, {
//         headers: { // Include session key if stored in local storage
//           'Authorization': `session=${ /* Your session key retrieval logic */ }`
//         }
//       });
//       console.log('Entry added successfully:', response.data);
//       setEntryData({ /* Reset entry data fields */ });
//     } catch (error) {
//       console.error('Entry submission error:', error);
//     }
//   };

  // Check for existing session on component mount (optional)
  useEffect(() => {
    // Your logic to check for a session key in local storage (if applicable)
    const existingSession = localStorage.getItem('sessionKey');
    if (existingSession) {
      setIsLoggedIn(true); // Assuming session key presence indicates login
    }
  }, []);

  return (
    <div>
      {/* Registration form */}
      {!isLoggedIn && (
        <form onSubmit={handleRegistration}>
          {<input type='text' value={username}/>}
          {<input type='text' value={password}/>}
          {<input type='text' value={confirmPassword}/>}
          <button type="submit">Register</button>
        </form>
      )}

      {/* Login form */}
      {!isLoggedIn && (
        <form onSubmit={handleLogin}>
          {/* Username and password input fields */}
          <button type="submit">Login</button>
        </form>
      )}

      {/* Entry form (conditionally displayed) */}
      {isLoggedIn && (
        <form onSubmit={handleAddEntry}>
          {/* Entry data input fields */}
          <button type="submit">Add Entry</button>
        </form>
      )}
    </div>
  );
}

export default App;
