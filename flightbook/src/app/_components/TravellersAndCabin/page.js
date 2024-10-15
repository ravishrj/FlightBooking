"use client"

import React, { useState, useRef } from 'react';

const TravelersAndCabinInput = () => {
    const [showPax, setShowPax] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infanctCount, setInfantCount] = useState(0);
    const [infantOnSeatCount, setInfantOnSeatCount] = useState(0);
    const [cabinType, setCabinType] = useState("ECONOMY");
    const paxRef = useRef();

    const handleApplyFilter = () => {
        // Logic to handle the application of the selected traveler options
        setShowPax(false);
    };

    const handleCabinTypeChange = (e) => {
        setCabinType(e.target.value);
    };

    const travellerDetail = {
        adultCount,
        childrenCount,
        infanctCount,
        cabinType,
    };

    return (
        <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="input-border traveler-fees-toggle pointer">
                <label className="form-label cal-label">
                    Traveler(s), Cabin
                </label>
                <div className="relative drop-errow">
                    <img
                        className="input-icon"
                        src="/Content/images/traveller-icon.png"
                        alt="Traveler Icon"
                    />
                    <input
                        type="text"
                        id="travelerOpen"
                        name="travelerOpen"
                        value={`${travellerDetail.adultCount} Traveler${travellerDetail.adultCount > 1 ? 's' : ''}, ${travellerDetail.childrenCount ? travellerDetail.childrenCount + " Children," : ""} ${travellerDetail.infanctCount ? travellerDetail.infanctCount + " Infants," : ""} ${travellerDetail.cabinType}`}
                        onClick={() => { setShowPax((p) => !p); }}
                        readOnly
                        autoComplete="off"
                        className="hand"
                        ref={paxRef}
                    />
                </div>
            </div>

            {showPax && (
                <div id="selectpax" className="traveler-fees-slide traveller_block">
                    <a href="#" className="popup-close" onClick={() => setShowPax(false)}>
                        <img src="/Content/images/uc/cancel.svg" alt="Close" />
                    </a>
                    <label className="traveller_label">Adult(s)</label>
                    <ul className="adults">
                        {[...Array(9)].map((_, index) => (
                            <li key={index} className={adultCount === index + 1 ? "active" : ""} onClick={() => setAdultCount(index + 1)}>
                                {index + 1}
                            </li>
                        ))}
                    </ul>
                    <label className="traveller_label">Children (2-11 yrs)</label>
                    <ul className="childs">
                        {[...Array(8)].map((_, index) => (
                            <li key={index} className={childrenCount === index ? "active" : ""} onClick={() => setChildrenCount(index)}>
                                {index}
                            </li>
                        ))}
                    </ul>
                    <div className="row_2">
                        <div className="col-50">
                            <label className="traveller_label">Infant (on lap)</label>
                            <ul className="infonlap">
                                {[...Array(5)].map((_, index) => (
                                    <li key={index} className={infanctCount === index ? "active" : ""} onClick={() => setInfantCount(index)}>
                                        {index}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-50 space">
                            <label className="traveller_label">Infant (on seat)</label>
                            <ul className="infonseat">
                                {[...Array(5)].map((_, index) => (
                                    <li key={index} className={infantOnSeatCount === index ? "active" : ""} onClick={() => setInfantOnSeatCount(index)}>
                                        {index}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <label id="ermsg" className="error-txt"></label>
                    <button onClick={handleApplyFilter} className="done_button done">
                        Apply
                    </button>
                    <div className="class_block">
                        <span className="traveller_label">Cabin</span>
                        <div className="select-dropdown drop-errow">
                            <select id="CabinType" name="CabinType" value={cabinType} onChange={handleCabinTypeChange}>
                                <option value="ECONOMY">Economy</option>
                                <option value="Premium_Economy">Premium Economy</option>
                                <option value="BUSINESS">Business</option>
                                <option value="FIRST">First</option>
                            </select>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <span className="tooltip-custom minor-txt">
                        <u className="blue">Unaccompanied Minor</u>
                        <div className="promo-detail">
                            <span className="arrow"></span>
                            <p className="mb5px" style={{ textAlign: "left" }}>
                                Booking flights for an unaccompanied minor? Some airlines have restrictions on
                                children under the age of 18 years traveling alone. If you have any
                                questions, please
                                <a href="/assets/contact-us.html" target="_blank" rel="noopener noreferrer">
                                    contact us
                                </a>.
                                Otherwise please include at least 1 adult then hit "Search".
                            </p>
                        </div>
                    </span>
                </div>
            )}
        </div>
    );
};

export default TravelersAndCabinInput;
