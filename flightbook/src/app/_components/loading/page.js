"use client"; // If you're using Next.js 13 with client-side rendering

import { useState, useEffect } from "react";

// Custom hook to get the window width
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

const Loading = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  // Dynamically load CSS based on window width
  useEffect(() => {
    console.log(isMobile ? "Mobile view" : "Desktop view");

    const listingcss = document.createElement("link");
    listingcss.rel = "stylesheet";
    listingcss.href = "/listing.css"; // Load mobile or desktop CSS based on the width

    document.head.appendChild(listingcss);

    // Cleanup on unmount or if isMobile changes
    return () => {
      if (document.head.contains(listingcss)) {
        document.head.removeChild(listingcss);
      }
    };
  }, [isMobile]); // Re-run when isMobile changes

  return (
    <>
      {/* You can either use inline styles like this or move to a separate CSS file */}
      <style>
        {`
          .alternateDate_Fare_Highlighter{
            background-color:#f4e19d;
          }
          .nearbyAirport_Fare_Highlighter{
            background-color:#f4e19d;
          }
          header nav {
            background: #000;
          }
          .myloader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .loadingbars {
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            z-index: 10;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            letter-spacing: 13px;
            font-variant: small-caps;
            font-size: 19px;
          }
        `}
      </style>
      <div className="loadingbars">
        <div className="lds-spinner">
          {/* Create 9 spinner divs dynamically */}
          {[...Array(9)].map((_, index) => (
            <div key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Loading;
