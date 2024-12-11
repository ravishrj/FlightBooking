"use client";
import Copyright from "../_components/copyright/page";
import Footer from "../_components/footer/page";
import Navbar from "../_components/navbar/page";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "../_components/loading/page";
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
const Thank_you_mobile = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  useEffect(() => {
    console.log(isMobile, "is Mobile from desktop navbar");

    const thankyou = document.createElement("link");
    thankyou.rel = "stylesheet";
    thankyou.href = "/Content/css/thankyoumobile.css";

    if (isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(thankyou);
      document.head.appendChild(thankyou);

      return () => {
        if (document.head.contains(thankyou)) {
          document.head.removeChild(thankyou);
        }
        if (document.head.contains(thankyou)) {
          document.head.removeChild(thankyou);
        }
      };
    }
  }, [isMobile]);

  const searchParams = useSearchParams();
  const [flight, setFlight] = useState(null);
  const oneWay = searchParams.get("oneWay") === "true";
  //   const price = searchParams.get("price");
  //   const priceReturn = searchParams.get("price");
  //console.log("price", price);
  const [travellerDetails, setTravellerDetails] = useState({});

  useEffect(() => {
    try {
      const updatetravellerDetails = JSON.parse(
        localStorage.getItem("travellerDetails")
      );
      //setSelectedFlight(JSON.parse(localStorage.getItem("selectedflight")));
      setTravellerDetails(updatetravellerDetails);
      // setTravellerCount(
      //   summarizeTravelers(
      //     JSON.parse(localStorage.getItem("selectedflight")).travelerPricings
      //   )
      // );
      // console.log(
      //   summarizeTravelers(
      //     JSON.parse(localStorage.getItem("selectedflight")).travelerPricings
      //   ),
      //   "SUMMARIZED"
      // );
      console.log(updatetravellerDetails, "travellerDetails in conf");
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    const flightParam = searchParams.get("flight");
    console.log(flightParam, "flightParam ");
    console.log("oneWay", oneWay);
    //console.log("price",flight.price.total);

    if (flightParam) {
      try {
        const decodedFlight = decodeURIComponent(flightParam);
        const flightObject = JSON.parse(decodedFlight);
        setFlight(flightObject);
      } catch (error) {
        console.error("Error parsing flight object:", error);
      }
    }
  }, [searchParams]);

  // }, []);
  // const [priceAdult, setPriceAdult] = useState(0);
  // const [priceChild, setPriceChild] = useState(0);
  // const [priceInfant, setPriceInfant] = useState(0);
  // const pricing = (travelertype) => {
  //   var pricea = 0;
  //   {
  //     flight.travelerPricings.map((a) => {
  //       if (travelertype === "ADULT") {
  //         return setPriceAdult(parseFloat(a.price.base).toFixed(2));
  //       }
  //       if (travelertype === "CHILD") {
  //         return setPriceChild(parseFloat(a.price.base).toFixed(2));
  //       }
  //       if (travelertype === "INFANT") {
  //         return setPriceInfant(parseFloat(a.price.base).toFixed(2));
  //       }
  //     });
  //   }
  // };

  if (!flight) {
    ///console.log("data is loading");
    return <Loading />;
  } else console.log("flight", flight);

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
  // const [travellerCount, setTravellerCount] = useState({
  //   adults: {
  //     count: 0,
  //     perAdult: 0,
  //   },
  //   child: {
  //     count: 0,
  //     perChild: 0,
  //   },
  //   infant: {
  //     count: 0,
  //     perInfant: 0,
  //   },
  //   totalPrice: 0,
  // });
  // useEffect(() => {
  //   try {
  //     const storedTravellerDetail = localStorage.getItem("travellerDetail");

  //     if (storedTravellerDetail) {
  //       // Parse it back into an object
  //       const travellerDetail = JSON.parse(storedTravellerDetail);
  //       console.log(travellerDetail, "travellerDetail");
  //     } else {
  //       console.log("No traveller details found in localStorage.");
  //     }

  //     // setSelectedFlight(JSON.parse(localStorage.getItem("selectedflight")));
  //     //setTravellerDetails(JSON.parse(localStorage.getItem("travellerDetails")));
  //     // setTravellerCount(summarizeTravelers(JSON.parse(localStorage.getItem("selectedflight")).travelerPricings));
  //     //console.log(summarizeTravelers(JSON.parse(localStorage.getItem("selectedflight")).travelerPricings), "SUMMARIZED")
  //   } catch (e) {
  //     console.log(e);
  //   }
  return (
    <>
      <Navbar />
      <section className="confirmation">
        <div className="container">
          <div className="headings thankheading">
            <h1>Congratulations!</h1>
            <p>
              Your booking is complete! You’ll soon recieve an email
              confirmation.
            </p>
            <h2>
              Booking Reference : <strong>ORUH12775</strong>
            </h2>
          </div>
          <div className="col-sm-12">
            {/* Booking Status */}
            <div className="fdetail-hdr">
              <h3>Booking Details</h3>
            </div>
            <div className="flight-details">
              <div className="booking-status">
                <ul>
                  <li>
                    <p>
                      <strong>Booking Reference</strong>
                    </p>
                    <p>ORUH12775</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <strong>Booking Date</strong>
                    </p>
                    <p>11 Dec 2024</p>
                  </li>
                  <li>
                    <p>
                      <strong>Email Address</strong>
                    </p>
                    <p>ra@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <p className="thak">
              NOTE: This is not an e-ticket. This is a confirmation that we have
              received your request. We will process it shortly.{" "}
            </p>
            {/* End Booking Status */}
            {/* Flight Details */}
            <div className="fdetail-hdr">
              <h3>Flight Itinerary</h3>
            </div>
            <div className="flight-details one-way-box">
              <div className="depart-flight">
                <div className="box-left">
                  <img src="/Content/images/depart-icon-red.png" />
                  <h3>Depart</h3>
                </div>
                <div className="box-right">
                  <div className="flightlogosection">
                    <ul>
                      <li>
                        <img
                          src={flight.itineraries[0].segments[0].airline.logo}
                          alt="Air India"
                          title={flight.itineraries[0].segments[0].airline.name}
                          width={90}
                        />
                      </li>
                      <li>
                        <p>
                          {flight.itineraries[0].segments[0].airline.name}{" "}
                          <span>
                            {" "}
                            Flight (
                            {flight.itineraries[0].segments[0].airline.code}
                            {flight.itineraries[0].segments[0].number} )
                          </span>
                        </p>
                      </li>
                      <li>
                        <p className="CamelT">
                          Operated by{" "}
                          {flight.itineraries[0].segments[0].airline.name}{" "}
                          airline
                        </p>
                      </li>
                    </ul>
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
                  </div>
                  {flight?.itineraries[0].segments.map((segment, index) => {
                    console.log(segment, "segment"); // Check the segment structure

                    return (
                      <>
                        <ul key={index}>
                          {/* <li>
                            <img
                              src="/Content/images/AirlinesLogo/AI.png"
                              width={90}
                              alt="Air India"
                              title="Air India"
                            />
                          </li> */}

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
                            {/* <p className="bag-info">
                              <i
                                className="fa fa-suitcase"
                                aria-hidden="true"
                              />
                              <i>2 PC</i>
                            </p> */}
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
                {/* <div className="box-right">
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
                              <i
                                className="fa fa-suitcase"
                                aria-hidden="true"
                              />
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
                </div> */}
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n     .CamelT {\n        text-transform: capitalize;\n    }\n",
              }}
            />
            {/* End Flight Details */}
            {/* Traveler Details */}
            <div className="fdetail-hdr">
              <h3>Traveler Details</h3>
            </div>
            <div className="flight-details traveldtl">
              <ul className="td-heading">
                <li>
                  <p>
                    <strong>Traveler Type</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>First Name</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Middle Name</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Last Name</strong>
                  </p>
                </li>
              </ul>
              <ul className="td-repeater">
                <li>
                  <p>
                    <span>Adult</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>ravish</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>ssssssssssssss</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>aaaaaaaaaaaa</span>
                  </p>
                </li>
              </ul>
            </div>
            {/* End Traveler Details */}
            {/* Fare Details */}
            <div className="fdetail-hdr">
              <h3>Fare Details</h3>
            </div>
            <div className="flight-details traveldtl totols">
              <ul className="td-heading">
                <li>
                  <p>
                    <strong>Traveler Type</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ticket Price (per pax)</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Taxes &amp; Fees (per pax)</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Total</strong>
                  </p>
                </li>
              </ul>
              <ul className="td-repeater">
                <li>
                  <p>
                    <span>1 Adult</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>$1,048.00</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>$365.00</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>$1,413.00</span>
                  </p>
                </li>
              </ul>
              <ul className="totals">
                <li>
                  <h2>
                    Subtotal: <span />
                  </h2>
                </li>
                <li>
                  <h3>$1,413.00</h3>
                </li>
              </ul>
              <ul className="totals">
                <li>
                  <h2>
                    Discount: <span />
                  </h2>
                </li>
                <li>
                  <h3>$0.00</h3>
                </li>
              </ul>
              <ul className="totals">
                <li>
                  <h2>
                    Total Price{" "}
                    <span>Charged on Credit Card- visa- ****1234</span>
                  </h2>
                </li>
                <li>
                  <h3>$1,413.00</h3>
                </li>
              </ul>
            </div>
            {/* End Fare Details */}
            {/* Policies */}
            <div className="fdetail-hdr">
              <h3>Important Notes</h3>
            </div>
            <div className="flight-details">
              <div className="polices">
                <ul>
                  <li>
                    Check-in desks at the airport usually close down 2 hours
                    before the flight departure time.
                  </li>
                  <li>
                    You are required to carry a valid passport with at least 6
                    months of validity from the travel dates.
                  </li>
                  <li>
                    For International travels, please get your visa as per the
                    destination requirements. Our travel agents can guide you
                    regarding it.
                  </li>
                </ul>
              </div>
            </div>
            {/* End Policies */}
          </div>
        </div>
      </section>
      <Footer />
      <Copyright />
    </>
  );
};
export default Thank_you_mobile;
