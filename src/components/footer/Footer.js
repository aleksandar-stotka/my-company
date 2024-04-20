import React from "react";
import { FaGithub, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      style={{ width: "100%", height: "30vh", backgroundColor: "#939393" }}
    >
      <div
        className="footer-links"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className="social-links"
          style={{
            display: "flex",
            width: "30rem",
            margin: "0 5em",
            padding: "3em",
          }}
        >
          <a
            href="https://github.com/aleksandar-stotka"
            style={{ background: "none" }}
          >
            <FaGithub
              style={{ height: "5vh", width: "6rem", color: "wheat" }}
            />
          </a>
          <a href="https://www.facebook.com/" style={{ background: "none" }}>
            <FaFacebookSquare
              style={{ height: "5vh", width: "6rem", color: "wheat" }}
            />
          </a>
          <a href="https://www.instagram.com/" style={{ background: "none" }}>
            <FaInstagramSquare
              style={{ height: "5vh", width: "6rem", color: "wheat" }}
            />
          </a>
        </div>
        <div
          className="page-links"
          style={{ padding: "3em", width: "40rem" }}
        ></div>
      </div>
    </section>
  );
};

export default Footer;
