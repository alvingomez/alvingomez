import { useState } from "react";


function Header({ heading1, heading2, heading3, children }) {
  const [state] = useState({
    image: {
      monster3: "/assets/images/monster-3.png",
      logo: "/assets/images/logo.png",      
    },
  });

  return (
    <>
      <div className="header">
    
        <div className="header__logo">
          <img
            src={state.image.logo}
            alt="logo"
            className="header__logo--img"
          />
        </div>

        <div className="header__content">
          <h3>{heading3}</h3>
          <h1>{heading1}</h1>
          <h2>{heading2}</h2>
          {children}
        </div>

        <div className="header__image header__image--background-color">
          <img
            src={state.image.monster3}
            alt="monster blue and pink"
            className="header__image--monster3"
          ></img>
        </div>
      </div>
    </>
  );
}
export default Header;
