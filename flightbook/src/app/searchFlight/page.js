"use client";
import dynamic from "next/dynamic";
import MyTextCarousel from "../_components/carousel/page";
import { useEffect, useState } from "react";
import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import SearchFlightCard from "../_components/SearchFlightcard/page";
import { useRouter } from "next/navigation";
import airportsDB from "../../../lib/airports.json";
import airlines from "../../../lib/airlines.json";
import Flatpickr from "react-flatpickr";
import { useRef } from "react";
import "flatpickr/dist/flatpickr.css";
import ModifyForm from "../_components/searchFlightForm/page";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

const SearchFlight = () => {
  const [originAirportList, setOriginAirportList] = useState([]);
  const [originInputValue, setOriginInputValue] = useState(null);
  const [origin, setOrigin] = useState("");
  const [des, setDes] = useState("");
  const [desAirportList, setDesAirportList] = useState([]);
  const [desInputValue, setDesInputValue] = useState("");
  const [travellerDetail, setTravellerDetail] = useState({
    adultCount: 1,
    childrenCount: 0,
    infanctCount: 0,
    cabinType: "ECONOMY",
  });
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisibleDes, setDropdownVisibleDes] = useState(false);
  const [showPax, setShowPax] = useState(false);
  const [flights, setFlights] = useState([]);
  const paxRef = useRef(null);

  const [travellerToggle, setTravellerToggle] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [infantOnSeatCount, setInfantOnSeatCount] = useState(0);
  const [cabinType, setCabinType] = useState("ECONOMY");

  const [earliest, setEarliest] = useState(false);
  const [quickest, setQuickest] = useState(false);
  const [cheapest, setCheapest] = useState(true);

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

    const lightpick = document.createElement("link");
    lightpick.rel = "stylesheet";
    lightpick.href = "/Content/css/m.lightpick.css";

    if (!isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(desktopCss);
      document.head.appendChild(desktopHomeCss);
      document.head.appendChild(listing);
      //document.head.appendChild(owlCarausel);
      //document.head.appendChild(confirmation);
      document.head.appendChild(flight_popup);
      // document.head.appendChild(e28);
      document.head.appendChild(lightpick);

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
        if (document.head.contains(owlCarausel)) {
          document.head.removeChild(owlCarausel);
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
        if (document.head.contains(lightpick)) {
          document.head.removeChild(lightpick);
        }
      };
    }
  }, [isMobile]);

  const [depDate, setDepDate] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState("");

  const handleDepartureChange = (date) => {
    if (date.length > 0) {
      setDepDate(date[0]);
      setErrorMessage(""); // Clear error message
    } else {
      setErrorMessage("Select depart date");
    }
  };

  const [returnDate, setReturnDate] = useState(new Date());
  //const [errorMessage, setErrorMessage] = useState('');

  const handleReturnChange = (date) => {
    if (date.length > 0) {
      setReturnDate(date[0]);
      setErrorMessage(""); // Clear error message
    } else {
      setErrorMessage("Select return date");
    }
  };

  const handleOnSubmit = async (e) => {
    try {
      const accessToken =
        localStorage.getItem("token") || searchParam.get("token");
      const searchObj = {
        originLocationCode: origin,
        destinationLocationCode: des,
        departureDate: depDate,
        returnDate: returnDate,
        adults: adultCount,
      };

      setEarliest(false);
      setQuickest(false);
      let travellersArr = [];
      if (searchParam.get("adult")) {
        for (let x = 0; x < parseInt(searchParam.get("adult")); x++) {
          travellersArr.push({
            id: travellersArr.length + 1,
            travelerType: "ADULT",
          });
        }
      }

      if (searchParam.get("child")) {
        for (let x = 0; x < parseInt(searchParam.get("child")); x++) {
          travellersArr.push({
            id: travellersArr.length + 1,
            travelerType: "CHILD",
          });
        }
      }

      if (searchParam.get("infant")) {
        for (let x = 0; x < parseInt(searchParam.get("infant")); x++) {
          travellersArr.push({
            id: travellersArr.length + 1,
            travelerType: "SEATED_INFANT",
          });
        }
      }

      let cabinRestrictionObj = {};
      if (searchParam.get("airline") !== "all") {
        cabinRestrictionObj = {
          includedCarrierCodes: [searchParam.get("airline")],
        };
      }

      let query = {
        currencyCode: "USD",
        originDestinations: [
          {
            id: "1",
            originLocationCode: origin,
            destinationLocationCode: des,
            departureDateTimeRange: {
              date: depDate.toISOString().substring(0, 10),
            },
          },
        ],
        travelers: [{ id: 1, travelerType: "ADULT" }],
        sources: ["GDS"],
        searchCriteria: {
          maxFlightOffers: 50,
          flightFilters: {
            cabinRestrictions: [
              {
                cabin: "ECONOMY",
                originDestinationIds: ["1"],
              },
            ],
          },
        },
      };

      let query2 = {
        currencyCode: "USD",
        originDestinations: [
          {
            id: "1",
            originLocationCode: origin,
            destinationLocationCode: des,
            departureDateTimeRange: {
              date: depDate.toISOString().substring(0, 10), // Adjust this to your specific parameter for the departure date
            },
          },
          {
            id: "2",
            originLocationCode: des,
            destinationLocationCode: origin,
            departureDateTimeRange: {
              date: returnDate.toISOString().substring(0, 10), // Adjust this to your specific parameter for the return date
            },
          },
        ],
        travelers: [{ id: 1, travelerType: "ADULT" }],
        sources: ["GDS"],
        searchCriteria: {
          maxFlightOffers: 50,
          flightFilters: {
            cabinRestrictions: [
              {
                cabin: "ECONOMY",
                originDestinationIds: [
                  "1", // Ensure this is correct for the outbound leg
                  "2", // Ensure this is correct for the return leg
                ],
              },
            ],
          },
        },
      };

      try {
        const response = await fetch(
          "https://api.amadeus.com/v2/shopping/flight-offers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: oneWay ? JSON.stringify(query) : JSON.stringify(query2),
          }
        );
        const json = await response.json();
        console.log(json, "JSON IN SEARCHFLIGHT");
        const newFlightList = json.data.map((a) => {
          a.stops = a.itineraries[0].segments.length - 1;
          a.itineraries.forEach((b) => {
            b.segments.forEach((segment) => {
              segment.airline = airlines[segment.carrierCode];
              segment.arrival.airport = airportsDB[segment.arrival.iataCode];
              segment.departure.airport =
                airportsDB[segment.departure.iataCode];
              // Append the cabin class to the segment
              const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
                (fare) => fare.segmentId === segment.id
              )?.cabin;
              if (cabin) segment.cabin = cabin;
            });
          });

          return a;
        });

        let newFlightList1;
        if (!oneWay) {
          newFlightList1 = json.data.map((a) => {
            a.stops = a.itineraries[1].segments.length - 1;
            a.itineraries.forEach((b) => {
              b.segments.forEach((segment) => {
                segment.airline = airlines[segment.carrierCode];
                segment.arrival.airport = airportsDB[segment.arrival.iataCode];
                segment.departure.airport =
                  airportsDB[segment.departure.iataCode];
                // Append the cabin class to the segment
                const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
                  (fare) => fare.segmentId === segment.id
                )?.cabin;
                if (cabin) segment.cabin = cabin;
              });
            });

            return a;
          });
        }
        //console.log(newFlightList, "FlightList");

        if (oneWay) setFlightList(newFlightList);
        else {
          // const twoWay = [...newFlightList, ...newFlightList1];
          // setFlightList(twoWay);
          const twoWay = [...(newFlightList || []), ...(newFlightList1 || [])];
          setFlightList(twoWay);
          console.log(twoWay, "FlightList in searchflight");
        }

        setFlightDetails(FlightList);
        if (FlightList.length <= 0) {
          // router.push("/home/no-results");
        } else {
          setFlightList(FlightList);
          setLoading(false);
          let offerInterval = setInterval(() => {
            if (!offerPopupVisible) {
              setOfferPopupVisible(true);
            }
          }, 25000);
        }
      } catch (err) {
        // router.push("/home/no-results");
        console.log("Found an error");
        console.log("error", err);
      }

      console.log(FlightList, "Flighlist in search flight");
      console.log(searchObj, "Search Object");
      //router.push(`/searchFlight?origin=${searchObj.originLocationCode}&destination=${searchObj.destinationLocationCode}&date=${searchObj.departureDate.toISOString().substring(0, 10)}&returnDate=${searchObj.returnDate.toISOString().substring(0, 10)}&adults=${searchObj.adults}&token=${accessToken}&oneway=${oneWay}`)
      //router.push(`/searchFlight?origin=${searchObj.originLocationCode}&destination=${searchObj.destinationLocationCode}&date=${searchObj.departureDate.toISOString().substring(0, 10)}${!oneWay ? `&returnDate=${searchObj.returnDate.toISOString().substring(0, 10)}` : ''}&adults=${searchObj.adults}&token=${accessToken}&oneWay=${oneWay.toString()}`);
      router.replace(
        `/searchFlight?origin=${searchObj.e}&destination=${
          searchObj.destinationLocationCode
        }&date=${searchObj.departureDate.toISOString().substring(0, 10)}${
          !oneWay
            ? `&returnDate=${searchObj.returnDate
                .toISOString()
                .substring(0, 10)}`
            : ""
        }&adults=${
          searchObj.adults
        }&token=${accessToken}&oneWay=${oneWay.toString()}`
      );
    } catch (error) {
      console.error("Error fetching flight offers:", error);
      // setError('Failed to fetch flight offers. Please try again.');
    }
  };

  const [flightDetails, setFlightDetails] = useState([]);
  const [FlightList, setFlightList] = useState([]);
  const searchParam = useSearchParams();
  const oneWay = searchParam.get("oneWay") === "true";
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [flightDetail, setFlightDetailVisible] = useState(false);
  const [modifyForm, setModifyForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchFlightOffers = async () => {
      setEarliest(false);
      setQuickest(false);
      setCheapest(true);
      let travellersArr = [];
      if (searchParam.get("adult")) {
        for (let x = 0; x < parseInt(searchParam.get("adult")); x++) {
          travellersArr.push({
            id: travellersArr.length + 1,
            travelerType: "ADULT",
          });
        }
      }

      if (searchParam.get("child")) {
        for (let x = 0; x < parseInt(searchParam.get("child")); x++) {
          travellersArr.push({
            id: travellersArr.length + 1,
            travelerType: "CHILD",
          });
        }
      }

      if (searchParam.get("infant")) {
        for (let x = 0; x < parseInt(searchParam.get("infant")); x++) {
          travellersArr.push({
            id: travellersArr.length + 1,
            travelerType: "SEATED_INFANT",
          });
        }
      }

      let cabinRestrictionObj = {};
      if (searchParam.get("airline") !== "all") {
        cabinRestrictionObj = {
          includedCarrierCodes: [searchParam.get("airline")],
        };
      }

      let query = {
        currencyCode: "USD",
        originDestinations: [
          {
            id: "1",
            originLocationCode: searchParam.get("origin"),
            destinationLocationCode: searchParam.get("destination"),
            departureDateTimeRange: {
              date: searchParam.get("date"),
            },
          },
        ],
        travelers: [{ id: 1, travelerType: "ADULT" }],
        sources: ["GDS"],
        searchCriteria: {
          maxFlightOffers: 50,
          flightFilters: {
            cabinRestrictions: [
              {
                cabin: "ECONOMY",
                originDestinationIds: ["1"],
              },
            ],
          },
        },
      };

      let query2 = {
        currencyCode: "USD",
        originDestinations: [
          {
            id: "1",
            originLocationCode: searchParam.get("origin"),
            destinationLocationCode: searchParam.get("destination"),
            departureDateTimeRange: {
              date: searchParam.get("date"), // Adjust this to your specific parameter for the departure date
            },
          },
          {
            id: "2",
            originLocationCode: searchParam.get("destination"),
            destinationLocationCode: searchParam.get("origin"),
            departureDateTimeRange: {
              date: searchParam.get("returnDate"), // Adjust this to your specific parameter for the return date
            },
          },
        ],
        travelers: [{ id: 1, travelerType: "ADULT" }],
        sources: ["GDS"],
        searchCriteria: {
          maxFlightOffers: 50,
          flightFilters: {
            cabinRestrictions: [
              {
                cabin: "ECONOMY",
                originDestinationIds: [
                  "1", // Ensure this is correct for the outbound leg
                  "2", // Ensure this is correct for the return leg
                ],
              },
            ],
          },
        },
      };

      try {
        const response = await fetch(
          "https://api.amadeus.com/v2/shopping/flight-offers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${searchParam.get("token")}`,
            },
            body: oneWay ? JSON.stringify(query) : JSON.stringify(query2),
          }
        );
        const json = await response.json();
        console.log(json, "JSON");
        const newFlightList = json.data.map((a) => {
          a.stops = a.itineraries[0].segments.length - 1;
          a.itineraries.forEach((b) => {
            b.segments.forEach((segment) => {
              segment.airline = airlines[segment.carrierCode];
              segment.arrival.airport = airportsDB[segment.arrival.iataCode];
              segment.departure.airport =
                airportsDB[segment.departure.iataCode];
              // Append the cabin class to the segment
              const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
                (fare) => fare.segmentId === segment.id
              )?.cabin;
              if (cabin) segment.cabin = cabin;
            });
          });

          return a;
        });

        let newFlightList1;
        if (!oneWay) {
          newFlightList1 = json.data.map((a) => {
            a.stops = a.itineraries[1].segments.length - 1;
            a.itineraries.forEach((b) => {
              b.segments.forEach((segment) => {
                segment.airline = airlines[segment.carrierCode];
                segment.arrival.airport = airportsDB[segment.arrival.iataCode];
                segment.departure.airport =
                  airportsDB[segment.departure.iataCode];
                // Append the cabin class to the segment
                const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
                  (fare) => fare.segmentId === segment.id
                )?.cabin;
                if (cabin) segment.cabin = cabin;
              });
            });

            return a;
          });
        }
        //console.log(newFlightList, "FlightList");
        if (oneWay) {
          console.log("Flight List Changed");
          setFlightList(newFlightList);
        } else {
          // const twoWay = [...newFlightList, ...newFlightList1];
          // setFlightList(twoWay);
          const twoWay = [...(newFlightList || []), ...(newFlightList1 || [])];
          setFlightList(twoWay);
          console.log(twoWay, "FlightList in searchflight");
        }

        setFlightDetails(FlightList);
        if (FlightList.length <= 0) {
          // router.push("/home/no-results");
        } else {
          setFlightList(FlightList);
          setLoading(false);
          let offerInterval = setInterval(() => {
            if (!offerPopupVisible) {
              setOfferPopupVisible(true);
            }
          }, 25000);
        }
      } catch (err) {
        // router.push("/home/no-results");
        console.log("Found an error");
        console.log("error", err);
      }
    };

    fetchFlightOffers();
  }, [searchParam]);

  const handleEarliest = () => {
    setQuickest(false);
    setEarliest(true);
    setCheapest(false);

    // console.log(earliest, "earliest clicked");

    // let queryEarliest = {
    //   currencyCode: "USD",
    //   originDestinations: [
    //     {
    //       id: "1",
    //       originLocationCode: searchParam.get("origin"),
    //       destinationLocationCode: searchParam.get("destination"),
    //       departureDateTimeRange: {
    //         date: searchParam.get("date"),
    //       },
    //     },
    //   ],
    //   travelers: [{ id: 1, travelerType: "ADULT" }],
    //   sources: ["GDS"],
    //   searchCriteria: {
    //     maxFlightOffers: 50,
    //     flightFilters: {
    //       cabinRestrictions: [
    //         {
    //           cabin: "ECONOMY",
    //           originDestinationIds: ["1"],
    //         },
    //       ],
    //     },
    //     sortCriteria: {
    //       sortOrder: "EARLIEST_DEPARTURE",
    //     },
    //   },
    // };

    // let queryEarliestRound = {
    //   currencyCode: "USD",
    //   originDestinations: [
    //     {
    //       id: "1",
    //       originLocationCode: searchParam.get("origin"),
    //       destinationLocationCode: searchParam.get("destination"),
    //       departureDateTimeRange: {
    //         date: searchParam.get("date"), // For the outbound flight
    //       },
    //     },
    //     {
    //       id: "2",
    //       originLocationCode: searchParam.get("destination"),
    //       destinationLocationCode: searchParam.get("origin"),
    //       departureDateTimeRange: {
    //         date: searchParam.get("returnDate"), // For the return flight
    //       },
    //     },
    //   ],
    //   travelers: [{ id: 1, travelerType: "ADULT" }],
    //   sources: ["GDS"],
    //   searchCriteria: {
    //     maxFlightOffers: 50,
    //     flightFilters: {
    //       cabinRestrictions: [
    //         {
    //           cabin: "ECONOMY",
    //           originDestinationIds: [
    //             "1",
    //             "2", // Include both legs in cabin restrictions
    //           ],
    //         },
    //       ],
    //     },
    //     sortCriteria: {
    //       sortOrder: "EARLIEST_DEPARTURE",
    //     },
    //   },
    // };

    // try {
    //   const response = await fetch(
    //     "https://api.amadeus.com/v2/shopping/flight-offers",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${searchParam.get("token")}`,
    //       },
    //       body: oneWay
    //         ? JSON.stringify(queryEarliest)
    //         : JSON.stringify(queryEarliestRound),
    //     }
    //   );
    //   const json = await response.json();
    //   console.log(json, "JSON");
    //   const newFlightListEarliest = json.data.map((a) => {
    //     a.stops = a.itineraries[0].segments.length - 1;
    //     a.itineraries.forEach((b) => {
    //       b.segments.forEach((segment) => {
    //         segment.airline = airlines[segment.carrierCode];
    //         segment.arrival.airport = airportsDB[segment.arrival.iataCode];
    //         segment.departure.airport = airportsDB[segment.departure.iataCode];
    //         // Append the cabin class to the segment
    //         const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
    //           (fare) => fare.segmentId === segment.id
    //         )?.cabin;
    //         if (cabin) segment.cabin = cabin;
    //       });
    //     });

    //     return a;
    //   });

    //   let newFlightListEarliest1;
    //   if (!oneWay) {
    //     newFlightListEarliest1 = json.data.map((a) => {
    //       a.stops = a.itineraries[1].segments.length - 1;
    //       a.itineraries.forEach((b) => {
    //         b.segments.forEach((segment) => {
    //           segment.airline = airlines[segment.carrierCode];
    //           segment.arrival.airport = airportsDB[segment.arrival.iataCode];
    //           segment.departure.airport =
    //             airportsDB[segment.departure.iataCode];
    //           // Append the cabin class to the segment
    //           const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
    //             (fare) => fare.segmentId === segment.id
    //           )?.cabin;
    //           if (cabin) segment.cabin = cabin;
    //         });
    //       });

    //       return a;
    //     });
    //   }
    //   //console.log(newFlightList, "FlightList");

    //   if (oneWay) setFlightList(newFlightListEarliest);
    //   else {
    //     // const twoWay = [...newFlightList, ...newFlightList1];
    //     // setFlightList(twoWay);
    //     const twoWay = [
    //       ...(newFlightListEarliest || []),
    //       ...(newFlightListEarliest1 || []),
    //     ];
    //     setFlightList(twoWay);
    //     console.log(twoWay, "FlightList in searchflight");
    //   }

    //   setFlightDetails(FlightList);
    //   if (FlightList.length <= 0) {
    //     // router.push("/home/no-results");
    //   } else {
    //     setFlightList(FlightList);
    //     //setLoading(false);
    //     // let offerInterval = setInterval(() => {
    //     //   if (!offerPopupVisible) {
    //     //     setOfferPopupVisible(true);
    //     //   }
    //     // }, 25000);
    //   }
    // } catch (err) {
    //   // router.push("/home/no-results");
    //   console.log("Found an error");
    //   console.log("error", err);
    // }
    return [...FlightList].sort((a, b) => {
      return (
        new Date(a.itineraries[0].segments[0].departure.at) -
        new Date(b.itineraries[0].segments[0].departure.at)
      );
    });
  };

  const handleQuickest = () => {
    setQuickest(true);
    setEarliest(false);
    setCheapest(false);
    return [...FlightList].sort((a, b) => {
      return (
        a.itineraries[0].segments.length - b.itineraries[0].segments.length
      );
    });
  };
  const handleCheapest = () => {
    console.log("cheapest clicked");
    setQuickest(false);
    setEarliest(false);
    setCheapest(true);
  };

  const calculateTotalDuration = (itinerary) => {
    return itinerary.segments.reduce((total, segment) => {
      const segmentDuration = calculateSegmentDuration(segment);
      return total + segmentDuration;
    }, 0);
  };

  // Helper function to calculate duration of a single segment
  const calculateSegmentDuration = (segment) => {
    const departure = new Date(segment.departure.at);
    const arrival = new Date(segment.arrival.at);
    return (arrival - departure) / (1000 * 60); // Return duration in minutes
  };

  const handleOriginChange = (event) => {
    console.log(event.target.value, "inputValuein handleorigin");
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

  useEffect(() => {
    // Load from local storage
    const storedTravellerDetail = localStorage.getItem("travellerDetail");
    if (storedTravellerDetail) {
      setTravellerDetail(JSON.parse(storedTravellerDetail));
    }
  }, []);

  const handleApplyFilter = () => {
    const totalTraveller =
      adultCount + childrenCount + infantCount + infantOnSeatCount;

    const newTravellerDetail = {
      adultCount,
      childrenCount,
      infantCount,
      infantOnSeatCount,
      cabinType,
      totalTraveller,
    };

    // Save to local storage
    localStorage.setItem("travellerDetail", JSON.stringify(newTravellerDetail));

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

  const fetchNearestAirports = async () => {
    const accessToken = searchParam.get("token");
    const airportOrigin = await fetch(
      `https://test.api.amadeus.com/v1/reference-data/locations/airports?subType=AIRPORT&keyword=${searchParam.get(
        "origin"
      )}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(accessToken, "token");

    console.log("airportOrigin", airportOrigin);
    const resultOrigin = await airportOrigin.json();
    console.log("resultOrigin", resultOrigin);

    // Check if the response is valid and has data
    if (airportOrigin.ok && Array.isArray(resultOrigin.data)) {
      // Map the response to label and value format
      const options = resultOrigin.data.map((a) => ({
        label: `${a.iataCode}, ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
        value: a.iataCode, // Corrected to just a.iataCode
      }));

      // Set the nearest airport list
      setOriginAirportList(options);

      if (options.length > 0) {
        setOriginInputValue(options[0].label); // Set the first airport as the default value
        setOrigin(options[0].value); // Corrected to use value
      }
    } else {
      console.error("Error fetching airports:");
    }

    const airportDes = await fetch(
      `https://test.api.amadeus.com/v1/reference-data/locations/airports?subType=AIRPORT&keyword=${searchParam.get(
        "destination"
      )}`,
      {
        headers: {
          Authorization: `Bearer ${searchParam.get("token")}`,
        },
      }
    );

    const resultDes = await airportDes.json();

    // Check if the response is valid and has data
    if (airportDes.ok && Array.isArray(resultDes.data)) {
      // Map the response to label and value format
      const optionsDes = airportDes.data.map((a) => ({
        label: `${a.iataCode}, ${a.name}, ${a.address.cityName}, ${a.address.countryCode}`,
        value: a.iataCode, // Corrected to just a.iataCode
      }));

      // Set the nearest airport list
      setDesAirportList(optionsDes);

      if (optionsDes.length > 0) {
        setDesInputValue(optionsDes[0].label); // Set the first airport as the default value
        setDes(optionsDes[0].value); // Corrected to use value
      }
    } else {
      console.error("Error fetching airports:");
    }

    setOriginInputValue(searchParam.get("originInputValue"));
    setDesInputValue(searchParam.get("desInputValue"));
    setDepDate(searchParam.get("date"));
    {
      !oneWay && setReturnDate(searchParam.get("returnDate"));
    }
    setTravellerDetail(searchParam.get("adults"));
  };

  useEffect(() => {
    fetchNearestAirports();
  }, [searchParam.get("token")]);

  const flightListToRenderQuickest = useMemo(() => {
    if (!quickest) return [];

    return handleQuickest(); // Only called when quickest is true
  }, [quickest, FlightList]);

  const flightListToRenderEarliest = useMemo(() => {
    if (!earliest) return [];

    return handleEarliest(); // Only called when quickest is true
  }, [earliest, FlightList]);

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
            {/* <form id="formFlightSearchEngine">
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
                
                <div className="btsy">
                  <a className="g-orange" id="btnPassengerDone">
                    Done
                  </a>
                </div>
              </div>
            </div>
         
          </form> */}
            {/* <form id="formFlightSearchEngine" >
            <section className="flight-trip">
              <div className="roundTripHolder">
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
                      placeholder={`${travellerDetail.totalTraveller != 1 ? 1 : 1} Traveler${travellerDetail.totalTraveller !== 1 ? 's' : ''}, ${travellerDetail.cabinType}`}
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






                <div className="button-search">
                  <button
                    type="button"
                    style={{ display: "none" }}
                    className="submit g-orange"
                    id="BtnSearchFare_RTOW_Deal"
                    onClick={handleOnSubmit}
                  >
                    Search Now
                  </button>
                  <button
                    type="button"
                    className="submit g-orange"
                    id="BtnSearchFare_RTOW"
                    onClick={handleOnSubmit}
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
          </form> */}
            <ModifyForm
              oneWay={oneWay.toString()}
              setFlightDetails={setFlightDetails}
              setFlightList={setFlightList}
              FlightList={FlightList}
              modifyForm={modifyForm}
              setModifyForm={setModifyForm}
            />
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
                  Price <span>( TotalPrice Per person inc. Fee)</span>
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
                {/* <Carousel/> */}

                <MyTextCarousel FlightList={FlightList} oneWay={oneWay} />
              </div>
            </section>
            {/* <Carousel/> */}
            {/* short by */}
            <div className="shortby  sort-area" id="dvChpfastprice">
              <ul>
                <li
                  className="active tipsy-cheapest sort-price"
                  onClick={handleCheapest}
                >
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
                <li
                  className="tipsy-fastest sort-traveltime"
                  onClick={handleQuickest}
                >
                  <input
                    type="hidden"
                    id="hdnsorttraveltime"
                    name="hdnsorttraveltime"
                    defaultValue="ASC"
                  />
                  <a href="javascript:void(0)">quickest</a>
                </li>
                <li
                  className="tipsy-earliest sort-earliest"
                  onClick={handleEarliest}
                >
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

            {!quickest &&
              !earliest &&
              cheapest &&
              FlightList &&
              FlightList.map((a) => {
                return (
                  <SearchFlightCard
                    setSelectedFlight={setSelectedFlight}
                    setFlightDetailVisible={setFlightDetailVisible}
                    flight={a}
                    oneWay={oneWay.toString()}
                    token={searchParam.get("token")}
                  />
                );
              })}

            {/* {!earliest &&
              FlightList &&
              FlightList.map((a) => {
                return (
                  <SearchFlightCard
                    setSelectedFlight={setSelectedFlight}
                    setFlightDetailVisible={setFlightDetailVisible}
                    flight={a}
                    oneWay={oneWay.toString()}
                    token={searchParam.get("token")}
                  />
                );
              })} */}
            {/* listing box */}
            {earliest &&
              flightListToRenderEarliest.map((a) => {
                return (
                  <SearchFlightCard
                    setSelectedFlight={setSelectedFlight}
                    setFlightDetailVisible={setFlightDetailVisible}
                    flight={a}
                    oneWay={oneWay.toString()}
                    token={searchParam.get("token")}
                  />
                );
              })}

            {quickest &&
              flightListToRenderQuickest.map((a) => {
                return (
                  <SearchFlightCard
                    setSelectedFlight={setSelectedFlight}
                    setFlightDetailVisible={setFlightDetailVisible}
                    flight={a}
                    oneWay={oneWay.toString()}
                    token={searchParam.get("token")}
                  />
                );
              })}

            {/* show more */}
            <div className="listingbutton pagination-container">
              <div id="dvAirListing" className="col-xs-12 "></div>
              <div className="" id="dvPageNumber">
                <div className="pagination-container">
                  <ul className="pagination">
                    <li className="PagedList-skipToNext">
                      <a
                        href="/FlightListing/ShowNextPage?Page_No=2"
                        rel="next"
                      >
                        show more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
  );
};
export default SearchFlight;
