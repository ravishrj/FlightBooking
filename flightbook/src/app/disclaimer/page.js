"use client";

import Section4 from "../_components/section4/page";
import Footer from "../_components/footer/page";
import Copyright from "../_components/copyright/page";

import { useState, useEffect } from "react";
import Navbar from "../_components/navbar/page";
import NavbarDesktop from "../_components/NavbarDesktop/page";
import FooterDesktop from "../_components/FooterDesktop/page";

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

const Disclaimer = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  // useEffect(() => {
  //   if (width <= 768) {
  //     setIsMobile(true);
  //   } else if (width > 768) {
  //     setIsMobile(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(isMobile, "is Mobile from desktop navbar");
  //   const desktopCss = document.createElement("link");
  //   desktopCss.rel = "stylesheet";
  //   desktopCss.href = "/usmobile.css";

  //   const desktopHomeCss = document.createElement("link");
  //   desktopHomeCss.rel = "stylesheet";
  //   desktopHomeCss.href = "/usmobile_home.css";

  //   if (!isMobile) {
  //     console.log("Destop View loaded");
  //     document.head.appendChild(desktopCss);
  //     document.head.appendChild(desktopHomeCss);

  //     return () => {
  //       if (document.head.contains(desktopCss)) {
  //         document.head.removeChild(desktopCss);
  //       }
  //       if (document.head.contains(desktopHomeCss)) {
  //         document.head.removeChild(desktopHomeCss);
  //       }
  //     };
  //   }
  // }, [isMobile]);

  return (
    <>
      {isMobile ? <Navbar /> : <NavbarDesktop />}
      <div className="contentWrp">
        <div className="header-heading text-center">
          <h2>DISCLAIMER</h2>
        </div>
        <div className="container">
          <p>
            <strong>Red Umbrella Holidays Discount Policy</strong>
          </p>
          <p>
            All the information published on <b>Red Umbrella Holidays</b> is
            accurate and complete. We assure you that to the best of our
            knowledge the content, policies, information is correct without any
            discrepancy. All the data that we publish is sourced directly from
            our travel service providers. Hence, we make sure that the content,
            prices, and data with other details are correct. We provide you with
            complete information and update it from time to time for your
            convenience. However, the airline and hotel industry is dynamic with
            market complexities that lead to frequent fare and tariff changes
            subject to availability and demand. We keep on updating the
            published content on our website without providing you with any
            prior intimation. It is your responsibility to keep on checking the
            updated content and book accordingly.{" "}
          </p>

          <p>
            <strong>Red Umbrella Holidays Disclaimer</strong>
          </p>
          <p>
            According to the{" "}
            <a href="/terms-and-conditions" target="_blank">
              Terms &amp; Conditions
            </a>{" "}
            of Red Umbrella Holidays, we have no liability to bear any losses,
            damages, or injuries caused to you because of your dependency on the
            information shared by us. It also stands valid for the content,
            data, airfares, and tariffs published on our website and the
            third-party websites linked to us.
          </p>
          <p>
            The published offers on Red Umbrella Holidays keep on changing and
            depend on the industry's determinants. There are several reasons for
            such a variation like date of travel, booking dates, blackout dates,
            and other factors mentioned in terms and conditions. The airfares
            and tariffs may change without any prior information. If you claim a
            discount, we conduct a thorough assessment to evaluate if it stands
            valid on your booking.
          </p>
        </div>
      </div>
      {isMobile ? <Section4 /> : ""}
      {isMobile ? <Footer /> : <FooterDesktop />}
      {isMobile ? <Copyright /> : ""}
    </>
  );
};
export default Disclaimer;
