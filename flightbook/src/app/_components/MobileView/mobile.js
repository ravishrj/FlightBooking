"use client";
import { useState, useEffect } from "react";

import Section1 from "@/app/_components/section1/page";
import Section2 from "@/app/_components/section2/page";
import Section3 from "@/app/_components/section3/page";
import Section4 from "@/app/_components/section4/page";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Copyright from "../copyright/page";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial value

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default function Mobile({}) {
  const [mobMenuActive, setMobMenuActive] = useState(false);
  const [importantLinkActive, setimportantLinkActive] = useState(false);
  const [destinationLinkActive, setdestinationLinkActive] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const width = useWindowWidth();

  useEffect(() => {
    console.log(isMobile, "is mobile");
    const mobileCss = document.createElement("link");
    mobileCss.rel = "stylesheet";
    mobileCss.href = "/usmobile.css";

    const mobileHomeCss = document.createElement("link");
    mobileHomeCss.rel = "stylesheet";
    mobileHomeCss.href = "/usmobile_home.css";

    const listnav = document.createElement("link");
    listnav.rel = "stylesheet";
    listnav.href = "/Content/css/listnav.css";

    const listing = document.createElement("link");
    listing.rel = "stylesheet";
    listing.href = "/listing.css";

    console.log("Is Mobile Loaded");
    document.head.appendChild(mobileCss);
    document.head.appendChild(mobileHomeCss);
    document.head.appendChild(listnav);
    document.head.appendChild(listing);
    return () => {
      if (document.head.contains(mobileCss)) {
        document.head.removeChild(mobileCss);
      }
      if (document.head.contains(mobileHomeCss)) {
        document.head.removeChild(mobileHomeCss);
      }
      if (document.head.contains(listnav)) {
        document.head.removeChild(listnav);
      }
      if (document.head.contains(listing)) {
        document.head.removeChild(listing);
      }
    };
  }, [isMobile]);

  return (
    <>
      {/* <Navbar /> */}
      <Section1 />

      <Section2 />
      <Section3 />
      <Section4 />

      <Copyright />
    </>
  );
}
