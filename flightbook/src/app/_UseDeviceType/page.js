"use client";
import Mobile from "../_components/MobileView/mobile";
import Desktop from "../_components/DesktopView/page";
import Footer from "../_components/footer/page";
import FooterDesktop from "../_components/FooterDesktop/page";
import { useEffect, useState } from "react";
import Navbar from "../_components/navbar/page";
import BookingMobile from "../confirmationMobille/[token]/page";
import NavbarDesktop from "../_components/NavbarDesktop/page";

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

const MyComponent = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768; // You can adjust the breakpoint as needed

  return (
    <div>
      {/* {isMobile ? <BookingMobile /> : ""} */}
      {/* niche ka dono real hai isi ko use karna hai bs as a trial hamlog isko comment kiye hai */}
      {isMobile ? <Navbar /> : ""}
      {isMobile ? <Mobile /> : <Desktop />}
      {/* {isMobile ? "" : <Desktop />} */}

      {isMobile ? <Footer /> : <FooterDesktop />}
    </div>
  );
};

export default MyComponent;
