"use client";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";

import Flatpickr from "react-flatpickr";
import { useRef } from "react";
import "flatpickr/dist/flatpickr.css";
import airportsDB from "../../../../lib/airports.json";
import airlines from "../../../../lib/airlines.json";

const ModifyForm = ({
  oneWay,
  setOneWay,
  setFlightList,
  setFlightDetails,
  FlightList,
  ModifyForm,
  setModifyForm,
  fetchFlightOffers,
}) => {
  const [originAirportList, setOriginAirportList] = useState([]);
  const [originInputValue, setOriginInputValue] = useState(null);
  const [origin, setOrigin] = useState("");
  const [des, setDes] = useState("");
  const [desAirportList, setDesAirportList] = useState([]);
  const [desInputValue, setDesInputValue] = useState("");

  console.log("oneWay");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisibleDes, setDropdownVisibleDes] = useState(false);
  const [showPax, setShowPax] = useState(false);
  const [flights, setFlights] = useState([]);
  const paxRef = useRef(null);
  const [travellerToggle, setTravellerToggle] = useState(false);

  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infanctCount, setInfantCount] = useState(0);
  const [infantOnSeatCount, setInfantOnSeatCount] = useState(0);
  const [cabinType, setCabinType] = useState("ECONOMY");
  const [totalTraveller, setTotalTraveller] = useState(1);
  const [travellerDetail, setTravellerDetail] = useState({
    adultCount: 1,
    childrenCount: 0,
    infanctCount: 0,
    cabinType: "ECONOMY",
    totalTraveller: adultCount + childrenCount + infanctCount,
  });
  const [depDate, setDepDate] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const defaultDate = new Date(
      currentDate.setDate(currentDate.getDate() + 7)
    );
    setReturnDate(defaultDate);
  }, []);

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

  const [returnDate, setReturnDate] = useState(new Date());
  //const [errorMessage, setErrorMessage] = useState('');

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
  const searchParam = useSearchParams();
  //const oneWay = searchParam.get("oneWay") === 'true';
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [flightDetail, setFlightDetailVisible] = useState(false);
  const router = useRouter();

  const handleOnSubmit = (e) => {
    setModifyForm(true);

    const accessToken =
      localStorage.getItem("token") || searchParam.get("token");
    const searchObj = {
      originLocationCode: origin,
      destinationLocationCode: des,
      departureDate: depDate,
      returnDate: returnDate,
      adults: adultCount,
    };
    //router.push(`/searchFlight?origin=${searchObj.originLocationCode}&destination=${searchObj.destinationLocationCode}&date=${searchObj.departureDate.toISOString().substring(0, 10)}${!oneWay ? `&returnDate=${searchObj.returnDate.toISOString().substring(0, 10)}` : ''}&adults=${searchObj.adults}&token=${accessToken}&oneWay=${oneWay.toString()}`)
    // router.push(`/searchFlight?origin=${searchObj.originLocationCode}&destination=${searchObj.destinationLocationCode}&date=${searchObj.departureDate.toISOString().substring(0, 10)}${!oneWay ? `&returnDate=${searchObj.returnDate.toISOString().substring(0, 10)}` : ''}&adults=${searchObj.adults}&token=${accessToken}&oneWay=${oneWay.toString()}&originInputValue=${originInputValue}&originDesValue=${originInputValue}&desInputValue=${desInputValue}`);
    window.location.href = `/searchFlight?origin=${
      searchObj.originLocationCode
    }&destination=${
      searchObj.destinationLocationCode
    }&date=${searchObj.departureDate.toISOString().substring(0, 10)}${
      !oneWay
        ? `&returnDate=${searchObj.returnDate.toISOString().substring(0, 10)}`
        : ""
    }&adult=${travellerDetail.adultCount}&child=${
      travellerDetail.childrenCount
    }&infant=${travellerDetail.infanctCount}&cabin=${
      travellerDetail.cabinType
    }&token=${accessToken}&oneWay=${oneWay.toString()}&originInputValue=${originInputValue}&originDesValue=${originInputValue}&desInputValue=${desInputValue}&setOneWay=${setOneWay}`;
  };

  // const [flightDetails, setFlightDetails] = useState([]);
  //const [FlightList, setFlightList] = useState([]);

  const handleOriginChange = (event) => {
    console.log(event.target.value, "inputValuein handleorigin");
    setOriginInputValue(event.target.value);
    // Optionally filter airport list here based on input value
    filterSourceAirportValue(event.target.value);
    setDropdownVisible(event.target.value.length > 0);
  };
  const handleSelectAirport = (city) => {
    // console.log(city,"city in handleSelectAirport");
    setOriginInputValue(`${city.label}`);
    setOrigin(city.value);

    setDropdownVisible(false); // Update input with selected airport
  };

  const handleSelectDesAirport = (city) => {
    setDesInputValue(`${city.label}`);
    setDes(city.value);
    setDropdownVisibleDes(false); // Update input with selected airport
  };

  const filterSourceAirportValue = async () => {
    console.log(originInputValue, "originInputValue");
    try {
      const response = await fetch(
        `https://api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${originInputValue}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${searchParam.get("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result, "result");
      const options = result.data.map((a) => ({
        label: `${a.iataCode} - ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
        value: a.iataCode,
      }));

      setOriginAirportList(options);
      console.log(originAirportList, "originAirportList");
    } catch (err) {
      console.log(err, "err");
    }
  };

  const handleDesChange = (event) => {
    console.log(event.target.value, "inputValuein Desorigin");
    setDesInputValue(event.target.value);
    // Optionally filter airport list here based on input value
    filterDesAirportValue(event.target.value);
    setDropdownVisibleDes(event.target.value.length > 0);
  };

  // useEffect(() => {
  //   // Load from local storage
  //   const storedTravellerDetail = localStorage.getItem("travellerDetail");
  //   if (storedTravellerDetail) {
  //     setTravellerDetail(JSON.parse(storedTravellerDetail));
  //   }
  // }, []);

  const handleApplyFilter = (e) => {
    e.preventDefault();
    let filter = travellerDetail;
    filter.adultCount = adultCount;
    filter.childrenCount = childrenCount;
    filter.infanctCount = infanctCount + infantOnSeatCount;
    filter.cabinType = cabinType;
    filter.totalTraveller = totalTraveller;
    setTravellerDetail(filter);
    setTravellerToggle(false);
    setShowPax(false);
  };

  const handleCabinTypeChange = (event) => {
    setCabinType(event.target.value);
  };

  const fetchNearestAirports = async () => {
    setOriginInputValue(searchParam.get("originInputValue"));
    setDesInputValue(searchParam.get("desInputValue"));
    setDepDate(searchParam.get("date"));
    {
      !oneWay && setReturnDate(searchParam.get("returnDate"));
    }

    let filter = [];
    filter.adultCount = searchParam.get("adult");
    filter.childrenCount = searchParam.get("child");
    filter.infanctCount = searchParam.get("infant");
    filter.cabinType = searchParam.get("cabin");
    filter.totalTraveller =
      filter.adultCount + filter.childrenCount + filter.infanctCount;
    setTravellerDetail(filter);
    //setTravellerDetail(searchParam.get("adults"));
  };

  const handleOneWay = () => {
    setOneWay(false);
  };

  useEffect(() => {
    fetchNearestAirports();
  }, []);

  const filterDesAirportValue = async () => {
    try {
      let response = await fetch(
        `https://api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${desInputValue}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${searchParam.get("token")}`,
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

  return (
    <form id="formFlightSearchEngine">
      <section className="flight-trip">
        <div className="roundTripHolder">
          <ul className="active">
            <li
              className={!oneWay ? "active" : ""}
              id="T_RT"
              onClick={() => {
                handleOneWay();
              }}
            >
              ROUND-TRIP
            </li>
            <li
              id="T_OW"
              onclick="ShowHideSearchEngineTab('OW')"
              className={oneWay ? "active" : ""}
              onClick={() => setOneWay(true)}
            >
              ONE-WAY
            </li>
          </ul>
        </div>
        <div className="searchbox in active" id="Tp_roundtrip">
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
            defaultValue="563ac62b-df16-4efc-ab8d-693299a28d17"
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
            defaultValue={1}
          />
          <div className="From searchSec origin">
            <div className="icon-class">
              <img src="/Content/images/plane.png" />
            </div>
            <span>From</span>

            <input
              id="txtOriginCode"
              type="text"
              className="ui-autocomplete-input"
              autoComplete="off"
              value={originInputValue}
              required
              placeholder="Departure"
              onChange={handleOriginChange}
            />
            <i
              className="fa fa-times-circle demo-label"
              style={{ display: "none" }}
            />

            {isDropdownVisible && originAirportList.length > 0 && (
              <ul
                id="ui-id-1"
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
                    key={index} // Use a unique key
                    className="airList parent-auto-list ui-menu-item"
                    onClick={() => handleSelectAirport(city)} // Handle selection
                  >
                    <span className="highlight-auto-list"></span>
                    {city.label}, <span className="highlight-auto-list"></span>{" "}
                    {city.iataCode}
                  </li>
                ))}
              </ul>
            )}

            <input name="OriginCode" type="hidden" id="hdnOriginCode" />
            <span
              id="spanOriginCityName"
              className="spanCity"
              style={{ display: "none" }}
            />
            <div
              id="spnOriginErrMsg"
              className="errorMsg"
              style={{ display: "none" }}
            >
              Please select origin
            </div>
            <img
              src="/Content/images/destChange-icon.png"
              className="swapDest"
              style={{ display: "none" }}
            />
          </div>
          <div className="To searchSec origin dset">
            <div className="icon-class">
              <img src="/Content/images/point.png" />
            </div>
            <span>To</span>

            <input
              id="txtDestCode"
              type="text"
              className="ui-autocomplete-input"
              autoComplete="off"
              value={desInputValue}
              required
              placeholder="Destination"
              onChange={handleDesChange}
            />
            <i
              className="fa fa-times-circle demo-label"
              style={{ display: "none" }}
            />

            {isDropdownVisibleDes && desAirportList.length > 0 && (
              <ul
                id="ui-id-1"
                tabIndex={0}
                className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                style={{
                  top: 88, // Adjust based on your layout
                  left: "37.5px", // Adjust based on your layout
                  width: "338.5px",
                  display: desAirportList.length ? "block" : "none",
                }}
              >
                {desAirportList.map((city, index) => (
                  <li
                    key={index} // Use a unique key
                    className="airList parent-auto-list ui-menu-item"
                    onClick={() => handleSelectDesAirport(city)} // Handle selection
                  >
                    <span className="highlight-auto-list"></span>
                    {city.label}, <span className="highlight-auto-list"></span>{" "}
                    {city.iataCode}
                  </li>
                ))}
              </ul>
            )}

            <input
              name="DestinationCode"
              type="hidden"
              id="hdnDestinationCode"
            />
            <span
              id="spanDestCityName"
              className="spanCity"
              style={{ display: "none" }}
            />
            <div
              id="spnDestErrMsg"
              className="errorMsg"
              style={{ display: "none" }}
            >
              Please select destination
            </div>
          </div>

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

          <div
            className="Traveler searchSec txtPassengers"
            onClick={() => setTravellerToggle((prev) => !prev)}
          >
            <div className="icon-class">
              <img src="/Content/images/psger.png" alt="Traveler Icon" />
            </div>
            <span>
              Travelers <i className="fa fa-angle-down" aria-hidden="true" />
            </span>
            <h6>
              <input
                id="txtPassengers"
                type="text"
                // placeholder={`${
                //   travellerDetail.totalTraveller != 1 ? 1 : 1

                // }
                // Traveler${travellerDetail.totalTraveller !== 1 ? "s" : ""}, ${
                //   travellerDetail.cabinType
                // }`}
                // value={`${travellerDetail.totalTraveller} Traveler${
                //   travellerDetail.totalTraveller !== 1 ? "s" : ""
                // }, ${travellerDetail.cabinType}`}
                value={`${travellerDetail.adultCount} Traveller, ${
                  travellerDetail.childrenCount
                    ? travellerDetail.childrenCount + "Children,"
                    : ""
                } ${
                  travellerDetail.infanctCount
                    ? travellerDetail.infanctCount + "Infants,"
                    : ""
                } ${travellerDetail.cabinType && travellerDetail.cabinType} `}
                readOnly
                onClick={() => {
                  setShowPax((p) => !p);
                }}
                ref={paxRef}
              />
              <b id="txtClassType" style={{ display: "none" }}>
                {travellerDetail.cabinType}
              </b>
            </h6>
            <b id="txtPassengersDetails" style={{ display: "none" }}>
              {travellerDetail.adultCount} Adult
              {travellerDetail.adultCount !== 1 ? "s" : ""}
            </b>
          </div>

          <div className="button-search">
            <button
              type="button"
              style={{ display: "none" }}
              className="submit g-orange"
              id="BtnSearchFare_RTOW_Deal"
            >
              Search Now
            </button>
            <button
              type="button"
              className="submit g-orange"
              id="BtnSearchFare_RTOW"
              onClick={handleOnSubmit}
            >
              Modify Search
            </button>
          </div>
        </div>
        <span className="advance ">
          <a className="lnk_RUHUS_advanceSearch" href="javascript:void(0);">
            Advanced Search (+)
          </a>
        </span>
        <div className="advance_ruhus_SearchHolder" style={{ display: "none" }}>
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
                className="ui-autocomplete-input"
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
        <span className="minor">
          <a
            href="javascript:void(0);"
            style={{ color: "#000" }}
            className="lnkUMNR_RUHUS"
          >
            Unaccompanied Minor
          </a>
        </span>
        <div
          className="searchbox"
          id="Tp_multicity"
          style={{ display: "none" }}
        ></div>
      </section>
      <div className="" id="divUnaccompaniedMinorPopup">
        <a className="linkUnaccompaniedMinorClose">x</a>
        <div>
          Flight tickets for an unaccompanied minor are not available online. To
          book a flight for a UMNR, directly reach out to our experts at{" "}
          <strong style={{ fontWeight: "bold" }}>1-833-914-2482</strong>. For
          more details, <a href="/unaccompanied-minor">READ HERE</a>.
        </div>
      </div>
      <div
        id="divPassengerDDL"
        className="pasenger-popup"
        style={{ display: travellerToggle ? "" : "none" }}
      >
        <div className="divPassengerPanel">
          <h2>Select Travelers</h2>

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
                    onClick={() =>
                      setAdultCount((prev) => Math.max(0, prev - 1))
                    }
                  />
                </div>
                <div className="PassengerCount">
                  <input
                    type="text"
                    value={adultCount}
                    className="CountPassengerBox"
                    readOnly
                  />
                </div>
                <div className="PlusPassenger">
                  <input
                    type="button"
                    value="+"
                    className="PlusPassengerBox"
                    onClick={() =>
                      setAdultCount((prev) => Math.min(9, prev + 1))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

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
                    onClick={() =>
                      setChildrenCount((prev) => Math.max(0, prev - 1))
                    }
                  />
                </div>
                <div className="PassengerCount">
                  <input
                    type="text"
                    value={childrenCount}
                    className="CountPassengerBox"
                    readOnly
                  />
                </div>
                <div className="PlusPassenger">
                  <input
                    type="button"
                    value="+"
                    className="PlusPassengerBox"
                    onClick={() =>
                      setChildrenCount((prev) => Math.min(8, prev + 1))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

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
                    onClick={() =>
                      setInfantCount((prev) => Math.max(0, prev - 1))
                    }
                  />
                </div>
                <div className="PassengerCount">
                  <input
                    type="text"
                    value={infanctCount}
                    className="CountPassengerBox"
                    readOnly
                  />
                </div>
                <div className="PlusPassenger">
                  <input
                    type="button"
                    value="+"
                    className="PlusPassengerBox"
                    onClick={() =>
                      setInfantCount((prev) => Math.min(4, prev + 1))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

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
                    onClick={() =>
                      setInfantOnSeatCount((prev) => Math.max(0, prev - 1))
                    }
                  />
                </div>
                <div className="PassengerCount">
                  <input
                    type="text"
                    value={infantOnSeatCount}
                    className="CountPassengerBox"
                    readOnly
                  />
                </div>
                <div className="PlusPassenger">
                  <input
                    type="button"
                    value="+"
                    className="PlusPassengerBox"
                    onClick={() =>
                      setInfantOnSeatCount((prev) => Math.min(4, prev + 1))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="class-mpopup">
            <h2>Select Class</h2>
            <select
              name="CabinClass"
              id="LstCabinClass"
              value={cabinType}
              onChange={handleCabinTypeChange}
            >
              <option value="ECONOMY">Economy</option>
              <option value="Premium_Economy">Premium Economy</option>
              <option value="BUSINESS">Business</option>
              <option value="FIRST">First</option>
            </select>
          </div>

          <div className="btsy">
            <button
              onClick={handleApplyFilter}
              className="g-orange"
              id="btnPassengerDone"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ModifyForm;
