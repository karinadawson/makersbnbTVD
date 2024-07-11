import { useNavigate } from "react-router-dom";
import PaperComp from "../components/Paper"

function Home() {
const navigateTo = useNavigate();



  return (
    <div>
      <div>Home</div>
      <div>
        <button type="button" onClick={()=> navigateTo('/login')}>Login</button>
        <button type="button" onClick={()=> navigateTo('/register')}>Register</button>




      <PaperComp></PaperComp>

      </div>
    </div>
  );
}

export default Home;
