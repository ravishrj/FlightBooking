
"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";


const SearchFlightCard=({ flight, setFlightDetailVisible, setSelectedFlight, oneWay })=>{
    console.log(flight,"FlightList in SearchFlightCard");
    const [detailsToggle,setDetailsToggle]=useState(false);

    const router = useRouter();
    function calculateLayoverTime(flightOffer) {
        const itineraries = flightOffer.itineraries;
        const layovers = [];

        itineraries.forEach(itinerary => {
            const segments = itinerary.segments;
            for (let i = 0; i < segments.length - 1; i++) {
                const arrivalTime = new Date(segments[i].arrival.at);
                const departureTime = new Date(segments[i + 1].departure.at);

                const layoverDuration = (departureTime - arrivalTime) / 60000; // Duration in minutes

                layovers.push({
                    layover_duration: layoverDuration, // in minutes
                    layover: layoverDuration > 0,
                    itineraries: {
                        layover_time: `${Math.floor(layoverDuration / 60)}H ${layoverDuration % 60}M`
                    }
                });
            }
        });

        return layovers;
      }
    
        const getFormattedDate = (date) => {
          let newDate = new Date(date)
          if (!isNaN(newDate)) {
              const formattedDate = newDate.toLocaleDateString('en-GB', {
                  day: '2-digit',
                   month: 'short',
                   year: 'numeric'
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
              minutes = '0' + minutes;
          }
  
          // Add leading zero to hours if needed
          if (hours < 10) {
              hours = '0' + hours;
          }
          return `${hours}:${minutes}`;
      };
  
      function extractDuration(ptString) {
          // Define a regular expression to match hours and minutes
          const regex = /PT(\d+H)?(\d+M)?/;
  
          // Use the regex to extract hours and minutes
          const matches = ptString.match(regex);
  
          // Initialize hours and minutes
          let hours = '';
          let minutes = '';
  
          if (matches) {
              // Extract hours if present
              if (matches[1]) {
                  hours = matches[1].replace('H', '') + 'H';
              }
  
              // Extract minutes if present
              if (matches[2]) {
                  minutes = matches[2].replace('M', '') + 'M';
              }
          }
  
          // Return the formatted duration as "XH YM"
          return `${hours} ${minutes || '00M'}`.trim();
      }




    return  <div className="listingbox-main" id="dvAirListing">
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    
    {flight && <div
      className={ detailsToggle ? "listingbox   booking-item-flight-details listingHolderMain active":"listingbox   booking-item-flight-details listingHolderMain"}
      id="listing_box_1"
      data-resultitemid="1S_27"
    >
      <div className="leftright">
        {/* left */}
        <div className="list-left">
          <div className="top-logo">
            <div>
              <img
                src="/Content/images/AirlinesLogo/AI.png"
                alt="Air India"
                title="Air India"
                width={90}
              />
            </div>
            <div>
              {/* <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3> */}
              <h3>
            {flight.itineraries[0].segments[0].airline.name} <span>Flight ({flight.itineraries[0].segments[0].airline.code}{flight.itineraries[0].segments[0].number} )</span>
            </h3>

            </div>
          </div>


          {/* {flight.itineraries[0].segments.map(segment => {
        
         return <ul>
         <li>
           <p>
             <strong>
             {getTimeFromDate(segment.departure.at)} | <span className="">{segment.departure.iataCode}</span>
             </strong>{" "}
           
             <span className="SB ">{getFormattedDate(segment.departure.at)}</span>
           </p>
         </li>
         <li>
           <div className="dvdr">
             <p>{extractDuration(segment.duration)}</p>
             <hr />
             <p> 1 stop</p>
             <span
               className="info"
               onmouseover="return showHideOutBoundStopPopup('1','show')"
               onmouseout="return showHideOutBoundStopPopup('1', 'hide')"
             >
               <span></span>
             </span>
             <div
               className="stop-info"
               id="OutBoundStopPopup_1"
               style={{ display: "none" }}
             >
               <p>
                 <strong>1 Stop</strong>
               </p>
               <p>BOM - Mumbai - India</p>
             </div>
           </div>
           -+
         </li>
         <li>
           <p>
             <strong>
            
               {getTimeFromDate(segment.arrival.at)} | <span className="">{segment.arrival.iataCode}</span>
             </strong>{" "}
             <span className="SB">{getFormattedDate(segment.arrival.at)}</span>
           </p>
         </li>
         <li>
           <i className="fa fa-suitcase" aria-hidden="true" />{" "}
           <span className="baggage">Baggage Included</span>
         </li>
       </ul>

           })} */}
            
            <ul>
  <li>
  <p>
             <strong>
             {getTimeFromDate(flight.itineraries[0].segments[0].departure.at)} | <span className="">{flight.itineraries[0].segments[0].departure.iataCode}</span>
             </strong>{" "}
           
             <span className="SB ">{getFormattedDate(flight.itineraries[0].segments[0].departure.at)}</span>
           </p>
  </li>
  <li>
    <div className="dvdr">
    <p>{extractDuration(flight.itineraries[0].duration)}</p>
             <hr />
             <p> {flight.itineraries[0].segments.length-1}</p>
      <span
        className="info"
        onmouseover="return showHideOutBoundStopPopup('1','show')"
        onmouseout="return showHideOutBoundStopPopup('1', 'hide')"
      >
        <span></span>
      </span>
      <div
        className="stop-info"
        id="OutBoundStopPopup_1"
        style={{ display: "none" }}
      >
        <p>
          <strong>1 Stop</strong>
        </p>
        <p>BOM - Mumbai - India</p>
      </div>
    </div>
  </li>
  <li>
  <p>
             <strong>
            
               {getTimeFromDate(flight.itineraries[0].segments[flight.itineraries[0].segments.length-1].arrival.at)} | <span className="">{flight.itineraries[0].segments[flight.itineraries[0].segments.length-1].arrival.iataCode}</span>
             </strong>{" "}
             <span className="SB">{getFormattedDate(flight.itineraries[0].segments[flight.itineraries[0].segments.length-1].arrival.at)}</span>
           </p>
  </li>
  <li>
    <i className="fa fa-suitcase" aria-hidden="true" />{" "}
    <span className="baggage">Baggage Included</span>
  </li>
            </ul>


            <ul>
  <li>
  <p>
             <strong>
             {getTimeFromDate(flight.itineraries[1].segments[0].departure.at)} | <span className="">{flight.itineraries[1].segments[0].departure.iataCode}</span>
             </strong>{" "}
           
             <span className="SB ">{getFormattedDate(flight.itineraries[1].segments[0].departure.at)}</span>
           </p>
  </li>
  <li>
    <div className="dvdr">
    <p>{extractDuration(flight.itineraries[1].duration)}</p>
             <hr />
             <p> {flight.itineraries[1].segments.length-1}</p>
      <span
        className="info"
        onmouseover="return showHideOutBoundStopPopup('1','show')"
        onmouseout="return showHideOutBoundStopPopup('1', 'hide')"
      >
        <span></span>
      </span>
      <div
        className="stop-info"
        id="OutBoundStopPopup_1"
        style={{ display: "none" }}
      >
        <p>
          <strong>1 Stop</strong>
        </p>
        <p>BOM - Mumbai - India</p>
      </div>
    </div>
  </li>
  <li>
  <p>
             <strong>
            
               {getTimeFromDate(flight.itineraries[1].segments[flight.itineraries[1].segments.length-1].arrival.at)} | <span className="">{flight.itineraries[1].segments[flight.itineraries[1].segments.length-1].arrival.iataCode}</span>
             </strong>{" "}
             <span className="SB">{getFormattedDate(flight.itineraries[1].segments[flight.itineraries[1].segments.length-1].arrival.at)}</span>
           </p>
  </li>
  <li>
    <i className="fa fa-suitcase" aria-hidden="true" />{" "}
    <span className="baggage">Baggage Included</span>
  </li>
            </ul>

        
          <div className="showondeal">
            <span className="CamelT">
              Flight 9484 Operated by air india express
            </span>
          </div>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
          <h2>
             ${flight.travelerPricings[0].price.total} <span>Price Per Person (Incl fee)</span>
             </h2>

            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_1"
              onclick="BookNow('listing_box_1','btn_1')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}78
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
        onClick={()=>{
          setDetailsToggle(prev=> !prev);
        }}
      >
        <h3>
          <a href="javascript:void(0);">Complete Flight Details</a>
          <span id="hidden_RUH_ClassName" style={{ color: "#a80000" }}>
            SB
          </span>
        </h3>
      </div>
      {/* End bottom dropdown*/}
      <div className="rwesui" style={{ display: "none" }}>
        <span className="conntecting-airport-chng changedUp">
          You have an airport change. Please verify details
        </span>
      </div>
      {/* Flight Details */}
      <div className="flight-details" style={{ display: detailsToggle ? "block" : "none" }}>

        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
          
             {flight.itineraries[0].segments[0].departure.airport.city}{" "}
              {flight.itineraries[0].segments[0].departure.iataCode} -
               {flight.itineraries[0].segments[(flight.itineraries[0].segments.length)-1].arrival.airport.city}{" "}
              {flight.itineraries[0].segments[(flight.itineraries[0].segments.length)-1].arrival.iataCode}
                
              <span>|</span>  {getFormattedDate(flight.itineraries[0].segments[0].departure.at)} | {extractDuration(flight.itineraries[0].duration)}

           </h3>
           {flight.itineraries[0].segments.map((segment, index) => {
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
      {/* <li>
        <p>{segment.airline?.name || "Unknown Airline"}</p>
        
        <span>{segment.airline?.code || "N/A"} {segment.aircraft || "Unknown"}</span>
        <span className="CamelT">Operated by air india express</span>
      </li> */}
  
      <li>
        <p>
          {segment.departure?.airport?.name || "Unknown Airport"}. {segment.departure?.iataCode || "N/A"}
        </p>
        <span>Mon | {getTimeFromDate(segment.departure?.at)} | {getFormattedDate(segment.departure?.at)}</span>
      </li>
      <li>
        <p>
          {segment.arrival?.airport?.name || "Unknown Airport"}. {segment.arrival?.iataCode || "N/A"}
        </p>
        <span>Mon | {getTimeFromDate(segment.arrival?.at)} | {getFormattedDate(segment.arrival?.at)}</span>
      </li>
      <li>
        <p><strong>Coach</strong></p>
        <span>{extractDuration(segment.duration) || "Duration unknown"}</span>
        <p className="bag-info">
          <i className="fa fa-suitcase" aria-hidden="true" />
          <i>2 PC</i>
        </p>
      </li>
     </ul>
       {flight.itineraries[0].segments.length > 1 &&  segment!=flight.itineraries[0].segments[flight.itineraries[0].segments.length-1] && <div className="changefligth">
              <p>  {segment.arrival.airport ? segment.arrival.airport.name : ""},
                 {segment.arrival.airport ? segment.arrival.airport.city : ""} | 
                {calculateLayoverTime(flight)[0].itineraries.layover_time} Layover
            </p>
                  <b></b>
                  </div>}
    </>
           );
           })}
          </div>
        </div> 
        <div className="depart-flight return-flight">
          <div className="box-left">
            <img src="/Content/images/return-icon-red.png" />
            <h3>Return</h3>
          </div>
          <div className="box-right">
            <h3>
              Delhi (DEL) - New York (JFK) <span>|</span> Mon, Nov 18 |
              20h 15m
            </h3>
            <ul>
              <li>
                <img
                  src="/Content/images/AirlinesLogo/AI.png"
                  width={90}
                  alt="Air India"
                  title="Air India"
                />
              </li>
              <li>
                <p>Air India</p>
                <span>AI 9484</span>
                <span className="CamelT">
                  Operated by air india express{" "}
                </span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 09:10 PM | Nov 18</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Mon | 11:35 PM | Nov 18</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 25m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 2h 10m Layover</p>
              <b></b>
            </div>
            <ul>
              <li>
                <img
                  src="/Content/images/AirlinesLogo/AI.png"
                  width={90}
                  alt="Air India"
                  title="Air India"
                />
              </li>
              <li>
                <p>Air India</p>
                <span>AI 119</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Tue | 01:45 AM | Nov 19</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Tue | 06:55 AM | Nov 19</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>15h 40m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Flight Details */}
    </div>}

    
   
    {/*==== end box ====*/}
    {/* <div className="listingbutton pagination-container">
      <div id="dvAirListing" className="col-xs-12 "></div>
      <div className="" id="dvPageNumber">
        <div className="pagination-container">
          <ul className="pagination">
            <li className="PagedList-skipToNext">
              <a href="/FlightListing/ShowNextPage?Page_No=2" rel="next">
                show more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    {/* load more button */}
    {/* End load more button */}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n.LcT {text-transform: lowercase;}\n.UcT {text-transform: uppercase;font: bold;}\n.CamelT {text-transform: capitalize;\n    }\n"
      }}
    />
  </div>

}
export default SearchFlightCard;