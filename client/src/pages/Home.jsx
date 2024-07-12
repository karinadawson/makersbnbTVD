import { useNavigate } from "react-router-dom";
import TVDteam from "../assets/TVDteam.png"



function Home() {
  const navigateTo = useNavigate();



  return (
    <div>
      <img src={TVDteam} style={{ width: "700px" }}/>
      <h1 style={{ fontSize: "100px"}}>MakersBnB</h1>
      <h2>by Tesco Value Devs</h2>
      <i style={{ textDecoration: "italics" }}>Every Commit Helps!</i>
      <div>
        <button type="button" onClick={() => navigateTo('/login')}>Login</button>
        <button type="button" onClick={() => navigateTo('/register')}>Register</button>
        <button type="button" onClick={() => navigateTo('/spaces')}>Spaces</button>




        {/* <PaperComp/> */}

      </div>
    </div>
  );
}

export default Home;
