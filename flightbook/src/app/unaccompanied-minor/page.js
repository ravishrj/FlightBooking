"use client";
import { useState, useEffect } from "react";
import Navbar from "../_components/navbar/page";
import NavbarDesktop from "../_components/NavbarDesktop/page";
import Footer from "../_components/footer/page";
import FooterDesktop from "../_components/FooterDesktop/page";
import Section4 from "../_components/section4/page";
import Copyright from "../_components/copyright/page";
import Lightpick from "lightpick";

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

const Unaccompanied_minor = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  // useEffect(() => {
  //   if (width <= 768) {
  //     setIsMobile(true);
  //   } else if (width > 768) {
  //     setIsMobile(false);
  //   }
  // }, []);

  useEffect(() => {
    console.log(isMobile, "is Mobile from desktop navbar");
    const umnr = document.createElement("link");
    umnr.rel = "stylesheet";
    umnr.href = "/Content/css/umnr.css";
    const umnrmobile = document.createElement("link");
    umnrmobile.rel = "stylesheet";
    umnrmobile.href = "/Content/css/umnrmobile.css";

    const lightPick = document.createElement("link");
    lightPick.rel = "stylesheet";
    lightPick.href = "/Content/css/m.lightpick.css";

    if (!isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(umnr);
      document.head.appendChild(lightPick);

      return () => {
        if (document.head.contains(umnr)) {
          document.head.removeChild(umnr);
        }
        if (document.head.contains(lightPick)) {
          document.head.removeChild(lightPick);
        }
      };
    } else if (isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(umnrmobile);
      //document.head.appendChild(lightPick);

      return () => {
        if (document.head.contains(umnr)) {
          document.head.removeChild(umnr);
        }
        //   if (document.head.contains(lightPick)) {
        //     document.head.removeChild(lightPick);
        //   }
      };
    }
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <>
          <Navbar />
          <div className="umnrbnrm">
            <img src="/Content/images/m.umnrbanner.jpg" />
          </div>
          <section className="umnr-page">
            <div className="container">
              <div className="umnrmain">
                <div className="leftumnr">
                  <h2>Flights for an Unaccompanied Minor</h2>
                  <p>
                    As a parent of an unaccompanied minor, if you are
                    comfortable allowing your kid to fly alone, there are a few
                    steps to ensure a safe journey. Red umbrella Holidays have
                    enlisted the details of everything you need to know if you
                    want to allow your child to take a solo flight. Every
                    airline has a different set of rules for unaccompanied
                    minors and offers some services that you have to mandatorily
                    avail (and pay for). It includes a flight attendant
                    escorting your child to the flight to ensure a safe
                    departure.
                  </p>
                  <h2>
                    Are there any conditions that may apply to an unaccompanied
                    minor?
                  </h2>
                  <p>
                    As a parent of an unaccompanied minor, if you are
                    comfortable allowing your kid to fly alone, there are a few
                    steps to ensure a safe journey. Red umbrella Holidays have
                    enlisted the details of everything you need to know if you
                    want to allow your child to take a solo flight. Every
                    airline has a different set of rules for unaccompanied
                    minors and offers some services that you have to mandatorily
                    avail (and pay for). It includes a flight attendant
                    escorting your child to the flight to ensure a safe
                    departure.
                  </p>
                  <h2>
                    Are unaccompanied minors required to show an ID to take a
                    flight?
                  </h2>
                  <p>
                    In most airlines, an unaccompanied minor does not require an
                    ID at the airport. However, the adult escorting the child at
                    the terminal must carry a valid government-issued ID to
                    ensure that the UMNR boards the flight safely.
                  </p>
                  <p>
                    Is it necessary to book under the UMNR category? My child is
                    grown up and can travel on their own. A child between the
                    age group of 5 to 12 years traveling without adult
                    supervision must reserve under the UMNR category. If your
                    child is between 13 to 17 years of age, then the UMNR
                    category is optional. However, in this case, the parents are
                    responsible for their child and their well-being. Red
                    Umbrella Holidays or any airline provider will not be liable
                    for any harm caused to the child.
                  </p>
                  <h2>What is the airfare to booking a flight for a UMNR?</h2>
                  <p>
                    The flight fare for UMNR is different and depends on several
                    factors that include age, origin and destination, and flight
                    origin. A few airlines charge a fixed fee to fly a child on
                    a per booking basis. Some airlines allow multiple children
                    to travel together under a single fee.
                  </p>
                  <h2>
                    What are the requirements to book a flight ticket for an
                    unaccompanied minor?
                  </h2>
                  <p>
                    To book a flight ticket for an unaccompanied minor to Red
                    Umbrella Holidays, please reach out to our travel experts at
                    1-833-914-2482. The experts will guide you through the
                    booking process and complete it on your behalf. The booking
                    agent will require the adult to supply them with all the
                    information of the child for whom they are booking. Once the
                    adult shares the details and makes the payment, the booking
                    holder receives a confirmation email from us. This email
                    entails the special pass that allows the adult to pass
                    through the security gate and escort their child to the
                    airline staff. Once these steps are complete, the staff will
                    take care of the child during the boarding process.
                  </p>
                  <h2>
                    What are the airlines that offer flight tickets for
                    Unaccompanied Minors?
                  </h2>
                  <p>
                    Some airline providers like JetBlue, United Airlines,
                    American Airlines, Frontier Airlines allow UMNR flights. All
                    these airlines' flight tickets are available on Red Umbrella
                    Holidays for you to book. Usually, these airlines do not let
                    UMNRs travel on connecting flights, and some of them are not
                    allowed to let UMNR travel on domestic flights.
                  </p>
                  <h2>
                    How to book flight tickets for an unaccompanied minor on Red
                    Umbrella Holidays?
                  </h2>
                  <p>
                    To complete a booking for an unaccompanied minor on
                    RedUmbrellaHolidays, contact our call center, and our travel
                    experts will help you by booking it for you on an airline of
                    your choice. To know more details,
                  </p>
                  <div className="ctinfo">
                    <a href="tel:1-833-914-2482" className="phonen">
                      <img src="/Content/images/phone-red.png" /> 1-833-914-2482
                    </a>{" "}
                    <span>Or</span>
                    <a href="mailto:sales@redumbrellaholidays.com">
                      <img src="/Content/images/email-red.png" />
                      sales@redumbrellaholidays.com
                    </a>
                  </div>
                  <img src="/Content/images/m.umnrimage.jpg" />
                </div>
              </div>
            </div>
          </section>
          <section className="getcode">
            <div className="container">
              <h2>SUBSCRIBE</h2>
              <p>Never miss our updates and offers! </p>
              <form
                id="frmNewsletter"
                action="/FooterLinks/ContactUs"
                method="post"
              >
                <input
                  type="hidden"
                  id="hdnSubscribe"
                  name="FormType"
                  defaultValue="Subscribe"
                />
                <span id="spanNewsletterThanks" style={{ display: "none" }}>
                  Thanks for subscribing to RedUmbrellaHolidays!
                </span>
                <input
                  className="form-control"
                  id="txtNewsletterMail"
                  type="text"
                  maxLength={55}
                  placeholder="Your email address"
                  name="Email"
                />
                <button
                  type="submit"
                  className="g-orange"
                  onclick="return subscribeEmail()"
                  id="btnNewsletterSubmit"
                >
                  SUBSCRIBE
                </button>
                <span id="spnAlreadyExist" className="spnAlreadyExist" />
              </form>
              <b className="subcribeContent">
                You consent to get marketing content by entering your Email ID.
                For details, read our{" "}
                <a href="/privacy-policy"> Privacy Policy</a>,{" "}
                <a href="/terms-and-conditions"> Terms &amp; Conditions</a>
              </b>
            </div>
          </section>

          {/* <Section4 /> */}
          <Footer />
          <Copyright />
        </>
      ) : (
        <div className="wrapper">
          <NavbarDesktop />

          <section className="bannerumnr">
            <img src="/Content/images/umnrbanner.jpg" />
            <div className="contentumnr">
              <div className="container">
                <h1>Flight Tickets for</h1>
                <h2>Unaccompanied Minors</h2>
              </div>
            </div>
          </section>

          <section className="umnr-page">
            <div className="container">
              <h2>Flights for an Unaccompanied Minor</h2>
              <p>
                As a parent of an unaccompanied minor, if you are comfortable
                allowing your kid to fly alone, there are a few steps to ensure
                a safe journey. Red umbrella Holidays have enlisted the details
                of everything you need to know if you want to allow your child
                to take a solo flight. Every airline has a different set of
                rules for unaccompanied minors and offers some services that you
                have to mandatorily avail (and pay for). It includes a flight
                attendant escorting your child to the flight to ensure a safe
                departure.
              </p>
              <div className="umnrmain">
                <div className="leftumnr">
                  <h2>
                    Are there any conditions that may apply to an unaccompanied
                    minor?
                  </h2>
                  <p>
                    As a parent of an unaccompanied minor, if you are
                    comfortable allowing your kid to fly alone, there are a few
                    steps to ensure a safe journey. Red umbrella Holidays have
                    enlisted the details of everything you need to know if you
                    want to allow your child to take a solo flight. Every
                    airline has a different set of rules for unaccompanied
                    minors and offers some services that you have to mandatorily
                    avail (and pay for). It includes a flight attendant
                    escorting your child to the flight to ensure a safe
                    departure.
                  </p>
                  <h2>What is the airfare to booking a flight for a UMNR?</h2>
                  <p>
                    The flight fare for UMNR is different and depends on several
                    factors that include age, origin and destination, and flight
                    origin. A few airlines charge a fixed fee to fly a child on
                    a per booking basis. Some airlines allow multiple children
                    to travel together under a single fee.
                  </p>
                  <h2>
                    What are the airlines that offer flight tickets for
                    Unaccompanied Minors?
                  </h2>
                  <p>
                    Some airline providers like JetBlue, United Airlines,
                    American Airlines, Frontier Airlines allow UMNR flights. All
                    these airlines' flight tickets are available on Red Umbrella
                    Holidays for you to book. Usually, these airlines do not let
                    UMNRs travel on connecting flights, and some of them are not
                    allowed to let UMNR travel on domestic flights.
                  </p>
                  <h2>
                    How to book flight tickets for an unaccompanied minor on Red
                    Umbrella Holidays?
                  </h2>
                  <p>
                    To complete a booking for an unaccompanied minor on
                    RedUmbrellaHolidays, contact our call center, and our travel
                    experts will help you by booking it for you on an airline of
                    your choice. To know more details,
                  </p>
                  <div className="ctinfo">
                    <a href="tel:1-833-914-2482" className="phonen">
                      <img src="/Content/images/phone-red.png" /> 1-833-914-2482
                    </a>{" "}
                    <span>Or</span>
                    <a href="mailto:sales@redumbrellaholidays.com">
                      <img src="/Content/images/email-red.png" />
                      sales@redumbrellaholidays.com
                    </a>
                  </div>
                </div>
                <div className="rightumnr">
                  <h2>
                    Are unaccompanied minors required to show an ID to take a
                    flight?
                  </h2>
                  <p>
                    In most airlines, an unaccompanied minor does not require an
                    ID at the airport. However, the adult escorting the child at
                    the terminal must carry a valid government-issued ID to
                    ensure that the UMNR boards the flight safely.
                  </p>
                  <p>
                    Is it necessary to book under the UMNR category? My child is
                    grown up and can travel on their own. A child between the
                    age group of 5 to 12 years traveling without adult
                    supervision must reserve under the UMNR category. If your
                    child is between 13 to 17 years of age, then the UMNR
                    category is optional. However, in this case, the parents are
                    responsible for their child and their well-being. Red
                    Umbrella Holidays or any airline provider will not be liable
                    for any harm caused to the child.
                  </p>
                  <h2>
                    What are the requirements to book a flight ticket for an
                    unaccompanied minor?
                  </h2>
                  <p>
                    To book a flight ticket for an unaccompanied minor to Red
                    Umbrella Holidays, please reach out to our travel experts at
                    1-833-914-2482. The experts will guide you through the
                    booking process and complete it on your behalf. The booking
                    agent will require the adult to supply them with all the
                    information of the child for whom they are booking. Once the
                    adult shares the details and makes the payment, the booking
                    holder receives a confirmation email from us. This email
                    entails the special pass that allows the adult to pass
                    through the security gate and escort their child to the
                    airline staff. Once these steps are complete, the staff will
                    take care of the child during the boarding process.
                  </p>
                  <img src="/Content/images/umnrimage.jpg" />
                </div>
              </div>
            </div>
          </section>

          <FooterDesktop />
        </div>
      )}
    </>
  );
};
export default Unaccompanied_minor;
