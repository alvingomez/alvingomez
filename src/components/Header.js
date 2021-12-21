import { useState } from "react";

function Header() {
  const [state] = useState({
    image: {
      monster3: "/assets/images/monster-3.png",
    },
  });

  return (    
      <>      
        <div className="header__content">
          <h3>Web Developoment And Style</h3>
          <h1>Alvin Gomez</h1>
          <h2>Front-end developer</h2>   
          <button className="btn">Check me out </button>       
        </div>
        
        <div className="header__image header__image--background-color">
          <img
            src={state.image.monster3}
            alt="monster blue and pink"
            className="header__image--monster3"
          ></img>
        </div>
      </>
     
    
  
  );
}
export default Header;
