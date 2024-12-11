"use client";

import { useState, useEffect, useRef } from "react";
import Calender from "../calender/page";
import CustomCalendar from "../calendar_2/page";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // Correct import

// const debounce = (func, delay) => {
//   let timeoutId;
//   return (...args) => {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       func.apply(null, args);
//     }, delay);
//   };
// };

const FlightForm = () => {
  const [srcClickedToToggeled, setSrcClickedToToggle] = useState(false);
  const [srcClickedDepartToggeled, setSrcClickedDepartToggle] = useState(false);
  const [srcClickedReturnToggeled, setSrcClickedReturnToggle] = useState(false);
  const [srcClickedTravellersToggeled, setSrcClickedTravellersToggle] =
    useState(false);
  const [srcClickedCoachToggeled, setSrcClickedCoachToggle] = useState(false);
  const [srcClickedToggle, setSrcClickedToggle] = useState(false);

  const router = useRouter();
  const [origin, setOrigin] = useState("");
  const [originAirportList, setOriginAirportList] = useState([]);
  const [originInputValue, setOriginInputValue] = useState("");

  const [token, setToken] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisibleDes, setDropdownVisibleDes] = useState(false);
  const [oneWay, setOneWay] = useState(false);

  const [des, setDes] = useState("");
  const [desAirportList, setDesAirportList] = useState([]);
  const [desInputValue, setDesInputValue] = useState("");

  const [depDate, setDepDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState("");

  const [travellerDetail, setTravellerDetail] = useState({
    adultCount: 1,
    childrenCount: 0,
    infantOnLapCount: 0,
    infantOnSeatCount: 0,
    infantCount: 0,
    cabinType: "ECONOMY",
  });
  const fetchToken = async () => {
    let body = new URLSearchParams();
    body.append("grant_type", "client_credentials");
    body.append("client_id", "DjgWIoDOM9J6D7pDO8uq6p91zcP14pAG");
    body.append("client_secret", "8ZDzeKpqbvfpudJN");
    try {
      const data = await fetch(
        "https://api.amadeus.com/v1/security/oauth2/token",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
        }
      );
      const json = await data.json();
      console.log(json, "Fetching Token");
      setToken(json.access_token);
      localStorage.setItem("token", json.access_token);
      console.log(json.access_token, "Token Upon Calling Fetch Token");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchToken();
    console.log("token", token);
    // Remove the token from localStorage
    // localStorage.removeItem(token);
  }, []);

  // Function to update travellerDetail when passenger count changes
  const updateTravellerDetail = (field, value) => {
    setTravellerDetail((prevDetail) => {
      // Update the relevant field and recalculate the infant count
      const updatedDetail = {
        ...prevDetail,
        [field]: value,
      };

      // Recalculate the total infant count as the sum of infantOnLapCount and infantOnSeatCount
      updatedDetail.infantCount =
        updatedDetail.infantOnLapCount + updatedDetail.infantOnSeatCount;

      return updatedDetail;
    });
  };

  // Function to handle the selection of class
  const handleClassSelection = (classType) => {
    setTravellerDetail((prevDetail) => ({
      ...prevDetail,
      cabinType: classType, // Update cabinType inside travellerDetail
    }));
  };

  // Function to increment passenger count
  const incrementPassenger = (type) => {
    switch (type) {
      case "adult":
        if (travellerDetail.adultCount < 9) {
          updateTravellerDetail("adultCount", travellerDetail.adultCount + 1);
        }
        break;
      case "child":
        if (travellerDetail.childrenCount < 8) {
          updateTravellerDetail(
            "childrenCount",
            travellerDetail.childrenCount + 1
          );
        }
        break;
      case "infantLap":
        if (travellerDetail.infantOnLapCount < 4) {
          updateTravellerDetail(
            "infantOnLapCount",
            travellerDetail.infantOnLapCount + 1
          );
        }
        break;
      case "infantSeat":
        if (travellerDetail.infantOnSeatCount < 4) {
          updateTravellerDetail(
            "infantOnSeatCount",
            travellerDetail.infantOnSeatCount + 1
          );
        }
        break;
      default:
        break;
    }
  };

  const decrementPassenger = (type) => {
    switch (type) {
      case "adult":
        if (travellerDetail.adultCount > 1) {
          updateTravellerDetail("adultCount", travellerDetail.adultCount - 1);
        }
        break;
      case "child":
        if (travellerDetail.childrenCount > 0) {
          updateTravellerDetail(
            "childrenCount",
            travellerDetail.childrenCount - 1
          );
        }
        break;
      case "infantLap":
        if (travellerDetail.infantOnLapCount > 0) {
          updateTravellerDetail(
            "infantOnLapCount",
            travellerDetail.infantOnLapCount - 1
          );
        }
        break;
      case "infantSeat":
        if (travellerDetail.infantOnSeatCount > 0) {
          updateTravellerDetail(
            "infantOnSeatCount",
            travellerDetail.infantOnSeatCount - 1
          );
        }
        break;
      default:
        break;
    }
  };
  console.log("Traveller Detail:", travellerDetail);

  const handleOnSubmit = async () => {
    try {
      const accessToken = localStorage.getItem("token");
      console.log(accessToken, "accessToken");
      const searchObj = {
        originLocationCode: origin,
        destinationLocationCode: des,
        departureDate: depDate,
        returnDate: returnDate,
        adults: travellerDetail.adultCount,
      };

      console.log(searchObj, "Search Object");
      //router.push(`/searchFlight?origin=${searchObj.originLocationCode}&destination=${searchObj.destinationLocationCode}&date=${searchObj.departureDate.toISOString().substring(0, 10)}&returnDate=${searchObj.returnDate.toISOString().substring(0, 10)}&adults=${searchObj.adults}&token=${accessToken}&oneway=${oneWay}`)
      router.push(
        `/searchFlightMobile?origin=${
          searchObj.originLocationCode
        }&destination=${
          searchObj.destinationLocationCode
        }&date=${searchObj.departureDate.toISOString().substring(0, 10)}${
          !oneWay
            ? `&returnDate=${searchObj.returnDate
                .toISOString()
                .substring(0, 10)}`
            : ""
        }&adult=${travellerDetail.adultCount}&child=${
          travellerDetail.childrenCount
        }&infant=${travellerDetail.infantCount}&cabin=${
          travellerDetail.cabinType
        }&token=${accessToken}&oneWay=${oneWay.toString()}&originInputValue=${originInputValue}&originDesValue=${originInputValue}&desInputValue=${desInputValue}`
      );
    } catch (error) {
      console.error("Error fetching flight offers:", error);
      // setError('Failed to fetch flight offers. Please try again.');
    }
  };

  const filterSourceAirportValue = async (originInputValue) => {
    try {
      let response = await fetch(
        `https://api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${originInputValue}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      console.log("RESULT", result);

      const options = result.data.map((a) => ({
        label: `${a.iataCode} - ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
        value: a.iataCode,
      }));

      setOriginAirportList(options);
    } catch (err) {
      console.error("Error fetching airport data: ", err);
    }
  };

  const filterDesAirportValue = async () => {
    try {
      let response = await fetch(
        `https://api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${desInputValue}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let result = await response.json();
      let options = result.data.map((a) => {
        return {
          label: `${a.iataCode} - ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
          value: a.iataCode,
        };
      });
      setDesAirportList(options);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNearestAirports = async () => {
    try {
      // Get user's current location using Geolocation API
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Call the Amadeus API to get nearest airports based on current latitude and longitude
          const response = await fetch(
            `https://api.amadeus.com/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}&radius=100&page%5Blimit%5D=10&sort=analytics.travelers.score`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Corrected syntax
              },
            }
          );

          const result = await response.json();
          console.log(result, "result");
          // Check if the response is valid and has data
          if (response.ok && Array.isArray(result.data)) {
            // Map the response to label and value format
            const options = result.data.map((a) => ({
              label: `${a.iataCode}, ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
              value: a.iataCode, // Corrected to just a.iataCode
            }));

            // Set the nearest airport list
            setOriginAirportList(options);
            console.log(options, "options in fetch nearest airport");

            if (options.length > 0) {
              setOriginInputValue(options[0].label); // Set the first airport as the default value
              setOrigin(options[0].value); // Corrected to use value
            }
          } else {
            console.error("Error fetching airports:", result);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          if (error.code === 1) {
            // User denied geolocation permission
            alert(
              "You denied access to your location. Please enable location services to find nearby airports."
            );
            // You can provide a fallback mechanism here, like letting them search manually
          } else if (error.code === 2) {
            alert(
              "Unable to retrieve your location. Please ensure you have a valid GPS signal."
            );
          } else if (error.code === 3) {
            alert("Geolocation request timed out. Please try again.");
          }
        }
      );
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  useEffect(() => {
    fetchNearestAirports();
  }, [token]);

  const handleOriginChange = (event) => {
    const newValue = event.target.value;
    setOriginInputValue(newValue);

    if (newValue.trim() === "") {
      setDropdownVisible(false);
    } else {
      setDropdownVisible(true);
      filterSourceAirportValue(newValue);
    }
  };

  const handleSelectAirport = (city) => {
    setOriginInputValue(city.label);
    setOrigin(city.value);
    setDropdownVisible(false);
    setSrcClickedToggle(false);
  };

  const handleDesChange = (event) => {
    const newValue = event.target.value;
    setDesInputValue(newValue);
    filterDesAirportValue(newValue);
    setDropdownVisibleDes(newValue.length > 0);
  };

  const handleSelectDesAirport = (city) => {
    setDesInputValue(city.label);
    setDes(city.value);
    setDropdownVisibleDes(false);
    setSrcClickedToToggle(false); // Close the destination overlay
  };

  const handleDepartureChange = (date) => {
    if (date.length > 0) {
      const utcDate = new Date(
        Date.UTC(date[0].getFullYear(), date[0].getMonth(), date[0].getDate())
      );

      // Use .toISOString() or other methods to display as needed
      setDepDate(utcDate);
      setErrorMessage(""); // Clear error message
    } else {
      setErrorMessage("Select depart date");
    }
  };

  const handleReturnChange = (date) => {
    if (date.length > 0) {
      const utcDate = new Date(
        Date.UTC(date[0].getFullYear(), date[0].getMonth(), date[0].getDate())
      );

      setReturnDate(utcDate);
      setErrorMessage(""); // Clear error message
    } else {
      setErrorMessage("Select return date");
    }
  };

  const handleCloseOverlay = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Prevent the event from bubbling up
    console.log("Close button clicked, hiding overlay...");
    setSrcClickedToggle(false); // Close the overlay
  };

  const handleCloseOverlays = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Prevent the event from bubbling up
    console.log("Close button clicked, hiding overlay...");
    setSrcClickedToToggle(false); // Close the overlay
  };

  useEffect(() => {
    const currentDate = new Date();
    const defaultDate = new Date(
      currentDate.setDate(currentDate.getDate() + 7)
    );
    setReturnDate(defaultDate);
  }, []);

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

  const clearOriginInput = () => {
    setOriginInputValue("");
  };

  const clearDesInput = () => {
    setDesInputValue("");
  };

  return (
    <div
      className="flighttab hide active"
      id="Flights"
      style={{ display: "block" }}
    >
      <form id="formFlightSearchEngine">
        <div className="selectflighttype">
          <ul className="active">
            <li
              className={!oneWay && "active"}
              id="T_RT"
              onclick="ShowHideSearchEngineTab('RT')"
              onClick={() => setOneWay(false)}
            >
              ROUND-TRIP
            </li>
            <li
              id="T_OW"
              onclick="ShowHideSearchEngineTab('OW')"
              className={oneWay && "active"}
              onClick={() => setOneWay(true)}
            >
              ONE-WAY
            </li>
          </ul>
        </div>

        {/* <div className="selectflighttype">
        <ul className="active">
          <li
            className={tripType === "Round-Trip" ? "active" : ""}
            id="T_RT"
            onClick={() => setTripType("Round-Trip")} // Update tripType to "Round-Trip"
          >
            ROUND-TRIP
          </li>
          <li
            className={tripType === "One-Way" ? "active" : ""}
            id="T_OW"
            onClick={() => setTripType("One-Way")} // Update tripType to "One-Way"
          >
            ONE-WAY
          </li>
        </ul>
      </div> */}

        <div className="widget-form" id="Tp_roundtrip">
          <input
            name="Direct"
            type="hidden"
            id="hdnDirectIndirect"
            defaultValue="off"
          />
          <input
            name="Airline"
            type="hidden"
            id="hdnAirlineCode"
            defaultValue="All"
          />
          <input
            name="FlightUniqueId"
            type="hidden"
            id="hdnFlightUniqueCode"
            defaultValue="9df1299f-ad94-4957-adbd-7a5f587a153c"
          />
          <input
            name="MCSector_2"
            type="hidden"
            id="hdnMC_Sec_2"
            defaultValue=""
          />
          <input
            name="TripType"
            type="hidden"
            id="hdnTripTypeCode"
            defaultValue={oneWay ? 2 : 1}
          />
          <div className="f-tabs lsn">
            <div
              className="searchSec"
              onClick={() => setSrcClickedToggle(true)}
            >
              <span>From</span>
              <div
                className="SearchOverlay txtOriginCodeOverlay"
                style={{
                  zIndex: srcClickedToggle ? 11 : -1,
                  opacity: srcClickedToggle ? 1 : 0,
                }}
              >
                <h4 className="g-orange">
                  Origin
                  <a href="#" className="close-ol" onClick={handleCloseOverlay}>
                    x
                  </a>
                </h4>
                <input
                  id="txtOriginCode"
                  type="text"
                  className="ui-autocomplete-input"
                  autoComplete="off"
                  required
                  placeholder="Enter Origin City / Airport"
                  value={originInputValue}
                  onChange={handleOriginChange}
                />
                {originInputValue && (
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={clearOriginInput}
                  >
                    &times;
                  </button>
                )}
                {isDropdownVisible && originAirportList.length > 0 && (
                  <ul
                    id="ui-id-4"
                    tabIndex={0}
                    className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                    style={{
                      top: 88,
                      left: "37.5px",
                      width: "338.5px",
                      display: originAirportList.length ? "block" : "none",
                    }}
                  >
                    {originAirportList.map((city, index) => (
                      <li
                        key={index} // Use a unique key (using 'index' can be fine here)
                        className="airList parent-auto-list ui-menu-item"
                        onClick={() => handleSelectAirport(city)} // Handle selection
                      >
                        <span className="highlight-auto-list"></span>
                        {city.label},{" "}
                        <span className="highlight-auto-list"></span>{" "}
                        {city.iataCode}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <input
                type="text"
                className="txtOriginCode"
                defaultValue=""
                autoComplete="off"
                required
                placeholder="Airport"
                value={originInputValue}
              />
              <i
                className="fa fa-times-circle demo-label"
                style={{ display: "none" }}
              />
              <input
                name="OriginCode"
                type="hidden"
                id="hdnOriginCode"
                value={origin}
              />
              <span
                id="spanOriginCityName"
                style={{ display: "none" }}
                className="spanCity"
              />
              <span
                id="spnOriginErrMsg"
                className="error-message"
                style={{ display: "none" }}
              >
                Please select origin
              </span>
            </div>

            <div
              className="full searchSec"
              onClick={() => setSrcClickedToToggle(true)}
            >
              <span>To</span>
              <div
                className="SearchOverlay txtDestCodeOverlay"
                style={{
                  zIndex: srcClickedToToggeled ? 11 : -1,
                  opacity: srcClickedToToggeled ? 1 : 0,
                }}
              >
                <h4 className="g-orange">
                  Destination
                  <a
                    href="#"
                    className="close-ol"
                    onClick={handleCloseOverlays}
                  >
                    x
                  </a>
                </h4>
                <input
                  id="txtDestCode"
                  type="text"
                  className="ui-autocomplete-input"
                  autoComplete="off"
                  value={desInputValue}
                  required
                  placeholder="Enter Destination City / Airport"
                  onChange={handleDesChange}
                />
                {desInputValue && (
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={clearDesInput}
                  >
                    &times;
                  </button>
                )}
                <i
                  className="fa fa-times-circle demo-label"
                  style={{ display: "none" }}
                />
                {isDropdownVisibleDes && desAirportList.length > 0 && (
                  <ul
                    tabIndex={0}
                    className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                    style={{
                      top: 88,
                      left: "37.5px",
                      width: "338.5px",
                      display: desAirportList.length ? "block" : "none",
                    }}
                  >
                    {/* <li className="airList parent-auto-list ui-menu-item"></li> */}
                    {desAirportList.map((city, index) => (
                      <li
                        key={index}
                        className="ui-menu-item-wrapper"
                        onClick={() => handleSelectDesAirport(city)}
                      >
                        <span className="highlight-auto-list"></span>
                        {city.label},{" "}
                        <span className="highlight-auto-list"></span>{" "}
                        {city.iataCode}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <input
                type="text"
                className="txtDestCode"
                defaultValue=""
                autoComplete="off"
                required=""
                placeholder="Airport"
                value={desInputValue}
              />
              <input
                name="DestinationCode"
                type="hidden"
                id="hdnDestinationCode"
                value={des}
              />
              <span
                id="spanDestCityName"
                style={{ display: "none" }}
                className="spanCity"
              />
              <span
                id="spnDestErrMsg"
                className="error-message"
                style={{ display: "none" }}
              >
                Please select destination
              </span>
            </div>
          </div>

          {/*DATE Start*/}
          <div className="f-tabs lsn">
            <div id="divDepartSecton" className="Date searchSec datepic">
              <div className="icon-class">
                <img src="/Content/images/date1.png" alt="Date Icon" />
              </div>
              <span>
                Depart <i className="fa fa-angle-down" aria-hidden="true" />
              </span>
              <Flatpickr
                value={depDate}
                onChange={handleDepartureChange}
                options={{
                  dateFormat: "Y-m-d",
                  minDate: "today",
                  disableMobile: true,
                }}
                render={({ defaultValue, value, ...props }, ref) => (
                  <input
                    {...props}
                    ref={ref}
                    type="text"
                    id="txtDepartDate"
                    name="DepDate"
                    className="date"
                    placeholder="Date"
                    readOnly
                  />
                )}
              />
              <p style={{ display: "none" }}>
                <span className="date" id="txtDepartDate_MMM">
                  Date
                </span>
                <span
                  className="date"
                  id="txtDepartDate_DD"
                  style={{ display: "none" }}
                />
              </p>
              <span id="txtDepartDate_DAY" style={{ display: "none" }} />
              <span id="txtDepartDate_YYYY" style={{ display: "none" }} />
              {errorMessage && (
                <div id="spnDepDateErrMsg" className="errorMsg">
                  {errorMessage}
                </div>
              )}
            </div>

            <div
              id="divReturnSection"
              className="Date searchSec datepic"
              style={{ display: oneWay ? "none" : "" }}
            >
              <div className="icon-class">
                <img src="/Content/images/date1.png" alt="Date Icon" />
              </div>
              <span>
                Return <i className="fa fa-angle-down" aria-hidden="true" />
              </span>
              <Flatpickr
                value={returnDate}
                onChange={handleReturnChange}
                options={{
                  dateFormat: "Y-m-d",
                  minDate: "today",
                  disableMobile: true,
                }}
                render={({ defaultValue, value, ...props }, ref) => (
                  <input
                    {...props}
                    ref={ref}
                    type="text"
                    id="txtReturnDate"
                    name="RetDate"
                    className="date"
                    placeholder="Date"
                    readOnly
                  />
                )}
              />
              <p style={{ display: "none" }}>
                <span className="date" id="txtReturnDate_MMM">
                  Date
                </span>
                <span
                  className="date"
                  id="txtReturnDate_DD"
                  style={{ display: "none" }}
                />
              </p>
              <span id="txtReturnDate_DAY" style={{ display: "none" }} />
              <span id="txtReturnDate_YYYY" style={{ display: "none" }} />
              {errorMessage && (
                <div id="spnRetDateErrMsg" className="errorMsg">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>

          <div>
            {/* Travel Section Tab */}
            <div className="f-tabs clspsgr">
              <div
                className="travel searchSec"
                onClick={() => setSrcClickedTravellersToggle(true)}
              >
                <span>Travelers</span>
                <div className="traveldetails">
                  <div>
                    <p id="txtPassengersAdt">
                      {String(travellerDetail.adultCount).padStart(2, "0")}
                    </p>
                    <p id="txtPassengersChd">
                      {String(travellerDetail.childrenCount).padStart(2, "0")}
                    </p>
                    <p id="txtPassengersIns">
                      {String(travellerDetail.infantOnSeatCount).padStart(
                        2,
                        "0"
                      )}
                    </p>
                    <p id="txtPassengersInl">
                      {String(travellerDetail.infantOnLapCount).padStart(
                        2,
                        "0"
                      )}
                    </p>
                  </div>
                  <div>
                    <small>Adult</small>
                    <small>Child</small>
                    <small>INF (on seat)</small>
                    <small>INF (on lap)</small>
                  </div>
                </div>
              </div>

              {/* Class Section Tab */}
              <div
                className="searchSec classP"
                onClick={() => setSrcClickedCoachToggle(true)}
              >
                <span>Class</span>
                <p id="txtClassType">{travellerDetail.cabinType}</p>
              </div>
            </div>

            {/* Traveler Selection Modal */}
            {srcClickedTravellersToggeled && (
              <div className="traveler-modal">
                <h4>Select Travelers</h4>
                <div>
                  {/* Adult Count */}
                  <div className="passenger-type">
                    <p>Adult</p>
                    <div>
                      <button onClick={() => decrementPassenger("adult")}>
                        -
                      </button>
                      <span>{travellerDetail.adultCount}</span>
                      <button onClick={() => incrementPassenger("adult")}>
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children Count */}
                  <div className="passenger-type">
                    <p>Children</p>
                    <div>
                      <button onClick={() => decrementPassenger("child")}>
                        -
                      </button>
                      <span>{travellerDetail.childrenCount}</span>
                      <button onClick={() => incrementPassenger("child")}>
                        +
                      </button>
                    </div>
                  </div>

                  {/* Infant on Lap Count */}
                  <div className="passenger-type">
                    <p>Infant (on lap)</p>
                    <div>
                      <button onClick={() => decrementPassenger("infantLap")}>
                        -
                      </button>
                      <span>{travellerDetail.infantOnLapCount}</span>
                      <button onClick={() => incrementPassenger("infantLap")}>
                        +
                      </button>
                    </div>
                  </div>

                  {/* Infant on Seat Count */}
                  <div className="passenger-type">
                    <p>Infant (on seat)</p>
                    <div>
                      <button onClick={() => decrementPassenger("infantSeat")}>
                        -
                      </button>
                      <span>{travellerDetail.infantOnSeatCount}</span>
                      <button onClick={() => incrementPassenger("infantSeat")}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSrcClickedTravellersToggle(false)}>
                  Done
                </button>
              </div>
            )}
          </div>

          <div className="smbtbtn">
            <button
              type="button"
              onClick={handleOnSubmit}
              className="btn-primary"
              id="BtnSearchFare_RTOW"
            >
              Search Flights
            </button>
          </div>
        </div>

        <span className="advance ">
          <a className="lnk_RUHUS_advanceSearch" href="javascript:void(0);">
            Advanced Search (+)
          </a>
        </span>

        <div className="advance_ruhus_SearchHolder">
          <ul>
            <li>
              <input
                id="txt_RUHUS_PreferredAirlines"
                type="text"
                autoComplete="off"
                onkeypress="return OnlyCharNumberKey(event)"
                required=""
                placeholder="Preferred Airline"
                name="PreferredAirlineName"
              />
              <input
                name="PreferredAirline"
                type="hidden"
                id="hdn_RUHUS_PreferredAirline"
              />
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  id="chk_RUHUS_DirectFlight"
                  onclick="Check_RUHUS_DirectFlight()"
                  defaultValue="Direct"
                />{" "}
                <span> Non-Stop</span>
              </label>
            </li>
          </ul>
        </div>
        <div
          className="widget-form"
          id="Tp_multicity"
          style={{ display: "none" }}
        ></div>
        <div className="" id="divUnaccompaniedMinorPopup">
          <a className="linkUnaccompaniedMinorClose">x</a>
          <div>
            Flight tickets for an unaccompanied minor are not available online.
            To book a flight for a UMNR, directly reach out to our experts at{" "}
            <strong style={{ fontWeight: "bold" }}>1-833-914-2482</strong>. For
            more details, <a href="/unaccompanied-minor">READ HERE</a>.
          </div>
        </div>
        {/*Passenger-*/}
        <div
          id="divPassengerDDL"
          className="overhdng pasenger-popup"
          style={{ display: srcClickedTravellersToggeled ? "" : "none" }}
        >
          <h4 className="g-orange">Select Travelers</h4>

          <div className="divPassengerPanel">
            {/* Adult Section */}
            <div className="divPassenger">
              <div className="divPassengerType">
                <p>Adult</p>
                <span>(18+ yrs)</span>
              </div>
              <div className="divPassengerCount">
                <div className="Add_Less_Passenger">
                  <div className="MinusPassenger">
                    <input
                      type="button"
                      value="-"
                      className="MinusPassengerBox"
                      onClick={() => decrementPassenger("adult")}
                    />
                  </div>
                  <div className="PassengerCount">
                    <input
                      type="text"
                      value={travellerDetail.adultCount}
                      className="CountPassengerBox"
                      readOnly
                    />
                  </div>
                  <div className="PlusPassenger">
                    <input
                      type="button"
                      value="+"
                      className="PlusPassengerBox"
                      onClick={() => incrementPassenger("adult")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Children Section */}
            <div className="divPassenger">
              <div className="divPassengerType">
                <p>Children</p>
                <span>(2 - 11 yrs)</span>
              </div>
              <div className="divPassengerCount">
                <div className="Add_Less_Passenger">
                  <div className="MinusPassenger">
                    <input
                      type="button"
                      value="-"
                      className="MinusPassengerBox"
                      onClick={() => decrementPassenger("child")}
                    />
                  </div>
                  <div className="PassengerCount">
                    <input
                      type="text"
                      value={travellerDetail.childrenCount}
                      className="CountPassengerBox"
                      readOnly
                    />
                  </div>
                  <div className="PlusPassenger">
                    <input
                      type="button"
                      value="+"
                      className="PlusPassengerBox"
                      onClick={() => incrementPassenger("child")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Infant (on lap) Section */}
            <div className="divPassenger">
              <div className="divPassengerType">
                <p>Infant (on lap)</p>
                <span>(Below 2 yrs)</span>
              </div>
              <div className="divPassengerCount">
                <div className="Add_Less_Passenger">
                  <div className="MinusPassenger">
                    <input
                      type="button"
                      value="-"
                      className="MinusPassengerBox"
                      onClick={() => decrementPassenger("infantLap")}
                    />
                  </div>
                  <div className="PassengerCount">
                    <input
                      type="text"
                      value={travellerDetail.infantOnLapCount}
                      className="CountPassengerBox"
                      readOnly
                    />
                  </div>
                  <div className="PlusPassenger">
                    <input
                      type="button"
                      value="+"
                      className="PlusPassengerBox"
                      onClick={() => incrementPassenger("infantLap")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Infant (on seat) Section */}
            <div className="divPassenger">
              <div className="divPassengerType">
                <p>Infant (on seat)</p>
                <span>(Below 2 yrs)</span>
              </div>
              <div className="divPassengerCount">
                <div className="Add_Less_Passenger">
                  <div className="MinusPassenger">
                    <input
                      type="button"
                      value="-"
                      className="MinusPassengerBox"
                      onClick={() => decrementPassenger("infantSeat")}
                    />
                  </div>
                  <div className="PassengerCount">
                    <input
                      type="text"
                      value={travellerDetail.infantOnSeatCount}
                      className="CountPassengerBox"
                      readOnly
                    />
                  </div>
                  <div className="PlusPassenger">
                    <input
                      type="button"
                      value="+"
                      className="PlusPassengerBox"
                      onClick={() => incrementPassenger("infantSeat")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Done Button */}
          <div
            className="btsy"
            onClick={() => setSrcClickedTravellersToggle(false)}
          >
            <a className="g-orange" id="btnPassengerDone">
              Done
            </a>
          </div>
        </div>
        {/*End passenger*/}

        {/*Class*/}

        <div>
          {/* Class Selection Modal */}
          {srcClickedCoachToggeled && (
            <div
              id="divClassTypeDDL"
              className="pasenger-popup overhdng class-mpopup"
              style={{ display: "block" }}
            >
              <h4 className="g-orange">Class</h4>
              <div className="pnlInner">
                <div className="divClassTypePanel">
                  {/* Hidden select dropdown (optional for accessibility or fallback) */}
                  <select
                    name="CabinClass"
                    id="LstCabinClass"
                    style={{ display: "none" }}
                    value={travellerDetail.cabinType}
                    onChange={(e) => handleClassSelection(e.target.value)}
                  >
                    <option value="Coach">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business Class">Business Class</option>
                    <option value="First Class">First Class</option>
                  </select>

                  <div className="pnlInner">
                    <ul>
                      <li
                        id="rdoCabin1"
                        className={
                          travellerDetail.cabinType === "Economy"
                            ? "active"
                            : ""
                        }
                        onClick={() => handleClassSelection("Economy")}
                      >
                        <span>Economy</span>
                        <span
                          className={
                            travellerDetail.cabinType === "Economy"
                              ? "act1"
                              : ""
                          }
                        />
                      </li>
                      <li
                        id="rdoCabin2"
                        className={
                          travellerDetail.cabinType === "Premium Economy"
                            ? "active"
                            : ""
                        }
                        onClick={() => handleClassSelection("Premium Economy")}
                      >
                        <span>Premium Economy</span>
                        <span
                          className={
                            travellerDetail.cabinType === "Premium Economy"
                              ? "act1"
                              : ""
                          }
                        />
                      </li>
                      <li
                        id="rdoCabin3"
                        className={
                          travellerDetail.cabinType === "Business Class"
                            ? "active"
                            : ""
                        }
                        onClick={() => handleClassSelection("Business Class")}
                      >
                        <span>Business Class</span>
                        <span
                          className={
                            travellerDetail.cabinType === "Business Class"
                              ? "act1"
                              : ""
                          }
                        />
                      </li>
                      <li
                        id="rdoCabin4"
                        className={
                          travellerDetail.cabinType === "First Class"
                            ? "active"
                            : ""
                        }
                        onClick={() => handleClassSelection("First Class")}
                      >
                        <span>First Class</span>
                        <span
                          className={
                            travellerDetail.cabinType === "First Class"
                              ? "act1"
                              : ""
                          }
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="btsy"
                  onClick={() => setSrcClickedCoachToggle(false)}
                >
                  <a className="g-orange" id="btnClassTypeDone">
                    Done
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        {/*End Class*/}
      </form>
      {/* New Calander */}
      <div
        className="calanderoverly"
        style={{
          display:
            srcClickedDepartToggeled || srcClickedReturnToggeled
              ? "block"
              : "none",
        }}
      >
        <h4 className="g-orange">
          <span>When are you departing?</span>
          <a
            href="javascript:;"
            className="close-ol-flight"
            onClick={() => {
              setSrcClickedReturnToggle(false);
              setSrcClickedDepartToggle(false);
            }}
          >
            x
          </a>
        </h4>
        <div className="seletDate-Wrap">
          <div className="departs__wrap" onclick="departWrapperClick()">
            <span className="f13">Depart</span>
            <span className="selectDates-Txt">
              <span className="txt-date" id="spanDepartDateCaption">
                Select Date
              </span>
              <span className="datevalue" id="spanDepartDateValue">
                <strong id="spanDepartDateValue_DD">25</strong>
                <span>
                  <sub id="spanDepartDateValue_MMM">Feb</sub>
                  <sup id="spanDepartDateValue_DAY">Thu</sup>
                </span>
              </span>
            </span>
          </div>
          <div className="returns__wrap" onclick="returnWrapperClick()">
            <span className="f13">Return</span>
            <span className="selectDates-Txt">
              <span className="txt-date" id="spanReturnDateCaption">
                Date
              </span>
              <span className="datevalue" id="spanReturnDateValue">
                <strong id="spanReturnDateValue_DD">25</strong>
                <span>
                  <sub id="spanReturnDateValue_MMM">Feb</sub>
                  <sup id="spanReturnDateValue_DAY">Thu</sup>
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="calendar-container">
          <CustomCalendar />
        </div>
      </div>
      {/* End New Calander */}
    </div>
  );
};
export default FlightForm;
