import React from "react";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>

        <p>
          Enjoy your favorite meals from local restaurants with just a tap. With
          exclusive deals and fast delivery, experience fresh, delicious food
          anytime, anywhere, making mealtime effortless and enjoyable.
        </p>
        <ScrollLink
          to="explore-menu"
          offset={300}
          smooth={true}
          duration={1000}
        >
          <button>View Menu</button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Header;
