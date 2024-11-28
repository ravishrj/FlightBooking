"use client";
import { useState, useEffect } from "react";

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

const NavbarDesktop = () => {
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
    desktopCss.href = "/US_customcss.css";

    const desktopHomeCss = document.createElement("link");
    desktopHomeCss.rel = "stylesheet";
    desktopHomeCss.href = "/UScustomhome.css";

    const listing = document.createElement("link");
    listing.rel = "stylesheet";
    listing.href = "/listing.css";

    const owlCarausel = document.createElement("link");
    owlCarausel.rel = "stylesheet";
    owlCarausel.href = "/owlCarausel.css";

    const confirmation = document.createElement("link");
    confirmation.rel = "stylesheet";
    confirmation.href = "/Content/css/confirmation.css";

    const flight_popup = document.createElement("link");
    flight_popup.rel = "stylesheet";
    flight_popup.href = "/Content/css/hotel-home.css";

    const e28 = document.createElement("link");
    e28.rel = "stylesheet";
    e28.href = "Content/css/e28";
    const lightPick = document.createElement("link");
    lightPick.rel = "stylesheet";
    lightPick.href = "/Content/css/m.lightpick.css";

    if (!isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(desktopCss);
      // document.head.appendChild(desktopHomeCss);
      //  document.head.appendChild(listing);
      // document.head.appendChild(owlCarausel);
      // document.head.appendChild(confirmation);
      //document.head.appendChild(flight_popup);
      //document.head.appendChild(e28);
      //document.head.appendChild(lightPick);
      return () => {
        if (document.head.contains(desktopCss)) {
          document.head.removeChild(desktopCss);
        }
        if (document.head.contains(desktopHomeCss)) {
          document.head.removeChild(desktopHomeCss);
        }
        if (document.head.contains(listing)) {
          document.head.removeChild(listing);
        }
        if (document.head.contains(owlCarausel)) {
          document.head.removeChild(owlCarausel);
        }
        if (document.head.contains(confirmation)) {
          document.head.removeChild(confirmation);
        }
        if (document.head.contains(flight_popup)) {
          document.head.removeChild(flight_popup);
        }
        if (document.head.contains(e28)) {
          document.head.removeChild(e28);
        }
        if (document.head.contains(lightPick)) {
          document.head.removeChild(lightPick);
        }
      };
    }
    // If the page is NOT 'Contact Us', load the lightpick CSS and other styles
    // if (window.location.pathname !== "/contact-us") {
    //   document.head.appendChild(lightPick); // Append lightpick only if not on contact-us page
    // }
  }, [isMobile]);
  return (
    <div className="wrapper">
      <header>
        <nav>
          <section className="logo">
            <a href="/" id="lnk_RUHUS_Logo_URL" title="Red Umbrella Holidays">
              <img src="/Content/images/logo.png" alt="Red Umbrella" />
            </a>
          </section>
          <ul>
            <li>
              <a href="/" title="Home">
                Home
              </a>
            </li>

            <li>
              <a href="/flight" title="Flights">
                Flights
              </a>
            </li>
            <li className="show">
              <h2 className="callUs">
                <span>Call Us At</span>
                <a className="call-phone-number" href="javascript:void(0);">
                  1-833-914-2482 <img src="/Content/images/phone.png" />
                </a>
                <b>7am - 5pm EST</b>
              </h2>
            </li>
          </ul>

          {/* Scoped styles using styled-jsx */}
          <style>{`
            header nav {
              background: #000;
            }

            nav ul li.show {
              padding-left: 0;
              margin-left: -74px;
            }

            @media only screen and (max-width: 1024px) {
              nav ul li {
                padding: 3px 7px;
                font-size: 9px;
              }

              nav ul {
                width: 72%;
              }
            }

            @media only screen and (max-width: 768px) {
              nav ul {
                width: 77%;
              }
            }
          `}</style>
        </nav>
      </header>
    </div>
  );
};
export default NavbarDesktop;
