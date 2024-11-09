// import "../../../public/usmobile.css";
// import "../../../public/usmobile_home.css";
"use client";
import Footer from "../_components/footer/page";
import Copyright from "../_components/copyright/page";
import Section4 from "../_components/section4/page";
import Style from "./about.module.css";

import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};
const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowWidth();

  // useEffect(() => {
  //   if (width <= 768) {
  //     setIsMobile(true);
  //   } else if (width > 768) {
  //     setIsMobile(false);
  //   }
  // }, []);

  useEffect(() => {
    console.log(isMobile, "is Mobile from desktop navbar");
    const desktopCss = document.createElement("link");
    desktopCss.rel = "stylesheet";
    desktopCss.href = "/usmobile.css";

    const desktopHomeCss = document.createElement("link");
    desktopHomeCss.rel = "stylesheet";
    desktopHomeCss.href = "/usmobile_home.css";

    if (!isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(desktopCss);
      document.head.appendChild(desktopHomeCss);

      return () => {
        if (document.head.contains(desktopCss)) {
          document.head.removeChild(desktopCss);
        }
        if (document.head.contains(desktopHomeCss)) {
          document.head.removeChild(desktopHomeCss);
        }
      };
    }
  }, [isMobile]);

  return (
    <>
      <div className="contentWrp">
        <div className="container">
          <div className="header-heading text-center">
            <h2> A BIT ABOUT US</h2>
          </div>
          <p>
            Red Umbrella Holidays is your host to the journeys of a lifetime. We
            are renowned in the industry to offer an unparalleled and
            exceptional service for all your travels around the globe. With our
            hundreds of holidays, accommodations, and best-offered airfares, you
            are in for a treat when you book with us. We aim to enrich your
            lives by meticulously designing and perfectly tailoring your travel
            needs for the journeys to come. Starting from a First Class flight
            to a budget-friendly accommodation or a great holiday retreat, we
            have it all. We are the ones who take the work out of your booking
            process and let you enjoy every aspect of your travels booked with
            us. Being the pioneers in the travel industry, we focus on exceeding
            your expectations and delivering - THE BEST.
          </p>
          <p>
            Red Umbrella Holidays has entered the industry with a vision to
            create a travel experience that speaks of convenience &amp; ease. We
            want that whenever you plan to travel, you initiate a journey that
            surpasses your expectations. Our people have a passion to deliver an
            incredible booking experience. We want you to cherish moments of
            your journey to the fullest and have your 'ME' time that's just
            about, well - YOU.
          </p>
          <p>
            We like calling our team a Dream Team. We have travel experts who
            are here to turn your travel dreams into a reality by creating an
            itinerary that not only suits your budget but also minimizes your
            stress. Itineraries offered by us are 100% customizable based on
            your specifications and take you anywhere around the globe. Starting
            from a plan to snorkel in the azure waters of the Great Barrier Reef
            with your friends or an adventure trip to unveil the mysteries of
            Machu Picchu, all your travels are impeccably designed by us.
          </p>
          <p>
            <strong>Why book with Red Umbrella Holidays?</strong>
          </p>
          <ul>
            <li>
              We bring our latest and exclusive flight offers from over 500+
              airline providers.
            </li>
            <li>
              We have affordable hotel options for holidays in 1500+ cities
              around the world.
            </li>
            <li>
              100% customized holidays planned by experts to over 70+
              destinations worldwide.
            </li>
            <li>
              Exclusive holiday deals at our best-offered price with Low-Fare
              Promise.
            </li>
            <li>
              Security &amp; Transparency are our priorities. Our booking terms
              have no hidden costs.
            </li>
            <li>
              A dedicated travel resource is available to respond to all your
              holiday queries.
            </li>
          </ul>
          <p>
            <strong>Curious To Know More?</strong>
          </p>
          <p>
            Call us, and we will share it all. <br />
            <a className="call-btn-abtus" href="tel:1-833-914-2482">
              <img src="/Content/images/phone-icon.png" /> 1-833-914-2482
            </a>
            <br />
            or
            <br />
            Email Us at
            <br />
            <a href="mailto:support@redumbrellaholidays.com">
              support@redumbrellaholidays.com
            </a>
          </p>
        </div>
      </div>
      <Section4 />
      <Footer />
      <Copyright />
    </>
  );
};

export default AboutUs;
