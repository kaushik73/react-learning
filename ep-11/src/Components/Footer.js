import { useState, useEffect, useContext } from "react";
import UserContext from "../Utils/UserContext";
const Footer = () => {
  const year = new Date().getFullYear();
  const { userName } = useContext(UserContext);

  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      {userName} <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer;
