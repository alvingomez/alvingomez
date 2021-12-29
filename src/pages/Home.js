import {useState, useContext} from "react";
import ModalContext from "../context/ModalContext";
import Modal from '../components/Modal';
import { OPEN_MODAL } from "../context/types/ModalTypes";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Home() { 
  const {dispatch} = useContext(ModalContext)
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
        {/* Using an arrow function to bind a function to a component instance */}
      <button className="btn" onClick={() => dispatch({type:OPEN_MODAL})} >Check me out </button>  
      </Header>
      <Modal />
    </div> 
  );
}

export default Home;
