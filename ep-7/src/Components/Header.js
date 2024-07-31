import foodFireLogo from "../../public/Images/foodFireLogo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Title = ({ onLogoClick }) => {
  const handleLogoClick = () => {
    console.log("logo cliked");
    onLogoClick();
  };
  return (
    <>
      <Link to="/">
        <img
          className="logo"
          src={foodFireLogo}
          alt="Food Fire Logo"
          onClick={handleLogoClick}
        />
      </Link>
    </>
  );
};

const Header = () => {
  const [x, setX] = useState(0);
  const handleLogoClick = () => {
    setX((prev) => prev + 1);
    // console.log(x);
  };
  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <div className="header">
      <Title onLogoClick={handleLogoClick} />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
