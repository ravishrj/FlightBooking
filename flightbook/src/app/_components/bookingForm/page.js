"use client";
import { useState, useRef, useEffect } from "react";
import { Country, State, City } from "country-state-city";

const BookingForm = () => {
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
  const [travelerInfo, setTravelerInfo] = useState({
    title: "", // Title (e.g., Mr., Ms., etc.)
    firstName: "", // First Name (e.g., Ravish)
    middleName: "", // Middle Name
    lastName: "", // Last Name
    gender: "", // Gender (e.g., Male, Female, etc.)
    dob: {
      // Date of Birth as an object
      day: "", // Day (for Date of Birth)
      month: "", // Month (for Date of Birth)
      year: "", // Year (for Date of Birth)
    },
  });

  // const [travellersDetails, setTravellersDetails] = useState({
  //   travelerInfo: {
  //     title: "", // Title (e.g., Mr., Ms., etc.)
  //     firstName: "", // First Name (e.g., Ravish)
  //     middleName: "", // Middle Name
  //     lastName: "", // Last Name
  //     gender: "", // Gender (e.g., Male, Female, etc.)
  //     dob: {
  //       day: "", // Day (for Date of Birth)
  //       month: "", // Month (for Date of Birth)
  //       year: "", // Year (for Date of Birth)
  //     },
  //   },
  //   cardDetails: {
  //     currency: "USD",
  //     payment: "",
  //     cardType: "CC",
  //     cardHolderName: "",
  //     cardNo: "",
  //     expiry: {
  //       month: "",
  //       year: "",
  //       cvv: "",
  //     },
  //   },
  //   billingInfo: {
  //     country: "",
  //     address: "",
  //     address2: "",
  //     state: "",
  //     city: "",
  //     postalCode: "",
  //   },
  //   contactInfo: {
  //     payeeName: "",
  //     payeePhone: "",
  //     mobilePhone: "",
  //     email: "",
  //     retypeEmail: "",
  //   },
  // });

  const [travellersDetails, setTravellersDetails] = useState([]);
  const validateForm = () => {
    const missingFields = [];

    // Traveler Info validation
    if (!travelerInfo.title) missingFields.push("Title");
    if (!travelerInfo.firstName) missingFields.push("First Name");
    if (!travelerInfo.lastName) missingFields.push("Last Name");
    if (!travelerInfo.gender) missingFields.push("Gender");
    if (
      !travelerInfo.dob.day ||
      !travelerInfo.dob.month ||
      !travelerInfo.dob.year
    ) {
      missingFields.push("Date of Birth");
    }

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
      alert(`Please fill the following fields: ${missingFields.join(", ")}`);
      return false;
    }

    return true;
  };

  const handleSubmitTravellersDetails = () => {
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
      console.log("travellers detail added", travellersDetails);
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

      // Optionally, show a success message or redirect the user
      alert("Traveler details have been successfully added!");
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

  const handleInputChangeTravellersInfo = (e) => {
    const { name, value } = e.target;
    setTravelerInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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

  useEffect(() => {
    console.log("Saving trveller info details:", travelerInfo);
  }, [travelerInfo]);

  return (
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
      <div className="fdetail-hdr">
        <h3>Traveler Details</h3>
      </div>
      <div className="traveler-details">
        <div className="info-deading">
          <h3>Adult 1</h3>
        </div>
        {/* <ul>
          <li>
            <label>Title*</label>
            <select
              name="TitleAdult1"
              onchange="SetGenderControl(this,'Adult','1')"
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
              autoComplete="nope"
              onkeypress="return OnlyCharacterKey(event)"
              onblur="return ValidatePaxName()"
              placeholder="First Name"
              name="FnameAdult1"
              maxLength={16}
              type="text"
            />
          </li>
          <li>
            <label>Middle Name</label>
            <input
              className="spField-input-raw hack-lastpass-search paxmiddlename"
              autoComplete="nope"
              onkeypress="return OnlyCharacterKey(event)"
              onblur="return ValidatePaxName()"
              placeholder="Middle Name"
              name="MnameAdult1"
              maxLength={16}
              type="text"
            />
          </li>
          <li>
            <label>Last Name*</label>
            <input
              className="spField-input-raw hack-lastpass-search paxlastname"
              autoComplete="nope"
              onkeypress="return OnlyCharacterKey(event)"
              onblur="return ValidatePaxName()"
              placeholder="Last Name"
              name="LnameAdult1"
              maxLength={16}
              type="text"
            />
            <select
              name="NationalityAdult1"
              className="Nationality"
              style={{ border: "0 !important", display: "none" }}
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
              <option value="BQ">Bionare,Sint Eustatius and Saba</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="VG">British Virgin Islands</option>
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
              <option value="HM">Heard and McDonald Islands</option>
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
              <option value="LA">Lao Peoples Democratic Republic</option>
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
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
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
              <option value="MK">Republic of Macedonia</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russia</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthelemy</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
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
              <option value="GS">South Georgia and Sandwich Islands</option>
              <option value="KR">South Korea</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="KN">St. Christopher (St. Kitts) Nevis</option>
              <option value="SH">St. Helena</option>
              <option value="LC">St. Lucia</option>
              <option value="PM">St. Pierre and Miquelon</option>
              <option value="VC">St. Vincent and The Grenadines</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
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
              <option value="TC">Turks and Caicos Islands</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="UM">United States Minor Outlying Islands</option>
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
              name="GenderAdult1"
              onchange="SetTitleControl(this,'Adult','1')"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </li>
          <li className="input date-field DatePickerField-fieldsAdult1">
            <label>Date of Birth*</label>
            <select
              name="DOBMAdult1"
              id="DOBMAdult1"
              onchange="return ValidatePassengerDOB('Adult',1)"
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
              name="DOBDAdult1"
              id="DOBDAdult1"
              onchange="return ValidatePassengerDOB('Adult',1)"
            >
              <option value="" selected="selected">
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
              <option value={31}>31</option>
            </select>
          </li>
          <li className="input date-field">
            <label>&nbsp;</label>
            <select
              name="DOBYAdult1"
              id="DOBYAdult1"
              onchange="return ValidatePassengerDOB('Adult',1)"
            >
              <option value="" selected="selected">
                Year
              </option>
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
              <option value={2016}>2016</option>
              <option value={2015}>2015</option>
              <option value={2014}>2014</option>
              <option value={2013}>2013</option>
              <option value={2012}>2012</option>
              <option value={2011}>2011</option>
              <option value={2010}>2010</option>
              <option value={2009}>2009</option>
              <option value={2008}>2008</option>
              <option value={2007}>2007</option>
              <option value={2006}>2006</option>
              <option value={2005}>2005</option>
              <option value={2004}>2004</option>
              <option value={2003}>2003</option>
              <option value={2002}>2002</option>
              <option value={2001}>2001</option>
              <option value={2000}>2000</option>
              <option value={1999}>1999</option>
              <option value={1998}>1998</option>
              <option value={1997}>1997</option>
              <option value={1996}>1996</option>
              <option value={1995}>1995</option>
              <option value={1994}>1994</option>
              <option value={1993}>1993</option>
              <option value={1992}>1992</option>
              <option value={1991}>1991</option>
              <option value={1990}>1990</option>
              <option value={1989}>1989</option>
              <option value={1988}>1988</option>
              <option value={1987}>1987</option>
              <option value={1986}>1986</option>
              <option value={1985}>1985</option>
              <option value={1984}>1984</option>
              <option value={1983}>1983</option>
              <option value={1982}>1982</option>
              <option value={1981}>1981</option>
              <option value={1980}>1980</option>
              <option value={1979}>1979</option>
              <option value={1978}>1978</option>
              <option value={1977}>1977</option>
              <option value={1976}>1976</option>
              <option value={1975}>1975</option>
              <option value={1974}>1974</option>
              <option value={1973}>1973</option>
              <option value={1972}>1972</option>
              <option value={1971}>1971</option>
              <option value={1970}>1970</option>
              <option value={1969}>1969</option>
              <option value={1968}>1968</option>
              <option value={1967}>1967</option>
              <option value={1966}>1966</option>
              <option value={1965}>1965</option>
              <option value={1964}>1964</option>
              <option value={1963}>1963</option>
              <option value={1962}>1962</option>
              <option value={1961}>1961</option>
              <option value={1960}>1960</option>
              <option value={1959}>1959</option>
              <option value={1958}>1958</option>
              <option value={1957}>1957</option>
              <option value={1956}>1956</option>
              <option value={1955}>1955</option>
              <option value={1954}>1954</option>
              <option value={1953}>1953</option>
              <option value={1952}>1952</option>
              <option value={1951}>1951</option>
              <option value={1950}>1950</option>
              <option value={1949}>1949</option>
              <option value={1948}>1948</option>
              <option value={1947}>1947</option>
              <option value={1946}>1946</option>
              <option value={1945}>1945</option>
              <option value={1944}>1944</option>
              <option value={1943}>1943</option>
              <option value={1942}>1942</option>
              <option value={1941}>1941</option>
              <option value={1940}>1940</option>
              <option value={1939}>1939</option>
              <option value={1938}>1938</option>
              <option value={1937}>1937</option>
              <option value={1936}>1936</option>
              <option value={1935}>1935</option>
              <option value={1934}>1934</option>
              <option value={1933}>1933</option>
              <option value={1932}>1932</option>
              <option value={1931}>1931</option>
              <option value={1930}>1930</option>
              <option value={1929}>1929</option>
              <option value={1928}>1928</option>
              <option value={1927}>1927</option>
              <option value={1926}>1926</option>
              <option value={1925}>1925</option>
              <option value={1924}>1924</option>
              <option value={1923}>1923</option>
              <option value={1922}>1922</option>
              <option value={1921}>1921</option>
              <option value={1920}>1920</option>
              <option value={1919}>1919</option>
              <option value={1918}>1918</option>
              <option value={1917}>1917</option>
              <option value={1916}>1916</option>
              <option value={1915}>1915</option>
            </select>
          </li>
        </ul> */}
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
              onChange={handleDOBChange}
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
              onChange={handleDOBChange}
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
              onChange={handleDOBChange}
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
      </div>
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
                      USD <img src="/Content/images/dlr.png" alt="USD symbol" />
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
          . Tickets booked are non-transferable. Fares are not guaranteed until
          ticketed. Our service fees are non-refundable. Additional charges as
          per the airline{" "}
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
          All fares are quoted in <span id="spnPolicyCurrency">USD</span>. Some
          airlines may charge you for checked baggage, read the{" "}
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
  );
};
export default BookingForm;
