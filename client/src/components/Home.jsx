import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login'; // Your Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route for the Home component */}
        <Route path="/about" element={<About />} />  {/* Route for the About component */}
        <Route path="/login" element={<Login />} />  {/* Route for the Login component */}
      </Routes>
    </Router>
  );
}

export default App;