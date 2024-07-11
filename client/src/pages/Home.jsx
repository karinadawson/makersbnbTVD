import { useNavigate } from "react-router-dom";
import PaperComp from "../components/PaperComp.jsx"

function Home() {
  const navigateTo = useNavigate();



  return (
    <div>
      <div>Home</div>
      <div>
        <button type="button" onClick={() => navigateTo('/login')}>Login</button>
        <button type="button" onClick={() => navigateTo('/register')}>Register</button>
        <button type="button" onClick={() => navigateTo('/spaces')}>Spaces</button>




        <PaperComp/>

      </div>
    </div>
  );
}

export default Home;
