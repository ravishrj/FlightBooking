"use client";
import Navbar from "@/app/_components/navbar/page";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

import { Country, State, City } from "country-state-city";
import { toast } from "react-toastify";
import Loading from "@/app/_components/loading/page";
import Copyright from "@/app/_components/copyright/page";

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

const BookingMobile = () => {
  const router = useRouter();
  const [travellerDetails, setTravellerDetails] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const address2Ref = useRef("");
  const addressRef = useRef("");
  const stateRef = useRef("");
  const cityRef = useRef("");
  const postalCodeRef = useRef("");
  useEffect(() => {
    try {
      const updatetravellerDetails = JSON.parse(
        localStorage.getItem("travellerDetails")
      );
      //setSelectedFlight(JSON.parse(localStorage.getItem("selectedflight")));
      setTravellerDetails(updatetravellerDetails);
      // setTravellerCount(
      //   summarizeTravelers(
      //     JSON.parse(localStorage.getItem("selectedflight")).travelerPricings
      //   )
      // );
      // console.log(
      //   summarizeTravelers(
      //     JSON.parse(localStorage.getItem("selectedflight")).travelerPricings
      //   ),
      //   "SUMMARIZED"
      // );
      console.log(updatetravellerDetails, "travellerDetails in conf");
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleGoBack = () => {
    router.back(); // This will navigate to the previous page
  };

  function calculateLayoverTime(flightOffer) {
    const itineraries = flightOffer.itineraries;
    const layovers = [];

    itineraries.forEach((itinerary) => {
      const segments = itinerary.segments;
      for (let i = 0; i < segments.length - 1; i++) {
        const arrivalTime = new Date(segments[i].arrival.at);
        const departureTime = new Date(segments[i + 1].departure.at);

        const layoverDuration = (departureTime - arrivalTime) / 60000; // Duration in minutes

        layovers.push({
          layover_duration: layoverDuration, // in minutes
          layover: layoverDuration > 0,
          itineraries: {
            layover_time: `${Math.floor(layoverDuration / 60)}H ${
              layoverDuration % 60
            }M`,
          },
        });
      }
    });

    return layovers;
  }

  const getFormattedDate = (date) => {
    let newDate = new Date(date);
    if (!isNaN(newDate)) {
      const formattedDate = newDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      return formattedDate;
    } else {
      console.log("Not a valid date");
    }
  };
  const getTimeFromDate = (date) => {
    let newDate = new Date(date);

    // Get hours and minutes
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();

    // Add leading zero to minutes if needed
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // Add leading zero to hours if needed
    if (hours < 10) {
      hours = "0" + hours;
    }
    return `${hours}:${minutes}`;
  };

  function extractDuration(ptString) {
    // Define a regular expression to match hours and minutes
    const regex = /PT(\d+H)?(\d+M)?/;

    // Use the regex to extract hours and minutes
    //   const matches = ptString.match(regex);
    const matches = (ptString || "").match(regex);

    // Initialize hours and minutes
    let hours = "";
    let minutes = "";

    if (matches) {
      // Extract hours if present
      if (matches[1]) {
        hours = matches[1].replace("H", "") + "H";
      }

      // Extract minutes if present
      if (matches[2]) {
        minutes = matches[2].replace("M", "") + "M";
      }
    }

    // Return the formatted duration as "XH YM"
    return `${hours} ${minutes || "00M"}`.trim();
  }

  // const searchParams = useSearchParams();
  // const [flight, setFlight] = useState(null);
  // const oneWay = searchParams.get("oneWay") === "true";
  // const price = searchParams.get("price");
  // const priceReturn = searchParams.get("price");
  //console.log("price", price);
  // useEffect(() => {
  //   const flightParam = searchParams.get("flight");
  //   // console.log(flightParam, "flightParam ");
  //   console.log("oneWay", oneWay);
  //   //console.log("price",flight.price.total);

  //   if (flightParam) {
  //     try {
  //       // Assuming flightParam is in a format like {"number": "123", "destination": "New York"}
  //       const flightObject = JSON.parse(flightParam);
  //       setFlight(flightObject);
  //     } catch (error) {
  //       console.error("Error parsing flight object:", error);
  //     }
  //   }
  // }, [searchParams]);
  // if (!flight) {
  //   console.log("data is loading");
  //   return <div>Loading...</div>;
  // } else console.log("flight", flight);

  const [flightDetailToggle, setflightDetailToggle] = useState(true);
  const [passengerDetailToggle, setpassengerDetailToggle] = useState(false);
  const [priceDetailToggle, setpriceDetailToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const width = useWindowWidth();

  useEffect(() => {
    console.log(isMobile, "is mobile");
    // const mobileCss = document.createElement("link");
    // mobileCss.rel = "stylesheet";
    // mobileCss.href = "/usmobile.css";

    // const mobileHomeCss = document.createElement("link");
    // mobileHomeCss.rel = "stylesheet";
    // mobileHomeCss.href = "/usmobile_home.css";

    const confirmationmobile = document.createElement("link");
    confirmationmobile.rel = "stylesheet";
    confirmationmobile.href = "/Content/css/confirmationmobile.css";

    const usmobilecustommobile = document.createElement("link");
    usmobilecustommobile.rel = "stylesheet";
    usmobilecustommobile.href = "/Content/css/usmobilecustommobile.css";

    const flightpopup = document.createElement("link");
    flightpopup.rel = "stylesheet";
    flightpopup.href = "/Content/css/flight-popup.css";

    console.log("Is Mobile Loaded");
    // document.head.appendChild(mobileCss);
    // document.head.appendChild(mobileHomeCss);
    document.head.appendChild(confirmationmobile);
    document.head.appendChild(usmobilecustommobile);
    document.head.appendChild(flightpopup);
    return () => {
      //   if (document.head.contains(mobileCss)) {
      //     document.head.removeChild(mobileCss);
      //   }
      //   if (document.head.contains(mobileHomeCss)) {
      //     document.head.removeChild(mobileHomeCss);
      //   }
      if (document.head.contains(confirmationmobile)) {
        document.head.removeChild(confirmationmobile);
      }
      if (document.head.contains(usmobilecustommobile)) {
        document.head.removeChild(usmobilecustommobile);
      }
      if (document.head.contains(flightpopup)) {
        document.head.removeChild(flightpopup);
      }
      //   if (document.head.contains(listing)) {
      //     document.head.removeChild(listing);
      //   }
    };
  }, [isMobile]);
  const searchParams = useSearchParams();
  const [flight, setFlight] = useState(null);
  const oneWay = searchParams.get("oneWay") === "true";
  const price = searchParams.get("price");
  const priceReturn = searchParams.get("price");

  const paymentRef = useRef("");
  const cardRef = useRef("");

  const cvvRef = useRef("");
  const cardnoRef = useRef("");
  const expmonthRef = useRef("");
  const expyearRef = useRef("");
  const cardholdernameRef = useRef("");
  const [currencyToggle, setCurrencyToggle] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    currency: "USD",
    payment: "",
    cardType: "CC",
    cardHolderName: "",
    cardNo: "",
    expiry: {
      month: "",
      year: "",
      cvv: "",
    },
  });
  const [billingInfo, setBillingInfo] = useState({
    country: "",
    address: "",
    address2: "",
    state: "",
    city: "",
    postalCode: "",
  });
  const [contactInfo, setContactInfo] = useState({
    payeeName: "",
    payeePhone: "",
    mobilePhone: "",
    email: "",
    retypeEmail: "",
  });
  const [travelerInfo, setTravelerInfo] = useState([]);

  const [lastStepToggle, setLastStepToggle] = useState(false);

  const [nextStepToggle, setNextStepToggle] = useState(false);

  useEffect(() => {
    const updatedTravelers = [];

    if (travellerDetails.adults > 0) {
      updatedTravelers.push(
        ...Array.from({ length: travellerDetails.adults }, (_, index) => ({
          id: `adult-${index + 1}`,
          gender: "1", // Default gender (Male)
          title: "",
          firstName: "",
          middleName: "",
          lastName: "",
          dob: {
            // Date of Birth as an object
            day: "", // Day (for Date of Birth)
            month: "", // Month (for Date of Birth)
            year: "",
          },

          travelerType: "Adult", // Default traveler type (Adult)
        }))
      );
    }

    if (travellerDetails.child > 0) {
      updatedTravelers.push(
        ...Array.from({ length: travellerDetails.child }, (_, index) => ({
          id: `child-${index + 1}`,
          gender: "1", // Default gender (Male)
          title: "",
          firstName: "",
          middleName: "",
          lastName: "",
          dob: {
            // Date of Birth as an object
            day: "", // Day (for Date of Birth)
            month: "", // Month (for Date of Birth)
            year: "",
          },

          travelerType: "Child", // Default traveler type (Child)
        }))
      );
    }

    if (travellerDetails.infant > 0) {
      updatedTravelers.push(
        ...Array.from({ length: travellerDetails.infant }, (_, index) => ({
          id: `infant-${index + 1}`,
          gender: "1", // Default gender (Male)
          title: "",
          firstName: "",
          middleName: "",
          lastName: "",
          dob: {
            // Date of Birth as an object
            day: "", // Day (for Date of Birth)
            month: "", // Month (for Date of Birth)
            year: "",
          },

          travelerType: "Infant", // Default traveler type (Infant)
        }))
      );
    }

    setTravelerInfo(updatedTravelers);
  }, [travellerDetails]);
  const [travellersDetails, setTravellersDetails] = useState([]);

  useEffect(() => {
    const flightParam = searchParams.get("flight");
    // console.log(flightParam, "flightParam ");
    console.log("oneWay", oneWay);
    //console.log("price",flight.price.total);

    if (flightParam) {
      try {
        // Assuming flightParam is in a format like {"number": "123", "destination": "New York"}
        const flightObject = JSON.parse(flightParam);
        setFlight(flightObject);
      } catch (error) {
        console.error("Error parsing flight object:", error);
      }
    }
  }, [searchParams]);
  if (!flight) {
    ///console.log("data is loading");
    return <Loading />;
  } else console.log("flight", flight);

  const validateForm = () => {
    const missingFields = [];

    // Traveler Info validation
    // if (!travelerInfo.title) missingFields.push("Title");
    // if (!travelerInfo.firstName) missingFields.push("First Name");
    // if (!travelerInfo.lastName) missingFields.push("Last Name");
    // if (!travelerInfo.gender) missingFields.push("Gender");
    // if (
    //   !travelerInfo.dob.day ||
    //   !travelerInfo.dob.month ||
    //   !travelerInfo.dob.year
    // ) {
    //   missingFields.push("Date of Birth");
    // }

    // Card Info validation
    if (!cardDetails.cardHolderName) missingFields.push("Card Holder Name");
    if (!cardDetails.cardNo) missingFields.push("Card Number");
    if (
      !cardDetails.expiry.month ||
      !cardDetails.expiry.year ||
      !cardDetails.expiry.cvv
    ) {
      missingFields.push("Card Expiry and CVV");
    }

    // Billing Info validation
    if (!billingInfo.country) missingFields.push("Country");
    if (!billingInfo.address) missingFields.push("Address");
    if (!billingInfo.state) missingFields.push("State");
    if (!billingInfo.city) missingFields.push("City");
    if (!billingInfo.postalCode) missingFields.push("Postal Code");

    // Contact Info validation
    if (!contactInfo.email) missingFields.push("Email");
    if (contactInfo.email !== contactInfo.retypeEmail)
      missingFields.push("Emails do not match");

    if (missingFields.length > 0) {
      toast.error(
        `Please fill the following fields: ${missingFields.join(", ")}`
      );
      return false;
    }

    return true;
  };

  const handleSubmitTravellersDetails = async () => {
    // Validate the form before submitting
    if (validateForm()) {
      // Combine all the data into a single traveler object
      const newTraveler = {
        travelerInfo,
        cardDetails,
        billingInfo,
        contactInfo,
      };

      // Add the new traveler to the array of travelers
      setTravellersDetails((prevState) => [...prevState, newTraveler]);

      // Clear individual fields after adding to the array
      setTravelerInfo({
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dob: { day: "", month: "", year: "" },
      });
      setCardDetails({
        currency: "USD",
        payment: "",
        cardType: "CC",
        cardHolderName: "",
        cardNo: "",
        expiry: { month: "", year: "", cvv: "" },
      });
      setBillingInfo({
        country: "",
        address: "",
        address2: "",
        state: "",
        city: "",
        postalCode: "",
      });
      setContactInfo({
        payeeName: "",
        payeePhone: "",
        mobilePhone: "",
        email: "",
        retypeEmail: "",
      });
      setSelectedCountry("");
      setSelectedState("");
      try {
        // Send the travelers' details to the backend API for flight reservation
        const response = await fetch("/api/charge-credit-card", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTraveler),
        });

        const result = await response.json();

        if (result.success) {
          alert(
            "Reservation Successful! Transaction ID: " + result.transactionId
          );
        } else {
          alert("Error: " + result.message);
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
      const jsonString = encodeURIComponent(JSON.stringify(flight));
      const travelerinfoString = encodeURIComponent(
        JSON.stringify(travelerInfo)
      );
      //const isOneWay = oneWay === "true";
      // console.log(isOneWay, "isOneWay");

      router.push(
        `/thankYouMobile?flight=${jsonString}&oneWay=${oneWay.toString()}&travelerInfo=${travelerinfoString.toString()}`
      );

      // Optionally, show a success message or redirect the user
      alert("Traveler details have been successfully added!");
    }
  };

  const handleInputChangeTravellersInfo = (travelerId, e) => {
    const { name, value } = e.target;

    // Check if the name belongs to a date of birth field (day, month, year)
    if (name === "day" || name === "month" || name === "year") {
      // Extract the 'dob' field name (e.g., 'day', 'month', 'year')

      setTravelerInfo((prevTravelerInfo) => {
        const updatedTravelerInfo = prevTravelerInfo.map((traveler) =>
          traveler.id === travelerId
            ? {
                ...traveler,
                dob: {
                  ...traveler.dob,
                  [name]: value, // Update the specific date of birth field
                },
              }
            : traveler
        );

        return updatedTravelerInfo;
      });
    } else {
      // For all other fields, update the traveler info normally
      setTravelerInfo((prevTravelerInfo) => {
        const updatedTravelerInfo = prevTravelerInfo.map((traveler) =>
          traveler.id === travelerId
            ? { ...traveler, [name]: value } // Update any other field dynamically
            : traveler
        );

        return updatedTravelerInfo;
      });
    }
  };
  const updateCurrency = (newCurrency) => {
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      currency: newCurrency, // Update the cardType property
    }));
    //setCurrencyToggle(false);
    // Close the dropdown after selection
  };
  const handleInputChangeCardType = (e) => {
    const { value } = e.target; // Get the value of the radio button
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      cardType: value, // Update the cardType property
    }));
  };
  const handleInputChange = (e) => {
    const { value } = e.target; // Get the value from the target element
    if (e.target === cardnoRef.current) {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        cardNo: value, // Update the cardNo property
      }));
    } else if (e.target === cardRef.current) {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        cardType: value, // Update the cardType property
      }));
    } else if (e.target === paymentRef.current) {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        payment: value, // Update the cardType property
      }));
    } else if (e.target === cardholdernameRef.current) {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        cardHolderName: value, // Update the cardHolderName property
      }));
    } else if (e.target === expmonthRef.current) {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        expiry: {
          ...prevDetails.expiry,
          month: value, // Update the month property
        },
      }));
    } else if (e.target === expyearRef.current) {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        expiry: {
          ...prevDetails.expiry,
          year: value, // Update the year property
        },
      }));
    } else if (e.target === cvvRef.current) {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        expiry: {
          ...prevDetails.expiry,
          cvv: value, // Update the cvv property
        },
      }));
    }
  };

  const handleInputChangeBillingInfo = (e) => {
    const { value } = e.target; // Get the value from the target element
    if (e.target === addressRef.current) {
      setBillingInfo((prevDetails) => ({
        ...prevDetails,
        address: value, // Update the cardType property
      }));
    } else if (e.target === address2Ref.current) {
      setBillingInfo((prevDetails) => ({
        ...prevDetails,
        address2: value, // Update the cardType property
      }));
    } else if (e.target === cityRef.current) {
      setBillingInfo((prevDetails) => ({
        ...prevDetails,
        city: value, // Update the cardHolderName property
      }));
    } else if (e.target === postalCodeRef.current) {
      setBillingInfo((prevDetails) => ({
        ...prevDetails,
        postalCode: value, // Update the month property
      }));
    }
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setBillingInfo((prevDetails) => ({
      ...prevDetails,
      country: countryCode, // Update the cardNo property
    }));
    setSelectedCountry(countryCode);
    setStates(State.getStatesOfCountry(countryCode));
    setSelectedState(""); // Reset state when country changes
    setCities([]); // Reset cities when country changes
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setBillingInfo((prevDetails) => ({
      ...prevDetails,
      state: stateCode, // Update the year property
    }));
    setSelectedState(stateCode);
    setCities(City.getCitiesOfState(selectedCountry, stateCode));
  };
  // useEffect(() => {
  //   console.log("Saving billing details:", billingInfo);
  // }, [billingInfo]);

  const handleInputChangeContactInfo = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   console.log("Saving contact info details:", contactInfo);
  // }, [contactInfo]);

  const handleDOBChange = (e) => {
    const { name, value } = e.target;
    setTravelerInfo((prevState) => ({
      ...prevState,
      dob: {
        ...prevState.dob,
        [name]: value,
      },
    }));
  };

  // useEffect(() => {
  //   console.log("Saving trveller info details:", travelerInfo);
  // }, [travelerInfo]);

  return (
    <>
      <Navbar />
      <section className="modifysearch">
        <div className="backrslt">
          <a className="btn-sm" onClick={handleGoBack}>
            GO BACK
          </a>
        </div>
      </section>

      <form
        id="InfoForm"
        action={handleSubmitTravellersDetails}
        method="post"
        autoComplete="nope"
        noValidate="novalidate"
      >
        <input
          name="__RequestVerificationToken"
          type="hidden"
          defaultValue="wABUBPQegarF0YGLOVSiJwJDC-uEXN7BGzEo9sdxyyfQ8zsV7O1vPkLo2PIPAxR5fkhYANJWxEKujSgNBm7YJaup9pkeclqz-TjvvJ6Xpnc1"
        />
        <input
          type="hidden"
          name="FlightGuidId"
          defaultValue="2691d254-9457-4033-a5d0-65d59e281aec"
          id="hdnPaymentFlightGuidID"
        />
        <input
          type="hidden"
          name="BookingGuid"
          defaultValue="811fdfb3-85ae-467a-9941-b1ec4d915be4"
          id="hdnPaymentBookingGuid"
        />
        <input
          type="hidden"
          name="hdnpromcodeapply"
          defaultValue={0}
          id="hdnpromcodeapply"
        />
        <input
          type="hidden"
          name="hdnpromcode"
          defaultValue=""
          id="hdnpromcode"
        />
        <input
          type="hidden"
          name="hdnTypeTrip"
          defaultValue="ONEWAY"
          id="hdnTypeTrip"
        />
        <input
          type="hidden"
          name="flightUniqueId"
          defaultValue="2691d254-9457-4033-a5d0-65d59e281aec"
          id="hdnFlightUniqueId"
        />
        <div className="confermation-buttons">
          <ul>
            <li
              id="liFlightDetail"
              className={flightDetailToggle ? "btn-trip active" : "btn-trip"}
              onClick={() => {
                setflightDetailToggle(true);
                setLastStepToggle(false);
                setpassengerDetailToggle(false);
              }}
            >
              Flight Details
            </li>
            <li
              id="liTravelerDetail"
              className={
                passengerDetailToggle
                  ? "btn-Passengers active"
                  : "btn-Passengers"
              }
              onClick={() => {
                setpassengerDetailToggle(true);
                setflightDetailToggle(false);
                setLastStepToggle(false);
              }}
            >
              Traveler Info
            </li>
            <li
              id="liBillingInfo"
              className={lastStepToggle ? "btn-Payment active" : "btn-Payment"}
              onClick={() => {
                setpassengerDetailToggle(true);
                setflightDetailToggle(false);
              }}
            >
              Billing Info
            </li>
          </ul>
        </div>
        <div className="" id="divPriceSummary">
          <div className="toptotledtl">
            <ul>
              <li>
                <h3>Total Price (USD)</h3>
              </li>
              <li>
                <h4>${flight.price.total}</h4>
                <h5
                  className={priceDetailToggle ? "active" : ""}
                  onClick={() => {
                    setpriceDetailToggle((prev) => !prev);
                  }}
                >
                  Price details <i className="fa fa-angle-down" />
                </h5>
              </li>
            </ul>
          </div>
          <div
            className="flightsdts"
            style={{ display: priceDetailToggle ? "block" : "none" }}
          >
            <ul>
              <li>
                <strong>Travelers</strong>
              </li>
              <li>
                <strong>Base Fare</strong>
              </li>
              <li>
                <strong>Taxes &amp; Fees</strong>
              </li>
              <li>
                <strong>Sub Total</strong>
                <div className="subtotalInfoHolder">
                  <i className="fa fa-info-circle" aria-hidden="true" />
                  <b>
                    Total prices include{" "}
                    <a
                      href="javascript:void(0)"
                      onclick="openpopupwindow('/service-fees')"
                    >
                      our service fees{" "}
                    </a>
                    and <a href="/taxes-and-fee">taxes &amp; fees</a>. Please
                    read our{" "}
                    <a href="/terms-and-conditions">Terms &amp; Conditions</a>{" "}
                    for more details.
                  </b>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                {parseInt(travellerDetails.adults, 10) || 0} * {"Adults"}
              </li>
              <li>
                $
                {flight.travelerPricings.find((a) => a.travelerType === "ADULT")
                  ? parseFloat(
                      flight.travelerPricings.find(
                        (a) => a.travelerType === "ADULT"
                      ).price.base
                    ).toFixed(2)
                  : "N/A"}
              </li>
              <li>
                {" "}
                $
                {flight.travelerPricings.find((a) => a.travelerType === "ADULT")
                  ? // Calculate the difference and then format it to 2 decimal places
                    (
                      parseFloat(
                        flight.travelerPricings.find(
                          (a) => a.travelerType === "ADULT"
                        ).price.total
                      ) -
                      parseFloat(
                        flight.travelerPricings.find(
                          (a) => a.travelerType === "ADULT"
                        ).price.base
                      )
                    ).toFixed(2)
                  : "N/A"}
              </li>
              <li>
                {" "}
                $
                {flight.travelerPricings.find((a) => a.travelerType === "ADULT")
                  ? parseInt(travellerDetails.adults, 10) *
                    parseFloat(
                      flight.travelerPricings.find(
                        (a) => a.travelerType === "ADULT"
                      ).price.total
                    ).toFixed(2)
                  : "N/A"}
              </li>
            </ul>
            {parseInt(travellerDetails.child, 10) > 0 && (
              <ul>
                <li>
                  {" "}
                  {parseInt(travellerDetails.child, 10) || 0} * {"Child"}
                </li>
                <li>
                  $
                  {flight.travelerPricings.find(
                    (a) => a.travelerType === "CHILD"
                  )
                    ? parseFloat(
                        flight.travelerPricings.find(
                          (a) => a.travelerType === "CHILD"
                        ).price.base
                      ).toFixed(2)
                    : "N/A"}
                </li>
                <li>
                  {" "}
                  $
                  {flight.travelerPricings.find(
                    (a) => a.travelerType === "CHILD"
                  )
                    ? // Calculate the difference and then format it to 2 decimal places
                      (
                        parseFloat(
                          flight.travelerPricings.find(
                            (a) => a.travelerType === "CHILD"
                          ).price.total
                        ) -
                        parseFloat(
                          flight.travelerPricings.find(
                            (a) => a.travelerType === "CHILD"
                          ).price.base
                        )
                      ).toFixed(2)
                    : "N/A"}
                </li>
                <li>
                  {" "}
                  $
                  {flight.travelerPricings.find(
                    (a) => a.travelerType === "CHILD"
                  )
                    ? parseInt(travellerDetails.child, 10) *
                      parseFloat(
                        flight.travelerPricings.find(
                          (a) => a.travelerType === "CHILD"
                        ).price.total
                      ).toFixed(2)
                    : "N/A"}
                </li>
              </ul>
            )}
            {parseInt(travellerDetails.infant, 10) > 0 && (
              <ul>
                <li>
                  {" "}
                  {parseInt(travellerDetails.infant, 10) || 0} * {"Infant"}
                </li>
                <li>
                  $
                  {flight.travelerPricings.find(
                    (a) => a.travelerType === "SEATED_INFANT"
                  )
                    ? parseFloat(
                        flight.travelerPricings.find(
                          (a) => a.travelerType === "SEATED_INFANT"
                        ).price.base
                      ).toFixed(2)
                    : "N/A"}
                </li>
                <li>
                  {" "}
                  $
                  {flight.travelerPricings.find(
                    (a) => a.travelerType === "SEATED_INFANT"
                  )
                    ? // Calculate the difference and then format it to 2 decimal places
                      (
                        parseFloat(
                          flight.travelerPricings.find(
                            (a) => a.travelerType === "SEATED_INFANT"
                          ).price.total
                        ) -
                        parseFloat(
                          flight.travelerPricings.find(
                            (a) => a.travelerType === "SEATED_INFANT"
                          ).price.base
                        )
                      ).toFixed(2)
                    : "N/A"}
                </li>
                <li>
                  {" "}
                  $
                  {flight.travelerPricings.find(
                    (a) => a.travelerType === "SEATED_INFANT"
                  )
                    ? parseInt(travellerDetails.infant, 10) *
                      parseFloat(
                        flight.travelerPricings.find(
                          (a) => a.travelerType === "SEATED_INFANT"
                        ).price.total
                      ).toFixed(2)
                    : "N/A"}
                </li>
              </ul>
            )}
            {/* <ul>
              <li className="PcOldfare" style={{ display: "none" }}>
                <span>Total Price</span>{" "}
                <span className="PcOldfare" style={{ display: "none" }}>
                  $664.90
                </span>
              </li>
            </ul> */}
            <hr />
            <ul className="totlevlu totalPrice">
              <li id="spnTotalfareHeading">Total Price (USD)</li>
              <li id="spnTotalfare" className="spnTotalfareGeneral">
                ${flight.price.total}
              </li>
            </ul>
            <ul className="avg-fare" style={{ display: "none" }}>
              <li>Average Price Per Person: (USD)</li>
              <li className="avg-fare avg-fare-value">${flight.price.total}</li>
            </ul>
          </div>
          <input type="hidden" id="hdnNoofPaxForAvg" defaultValue={1} />
          <input type="hidden" id="hdncurrencyRate" defaultValue={1} />
          <input type="hidden" id="hdncurrencySymbol" defaultValue="$" />
          <input type="hidden" id="hdnAvgTotalFareV2" defaultValue="664.9" />
          <input type="hidden" id="hdnTotalGDSFareV2" defaultValue="664.90" />
          <input type="hidden" id="hdnToCurrencyType" defaultValue="USD" />
          <input type="hidden" id="hdnDiscountAmount" defaultValue={0} />
          <input type="hidden" id="hdnCouponList" defaultValue="RUH30#" />
          <input type="hidden" id="hdnDiscountList" defaultValue="5#" />
        </div>
        {/* End Buttons */}
        <section className="confirmation">
          <div className="container">
            {/* Trip Details */}
            <div
              id="trip-details"
              className={flightDetailToggle ? "active" : ""}
            >
              <div className="headings">
                <h2>
                  <strong>Congratulations!</strong> You have got the best offer.
                </h2>
              </div>
              {/* Flight Details */}
              <div className="fdetail-hdr">
                <h3>Flight Details</h3>
              </div>
              <div className="flight-details">
                {/* <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <div className="flightlogosection">
                      <ul>
                        <li>
                          <img
                            src="/Content/images/AirlinesLogo/GEN.png"
                            width={90}
                          />
                        </li>
                        <li>
                          <p>
                            Secret Deal <span />
                          </p>
                        </li>
                      </ul>
                      <h3>
                        New York (JFK) - Delhi (DEL) <br />
                        Wed, Nov 20 | approx 24h
                      </h3>
                    </div>
                    <ul className="con-main">
                      <li>
                        <p>John F Kennedy Intl. (JFK)</p>
                        <span>Wed | 04 PM-06 PM | Nov 20</span>
                      </li>
                      <li>
                        <p>Boston Logan Intl. (BOS)</p>
                        <span>Wed | 05 PM-07 PM | Nov 20</span>
                      </li>
                      <li>
                        <p>
                          {" "}
                          <strong>Coach </strong>
                        </p>
                        <span>1h 26m</span>
                        <p className="bag-info">
                          <i>1 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Boston (BOS) | 1h 54m Layover</p>
                    </div>
                    <ul className="con-main">
                      <li>
                        <p>Boston Logan Intl. (BOS)</p>
                        <span>Wed | 07 PM-09 PM | Nov 20</span>
                      </li>
                      <li>
                        <p>Charles De Gaulle (CDG)</p>
                        <span>Thu | 08 AM-10 AM | Nov 21</span>
                      </li>
                      <li>
                        <p>
                          {" "}
                          <strong>Coach </strong>
                        </p>
                        <span>6h 50m</span>
                        <p className="bag-info">
                          <i>1 PC</i>
                        </p>
                      </li>
                    </ul>
                    <div className="changefligth">
                      <p>Paris (CDG) | 5h 35m Layover</p>
                    </div>
                    <ul className="con-main">
                      <li>
                        <p>Charles De Gaulle (CDG)</p>
                        <span>Thu | 02 PM-04 PM | Nov 21</span>
                      </li>
                      <li>
                        <p>Indira Gandhi Intl. (DEL)</p>
                        <span>Fri | 03 AM-05 AM | Nov 22</span>
                      </li>
                      <li>
                        <p>
                          {" "}
                          <strong>Coach </strong>
                        </p>
                        <span>8h 40m</span>
                        <p className="bag-info">
                          <i>1 PC</i>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="depart-flight">
                  <div className="box-left">
                    <img src="/Content/images/depart-icon-red.png" />
                    <h3>Depart</h3>
                  </div>
                  <div className="box-right">
                    <div className="flightlogosection">
                      <ul>
                        <li>
                          <img
                            src={flight.itineraries[0].segments[0].airline.logo}
                            alt="Air India"
                            title={
                              flight.itineraries[0].segments[0].airline.name
                            }
                            width={90}
                          />
                        </li>
                        <li>
                          <p>
                            {flight.itineraries[0].segments[0].airline.name}{" "}
                            <span>
                              {" "}
                              Flight (
                              {flight.itineraries[0].segments[0].airline.code}
                              {flight.itineraries[0].segments[0].number} )
                            </span>
                          </p>
                        </li>

                        <li>
                          <p className="CamelT">
                            Operated by{" "}
                            {flight.itineraries[0].segments[0].airline.name}{" "}
                            airline
                          </p>
                        </li>
                      </ul>
                      <h3>
                        {
                          flight.itineraries[0].segments[0].departure.airport
                            .city
                        }{" "}
                        {flight.itineraries[0].segments[0].departure.iataCode} -
                        {
                          flight.itineraries[0].segments[
                            flight.itineraries[0].segments.length - 1
                          ].arrival.airport.city
                        }{" "}
                        {
                          flight.itineraries[0].segments[
                            flight.itineraries[0].segments.length - 1
                          ].arrival.iataCode
                        }
                        <span>|</span>{" "}
                        {getFormattedDate(
                          flight?.itineraries[0].segments[0].departure.at
                        )}{" "}
                        | {extractDuration(flight?.itineraries[0].duration)}
                      </h3>
                    </div>
                    {flight?.itineraries[0].segments.map((segment, index) => {
                      console.log(segment, "segment"); // Check the segment structure

                      return (
                        <>
                          <ul key={index}>
                            {/* <li>
                            <img
                              src="/Content/images/AirlinesLogo/AI.png"
                              width={90}
                              alt="Air India"
                              title="Air India"
                            />
                          </li> */}
                            <ul className="con-main">
                              <li>
                                <p>
                                  {segment.departure?.airport?.name ||
                                    "Unknown Airport"}
                                  . {segment.departure?.iataCode || "N/A"}
                                </p>
                                <span>
                                  {" "}
                                  Mon | {getTimeFromDate(
                                    segment.departure?.at
                                  )}{" "}
                                  | {getFormattedDate(segment.departure?.at)}
                                </span>
                              </li>
                              <li>
                                <p>
                                  {" "}
                                  {segment.arrival?.airport?.name ||
                                    "Unknown Airport"}
                                  . {segment.arrival?.iataCode || "N/A"}
                                </p>
                                <span>
                                  {" "}
                                  Mon | {getTimeFromDate(
                                    segment.arrival?.at
                                  )} | {getFormattedDate(segment.arrival?.at)}
                                </span>
                              </li>
                              <li>
                                <p>
                                  {" "}
                                  <strong>Coach </strong>
                                </p>
                                <span>
                                  {" "}
                                  {extractDuration(segment.duration) ||
                                    "Duration unknown"}
                                </span>
                                {/* <p className="bag-info">
                          <i>1 PC</i>
                        </p> */}
                              </li>
                            </ul>
                            {/* <li>
                              <p>
                                {segment.departure?.airport?.name ||
                                  "Unknown Airport"}
                                . {segment.departure?.iataCode || "N/A"}
                              </p>
                              <span>
                                Mon | {getTimeFromDate(segment.departure?.at)} |{" "}
                                {getFormattedDate(segment.departure?.at)}
                              </span>
                            </li> */}
                            {/* <li>
                              <p>
                                {segment.arrival?.airport?.name ||
                                  "Unknown Airport"}
                                . {segment.arrival?.iataCode || "N/A"}
                              </p>
                              <span>
                                Mon | {getTimeFromDate(segment.arrival?.at)} |{" "}
                                {getFormattedDate(segment.arrival?.at)}
                              </span>
                            </li> */}
                            {/* <li>
                              <p>
                                <strong>Coach</strong>
                              </p>
                              <span>
                                {extractDuration(segment.duration) ||
                                  "Duration unknown"}
                              </span>
                              <p className="bag-info">
                              <i
                                className="fa fa-suitcase"
                                aria-hidden="true"
                              />
                              <i>2 PC</i>
                            </p>
                            </li> */}
                          </ul>
                          {flight?.itineraries[0].segments.length > 1 &&
                            segment !=
                              flight?.itineraries[0].segments[
                                flight?.itineraries[0].segments.length - 1
                              ] && (
                              <div className="changefligth">
                                <p>
                                  {" "}
                                  {segment.arrival.airport
                                    ? segment.arrival.airport.name
                                    : ""}
                                  ,
                                  {segment.arrival.airport
                                    ? segment.arrival.airport.city
                                    : ""}{" "}
                                  |
                                  {
                                    calculateLayoverTime(flight)[0]?.itineraries
                                      .layover_time
                                  }{" "}
                                  Layover
                                </p>
                                <b></b>
                              </div>
                            )}
                        </>
                      );
                    })}
                  </div>
                  {/* <div className="box-right">
                  <h3>
                    {flight.itineraries[0].segments[0].departure.airport.city}{" "}
                    {flight.itineraries[0].segments[0].departure.iataCode} -
                    {
                      flight.itineraries[0].segments[
                        flight.itineraries[0].segments.length - 1
                      ].arrival.airport.city
                    }{" "}
                    {
                      flight.itineraries[0].segments[
                        flight.itineraries[0].segments.length - 1
                      ].arrival.iataCode
                    }
                    <span>|</span>{" "}
                    {getFormattedDate(
                      flight?.itineraries[0].segments[0].departure.at
                    )}{" "}
                    | {extractDuration(flight?.itineraries[0].duration)}
                  </h3>
                  {flight?.itineraries[0].segments.map((segment, index) => {
                    console.log(segment, "segment"); // Check the segment structure

                    return (
                      <>
                        <ul key={index}>
                          <li>
                            <img
                              src="/Content/images/AirlinesLogo/AI.png"
                              width={90}
                              alt="Air India"
                              title="Air India"
                            />
                          </li>

                          <li>
                            <p>
                              {segment.departure?.airport?.name ||
                                "Unknown Airport"}
                              . {segment.departure?.iataCode || "N/A"}
                            </p>
                            <span>
                              Mon | {getTimeFromDate(segment.departure?.at)} |{" "}
                              {getFormattedDate(segment.departure?.at)}
                            </span>
                          </li>
                          <li>
                            <p>
                              {segment.arrival?.airport?.name ||
                                "Unknown Airport"}
                              . {segment.arrival?.iataCode || "N/A"}
                            </p>
                            <span>
                              Mon | {getTimeFromDate(segment.arrival?.at)} |{" "}
                              {getFormattedDate(segment.arrival?.at)}
                            </span>
                          </li>
                          <li>
                            <p>
                              <strong>Coach</strong>
                            </p>
                            <span>
                              {extractDuration(segment.duration) ||
                                "Duration unknown"}
                            </span>
                            <p className="bag-info">
                              <i
                                className="fa fa-suitcase"
                                aria-hidden="true"
                              />
                              <i>2 PC</i>
                            </p>
                          </li>
                        </ul>
                        {flight?.itineraries[0].segments.length > 1 &&
                          segment !=
                            flight?.itineraries[0].segments[
                              flight?.itineraries[0].segments.length - 1
                            ] && (
                            <div className="changefligth">
                              <p>
                                {" "}
                                {segment.arrival.airport
                                  ? segment.arrival.airport.name
                                  : ""}
                                ,
                                {segment.arrival.airport
                                  ? segment.arrival.airport.city
                                  : ""}{" "}
                                |
                                {
                                  calculateLayoverTime(flight)[0]?.itineraries
                                    .layover_time
                                }{" "}
                                Layover
                              </p>
                              <b></b>
                            </div>
                          )}
                      </>
                    );
                  })}
                </div> */}
                </div>
                {!oneWay && (
                  <div className="depart-flight return-flight">
                    <div className="box-left">
                      <img src="/Content/images/return-icon-red.png" />
                      <h3>Return</h3>
                    </div>
                    <div className="box-right">
                      <div className="flightlogosection">
                        <ul>
                          <li>
                            <img
                              src={
                                flight.itineraries[1].segments[0].airline.logo
                              }
                              alt="Air India"
                              title={
                                flight.itineraries[1].segments[0].airline.name
                              }
                              width={90}
                            />
                          </li>
                          <li>
                            <p>
                              {flight.itineraries[1].segments[0].airline.name}{" "}
                              <span>
                                {" "}
                                Flight (
                                {flight.itineraries[1].segments[0].airline.code}
                                {flight.itineraries[1].segments[0].number} )
                              </span>
                            </p>
                          </li>

                          <li>
                            <p className="CamelT">
                              Operated by{" "}
                              {flight.itineraries[1].segments[0].airline.name}{" "}
                              airline
                            </p>
                          </li>
                        </ul>
                        <h3>
                          {
                            flight.itineraries[1].segments[0].departure.airport
                              .city
                          }{" "}
                          {flight.itineraries[1].segments[0].departure.iataCode}{" "}
                          -
                          {
                            flight.itineraries[1].segments[
                              flight.itineraries[1].segments.length - 1
                            ].arrival.airport.city
                          }{" "}
                          {
                            flight.itineraries[1].segments[
                              flight.itineraries[1].segments.length - 1
                            ].arrival.iataCode
                          }
                          <span>|</span>{" "}
                          {getFormattedDate(
                            flight?.itineraries[1].segments[0].departure.at
                          )}{" "}
                          | {extractDuration(flight?.itineraries[0].duration)}
                        </h3>
                      </div>
                      {flight?.itineraries[1].segments.map((segment, index) => {
                        console.log(segment, "segment"); // Check the segment structure

                        return (
                          <>
                            <ul key={index}>
                              {/* <li>
                            <img
                              src="/Content/images/AirlinesLogo/AI.png"
                              width={90}
                              alt="Air India"
                              title="Air India"
                            />
                          </li> */}
                              <ul className="con-main">
                                <li>
                                  <p>
                                    {segment.departure?.airport?.name ||
                                      "Unknown Airport"}
                                    . {segment.departure?.iataCode || "N/A"}
                                  </p>
                                  <span>
                                    {" "}
                                    Mon |{" "}
                                    {getTimeFromDate(
                                      segment.departure?.at
                                    )} |{" "}
                                    {getFormattedDate(segment.departure?.at)}
                                  </span>
                                </li>
                                <li>
                                  <p>
                                    {" "}
                                    {segment.arrival?.airport?.name ||
                                      "Unknown Airport"}
                                    . {segment.arrival?.iataCode || "N/A"}
                                  </p>
                                  <span>
                                    {" "}
                                    Mon | {getTimeFromDate(
                                      segment.arrival?.at
                                    )}{" "}
                                    | {getFormattedDate(segment.arrival?.at)}
                                  </span>
                                </li>
                                <li>
                                  <p>
                                    {" "}
                                    <strong>Coach </strong>
                                  </p>
                                  <span>
                                    {" "}
                                    {extractDuration(segment.duration) ||
                                      "Duration unknown"}
                                  </span>
                                  {/* <p className="bag-info">
                          <i>1 PC</i>
                        </p> */}
                                </li>
                              </ul>
                              {/* <li>
                              <p>
                                {segment.departure?.airport?.name ||
                                  "Unknown Airport"}
                                . {segment.departure?.iataCode || "N/A"}
                              </p>
                              <span>
                                Mon | {getTimeFromDate(segment.departure?.at)} |{" "}
                                {getFormattedDate(segment.departure?.at)}
                              </span>
                            </li> */}
                              {/* <li>
                              <p>
                                {segment.arrival?.airport?.name ||
                                  "Unknown Airport"}
                                . {segment.arrival?.iataCode || "N/A"}
                              </p>
                              <span>
                                Mon | {getTimeFromDate(segment.arrival?.at)} |{" "}
                                {getFormattedDate(segment.arrival?.at)}
                              </span>
                            </li> */}
                              {/* <li>
                              <p>
                                <strong>Coach</strong>
                              </p>
                              <span>
                                {extractDuration(segment.duration) ||
                                  "Duration unknown"}
                              </span>
                              <p className="bag-info">
                              <i
                                className="fa fa-suitcase"
                                aria-hidden="true"
                              />
                              <i>2 PC</i>
                            </p>
                            </li> */}
                            </ul>
                            {flight?.itineraries[0].segments.length > 1 &&
                              segment !=
                                flight?.itineraries[1].segments[
                                  flight?.itineraries[1].segments.length - 1
                                ] && (
                                <div className="changefligth">
                                  <p>
                                    {" "}
                                    {segment.arrival.airport
                                      ? segment.arrival.airport.name
                                      : ""}
                                    ,
                                    {segment.arrival.airport
                                      ? segment.arrival.airport.city
                                      : ""}{" "}
                                    |
                                    {
                                      calculateLayoverTime(flight)[0]
                                        ?.itineraries.layover_time
                                    }{" "}
                                    Layover
                                  </p>
                                  <b></b>
                                </div>
                              )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* End collspan */}
                <div className="msnos">
                  <b>Secret Deal!</b>{" "}
                  <span
                    id="supersave-learnmore"
                    onclick="return showHideSSSaverPopup('1', 'show')"
                  >
                    <b>learn more</b>
                  </span>
                  <div
                    id="ObssPopup_1"
                    className="stopHover1"
                    style={{ display: "none" }}
                  >
                    <span
                      id="supersave-learnmore-close"
                      onclick="return showHideSSSaverPopup('1', 'hide')"
                    >
                      x
                    </span>
                    <div style={{ top: 7, left: 5, display: "block" }}>
                      <span>Secret Deal </span>
                      <ul className="supersvr-content">
                        <li className="moli">
                          Complete flight details once the booking is complete
                        </li>
                        <li className="moli">
                          Only trusted European and US airlines are booked
                        </li>
                        <li className="moli">
                          Call us within 4 hours for unsuitable flights and a
                          refund
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n     .CamelT {\n        text-transform: capitalize;\n    }\n",
                  }}
                />
              </div>

              {/* Price Details */}
              <div
                className="buttons"
                onClick={() => {
                  setpassengerDetailToggle(true);
                  setflightDetailToggle(false);
                  setNextStepToggle(true);
                  setLastStepToggle(false);
                }}
              >
                <a href="javascript:;" id="tabTI_">
                  Proceed to the next step
                </a>
              </div>
              {/* End Price Details */}
            </div>
            {/* End Trip Details */}
            {/* Passengers Details */}

            <div
              id="passengers-details"
              className={passengerDetailToggle ? "active" : ""}
            >
              <div className="fdetail-hdr">
                <h3>Traveler Details</h3>
              </div>
              {/* Traveler Details */}

              <div className="traveler-details">
                {travelerInfo.length > 0 && (
                  <>
                    {/* Section for Adults */}
                    {travelerInfo
                      .filter((traveler) => traveler.travelerType === "Adult")
                      .map((adult, index) => (
                        <>
                          <div className="info-deading">
                            <h3>Adult {index + 1}</h3>
                          </div>
                          <ul>
                            <li>
                              <label>Title*</label>
                              <select
                                name="title"
                                value={adult.title}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(adult.id, e)
                                }
                              >
                                <option value="">Select</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Miss">Miss</option>
                              </select>
                            </li>
                            <li>
                              <label>First Name*</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxfirstname"
                                name="firstName"
                                value={adult.firstName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(adult.id, e)
                                }
                                placeholder="First Name"
                                maxLength={16}
                                type="text"
                              />
                            </li>
                            <li>
                              <label>Middle Name</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxmiddlename"
                                autoComplete="nope"
                                name="middleName"
                                value={adult.middleName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(adult.id, e)
                                }
                                placeholder="Middle Name"
                                maxLength={16}
                                type="text"
                              />
                            </li>
                            <li>
                              <label>Last Name*</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxlastname"
                                autoComplete="nope"
                                name="lastName"
                                value={adult.lastName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(adult.id, e)
                                }
                                placeholder="Last Name"
                                maxLength={16}
                                type="text"
                              />
                              <select
                                name="NationalityAdult1"
                                className="Nationality"
                                style={{
                                  border: "0 !important",
                                  display: "none",
                                }}
                              >
                                <option value="US" selected="selected">
                                  United States
                                </option>
                                <option value="UK">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BQ">
                                  Bionare,Sint Eustatius and Saba
                                </option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                  British Indian Ocean Territory
                                </option>
                                <option value="VG">
                                  British Virgin Islands
                                </option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="KH">Cambodia</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CO">Colombia</option>
                                <option value="CG">Congo</option>
                                <option value="CR">Costa Rica</option>
                                <option value="HR">Croatia</option>
                                <option value="CW">Curacao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="EE">Estonia</option>
                                <option value="FK">Falkland Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GR">Greece</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                  Heard and McDonald Islands
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">
                                  Lao Peoples Democratic Republic
                                </option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macau</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">
                                  Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">
                                  Palestinian Territory, Occupied
                                </option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn island</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="MK">
                                  Republic of Macedonia
                                </option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russia</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthelemy</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">
                                  Sao Tome and Principe
                                </option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SX">Sint Maarten</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                  South Georgia and Sandwich Islands
                                </option>
                                <option value="KR">South Korea</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="KN">
                                  St. Christopher (St. Kitts) Nevis
                                </option>
                                <option value="SH">St. Helena</option>
                                <option value="LC">St. Lucia</option>
                                <option value="PM">
                                  St. Pierre and Miquelon
                                </option>
                                <option value="VC">
                                  St. Vincent and The Grenadines
                                </option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TK">Tokelau</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TR">Turkey</option>
                                <option value="TC">
                                  Turks and Caicos Islands
                                </option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="UM">
                                  United States Minor Outlying Islands
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="VI">US Virgin Islands</option>
                                <option value="VA">Vatican City</option>
                                <option value="VN">Vietnam</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                            </li>
                            <li>
                              <label>Gender*</label>
                              <select
                                name="gender"
                                value={adult.gender}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(adult.id, e)
                                }
                              >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </li>
                          </ul>
                          <ul className="dbs">
                            <li>
                              <label>Date of Birth*</label>
                            </li>
                          </ul>
                          <ul className="date-field">
                            <li className="input DatePickerField-fieldsAdult1">
                              <select
                                name="month"
                                value={adult.dob.month}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(adult.id, e)
                                }
                                id="DOBMAdult1"
                              >
                                <option value="">Month</option>
                                <option value={1}>January</option>
                                <option value={2}>February</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>October</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                              </select>
                            </li>
                            <li className="input">
                              <select
                                id="DOBDAdult1"
                                name="day"
                                value={adult.dob.day}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(adult.id, e)
                                }
                              >
                                {/* <option value="" selected="selected">
                        Day
                      </option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                      <option value={5}>05</option>
                      <option value={6}>06</option>
                      <option value={7}>07</option>
                      <option value={8}>08</option>
                      <option value={9}>09</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option> */}
                                <option value="">Day</option>
                                {Array.from(
                                  { length: 31 },
                                  (_, i) => i + 1
                                ).map((day) => (
                                  <option key={day} value={day}>
                                    {day < 10 ? `0${day}` : day}
                                  </option>
                                ))}
                              </select>
                            </li>
                            <li className="input">
                              <select
                                id="DOBYAdult1"
                                name="year"
                                value={adult.dob.year}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(adult.id, e)
                                }
                              >
                                <option value="">Year</option>
                                {Array.from(
                                  { length: 100 },
                                  (_, i) => 2024 - i
                                ).map((year) => (
                                  <option key={year} value={year}>
                                    {year}
                                  </option>
                                ))}
                              </select>
                            </li>
                          </ul>

                          <div
                            className="Alert AdultDOBMsg "
                            style={{ display: "none" }}
                          >
                            <div className="Alert-content">
                              <i
                                className="fa fa-info-circle"
                                aria-hidden="true"
                                style={{ marginTop: 5 }}
                              />
                              <div className="Alert-message">
                                <span
                                  className=""
                                  data-tkey="booking.passenger.name_details.alert"
                                >
                                  Age of Adult(Traveler #1), on departure date,
                                  should be greater than or equal to 18yrs. Are
                                  you booking a flight for an unaccompanied
                                  minor? Certain airlines have restrictions on
                                  children under 18 years old traveling alone
                                  without an adult. Our expert travel agents can
                                  help -{" "}
                                  <a
                                    className="call-phone-number"
                                    href="tel:1-833-914-2482"
                                  >
                                    1-833-914-2482
                                  </a>
                                  .
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    <div className="note">
                      <p>
                        <strong>Note:</strong> Use first name &amp; last name,
                        date of birth as per the passport/ travel document since
                        it’s a mandatory requirement for ticket issuance.
                      </p>
                    </div>

                    {travelerInfo
                      .filter((traveler) => traveler.travelerType === "Child")
                      .map((child, index) => (
                        <>
                          <div className="info-deading">
                            <h3>Child {index + 1}</h3>
                          </div>
                          <ul>
                            <li>
                              <label>Title*</label>
                              <select
                                name="title"
                                value={child.title}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(child.id, e)
                                }
                              >
                                <option value="">Select</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Miss">Miss</option>
                              </select>
                            </li>
                            <li>
                              <label>First Name*</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxfirstname"
                                name="firstName"
                                value={child.firstName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(child.id, e)
                                }
                                placeholder="First Name"
                                maxLength={16}
                                type="text"
                              />
                            </li>
                            <li>
                              <label>Middle Name</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxmiddlename"
                                autoComplete="nope"
                                name="middleName"
                                value={child.middleName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(child.id, e)
                                }
                                placeholder="Middle Name"
                                maxLength={16}
                                type="text"
                              />
                            </li>
                            <li>
                              <label>Last Name*</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxlastname"
                                autoComplete="nope"
                                name="lastName"
                                value={child.lastName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(child.id, e)
                                }
                                placeholder="Last Name"
                                maxLength={16}
                                type="text"
                              />
                              <select
                                name="NationalityAdult1"
                                className="Nationality"
                                style={{
                                  border: "0 !important",
                                  display: "none",
                                }}
                              >
                                <option value="US" selected="selected">
                                  United States
                                </option>
                                <option value="UK">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BQ">
                                  Bionare,Sint Eustatius and Saba
                                </option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                  British Indian Ocean Territory
                                </option>
                                <option value="VG">
                                  British Virgin Islands
                                </option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="KH">Cambodia</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CO">Colombia</option>
                                <option value="CG">Congo</option>
                                <option value="CR">Costa Rica</option>
                                <option value="HR">Croatia</option>
                                <option value="CW">Curacao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="EE">Estonia</option>
                                <option value="FK">Falkland Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GR">Greece</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                  Heard and McDonald Islands
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">
                                  Lao Peoples Democratic Republic
                                </option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macau</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">
                                  Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">
                                  Palestinian Territory, Occupied
                                </option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn island</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="MK">
                                  Republic of Macedonia
                                </option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russia</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthelemy</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">
                                  Sao Tome and Principe
                                </option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SX">Sint Maarten</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                  South Georgia and Sandwich Islands
                                </option>
                                <option value="KR">South Korea</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="KN">
                                  St. Christopher (St. Kitts) Nevis
                                </option>
                                <option value="SH">St. Helena</option>
                                <option value="LC">St. Lucia</option>
                                <option value="PM">
                                  St. Pierre and Miquelon
                                </option>
                                <option value="VC">
                                  St. Vincent and The Grenadines
                                </option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TK">Tokelau</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TR">Turkey</option>
                                <option value="TC">
                                  Turks and Caicos Islands
                                </option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="UM">
                                  United States Minor Outlying Islands
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="VI">US Virgin Islands</option>
                                <option value="VA">Vatican City</option>
                                <option value="VN">Vietnam</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                            </li>
                            <li>
                              <label>Gender*</label>
                              <select
                                name="gender"
                                value={child.gender}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(child.id, e)
                                }
                              >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </li>
                          </ul>
                          <ul className="dbs">
                            <li>
                              <label>Date of Birth*</label>
                            </li>
                          </ul>
                          <ul className="date-field">
                            <li className="input DatePickerField-fieldsAdult1">
                              <select
                                name="month"
                                value={child.dob.month}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(child.id, e)
                                }
                                id="DOBMAdult1"
                              >
                                <option value="">Month</option>
                                <option value={1}>January</option>
                                <option value={2}>February</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>October</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                              </select>
                            </li>
                            <li className="input">
                              <select
                                id="DOBDAdult1"
                                name="day"
                                value={child.dob.day}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(child.id, e)
                                }
                              >
                                <option value="">Day</option>
                                {Array.from(
                                  { length: 31 },
                                  (_, i) => i + 1
                                ).map((day) => (
                                  <option key={day} value={day}>
                                    {day < 10 ? `0${day}` : day}
                                  </option>
                                ))}
                              </select>
                            </li>
                            <li className="input">
                              <select
                                id="DOBYAdult1"
                                name="year"
                                value={child.dob.year}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(child.id, e)
                                }
                              >
                                <option value="">Year</option>
                                {Array.from(
                                  { length: 100 },
                                  (_, i) => 2024 - i
                                ).map((year) => (
                                  <option key={year} value={year}>
                                    {year}
                                  </option>
                                ))}
                              </select>
                            </li>
                          </ul>

                          {/* <div className="note ">
                            <p>
                              <strong>Note:</strong> Use first name &amp; last
                              name, date of birth as per the passport/ travel
                              document since it’s a mandatory requirement for
                              ticket issuance.
                            </p>
                          </div> */}

                          <div
                            className="Alert AdultDOBMsg "
                            style={{ display: "none" }}
                          >
                            <div className="Alert-content">
                              <i
                                className="fa fa-info-circle"
                                aria-hidden="true"
                                style={{ marginTop: 5 }}
                              />
                              <div className="Alert-message">
                                <span
                                  className=""
                                  data-tkey="booking.passenger.name_details.alert"
                                >
                                  Age of Adult(Traveler #1), on departure date,
                                  should be greater than or equal to 18yrs. Are
                                  you booking a flight for an unaccompanied
                                  minor? Certain airlines have restrictions on
                                  children under 18 years old traveling alone
                                  without an adult. Our expert travel agents can
                                  help -{" "}
                                  <a
                                    className="call-phone-number"
                                    href="tel:1-833-914-2482"
                                  >
                                    1-833-914-2482
                                  </a>
                                  .
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}

                    {travelerInfo
                      .filter((traveler) => traveler.travelerType === "Infant")
                      .map((infant, index) => (
                        <>
                          <div className="info-deading">
                            <h3>Infant {index + 1}</h3>
                          </div>
                          <ul>
                            <li>
                              <label>Title*</label>
                              <select
                                name="title"
                                value={infant.title}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(infant.id, e)
                                }
                              >
                                <option value="">Select</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Miss">Miss</option>
                              </select>
                            </li>
                            <li>
                              <label>First Name*</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxfirstname"
                                name="firstName"
                                value={infant.firstName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(infant.id, e)
                                }
                                placeholder="First Name"
                                maxLength={16}
                                type="text"
                              />
                            </li>
                            <li>
                              <label>Middle Name</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxmiddlename"
                                autoComplete="nope"
                                name="middleName"
                                value={infant.middleName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(infant.id, e)
                                }
                                placeholder="Middle Name"
                                maxLength={16}
                                type="text"
                              />
                            </li>
                            <li>
                              <label>Last Name*</label>
                              <input
                                className="spField-input-raw hack-lastpass-search paxlastname"
                                autoComplete="nope"
                                name="lastName"
                                value={infant.lastName}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(infant.id, e)
                                }
                                placeholder="Last Name"
                                maxLength={16}
                                type="text"
                              />
                              <select
                                name="NationalityAdult1"
                                className="Nationality"
                                style={{
                                  border: "0 !important",
                                  display: "none",
                                }}
                              >
                                <option value="US" selected="selected">
                                  United States
                                </option>
                                <option value="UK">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BQ">
                                  Bionare,Sint Eustatius and Saba
                                </option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                  British Indian Ocean Territory
                                </option>
                                <option value="VG">
                                  British Virgin Islands
                                </option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="KH">Cambodia</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CO">Colombia</option>
                                <option value="CG">Congo</option>
                                <option value="CR">Costa Rica</option>
                                <option value="HR">Croatia</option>
                                <option value="CW">Curacao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="EE">Estonia</option>
                                <option value="FK">Falkland Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GR">Greece</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                  Heard and McDonald Islands
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">
                                  Lao Peoples Democratic Republic
                                </option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macau</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">
                                  Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">
                                  Palestinian Territory, Occupied
                                </option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn island</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="MK">
                                  Republic of Macedonia
                                </option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russia</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthelemy</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">
                                  Sao Tome and Principe
                                </option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SX">Sint Maarten</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                  South Georgia and Sandwich Islands
                                </option>
                                <option value="KR">South Korea</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="KN">
                                  St. Christopher (St. Kitts) Nevis
                                </option>
                                <option value="SH">St. Helena</option>
                                <option value="LC">St. Lucia</option>
                                <option value="PM">
                                  St. Pierre and Miquelon
                                </option>
                                <option value="VC">
                                  St. Vincent and The Grenadines
                                </option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TK">Tokelau</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TR">Turkey</option>
                                <option value="TC">
                                  Turks and Caicos Islands
                                </option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="UM">
                                  United States Minor Outlying Islands
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="VI">US Virgin Islands</option>
                                <option value="VA">Vatican City</option>
                                <option value="VN">Vietnam</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                            </li>
                            <li>
                              <label>Gender*</label>
                              <select
                                name="gender"
                                value={infant.gender}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(infant.id, e)
                                }
                              >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </li>
                          </ul>
                          <ul className="dbs">
                            <li>
                              <label>Date of Birth*</label>
                            </li>
                          </ul>
                          <ul className="date-field">
                            <li className="input DatePickerField-fieldsAdult1">
                              <select
                                name="month"
                                value={infant.dob.month}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(infant.id, e)
                                }
                                id="DOBMAdult1"
                              >
                                <option value="">Month</option>
                                <option value={1}>January</option>
                                <option value={2}>February</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>October</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                              </select>
                            </li>
                            <li className="input">
                              <select
                                id="DOBDAdult1"
                                name="day"
                                value={infant.dob.day}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(infant.id, e)
                                }
                              >
                                {/* <option value="" selected="selected">
                        Day
                      </option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                      <option value={5}>05</option>
                      <option value={6}>06</option>
                      <option value={7}>07</option>
                      <option value={8}>08</option>
                      <option value={9}>09</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option> */}
                                <option value="">Day</option>
                                {Array.from(
                                  { length: 31 },
                                  (_, i) => i + 1
                                ).map((day) => (
                                  <option key={day} value={day}>
                                    {day < 10 ? `0${day}` : day}
                                  </option>
                                ))}
                              </select>
                            </li>
                            <li className="input">
                              <select
                                id="DOBYAdult1"
                                name="year"
                                value={infant.dob.year}
                                onChange={(e) =>
                                  handleInputChangeTravellersInfo(infant.id, e)
                                }
                              >
                                <option value="">Year</option>
                                {Array.from(
                                  { length: 100 },
                                  (_, i) => 2024 - i
                                ).map((year) => (
                                  <option key={year} value={year}>
                                    {year}
                                  </option>
                                ))}
                              </select>
                            </li>
                          </ul>

                          {/* <div className="note ">
                            <p>
                              <strong>Note:</strong> Use first name &amp; last
                              name, date of birth as per the passport/ travel
                              document since it’s a mandatory requirement for
                              ticket issuance.
                            </p>
                          </div> */}

                          <div
                            className="Alert AdultDOBMsg "
                            style={{ display: "none" }}
                          >
                            <div className="Alert-content">
                              <i
                                className="fa fa-info-circle"
                                aria-hidden="true"
                                style={{ marginTop: 5 }}
                              />
                              <div className="Alert-message">
                                <span
                                  className=""
                                  data-tkey="booking.passenger.name_details.alert"
                                >
                                  Age of Adult(Traveler #1), on departure date,
                                  should be greater than or equal to 18yrs. Are
                                  you booking a flight for an unaccompanied
                                  minor? Certain airlines have restrictions on
                                  children under 18 years old traveling alone
                                  without an adult. Our expert travel agents can
                                  help -{" "}
                                  <a
                                    className="call-phone-number"
                                    href="tel:1-833-914-2482"
                                  >
                                    1-833-914-2482
                                  </a>
                                  .
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}

                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n        .AdultDOBMsg {\n            color: #fe0000;\n            background: #ffffb7;\n            padding: 10px 1% 12px;\n            border: 1px solid #fe0000;\n            line-height: 22px;\n        }\n    ",
                      }}
                    />
                    <div className="Warning_info">
                      <span
                        id="pax-duplicate-warning"
                        style={{ display: "none" }}
                      >
                        <i
                          className="fa fa-exclamation-triangle"
                          aria-hidden="true"
                        />{" "}
                        Duplicate Pax Details Found!
                      </span>
                    </div>
                  </>
                )}

                <div className="contact-info">
                  <h3>Contact Info</h3>
                  <ul className="full">
                    <li>
                      <label>Phone Number *</label>
                      <input
                        pattern="\d*"
                        name="mobilePhone"
                        id="txtContactPhone"
                        className="onlyNumber"
                        onkeypress="return isNumberKey(event);"
                        title="Please enter 10-digit number"
                        type="tel"
                        placeholder="Phone Number*"
                        oncopy="return false"
                        onpaste="return false"
                        oncut="return false"
                        maxLength={11}
                        minLength={10}
                        value={contactInfo.mobilePhone} // Bind to state
                        onChange={handleInputChangeContactInfo}
                      />
                    </li>
                    <li>
                      <label>Email Address *</label>
                      <input
                        name="email"
                        id="txtContactEmail"
                        className=""
                        maxLength={100}
                        autoComplete="nope"
                        type="email"
                        placeholder="Email Address*"
                        oncopy="return false"
                        onpaste="return false"
                        oncut="return false"
                        value={contactInfo.email} // Bind to state
                        onChange={handleInputChangeContactInfo} // Updated function name
                      />
                      <input
                        name="txtVerifyEmail"
                        style={{ display: "none" }}
                        id="txtVerifyEmail"
                        className="form-control"
                        maxLength={100}
                        autoComplete="nope"
                        type="email"
                        placeholder="Retype Email"
                        oncopy="return false"
                        onpaste="return false"
                        oncut="return false"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="buttons"
                id="tabPI_"
                onClick={() => {
                  setLastStepToggle(true);
                  setpassengerDetailToggle(false);
                  setflightDetailToggle(false);
                  setNextStepToggle(false);
                }}
              >
                <a>Proceed to the last step</a>
              </div>

              {/* End Passengers Details */}
              {/* Payment Details */}
            </div>
            <div
              id="payment-details"
              className={lastStepToggle ? "active" : ""}
            >
              <div className="fdetail-hdr payment-icon">
                <h3>
                  Payment Info <small>(Secure SSL Encrypted Transaction)</small>
                </h3>
              </div>
              <div className="payment-info">
                <ul>
                  <li>
                    <div
                      className="currency-exchange filter_holidays"
                      onClick={() => {
                        setCurrencyToggle((prev) => !prev);
                      }}
                    >
                      <a
                        href="JavaScript:void(0)"
                        id="selectCurrency2"
                        className="acc_filter"
                        data-toggle="collapse"
                        data-target="#currency-list2"
                      >
                        <i>
                          <img
                            src={`/Content/images/${cardDetails.currency}.jpg`} // Dynamically change the image based on selected currency
                            alt="currency logo"
                          />
                        </i>
                        {cardDetails.currency}{" "}
                        {/* Display the selected currency */}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                      <ul
                        id="currency-list2"
                        className="collapse"
                        style={{ display: currencyToggle ? "block" : "none" }}
                      >
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onClick={() => {
                              updateCurrency("USD");
                            }}
                          >
                            <img src="/Content/images/USD.jpg" alt="logo" /> USD{" "}
                            <img
                              src="/Content/images/dlr.png"
                              alt="logo"
                              style={{ width: 15 }}
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="JavaScript:void(0)"
                            onClick={() => {
                              updateCurrency("CAD");
                              //setCurrencyToggle((prev) => !prev);
                            }}
                          >
                            <img src="/Content/images/CAD.jpg" alt="logo" /> CAD{" "}
                            <img
                              src="/Content/images/cdlr.png"
                              alt="logo"
                              style={{ width: 15 }}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <select
                      name="selectCardType"
                      id="selectCardType"
                      className="chosen-select "
                      ref={paymentRef}
                      onChange={handleInputChange}
                    >
                      <option selected="selected" value="">
                        Select
                      </option>
                      <option value="amex">Amex</option>
                      <option value="discover">Discover</option>
                      <option value="dinersclub">DinersClub</option>
                      <option value="mastercard">MasterCard</option>
                      <option value="visa">Visa</option>
                    </select>
                  </li>
                </ul>
                <ul>
                  <li className="booking-card-type">
                    <input
                      type="radio"
                      name="CardTypeCCDC"
                      id="rdoCardTypeCC"
                      value="CC"
                      //ref={cardRef}
                      onChange={handleInputChangeCardType}
                      checked={cardDetails.cardType === "CC"}
                    />
                    <label htmlFor="rdoCardTypeCC">
                      Credit Card &nbsp;&nbsp;
                    </label>
                    <input
                      type="radio"
                      name="CardTypeCCDC"
                      id="rdoCardTypeDC"
                      value="DC"
                      //ref={cardRef}
                      onChange={handleInputChangeCardType}
                      checked={cardDetails.cardType === "DC"}
                    />
                    <label htmlFor="rdoCardTypeDC">Debit Card</label>
                  </li>
                </ul>
                <ul>
                  <li>
                    <input
                      name="txtCreditCardNo"
                      autoComplete="nope"
                      // onkeypress="return isNumberKey(event)"
                      onkeydown="return GetRemoveCreditCardType()"
                      onblur="return  GetCreditCardType()"
                      id="txtCreditCardNo"
                      type="text"
                      ref={cardnoRef}
                      onChange={handleInputChange}
                      placeholder="Credit/Debit Card Number"
                      maxLength={16}
                    />
                    <div className="">
                      <span id="spanCardLogo" className="card-logo-unknown" />
                      <input
                        type="hidden"
                        id="hdnCardType"
                        name="hdnCardType"
                      />
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <input
                      name="txtCardHolderName"
                      id="txtCardHolderName"
                      onkeypress="return isCharKey(event)"
                      maxLength={100}
                      autoComplete="nope"
                      type="text"
                      className=""
                      placeholder="Card Holder's Name"
                      ref={cardholdernameRef}
                      onChange={handleInputChange}
                    />
                  </li>
                </ul>
                <ul>
                  <li className="exp-date exp-dares">
                    <span className="exp-month">
                      <select
                        className="chosen-select"
                        name="txtExpirationMonth"
                        id="txtExpirationMonth"
                        ref={expmonthRef}
                        value={cardDetails.expiry.month}
                        onChange={handleInputChange}
                      >
                        <option selected="selected" value="Select">
                          Month
                        </option>
                        <option value={1}>01 - January</option>
                        <option value={2}>02 - February</option>
                        <option value={3}>03 - March</option>
                        <option value={4}>04 - April</option>
                        <option value={5}>05 - May</option>
                        <option value={6}>06 - June</option>
                        <option value={7}>07 - July</option>
                        <option value={8}>08 - August</option>
                        <option value={9}>09 - September</option>
                        <option value={10}>10 - October</option>
                        <option value={11}>11 - November</option>
                        <option value={12}>12 - December</option>
                      </select>
                    </span>
                    <span className="exp-year">
                      <select
                        className="chosen-select "
                        name="txtExpirationYear"
                        id="txtExpirationYear"
                        ref={expyearRef}
                        value={cardDetails.expiry.year}
                        onChange={handleInputChange}
                      >
                        <option selected="selected" value="Select">
                          Year
                        </option>
                        <option value={2024}>2024</option>
                        <option value={2025}>2025</option>
                        <option value={2026}>2026</option>
                        <option value={2027}>2027</option>
                        <option value={2028}>2028</option>
                        <option value={2029}>2029</option>
                        <option value={2030}>2030</option>
                        <option value={2031}>2031</option>
                        <option value={2032}>2032</option>
                        <option value={2033}>2033</option>
                        <option value={2034}>2034</option>
                        <option value={2035}>2035</option>
                        <option value={2036}>2036</option>
                        <option value={2037}>2037</option>
                        <option value={2038}>2038</option>
                      </select>
                    </span>
                    <span>
                      <input
                        name="txtCardCCV"
                        onkeypress="return isNumberKey(event)"
                        maxLength={4}
                        type="password"
                        className=""
                        autoComplete="nope"
                        aria-invalid="false"
                        placeholder="CVV"
                        ref={cvvRef}
                        value={cardDetails.expiry.cvv}
                        onChange={handleInputChange}
                      />
                      <img
                        src="/Content/images/cart-icon.png"
                        style={{ marginRight: "-12px" }}
                      />
                    </span>
                  </li>
                </ul>

                <div className="contact-info">
                  <h3>Contact Info</h3>
                  <ul>
                    <li style={{ display: "none" }}>
                      <select
                        className="chosen-select form-control valid"
                        name="txtBillingTitle"
                        id="txtBillingTitle"
                      >
                        <option value="Mr" selected="">
                          Mr.
                        </option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Miss">Miss</option>
                      </select>
                    </li>
                    <li>
                      <input
                        name="payeeName"
                        id="txtName"
                        maxLength={50}
                        autoComplete="nope"
                        type="text"
                        className="form-control"
                        onkeypress="return OnlyCharacterKey(event)"
                        placeholder="Enter Name"
                        value={contactInfo.payeeName} // Bind to state
                        onChange={handleInputChangeContactInfo} // Updated function name
                      />
                    </li>
                  </ul>
                  <ul className="full">
                    <li>
                      <textarea
                        name="txtAddress"
                        maxLength={100}
                        autoComplete="nope"
                        className=""
                        rows={1}
                        placeholder="Address Line 1*"
                        defaultValue={""}
                        ref={addressRef}
                        onChange={handleInputChangeBillingInfo}
                      />
                    </li>
                    <li>
                      <input
                        name="txtAddress2"
                        maxLength={250}
                        autoComplete="nope"
                        type="text"
                        className=""
                        placeholder="Address Line 2"
                        ref={address2Ref}
                        onChange={handleInputChangeBillingInfo}
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <select
                        disabled={!selectedState}
                        ref={cityRef}
                        onChange={handleInputChangeBillingInfo}
                        name="txtCity"
                        maxLength={250}
                        autoComplete="nope"
                        type="text"
                        className=""
                        placeholder="City*"
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.isoCode} value={city.isoCode}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </li>

                    <li>
                      <select
                        name="ddlCountry"
                        id="ddlBillCountry"
                        className="Nationality"
                        data-val="true"
                        data-val-required="The Country field is required."
                        onChange={handleCountryChange}
                        //onChange={handleInputChange}
                        // ref={countryRef}
                        value={selectedCountry}
                      >
                        <option value="">Select Country</option>
                        {Country.getAllCountries().map((country) => (
                          <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <select
                        name="txtStateUS"
                        id="txtStateUS"
                        className=""
                        disabled={!selectedCountry}
                        // ref={stateRef}
                        onChange={handleStateChange}
                        // onChange={handleInputChange}
                        value={selectedState}
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                      <input
                        name="txtState"
                        id="txtState"
                        maxLength={80}
                        style={{ display: "none" }}
                        autoComplete="nope"
                        onkeypress="return OnlyCharacterKey(event)"
                        type="text"
                        className=""
                        placeholder="State"
                      />
                    </li>
                    <li>
                      <input
                        name="txtPinCode"
                        className=""
                        type="text"
                        placeholder="ZIP Code"
                        // onkeypress="return OnlyCharNumberKey(event)"
                        ref={postalCodeRef}
                        onChange={handleInputChangeBillingInfo}
                        maxLength={10}
                        autoComplete="nope"
                      />
                    </li>
                  </ul>
                  <ul>
                    <li className="copyhiper">
                      <a
                        href="javascript:void(0)"
                        onclick="CopyContactToBilling()"
                      >
                        <u>Same as Contact Info</u>
                      </a>
                    </li>
                    <li />
                  </ul>
                  <ul>
                    <li>
                      <input
                        pattern="\d*"
                        name="payeePhone"
                        id="txtPhone"
                        className="onlyNumber"
                        //onkeypress="return isNumberKey(event);"
                        title="Please enter 10-digit number"
                        type="tel"
                        placeholder="Phone Number*"
                        maxLength={11}
                        minLength={10}
                        value={contactInfo.payeePhone} // Bind to state
                        onChange={handleInputChangeContactInfo} // Updated function name
                      />
                      <input
                        pattern="\d*"
                        style={{ display: "none" }}
                        name="txtAlternatePhone"
                        className="onlyNumber"
                        onkeypress="return isNumberKey(event);"
                        title="Please enter 10-digit number"
                        type="tel"
                        placeholder="Alternate Phone Number"
                        maxLength={11}
                        minLength={10}
                      />
                    </li>
                    <li>
                      <input
                        name="retypeEmail"
                        id="txtEmail"
                        className=""
                        maxLength={100}
                        autoComplete="nope"
                        type="email"
                        placeholder="Email Address*"
                        value={contactInfo.retypeEmail} // Bind to state
                        onChange={handleInputChangeContactInfo}
                      />
                    </li>
                  </ul>
                </div>
                {/* Fare Changed */}
                <div
                  className="popup-layout flight-popup"
                  id="fare-change-popup"
                  style={{ display: "none" }}
                >
                  <div className="popup-contents fare-change">
                    <img src="/Content/images/fare-change-popup.png" />
                    <h1>FARE CHANGED</h1>
                    <p className="if">
                      <small>
                        Initial Fare:{" "}
                        <b className="booking-old-fare-amt">$0.00</b>
                      </small>
                    </p>
                    <p>
                      New Fare: <b className="booking-new-fare-amt">$664.90</b>
                    </p>
                    <div className="noresult-numbr">
                      <button
                        type="button"
                        onclick="CloseFareChangeBookingPopup()"
                      >
                        Book Now
                      </button>
                    </div>
                    <div className="divdr" style={{ margin: "12px 0" }}>
                      <span>or</span>
                    </div>
                    <div className="noresult-numbr">
                      <a href="/air/listing/2691d254-9457-4033-a5d0-65d59e281aec">
                        SEARCH NEW FLIGHT
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Fare Changed */}
                <div className="polices-reviiew">
                  <h2>Flight Terms &amp; Conditions</h2>
                  <p>
                    Fares displayed include all{" "}
                    <a target="_blank" href="/taxes-and-fee">
                      taxes and fees
                    </a>{" "}
                    and{" "}
                    <a
                      href="javascript:void(0)"
                      onclick="openpopupwindow('/service-fees')"
                    >
                      our service fees
                    </a>
                    . Tickets booked are non-transferable. Fares are not
                    guaranteed until ticketed. Our service fees are
                    non-refundable. Additional charges as per the airline{" "}
                    <a target="_blank" href="/baggage-policy">
                      baggage policy
                    </a>{" "}
                    and government or airline fees may apply with the{" "}
                    <a href="/post-ticketing-fees" target="_blank">
                      post-ticketing fees
                    </a>
                    .{" "}
                  </p>
                  <p>
                    All fares are quoted in{" "}
                    <span id="spnPolicyCurrency">USD</span>. Some airlines may
                    charge you for checked baggage, read the{" "}
                    <a target="_blank" href="/baggage-policy">
                      baggage policy
                    </a>{" "}
                    for more details. Your credit/debit card may be billed for
                    the full amount in one or more charges.{" "}
                  </p>
                  <hr />
                  <p>
                    By clicking on Book Now, you agree and accept the
                    above-mentioned policies and confirm that you have checked
                    our{" "}
                    <a href="/terms-and-conditions" target="_blank">
                      Terms of Booking
                    </a>{" "}
                    &amp;{" "}
                    <a href="/privacy-policy" target="_blank">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                <div className="buttons">
                  <input
                    name="hdnIsPriceChange"
                    type="hidden"
                    id="hdnIsPriceChange"
                    defaultValue="N"
                  />
                  <input
                    name="hdnTest"
                    type="hidden"
                    id="hdnTest"
                    defaultValue={0}
                  />
                  <input
                    name="hdnAmount"
                    type="hidden"
                    id="hdnAmount"
                    defaultValue="664.90"
                  />
                  <input
                    name="hdnAmountCalc"
                    type="hidden"
                    id="hdnAmountCalc"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    name="TotalFare"
                    id="hdnAmountFinal"
                    defaultValue="664.90"
                  />
                  <input type="hidden" id="hdnOldPrice" defaultValue={0} />
                  <button type="submit" className="g-orange" id="btnSubmit">
                    Book Now
                  </button>
                </div>
              </div>
              {/* End Payment Details */}
            </div>
          </div>
        </section>
        {/* End Confirmation */}
        <style>{`
          .modifysearch {
            background: none;
            padding: 0px;
          }
          .listing-right.paymentright {
            padding-top: 15px;
          }
          .modify-hide li a {
            background: #ea4517;
            top: -14px;
            right: 10px;
          }
          .booking-card-type {
            display: flex;
            align-items: center;
            font-size: 13px;
            padding-left: 6px;
            margin: 19px 0px;
          }
          .payment-info ul li.booking-card-type input {
            width: auto;
            text-align: left;
          }
          .payment-info ul li.booking-card-type label {
            width: auto;
          }
        `}</style>
      </form>
      <Copyright />
    </>
  );
};
export default BookingMobile;
