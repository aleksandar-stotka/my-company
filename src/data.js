import { FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "Search Models",
    links: [
      {
        label: "Mavic Series",
        img: "https://www1.djicdn.com/cms/uploads/fdb0641bb133f778bbf894e0d210b1d3.png",
        url: "/mavic",
      },
      {
        label: "Air Series",
        img: "https://www1.djicdn.com/cms/uploads/eead2358fecb94ceb86d412f4ca4b67d.png",
        url: "/air",
      },
      {
        label: "Mini Series",
        img: "https://www1.djicdn.com/cms/uploads/a66438eb1dd2feadb16f08c47461a741.png",
        url: "/mini",
      },
      {
        label: "DJI FPV Series",
        img: "https://www1.djicdn.com/cms/uploads/e35a7f7b0b9a99891025a20ac497ca43.png",
        url: "/dji",
      },
    ],
  },
  {
    page: "Specialized",
    links: [
      { label: "Mini Series", icon: <FaBook />, url: "/mini" },
      { label: "libraries", icon: <FaBook />, url: "/mini" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;
