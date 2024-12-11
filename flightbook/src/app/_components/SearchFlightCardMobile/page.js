"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const SearchFlightCardMobile = ({
  flight,
  setFlightDetailVisible,
  setSelectedFlight,
  oneWay,
  token,
}) => {
  const searchParam = useSearchParams();
  const isOneWay = oneWay === "true";
  console.log(flight, "FlightList in SearchFlightCard");
  const [detailsToggle, setDetailsToggle] = useState(false);
  console.log(isOneWay, "oneWay in SearchFlightCard");
  const router = useRouter();
  const handleOnSubmit = (flight) => {
    const travellerDetails = {
      adults: searchParam.get("adult") || 0, // Default to 0 if no "adult" parameter is found
      child: searchParam.get("child") || 0,
      infant: searchParam.get("infant") || 0,
      cabin: searchParam.get("cabin") || "Economy", // Default to "Economy" if no cabin type is provided
    };

    localStorage.setItem("travellerDetails", JSON.stringify(travellerDetails));
    console.log(flight, "flight in handleonsubmit");
    // router.push(`/confirmation/token=${token}?flight=${flight}`);
    const jsonString = encodeURIComponent(JSON.stringify(flight));
    console.log(oneWay, "oneWay in handleSubmit");
    console.log(flight.price.total, "flight.itineraries[0].price");
    router.push(
      `/confirmationMobille/${token}?flight=${jsonString} &oneWay=${isOneWay.toString()}`
    );
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
    const matches = ptString.match(regex);

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

  return (
    <div
      className="listingbox one-way-box booking-item-flight-details listingHolderMain"
      id="listing_box_1"
      data-resultitemid="1S_0"
    >
      {flight && (
        <div className="leftright">
          {/* Left Section: Flight Information */}
          <div className="list-left">
            <div className="top-logo">
              <div>
                <img
                  src={flight.itineraries[0].segments[0].airline.logo}
                  alt="Airline Logo"
                  title={flight.itineraries[0].segments[0].airline.name}
                  width={90}
                />
              </div>

              <div>
                <h3>
                  {flight.itineraries[0].segments[0].airline.name}{" "}
                  <span>
                    Flight ({flight.itineraries[0].segments[0].airline.code}
                    {flight.itineraries[0].segments[0].number})
                  </span>
                </h3>
              </div>
            </div>

            {isOneWay ? (
              <ul>
                <li>
                  <p>
                    <strong>
                      {getTimeFromDate(
                        flight.itineraries[0].segments[0].departure.at
                      )}{" "}
                      |{" "}
                      <span>
                        {flight.itineraries[0].segments[0].departure.iataCode}
                      </span>
                    </strong>{" "}
                    <span className="UcT">
                      {getFormattedDate(
                        flight.itineraries[0].segments[0].departure.at
                      )}
                    </span>
                  </p>
                </li>
                <li className="fliht-icon">
                  <img src="/Content/images/depart-icon-red.png" />
                </li>

                <li>
                  <p>
                    <strong>
                      {getTimeFromDate(
                        flight.itineraries[0].segments[
                          flight.itineraries[0].segments.length - 1
                        ].arrival.at
                      )}{" "}
                      |{" "}
                      <span className="">
                        {
                          flight.itineraries[0].segments[
                            flight.itineraries[0].segments.length - 1
                          ].arrival.iataCode
                        }
                      </span>
                    </strong>{" "}
                    <span className="SB">
                      {getFormattedDate(
                        flight.itineraries[0].segments[
                          flight.itineraries[0].segments.length - 1
                        ].arrival.at
                      )}
                    </span>
                  </p>
                </li>

                <li>
                  <div className="showss">
                    <p>{extractDuration(flight.itineraries[0].duration)}</p>
                    {/* <hr /> */}
                    <p>{flight.itineraries[0].segments.length - 1} Stop(s)</p>
                    <br />
                    <p>
                      <span className="baggage">
                        <i className="fa fa-suitcase" /> Baggage Included
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            ) : (
              <>
                <ul>
                  <li>
                    <p>
                      <strong>
                        {getTimeFromDate(
                          flight.itineraries[0].segments[0].departure.at
                        )}{" "}
                        |{" "}
                        <span>
                          {flight.itineraries[0].segments[0].departure.iataCode}
                        </span>
                      </strong>{" "}
                      <span className="UcT">
                        {getFormattedDate(
                          flight.itineraries[0].segments[0].departure.at
                        )}
                      </span>
                    </p>
                  </li>
                  <li className="fliht-icon">
                    <img src="/Content/images/depart-icon-red.png" />
                  </li>

                  <li>
                    <p>
                      <strong>
                        {getTimeFromDate(
                          flight.itineraries[0].segments[
                            flight.itineraries[0].segments.length - 1
                          ].arrival.at
                        )}{" "}
                        |{" "}
                        <span className="">
                          {
                            flight.itineraries[0].segments[
                              flight.itineraries[0].segments.length - 1
                            ].arrival.iataCode
                          }
                        </span>
                      </strong>{" "}
                      <span className="SB">
                        {getFormattedDate(
                          flight.itineraries[0].segments[
                            flight.itineraries[0].segments.length - 1
                          ].arrival.at
                        )}
                      </span>
                    </p>
                  </li>

                  <li>
                    <div className="showss">
                      <p>{extractDuration(flight.itineraries[0].duration)}</p>
                      {/* <hr /> */}
                      <p>{flight.itineraries[0].segments.length - 1} Stop(s)</p>
                      <br />
                      <p>
                        <span className="baggage">
                          <i className="fa fa-suitcase" /> Baggage Included
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>

                <ul>
                  <li>
                    <p>
                      <strong>
                        {getTimeFromDate(
                          flight.itineraries[1].segments[0].departure.at
                        )}{" "}
                        |{" "}
                        <span>
                          {flight.itineraries[1].segments[0].departure.iataCode}
                        </span>
                      </strong>{" "}
                      <span className="UcT">
                        {getFormattedDate(
                          flight.itineraries[1].segments[0].departure.at
                        )}
                      </span>
                    </p>
                  </li>
                  <li className="fliht-icon">
                    <img src="/Content/images/depart-icon-red.png" />
                  </li>

                  <li>
                    <p>
                      <strong>
                        {getTimeFromDate(
                          flight.itineraries[1].segments[
                            flight.itineraries[1].segments.length - 1
                          ].arrival.at
                        )}{" "}
                        |{" "}
                        <span className="">
                          {
                            flight.itineraries[1].segments[
                              flight.itineraries[1].segments.length - 1
                            ].arrival.iataCode
                          }
                        </span>
                      </strong>{" "}
                      <span className="SB">
                        {getFormattedDate(
                          flight.itineraries[1].segments[
                            flight.itineraries[1].segments.length - 1
                          ].arrival.at
                        )}
                      </span>
                    </p>
                  </li>

                  <li>
                    <div className="showss">
                      <p>{extractDuration(flight.itineraries[0].duration)}</p>
                      {/* <hr /> */}
                      <p>{flight.itineraries[0].segments.length - 1} Stop(s)</p>
                      <br />
                      <p>
                        <span className="baggage">
                          <i className="fa fa-suitcase" /> Baggage Included
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </>
            )}
          </div>
          {/* End Left Section */}

          {/* Right Section: Price and Booking Button */}
          <div className="listing-right">
            <div>
              <h2>
                ${flight.travelerPricings[0].price.total}{" "}
                <span>Price Per Person (Incl fee)</span>
              </h2>
              <a
                href="javascript:void(0)"
                className="selectBtn"
                id="btn_1"
                onClick={() => handleOnSubmit(flight)}
              >
                BOOK NOW
              </a>
            </div>
          </div>
          {/* End Right Section */}
        </div>
      )}

      {/* Optional Section: Connecting Flights or Layovers */}
      <div className="rwesui" style={{ display: "none" }}>
        <span className="conntecting-airport-chng changedUp">
          You have an airport change. Please verify details
        </span>
      </div>
    </div>
  );
};

export default SearchFlightCardMobile;
