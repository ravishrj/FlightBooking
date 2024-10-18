const SearchFlightCard=({flightDetails})=>{
    console.log(flightDetails,"FlightList in SearchFlightCard");
    return  <div className="listingbox-main" id="dvAirListing">
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
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
              <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>21h 5m</p>
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
            </li>
            <li>
              <p>
                <strong>
                  06:30 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
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
                  09:10 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 15m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('1','show')"
                  onmouseout="return showHideInBoundStopPopup('1', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_1"
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
                  06:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
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
              $1028<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
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
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              21h 5m
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
                <span>AI 116</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Fri | 11:55 AM | Oct 25</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 11:55 AM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 4h 5m Layover</p>
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
                <span>AI 687</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 04:00 PM | Oct 26</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 06:30 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
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
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_50"
      data-resultitemid="1S_28"
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
              <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 0m</p>
                <hr />
                <p> 1 stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('50','show')"
                  onmouseout="return showHideOutBoundStopPopup('50', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="OutBoundStopPopup_50"
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
                  05:25 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
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
                  09:10 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 15m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('50','show')"
                  onmouseout="return showHideInBoundStopPopup('50', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_50"
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
                  06:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
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
              $1028<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_50"
              onclick="BookNow('listing_box_50','btn_50')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              20h 0m
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
                <span>AI 116</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Fri | 11:55 AM | Oct 25</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 11:55 AM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 3h 15m Layover</p>
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
                <span>AI 442</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 03:10 PM | Oct 26</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 05:25 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 15m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
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
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_2"
      data-resultitemid="1S_29"
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
              <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 0m</p>
                <hr />
                <p> 1 stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('2','show')"
                  onmouseout="return showHideOutBoundStopPopup('2', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="OutBoundStopPopup_2"
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
                  05:25 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
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
                  09:30 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>19h 55m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('2','show')"
                  onmouseout="return showHideInBoundStopPopup('2', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_2"
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
                  06:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Baggage Included</span>
            </li>
          </ul>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
            <h2>
              $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_2"
              onclick="BookNow('listing_box_2','btn_2')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              20h 0m
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
                <span>AI 116</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Fri | 11:55 AM | Oct 25</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 11:55 AM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 3h 15m Layover</p>
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
                <span>AI 442</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 03:10 PM | Oct 26</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 05:25 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 15m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
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
              19h 55m
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
                <span>AI 2981</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 09:30 PM | Nov 18</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Mon | 11:40 PM | Nov 18</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 10m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 2h 5m Layover</p>
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
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_15"
      data-resultitemid="1S_30"
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
              <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 0m</p>
                <hr />
                <p> 1 stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('15','show')"
                  onmouseout="return showHideOutBoundStopPopup('15', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="OutBoundStopPopup_15"
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
                  05:25 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
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
                  10:00 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>19h 25m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('15','show')"
                  onmouseout="return showHideInBoundStopPopup('15', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_15"
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
                  06:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Baggage Included</span>
            </li>
          </ul>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
            <h2>
              $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_15"
              onclick="BookNow('listing_box_15','btn_15')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              20h 0m
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
                <span>AI 116</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Fri | 11:55 AM | Oct 25</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 11:55 AM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 3h 15m Layover</p>
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
                <span>AI 442</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 03:10 PM | Oct 26</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 05:25 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 15m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
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
              19h 25m
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
                <span>AI 2999</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 10:00 PM | Nov 18</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Tue | 12:15 AM | Nov 19</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 15m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 1h 30m Layover</p>
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
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_21"
      data-resultitemid="1S_31"
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
              <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 0m</p>
                <hr />
                <p> 1 stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('21','show')"
                  onmouseout="return showHideOutBoundStopPopup('21', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="OutBoundStopPopup_21"
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
                  05:25 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
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
                  09:20 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 5m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('21','show')"
                  onmouseout="return showHideInBoundStopPopup('21', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_21"
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
                  06:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Baggage Included</span>
            </li>
          </ul>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
            <h2>
              $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_21"
              onclick="BookNow('listing_box_21','btn_21')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              20h 0m
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
                <span>AI 116</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Fri | 11:55 AM | Oct 25</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 11:55 AM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 3h 15m Layover</p>
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
                <span>AI 442</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 03:10 PM | Oct 26</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 05:25 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 15m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
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
              20h 5m
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
                <span>AI 605</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 09:20 PM | Nov 18</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Mon | 11:45 PM | Nov 18</span>
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
              <p>Mumbai (BOM) | 2h 0m Layover</p>
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
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_26"
      data-resultitemid="1S_32"
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
              <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>21h 5m</p>
                <hr />
                <p> 1 stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('26','show')"
                  onmouseout="return showHideOutBoundStopPopup('26', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="OutBoundStopPopup_26"
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
                  06:30 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
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
                  09:30 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>19h 55m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('26','show')"
                  onmouseout="return showHideInBoundStopPopup('26', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_26"
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
                  06:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Baggage Included</span>
            </li>
          </ul>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
            <h2>
              $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_26"
              onclick="BookNow('listing_box_26','btn_26')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              21h 5m
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
                <span>AI 116</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Fri | 11:55 AM | Oct 25</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 11:55 AM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 4h 5m Layover</p>
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
                <span>AI 687</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 04:00 PM | Oct 26</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 06:30 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
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
              19h 55m
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
                <span>AI 2981</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 09:30 PM | Nov 18</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Mon | 11:40 PM | Nov 18</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 10m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 2h 5m Layover</p>
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
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_24"
      data-resultitemid="1S_33"
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
              <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>21h 5m</p>
                <hr />
                <p> 1 stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('24','show')"
                  onmouseout="return showHideOutBoundStopPopup('24', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="OutBoundStopPopup_24"
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
                  06:30 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
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
                  10:00 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>19h 25m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('24','show')"
                  onmouseout="return showHideInBoundStopPopup('24', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_24"
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
                  06:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Baggage Included</span>
            </li>
          </ul>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
            <h2>
              $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_24"
              onclick="BookNow('listing_box_24','btn_24')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              21h 5m
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
                <span>AI 116</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Fri | 11:55 AM | Oct 25</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 11:55 AM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 4h 5m Layover</p>
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
                <span>AI 687</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 04:00 PM | Oct 26</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 06:30 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
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
              19h 25m
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
                <span>AI 2999</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 10:00 PM | Nov 18</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Tue | 12:15 AM | Nov 19</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 15m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 1h 30m Layover</p>
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
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_31"
      data-resultitemid="1S_34"
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
              <h3>
                Air India <span>Flight ( AI 116 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 0m</p>
                <hr />
                <p> 1 stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('31','show')"
                  onmouseout="return showHideOutBoundStopPopup('31', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="OutBoundStopPopup_31"
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
                  05:25 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
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
                  08:35 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>20h 50m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('31','show')"
                  onmouseout="return showHideInBoundStopPopup('31', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_31"
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
                  06:55 AM | <span className="">JFK</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Baggage Included</span>
            </li>
          </ul>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
            <h2>
              $1053<sup>.35</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_31"
              onclick="BookNow('listing_box_31','btn_31')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              20h 0m
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
                <span>AI 116</span>
              </li>
              <li>
                <p>John F Kennedy Intl. (JFK)</p>
                <span>Fri | 11:55 AM | Oct 25</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 11:55 AM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 3h 15m Layover</p>
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
                <span>AI 442</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Sat | 03:10 PM | Oct 26</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 05:25 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 15m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
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
              20h 50m
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
                <span>AI 2957</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 08:35 PM | Nov 18</span>
              </li>
              <li>
                <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                <span>Mon | 11:05 PM | Nov 18</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>2h 30m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>2 PC</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Mumbai (BOM) | 2h 40m Layover</p>
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
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_4"
      data-resultitemid="1S_0"
    >
      <div className="leftright">
        {/* left */}
        <div className="list-left">
          <div className="top-logo">
            <div>
              <img
                src="/Content/images/AirlinesLogo/UA.png"
                alt="United Airlines"
                title="United Airlines"
                width={90}
              />
            </div>
            <div>
              <h3>
                United Airlines <span>Flight ( UA 82 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  09:20 PM | <span className="">EWR</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>14h 40m</p>
                <hr />
                <p> Non-Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('4','show')"
                  onmouseout="return showHideOutBoundStopPopup('4', 'hide')"
                ></span>
              </div>
            </li>
            <li>
              <p>
                <strong>
                  09:30 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Hand Baggage Only</span>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                <strong>
                  11:55 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>17h 0m</p>
                <hr />
                <p> Non-Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('4','show')"
                  onmouseout="return showHideInBoundStopPopup('4', 'hide')"
                ></span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_4"
                  style={{ display: "none" }}
                >
                  <p>
                    <strong>0 Stop</strong>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <p>
                <strong>
                  06:25 AM | <span className="">EWR</span>
                </strong>{" "}
                <span className="SB">Tue, Nov 19</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Hand Baggage Only</span>
            </li>
          </ul>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
            <span>1 seat(s) left</span>
            <h2>
              $1125<sup>.55</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_4"
              onclick="BookNow('listing_box_4','btn_4')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (EWR) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              14h 40m
            </h3>
            <ul>
              <li>
                <img
                  src="/Content/images/AirlinesLogo/UA.png"
                  width={90}
                  alt="United Airlines"
                  title="United Airlines"
                />
              </li>
              <li>
                <p>United Airlines</p>
                <span>UA 82</span>
              </li>
              <li>
                <p>Newark Liberty Intl. (EWR)</p>
                <span>Fri | 09:20 PM | Oct 25</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 09:30 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 40m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>Hand Baggage only</i>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="depart-flight return-flight">
          <div className="box-left">
            <img src="/Content/images/return-icon-red.png" />
            <h3>Return</h3>
          </div>
          <div className="box-right">
            <h3>
              Delhi (DEL) - New York (EWR) <span>|</span> Mon, Nov 18 |
              17h 0m
            </h3>
            <ul>
              <li>
                <img
                  src="/Content/images/AirlinesLogo/UA.png"
                  width={90}
                  alt="United Airlines"
                  title="United Airlines"
                />
              </li>
              <li>
                <p>United Airlines</p>
                <span>UA 83</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 11:55 PM | Nov 18</span>
              </li>
              <li>
                <p>Newark Liberty Intl. (EWR)</p>
                <span>Tue | 06:25 AM | Nov 19</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>17h 0m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>Hand Baggage only</i>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Flight Details */}
    </div>
    {/*==== end box ====*/}
    {/*======= listing box =======*/}
    {/*==== box ====*/}
    <div
      className="listingbox   booking-item-flight-details listingHolderMain"
      id="listing_box_22"
      data-resultitemid="1S_1"
    >
      <div className="leftright">
        {/* left */}
        <div className="list-left">
          <div className="top-logo">
            <div>
              <img
                src="/Content/images/AirlinesLogo/UA.png"
                alt="United Airlines"
                title="United Airlines"
                width={90}
              />
            </div>
            <div>
              <h3>
                United Airlines <span>Flight ( UA 82 )</span>
              </h3>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>
                  09:20 PM | <span className="">EWR</span>
                </strong>{" "}
                <span className="SB ">Fri, Oct 25</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>14h 40m</p>
                <hr />
                <p> Non-Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideOutBoundStopPopup('22','show')"
                  onmouseout="return showHideOutBoundStopPopup('22', 'hide')"
                ></span>
              </div>
            </li>
            <li>
              <p>
                <strong>
                  09:30 PM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB">Sat, Oct 26</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Hand Baggage Only</span>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                <strong>
                  12:15 AM | <span className="">DEL</span>
                </strong>{" "}
                <span className="SB ">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <div className="dvdr">
                <p>19h 53m</p>
                <hr />
                <p> 1 Stop</p>
                <span
                  className="info"
                  onmouseover="return showHideInBoundStopPopup('22','show')"
                  onmouseout="return showHideInBoundStopPopup('22', 'hide')"
                >
                  <span></span>
                </span>
                <div
                  className="stop-info"
                  id="InBoundStopPopup_22"
                  style={{ display: "none" }}
                >
                  <p>
                    <strong>1 Stop</strong>
                  </p>
                  <p>YUL - Montreal - Canada</p>
                </div>
              </div>
            </li>
            <li>
              <p>
                <strong>
                  09:38 AM | <span className="">EWR</span>
                </strong>{" "}
                <span className="SB">Mon, Nov 18</span>
              </p>
            </li>
            <li>
              <i className="fa fa-suitcase" aria-hidden="true" />{" "}
              <span className="baggage">Hand Baggage Only</span>
            </li>
          </ul>
          <div className="showondeal">
            <span className="CamelT">
              Flight 8043 Operated by air canada , Flight 8487 Operated by
              air canada
            </span>
          </div>
        </div>
        {/* End left */}
        {/* Right */}
        <div className="listing-right">
          <div>
            <span>1 seat(s) left</span>
            <h2>
              $1125<sup>.55</sup> <span>Price Per Person (Incl fee)</span>
            </h2>
            <a
              href="javascript:void(0)"
              className="selectBtn"
              id="btn_22"
              onclick="BookNow('listing_box_22','btn_22')"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        {/* End Right */}
      </div>
      {/* bottom dropdown*/}
      <div
        className="info-drown"
        onclick="$(this).parents('.listingbox').toggleClass('active').find('.flight-details').slideToggle(); SetFocus(this)"
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
      <div className="flight-details">
        <div className="depart-flight">
          <div className="box-left">
            <img src="/Content/images/depart-icon-red.png" />
            <h3>Depart</h3>
          </div>
          <div className="box-right">
            <h3>
              New York (EWR) - Delhi (DEL) <span>|</span> Fri, Oct 25 |
              14h 40m
            </h3>
            <ul>
              <li>
                <img
                  src="/Content/images/AirlinesLogo/UA.png"
                  width={90}
                  alt="United Airlines"
                  title="United Airlines"
                />
              </li>
              <li>
                <p>United Airlines</p>
                <span>UA 82</span>
              </li>
              <li>
                <p>Newark Liberty Intl. (EWR)</p>
                <span>Fri | 09:20 PM | Oct 25</span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Sat | 09:30 PM | Oct 26</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>14h 40m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>Hand Baggage only</i>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="depart-flight return-flight">
          <div className="box-left">
            <img src="/Content/images/return-icon-red.png" />
            <h3>Return</h3>
          </div>
          <div className="box-right">
            <h3>
              Delhi (DEL) - New York (EWR) <span>|</span> Mon, Nov 18 |
              19h 53m
            </h3>
            <ul>
              <li>
                <img
                  src="/Content/images/AirlinesLogo/UA.png"
                  width={90}
                  alt="United Airlines"
                  title="United Airlines"
                />
              </li>
              <li>
                <p>United Airlines</p>
                <span>UA 8043</span>
                <span className="CamelT">Operated by air canada </span>
              </li>
              <li>
                <p>Indira Gandhi Intl. (DEL)</p>
                <span>Mon | 12:15 AM | Nov 18</span>
              </li>
              <li>
                <p>Pierre E. Trudeau Intl. (YUL)</p>
                <span>Mon | 06:10 AM | Nov 18</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>16h 25m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>Hand Baggage only</i>
                </p>
              </li>
            </ul>
            <div className="changefligth">
              <p>Montreal (YUL) | 1h 45m Layover</p>
              <b></b>
            </div>
            <ul>
              <li>
                <img
                  src="/Content/images/AirlinesLogo/UA.png"
                  width={90}
                  alt="United Airlines"
                  title="United Airlines"
                />
              </li>
              <li>
                <p>United Airlines</p>
                <span>UA 8487</span>
                <span className="CamelT">Operated by air canada </span>
              </li>
              <li>
                <p>Pierre E. Trudeau Intl. (YUL)</p>
                <span>Mon | 07:55 AM | Nov 18</span>
              </li>
              <li>
                <p>Newark Liberty Intl. (EWR)</p>
                <span>Mon | 09:38 AM | Nov 18</span>
              </li>
              <li>
                <p>
                  <strong>Coach</strong>
                </p>
                <span>1h 43m</span>
                <p className="bag-info">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                  <i>Hand Baggage only</i>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Flight Details */}
    </div>
    {/*==== end box ====*/}
    <div className="listingbutton pagination-container">
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
    </div>
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