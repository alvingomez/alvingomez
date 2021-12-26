import {useState} from "react";


import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Home() {
  // 
  const [state] = useState({
    heading4:"Web Developoment And Style",
    heading2:"Front-end developer",
    heading1:"Alvin Gomez"
  })
  return (
    <div className="home">
      <Sidebar />
      <Header heading4={state.heading4} heading2={state.heading2} heading1={state.heading1}>
      <button className="btn">Check me out </button>  
      </Header>
    </div>
  );
}

export default Home;
