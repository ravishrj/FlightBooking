"use client"
import axios from 'axios';

import { useEffect,useState,useRef } from "react";
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

//import './PassengerStyles.module.css'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};



const ContainerForm=()=>{

  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowWidth();


  // useEffect(() => {
  //   if (width <= 768) {
  //     setIsMobile(true);
  //   } else if (width > 768) {
  //     setIsMobile(false);
  //   }
  // }, []);

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
    e28.href = "Content/css/e28";

    if (!isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(desktopCss);
      document.head.appendChild(desktopHomeCss);
      document.head.appendChild(listing);
      document.head.appendChild(owlCarausel);
      document.head.appendChild(confirmation);
      document.head.appendChild(flight_popup);
      document.head.appendChild(e28);

      return () => {
        if (document.head.contains(desktopCss)) {
          document.head.removeChild(desktopCss);
        }
        if (document.head.contains(desktopHomeCss)) {
          document.head.removeChild(desktopHomeCss);
        }
        if (document.head.contains(listing)) {
          document.head.removeChild(listing);
        }
        if (document.head.contains( owlCarausel)) {
          document.head.removeChild( owlCarausel);
        }
        if (document.head.contains(confirmation)) {
          document.head.removeChild(confirmation);
        }
        if (document.head.contains(flight_popup)) {
          document.head.removeChild(flight_popup);
        }
        if (document.head.contains(e28)) {
          document.head.removeChild(e28);
        }
      }
    }
  }, [isMobile]);


    const router = useRouter();
    
    const [oneWay, setOneWay] = useState(false);
    const [token, setToken] = useState("");
    const [originAirportList, setOriginAirportList] = useState([]);
    const [originInputValue, setOriginInputValue] = useState(null);
    const [origin,setOrigin]=useState("");
    const [des,setDes]=useState("");
    const [desAirportList, setDesAirportList] = useState([]);
    const [desInputValue, setDesInputValue] = useState("");
    const [travellerDetail, setTravellerDetail] = useState({ adultCount: 1, childrenCount: 0, infanctCount: 0, cabinType: "ECONOMY" });
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isDropdownVisibleDes, setDropdownVisibleDes] = useState(false);
    const [showPax, setShowPax] = useState(false);
    const[flights,setFlights]=useState([]);



    const [travellerToggle, setTravellerToggle] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const [infantOnSeatCount, setInfantOnSeatCount] = useState(0);
    const [cabinType, setCabinType] = useState("ECONOMY");
    const paxRef = useRef(null);
     //const [totalTraveller,setTotalTraveller]=useState(1);
    // Function to handle the application of filters and closing the dropdown
    //const  totalTraveller=adultCount + childrenCount + infantCount + infantOnSeatCount;
      
    // const handleApplyFilter = () => {
    //     // Handle your filter application logic here
    //     // Close the dropdown after applying
       
    //     // setTotalTraveller(adultCount + childrenCount + infantCount + infantOnSeatCount);
    //    //const  totalTraveller=adultCount + childrenCount + infantCount + infantOnSeatCount;
      
        
    //     setTravellerDetail({
    //       totalTraveller,
    //       adultCount,
    //       childrenCount,
    //       infantCount,
    //       infantOnSeatCount,
    //       cabinType,
    //   });

    //   // Optionally, you can also set focus back to the input if needed
    //   if (paxRef.current) {
    //       paxRef.current.focus();
    //   }

    //   // Close the dropdown after applying
    //   setTravellerToggle(false);
     
    // };
    useEffect(() => {
      // Load from local storage
      const storedTravellerDetail = localStorage.getItem('travellerDetail');
      if (storedTravellerDetail) {
          setTravellerDetail(JSON.parse(storedTravellerDetail));
      }
   
  }, []);

    const handleApplyFilter = () => {
      const totalTraveller = adultCount + childrenCount + infantCount + infantOnSeatCount;
  
      const newTravellerDetail = {
          adultCount,
          childrenCount,
          infantCount,
          infantOnSeatCount,
          cabinType,
          totalTraveller,
      };
  
      // Save to local storage
      localStorage.setItem('travellerDetail', JSON.stringify(newTravellerDetail));
  
      setTravellerDetail(newTravellerDetail);
  
      if (paxRef.current) {
          paxRef.current.focus();
      }
  
      setTravellerToggle(false);
  };
  


    // Function to handle changes in cabin type
    const handleCabinTypeChange = (event) => {
        setCabinType(event.target.value);
    };

    // Function to update adult count
    const updateAdultCount = (delta) => {
        setAdultCount(prev => Math.max(1, Math.min(9, prev + delta)));
    };

    // Function to update children count
    const updateChildrenCount = (delta) => {
        setChildrenCount(prev => Math.max(0, Math.min(8, prev + delta)));
    };

    // Function to update infant count on lap
    const updateInfantCount = (delta) => {
        setInfantCount(prev => Math.max(0, Math.min(4, prev + delta)));
    };

    // Function to update infant count on seat
    const updateInfantOnSeatCount = (delta) => {
        setInfantOnSeatCount(prev => Math.max(0, Math.min(4, prev + delta)));
    };



    //const paxRef = useRef(null);
  //   const handleCabinTypeChange = (event) => {
  //     setCabinType(event.target.value); // Update state with the selected value
  // };

    const fetchToken = async () => {
        let body = new URLSearchParams();
        body.append("grant_type", "client_credentials");
        body.append("client_id", "DjgWIoDOM9J6D7pDO8uq6p91zcP14pAG");
        body.append("client_secret", "8ZDzeKpqbvfpudJN");
        try {
           
            const data = await fetch("https://api.amadeus.com/v1/security/oauth2/token", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: body.toString()
           });
            const json = await data.json();
            console.log(json,"Fetching Token");
            setToken(json.access_token);
            localStorage.setItem("token", json.access_token);
            console.log(json.access_token, "Token Upon Calling Fetch Token");
        } catch (err) {
            console.log(err);
        }
    }
    
    
    
    useEffect(() => {
      fetchToken();
      console.log("token",token);
      // Remove the token from localStorage
    // localStorage.removeItem(token);
    
    }, []);

