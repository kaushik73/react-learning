import React from "react";
import ReactDOM from "react-dom/client";
import restaurents from "./RestaurentList.json";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="rightside-navbar">
        <NavItems />
        <Cart />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        className="logo-icon"
      ></img>
    </div>
  );
};
const NavItems = () => {
  return (
    <div className="nav-items-container">
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

const Cart = () => {
  return <div className="cart-icon">Cart</div>;
};
const Body = () => {
  return (
    <div>
      <SearchBar />
      <RestaurantsList />
    </div>
  );
};
const SearchBar = () => {
  return (
    <div>
      {" "}
      <input type="search" placeholder="Search Restaurent.." />
    </div>
  );
};
const RestaurantsList = () => {
  return (
    <div className="card-container">
      {restaurents.map((restaurent) => {
        return <RestaurantCard restaurent={restaurent} name="kaushik" />;
      })}
    </div>
  );
};
const RestaurantCard = ({ restaurent, name }) => {
  console.log(restaurent);
  return (
    <div>
      <div className="card">
        <div>{name}</div>
        <div>{restaurent.name}</div>
        <div>{restaurent.address}</div>
        <div>{restaurent.rating}</div>
        <div>{restaurent.cuisine}</div>
      </div>
      <Image />
      <Name />
      <Rating />
    </div>
  );
};
const Image = () => {
  return <div></div>;
};
const Name = () => {
  return <div></div>;
};
const Rating = () => {
  return <div></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
