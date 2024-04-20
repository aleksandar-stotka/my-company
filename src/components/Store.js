import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./Store.scss";

const Company = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="section" onMouseOver={closeSubmenu}>
      company
    </div>
  );
};

export default Company;
