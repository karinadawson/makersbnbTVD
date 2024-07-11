import { useNavigate } from "react-router-dom";
import Card from "../components/Card"

function Home() {
const navigateTo = useNavigate();

  return (
    <div>
      <div>Home</div>
      <div>
        <button type="button" onClick={()=> navigateTo('/login')}>Login</button>
        <button type="button" onClick={()=> navigateTo('/register')}>Register</button>




      {/* <Card>Hello, world!</Card>
      <Card>Hello, world!</Card>
      <Card>Hello, world!</Card> */}
      </div>
    </div>
  );
}

export default Home;
