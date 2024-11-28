"use client";
import ContactForm from "../contactForm/page";
import Section4 from "../_components/section4/page";
import Copyright from "../_components/copyright/page";
import Footer from "../_components/footer/page";
import LocatonMap from "../locatonmap/locatonmap";

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

const ContactUs = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  useEffect(() => {
    console.log(isMobile, "is mobile");
    const mobileCss = document.createElement("link");
    mobileCss.rel = "stylesheet";
    mobileCss.href = "/Content/css/contactus.css";

    const mobileHomeCss = document.createElement("link");
    mobileHomeCss.rel = "stylesheet";
    mobileHomeCss.href = "/usmobile_home.css";

    const listnav = document.createElement("link");
    listnav.rel = "stylesheet";
    listnav.href = "/Content/css/m.lightpick.css?v=RUS2021";
    const contactusmobile = document.createElement("link");
    contactusmobile.rel = "stylesheet";
    contactusmobile.href = "/Content/css/contactusmobile.css";

    console.log("Is Mobile Loaded");
    // If the page is NOT 'Contact Us', load the lightpick CSS and other styles

    if (!isMobile) {
      document.head.appendChild(mobileCss);
      // document.head.appendChild(mobileHomeCss);
      //document.head.appendChild(listnav);

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
      };
    }
    if (isMobile) {
      document.head.appendChild(contactusmobile);
      return () => {
        if (document.head.contains(contactusmobile)) {
          document.head.removeChild(contactusmobile);
        }
      };
    }
  }, [isMobile]);
  return (
    <>
      {isMobile ? <Navbar /> : <NavbarDesktop />}
      <section className="contact-usbanner">
        {/* Contact details */}
        <section className="contact-btm">
          <div className={isMobile ? "container" : ""}>
            <div className="fdetail-hdr">
              <h3>How to contact us?</h3>
              <h4>Email us or call our travel experts.</h4>
            </div>
            <div className="flight-details">
              <ul>
                <li>
                  <div>
                    <img src="/Content/images/phone-c.png" />
                  </div>
                  <div className="flag-div">
                    <p className="flag-div">
                      <img src="/Content/images/flag1.png" />
                      <img src="/Content/images/flag2.png" />
                      <strong>USA/Canada</strong>
                    </p>
                    <p>
                      <a className="tel-phone" href="tel:1-833-914-2482">
                        1-833-914-2482
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="/Content/images/home.png"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <div>
                    <p>
                      <img src="/Content/images/flag1.png" />
                      <strong>United States</strong>
                    </p>
                    <p className="add-ress">
                      448 PRAIRIE KNOLL DR NAPERVILLE, IL 60565
                    </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="li-contact">
                  <div>
                    <img src="/Content/images/reservation.png" />
                  </div>
                  <div>
                    <p>
                      <strong>Reservations</strong>
                    </p>
                    <p>
                      <a href="mailto:sales@redumbrellaholidays.com">
                        sales@redumbrellaholidays.com
                      </a>
                    </p>
                  </div>
                </li>
                <li className="li-contact">
                  <div>
                    <img src="/Content/images/support.png" />
                  </div>
                  <div>
                    <p>
                      <strong>Customer Support</strong>
                    </p>
                    <p>
                      <a href="mailto:support@redumbrellaholidays.com">
                        support@redumbrellaholidays.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Contact details */}
      </section>
      <ContactForm />
      <LocatonMap />
      {isMobile ? <Section4 /> : ""}
      {isMobile ? <Footer /> : <FooterDesktop />}
      {isMobile ? <Copyright /> : ""}
    </>
  );
};

export default ContactUs;
