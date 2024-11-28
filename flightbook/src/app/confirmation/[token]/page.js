"use client";

import BookingForm from "@/app/_components/bookingForm/page";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/_components/loading/page";

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

const Booking = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // This will navigate to the previous page
  };

  function calculateLayoverTime(flightOffer) {
    const itineraries = flightOffer.itineraries;
    const layovers = [];

    itineraries.forEach((itinerary) => {
      const segments = itinerary.segments;
      for (let i = 0; i < segments.length - 1; i++) {
        const arrivalTime = new Date(segments[i].arrival.at);
        const departureTime = new Date(segments[i + 1].departure.at);

        const layoverDuration = (departureTime - arrivalTime) / 60000; // Duration in minutes

        layovers.push({
          layover_duration: layoverDuration, // in minutes
          layover: layoverDuration > 0,
          itineraries: {
            layover_time: `${Math.floor(layoverDuration / 60)}H ${
              layoverDuration % 60
            }M`,
          },
        });
      }
    });

    return layovers;
  }

  const getFormattedDate = (date) => {
    let newDate = new Date(date);
    if (!isNaN(newDate)) {
      const formattedDate = newDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      return formattedDate;
    } else {
      console.log("Not a valid date");
    }
  };
  const getTimeFromDate = (date) => {
    let newDate = new Date(date);

    // Get hours and minutes
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();

    // Add leading zero to minutes if needed
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // Add leading zero to hours if needed
    if (hours < 10) {
      hours = "0" + hours;
    }
    return `${hours}:${minutes}`;
  };

  function extractDuration(ptString) {
    // Define a regular expression to match hours and minutes
    const regex = /PT(\d+H)?(\d+M)?/;

    // Use the regex to extract hours and minutes
    //   const matches = ptString.match(regex);
    const matches = (ptString || "").match(regex);

    // Initialize hours and minutes
    let hours = "";
    let minutes = "";

    if (matches) {
      // Extract hours if present
      if (matches[1]) {
        hours = matches[1].replace("H", "") + "H";
      }

      // Extract minutes if present
      if (matches[2]) {
        minutes = matches[2].replace("M", "") + "M";
      }
    }

    // Return the formatted duration as "XH YM"
    return `${hours} ${minutes || "00M"}`.trim();
  }

  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowWidth();
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
    flight_popup.href = "/Content/css/flight-pop.css";

    const e28 = document.createElement("link");
    e28.rel = "stylesheet";
    e28.href = "/Content/css/e28.css";

    if (!isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(desktopCss);
      document.head.appendChild(desktopHomeCss);
      //document.head.appendChild(listing);
      // document.head.appendChild(owlCarausel);
      document.head.appendChild(confirmation);
      // document.head.appendChild(flight_popup);
      document.head.appendChild(e28);

      return () => {
        if (document.head.contains(desktopCss)) {
          document.head.removeChild(desktopCss);
        }
        if (document.head.contains(desktopHomeCss)) {
          document.head.removeChild(desktopHomeCss);
        }
        // if (document.head.contains(listing)) {
        //     document.head.removeChild(listing);
        // }
        // if (document.head.contains(owlCarausel)) {
        //     document.head.removeChild(owlCarausel);
        // }
        if (document.head.contains(confirmation)) {
          document.head.removeChild(confirmation);
        }
        // if (document.head.contains(flight_popup)) {
        //     document.head.removeChild(flight_popup);
        // }
        if (document.head.contains(e28)) {
          document.head.removeChild(e28);
        }
      };
    }
  }, [isMobile]);
  const searchParams = useSearchParams();
  const [flight, setFlight] = useState(null);
  const oneWay = searchParams.get("oneWay") === "true";
  const price = searchParams.get("price");
  const priceReturn = searchParams.get("price");
  console.log("price", price);
  useEffect(() => {
    const flightParam = searchParams.get("flight");
    // console.log(flightParam, "flightParam ");
    console.log("oneWay", oneWay);
    //console.log("price",flight.price.total);

    if (flightParam) {
      try {
        // Assuming flightParam is in a format like {"number": "123", "destination": "New York"}
        const flightObject = JSON.parse(flightParam);
        setFlight(flightObject);
      } catch (error) {
        console.error("Error parsing flight object:", error);
      }
    }
  }, [searchParams]);
  if (!flight) {
    ///console.log("data is loading");
    return <Loading />;
  } else console.log("flight", flight);

  return (
    <section className="confirmation">
      <div className="container">
        <div className="headings">
          <a
            className="btn-back"
            href="javascript:void(0);"
            onClick={handleGoBack}
          >
            Go Back
          </a>
          <h1>Review Trip Details &amp; Book</h1>
          <div className="cong-new">
            <h2>
              <strong>Congratulations!</strong> You have got the best offer.
              It’s a steal - <strong>Wait No More!</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="container ipdcon">
        <div className="col-sm-8">
          <div className="flight-details">
            <div className="depart-flight">
              <div className="box-left">
                <img src="/Content/images/depart-icon-red.png" />
                <h3>Depart</h3>
              </div>
              <div className="box-right">
                <h3>
                  {flight.itineraries[0].segments[0].departure.airport.city}{" "}
                  {flight.itineraries[0].segments[0].departure.iataCode} -
                  {
                    flight.itineraries[0].segments[
                      flight.itineraries[0].segments.length - 1
                    ].arrival.airport.city
                  }{" "}
                  {
                    flight.itineraries[0].segments[
                      flight.itineraries[0].segments.length - 1
                    ].arrival.iataCode
                  }
                  <span>|</span>{" "}
                  {getFormattedDate(
                    flight?.itineraries[0].segments[0].departure.at
                  )}{" "}
                  | {extractDuration(flight?.itineraries[0].duration)}
                </h3>
                {flight?.itineraries[0].segments.map((segment, index) => {
                  console.log(segment, "segment"); // Check the segment structure

                  return (
                    <>
                      <ul key={index}>
                        <li>
                          <img
                            src="/Content/images/AirlinesLogo/AI.png"
                            width={90}
                            alt="Air India"
                            title="Air India"
                          />
                        </li>

                        <li>
                          <p>
                            {segment.departure?.airport?.name ||
                              "Unknown Airport"}
                            . {segment.departure?.iataCode || "N/A"}
                          </p>
                          <span>
                            Mon | {getTimeFromDate(segment.departure?.at)} |{" "}
                            {getFormattedDate(segment.departure?.at)}
                          </span>
                        </li>
                        <li>
                          <p>
                            {segment.arrival?.airport?.name ||
                              "Unknown Airport"}
                            . {segment.arrival?.iataCode || "N/A"}
                          </p>
                          <span>
                            Mon | {getTimeFromDate(segment.arrival?.at)} |{" "}
                            {getFormattedDate(segment.arrival?.at)}
                          </span>
                        </li>
                        <li>
                          <p>
                            <strong>Coach</strong>
                          </p>
                          <span>
                            {extractDuration(segment.duration) ||
                              "Duration unknown"}
                          </span>
                          <p className="bag-info">
                            <i className="fa fa-suitcase" aria-hidden="true" />
                            <i>2 PC</i>
                          </p>
                        </li>
                      </ul>
                      {flight?.itineraries[0].segments.length > 1 &&
                        segment !=
                          flight?.itineraries[0].segments[
                            flight?.itineraries[0].segments.length - 1
                          ] && (
                          <div className="changefligth">
                            <p>
                              {" "}
                              {segment.arrival.airport
                                ? segment.arrival.airport.name
                                : ""}
                              ,
                              {segment.arrival.airport
                                ? segment.arrival.airport.city
                                : ""}{" "}
                              |
                              {
                                calculateLayoverTime(flight)[0]?.itineraries
                                  .layover_time
                              }{" "}
                              Layover
                            </p>
                            <b></b>
                          </div>
                        )}
                    </>
                  );
                })}
              </div>
            </div>
            {!oneWay && (
              <div className="depart-flight return-flight">
                <div className="box-left">
                  <img src="/Content/images/return-icon-red.png" />
                  <h3>Return</h3>
                </div>
                <div className="box-right">
                  <h3>
                    {flight.itineraries[1].segments[0].departure.airport.city}{" "}
                    {flight.itineraries[1].segments[0].departure.iataCode} -
                    {
                      flight.itineraries[1].segments[
                        flight.itineraries[1].segments.length - 1
                      ].arrival.airport.city
                    }{" "}
                    {
                      flight.itineraries[1].segments[
                        flight.itineraries[1].segments.length - 1
                      ].arrival.iataCode
                    }
                    <span>|</span>{" "}
                    {getFormattedDate(
                      flight.itineraries[1].segments[0].departure.at
                    )}{" "}
                    | {extractDuration(flight.itineraries[1].duration)}
                  </h3>
                  {flight.itineraries[1].segments.map((segment, index) => {
                    console.log(segment, "segment"); // Check the segment structure

                    return (
                      <>
                        <ul key={index}>
                          <li>
                            <img
                              src="/Content/images/AirlinesLogo/AI.png"
                              width={90}
                              alt="Air India"
                              title="Air India"
                            />
                          </li>

                          <li>
                            <p>
                              {segment.departure?.airport?.name ||
                                "Unknown Airport"}
                              . {segment.departure?.iataCode || "N/A"}
                            </p>
                            <span>
                              Mon | {getTimeFromDate(segment.departure?.at)} |{" "}
                              {getFormattedDate(segment.departure?.at)}
                            </span>
                          </li>
                          <li>
                            <p>
                              {segment.arrival?.airport?.name ||
                                "Unknown Airport"}
                              . {segment.arrival?.iataCode || "N/A"}
                            </p>
                            <span>
                              Mon | {getTimeFromDate(segment.arrival?.at)} |{" "}
                              {getFormattedDate(segment.arrival?.at)}
                            </span>
                          </li>
                          <li>
                            <p>
                              <strong>Coach</strong>
                            </p>
                            <span>
                              {extractDuration(segment.duration) ||
                                "Duration unknown"}
                            </span>
                            <p className="bag-info">
                              <i
                                className="fa fa-suitcase"
                                aria-hidden="true"
                              />
                              <i>2 PC</i>
                            </p>
                          </li>
                        </ul>
                        {flight.itineraries[1].segments.length > 1 &&
                          segment !=
                            flight.itineraries[1].segments[
                              flight.itineraries[0].segments.length - 1
                            ] && (
                            <div className="changefligth">
                              <p>
                                {" "}
                                {segment.arrival.airport
                                  ? segment.arrival.airport.name
                                  : ""}
                                ,
                                {segment.arrival.airport
                                  ? segment.arrival.airport.city
                                  : ""}{" "}
                                |
                                {
                                  calculateLayoverTime(flight)[0].itineraries
                                    .layover_time
                                }{" "}
                                Layover
                              </p>
                              <b></b>
                            </div>
                          )}
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* End Flight Details */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n     .CamelT {\n        text-transform: capitalize;\n        display:block;\n    }\n",
            }}
          />

          <BookingForm />
        </div>
        <div className="col-sm-4">
          <div
            className="fixme"
            style={{ top: 15, bottom: "auto", position: "fixed" }}
          >
            <div className="righthdng" style={{ display: "none" }}>
              <h3>Congratulations!</h3>
              <p>You have got the best offer. It’s a steal - Wait no more!</p>
            </div>
            {/*Price Details box*/}
            <div className="priceboxdtl" id="divPriceSummary">
              <h4 className="g-orange">price details (USD)</h4>
              <ul style={{ position: "relative", zIndex: 10 }}>
                <li>
                  <strong>Travelers</strong>
                </li>
                <li>
                  <strong>Base Fare</strong>
                </li>
                <li>
                  <strong>Taxes &amp; Fees</strong>
                </li>
                <li>
                  <strong>Sub Total</strong>
                  <div className="subtotalInfoHolder">
                    <i className="fa fa-info-circle" aria-hidden="true" />
                    <b>
                      Total prices include{" "}
                      <a
                        href="javascript:void(0)"
                        onclick="openpopupwindow('/service-fees')"
                      >
                        our service fees{" "}
                      </a>
                      and <a href="/taxes-and-fee">taxes &amp; fees</a>. Please
                      read our{" "}
                      <a href="/terms-and-conditions">Terms &amp; Conditions</a>{" "}
                      for more details.
                    </b>
                  </div>
                </li>
              </ul>
              <ul>
                <li>1 x Adult(s)</li>
                <li>
                  {flight.price.currency}
                  {flight.price.base}
                </li>
                <li>
                  {flight.price.currency}
                  {flight.price.total}-{flight.price.base}
                </li>
                <li>
                  {flight.price.currency}
                  {flight.price.total}
                </li>
              </ul>
              <ul>
                <li className="PcOldfare" style={{ display: "none" }}>
                  <span>Total Price</span>{" "}
                  <span className="PcOldfare" style={{ display: "none" }}>
                    {flight.price.currency}
                    {flight.price.total}
                  </span>
                </li>
              </ul>
              <hr />
              <ul className="totlevlu totalPrice">
                <li id="spnTotalfareHeading">
                  Total Price {flight.price.currency}
                </li>
                <li id="spnTotalfare" className="spnTotalfareGeneral">
                  {flight.price.currency}
                  {flight.price.total}
                </li>
              </ul>
              <ul className="avg-fare" style={{ display: "none" }}>
                <li>Average Price Per Person: {flight.price.currency}</li>
                <li className="avg-fare avg-fare-value">
                  {flight.price.currency}
                  {flight.price.total}
                </li>
              </ul>
              <input type="hidden" id="hdnNoofPaxForAvg" defaultValue={1} />
              {/* left Section */}
              <input type="hidden" id="hdncurrencyRate" defaultValue={1} />
              <input type="hidden" id="hdncurrencySymbol" defaultValue="$" />
              <input
                type="hidden"
                id="hdnAvgTotalFareV2"
                defaultValue="947.35"
              />
              <input
                type="hidden"
                id="hdnTotalGDSFareV2"
                defaultValue="947.35"
              />
              <input type="hidden" id="hdnToCurrencyType" defaultValue="USD" />
              <input type="hidden" id="hdnDiscountAmount" defaultValue={0} />
              <input type="hidden" id="hdnCouponList" defaultValue="RUH30#" />
              <input type="hidden" id="hdnDiscountList" defaultValue="7#" />
            </div>
            {/*End Price Details box*/}
            {/*secure ssl booking*/}
            <div className="secusslbox">
              <h3 className="g-orange">
                <i className="fa fa-lock" /> secure ssl booking
              </h3>
              <p>Your personal information is encrypted and secure.</p>
              <ul>
                <li>Transactions are 100% secure</li>
              </ul>
              <div className="imgs">
                <h6>secured by</h6>
                <div>
                  <img src="/Content/images/atollogo.png" />
                  <img src="/Content/images/tta-logo.png" />
                </div>
              </div>
            </div>
            {/*End secure ssl booking*/}
            <div className="why-redumbrell">
              <h3 className="g-orange">Why RED UMBRELLA HOLIDAYS?</h3>
              <ul>
                <li>
                  <img src="/Content/images/check.png" />
                  Low Airfare Promise
                </li>
                <li>
                  <img src="/Content/images/check.png" />
                  Hassle-Free Bookings
                </li>
                <li>
                  <img src="/Content/images/check.png" />
                  Offers from 400+ Airlines
                </li>
                <li>
                  <img src="/Content/images/check.png" />
                  Quick Support &amp; Assistance
                </li>
              </ul>
            </div>
            <div className="paylater" style={{ display: "none" }}></div>
            {/*Call box*/}
            <div className="collingbox g-mfp-blue">
              <h6>Need Help?</h6>
              <h3>
                Our team of professional travel experts are ready to help! Call
                us and we'll help you plan the perfect vacation for you and your
                family.
              </h3>
              <div className="pic-call">
                <img src="/Content/images/callme.png" />
              </div>
              <div className="callbox">
                <span className="g-mfp-blue">Call Us</span>
                <h2 className="g-orange">
                  <span>
                    <img src="/Content/images/deal-flight-icon.png" />
                  </span>{" "}
                  <a href="tel:1-833-914-2482">1-833-914-2482</a>
                </h2>
              </div>
            </div>
            {/*End Call box*/}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Booking;
