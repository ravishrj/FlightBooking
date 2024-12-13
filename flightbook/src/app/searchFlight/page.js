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
import Loading from "../_components/loading/page";
import NavbarDesktop from "../_components/NavbarDesktop/page";
import FooterDesktop from "../_components/FooterDesktop/page";

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

const SearchFlight = () => {
  const [uniqueAirlines, setUniqueAirlines] = useState([]);

  const [maxHeight, setMaxHeight] = useState("0px");
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);
  const [openedFilter, setOpenedFilter] = useState("Stops");
  const [filtersObj, setFiltersObj] = useState({ stops: 0 });
  const [offerPopupVisible, setOfferPopupVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [depName, setDepName] = useState(null);
  const [activeFlight, setActiveFlight] = useState(null);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [stopFilter, setStopFilter] = useState(""); // Consider using specific values for clarity
  const [airlinesDetails, setAirlineDetails] = useState([]);
  const [showMoreAirlines, setShowMoreAirlines] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("");
  const [selectedAirports, setSelectedAirports] = useState([]);
  const [selectedStop, setSelectedStop] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

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
  const [filter, setFilter] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const loadMoreResult = () => {
    setVisibleCount(visibleCount + 10);
  };

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

  useEffect(() => {
    const currentDate = new Date();
    const defaultDate = new Date(
      currentDate.setDate(currentDate.getDate() + 7)
    );
    setReturnDate(defaultDate);
  }, []);
  //const [errorMessage, setErrorMessage] = useState('');
  const handleStopFilter = (type) => {
    // Ensure availableStops is defined and type is a string
    console.log("stop filter triggered");
    setFilter(true);
    setStopFilter(type);
  };

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
  const isoneWay = searchParam.get("oneWay") === "true";
  //const setOneWay = searchParam.get("setOneWay");
  const [oneWay, setOneWay] = useState(isoneWay);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [flightDetail, setFlightDetailVisible] = useState(false);
  const [modifyForm, setModifyForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("coming here");
    console.log({ activeFlight });
    setFilter(true);
    let tmpData = FlightList;

    // Filter by active flight if it exists
    if (activeFlight !== null) {
      tmpData = FlightList.filter(
        (obj) => obj.validatingAirlineCodes[0] === activeFlight.airlineCode
      );

      setAppliedFilters((prev) => {
        const existingFilter = prev.find((filter) => filter.type === "Airline");
        if (existingFilter) {
          return prev.map((filter) =>
            filter.type === "Airline"
              ? { ...filter, value: activeFlight.airlineName }
              : filter
          );
        }
        return [...prev, { type: "Airline", value: activeFlight.airlineName }];
      });
    }

    // Apply stop filters
    if (stopFilter === "Non-Stop") {
      tmpData = tmpData.filter((flight) =>
        flight.itineraries.every((itinerary) => itinerary.segments.length === 1)
      );
      setAppliedFilters((prev) =>
        prev
          .filter((filter) => filter.type !== "Stop")
          .concat({ type: "Stop", value: "Non-Stop" })
      );
    } else if (stopFilter === "1 Stop") {
      tmpData = tmpData.filter((flight) =>
        flight.itineraries.some((itinerary) => itinerary.segments.length === 2)
      );
      setAppliedFilters((prev) =>
        prev
          .filter((filter) => filter.type !== "Stop")
          .concat({ type: "Stop", value: "One-Stop" })
      );
    } else if (stopFilter === "2 Stops" || stopFilter === "3+ Stops") {
      tmpData = tmpData.filter((flight) =>
        flight.itineraries.some((itinerary) => itinerary.segments.length > 2)
      );
      setAppliedFilters((prev) =>
        prev
          .filter((filter) => filter.type !== "Stop")
          .concat({ type: "Stop", value: "Two or More Stops" })
      );
    }

    setFilteredFlights(tmpData);
    console.log(filteredFlights, "filterdFlights");
  }, [activeFlight, stopFilter, FlightList]); // Add dependencies to the useEffect

  const processFlightData = (json) => {
    let flightDetailsCa = [];
    const uniqueAirlines = new Set();

    json.data.forEach((a) => {
      a.stops = a.itineraries[0].segments.length - 1; // Calculate stops

      // Process each itinerary and segment
      a.itineraries.forEach((b) => {
        b.segments.forEach((segment) => {
          segment.airline = airlines[segment.carrierCode];
          segment.arrival.airport = airportsDB[segment.arrival.iataCode];
          segment.departure.airport = airportsDB[segment.departure.iataCode];

          // Append cabin class to the segment
          const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
            (fare) => fare.segmentId === segment.id
          )?.cabin;
          if (cabin) segment.cabin = cabin;
        });
      });

      // Create a new object to store combined details
      const flightDetailca = {
        price: a.price.grandTotal,
        airlineCode: a.validatingAirlineCodes[0],
        isNonStop: a.stops === 0,
        isOnePlusStop: a.stops > 0,
        airlineName: a.itineraries[0].segments[0].airline.name,
        airlineLogo: a.itineraries[0].segments[0].airline.logo,
        departureAirportName:
          a.itineraries[0].segments[0].departure.airport.name,
        departureAirportIata: a.itineraries[0].segments[0].departure.iataCode,
        arrivalAirportName: a.itineraries[0].segments[0].arrival.airport.name,
        arrivalAirportIata: a.itineraries[0].segments[0].arrival.iataCode,
        duration: a.itineraries[0].duration,
      };

      // Add unique flight details based on airline code
      if (!uniqueAirlines.has(flightDetailca.airlineCode)) {
        uniqueAirlines.add(flightDetailca.airlineCode);
        flightDetailsCa.push(flightDetailca);
      }
    });

    setAirlineDetails(flightDetailsCa); // Make sure this function is defined in your context

    return flightDetailsCa;
  };

  useEffect(() => {
    const fetchFlightOffers = async () => {
      setEarliest(false);
      setQuickest(false);
      setCheapest(true);
      setFilter(false);
      setVisibleCount(10);
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
        travelers: travellersArr,
        sources: ["GDS"],
        searchCriteria: {
          maxFlightOffers: 50,
          flightFilters: {
            cabinRestrictions: [
              {
                cabin: searchParam.get("cabin"),
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
        travelers: travellersArr,
        sources: ["GDS"],
        searchCriteria: {
          maxFlightOffers: 50,
          flightFilters: {
            cabinRestrictions: [
              {
                cabin: searchParam.get("cabin"),
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
          setFlightDetails(FlightList);
          if (newFlightList.length > 0) {
            setLoading(false);
            console.log(loading, "loading in one way"); // Mark loading as complete
          } else router.push("/no-result");
        } else {
          // const twoWay = [...newFlightList, ...newFlightList1];
          // setFlightList(twoWay);
          const twoWay = [...(newFlightList || []), ...(newFlightList1 || [])];
          setFlightList(twoWay);
          if (twoWay.length > 0) {
            setLoading(false);
            console.log(loading, "loading in two way"); // Mark loading as complete
          } else router.push("/no-result");
          console.log(twoWay, "FlightList in searchflight");
        }
        const flightDetailsCarausel = processFlightData(json);

        setUniqueAirlines(flightDetailsCarausel);

        setFlightDetails(FlightList);

        if (FlightList.length <= 0) {
          // router.push("/no-result");
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
        // router.push("/no-result");

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
    setFilter(false);
    setVisibleCount(10);

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
    setFilter(false);
    setVisibleCount(10);
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
    setFilter(false);
    setVisibleCount(10);
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
    <div className="wrapper">
      <NavbarDesktop />
      <div id="dvDummyListWrapper">
        <section className="listingmain">
          <div className="overlay-div" />
          <div className="">
            <link
              href="/Content/css/lightpick.css?v=RUS2021"
              rel="stylesheet"
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    /*ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content {\n        top: 178.719px !important;\n    }*/\n    #formFlightSearchEngine {\n    width: 86%;\n    margin: 0 auto;\n}\n    /*section.lightpick {\n        top: 434.17px !important;\n    }*/\n    .container-fluid{margin-top:7%;width:100%;display:inline-block;}\n    .advance_ruhus_SearchHolder {\n  z-index:1;top:150px!important;\n    left: 7px!important;\n}\n    .flight-trip{position:relative}\n\n    \n.advance_ruhus_SearchHolder {\n    display: none;\n    position: absolute;\n    width: 350px;\n    background: #fff;\n    top: 142px;\n    left: 0;\n    padding: 4px 15px 15px 28px;\n    box-shadow: 0 3px 4px #333;\n}\n.advance_ruhus_SearchHolder ul {\n    display: flex;\n    align-items: center;\n}\n.advance_ruhus_SearchHolder input {\n    padding: 10px 15px;\n    border: 1px solid #ccc;\n    margin-right: 15px;\n}\n.advance_ruhus_SearchHolder input#chk_RUHUS_DirectFlight {\n    margin: 0;\n    width: 17px;\n}\n.advance_ruhus_SearchHolder input#chk_RUHUS_DirectFlight {\n    width: 17px;\n    margin-right: 4px;\n}\n.advance_ruhus_SearchHolder ul label {\n    display: flex;\n    font-size: 12px;\n    color: #181818;\n}\n\n\n\n #formFlightSearchEngine{\n        position:relative;\n    }\n   .close-search {\n       cursor: pointer;\n    background: #d90001;\n    color: #fff;\n    font-family: 'poppinssemibold';\n    padding: 5px;\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    width: 33px;\n    text-align: center;\n    z-index: 2;\n    text-decoration: none;\n}\n   \n   .btn-search-show {\n    color: #fff;\n    width: 144px;\n    padding: 7px;\n    text-align: center;\n    background: #d90001;\n    border: none;\n    text-transform: uppercase;\n    font-family: 'poppinssemibold';\n    border-bottom-left-radius: 50px;\n    border-bottom-right-radius: 50px;\n    cursor:pointer;\n}\n   .btn-show{\n       position: absolute;\n    right: 41px;\n   }\n   span.minor{\n       position: absolute;\n    top: 31px;\n    right: 4px;\n   }\n   .flight-trip .roundTripHolder{\n       padding-top:29px;\n   }\n",
              }}
            />

            <div className="container-fluid">
              <div className="landing-widget">
                <ModifyForm
                  oneWay={oneWay}
                  setOneWay={setOneWay}
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

          {loading && <Loading />}
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
                        <a
                          className="call-phone-number"
                          href="tel:1-833-914-2482"
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
                      <li
                        className="allfares-stp"
                        onClick={() => handleStopFilter("Non-Stop")}
                      >
                        <a
                          href="#"
                          className="am-flight"
                          onclick="GetMatrixSorting('DO||')"
                        >
                          Non-Stop
                        </a>
                      </li>
                      <li
                        className="allfares-more-result"
                        onClick={() => handleStopFilter("1 Stop")}
                      >
                        <a href="#" onclick="GetMatrixSorting('M||')">
                          1+ Stops
                        </a>
                      </li>
                    </ul>

                    {/* <Carousel/> */}

                    {/* <MyTextCarousel FlightList={FlightList} oneWay={oneWay} /> */}
                    <MyTextCarousel
                      FlightList={FlightList}
                      oneWay={oneWay}
                      airlinesData={uniqueAirlines}
                      setActiveFlight={setActiveFlight}
                      handleStopFilter={handleStopFilter}
                    />
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
                    <li
                      className="tipsy-best sort-pricetime "
                      onClick={handleCheapest}
                    >
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
                  <div
                    className="shortbyprice"
                    style={{ display: "none" }}
                  ></div>
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
                      alternate dates or airports. All intended results may not
                      be guaranteed.
                    </p>
                  </div>
                </div>
                {/* End Short by price */}

                {!quickest &&
                  !earliest &&
                  cheapest &&
                  !filter &&
                  FlightList &&
                  FlightList.slice(0, visibleCount).map((a) => {
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
                  !filter &&
                  flightListToRenderEarliest.slice(0, visibleCount).map((a) => {
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
                  !filter &&
                  flightListToRenderQuickest.slice(0, visibleCount).map((a) => {
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

                {filter &&
                  filteredFlights.slice(0, visibleCount).map((a) => {
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
                          {!quickest &&
                            !earliest &&
                            cheapest &&
                            !filter &&
                            FlightList &&
                            filteredFlights.length > visibleCount && (
                              <a rel="next" onClick={loadMoreResult}>
                                show more
                              </a>
                            )}

                          {earliest &&
                            !filter &&
                            flightListToRenderEarliest.length >
                              visibleCount && (
                              <a rel="next" onClick={loadMoreResult}>
                                show more
                              </a>
                            )}
                          {quickest &&
                            !filter &&
                            flightListToRenderQuickest.length >
                              visibleCount && (
                              <a rel="next" onClick={loadMoreResult}>
                                show more
                              </a>
                            )}
                          {filter && filteredFlights.length > visibleCount && (
                            <a rel="next" onClick={loadMoreResult}>
                              show more
                            </a>
                          )}
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
                <input
                  type="hidden"
                  id="hdnSortOrder"
                  defaultValue="Cheapest"
                />
                <input type="hidden" id="hdnAMTypeAirPrice" defaultValue="" />
                {/* End listing box */}
              </div>
            </div>
          </div>

          {/* End main Listing */}
        </section>
      </div>
      <FooterDesktop />
    </div>
  );
};
export default SearchFlight;
