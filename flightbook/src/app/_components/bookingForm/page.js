"use client";
import { useState, useRef, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SignInComponent from "../SignIn/page";
import SignUpComponent from "../SignUp/page";

import { collection, addDoc } from "firebase/firestore";
import { fireStore, useAuth } from "../firebase/config";
import { Timestamp } from "firebase/firestore";

const BookingForm = ({ adultCount, flight, oneWay }) => {
  const paymentRef = useRef("");
  const cardRef = useRef("");
  const router = useRouter();
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
  // const [travelerInfo, setTravelerInfo] = useState({
  //   title: "", // Title (e.g., Mr., Ms., etc.)
  //   firstName: "", // First Name (e.g., Ravish)
  //   middleName: "", // Middle Name
  //   lastName: "", // Last Name
  //   gender: "", // Gender (e.g., Male, Female, etc.)
  //   dob: {
  //     // Date of Birth as an object
  //     day: "", // Day (for Date of Birth)
  //     month: "", // Month (for Date of Birth)
  //     year: "", // Year (for Date of Birth)
  //   },
  // });
  const [travelerInfo, setTravelerInfo] = useState([]);

  const currentUser = useAuth();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const hideSignIn = () => {
    setShowSignIn(false);
  };

  const hideSignUp = () => {
    setShowSignUp(false);
  };

  const showSignUpForm = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const showSignInFor = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const handleSubmit = async (travelerData) => {
    try {
      const emailContent = `
    Hello ${travelerData.travelerInfo[0].firstName} ${
        travelerData.travelerInfo[0].lastName
      },

    Thank you for booking with us. Here are your details:

    Traveler Info:
    Name: ${travelerData.travelerInfo[0].firstName} ${
        travelerData.travelerInfo[0].lastName
      }
    Email: ${travelerData.contactInfo.email || "Not Provided"}
    Date of Birth: ${travelerData.travelerInfo[0].dob.day || "Not Provided"}/${
        travelerData.travelerInfo[0].dob.month || "Not Provided"
      }/${travelerData.travelerInfo[0].dob.year || "Not Provided"}
    Gender: ${travelerData.travelerInfo[0].gender === "1" ? "Male" : "Female"}
    Phone Code: ${travelerData.contactInfo.mobilePhone || "Not Provided"}

    Billing Info:
    Address: ${travelerData.billingInfo.address || "Not Provided"}
    Country: ${travelerData.billingInfo.country || "Not Provided"}
    State: ${travelerData.billingInfo.state || "Not Provided"}
    City: ${travelerData.billingInfo.city || "Not Provided"}
    Postal Code: ${travelerData.billingInfo.postalCode || "Not Provided"}

    Card Info (for confirmation):
    Card Holder: ${travelerData.cardDetails.cardHolderName || "Not Provided"}
    Card Number: ${
      travelerData.cardDetails.cardNo
        ? "*** *** ** " + travelerData.cardDetails.cardNo.slice(-4)
        : "Not Provided"
    }
    Card Type: ${travelerData.cardDetails.cardType || "Not Provided"}
    Expiry Date: ${travelerData.cardDetails.expiry.month || "MM"}/${
        travelerData.cardDetails.expiry.year || "YY"
      } (CVV: ${travelerData.cardDetails.expiry.cvv || "Not Provided"})
    `;
      // Sending the email
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: contactInfo.email,
          subject: "Booking Confirmation and Traveler Details",
          text: emailContent,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Booking email sent successfully!");
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (error) {
      // Handle errors in case of failure
      console.error("Error sending email:", error);
      toast.error(error.message || "An unexpected error occurred!");
    }
  };

  // Function for send sms to customer mobile number

  // const handleSubmit = async (travelerData) => {
  //   try {
  //     const emailContent = `
  //       Hello ${travelerData.travelerInfo[0].firstName} ${
  //       travelerData.travelerInfo[0].lastName
  //     },

  //       Thank you for booking with us. Here are your details:

  //       Traveler Info:
  //       Name: ${travelerData.travelerInfo[0].firstName} ${
  //       travelerData.travelerInfo[0].lastName
  //     }
  //       Email: ${travelerData.contactInfo.email || "Not Provided"}
  //       Date of Birth: ${travelerData.travelerInfo[0].dobDate || "Not Provided"}
  //       Gender: ${
  //         travelerData.travelerInfo[0].gender === "1" ? "Male" : "Female"
  //       }
  //       Phone Code: ${travelerData.contactInfo.mobilePhone || "Not Provided"}

  //       Billing Info:
  //       Address: ${travelerData.billingInfo.address || "Not Provided"}
  //       Country: ${travelerData.billingInfo.country || "Not Provided"}
  //       State: ${travelerData.billingInfo.state || "Not Provided"}
  //       City: ${travelerData.billingInfo.city || "Not Provided"}
  //       Postal Code: ${travelerData.billingInfo.postalCode || "Not Provided"}

  //       Card Info (for confirmation):
  //       Card Holder: ${
  //         travelerData.cardDetails.cardHolderName || "Not Provided"
  //       }
  //       Card Number: ${
  //         travelerData.cardDetails.cardNo
  //           ? "*** *** ** " + travelerData.cardDetails.cardNo.slice(-4)
  //           : "Not Provided"
  //       }
  //       Expiry Date: ${travelerData.cardDetails.expiry.month || "MM"}/${
  //       travelerData.cardDetails.expiry.year || "YY"
  //     } (CVV: ${travelerData.cardDetails.expiry.cvv || "Not Provided"})
  //     `;

  //     // Send the email
  //     console.log("yaha tak sahi hai");
  //     const res = await fetch("/api/sendEmail", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify({
  //         to: travelerData.contactInfo.email,
  //         subject: "Booking Confirmation and Traveler Details",
  //         text: emailContent,
  //       }),
  //     });

  //     // Get the raw text response
  //     const text = await res.text();
  //     console.log("yaha galat sahi hai");
  //     // Check if response is valid JSON
  //     try {
  //       const data = JSON.parse(text);

  //       if (res.ok) {
  //         toast.success("Booking email sent successfully!");
  //       } else {
  //         toast.error(data.error || "Something went wrong!");
  //       }
  //     } catch (error) {
  //       console.error("Error parsing response:", error);
  //       toast.error("An unexpected error occurred!");
  //     }
  //   } catch (error) {
  //     // Handle errors in case of failure
  //     console.error("Error sending email:", error);
  //     toast.error(error.message || "An unexpected error occurred!");
  //   }
  // };

  const handleSMSSubmit = async (travelerData) => {
    const to = travelerData.contactDetails.Mobile;
    const message = "Message Successfully done"; // Static message

    try {
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, message }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error(
          "Failed to send message: " + (data.error || "Unknown error")
        );
      }
    } catch (error) {
      toast.error("Error sending message: " + error.message);
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    const updatedTravelers = [];

    if (adultCount.adults > 0) {
      updatedTravelers.push(
        ...Array.from({ length: adultCount.adults }, (_, index) => ({
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

    if (adultCount.child > 0) {
      updatedTravelers.push(
        ...Array.from({ length: adultCount.child }, (_, index) => ({
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

    if (adultCount.infant > 0) {
      updatedTravelers.push(
        ...Array.from({ length: adultCount.infant }, (_, index) => ({
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
  }, [adultCount]);

  const [travellersDetails, setTravellersDetails] = useState([]);
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

      const allTravelerData = {
        contactInfo,
        travelerInfo,
        cardDetails,
        billingInfo,
        flight,
        userId: currentUser?.uid,
        userEmailId: currentUser?.email,
        userDisplayName: currentUser?.displayName,
      };

      localStorage.setItem("travelerData", JSON.stringify(allTravelerData));

      //await handleSMSSubmit(newTraveler);

      // For Payment Gateway
      if (!currentUser) {
        setShowSignIn(true);
      } else {
        await handleSubmit(newTraveler);

        // Clear individual fields after adding to the array

        try {
          // Send the travelers' details to the backend API for flight reservation
          const response = await fetch("/api/charge-credit-card", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTraveler),
          });

          const result = await response.json();
          if (result.success) {
            toast.success(
              "Reservation Successful! Transaction ID: " + result.transactionId
            );

            // Store traveler data in Firebase
            // const travelerDataRef = collection(fireStore, "travelers");
            // await addDoc(travelerDataRef, {
            //   ...allTravelerData,
            //   createdAt: new Date(),
            // });
            // const jsonString = encodeURIComponent(JSON.stringify(flight));
            // const isOneWay = oneWay === "true";
            // console.log(isOneWay, "isOneWay");
            // router.push(
            //   `/thankyou?flight=${jsonString}&oneWay=${isOneWay.toString()}`
            // );
            try {
              const travelerDataRef = collection(fireStore, "travelers");
              console.log(travelerDataRef, "travelerDataRef");
              //console.log("allTravelerData", allTravelerData);
              await addDoc(travelerDataRef, {
                ...allTravelerData,
                // createdAt: new Date(),
                createdAt: Timestamp.now(), // Use Firestore's Timestamp
              });
              toast.success("Document written successfully");

              const jsonString = encodeURIComponent(JSON.stringify(flight));
              const isOneWay = oneWay === "true";
              console.log(isOneWay, "isOneWay");

              router.push(
                `/thankyou?flight=${jsonString}&oneWay=${isOneWay.toString()}`
              );
            } catch (error) {
              console.error("Errorng document: ", error);
            }
          } else {
            toast.error("Error: " + result.message);
            console.log(result.message, "error in ifelse");
          }
          addi;
        } catch (error) {
          toast.error("Error: " + error.message);
        }

        // Optionally, show a success message or redirect the user
        alert("Traveler details have been successfully added!");
      }
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
    }
  };
  useEffect(() => {
    console.log("Updated travellers details:", travellersDetails);
  }, [travellersDetails]);
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
  useEffect(() => {
    console.log("Saving card details:", cardDetails);
  }, [cardDetails]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const address2Ref = useRef("");
  const addressRef = useRef("");
  const stateRef = useRef("");
  const cityRef = useRef("");
  const postalCodeRef = useRef("");

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
  useEffect(() => {
    console.log("Saving billing details:", billingInfo);
  }, [billingInfo]);

  const handleInputChangeContactInfo = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("Saving contact info details:", contactInfo);
  }, [contactInfo]);

  // const handleInputChangeTravellersInfo = (e) => {
  //   const { name, value } = e.target;
  //   setTravelerInfo((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  // const handleDOBChange = (e) => {
  //   const { name, value } = e.target;
  //   setTravelerInfo((prevState) => ({
  //     ...prevState,
  //     dob: {
  //       ...prevState.dob,
  //       [name]: value,
  //     },
  //   }));
  // };

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

  useEffect(() => {
    console.log("Saving trveller info details:", travelerInfo);
  }, [travelerInfo]);

  return (
    <>
      {showSignIn && (
        <SignInComponent
          hideLoginPopup={hideSignIn}
          showSignUp={showSignUpForm}
        />
      )}
      {showSignUp && (
        <SignUpComponent hideSignUp={hideSignUp} showSignIn={showSignInFor} />
      )}
      <form
        id="reviewpaymentform"
        action={handleSubmitTravellersDetails}
        method="post"
        autoComplete="nope"
      >
        <input
          name="__RequestVerificationToken"
          type="hidden"
          defaultValue="K6QBjnyapBaZb8jZBoIPyxSy0DAdlH2PGvPQR529VK5SoLNCv6ZXXVHnyIcXRFxrcmBevDgXdmaEYJwOzP3XwQLU7-DohYMJciF5QoVE05w1"
        />
        {/* TRAVELER DETAILS */}
        <input
          type="hidden"
          name="FlightGuidId"
          defaultValue="e28eceb2-6c8f-4cb7-9a5c-c8c5a7c18d6f"
          id="hdnPaymentFlightGuidID"
        />
        <input
          type="hidden"
          name="BookingGuid"
          defaultValue="d921541d-214d-4333-aaa1-c1c76215c80d"
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
          defaultValue="ROUNDTRIP"
          id="hdnTypeTrip"
        />
        <input
          type="hidden"
          name="flightUniqueId"
          defaultValue="e28eceb2-6c8f-4cb7-9a5c-c8c5a7c18d6f"
          id="hdnFlightUniqueId"
        />
        {/* Traveler Details */}
        {/* <div className="fdetail-hdr">
        <h3>Traveler Details</h3>
      </div>
      <div className="traveler-details">
        <div className="info-deading">
          <h3>Adult 1</h3>
        </div>

        <ul>
          <li>
            <label>Title*</label>
            <select
              name="title"
              value={travelerInfo.title}
              onChange={handleInputChangeTravellersInfo}
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
              name="firstName"
              value={travelerInfo.firstName}
              onChange={handleInputChangeTravellersInfo}
              placeholder="First Name"
              maxLength={16}
              type="text"
            />
          </li>
          <li>
            <label>Middle Name</label>
            <input
              name="middleName"
              value={travelerInfo.middleName}
              onChange={handleInputChangeTravellersInfo}
              placeholder="Middle Name"
              maxLength={16}
              type="text"
            />
          </li>
          <li>
            <label>Last Name*</label>
            <input
              name="lastName"
              value={travelerInfo.lastName}
              onChange={handleInputChangeTravellersInfo}
              placeholder="Last Name"
              maxLength={16}
              type="text"
            />
          </li>
          <li>
            <label>Gender*</label>
            <select
              name="gender"
              value={travelerInfo.gender}
              onChange={handleInputChangeTravellersInfo}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </li>
          <li className="input date-field DatePickerField-fieldsAdult1">
            <label>Date of Birth*</label>
            <select
              name="month"
              value={travelerInfo.dob.month}
              onChange={handleInputChangeTravellersInfo}
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
          <li className="input date-field">
            <label>&nbsp;</label>
            <select
              name="day"
              value={travelerInfo.dob.day}
              onChange={handleInputChangeTravellersInfo}
            >
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day < 10 ? `0${day}` : day}
                </option>
              ))}
            </select>
          </li>
          <li className="input date-field">
            <label>&nbsp;</label>
            <select
              name="year"
              value={travelerInfo.dob.year}
              onChange={handleInputChangeTravellersInfo}
            >
              <option value="">Year</option>
              {Array.from({ length: 100 }, (_, i) => 2024 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </li>
        </ul>
        <div className="note ">
          <p>
            <strong>Note:</strong> Use first name &amp; last name, date of birth
            as per the passport/ travel document since it’s a mandatory
            requirement for ticket issuance.
          </p>
        </div>
        <div className="Alert AdultDOBMsg " style={{ display: "none" }}>
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
                Age of Adult(Traveler #1), on departure date, should be greater
                than or equal to 18yrs. Are you booking a flight for an
                unaccompanied minor? Certain airlines have restrictions on
                children under 18 years old traveling alone without an adult.
                Our expert travel agents can help -{" "}
                <a className="call-phone-number" href="javascript:void(0);">
                  1-833-914-2482
                </a>
                .
              </span>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .AdultDOBMsg {\n            color: #fe0000;\n            background: #ffffb7;\n            padding: 10px 1% 12px;\n            border: 1px solid #fe0000;\n            line-height: 22px;\n        }\n    ",
          }}
        />
      </div>
      <div className="Warning_info">
        <span id="pax-duplicate-warning" style={{ display: "none" }}>
          {" "}
          <i className="fa fa-exclamation-triangle" aria-hidden="true" />
          Duplicate Pax Details Found!
        </span>
      </div> */}

        {travelerInfo.length > 0 && (
          <>
            {/* Section for Adults */}
            {travelerInfo
              .filter((traveler) => traveler.travelerType === "Adult")
              .map((adult, index) => (
                <div key={adult.id}>
                  <div className="fdetail-hdr">
                    <h3>Traveler Details</h3>
                  </div>
                  <div className="traveler-details">
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
                          name="lastName"
                          value={adult.lastName}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(adult.id, e)
                          }
                          placeholder="Last Name"
                          maxLength={16}
                          type="text"
                        />
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
                      <li className="input date-field DatePickerField-fieldsAdult1">
                        <label>Date of Birth*</label>
                        <select
                          name="month"
                          value={adult.dob.month}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(adult.id, e)
                          }
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
                      <li className="input date-field">
                        <label>&nbsp;</label>
                        <select
                          name="day"
                          value={adult.dob.day}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(adult.id, e)
                          }
                        >
                          <option value="">Day</option>
                          {Array.from({ length: 31 }, (_, i) => i + 1).map(
                            (day) => (
                              <option key={day} value={day}>
                                {day < 10 ? `0${day}` : day}
                              </option>
                            )
                          )}
                        </select>
                      </li>
                      <li className="input date-field">
                        <label>&nbsp;</label>
                        <select
                          name="year"
                          value={adult.dob.year}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(adult.id, e)
                          }
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 100 }, (_, i) => 2024 - i).map(
                            (year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            )
                          )}
                        </select>
                      </li>
                    </ul>

                    <div className="note">
                      <p>
                        <strong>Note:</strong> Use first name &amp; last name,
                        date of birth as per the passport/ travel document since
                        it’s a mandatory requirement for ticket issuance.
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {/* Section for Children */}
            {travelerInfo
              .filter((traveler) => traveler.travelerType === "Child")
              .map((child, index) => (
                <div key={child.id}>
                  <div className="fdetail-hdr">
                    <h3>Traveler Details</h3>
                  </div>
                  <div className="traveler-details">
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
                          <option value="Master">Master</option>
                          <option value="Miss">Miss</option>
                        </select>
                      </li>
                      <li>
                        <label>First Name*</label>
                        <input
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
                          name="lastName"
                          value={child.lastName}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(child.id, e)
                          }
                          placeholder="Last Name"
                          maxLength={16}
                          type="text"
                        />
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
                      <li className="input date-field DatePickerField-fieldsChild">
                        <label>Date of Birth*</label>
                        <select
                          name="month"
                          value={child.dob.month}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(child.id, e)
                          }
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
                      <li className="input date-field">
                        <label>&nbsp;</label>
                        <select
                          name="day"
                          value={child.dob.day}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(child.id, e)
                          }
                        >
                          <option value="">Day</option>
                          {Array.from({ length: 31 }, (_, i) => i + 1).map(
                            (day) => (
                              <option key={day} value={day}>
                                {day < 10 ? `0${day}` : day}
                              </option>
                            )
                          )}
                        </select>
                      </li>
                      <li className="input date-field">
                        <label>&nbsp;</label>
                        <select
                          name="year"
                          value={child.dob.year}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(child.id, e)
                          }
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 100 }, (_, i) => 2024 - i).map(
                            (year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            )
                          )}
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}

            {/* Section for Infants */}
            {travelerInfo
              .filter((traveler) => traveler.travelerType === "Infant")
              .map((infant, index) => (
                <div key={infant.id}>
                  <div className="fdetail-hdr">
                    <h3>Traveler Details</h3>
                  </div>
                  <div className="traveler-details">
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
                          <option value="Infant">Infant</option>
                        </select>
                      </li>
                      <li>
                        <label>First Name*</label>
                        <input
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
                          name="lastName"
                          value={infant.lastName}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(infant.id, e)
                          }
                          placeholder="Last Name"
                          maxLength={16}
                          type="text"
                        />
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
                      <li className="input date-field DatePickerField-fieldsInfant">
                        <label>Date of Birth*</label>
                        <select
                          name="month"
                          value={infant.dob.month}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(infant.id, e)
                          }
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
                      <li className="input date-field">
                        <label>&nbsp;</label>
                        <select
                          name="day"
                          value={infant.dob.day}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(infant.id, e)
                          }
                        >
                          <option value="">Day</option>
                          {Array.from({ length: 31 }, (_, i) => i + 1).map(
                            (day) => (
                              <option key={day} value={day}>
                                {day < 10 ? `0${day}` : day}
                              </option>
                            )
                          )}
                        </select>
                      </li>
                      <li className="input date-field">
                        <label>&nbsp;</label>
                        <select
                          name="year"
                          value={infant.dob.year}
                          onChange={(e) =>
                            handleInputChangeTravellersInfo(infant.id, e)
                          }
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 100 }, (_, i) => 2024 - i).map(
                            (year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            )
                          )}
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
          </>
        )}

        {/* End Traveler Details */}
        {/* Payment Info */}
        <div className="fdetail-hdr payment-icon">
          <h3>
            Payment Info <small>(Secure SSL Encrypted Transaction)</small>
          </h3>
        </div>
        <div className="payment-info">
          <ul>
            <li>
              <label>Currency*</label>
            </li>
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
                  {cardDetails.currency} {/* Display the selected currency */}
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <div
                  id="currency-list2"
                  className="collapse"
                  style={{ display: currencyToggle ? "block" : "none" }}
                >
                  <p>
                    <a
                      href="JavaScript:void(0)"
                      onClick={() => {
                        updateCurrency("USD");
                      }} // Set USD as selected currency
                    >
                      <img src="/Content/images/USD.jpg" alt="USD logo" />{" "}
                      <span className="currency_bg">
                        USD{" "}
                        <img src="/Content/images/dlr.png" alt="USD symbol" />
                      </span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="JavaScript:void(0)"
                      onClick={() => {
                        updateCurrency("CAD");
                        //setCurrencyToggle((prev) => !prev);
                      }} // Set CAD as selected currency
                    >
                      <img src="/Content/images/CAD.jpg" alt="CAD logo" />{" "}
                      <span className="currency_bg">
                        CAD{" "}
                        <img src="/Content/images/cdlr.png" alt="CAD symbol" />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <ul>
            <li>
              <label>Payment Method*</label>
            </li>
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
            <li>
              <span
                id="spanCardLogo"
                style={{ display: "none" }}
                className="card-logo-unknown"
              />
              <input
                type="hidden"
                id="hdnCardType"
                name="hdnCardType"
                defaultValue="unknown"
              />
              <img src="/Content/images/card.png" />
            </li>
          </ul>
          <ul>
            <li>
              <label>Card Type*</label>
            </li>
            <li className="booking-card-type">
              <input
                type="radio"
                name="CardTypeCCDC"
                id="rdoCardTypeCC"
                //defaultChecked=""

                value="CC"
                //ref={cardRef}
                onChange={handleInputChangeCardType}
                checked={cardDetails.cardType === "CC"}
              />
              <label htmlFor="rdoCardTypeCC">Credit Card &nbsp;&nbsp;</label>
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
            <li />
          </ul>
          <ul>
            <li>
              <label>Credit/Debit Card Number*</label>
            </li>
            <li>
              <input
                name="txtCreditCardNo"
                className=""
                autoComplete="nope"
                //onkeypress="return isNumberKey(event)"
                onkeydown="return GetRemoveCreditCardType()"
                onblur="return  GetCreditCardType()"
                id="txtCreditCardNo"
                type="text"
                placeholder="Credit/Debit Card Number"
                ref={cardnoRef}
                onChange={handleInputChange}
                maxLength={16}
              />
            </li>
            <li>
              <p>(Pay with credit or debit card)</p>
            </li>
          </ul>
          <ul>
            <li>
              <label>Card holder’s Name*</label>
            </li>
            <li>
              <input
                name="txtCardHolderName"
                id="txtCardHolderName"
                // onkeypress="return isCharKey(event)"
                maxLength={100}
                autoComplete="nope"
                type="text"
                className=""
                placeholder="Card Holder's Name"
                ref={cardholdernameRef}
                onChange={handleInputChange}
              />
            </li>
            <li>
              <p>(As it appears on your card)</p>
            </li>
          </ul>
          <ul>
            <li>
              <label>Expiration Date*</label>
            </li>
            <li className="exp-date expir-date">
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
                  className="chosen-select"
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
            </li>
          </ul>
          <ul>
            <li>
              <label>Card Verification Number*</label>
            </li>
            <li className="cvv-card">
              <input
                name="txtCardCCV"
                //onkeypress="return isNumberKey(event)"
                maxLength={4}
                type="password"
                className=""
                autoComplete="nope"
                aria-invalid="false"
                ref={cvvRef}
                value={cardDetails.expiry.cvv}
                onChange={handleInputChange}
                placeholder="CVV"
                style={{ width: 50 }}
              />
              <img src="/Content/images/cvv-card.png" />{" "}
              <p id="cvvNumberInfo">(3-digit number from your card)</p>
            </li>
          </ul>
          {/* Billing and Contact Info */}
          <div className="bc-info">
            <div className="left-info">
              <h2>Billing Information</h2>
              <ul>
                <li>
                  <label>Address Line 1*</label>
                </li>
                <li>
                  <textarea
                    name="txtAddress"
                    maxLength={100}
                    autoComplete="nope"
                    className=""
                    rows={1}
                    placeholder="Address Line 1*"
                    style={{ height: 41 }}
                    defaultValue={""}
                    ref={addressRef}
                    onChange={handleInputChangeBillingInfo}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <label>Address Line 2</label>
                </li>
                <li>
                  <textarea
                    name="txtAddress2"
                    maxLength={250}
                    autoComplete="nope"
                    type="text"
                    className=""
                    ref={address2Ref}
                    onChange={handleInputChangeBillingInfo}
                    placeholder="Address Line 2"
                    style={{ height: 70 }}
                    defaultValue={""}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <label>City*</label>
                </li>
                <li>
                  {/* <input
                  name="txtCity"
                  maxLength={250}
                  autoComplete="nope"
                  type="text"
                  className=""
                  onkeypress="return OnlyCharacterKey(event)"
                  placeholder="City*"
                /> */}
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
              </ul>
              <ul>
                <li>
                  <label>Country*</label>
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
                  <label>State*</label>
                </li>
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
              </ul>
              <ul>
                <li>
                  <label>Pincode*</label>
                </li>
                <li>
                  <input
                    name="txtPinCode"
                    className=""
                    type="text"
                    placeholder="Pincode"
                    //onkeypress="return OnlyCharNumberKey(event)"
                    ref={postalCodeRef}
                    onChange={handleInputChangeBillingInfo}
                    maxLength={10}
                    autoComplete="nope"
                  />
                </li>
              </ul>
            </div>
            <div className="right-info">
              <h2>Contact Information</h2>
              <ul>
                <li>
                  <label>Payee's Name*</label>
                </li>
                <li>
                  <input
                    name="payeeName"
                    id="txtName"
                    // onKeyPress={(e) => return OnlyCharacterKey(e)}  // You can keep this validation if needed
                    maxLength={80}
                    autoComplete="nope"
                    type="text"
                    className=""
                    placeholder="Payee's Name*"
                    value={contactInfo.payeeName} // Bind to state
                    onChange={handleInputChangeContactInfo} // Updated function name
                  />
                </li>
              </ul>

              <ul>
                <li>
                  <label>Payee's Phone No.*</label>
                </li>
                <li>
                  <input
                    name="payeePhone"
                    id="txtPhone"
                    //  onKeyPress={(e) => return isNumberKey(e)}  // Number validation
                    maxLength={10}
                    autoComplete="nope"
                    type="text"
                    className="onlyNumber"
                    placeholder="Payee's Phone No.*"
                    value={contactInfo.payeePhone} // Bind to state
                    onChange={handleInputChangeContactInfo} // Updated function name
                  />
                </li>
              </ul>

              <ul>
                <li>
                  <label>Mobile Phone*</label>
                </li>
                <li>
                  <input
                    name="mobilePhone"
                    id="txtContactPhone"
                    //onKeyPress={(e) => return isNumberKey(e)}  // Number validation
                    maxLength={10}
                    autoComplete="nope"
                    type="text"
                    className="onlyNumber"
                    placeholder="Mobile Phone*"
                    value={contactInfo.mobilePhone} // Bind to state
                    onChange={handleInputChangeContactInfo} // Updated function name
                  />
                </li>
              </ul>

              <ul>
                <li>
                  <label>E-mail*</label>
                </li>
                <li>
                  <input
                    name="email"
                    id="txtEmail"
                    className=""
                    maxLength={100}
                    autoComplete="nope"
                    type="text"
                    placeholder="Email Address*"
                    value={contactInfo.email} // Bind to state
                    onChange={handleInputChangeContactInfo} // Updated function name
                  />
                </li>
              </ul>

              <ul>
                <li>
                  <label>Re-type email ID*</label>
                </li>
                <li>
                  <input
                    name="retypeEmail"
                    id="txtVerifyEmail"
                    className=""
                    maxLength={100}
                    autoComplete="nope"
                    type="text"
                    placeholder="Re-type email ID*"
                    value={contactInfo.retypeEmail} // Bind to state
                    onChange={handleInputChangeContactInfo} // Updated function name
                  />
                </li>
              </ul>

              <ul>
                <li>
                  <label>&nbsp;</label>
                </li>
              </ul>
            </div>
          </div>
          {/* End Billing and Contact Info */}
          {/* Secure SSL */}
          <div className="secure-ssl">
            <img className="ssl-img" src="/Content/images/lock-icon.png" />
            <h5>Secure SSL Booking</h5>
          </div>
          {/* End Secure SSL */}
        </div>
        {/* End Payment Info */}
        {/* Policies & Review */}
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
            . Tickets booked are non-transferable. Fares are not guaranteed
            until ticketed. Our service fees are non-refundable. Additional
            charges as per the airline{" "}
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
            All fares are quoted in <span id="spnPolicyCurrency">USD</span>.
            Some airlines may charge you for checked baggage, read the{" "}
            <a target="_blank" href="/baggage-policy">
              baggage policy
            </a>{" "}
            for more details. Your credit/debit card may be billed for the full
            amount in one or more charges.{" "}
          </p>
          <hr />
          <p>
            By clicking on Book Now, you agree and accept the above-mentioned
            policies and confirm that you have checked our{" "}
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
        {/* End Policies & Review */}
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
                Initial Fare: <b className="booking-old-fare-amt">$0.00</b>
              </small>
            </p>
            <p>
              New Fare: <b className="booking-new-fare-amt">$947.35</b>
            </p>
            <div className="noresult-numbr">
              <button type="button">BOOK NOW</button>
            </div>
            <div className="divdr" style={{ margin: "12px 0" }}>
              <span>or</span>
            </div>
            <div className="noresult-numbr">
              <a href="/air/listing/e28eceb2-6c8f-4cb7-9a5c-c8c5a7c18d6f">
                SEARCH NEW FLIGHT
              </a>
            </div>
          </div>
        </div>
        {/* End Fare Changed */}
        <div className="buttons">
          <button
            className="g-orange"
            //id="btnSubmit"
            onclick={handleSubmitTravellersDetails}
          >
            BOOK NOW
          </button>
          <input name="hdnTest" type="hidden" id="hdnTest" defaultValue={0} />
          <input
            name="hdnAmount"
            type="hidden"
            id="hdnAmount"
            defaultValue="947.35"
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
            defaultValue="947.35"
          />
          <input type="hidden" id="hdnOldPrice" defaultValue={0} />
        </div>
      </form>
    </>
  );
};
export default BookingForm;
