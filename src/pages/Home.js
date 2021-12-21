import {useState} from "react";


import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Home() {
  // 
  const [state] = useState({
    heading3:"Web Developoment And Style",
    heading2:"Front-end developer",
    heading1:"Alvin Gomez"
  })
  return (
    <div className="home">
      <Sidebar />
      <Header heading3={state.heading3} heading2={state.heading2} heading1={state.heading1}>
      <button className="btn">Check me out </button>  
      </Header>
    </div>
  );
}

export default Home;
