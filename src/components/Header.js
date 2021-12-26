import { useState } from "react";

function Header({ heading1, heading2, heading4, children }) {
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
          <div className="heading">
            <h4 className="heading__three">{heading4}</h4>
            <h1 className="heading__one">{heading1}</h1>
            <h2 className="heading__two">{heading2}</h2>
            {children}
          </div>
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
