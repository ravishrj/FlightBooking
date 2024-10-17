//import FlightCarousel from "../carousel/page"
import dynamic from 'next/dynamic';

const FlightCarousel = dynamic(() => import('../carousel/page'), {
  ssr: false, // This ensures the component is only rendered on the client
});
const SearchFlight=()=>{
    return <section className="listingmain">
    <div className="overlay-div" />
    <div className="">
      <link href="/Content/css/lightpick.css?v=RUS2021" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    /*ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content {\n        top: 178.719px !important;\n    }*/\n    #formFlightSearchEngine {\n    width: 86%;\n    margin: 0 auto;\n}\n    /*section.lightpick {\n        top: 434.17px !important;\n    }*/\n    .container-fluid{width:100%;display:inline-block;}\n    .advance_ruhus_SearchHolder {\n  z-index:1;top:150px!important;\n    left: 7px!important;\n}\n    .flight-trip{position:relative}\n\n    \n.advance_ruhus_SearchHolder {\n    display: none;\n    position: absolute;\n    width: 350px;\n    background: #fff;\n    top: 142px;\n    left: 0;\n    padding: 4px 15px 15px 28px;\n    box-shadow: 0 3px 4px #333;\n}\n.advance_ruhus_SearchHolder ul {\n    display: flex;\n    align-items: center;\n}\n.advance_ruhus_SearchHolder input {\n    padding: 10px 15px;\n    border: 1px solid #ccc;\n    margin-right: 15px;\n}\n.advance_ruhus_SearchHolder input#chk_RUHUS_DirectFlight {\n    margin: 0;\n    width: 17px;\n}\n.advance_ruhus_SearchHolder input#chk_RUHUS_DirectFlight {\n    width: 17px;\n    margin-right: 4px;\n}\n.advance_ruhus_SearchHolder ul label {\n    display: flex;\n    font-size: 12px;\n    color: #181818;\n}\n\n\n\n #formFlightSearchEngine{\n        position:relative;\n    }\n   .close-search {\n       cursor: pointer;\n    background: #d90001;\n    color: #fff;\n    font-family: 'poppinssemibold';\n    padding: 5px;\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    width: 33px;\n    text-align: center;\n    z-index: 2;\n    text-decoration: none;\n}\n   \n   .btn-search-show {\n    color: #fff;\n    width: 144px;\n    padding: 7px;\n    text-align: center;\n    background: #d90001;\n    border: none;\n    text-transform: uppercase;\n    font-family: 'poppinssemibold';\n    border-bottom-left-radius: 50px;\n    border-bottom-right-radius: 50px;\n    cursor:pointer;\n}\n   .btn-show{\n       position: absolute;\n    right: 41px;\n   }\n   span.minor{\n       position: absolute;\n    top: 31px;\n    right: 4px;\n   }\n   .flight-trip .roundTripHolder{\n       padding-top:29px;\n   }\n"
        }}
      />
      <div className="container-fluid">
        <div className="landing-widget">
          <form id="formFlightSearchEngine">
            <section className="flight-trip">
              <div className="roundTripHolder">
                <ul className="active">
                  <li
                    className="active"
                    id="T_RT"
                    onclick="ShowHideSearchEngineTab('RT')"
                  >
                    ROUND-TRIP
                  </li>
                  <li id="T_OW" onclick="ShowHideSearchEngineTab('OW')">
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
                  defaultValue="97c3c47f-23d4-4938-888e-c2de14f3cfab"
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
                    onkeypress="return isCharWithSpaceHyphen(event)"
                    defaultValue="New York( NYC - All Airports)"
                    required=""
                    placeholder="Departure"
                  />
                  <i className="fa fa-times-circle demo-label" />
                  <input
                    name="OriginCode"
                    type="hidden"
                    id="hdnOriginCode"
                    defaultValue="NYC"
                  />
                  <span
                    id="spanOriginCityName"
                    className="spanCity"
                    style={{ display: "none" }}
                  >
                    New York( NYC - All Airports)
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
                    defaultValue="Delhi( DEL - Indira Gandhi International Airport)"
                    required=""
                    placeholder="Destination"
                  />
                  <i className="fa fa-times-circle demo-label" />
                  <input
                    name="DestinationCode"
                    type="hidden"
                    id="hdnDestinationCode"
                    defaultValue="DEL"
                  />
                  <span
                    id="spanDestCityName"
                    className="spanCity"
                    style={{ display: "none" }}
                  >
                    Delhi( DEL - Indira Gandhi International Airport)
                  </span>
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
                    <img src="/Content/images/date1.png" />
                  </div>
                  <span>
                    Depart <i className="fa fa-angle-down" aria-hidden="true" />
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
                      Oct 25
                    </span>
                    <span
                      className="date"
                      id="txtDepartDate_DD"
                      style={{ display: "none" }}
                    >
                      25
                    </span>
                  </p>
                  <span id="txtDepartDate_DAY" style={{ display: "none" }}>
                    Fri
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
                <div id="divReturnSection" className="Date searchSec datepic">
                  <div className="icon-class">
                    <img src="/Content/images/date1.png" />
                  </div>
                  <span>
                    Return <i className="fa fa-angle-down" aria-hidden="true" />
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
                      Nov 18
                    </span>
                    <span
                      className="date"
                      id="txtReturnDate_DD"
                      style={{ display: "none" }}
                    >
                      18
                    </span>
                  </p>
                  <span id="txtReturnDate_DAY" style={{ display: "none" }}>
                    Mon
                  </span>{" "}
                  <span id="txtReturnDate_YYYY" style={{ display: "none" }}>
                    2024
                  </span>
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
                        <div id="rdoCabin1" className="selectpassenger active">
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
        <div className="sidebar-left filter-option sidebar-filter">
          <div className="fixme" style={{}}>
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
              <div className="stops">
                <label className="checkboxes checkboxlist-filter-view__checkbox">
                  Non-Stop
                  <input
                    type="checkbox"
                    id="obstop-0"
                    name="obstop"
                    data-id={60}
                  />
                  <span className="checkmark" />
                </label>
                <label className="checkboxes checkboxlist-filter-view__checkbox">
                  1 Stop
                  <input
                    type="checkbox"
                    id="obstop-1"
                    name="obstop"
                    data-id={61}
                  />
                  <span className="checkmark" />
                </label>
                <label className="checkboxes checkboxlist-filter-view__checkbox">
                  1+ Stops
                  <input
                    type="checkbox"
                    id="obstop-2"
                    name="obstop"
                    data-id={62}
                  />
                  <span className="checkmark" />
                </label>
              </div>
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
                <label className="label-min">$1028</label>
                <input
                  id="price-slider"
                  type="text"
                  style={{ display: "none" }}
                  className="range"
                  defaultValue="1028,2177"
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
                <label className="label-max">$2177</label>
              </div>
              {/* End Ranger */}
            </div>
            <div className=" filter-duration">
              <h3>Flight Duration</h3>
              {/* Ranger */}
              <div
                id="slider-ranged"
                className="duration-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                data-start={820}
                data-end={1545}
              >
                <input
                  id="duration-slider"
                  type="text"
                  className="range"
                  style={{ display: "none" }}
                  defaultValue="13:40,25:45"
                />
                <div
                  className="ui-slider-range ui-corner-all ui-widget-header"
                  style={{ width: "100%", left: "0%" }}
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
                <label className="label-min">13 hr 40 min</label>
                <label className="label-max">25 hr 45 min</label>
              </div>
              {/* End Ranger */}
            </div>
            {/* Departure time */}
            <div className="departure-time">
              <h3>
                Departure time <span>from New York </span>
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
            {/* Arrival time */}
            <div className="Arrival-time">
              <h3>
                Departure time <span>from Delhi</span>
              </h3>
              <ul className="box-design">
                <li>
                  <a href="javascript:void(0)">
                    <img src="/Content/images/morning-icon.png" />
                    <p>Morning</p>
                    <span>00:01AM-11:59AM</span>
                    <input
                      type="checkbox"
                      id="obarrTime_0001_1159"
                      name="obarrTime"
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
                      id="obarrTime_1200_1759"
                      name="obarrTime"
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
                      id="obarrTime_1800_2359"
                      name="obarrTime"
                      data-id="1800_2359"
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* End Arrival time */}
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
                <div className="">
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      EWR - Newark Liberty Intl.
                      <input
                        type="checkbox"
                        id="obdepcity-EWR"
                        name="obdepcity"
                        data-id="00EWR"
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  {/* End item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      JFK - John F Kennedy Intl.
                      <input
                        type="checkbox"
                        id="obdepcity-JFK"
                        name="obdepcity"
                        data-id="00JFK"
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  {/* End item */}
                </div>
              </div>
              <div className="main-maije">
                <h3>
                  Arriving Airports <span>To</span>
                </h3>
                <input
                  id="obarrcity-All"
                  type="checkbox"
                  className="hidden"
                  defaultChecked="checked"
                  name="obarr"
                  data-id="obarrcityAll"
                />
                <div className="">
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      DEL - Indira Gandhi Intl.
                      <input
                        type="checkbox"
                        id="obdepcity-DEL"
                        name="obarrcity"
                        data-id="01DEL"
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  {/* End item */}
                </div>
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
                <div className="showmoreitem">
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Air India
                      <input
                        type="checkbox"
                        id="airline-AI"
                        name="airline"
                        data-id="AI"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-AI');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      United Airlines
                      <input
                        type="checkbox"
                        id="airline-UA"
                        name="airline"
                        data-id="UA"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-UA');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Etihad Airways
                      <input
                        type="checkbox"
                        id="airline-EY"
                        name="airline"
                        data-id="EY"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-EY');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      American Airlines
                      <input
                        type="checkbox"
                        id="airline-AA"
                        name="airline"
                        data-id="AA"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-AA');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Lufthansa Airline
                      <input
                        type="checkbox"
                        id="airline-LH"
                        name="airline"
                        data-id="LH"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-LH');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Swiss International Airlines
                      <input
                        type="checkbox"
                        id="airline-LX"
                        name="airline"
                        data-id="LX"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-LX');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Cathay Pacific
                      <input
                        type="checkbox"
                        id="airline-CX"
                        name="airline"
                        data-id="CX"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-CX');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Finnair
                      <input
                        type="checkbox"
                        id="airline-AY"
                        name="airline"
                        data-id="AY"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-AY');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Air Canada
                      <input
                        type="checkbox"
                        id="airline-AC"
                        name="airline"
                        data-id="AC"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-AC');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Qatar Airways
                      <input
                        type="checkbox"
                        id="airline-QR"
                        name="airline"
                        data-id="QR"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-QR');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      Air France
                      <input
                        type="checkbox"
                        id="airline-AF"
                        name="airline"
                        data-id="AF"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-AF');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      British Airways
                      <input
                        type="checkbox"
                        id="airline-BA"
                        name="airline"
                        data-id="BA"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-BA');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                  {/* item */}
                  <div className="maincheck">
                    <label className="checkboxes">
                      ITA Airways
                      <input
                        type="checkbox"
                        id="airline-AZ"
                        name="airline"
                        data-id="AZ"
                      />
                      <span className="checkmark" />
                    </label>
                    <span className="price">
                      <a
                        href="javascript:void(0)"
                        style={{ color: "white", textAlign: "right" }}
                        onclick="return SelectOnlyAirlines('airline-AZ');"
                      >
                        Only
                      </a>
                    </span>
                  </div>
                  {/* End item */}
                </div>
                <div className="more-contents">
                  <a href="javascript:void(0)" className="showmore">
                    <span>+</span>Show More
                  </a>
                  <a href="javascript:void(0)" className="showless">
                    <span>-</span>Show Less
                  </a>
                </div>
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
                  <a className="call-phone-number" href="tel:1-833-914-2482">
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
        <div className="right-listing right-bar">
          {/* ALL FARES */}
          <section className="all-fairs">
            <div className="contents">
              <ul className="fixed-content">
                <li className="first slider-wrp">
                  <h2>
                    <a href="#" onclick="GetMatrixSorting('||')">
                      ALL FARES
                    </a>
                  </h2>
                </li>
                <li className="allfares-stp">
                  <a
                    href="#"
                    className="am-flight"
                    onclick="GetMatrixSorting('DO||')"
                  >
                    Non-Stop
                  </a>
                </li>
                <li className="allfares-more-result">
                  <a href="#" onclick="GetMatrixSorting('M||')">
                    1+ Stops
                  </a>
                </li>
              </ul>
              {/* <div className="owl-carousel fare-slide owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1973px, 0px, 0px)",
                      transition: "0.25s",
                      width: 2691
                    }}
                  >
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|AI|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/AI.png"
                                alt="Air India"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|AI|')"
                          >
                            <p className="fw600">Air India</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="GetMatrixSorting('DO|AI|$1264.35')"
                          >
                            <span>
                              $1264<sup className="small">.35</sup>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|AI|$1028.35')">
                            <span>
                              $1028<sup className="small">.35</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|UA|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/UA.png"
                                alt="United Airlines"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|UA|')"
                          >
                            <p className="fw600">United Airlines</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="GetMatrixSorting('DO|UA|$1125.55')"
                          >
                            <span>
                              $1125<sup className="small">.55</sup>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|UA|$1125.55')">
                            <span>
                              $1125<sup className="small">.55</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|UA-|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/UA.png"
                                alt="United Airlines"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|UA-|')"
                          >
                            <p className="fw600">United Airlines </p>
                            <p style={{ fontSize: 9 }}>(with others)</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a
                            href="#"
                            onclick="GetMatrixSorting('M|UA-|$1125.55')"
                          >
                            <span>
                              $1125<sup className="small">.55</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|EY|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/EY.png"
                                alt="Etihad Airways"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|EY|')"
                          >
                            <p className="fw600">Etihad Airways</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|EY|$1203.15')">
                            <span>
                              $1203<sup className="small">.15</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|AA|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/AA.png"
                                alt="American Airlines"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|AA|')"
                          >
                            <p className="fw600">American Airlines</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="GetMatrixSorting('DO|AA|$1300.55')"
                          >
                            <span>
                              $1300<sup className="small">.55</sup>
                            </span>
                          </a>
                        </li>
                        <li>--- </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|LH|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/LH.png"
                                alt="Lufthansa Airline"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|LH|')"
                          >
                            <p className="fw600">Lufthansa Airline</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|LH|$1353.05')">
                            <span>
                              $1353<sup className="small">.05</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|LX|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/LX.png"
                                alt="Swiss International Airlines"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|LX|')"
                          >
                            <p className="fw600">Swiss International A</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|LX|$1376.25')">
                            <span>
                              $1376<sup className="small">.25</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|CX|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/CX.png"
                                alt="Cathay Pacific"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|CX|')"
                          >
                            <p className="fw600">Cathay Pacific</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|CX|$1448.35')">
                            <span>
                              $1448<sup className="small">.35</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|AY|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/AY.png"
                                alt="Finnair"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|AY|')"
                          >
                            <p className="fw600">Finnair</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|AY|$1689.75')">
                            <span>
                              $1689<sup className="small">.75</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|AC|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/AC.png"
                                alt="Air Canada"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|AC|')"
                          >
                            <p className="fw600">Air Canada</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|AC|$1717.7')">
                            <span>
                              $1717<sup className="small">.70</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="owl-item" style={{ width: "179.399px" }}>
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|DL|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/GEN.png"
                                alt="Secret Deal"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|DL|')"
                          >
                            <p className="fw600">Secret Deal</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|DL|$1721.65')">
                            <span>
                              $1721<sup className="small">.65</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "179.399px" }}
                    >
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|QR|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/QR.png"
                                alt="Qatar Airways"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|QR|')"
                          >
                            <p className="fw600">Qatar Airways</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|QR|$1865.95')">
                            <span>
                              $1865<sup className="small">.95</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "179.399px" }}
                    >
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|AF-|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/AF.png"
                                alt="Air France"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|AF-|')"
                          >
                            <p className="fw600">Air France </p>
                            <p style={{ fontSize: 9 }}>(with others)</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a
                            href="#"
                            onclick="GetMatrixSorting('M|AF-|$1884.65')"
                          >
                            <span>
                              $1884<sup className="small">.65</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "179.399px" }}
                    >
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|BA|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/BA.png"
                                alt="British Airways"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|BA|')"
                          >
                            <p className="fw600">British Airways</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|BA|$2085.55')">
                            <span>
                              $2085<sup className="small">.55</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "179.399px" }}
                    >
                      <ul className="item">
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onclick="GetMatrixSorting('|AZ|')"
                          >
                            <span className="l-img">
                              <img
                                src="/Content/images/AirlinesLogo/AZ.png"
                                alt="ITA Airways"
                              />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="am-flight"
                            onclick="GetMatrixSorting('|AZ|')"
                          >
                            <p className="fw600">ITA Airways</p>
                          </a>
                        </li>
                        <li>--- </li>
                        <li>
                          <a href="#" onclick="GetMatrixSorting('M|AZ|$2176.75')">
                            <span>
                              $2176<sup className="small">.75</sup>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button type="button" role="presentation" className="owl-prev">
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next disabled"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div> */}
              {/* < Carousel /> */}
              {/* <FlightCarousel/> */}
            </div>
          </section>
          {/* short by */}
          <div className="shortby  sort-area" id="dvChpfastprice">
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
                for baggage charge details. Some flights may be for alternate
                dates or airports. All intended results may not be guaranteed.
              </p>
            </div>
          </div>
          {/* End Short by price */}
          {/* listing box */}
          <div className="listingbox-main" id="dvAirListing">
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_1"
              data-resultitemid="1S_27"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/AI.png"
                        alt="Air India"
                        title="Air India"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        Air India <span>Flight ( AI 116 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>21h 5m</p>
                        <hr />
                        <p> 1 stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('1','show')"
                          onmouseout="return showHideOutBoundStopPopup('1', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="OutBoundStopPopup_1"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:30 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          09:10 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 15m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('1','show')"
                          onmouseout="return showHideInBoundStopPopup('1', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_1"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <div className="showondeal">
                    <span className="CamelT">
                      Flight 9484 Operated by air india express
                    </span>
                  </div>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <h2>
                      $1028<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_1"
                      onclick="BookNow('listing_box_1','btn_1')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      21h 5m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 116</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Fri | 11:55 AM | Oct 25</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 11:55 AM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 4h 5m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 687</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 04:00 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 06:30 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
                      20h 15m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 9484</span>
                        <span className="CamelT">
                          Operated by air india express{" "}
                        </span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 09:10 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Mon | 11:35 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 25m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 2h 10m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 119</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 01:45 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Tue | 06:55 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>15h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_50"
              data-resultitemid="1S_28"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/AI.png"
                        alt="Air India"
                        title="Air India"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        Air India <span>Flight ( AI 116 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 0m</p>
                        <hr />
                        <p> 1 stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('50','show')"
                          onmouseout="return showHideOutBoundStopPopup('50', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="OutBoundStopPopup_50"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          05:25 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          09:10 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 15m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('50','show')"
                          onmouseout="return showHideInBoundStopPopup('50', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_50"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <div className="showondeal">
                    <span className="CamelT">
                      Flight 9484 Operated by air india express
                    </span>
                  </div>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <h2>
                      $1028<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_50"
                      onclick="BookNow('listing_box_50','btn_50')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      20h 0m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 116</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Fri | 11:55 AM | Oct 25</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 11:55 AM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 3h 15m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 442</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 03:10 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 05:25 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 15m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
                      20h 15m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 9484</span>
                        <span className="CamelT">
                          Operated by air india express{" "}
                        </span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 09:10 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Mon | 11:35 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 25m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 2h 10m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 119</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 01:45 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Tue | 06:55 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>15h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_2"
              data-resultitemid="1S_29"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/AI.png"
                        alt="Air India"
                        title="Air India"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        Air India <span>Flight ( AI 116 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 0m</p>
                        <hr />
                        <p> 1 stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('2','show')"
                          onmouseout="return showHideOutBoundStopPopup('2', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="OutBoundStopPopup_2"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          05:25 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          09:30 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>19h 55m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('2','show')"
                          onmouseout="return showHideInBoundStopPopup('2', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_2"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <h2>
                      $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_2"
                      onclick="BookNow('listing_box_2','btn_2')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      20h 0m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 116</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Fri | 11:55 AM | Oct 25</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 11:55 AM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 3h 15m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 442</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 03:10 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 05:25 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 15m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
                      19h 55m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 2981</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 09:30 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Mon | 11:40 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 10m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 2h 5m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 119</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 01:45 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Tue | 06:55 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>15h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_15"
              data-resultitemid="1S_30"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/AI.png"
                        alt="Air India"
                        title="Air India"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        Air India <span>Flight ( AI 116 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 0m</p>
                        <hr />
                        <p> 1 stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('15','show')"
                          onmouseout="return showHideOutBoundStopPopup('15', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="OutBoundStopPopup_15"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          05:25 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          10:00 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>19h 25m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('15','show')"
                          onmouseout="return showHideInBoundStopPopup('15', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_15"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <h2>
                      $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_15"
                      onclick="BookNow('listing_box_15','btn_15')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      20h 0m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 116</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Fri | 11:55 AM | Oct 25</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 11:55 AM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 3h 15m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 442</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 03:10 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 05:25 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 15m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
                      19h 25m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 2999</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 10:00 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 12:15 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 15m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 1h 30m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 119</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 01:45 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Tue | 06:55 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>15h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_21"
              data-resultitemid="1S_31"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/AI.png"
                        alt="Air India"
                        title="Air India"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        Air India <span>Flight ( AI 116 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 0m</p>
                        <hr />
                        <p> 1 stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('21','show')"
                          onmouseout="return showHideOutBoundStopPopup('21', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="OutBoundStopPopup_21"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          05:25 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          09:20 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 5m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('21','show')"
                          onmouseout="return showHideInBoundStopPopup('21', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_21"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <h2>
                      $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_21"
                      onclick="BookNow('listing_box_21','btn_21')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      20h 0m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 116</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Fri | 11:55 AM | Oct 25</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 11:55 AM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 3h 15m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 442</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 03:10 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 05:25 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 15m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
                      20h 5m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 605</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 09:20 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Mon | 11:45 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 25m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 2h 0m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 119</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 01:45 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Tue | 06:55 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>15h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_26"
              data-resultitemid="1S_32"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/AI.png"
                        alt="Air India"
                        title="Air India"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        Air India <span>Flight ( AI 116 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>21h 5m</p>
                        <hr />
                        <p> 1 stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('26','show')"
                          onmouseout="return showHideOutBoundStopPopup('26', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="OutBoundStopPopup_26"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:30 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          09:30 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>19h 55m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('26','show')"
                          onmouseout="return showHideInBoundStopPopup('26', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_26"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <h2>
                      $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_26"
                      onclick="BookNow('listing_box_26','btn_26')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      21h 5m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 116</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Fri | 11:55 AM | Oct 25</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 11:55 AM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 4h 5m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 687</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 04:00 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 06:30 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
                      19h 55m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 2981</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 09:30 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Mon | 11:40 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 10m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 2h 5m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 119</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 01:45 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Tue | 06:55 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>15h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_24"
              data-resultitemid="1S_33"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/AI.png"
                        alt="Air India"
                        title="Air India"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        Air India <span>Flight ( AI 116 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>21h 5m</p>
                        <hr />
                        <p> 1 stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('24','show')"
                          onmouseout="return showHideOutBoundStopPopup('24', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="OutBoundStopPopup_24"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:30 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          10:00 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>19h 25m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('24','show')"
                          onmouseout="return showHideInBoundStopPopup('24', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_24"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <h2>
                      $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_24"
                      onclick="BookNow('listing_box_24','btn_24')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      21h 5m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 116</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Fri | 11:55 AM | Oct 25</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 11:55 AM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 4h 5m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 687</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 04:00 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 06:30 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
                      19h 25m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 2999</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 10:00 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 12:15 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 15m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 1h 30m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 119</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 01:45 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Tue | 06:55 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>15h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_31"
              data-resultitemid="1S_34"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/AI.png"
                        alt="Air India"
                        title="Air India"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        Air India <span>Flight ( AI 116 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 0m</p>
                        <hr />
                        <p> 1 stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('31','show')"
                          onmouseout="return showHideOutBoundStopPopup('31', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="OutBoundStopPopup_31"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          05:25 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          08:35 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>20h 50m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('31','show')"
                          onmouseout="return showHideInBoundStopPopup('31', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_31"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>BOM - Mumbai - India</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:55 AM | <span className="">JFK</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Baggage Included</span>
                    </li>
                  </ul>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <h2>
                      $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_31"
                      onclick="BookNow('listing_box_31','btn_31')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      20h 0m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 116</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Fri | 11:55 AM | Oct 25</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 11:55 AM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 3h 15m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 442</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Sat | 03:10 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 05:25 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 15m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
                      20h 50m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 2957</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 08:35 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Mon | 11:05 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>2h 30m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Mumbai (BOM) | 2h 40m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/AI.png"
                          width={90}
                          alt="Air India"
                          title="Air India"
                        />
                      </li>
                      <li>
                        <p>Air India</p>
                        <span>AI 119</span>
                      </li>
                      <li>
                        <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                        <span>Tue | 01:45 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Tue | 06:55 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>15h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>2 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_4"
              data-resultitemid="1S_0"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/UA.png"
                        alt="United Airlines"
                        title="United Airlines"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        United Airlines <span>Flight ( UA 82 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          09:20 PM | <span className="">EWR</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>14h 40m</p>
                        <hr />
                        <p> Non-Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('4','show')"
                          onmouseout="return showHideOutBoundStopPopup('4', 'hide')"
                        ></span>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          09:30 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Hand Baggage Only</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          11:55 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>17h 0m</p>
                        <hr />
                        <p> Non-Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('4','show')"
                          onmouseout="return showHideInBoundStopPopup('4', 'hide')"
                        ></span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_4"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>0 Stop</strong>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          06:25 AM | <span className="">EWR</span>
                        </strong>{" "}
                        <span className="SB">Tue, Nov 19</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Hand Baggage Only</span>
                    </li>
                  </ul>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <span>1 seat(s) left</span>
                    <h2>
                      $1125<sup>.55</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_4"
                      onclick="BookNow('listing_box_4','btn_4')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (EWR) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      14h 40m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/UA.png"
                          width={90}
                          alt="United Airlines"
                          title="United Airlines"
                        />
                      </li>
                      <li>
                        <p>United Airlines</p>
                        <span>UA 82</span>
                      </li>
                      <li>
                        <p>Newark Liberty Intl. (EWR)</p>
                        <span>Fri | 09:20 PM | Oct 25</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 09:30 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>Hand Baggage only</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (EWR) <span>|</span> Mon, Nov 18 |
                      17h 0m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/UA.png"
                          width={90}
                          alt="United Airlines"
                          title="United Airlines"
                        />
                      </li>
                      <li>
                        <p>United Airlines</p>
                        <span>UA 83</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 11:55 PM | Nov 18</span>
                      </li>
                      <li>
                        <p>Newark Liberty Intl. (EWR)</p>
                        <span>Tue | 06:25 AM | Nov 19</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>17h 0m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>Hand Baggage only</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            {/*======= listing box =======*/}
            {/*==== box ====*/}
            <div
              className="listingbox   booking-item-flight-details listingHolderMain"
              id="listing_box_22"
              data-resultitemid="1S_1"
            >
              <div className="leftright">
                {/* left */}
                <div className="list-left">
                  <div className="top-logo">
                    <div>
                      <img
                        src="/Content/images/AirlinesLogo/UA.png"
                        alt="United Airlines"
                        title="United Airlines"
                        width={90}
                      />
                    </div>
                    <div>
                      <h3>
                        United Airlines <span>Flight ( UA 82 )</span>
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          09:20 PM | <span className="">EWR</span>
                        </strong>{" "}
                        <span className="SB ">Fri, Oct 25</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>14h 40m</p>
                        <hr />
                        <p> Non-Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideOutBoundStopPopup('22','show')"
                          onmouseout="return showHideOutBoundStopPopup('22', 'hide')"
                        ></span>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          09:30 PM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB">Sat, Oct 26</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Hand Baggage Only</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        <strong>
                          12:15 AM | <span className="">DEL</span>
                        </strong>{" "}
                        <span className="SB ">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <div className="dvdr">
                        <p>19h 53m</p>
                        <hr />
                        <p> 1 Stop</p>
                        <span
                          className="info"
                          onmouseover="return showHideInBoundStopPopup('22','show')"
                          onmouseout="return showHideInBoundStopPopup('22', 'hide')"
                        >
                          <span></span>
                        </span>
                        <div
                          className="stop-info"
                          id="InBoundStopPopup_22"
                          style={{ display: "none" }}
                        >
                          <p>
                            <strong>1 Stop</strong>
                          </p>
                          <p>YUL - Montreal - Canada</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>
                          09:38 AM | <span className="">EWR</span>
                        </strong>{" "}
                        <span className="SB">Mon, Nov 18</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-suitcase" aria-hidden="true" />{" "}
                      <span className="baggage">Hand Baggage Only</span>
                    </li>
                  </ul>
                  <div className="showondeal">
                    <span className="CamelT">
                      Flight 8043 Operated by air canada , Flight 8487 Operated by
                      air canada
                    </span>
                  </div>
                </div>
                {/* End left */}
                {/* Right */}
                <div className="listing-right">
                  <div>
                    <span>1 seat(s) left</span>
                    <h2>
                      $1125<sup>.55</sup> <span>Price Per Person (Incl fee)</span>
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="selectBtn"
                      id="btn_22"
                      onclick="BookNow('listing_box_22','btn_22')"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                {/* End Right */}
              </div>
              {/* bottom dropdown*/}
              <div
                className="info-drown"
                onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
              >
                <h3>
                  <a href="javascript:void(0);">Complete Flight Details</a>
                  <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
                    SB
                  </span>
                </h3>
              </div>
              {/* End bottom dropdown*/}
              <div className="rwesui" style={{ display: "none" }}>
                <span className="conntecting-airport-chng changedUp">
                  You have an airport change. Please verify details
                </span>
              </div>
              {/* Flight Details */}
              <div className="flight-details">
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      New York (EWR) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
                      14h 40m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/UA.png"
                          width={90}
                          alt="United Airlines"
                          title="United Airlines"
                        />
                      </li>
                      <li>
                        <p>United Airlines</p>
                        <span>UA 82</span>
                      </li>
                      <li>
                        <p>Newark Liberty Intl. (EWR)</p>
                        <span>Fri | 09:20 PM | Oct 25</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Sat | 09:30 PM | Oct 26</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>14h 40m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>Hand Baggage only</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="depart-flight return-flight">
                  <div className="box-left">
                    <img src="/Content/images/return-icon-red.png" />
                    <h3>Return</h3>
                  </div>
                  <div className="box-right">
                    <h3>
                      Delhi (DEL) - New York (EWR) <span>|</span> Mon, Nov 18 |
                      19h 53m
                    </h3>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/UA.png"
                          width={90}
                          alt="United Airlines"
                          title="United Airlines"
                        />
                      </li>
                      <li>
                        <p>United Airlines</p>
                        <span>UA 8043</span>
                        <span className="CamelT">Operated by air canada </span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Mon | 12:15 AM | Nov 18</span>
                      </li>
                      <li>
                        <p>Pierre E. Trudeau Intl. (YUL)</p>
                        <span>Mon | 06:10 AM | Nov 18</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>16h 25m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>Hand Baggage only</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Montreal (YUL) | 1h 45m Layover</p>
                      <b></b>
                    </div>
                    <ul>
                      <li>
                        <img
                          src="/Content/images/AirlinesLogo/UA.png"
                          width={90}
                          alt="United Airlines"
                          title="United Airlines"
                        />
                      </li>
                      <li>
                        <p>United Airlines</p>
                        <span>UA 8487</span>
                        <span className="CamelT">Operated by air canada </span>
                      </li>
                      <li>
                        <p>Pierre E. Trudeau Intl. (YUL)</p>
                        <span>Mon | 07:55 AM | Nov 18</span>
                      </li>
                      <li>
                        <p>Newark Liberty Intl. (EWR)</p>
                        <span>Mon | 09:38 AM | Nov 18</span>
                      </li>
                      <li>
                        <p>
                          <strong>Coach</strong>
                        </p>
                        <span>1h 43m</span>
                        <p className="bag-info">
                          <i className="fa fa-suitcase" aria-hidden="true" />
                          <i>Hand Baggage only</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Flight Details */}
            </div>
            {/*==== end box ====*/}
            <div className="listingbutton pagination-container">
              <div id="dvAirListing" className="col-xs-12 "></div>
              <div className="" id="dvPageNumber">
                <div className="pagination-container">
                  <ul className="pagination">
                    <li className="PagedList-skipToNext">
                      <a href="/FlightListing/ShowNextPage?Page_No=2" rel="next">
                        show more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* load more button */}
            {/* End load more button */}
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n.LcT {text-transform: lowercase;}\n.UcT {text-transform: uppercase;font: bold;}\n.CamelT {text-transform: capitalize;\n    }\n"
              }}
            />
          </div>
          <div id="lblMsg" style={{ display: "none" }} />
          {/* =========== Flight List End============== */}
          <input type="hidden" id="MinPrice" defaultValue={1028} />
          <input type="hidden" id="MaxPrice" defaultValue={2177} />
          <input type="hidden" id="MaxConnectTime" defaultValue={1545} />
          <input type="hidden" id="MinHourCon" defaultValue={0} />
          <input type="hidden" id="MaxHourCon" defaultValue={1545} />
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
  

}
export default SearchFlight