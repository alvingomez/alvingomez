import { useState } from "react";

function Header() {
  const [state] = useState({
    image: {
      monster1: "/assets/images/monster-1.png",
    },
  });

  return (
    <div>
      <div className="header">
        <div className="header__image">
          <img
            src={state.image.monster1}
            alt="monster blue"
            className="header__image--monster1"
          ></img>
        </div>
        
      </div>
      {/* End of Header */}
    </div>
    // End of container
  );
}
export default Header;
