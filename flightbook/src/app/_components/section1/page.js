"use client"
import { useState } from "react";
import FlightForm from "../flightform/page";


const Section1=({selectedAirline})=>{
  
    const [activeTab, setActiveTab] = useState('VacationTab');
  
   console.log(selectedAirline, "Selected Airline");

    return <div className="bnrSrchwgt">
    <div className="bswContent">
      <h1>{selectedAirline?selectedAirline.name:"TAILOR-MADE HOLIDAYS OF A LIFETIME"}</h1>
      <p> 100% flexible tours planned by experts to 70+ destinations</p>
    </div>

    {/* Search Widget */}
    <section className="search-widget">
      <div className="container">
        <div className="topbuttons">
         
          <a
            id="flighttablink"
            href="javascript:void(0)"
            className={activeTab === 'FlightTab' ? 'active' : ''}
            onclick={()=>{
              setActiveTab("FlightTab");
              alert("juuu");
            }
          }
          >
            <span>
              <img src="/Content/images/v2.png" />
            </span>
            flights
          </a>
        
        </div>
        <div className="widgettab">
          <FlightForm />
          <div
            className="flighttab hide"
            id="Flights"
            style={{ display: "none" }}
          />
          <div
            className="hoteltab hide"
            id="hotel-tab"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>
    </section>
    {/* End Search Widget */}
  </div>
  
}
export default Section1;