// const handleInputChange = (inputValue) => {

//   console.log(inputValue,"inputValue");
//   setOriginInputValue(inputValue);
//   filterSourceAirportValue(inputValue);
// };

// const handleOriginChange = (selectedOption) => {
//   setOrigin(selectedOption);
//   setOriginInputValue(selectedOption?.label || '');
// };
//const [originInputValue, setOriginInputValue] = useState('');

    const handleOriginChange = (event) => {
      console.log(event.target.value,"inputValuein handleorigin");
        setOriginInputValue(event.target.value);
        // Optionally filter airport list here based on input value
        filterSourceAirportValue(event.target.value);
        setDropdownVisible(event.target.value.length > 0);
    };
  const handleSelectAirport = (city) => {
    // console.log(city,"city in handleSelectAirport");
      setOriginInputValue(`${city.label}, ${city.iataCode}`);
      setOrigin(city.value);
      
      
      setDropdownVisible(false); // Update input with selected airport
  };

  const handleSelectDesAirport = (city) => {
    setDesInputValue(`${city.label}, ${city.iataCode}`);
    setDes(city.value);
    setDropdownVisibleDes(false); // Update input with selected airport
 };

const filterSourceAirportValue = async () => {
    console.log(originInputValue,"originInputValue");
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
        console.log(result,"result");
        const options = result.data.map(a => ({
            label: `${a.iataCode} - ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
            value: a.iataCode
        }));

        setOriginAirportList(options);
        console.log(originAirportList,"originAirportList");
    } catch (err) {
        console.log(err,"err");
    }
};

const handleDesChange = (event) => {
  console.log(event.target.value,"inputValuein Desorigin");
  setDesInputValue(event.target.value);
    // Optionally filter airport list here based on input value
    filterDesAirportValue(event.target.value);
    setDropdownVisibleDes(event.target.value.length > 0);
};

const fetchNearestAirports = async () => {
  try {
      // Get user's current location using Geolocation API
      navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          // Call the Amadeus API to get nearest airports based on current latitude and longitude
          const response = await fetch(`https://api.amadeus.com/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}&radius=100&page%5Blimit%5D=10&sort=analytics.travelers.score`, {
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}` // Corrected syntax
              }
          });

          const result = await response.json();
          
          // Check if the response is valid and has data
          if (response.ok && Array.isArray(result.data)) {
              // Map the response to label and value format
              const options = result.data.map(a => ({
                  label: `${a.iataCode}, ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
                  value: a.iataCode // Corrected to just a.iataCode
              }));

              // Set the nearest airport list
              setOriginAirportList(options);

              if (options.length > 0) {
                  setOriginInputValue(options[0].label); // Set the first airport as the default value
                  setOrigin(options[0].value); // Corrected to use value
              }
          } else {
              console.error("Error fetching airports:", result);
          }
      }, (error) => {
          console.error("Geolocation error:", error); // Handle geolocation errors
      });
  } catch (err) {
      console.error("Fetch error:", err);
  }
};

