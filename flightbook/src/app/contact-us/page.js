"use client";
import ContactForm from "../contactForm/page";
import Section4 from "../_components/section4/page";
import Copyright from "../_components/copyright/page";
import Footer from "../_components/footer/page";
import LocatonMap from "../locatonmap/locatonmap";

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
const ContactUs = () => {
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
    listnav.href = "/Content/css/m.lightpick.css?v=RUS2021";

    console.log("Is Mobile Loaded");
    document.head.appendChild(mobileCss);
    document.head.appendChild(mobileHomeCss);
    document.head.appendChild(listnav);

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
  }, [isMobile]);
  return (
    <>
      {" "}
      <section className="contact-usbanner">
        {/* Contact details */}
        <section className="contact-btm">
          <div className="container">
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
      <Section4 />
      <Footer />
      <Copyright />
    </>
  );
};

export default ContactUs;
