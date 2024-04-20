import React from "react";

import {
  FaAutoprefixer,
  FaSpaceShuttle,
  FaRocket,
} from "react-icons/fa";

const grid = [
  {
    id: 1,
    icon: <FaAutoprefixer className="icon" />,
    title: "DJI AIR 2S",

    img: "https://m.media-amazon.com/images/I/61OQEmuM6hL._AC_SS450_.jpg",
    descTwo: "",
  },
  {
    id: 2,
    icon: <FaSpaceShuttle className="icon" />,

    title: "DJI fpv",

    url: "/company",
    img: "https://ae01.alicdn.com/kf/H4baf39f65ff7465e9e6c319365f46a0bA/iFlight-TITAN-XL5-Analog-250mm-5inch-4S-6S-FPV-Drone-BNF-with-SucceX-E-F4-45A.jpg_640x640.jpg",
  },

  {
    id: 4,
    icon: <FaRocket className="icon" />,
    title: "Matrice 300 rtk",

    img: "https://topodrone.org/upload/iblock/a77/M200%20LIDAR%2002.jpg",
  },
];

export default grid;