const filterDesAirportValue = async () => {
  try {


      let response = await fetch(`https://api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${desInputValue}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`, {
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          }
      });
      let result = await response.json()
      let options = result.data.map(a => { return { label: `${a.iataCode} - ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`, value: a.iataCode } })
      setDesAirportList(options);
  } catch (err) {
      console.log(err);
  }
}





const handleOnSubmit = async(e) => {
  try {
  const accessToken = localStorage.getItem("token");
   const searchObj = {
              originLocationCode: origin,
              destinationLocationCode: des,
              departureDate: depDate,
              returnDate: returnDate,
              adults: adultCount,
          };

    console.log(searchObj, "Search Object");
    //router.push(`/searchFlight?origin=${searchObj.originLocationCode}&destination=${searchObj.destinationLocationCode}&date=${searchObj.departureDate.toISOString().substring(0, 10)}&returnDate=${searchObj.returnDate.toISOString().substring(0, 10)}&adults=${searchObj.adults}&token=${accessToken}&oneway=${oneWay}`)
    router.push(`/searchFlight?origin=${searchObj.originLocationCode}&destination=${searchObj.destinationLocationCode}&date=${searchObj.departureDate.toISOString().substring(0, 10)}${!oneWay ? `&returnDate=${searchObj.returnDate.toISOString().substring(0, 10)}` : ''}&adults=${searchObj.adults}&token=${accessToken}&oneWay=${oneWay.toString()}&originInputValue=${originInputValue}&originDesValue=${originInputValue}&desInputValue=${desInputValue}`);


} catch (error) {

    console.error('Error fetching flight offers:', error);
   // setError('Failed to fetch flight offers. Please try again.');
}







}

