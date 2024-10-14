"use client"

import { useEffect,useState } from "react";
import Select from 'react-select';
const ContainerForm=()=>{
    const [token, setToken] = useState("");
    const [originAirportList, setOriginAirportList] = useState([]);
    const [originInputValue, setOriginInputValue] = useState(null);
    const [desAirportList, setDesAirportList] = useState([]);
    const [desInputValue, setDesInputValue] = useState("");
    const [travellerDetail, setTravellerDetail] = useState({ adultCount: 1, childrenCount: 0, infanctCount: 0, cabinType: "ECONOMY" });
    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infanctCount, setInfantCount] = useState(0);
    const [infantOnSeatCount, setInfantOnSeatCount] = useState(0);
    const [cabinType, setCabinType] = useState("ECONOMY");
  
      

    const fetchToken = async () => {
        let body = new URLSearchParams();
        body.append("grant_type", "client_credentials");
        body.append("client_id", "6KjF3w8cmzm5jvgkePQnLAB9ufdMiUnH");
        body.append("client_secret", "hx7l3jSMq1AK9lFx");
        try {
            const data = await fetch("https://api.amadeus.com/v1/security/oauth2/token",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: body.toString()
                });
            const json = await data.json();
            setToken(json.access_token)
            localStorage.setItem("typCknhbg", json.access_token);
        } catch (err) {
            console.log(err);
        }
    }
    
    
    
    useEffect(() => {
      fetchToken();
      // Remove the token from localStorage
    // localStorage.removeItem(token);
    
    }, []);

const handleInputChange = (inputValue) => {
  setOriginInputValue(inputValue);
  filterSourceAirportValue(inputValue);
};

const handleOriginChange = (selectedOption) => {
  setOrigin(selectedOption);
  setOriginInputValue(selectedOption?.label || '');
};

const filterSourceAirportValue = async () => {
    try {
        const response = await fetch(`https://api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${originInputValue}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        const options = result.data.map(a => ({
            label: `${a.iataCode} - ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
            value: a.iataCode
        }));

        setOriginAirportList(options);
    } catch (err) {
        console.log(err);
    }
};



    return <div className="container">
    <section className="searchWidget">
      <div className="TabContainer">
        <div className="tabHolder">
          <ul>
            
            <li
              id="flighttablink"
              onclick="OpenTab('FlightTab')"
              className="active"
            >
              <div className="helicopter_wrapper charter">
                <div className="helicopter">
                  <img src="/Content/images/v2.png" alt="" />
                </div>
              </div>
              <a href="javascript:void(0)" title="Flights">
                <span>Flights</span>
              </a>
            </li>
           
          </ul>
          
          <div id="Flights" className="TabSearchCopmonent active" style={{}}>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    /*ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content {\n        top: 429.719px !important;\n    }*/\n \n"
              }}
            />
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
                    <li
                      id="T_OW"
                      onclick="ShowHideSearchEngineTab('OW')"
                      className=""
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
                      onkeypress="return isCharWithSpaceHyphen(event)"
                      defaultValue=""
                      required=""
                      placeholder="Departure"
                    />
                                  
                                  {/* <Select
    id="txtOriginCode"
    className="ui-autocomplete-input textoverflow input_destination"
    options={originAirportList}
    placeholder="Departure"
    onInputChange={handleInputChange}
    inputValue={originInputValue}
    onChange={handleOriginChange}
    required
/> */}

                    <i
                      className="fa fa-times-circle demo-label"
                      style={{ display: "none" }}
                    />
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
                      onkeypress="return isCharWithSpaceHyphen(event)"
                      defaultValue=""
                      required=""
                      placeholder="Destination"
                    />
                    <i
                      className="fa fa-times-circle demo-label"
                      style={{ display: "none" }}
                    />
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
                        Date
                      </span>
                      <span
                        className="date"
                        id="txtDepartDate_DD"
                        style={{ display: "none" }}
                      />
                    </p>
                    <span id="txtDepartDate_DAY" style={{ display: "none" }} />{" "}
                    <span id="txtDepartDate_YYYY" style={{ display: "none" }} />
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
                    style={{}}
                  >
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
                        Date
                      </span>
                      <span
                        className="date"
                        id="txtReturnDate_DD"
                        style={{ display: "none" }}
                      />
                    </p>
                    <span id="txtReturnDate_DAY" style={{ display: "none" }} />{" "}
                    <span id="txtReturnDate_YYYY" style={{ display: "none" }} />
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
                      Search Flights
                    </button>
                  </div>
                </div>
                <span className="advance ">
                  <a
                    className="lnk_RUHUS_advanceSearch"
                    href="javascript:void(0);"
                  >
                    Advanced Search (+)
                  </a>
                </span>
                <div
                  className="advance_ruhus_SearchHolder"
                  style={{ display: "none" }}
                >
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
                  Flight tickets for an unaccompanied minor are not available
                  online. To book a flight for a UMNR, directly reach out to our
                  experts at{" "}
                  <strong style={{ fontWeight: "bold" }}>1-833-914-2482</strong>.
                  For more details, <a href="/unaccompanied-minor">READ HERE</a>.
                </div>
              </div>
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
                          <div id="rdoCabin1" className="active selectpassenger">
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
            {/*/Search Widget*/}
            {/*/Search Widget*/}
          </div>
         
        </div>
      </div>
    </section>
  </div>
  
}
export default ContainerForm