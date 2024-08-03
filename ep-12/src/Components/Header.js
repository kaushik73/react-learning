import foodFireLogo from "../../public/Images/foodFireLogo.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

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
  const { userName } = useContext(UserContext);
  const [x, setX] = useState(0);
  const handleLogoClick = () => {
    setX((prev) => prev + 1);
  };

  const onlineStatus = useOnline();
  // const sote = useSelector((store) => store);
  // const cartItems = store.cart.items
  // this above code subs. to whole store - decrease performance
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>Online : {onlineStatus ? "✅" : "🔴"}</li>
          <li>{userName}</li>
          <li>
            <Link to="/cart"> Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