useEffect(() => {
  fetchNearestAirports();
}, [token]);


    const [depDate, setDepDate] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState('');

    const handleDepartureChange = (date) => {
        if (date.length > 0) {
            setDepDate(date[0]);
            setErrorMessage(''); // Clear error message
        } else {
            setErrorMessage('Select depart date');
        }
    };

    const [returnDate, setReturnDate] = useState(new Date());
    //const [errorMessage, setErrorMessage] = useState('');

    const handleReturnChange = (date) => {
        if (date.length > 0) {
            setReturnDate(date[0]);
            setErrorMessage(''); // Clear error message
        } else {
            setErrorMessage('Select return date');
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
            <form id="formFlightSearchEngine" >
              <section className="flight-trip">
                <div className="roundTripHolder">
                  <ul className="active">
                    <li
                      className={!oneWay && "active"}
                      id="T_RT"
                      onclick="ShowHideSearchEngineTab('RT')"
                      onClick={()=> setOneWay(false)}
                    >
                      ROUND-TRIP
                    </li>
                    <li
                      id="T_OW"
                      onclick="ShowHideSearchEngineTab('OW')"
                      className={oneWay && "active"}
                      onClick={()=> setOneWay(true)}
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
                    {/* <input
    id="txtOriginCode"
    type="text"
    className="ui-autocomplete-input"
    autoComplete="off"
    options={originAirportList}
    value={originInputValue}
    required
    placeholder="Departure"
    onChange={handleOriginChange}
/>


                    <i
                      className="fa fa-times-circle demo-label"
                      style={{ display: "none" }}
                    />
                             
                             {originAirportList.length > 0 && (
       <ul
        id="ui-id-1"
        tabIndex={0}
        className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
        style={{ top: 88, left: "37.5px", width: "338.5px", display: !originAirportList && "none" }} // Ensure display is block
    >
      
        {originAirportList.map((city) => {
          console.log(city, "city parent");
         return <><li className="airList parent-auto-list ui-menu-item"> </li>
         <li id="ui-id-36" tabIndex={-1} className="ui-menu-item-wrapper">
           <span className="highlight-auto-list"></span> {city.label},{" "}
           <span className="highlight-auto-list"></span> {city.iataCode}
         </li>
         </>
          
})}
    </ul>
)} */}
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
            <i className="fa fa-times-circle demo-label" style={{ display: "none" }} />

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
                            {city.label}, <span className="highlight-auto-list"></span> {city.iataCode}
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
                    {/* <input
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
                    /> */}
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
                            {city.label}, <span className="highlight-auto-list"></span> {city.iataCode}
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
                  {/* <div id="divDepartSecton" className="Date searchSec datepic">
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
                  </div> */}

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
                    dateFormat: 'Y-m-d',
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
                <span className="date" id="txtDepartDate_MMM">Date</span>
                <span className="date" id="txtDepartDate_DD" style={{ display: "none" }} />
            </p>
            <span id="txtDepartDate_DAY" style={{ display: "none" }} />
            <span id="txtDepartDate_YYYY" style={{ display: "none" }} />
            {errorMessage && (
                <div id="spnDepDateErrMsg" className="errorMsg">
                    {errorMessage}
                </div>
            )}
        </div>



                  {/* <div
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
                  </div> */}
                                
       <div id="divReturnSection" className="Date searchSec datepic" style={{ display: oneWay ? "none" : "" }}
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
                    dateFormat: 'Y-m-d',
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
                <span className="date" id="txtReturnDate_MMM">Date</span>
                <span className="date" id="txtReturnDate_DD" style={{ display: "none" }} />
            </p>
            <span id="txtReturnDate_DAY" style={{ display: "none" }} />
            <span id="txtReturnDate_YYYY" style={{ display: "none" }} />
            {errorMessage && (
                <div id="spnRetDateErrMsg" className="errorMsg">
                    {errorMessage}
                </div>
            )}
        </div>
                        
      
<div className="Traveler searchSec txtPassengers" onClick={() => setTravellerToggle(prev => !prev)}>
    <div className="icon-class">
        <img src="/Content/images/psger.png" alt="Traveler Icon" />
    </div>
    <span>
        Travelers{" "}
        <i className="fa fa-angle-down" aria-hidden="true" />
    </span>
    <h6>
        <input
            id="txtPassengers"
            type="text"
            placeholder={`${travellerDetail.totalTraveller!=1?1:1} Traveler${travellerDetail.totalTraveller !== 1 ? 's' : ''}, ${travellerDetail.cabinType}`}
            value={`${travellerDetail.totalTraveller} Traveler${travellerDetail.totalTraveller !== 1 ? 's' : ''}, ${travellerDetail.cabinType}`}
            readOnly
            onClick={() => { setShowPax((p) => !p) }}
            ref={paxRef}
        />
        <b id="txtClassType" style={{ display: "none" }}>
            {travellerDetail.cabinType}
        </b>
    </h6>
    <b id="txtPassengersDetails" style={{ display: "none" }}>
        {travellerDetail.adultCount} Adult{travellerDetail.adultCount !== 1 ? 's' : ''}
    </b>
</div>

       


{/* <div className="Traveler searchSec txtPassengers" onClick={() => setTravellerToggle(prev => !prev)}>
    <div className="icon-class">
        <img src="/Content/images/psger.png" alt="Traveler Icon" />
    </div>
    <span>
        Travelers{" "}
        <i className="fa fa-angle-down" aria-hidden="true" />
    </span>
    <h6>
        <input
            id="txtPassengers"
            type="text"
            placeholder={`${travellerDetail.adultCount} Traveler${travellerDetail.adultCount !== 1 ? 's' : ''}, ${travellerDetail.cabinType}`}
            value={`${travellerDetail.adultCount} Traveler${travellerDetail.adultCount !== 1 ? 's' : ''}, ${travellerDetail.cabinType}`}
            readOnly
        />
        <b id="txtClassType" style={{ display: "none" }}>
            {travellerDetail.cabinType}
        </b>
    </h6>
    <b id="txtPassengersDetails" style={{ display: "none" }}>
        {travellerDetail.adultCount} Adult{travellerDetail.adultCount !== 1 ? 's' : ''}
    </b>
</div>

<div id="divPassengerDDL" className="pasenger-popup" style={{ display: travellerToggle ? "" : "none" }}>
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
                            onClick={() => setAdultCount(prev => Math.max(0, prev - 1))}
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
                            onClick={() => setAdultCount(prev => Math.min(9, prev + 1))}
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
                            onClick={() => setChildrenCount(prev => Math.max(0, prev - 1))}
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
                            onClick={() => setChildrenCount(prev => Math.min(8, prev + 1))}
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
                            onClick={() => setInfantCount(prev => Math.max(0, prev - 1))}
                        />
                    </div>
                    <div className="PassengerCount">
                        <input
                            type="text"
                            value={infantCount}
                            className="CountPassengerBox"
                            readOnly
                        />
                    </div>
                    <div className="PlusPassenger">
                        <input
                            type="button"
                            value="+"
                            className="PlusPassengerBox"
                            onClick={() => setInfantCount(prev => Math.min(4, prev + 1))}
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
                            onClick={() => setInfantOnSeatCount(prev => Math.max(0, prev - 1))}
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
                            onClick={() => setInfantOnSeatCount(prev => Math.min(4, prev + 1))}
                        />
                    </div>
                </div>
            </div>
        </div>

     
        <div className="class-mpopup">
            <h2>Select Class</h2>
            <select name="CabinClass" id="LstCabinClass" value={cabinType} onChange={handleCabinTypeChange}>
                <option value="ECONOMY">Economy</option>
                <option value="Premium_Economy">Premium Economy</option>
                <option value="BUSINESS">Business</option>
                <option value="FIRST">First</option>
            </select>
        </div>

     
        <div className="btsy">
            <button onClick={handleApplyFilter} className="g-orange" id="btnPassengerDone">
                Done
            </button>
        </div>
    </div>
</div> */}

                        

                  <div className="button-search">
                    <button
                      type="button"
                      style={{ display: "none" }}
                      className="submit g-orange"
                      id="BtnSearchFare_RTOW_Deal"
                      onClick={ handleOnSubmit}
                    >
                      Search Now
                    </button>
                    <button
                      type="button"
                      className="submit g-orange"
                      id="BtnSearchFare_RTOW"
                      onClick={ handleOnSubmit}
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
              {/* <div
                id="divPassengerDDL"
                className="pasenger-popup"
                style={{ display:travellerToggle?"": "none" }
            }
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
                  
                  <div className="btsy">
                    <a className="g-orange" id="btnPassengerDone">
                      Done
                    </a>
                  </div>
                </div>
              </div> */}


<div id="divPassengerDDL" className="pasenger-popup" style={{ display: travellerToggle ? "" : "none" }}>
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
                            onClick={() => setAdultCount(prev => Math.max(0, prev - 1))}
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
                            onClick={() => setAdultCount(prev => Math.min(9, prev + 1))}
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
                            onClick={() => setChildrenCount(prev => Math.max(0, prev - 1))}
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
                            onClick={() => setChildrenCount(prev => Math.min(8, prev + 1))}
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
                            onClick={() => setInfantCount(prev => Math.max(0, prev - 1))}
                        />
                    </div>
                    <div className="PassengerCount">
                        <input
                            type="text"
                            value={infantCount}
                            className="CountPassengerBox"
                            readOnly
                        />
                    </div>
                    <div className="PlusPassenger">
                        <input
                            type="button"
                            value="+"
                            className="PlusPassengerBox"
                            onClick={() => setInfantCount(prev => Math.min(4, prev + 1))}
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
                            onClick={() => setInfantOnSeatCount(prev => Math.max(0, prev - 1))}
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
                            onClick={() => setInfantOnSeatCount(prev => Math.min(4, prev + 1))}
                        />
                    </div>
                </div>
            </div>
        </div>

     
        <div className="class-mpopup">
            <h2>Select Class</h2>
            <select name="CabinClass" id="LstCabinClass" value={cabinType} onChange={handleCabinTypeChange}>
                <option value="ECONOMY">Economy</option>
                <option value="Premium_Economy">Premium Economy</option>
                <option value="BUSINESS">Business</option>
                <option value="FIRST">First</option>
            </select>
        </div>

     
        <div className="btsy">
            <button onClick={handleApplyFilter} className="g-orange" id="btnPassengerDone">
                Done
            </button>
        </div>
    </div>
</div> 

            
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