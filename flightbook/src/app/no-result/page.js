"use client";
import { useState, useEffect } from "react";

import Copyright from "../_components/copyright/page";
import Footer from "../_components/footer/page";
import FooterDesktop from "../_components/FooterDesktop/page";
import Navbar from "../_components/navbar/page";
import NavbarDesktop from "../_components/NavbarDesktop/page";
import Section4 from "../_components/section4/page";

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

const No_Result = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  useEffect(() => {
    // console.log(isMobile, "is mobile");
    const listing = document.createElement("link");
    listing.rel = "stylesheet";
    listing.href = "/listing.css";

    const errorpage = document.createElement("link");
    errorpage.rel = "stylesheet";
    errorpage.href = "/Content/css/error-pages.css";

    const flight_popup = document.createElement("link");
    flight_popup.rel = "stylesheet";
    flight_popup.href = "/Content/css/flight-popup.css";

    //   console.log("Is Mobile Loaded");
    document.head.appendChild(listing);
    document.head.appendChild(errorpage);
    document.head.appendChild(flight_popup);

    return () => {
      if (document.head.contains(listing)) {
        document.head.removeChild(listing);
      }
      if (document.head.contains(flight_popup)) {
        document.head.removeChild(flight_popup);
      }
      if (document.head.contains(errorpage)) {
        document.head.removeChild(errorpage);
      }
    };
    // };
  }, [isMobile]);
  return (
    <>
      {isMobile ? <Navbar /> : <NavbarDesktop />}
      <section className="listingmain">
        <div className="overlay-div" />
        <div className="">
          <link href="/Content/css/lightpick.css?v=RUS2021" rel="stylesheet" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    /*ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content {\n        top: 178.719px !important;\n    }*/\n    #formFlightSearchEngine {\n    width: 86%;\n    margin: 0 auto;\n}\n    /*section.lightpick {\n        top: 434.17px !important;\n    }*/\n    .container-fluid{width:100%;display:inline-block;}\n    .advance_ruhus_SearchHolder {\n  z-index:1;top:150px!important;\n    left: 7px!important;\n}\n    .flight-trip{position:relative}\n\n    \n.advance_ruhus_SearchHolder {\n    display: none;\n    position: absolute;\n    width: 350px;\n    background: #fff;\n    top: 142px;\n    left: 0;\n    padding: 4px 15px 15px 28px;\n    box-shadow: 0 3px 4px #333;\n}\n.advance_ruhus_SearchHolder ul {\n    display: flex;\n    align-items: center;\n}\n.advance_ruhus_SearchHolder input {\n    padding: 10px 15px;\n    border: 1px solid #ccc;\n    margin-right: 15px;\n}\n.advance_ruhus_SearchHolder input#chk_RUHUS_DirectFlight {\n    margin: 0;\n    width: 17px;\n}\n.advance_ruhus_SearchHolder input#chk_RUHUS_DirectFlight {\n    width: 17px;\n    margin-right: 4px;\n}\n.advance_ruhus_SearchHolder ul label {\n    display: flex;\n    font-size: 12px;\n    color: #181818;\n}\n\n\n\n #formFlightSearchEngine{\n        position:relative;\n    }\n   .close-search {\n       cursor: pointer;\n    background: #d90001;\n    color: #fff;\n    font-family: 'poppinssemibold';\n    padding: 5px;\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    width: 33px;\n    text-align: center;\n    z-index: 2;\n    text-decoration: none;\n}\n   \n   .btn-search-show {\n    color: #fff;\n    width: 144px;\n    padding: 7px;\n    text-align: center;\n    background: #d90001;\n    border: none;\n    text-transform: uppercase;\n    font-family: 'poppinssemibold';\n    border-bottom-left-radius: 50px;\n    border-bottom-right-radius: 50px;\n    cursor:pointer;\n}\n   .btn-show{\n       position: absolute;\n    right: 41px;\n   }\n   span.minor{\n       position: absolute;\n    top: 31px;\n    right: 4px;\n   }\n   .flight-trip .roundTripHolder{\n       padding-top:29px;\n   }\n",
            }}
          />
          <div className="container-fluid">
            <div className="landing-widget">
              <form id="formFlightSearchEngine">
                <section className="flight-trip">
                  <div className="roundTripHolder">
                    <ul className="active">
                      <li
                        className=""
                        id="T_RT"
                        onclick="ShowHideSearchEngineTab('RT')"
                      >
                        ROUND-TRIP
                      </li>
                      <li
                        id="T_OW"
                        onclick="ShowHideSearchEngineTab('OW')"
                        className="active"
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
                      defaultValue="cd50892a-17db-48bf-a3e8-83a6cae626b7"
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
                      defaultValue={2}
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
                        onkeypress="return isCharWithSpaceHyphen(event)"
                        defaultValue="Patna( PAT - Jay Prakash Narayan International Airport)"
                        required=""
                        placeholder="Departure"
                      />
                      <i className="fa fa-times-circle demo-label" />
                      <input
                        name="OriginCode"
                        type="hidden"
                        id="hdnOriginCode"
                        defaultValue="PAT"
                      />
                      <span
                        id="spanOriginCityName"
                        className="spanCity"
                        style={{ display: "none" }}
                      >
                        Patna( PAT - Jay Prakash Narayan International Airport)
                      </span>
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
                        onkeypress="return isCharWithSpaceHyphen(event)"
                        defaultValue="Biskra( BSK - Mohamed Khider Airport)"
                        required=""
                        placeholder="Destination"
                      />
                      <i className="fa fa-times-circle demo-label" />
                      <input
                        name="DestinationCode"
                        type="hidden"
                        id="hdnDestinationCode"
                        defaultValue="BSK"
                      />
                      <span
                        id="spanDestCityName"
                        className="spanCity"
                        style={{ display: "none" }}
                      >
                        Biskra( BSK - Mohamed Khider Airport)
                      </span>
                      <div
                        id="spnDestErrMsg"
                        className="errorMsg"
                        style={{ display: "none" }}
                      >
                        Please select destination
                      </div>
                    </div>
                    <div
                      id="divDepartSecton"
                      className="Date searchSec datepic"
                    >
                      <div className="icon-class">
                        <img src="/Content/images/date1.png" />
                      </div>
                      <span>
                        Depart{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </span>
                      <input
                        type="text"
                        id="txtDepartDate"
                        name="DepDate"
                        className="date"
                        placeholder="Date"
                        readOnly="readonly"
                      />
                      <p style={{ display: "none" }}>
                        <span className="date" id="txtDepartDate_MMM">
                          Nov 30
                        </span>
                        <span
                          className="date"
                          id="txtDepartDate_DD"
                          style={{ display: "none" }}
                        >
                          30
                        </span>
                      </p>
                      <span id="txtDepartDate_DAY" style={{ display: "none" }}>
                        Sat
                      </span>{" "}
                      <span id="txtDepartDate_YYYY" style={{ display: "none" }}>
                        2024
                      </span>
                      <div
                        id="spnDepDateErrMsg"
                        style={{ display: "none" }}
                        className="errorMsg"
                      >
                        Select depart date
                      </div>
                    </div>
                    <div
                      id="divReturnSection"
                      className="Date searchSec datepic"
                      style={{ display: "none" }}
                    >
                      <div className="icon-class">
                        <img src="/Content/images/date1.png" />
                      </div>
                      <span>
                        Return{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </span>
                      <input
                        type="text"
                        id="txtReturnDate"
                        name="RetDate"
                        className="date"
                        placeholder="Date"
                        readOnly="readonly"
                      />
                      <p style={{ display: "none" }}>
                        <span className="date" id="txtReturnDate_MMM">
                          DATE
                        </span>
                        <span
                          className="date"
                          id="txtReturnDate_DD"
                          style={{ display: "none" }}
                        />
                      </p>
                      <span
                        id="txtReturnDate_DAY"
                        style={{ display: "none" }}
                      />{" "}
                      <span
                        id="txtReturnDate_YYYY"
                        style={{ display: "none" }}
                      />
                      <div
                        id="spnRetDateErrMsg"
                        className="errorMsg"
                        style={{ display: "none" }}
                      >
                        Select return date
                      </div>
                    </div>
                    <div className="Traveler searchSec txtPassengers">
                      <div className="icon-class">
                        <img src="/Content/images/psger.png" />
                      </div>
                      <span>
                        Travelers{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </span>
                      <h6>
                        <input
                          id="txtPassengers"
                          type="text"
                          placeholder="1 Traveler, Coach"
                          readOnly=""
                        />{" "}
                        <b id="txtClassType" style={{ display: "none" }}>
                          Coach
                        </b>
                      </h6>
                      <b id="txtPassengersDetails" style={{ display: "none" }}>
                        1 Adult
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
                      >
                        Modify Search
                      </button>
                    </div>
                  </div>
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
                  <div
                    className="searchbox"
                    id="Tp_multicity"
                    style={{ display: "none" }}
                  ></div>
                </section>
                {/*Passenger-*/}
                <div
                  id="divPassengerDDL"
                  className="pasenger-popup"
                  style={{ display: "none" }}
                >
                  <div className="">
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
                                defaultValue="-"
                                className="MinusPassengerBox"
                                field="quantity"
                                onclick="UpdatePassengerCount(2,'ADT',1)"
                              />
                            </div>
                            <div className="PassengerCount">
                              <input
                                type="text"
                                defaultValue={1}
                                className="CountPassengerBox"
                                name="AdultPaxCount"
                                id="txtAdultPassenger"
                                readOnly=""
                              />
                            </div>
                            <div className="PlusPassenger">
                              <input
                                type="button"
                                defaultValue="+"
                                className="PlusPassengerBox"
                                field="quantity"
                                onclick="UpdatePassengerCount(1,'ADT',1)"
                              />
                            </div>
                            <div className="ClearPassengerCount" />
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
                                defaultValue="-"
                                className="MinusPassengerBox"
                                field="quantity"
                                onclick="UpdatePassengerCount(2,'CHD',1)"
                              />
                            </div>
                            <div className="PassengerCount">
                              <input
                                type="text"
                                defaultValue={0}
                                className="CountPassengerBox"
                                name="ChildPaxCount"
                                paxtype="CHD"
                                id="txtChildPassenger"
                                readOnly=""
                              />
                            </div>
                            <div className="PlusPassenger">
                              <input
                                type="button"
                                defaultValue="+"
                                className="PlusPassengerBox"
                                field="quantity"
                                onclick="UpdatePassengerCount(1,'CHD',1)"
                              />
                            </div>
                            <div className="ClearPassengerCount" />
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
                                defaultValue="-"
                                className="MinusPassengerBox"
                                field="quantity"
                                onclick="UpdatePassengerCount(2,'INFL',1)"
                              />
                            </div>
                            <div className="PassengerCount">
                              <input
                                type="text"
                                defaultValue={0}
                                className="CountPassengerBox"
                                name="InfantLapPaxCount"
                                paxtype="INF"
                                id="txtInfantPassenger"
                                readOnly=""
                              />
                            </div>
                            <div className="PlusPassenger">
                              <input
                                type="button"
                                defaultValue="+"
                                className="PlusPassengerBox"
                                field="quantity"
                                onclick="UpdatePassengerCount(1,'INFL',1)"
                              />
                            </div>
                            <div className="ClearPassengerCount" />
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
                                defaultValue="-"
                                className="MinusPassengerBox"
                                field="quantity"
                                onclick="UpdatePassengerCount(2,'INFS',1)"
                              />
                            </div>
                            <div className="PassengerCount">
                              <input
                                type="text"
                                defaultValue={0}
                                className="CountPassengerBox"
                                name="InfantSeatPaxCount"
                                paxtype="INFS"
                                id="txtInfantSeatPassenger"
                                readOnly=""
                              />
                            </div>
                            <div className="PlusPassenger">
                              <input
                                type="button"
                                defaultValue="+"
                                className="PlusPassengerBox"
                                field="quantity"
                                onclick="UpdatePassengerCount(1,'INFS',1)"
                              />
                            </div>
                            <div className="ClearPassengerCount" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Class*/}
                    <div className="class-mpopup">
                      <div className="pnlInner">
                        <div className="divClassTypePanel">
                          <h2>Select Class</h2>
                          <select
                            name="CabinClass"
                            id="LstCabinClass"
                            style={{ display: "none" }}
                          >
                            <option value={1} selected="">
                              Coach
                            </option>
                            <option value={2}>Premium Economy</option>
                            <option value={3}>Business Class</option>
                            <option value={4}>First Class</option>
                          </select>
                          <div className="pnlInner">
                            <div
                              id="rdoCabin1"
                              className="selectpassenger active"
                            >
                              <span>Coach</span> <span className="act1" />
                            </div>
                            <div id="rdoCabin2" className="selectpassenger">
                              <span>Premium Economy</span> <span className="" />
                            </div>
                            <div id="rdoCabin3" className="selectpassenger">
                              <span>Business Class</span> <span className="" />
                            </div>
                            <div id="rdoCabin4" className="selectpassenger">
                              <span>First Class</span> <span className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End Class*/}
                    <div className="btsy">
                      <a className="g-orange" id="btnPassengerDone">
                        Done
                      </a>
                    </div>
                  </div>
                </div>
                {/*End passenger*/}
              </form>
            </div>
          </div>
        </div>
        {/* main Listing */}
        <div className="main-lisitng">
          <div className="filter-btn">
            <a href="javascript:void(0);" className="filter-side">
              Filter
            </a>
            <a href="javascript:void(0);" className="filter-close">
              Close
            </a>
          </div>
          <div className="container">
            <div
              className="sidebar-left filter-option sidebar-filter"
              style={{ display: "none" }}
            >
              <div className="fixme">
                <div className="filtertop ">
                  <h2>Filter by</h2>
                  <a
                    href="javascript:void(0)"
                    id="top-filter-clear"
                    className="clearftr"
                    style={{ display: "none" }}
                  >
                    Reset
                  </a>
                </div>
                <div className="filter-stops">
                  <h3>Stops</h3>
                  <input
                    id="obstop-All"
                    className="hidden"
                    type="checkbox"
                    defaultChecked="checked"
                    name="stop"
                    data-id="obstopAll"
                  />
                  <div className="stops"></div>
                </div>
                <div className="filter-flexi">
                  <h3>Flexi Fares</h3>
                  <ul>
                    <li
                      className="tipsy-alternate sort-alternate"
                      style={{ display: "none" }}
                    >
                      <input
                        type="hidden"
                        id="hdnsortalternate"
                        name="hdnsortalternate"
                        defaultValue="ASC"
                      />
                      <a href="javascript:void(0)">Alternate Dates</a>
                    </li>
                    <li
                      className="tipsy-nearby sort-nearby"
                      style={{ display: "none" }}
                    >
                      <input
                        type="hidden"
                        id="hdnsortnearby"
                        name="hdnsortnearby"
                        defaultValue="ASC"
                      />
                      <a href="javascript:void(0)">Nearby Airports</a>
                    </li>
                  </ul>
                </div>
                <div className="filter-price">
                  <h3>
                    Price <span>(Total Price Per person inc. Fee)</span>
                  </h3>
                  {/* Ranger */}
                  <div
                    id="slider-range"
                    className="price-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <label className="label-min">$0</label>
                    <input
                      id="price-slider"
                      type="text"
                      style={{ display: "none" }}
                      className="range"
                      defaultValue="0,9000"
                    />
                    <div
                      className="ui-slider-range ui-corner-all ui-widget-header"
                      style={{ left: "0%", width: "100%" }}
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "0%" }}
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "100%" }}
                    />
                    <label className="label-max">$9000</label>
                  </div>
                  {/* End Ranger */}
                </div>
                <div className=" filter-duration">
                  <h3>Flight Duration</h3>
                  {/* Ranger */}
                  <div
                    id="slider-ranged"
                    className="duration-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    data-start={0}
                    data-end={0}
                  >
                    <input
                      id="duration-slider"
                      type="text"
                      className="range"
                      style={{ display: "none" }}
                      defaultValue="00:00,00:00"
                    />
                    <div className="ui-slider-range ui-corner-all ui-widget-header" />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                    />
                    <label className="label-min">00 hr 00 min</label>
                    <label className="label-max">00 hr 00 min</label>
                  </div>
                  {/* End Ranger */}
                </div>
                {/* Departure time */}
                <div className="departure-time">
                  <h3>
                    Departure time <span>from Patna </span>
                  </h3>
                  <ul className="box-design">
                    <li>
                      <a href="javascript:void(0)">
                        <img src="/Content/images/morning-icon.png" />
                        <p>Morning</p>
                        <span>00:01AM-11:59AM</span>
                        <input
                          type="checkbox"
                          id="obdepTime_0001_1159"
                          name="obdepTime"
                          data-id="0001_1159"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img src="/Content/images/afternon-icon.png" />
                        <p>Afternoon</p>
                        <span>12:00PM-05:59PM</span>
                        <input
                          type="checkbox"
                          id="obdepTime_1200_1759"
                          name="obdepTime"
                          data-id="1200_1759"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img src="/Content/images/eveing-icon.png" />
                        <p>Evening</p>
                        <span>06:00PM-11:59PM</span>
                        <input
                          type="checkbox"
                          id="obdepTime_1800_2359"
                          name="obdepTime"
                          data-id="1800_2359"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Departure time */}
                {/* Departure Airports */}
                <div className="Departure-airport">
                  <div className="main-maije">
                    <h3>
                      Departure Airports <span>From</span>
                    </h3>
                    <input
                      id="obdepcity-All"
                      type="checkbox"
                      className="hidden"
                      defaultChecked="checked"
                      name="obdep"
                      data-id="obdepcityAll"
                    />
                    <div className="">{/* item */}</div>
                  </div>
                </div>
                {/* Departure Airports */}
                {/*  Airlines */}
                <div className="filter-airlines">
                  <div className="main-maije">
                    <h3>Airlines</h3>
                    <div className="checkboxs" style={{ display: "none" }}>
                      <input
                        id="airl-All"
                        type="checkbox"
                        className="hidden"
                        defaultChecked="checked"
                        name="airl"
                        data-id="airlAll"
                      />
                      Select all
                      <input
                        id="airl"
                        style={{ display: "none" }}
                        type="checkbox"
                        name="airl"
                        data-id={9}
                      />
                      <span className="checkmark" />
                    </div>
                    <div className="showmoreitem"></div>
                  </div>
                </div>
                {/* Departure Airports */}
                {/* save-big */}
                <div className="save-big">
                  <img src="/Content/images/savebig.png" />
                  <h4>Book over the phone for call-only deals</h4>
                  <div className="phonenbr">
                    <span>Call Us On</span>
                    <p>
                      <a
                        className="call-phone-number"
                        href="javascript:void(0);"
                      >
                        1-833-914-2482
                      </a>
                    </p>
                  </div>
                </div>
                {/* End save-big */}
              </div>
            </div>
            {/* main Listing */}
            {/* Class Main Container */}
            <div className="cover-fltr" />
            {/* Filter button */}
            <div className="filter-sortbtn">
              <a href="javascript:void(0);" className="filterbnt">
                <i className="fa fa-th-list" /> FILTER
              </a>
            </div>
            {/* End Filter button */}
            <div className="right-listing right-bar expandDiv">
              {/* short by */}
              <div
                className="shortby  sort-area"
                id="dvChpfastprice"
                style={{ display: "none" }}
              >
                <ul>
                  <li className="active tipsy-cheapest sort-price">
                    <input
                      type="hidden"
                      id="hdnsortprice"
                      name="hdnsortprice"
                      defaultValue="ASC"
                    />
                    <a href="javascript:void(0)">cheapest</a>
                  </li>
                  <li className="tipsy-best sort-pricetime ">
                    <input
                      type="hidden"
                      id="hdnsortpricetime"
                      name="hdnsortpricetime"
                      defaultValue="ASC"
                    />
                    <a href="javascript:void(0)">recommended</a>
                  </li>
                  <li className="tipsy-fastest sort-traveltime">
                    <input
                      type="hidden"
                      id="hdnsorttraveltime"
                      name="hdnsorttraveltime"
                      defaultValue="ASC"
                    />
                    <a href="javascript:void(0)">quickest</a>
                  </li>
                  <li className="tipsy-earliest sort-earliest">
                    <input
                      type="hidden"
                      id="hdnsortearliest"
                      name="hdnsortearliest"
                      defaultValue="ASC"
                    />
                    <a href="javascript:;">earliest</a>
                  </li>
                </ul>
              </div>
              {/*End short by */}
              {/* Short by price */}
              <div className="shortbytp">
                <div className="shortbyprice" style={{ display: "none" }}></div>
                <div>
                  <p>
                    * Airfares include all{" "}
                    <a
                      href="javascript:void(0)"
                      onclick="openpopupwindow('/service-fees')"
                    >
                      our service fees
                    </a>
                    ,{" "}
                    <a target="_blank" href="/taxes-and-fee">
                      taxes and fees
                    </a>
                    . Bonuses may apply to some airfares. Read our{" "}
                    <a target="_blank" href="/baggage-policy">
                      baggage policy
                    </a>{" "}
                    for baggage charge details. Some flights may be for
                    alternate dates or airports. All intended results may not be
                    guaranteed.
                  </p>
                </div>
              </div>
              {/* End Short by price */}
              {/* listing box */}
              <div
                className="listingbox-main"
                id="dvAirListing"
                style={{ display: "none" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.LcT {text-transform: lowercase;}\n.UcT {text-transform: uppercase;font: bold;}\n.CamelT {text-transform: capitalize;\n    }\n",
                  }}
                />
              </div>
              <div id="lblMsg" style={{ display: "block" }}>
                {/* No Results */}
                <link
                  href="/Content/css/error-pages.css?v=RUS2021"
                  rel="stylesheet"
                  type="text/css"
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n    header nav{\n        background:#000;\n    }\n    .landing-widget{\n        display:none;\n    }\n    .main-lisitng {\n  margin-top: -20px;\n}\n\n    .right-listing2{width:auto!important;background:none!important}\n.main-lisitng:after{display:none}\n.main-lisitng .right-listing{\n    width: 100%;\n   padding:0;\n    float: none;\n}\n.container{\n    width:auto;\n}\n.shortbytp p {\n   padding: 17px 20px 13px 20px;\n   display: none;\n}\n",
                  }}
                />
                <section className="booking-failded norsultfound">
                  <div className="container">
                    <div className="contents">
                      <img src="/Content/images/no-result-fond-icon.png" />
                      <h1>No RESULTS FOUND!</h1>
                      <p>No results found for your search criteria.</p>
                      <div className="noresult-numbr">
                        <a href="/" id="btnModifySearchError" className="">
                          GO TO HOME PAGE
                        </a>
                      </div>
                      <div className="divdr">
                        <span>or</span>
                      </div>
                      <p>Call our Travel Experts for best flight deals</p>
                      <div className="number" style={{ marginTop: 0 }}>
                        <a href="tel:1-833-914-2482">
                          <img src="/Content/images/phone-icon.png" />{" "}
                          1-833-914-2482
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* =========== Flight List End============== */}
              <input type="hidden" id="MinPrice" defaultValue={0} />
              <input type="hidden" id="MaxPrice" defaultValue={9000} />
              <input type="hidden" id="MaxConnectTime" defaultValue={0} />
              <input type="hidden" id="MinHourCon" defaultValue={0} />
              <input type="hidden" id="MaxHourCon" defaultValue={0} />
              <input type="hidden" id="MinHourArr" defaultValue={0} />
              <input type="hidden" id="MaxHourArr" defaultValue={1440} />
              <input type="hidden" id="hdncurrencySymbol" defaultValue="$" />
              <input type="hidden" id="hdnSortOrder" defaultValue="Cheapest" />
              <input type="hidden" id="hdnAMTypeAirPrice" defaultValue="" />
              {/* End listing box */}
            </div>
          </div>
        </div>
        {/* End main Listing */}
      </section>
      {isMobile ? <Footer /> : <FooterDesktop />}
    </>
  );
};
export default No_Result;
