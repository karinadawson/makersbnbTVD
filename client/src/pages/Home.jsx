import { useNavigate } from "react-router-dom";

function Home() {
const navigateTo = useNavigate();

  return (
    <div>
      <div>Home</div>
      <div>
        <button type="button" onClick={()=> navigateTo('/login')}>Login</button>
      </div>
    </div>
  );
}

export default Home;
