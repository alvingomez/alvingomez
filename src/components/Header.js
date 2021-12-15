import { useState } from "react";

function Header() {
  const [state] = useState({
    image: {
      monster3: "/assets/images/monster-3.png",
    },
  });

  return (
    <div>
      <div className="header">
        <div className="header__image">
          <img
            src={state.image.monster3}
            alt="monster blue and pink"
            className="header__image--monster3"
          ></img>
        </div>
      </div>
      {/* End of Header */}
    </div>
    // End of container
  );
}
export default Header;
