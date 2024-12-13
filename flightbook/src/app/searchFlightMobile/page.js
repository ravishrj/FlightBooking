"use client";

import { useEffect, useState } from "react";
import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import airportsDB from "../../../lib/airports.json";
import airlines from "../../../lib/airlines.json";
import { useRef } from "react";
import "flatpickr/dist/flatpickr.css";
import SearchFlightCardMobile from "../_components/SearchFlightCardMobile/page";
import Navbar from "../_components/navbar/page";
import FlightForm from "../_components/flightform/page";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Loading from "../_components/loading/page";

const searchFlightMobile = () => {
  const searchRef = useRef(null);
  const searchParam = useSearchParams();

  const [offerPopupVisible, setOfferPopupVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeFlight, setActiveFlight] = useState(null);
  const maxHeight = isSearchVisible ? "500px" : "0";

  const [filterToggle, setfilterToggle] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [stopFilter, setStopFilter] = useState(""); // Consider using specific values for clarity
  const [airlinesDetails, setAirlineDetails] = useState([]);

  const [selectedAirports, setSelectedAirports] = useState([]);
  const [selectedStop, setSelectedStop] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [FlightList, setFlightList] = useState([]);
  const isoneWay = searchParam.get("oneWay") === "true";

  const [oneWay, setOneWay] = useState(isoneWay);
  const [isMobile, setIsMobile] = useState(true);

  const [uniqueAirlines, setUniqueAirlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [flightDetails, setFlightDetails] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [flightDetail, setFlightDetailVisible] = useState(false);
  const [originAirportList, setOriginAirportList] = useState([]);
  const [depDate, setDepDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [originInputValue, setOriginInputValue] = useState(null);
  const [origin, setOrigin] = useState("");
  const [des, setDes] = useState("");
  const [desAirportList, setDesAirportList] = useState([]);
  const [desInputValue, setDesInputValue] = useState("");

  const [earliest, setEarliest] = useState(false);
  const [quickest, setQuickest] = useState(false);
  const [cheapest, setCheapest] = useState(true);
  const [filter, setFilter] = useState(false);

  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [selectedDepartureFilter, setSelectedDepartureFilter] = useState("");
  const [selectedArrivalFilter, setSelectedArrivalFilter] = useState("");
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");

  const [minDuration, setMinDuration] = useState(0);
  const [maxDuration, setMaxDuration] = useState(0);
  const [durationRange, setDurationRange] = useState({ min: 0, max: 0 });

  const [travellerDetail, setTravellerDetail] = useState({
    adultCount: 1,
    childrenCount: 0,
    infanctCount: 0,
    cabinType: "ECONOMY",
  });

  useEffect(() => {
    const lightpickmobile = document.createElement("link");
    lightpickmobile.rel = "stylesheet";
    lightpickmobile.href = "/Content/css/mlightpickmobile.css";

    const flightpop = document.createElement("link");
    flightpop.rel = "stylesheet";
    flightpop.href = "/Content/css/flight-popup.css";

    const listings = document.createElement("link");
    listings.rel = "stylesheet";
    listings.href = "/Content/css/mlistingmobile.css";

    console.log("Is Mobile Loaded");
    document.head.appendChild(lightpickmobile);
    document.head.appendChild(listings);
    document.head.appendChild(flightpop);

    return () => {
      if (document.head.contains(lightpickmobile)) {
        document.head.removeChild(lightpickmobile);
      }
      if (document.head.contains(listings)) {
        document.head.removeChild(listings);
      }
      if (document.head.contains(flightpop)) {
        document.head.removeChild(flightpop);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    const tripType = searchParam.get("oneWay");
    setIsRoundTrip(tripType !== "true");
  }, [searchParam]);

  // For Arrival And Depature Airports
  const timeFilters = [
    {
      label: "Morning",
      timeRange: "6am - 12pm",
      iconSrc: "/Content/images/eveing-icon.png",
      value: "6am - 12pm",
    },
    {
      label: "Afternoon",
      timeRange: "12pm - 6pm",
      iconSrc: "/Content/images/morning-icon.png",
      value: "12pm - 6pm",
    },
    {
      label: "Evening",
      timeRange: "After 6pm",
      iconSrc: "/Content/images/afternon-icon.png",
      value: "After 6pm",
    },
  ];

  const filterFlights = (flights, isArrival) => {
    return flights.filter((flight) => {
      const time = new Date(
        flight.itineraries[isArrival ? 1 : 0]?.segments[0].departure.at
      ).getHours();
      switch (isArrival ? selectedArrivalFilter : selectedDepartureFilter) {
        case "Before 6am":
          return time < 6;
        case "6am - 12pm":
          return time >= 6 && time < 12;
        case "12pm - 6pm":
          return time >= 12 && time < 18;
        case "After 6pm":
          return time >= 18;
        default:
          return true;
      }
    });
  };

  useEffect(() => {
    if (FlightList && FlightList.length > 0) {
      const filtered = filterFlights(FlightList, false);
      setFilteredFlights(filtered);

      if (selectedDepartureFilter) {
        setAppliedFilters((prev) => [
          ...prev.filter((filter) => filter.type !== "departureTime"),
          { type: "departureTime", value: selectedDepartureFilter },
        ]);
      }
    }
  }, [FlightList, selectedDepartureFilter]);

  useEffect(() => {
    if (isRoundTrip && FlightList && FlightList.length > 0) {
      const filtered = filterFlights(FlightList, true);
      setFilteredFlights(filtered);

      if (selectedArrivalFilter) {
        setAppliedFilters((prev) => [
          ...prev.filter((filter) => filter.type !== "arrivalTime"),
          { type: "arrivalTime", value: selectedArrivalFilter },
        ]);
      }
    }
  }, [FlightList, selectedArrivalFilter, isRoundTrip]);

  const handleDepartureFilterClick = (filter) => {
    setSelectedDepartureFilter(filter);
  };

  const handleArrivalFilterClick = (filter) => {
    setSelectedArrivalFilter(filter);
  };

  const handleCheckboxChange = (flight) => {
    const { airlineCode } = flight;

    setSelectedAirlines((prevSelected) => {
      if (prevSelected.includes(airlineCode)) {
        // If already selected, remove it
        return prevSelected.filter((code) => code !== airlineCode);
      } else {
        // If not selected, add it
        return [...prevSelected, airlineCode];
      }
    });
    setActiveFlight((prev) =>
      prev && prev.airlineCode === airlineCode ? null : flight
    );
  };

  const handleCheckboxChanges = (airportCode) => {
    console.log(airportCode, "AIRPORTSCODE");

    setSelectedAirports((prevSelected) => {
      const isSelected = prevSelected.includes(airportCode);
      const newSelected = isSelected
        ? prevSelected.filter((code) => code !== airportCode)
        : [...prevSelected, airportCode];

      setAppliedFilters((prevFilters) => {
        if (isSelected) {
          return prevFilters.filter((filter) => filter.value !== airportCode);
        } else {
          return [...prevFilters, { type: "Airport", value: airportCode }];
        }
      });

      return newSelected;
    });
  };

  const handlePriceChange = (newRange) => {
    setPriceRange({ min: newRange[0], max: newRange[1] });

    const filtered = FlightList.filter((flight) => {
      const flightPrice = parseFloat(flight.price.grandTotal);
      return flightPrice >= newRange[0] && flightPrice <= newRange[1];
    });

    // setAppliedFilters(prev =>
    //     prev.filter(filter => filter.type !== 'price').concat({ type: 'Price range', value: priceRange })
    // );

    setFilteredFlights(filtered);
  };

  useEffect(() => {
    const currentDate = new Date();
    const defaultDate = new Date(
      currentDate.setDate(currentDate.getDate() + 7)
    );
    setReturnDate(defaultDate);
  }, []);

  const stopOptions = FlightList.flatMap((flight) => {
    const stops = flight.itineraries[0].segments.length - 1;
    const grandTotal = flight.price.grandTotal;

    return [
      { label: "Non Stop", value: 0, price: grandTotal, flight },
      { label: "1 Stop", value: 1, price: grandTotal, flight },
      { label: "2 Stops", value: 2, price: grandTotal, flight },
    ].filter((option) => option.value <= stops);
  });

  // Group by stop type and find minimum price
  const minPriceStops = stopOptions.reduce((acc, option) => {
    if (option.value >= 0 && option.value <= 2) {
      if (!acc[option.value] || option.price < acc[option.value].price) {
        acc[option.value] = {
          label: option.label,
          value: option.value,
          price: option.price,
          flight: option.flight,
        };
      }
    }
    return acc;
  }, {});

  const availableStops = Object.values(minPriceStops);

  // For Stops Filter
  useEffect(() => {
    console.log("coming here");
    console.log({ activeFlight });
    setFilter(true);
    let tmpData = FlightList;
    if (activeFlight !== null) {
      tmpData = FlightList.filter((obj) => {
        return obj.validatingAirlineCodes[0] === activeFlight.airlineCode;
      });
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

      // console.log(tmpData);
    }

    if (stopFilter === "Non Stop") {
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
    } else if (stopFilter === "2 Stops") {
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
  }, [activeFlight, FlightList, stopFilter]);

  const handleStopFilter = (type) => {
    const selectedOption = availableStops.find(
      (option) => option.label === type
    );
    setSelectedStop(selectedOption);
    setStopFilter(type);
  };

  const applyFilter = () => {
    setfilterToggle(false);
  };

  useEffect(() => {
    if (FlightList.length > 0) {
      const prices = FlightList.map((flight) =>
        parseFloat(flight.price.grandTotal)
      );
      const calculatedMinPrice = Math.min(...prices);
      const calculatedMaxPrice = Math.max(...prices);
      setMinPrice(calculatedMinPrice);
      setMaxPrice(calculatedMaxPrice);
      setPriceRange({ min: calculatedMinPrice, max: calculatedMaxPrice });
      setFilteredFlights(FlightList); // Optionally reset filtered flights
    }
  }, [FlightList]);

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
        departureAirportCity:
          a.itineraries[0].segments[0].departure.airport.city,
        arrivalAirportCity: a.itineraries[0].segments[0].arrival.airport.city,
      };

      // Add unique flight details based on airline code
      if (!uniqueAirlines.has(flightDetailca.airlineCode)) {
        uniqueAirlines.add(flightDetailca.airlineCode);
        flightDetailsCa.push(flightDetailca);
        setDepartureCity(flightDetailca.departureAirportCity);
        setArrivalCity(flightDetailca.arrivalAirportCity);
      }
    });
    // console.log(flightDetailsCa, "AIRLINEDETAILS");

    setAirlineDetails(flightDetailsCa); // Make sure this function is defined in your context

    return flightDetailsCa;
  };

  // useEffect(() => {
  //   const fetchFlightOffers = async () => {
  //     setEarliest(false);
  //     setQuickest(false);
  //     setCheapest(true);
  //     setFilter(false);
  //     let travellersArr = [];
  //     if (searchParam.get("adult")) {
  //       for (let x = 0; x < parseInt(searchParam.get("adult")); x++) {
  //         travellersArr.push({
  //           id: travellersArr.length + 1,
  //           travelerType: "ADULT",
  //         });
  //       }
  //     }

  //     if (searchParam.get("child")) {
  //       for (let x = 0; x < parseInt(searchParam.get("child")); x++) {
  //         travellersArr.push({
  //           id: travellersArr.length + 1,
  //           travelerType: "CHILD",
  //         });
  //       }
  //     }

  //     if (searchParam.get("infant")) {
  //       for (let x = 0; x < parseInt(searchParam.get("infant")); x++) {
  //         travellersArr.push({
  //           id: travellersArr.length + 1,
  //           travelerType: "SEATED_INFANT",
  //         });
  //       }
  //     }

  //     let cabinRestrictionObj = {};
  //     if (searchParam.get("airline") !== "all") {
  //       cabinRestrictionObj = {
  //         includedCarrierCodes: [searchParam.get("airline")],
  //       };
  //     }

  //     let query = {
  //       currencyCode: "USD",
  //       originDestinations: [
  //         {
  //           id: "1",
  //           originLocationCode: searchParam.get("origin"),
  //           destinationLocationCode: searchParam.get("destination"),
  //           departureDateTimeRange: {
  //             date: searchParam.get("date"),
  //           },
  //         },
  //       ],
  //       travelers: travellersArr,
  //       sources: ["GDS"],
  //       searchCriteria: {
  //         maxFlightOffers: 50,
  //         flightFilters: {
  //           cabinRestrictions: [
  //             {
  //               cabin: searchParam.get("cabin"),
  //               originDestinationIds: ["1"],
  //             },
  //           ],
  //         },
  //       },
  //     };

  //     let query2 = {
  //       currencyCode: "USD",
  //       originDestinations: [
  //         {
  //           id: "1",
  //           originLocationCode: searchParam.get("origin"),
  //           destinationLocationCode: searchParam.get("destination"),
  //           departureDateTimeRange: {
  //             date: searchParam.get("date"), // Adjust this to your specific parameter for the departure date
  //           },
  //         },
  //         {
  //           id: "2",
  //           originLocationCode: searchParam.get("destination"),
  //           destinationLocationCode: searchParam.get("origin"),
  //           departureDateTimeRange: {
  //             date: searchParam.get("returnDate"), // Adjust this to your specific parameter for the return date
  //           },
  //         },
  //       ],
  //       travelers: travellersArr,
  //       sources: ["GDS"],
  //       searchCriteria: {
  //         maxFlightOffers: 50,
  //         flightFilters: {
  //           cabinRestrictions: [
  //             {
  //               cabin: searchParam.get("cabin"),
  //               originDestinationIds: [
  //                 "1", // Ensure this is correct for the outbound leg
  //                 "2", // Ensure this is correct for the return leg
  //               ],
  //             },
  //           ],
  //         },
  //       },
  //     };

  //     try {
  //       const response = await fetch(
  //         "https://api.amadeus.com/v2/shopping/flight-offers",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${searchParam.get("token")}`,
  //           },
  //           body: oneWay ? JSON.stringify(query) : JSON.stringify(query2),
  //         }
  //       );
  //       const json = await response.json();
  //       console.log(json, "JSON");
  //       const newFlightList = json.data.map((a) => {
  //         a.stops = a.itineraries[0].segments.length - 1;
  //         a.itineraries.forEach((b) => {
  //           b.segments.forEach((segment) => {
  //             segment.airline = airlines[segment.carrierCode];
  //             segment.arrival.airport = airportsDB[segment.arrival.iataCode];
  //             segment.departure.airport =
  //               airportsDB[segment.departure.iataCode];
  //             // Append the cabin class to the segment
  //             const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
  //               (fare) => fare.segmentId === segment.id
  //             )?.cabin;
  //             if (cabin) segment.cabin = cabin;
  //           });
  //         });

  //         return a;
  //       });

  //       let newFlightList1;
  //       if (!oneWay) {
  //         newFlightList1 = json.data.map((a) => {
  //           a.stops = a.itineraries[1].segments.length - 1;
  //           a.itineraries.forEach((b) => {
  //             b.segments.forEach((segment) => {
  //               segment.airline = airlines[segment.carrierCode];
  //               segment.arrival.airport = airportsDB[segment.arrival.iataCode];
  //               segment.departure.airport =
  //                 airportsDB[segment.departure.iataCode];
  //               // Append the cabin class to the segment
  //               const cabin = a.travelerPricings[0].fareDetailsBySegment.find(
  //                 (fare) => fare.segmentId === segment.id
  //               )?.cabin;
  //               if (cabin) segment.cabin = cabin;
  //             });
  //           });

  //           return a;
  //         });
  //       }
  //       //console.log(newFlightList, "FlightList");
  //       if (oneWay) {
  //         console.log("Flight List Changed");
  //         setFlightList(newFlightList);
  //       } else {
  //         // const twoWay = [...newFlightList, ...newFlightList1];
  //         // setFlightList(twoWay);
  //         const twoWay = [...(newFlightList || []), ...(newFlightList1 || [])];
  //         setFlightList(twoWay);
  //         console.log(twoWay, "FlightList in searchflight");
  //       }
  //       const flightDetailsCarausel = processFlightData(json);

  //       setUniqueAirlines(flightDetailsCarausel);

  //       setFlightDetails(FlightList);
  //       if (FlightList.length <= 0) {
  //         // router.push("/home/no-results");
  //       } else {
  //         setFlightList(FlightList);
  //         setLoading(false);
  //         let offerInterval = setInterval(() => {
  //           if (!offerPopupVisible) {
  //             setOfferPopupVisible(true);
  //           }
  //         }, 25000);
  //       }
  //     } catch (err) {
  //       // router.push("/home/no-results");
  //       console.log("Found an error");
  //       console.log("error", err);
  //     }
  //   };

  //   fetchFlightOffers();
  // }, [searchParam]);

  useEffect(() => {
    const fetchFlightOffers = async () => {
      setEarliest(false);
      setQuickest(false);
      setCheapest(true);
      setFilter(false);
      //setVisibleCount(10);
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
  };

  useEffect(() => {
    // Load from local storage
    const storedTravellerDetail = localStorage.getItem("travellerDetail");
    if (storedTravellerDetail) {
      setTravellerDetail(JSON.parse(storedTravellerDetail));
    }
  }, []);

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

  // useEffect(() => {
  //   fetchNearestAirports();
  // }, [searchParam.get("token")]);

  const FlightListToRenderQuickest = useMemo(() => {
    if (!quickest) return [];

    return handleQuickest(); // Only called when quickest is true
  }, [quickest, FlightList]);

  const FlightListToRenderEarliest = useMemo(() => {
    if (!earliest) return [];

    return handleEarliest(); // Only called when quickest is true
  }, [earliest, FlightList]);

  // Handle the toggling of search visibility
  const handleEditSearchClick = () => {
    setIsSearchVisible((prevState) => !prevState);
  };

  // Array of filter options
  const filterOptions = [
    { id: "scroll-stops", label: "Stops" },
    { id: "scroll-duration-time", label: "Time" },
    { id: "scroll-flight-duration", label: "Duration" },
    { id: "scroll-airlines", label: "Airlines" },
    { id: "scroll-departure-airports", label: "Airports" },
    { id: "scroll-price", label: "Price" },
    { id: "scroll-flexi", label: "Flexi" },
  ];

  // Handle filter option click
  const handleFilterClick = (filterId) => {
    if (activeFilter === filterId) {
      setActiveFilter(null); // Deactivate the filter if it is already active
    } else {
      setActiveFilter(filterId); // Activate the selected filter
    }
    setfilterToggle(true);
  };

  // Clear all active filters
  const handleClearFilters = () => {
    setPriceRange({ min: minPrice, max: maxPrice });
    setDurationRange({ min: minDuration, max: maxDuration });
    setFilteredFlights(FlightList);
    setSelectedAirlines([]);
    setSelectedAirports([]);
    setSelectedDepartureFilter("");
    setSelectedArrivalFilter("");
    setSelectedStop(null);
  };

  const handleCloseFilters = () => {
    setfilterToggle(false);
  };
  // Filtering for duration of flight
  useEffect(() => {
    if (FlightList.length > 0) {
      // Calculate the duration in minutes for each flight
      const durations = FlightList.map((flight) =>
        convertDurationToMinutes(flight.itineraries[0].duration)
      );

      const calculatedMinDuration = Math.min(...durations);
      const calculatedMaxDuration = Math.max(...durations);

      setMinDuration(calculatedMinDuration);
      setMaxDuration(calculatedMaxDuration);

      setDurationRange({
        min: calculatedMinDuration,
        max: calculatedMaxDuration,
      });

      setFilteredFlights(FlightList);
    }
  }, [FlightList]);

  const convertDurationToMinutes = (duration) => {
    const regex = /^PT(\d+)H(\d+)M$/;
    const match = duration.match(regex);
    if (match) {
      return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
    }
    return 0;
  };

  useEffect(() => {
    if (FlightList && FlightList.length > 0) {
      const durations = FlightList.map((flight) =>
        flight.itineraries.map((itinerary) =>
          convertDurationToMinutes(itinerary.duration)
        )
      ).flat();

      const minDuration = Math.min(...durations);
      const maxDuration = Math.max(...durations);

      setMinDuration(minDuration);
      setMaxDuration(maxDuration);
      setDurationRange({ min: minDuration, max: maxDuration });
    }
  }, [FlightList]);

  // Handle duration range change from the slider
  const handleDurationChange = (newRange) => {
    setDurationRange({ min: newRange[0], max: newRange[1] });
    const filtered = FlightList.filter((flight) => {
      // Calculate the flight duration in minutes
      const flightDuration = convertDurationToMinutes(
        flight.itineraries[0].duration
      );
      return flightDuration >= newRange[0] && flightDuration <= newRange[1];
    });

    setFilteredFlights(filtered);
  };

  // Convert minutes back to hours and minutes for display
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} hr ${mins} min`;
  };

  return (
    <>
      <Navbar />
      {/* Modify Search Button */}
      <div>
        {/* Modify Search button that is always visible */}
        <div className="modifyfltrbtn">
          <a href="javascript:;" onClick={handleEditSearchClick}>
            Modify Search
          </a>

          {/* Conditional rendering of the Close button */}
          {isSearchVisible && (
            <button onClick={handleEditSearchClick}>
              <span
                className="close-icon"
                style={{
                  fontSize: "18px",
                }}
              >
                X
              </span>
            </button>
          )}
        </div>

        {/* Transition section to show FlightForm */}
        <div
          ref={searchRef}
          style={{
            maxHeight: maxHeight,
            overflow: "hidden",
            transition: "max-height 0.5s ease-in-out",
          }}
        >
          {isSearchVisible && <FlightForm />}
        </div>
      </div>
      {loading && <Loading />}
      <section className="listingmain">
        {/* main Listing */}
        <div className="main-lisitng">
          <div className="container">
            <div
              className="sidebar-left filter-option"
              style={{ display: filterToggle ? "block" : "none" }}
            >
              {/* Filter by */}
              <div className="flterby">
                <a
                  href="javascript:;"
                  className="closefilter"
                  onClick={handleCloseFilters}
                >
                  x
                </a>
                <ul>
                  {filterOptions.map((filter) => (
                    <li
                      key={filter.id}
                      id={`li_${filter.id}`}
                      className={activeFilter === filter.id ? "active" : ""}
                    >
                      <a
                        href="javascript:void(0)"
                        onClick={() => handleFilterClick(filter.id)} // Trigger filter change
                      >
                        {filter.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="javascript:void(0)"
                  id="top-filter-clear"
                  className="clearftr"
                  onClick={handleClearFilters}
                >
                  Reset Filter
                </a>
              </div>

              {/* Filter by Stops */}
              {activeFilter === "scroll-stops" && (
                <div className="filter-stops" id="scroll-stops">
                  <h3>Stops</h3>
                  <div className="stops">
                    {availableStops.map((option) => (
                      <label
                        className="checkboxes"
                        key={option.value}
                        onClick={() => handleStopFilter(option.label)}
                      >
                        <input
                          type="checkbox"
                          id={`obstop-${option.value}`}
                          name="obstop"
                          data-id={option.value}
                          checked={selectedStop?.value === option.value}
                        />
                        <span>{option.label}</span>
                        <span className="checkmark" />
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Filter by Price */}
              {activeFilter === "scroll-price" && (
                <div className="filter-price" id="scroll-price">
                  <h3>
                    Price <span>(Total Price Per Person (Incl fee))</span>
                  </h3>

                  <div
                    id="slider-range"
                    style={{ position: "relative", width: "100%" }}
                  >
                    {/* Min Price Label */}
                    <label
                      className="label-min"
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "15px",
                        color: "white",
                      }}
                    >
                      ${priceRange.min}
                    </label>

                    {/* Slider Component */}
                    <Slider
                      range
                      min={minPrice}
                      max={maxPrice}
                      value={[priceRange.min, priceRange.max]}
                      onChange={handlePriceChange}
                      trackClassName="slider-track"
                      handleClassName="slider-handle"
                    />

                    {/* Max Price Label */}
                    <label
                      className="label-max"
                      style={{
                        position: "absolute",
                        right: "0",
                        top: "15px",
                        color: "white",
                      }}
                    >
                      ${priceRange.max}
                    </label>
                  </div>
                </div>
              )}

              {/* Filter by Flight Duration */}
              {activeFilter === "scroll-flight-duration" && (
                <div className="filter-duration" id="scroll-flight-duration">
                  <h3>Flight Duration</h3>
                  <div
                    id="slider-range"
                    style={{ position: "relative", width: "100%" }}
                  >
                    {/* Min Price Label */}
                    <label
                      className="label-min"
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "15px",
                        color: "white",
                      }}
                    >
                      {formatDuration(durationRange.min)}
                    </label>

                    {/* Slider Component */}
                    <Slider
                      range
                      min={minDuration}
                      max={maxDuration}
                      value={[durationRange.min, durationRange.max]}
                      onChange={handleDurationChange}
                      trackClassName="slider-track"
                      handleClassName="slider-handle"
                    />

                    {/* Max Price Label */}
                    <label
                      className="label-max"
                      style={{
                        position: "absolute",
                        right: "0",
                        top: "15px",
                        color: "white",
                      }}
                    >
                      {formatDuration(durationRange.max)}
                    </label>
                  </div>
                </div>
              )}

              {/* Departure Time Filter */}
              {activeFilter === "scroll-duration-time" && (
                <div className="departure-time" id="scroll-duration-time">
                  <h3>
                    Departure time <span>From {departureCity}</span>
                  </h3>
                  <ul className="box-design">
                    {timeFilters.map((filter) => (
                      <li key={filter.value}>
                        <a
                          href="javascript:void(0)"
                          onClick={() =>
                            handleDepartureFilterClick(filter.value)
                          }
                        >
                          <img src={filter.iconSrc} alt={filter.label} />
                          <p>{filter.label}</p>
                          <span>{filter.timeRange}</span>
                          <input
                            type="checkbox"
                            id={`obdepTime_${filter.timeRange.replace(
                              ":",
                              ""
                            )}`}
                            name="obdepTime"
                            data-id={filter.timeRange.replace(":", "")}
                            checked={selectedDepartureFilter === filter.label}
                            onChange={() =>
                              handleDepartureFilterClick(filter.value)
                            }
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {isRoundTrip && activeFilter === "scroll-duration-time" && (
                <div
                  className="departure-time"
                  id="scroll-duration-time-round-trip"
                >
                  <h3>
                    Return departure time <span>To {arrivalCity}</span>
                  </h3>
                  <ul className="box-design">
                    {timeFilters.map((filter) => (
                      <li key={filter.value}>
                        <a
                          href="javascript:void(0)"
                          onClick={() => handleArrivalFilterClick(filter.value)}
                        >
                          <img src={filter.iconSrc} alt={filter.label} />
                          <p>{filter.label}</p>
                          <span>{filter.timeRange}</span>
                          <input
                            type="checkbox"
                            id={`returnDepTime_${filter.timeRange.replace(
                              ":",
                              ""
                            )}`}
                            name="returnDepTime"
                            data-id={filter.timeRange.replace(":", "")}
                            checked={selectedArrivalFilter === filter.label}
                            onChange={() =>
                              handleArrivalFilterClick(filter.value)
                            }
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Departure Airports Filter */}
              {activeFilter === "scroll-departure-airports" && (
                <div
                  className="Departure-airport"
                  id="scroll-departure-airports"
                >
                  <div className="main-maije">
                    <h3>
                      Departure Airports <span>From</span>
                    </h3>

                    {/* Dynamically render unique departure airports */}
                    {Array.from(
                      new Set(
                        airlinesDetails.map(
                          (flight) => flight.departureAirportIata
                        )
                      )
                    ) // Get unique airport codes
                      .map((airportCode) => {
                        const flight = airlinesDetails.find(
                          (flight) =>
                            flight.departureAirportIata === airportCode
                        );
                        return (
                          <div className="maincheck" key={airportCode}>
                            <label className="checkboxes">
                              {flight.departureAirportName}
                              <input
                                type="checkbox"
                                id={`obdepcity-${airportCode}`} // Dynamic ID using airport code
                                name="obdepcity"
                                data-id={airportCode} // Dynamic data-id using airport code
                                checked={selectedAirports.includes(airportCode)} // Check if airport is selected
                                onChange={() =>
                                  handleCheckboxChanges(airportCode)
                                } // Handle checkbox change
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                        );
                      })}
                    {isRoundTrip && (
                      <>
                        <h3>
                          Arrival Airports <span>To</span>
                        </h3>
                        {Array.from(
                          new Set(
                            airlinesDetails.map(
                              (flight) => flight.arrivalAirportIata
                            )
                          )
                        ) // Get unique airport codes
                          .map((airportCode) => {
                            const flight = airlinesDetails.find(
                              (flight) =>
                                flight.arrivalAirportIata === airportCode
                            );
                            return (
                              <div className="maincheck" key={airportCode}>
                                <label className="checkboxes">
                                  {flight.arrivalAirportName}
                                  <input
                                    type="checkbox"
                                    id={`obdepcity-${airportCode}`} // Dynamic ID using airport code
                                    name="obdepcity"
                                    data-id={airportCode} // Dynamic data-id using airport code
                                    checked={selectedAirports.includes(
                                      airportCode
                                    )} // Check if airport is selected
                                    onChange={() =>
                                      handleCheckboxChanges(airportCode)
                                    } // Handle checkbox change
                                  />
                                  <span className="checkmark" />
                                </label>
                              </div>
                            );
                          })}
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Departure Airlines */}
              {activeFilter === "scroll-airlines" && (
                <div className="filter-airlines" id="scroll-airlines">
                  <div className="main-maije">
                    <h3>Airlines</h3>
                    <div className="showmoreitem">
                      {/* Iterate over airlinesDetails */}
                      {airlinesDetails.map((flight, index) => (
                        <div key={flight.airlineCode} className="maincheck">
                          <label className="checkboxes">
                            {/* Airline Checkbox */}
                            <input
                              type="checkbox"
                              id={`airline-${flight.airlineCode}`}
                              name="airline"
                              checked={selectedAirlines.includes(
                                flight.airlineCode
                              )}
                              data-id={flight.airlineCode}
                              onChange={() => handleCheckboxChange(flight)} // Handle checkbox change
                            />
                            <span>{flight.airlineName}</span>
                            <span className="checkmark" />
                          </label>

                          {/* Only Airline Link */}
                          <span className="price">
                            <a
                              href="javascript:void(0)"
                              style={{ color: "white", textAlign: "right" }}
                              // onClick={() => SelectOnlyAirlines(flight.airlineCode)}  // Use React's onClick
                            >
                              Only
                            </a>
                          </span>
                        </div>
                      ))}
                      {/* End iteration */}
                    </div>
                  </div>
                </div>
              )}

              {/* Departure Airports */}
              <div className="btmfixnumbr">
                <div className="apply_filter_btn">
                  <button
                    type="button"
                    className="flight-filter"
                    onClick={applyFilter}
                  >
                    Apply Filter
                  </button>
                </div>
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
              </div>
              {/* End save-big */}
            </div>

            <div className="right-listing">
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

              {/* Normal Filter by List */}
              <div className="flterby flterbynormal">
                <h3>Filter by</h3>
                <ul>
                  {filterOptions.map((filter) => (
                    <li
                      key={filter.id}
                      id={`li_${filter.id}`}
                      className={activeFilter === filter.id ? "active" : ""}
                    >
                      <a
                        href="javascript:void(0)"
                        onClick={() => handleFilterClick(filter.id)} // Trigger filter change
                      >
                        {filter.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Filter by */}
              {/* listing box */}
              <div
                className="listingbox-main tabContentHolder"
                id="dvAirListing"
              >
                {/*======= listing box =======*/}
                {!quickest &&
                  !filter &&
                  !earliest &&
                  cheapest &&
                  FlightList &&
                  FlightList.map((a) => {
                    return (
                      <SearchFlightCardMobile
                        setSelectedFlight={setSelectedFlight}
                        setFlightDetailVisible={setFlightDetailVisible}
                        flight={a}
                        oneWay={oneWay.toString()}
                        token={searchParam.get("token")}
                      />
                    );
                  })}

                {/*==== end box ====*/}
                {earliest &&
                  !filter &&
                  FlightListToRenderEarliest.map((a) => {
                    return (
                      <SearchFlightCardMobile
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
                  FlightListToRenderQuickest.map((a) => {
                    return (
                      <SearchFlightCardMobile
                        setSelectedFlight={setSelectedFlight}
                        setFlightDetailVisible={setFlightDetailVisible}
                        flight={a}
                        oneWay={oneWay.toString()}
                        token={searchParam.get("token")}
                      />
                    );
                  })}

                {filter &&
                  filteredFlights.map((a) => {
                    return (
                      <SearchFlightCardMobile
                        setSelectedFlight={setSelectedFlight}
                        setFlightDetailVisible={setFlightDetailVisible}
                        flight={a}
                        oneWay={oneWay.toString()}
                        token={searchParam.get("token")}
                      />
                    );
                  })}

                <div className="listingbutton loadmore pagination-container">
                  <div id="dvAirListing" className="col-xs-12 "></div>
                  <div className="" id="dvPageNumber">
                    <div className="pagination-container">
                      <ul className="pagination" />
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n    .LcT {\n        text-transform: lowercase;\n    }\n\n    .UcT {\n        text-transform: uppercase;\n        font: bold;\n    }\n\n    .CamelT {\n        text-transform: capitalize;\n    }\n",
                  }}
                />
              </div>
              <div className="btntext">
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
              <div id="lblMsg" style={{ display: "none" }} />
              {/* =========== Flight List End============== */}
              <input type="hidden" id="MinPrice" defaultValue={294} />
              <input type="hidden" id="MaxPrice" defaultValue={294} />
              <input type="hidden" id="MaxConnectTime" defaultValue={100} />
              <input type="hidden" id="MinHourCon" defaultValue={0} />
              <input type="hidden" id="MaxHourCon" defaultValue={100} />
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
    </>
  );
};

export default searchFlightMobile;
