"use client";
import { useState, useEffect } from "react";
import FlightForm from "../flightform/page";

const Section1 = ({ selectedAirline }) => {
  const [activeTab, setActiveTab] = useState("VacationTab");
  const [token, setToken] = useState("");
  // const fetchToken = async () => {
  //   let body = new URLSearchParams();
  //   body.append("grant_type", "client_credentials");
  //   body.append("client_id", "DjgWIoDOM9J6D7pDO8uq6p91zcP14pAG");
  //   body.append("client_secret", "8ZDzeKpqbvfpudJN");
  //   try {
  //     const data = await fetch(
  //       "https://api.amadeus.com/v1/security/oauth2/token",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //         body: body.toString(),
  //       }
  //     );
  //     const json = await data.json();
  //     console.log(json, "Fetching Token");
  //     setToken(json.access_token);
  //     localStorage.setItem("token", json.access_token);
  //     console.log(json.access_token, "Token Upon Calling Fetch Token");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchToken();
  // }, []);
  console.log(selectedAirline, "Selected Airline");

  return (
    <div className="bnrSrchwgt">
      <div className="bswContent">
        <h1>
          {selectedAirline
            ? selectedAirline.name
            : "TAILOR-MADE HOLIDAYS OF A LIFETIME"}
        </h1>
        <p> 100% flexible tours planned by experts to 70+ destinations</p>
      </div>

      {/* Search Widget */}
      <section className="search-widget">
        <div className="container">
          <div className="topbuttons">
            <a
              id="flighttablink"
              href="javascript:void(0)"
              className={activeTab === "FlightTab" ? "active" : ""}
              onclick={() => {
                setActiveTab("FlightTab");
                alert("juuu");
              }}
            >
              <span>
                <img src="/Content/images/v2.png" />
              </span>
              flights
            </a>
          </div>
          <div className="widgettab">
            <FlightForm />
            <div
              className="flighttab hide"
              id="Flights"
              style={{ display: "none" }}
            />
            <div
              className="hoteltab hide"
              id="hotel-tab"
              style={{ display: "none" }}
            ></div>
          </div>
        </div>
      </section>
      {/* End Search Widget */}
    </div>
  );
};
export default Section1;
