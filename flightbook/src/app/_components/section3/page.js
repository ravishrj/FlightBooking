"use client"





const Section3=()=>{
   

    return <div id="VacationTabDealSection">
    <div className="flynow" style={{ display: "none" }}>
      <img src="/Content/images/flynowmobile.jpg" />
    </div>
    <div className="topdstions">
      <h2>Top Destination Deals</h2>
      <div className="topdlslider owl-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: "translate3d(-690px, 0px, 0px)",
              transition: "all",
              width: 2415
            }}
          >
            <div className="owl-item cloned owl-carousel" style={{ width: 345 }}>
              <div className="item dynamic-item">
                {" "}
                <div className="dstbox">
                  <div className="imgbox">
                    <img src="Content/images/m.dest2.jpg" />
                  </div>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_5" method="post">
                    <ul>
                      <li>
                        <h3>FLL - ATL</h3> <p>06 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_5"
                          onclick="return SearchFlightTopDesitnationDeals('5')"
                        >
                          $92<sup>.98*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="FLL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="ATL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_5"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/06/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_6" method="post">
                    <ul>
                      <li>
                        <h3>ATL - FLL</h3> <p>07 Nov to 21 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_6"
                          onclick="return SearchFlightTopDesitnationDeals('6')"
                        >
                          $102<sup>.96*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="ATL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="FLL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_6"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/07/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/21/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_7" method="post">
                    <ul>
                      <li>
                        <h3>MIA - ATL</h3> <p>06 Nov to 16 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_7"
                          onclick="return SearchFlightTopDesitnationDeals('7')"
                        >
                          $102<sup>.96*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Miami"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="MIA" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="ATL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_7"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/06/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/16/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_8" method="post">
                    <ul>
                      <li>
                        <h3>MCO - FLL</h3> <p>04 Nov to 14 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_8"
                          onclick="return SearchFlightTopDesitnationDeals('8')"
                        >
                          $103<sup>.21*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="MCO" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="FLL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_8"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/04/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/14/2024"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: 345 }}>
              <div className="item dynamic-item">
                {" "}
                <div className="dstbox">
                  <div className="imgbox">
                    <img src="Content/images/m.dest3.jpg" />
                  </div>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_9" method="post">
                    <ul>
                      <li>
                        <h3>FLL - MCO</h3> <p>06 Nov to 16 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_9"
                          onclick="return SearchFlightTopDesitnationDeals('9')"
                        >
                          $103<sup>.21*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="FLL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="MCO"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_9"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/06/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/16/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_10" method="post">
                    <ul>
                      <li>
                        <h3>ATL - IAH</h3> <p>11 Nov to 22 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_10"
                          onclick="return SearchFlightTopDesitnationDeals('10')"
                        >
                          $109<sup>.99*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Houston"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="ATL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="IAH"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_10"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/11/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/22/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_11" method="post">
                    <ul>
                      <li>
                        <h3>LAS - OAK</h3> <p>10 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_11"
                          onclick="return SearchFlightTopDesitnationDeals('11')"
                        >
                          $117<sup>.89*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Oakland"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="LAS" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="OAK"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_11"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/10/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_12" method="post">
                    <ul>
                      <li>
                        <h3>SNA - LAS</h3> <p>10 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_12"
                          onclick="return SearchFlightTopDesitnationDeals('12')"
                        >
                          $127<sup>.20*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Santa Ana"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="SNA" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="LAS"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_12"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/10/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: 345 }}>
              <div className="item dynamic-item">
                {" "}
                <div className="dstbox">
                  <div className="imgbox">
                    <img src="Content/images/m.dest1.jpg" />
                  </div>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_1" method="post">
                    <ul>
                      <li>
                        <h3>LAS - PHX</h3> <p>04 Nov to 14 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_1"
                          onclick="return SearchFlightTopDesitnationDeals('1')"
                        >
                          $61<sup>.18*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Phoenix"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="LAS" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="PHX"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_1"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/04/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/14/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_2" method="post">
                    <ul>
                      <li>
                        <h3>MCO - ATL</h3> <p>05 Nov to 15 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_2"
                          onclick="return SearchFlightTopDesitnationDeals('2')"
                        >
                          $67<sup>.96*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="MCO" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="ATL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_2"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/05/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/15/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_3" method="post">
                    <ul>
                      <li>
                        <h3>LAS - LAX</h3> <p>08 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_3"
                          onclick="return SearchFlightTopDesitnationDeals('3')"
                        >
                          $74<sup>.98*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Los Angeles"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="LAS" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="LAX"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_3"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/08/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_4" method="post">
                    <ul>
                      <li>
                        <h3>ONT - LAS</h3> <p>14 Nov to 28 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_4"
                          onclick="return SearchFlightTopDesitnationDeals('4')"
                        >
                          $82<sup>.95*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Ontario"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="ONT" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="LAS"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_4"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/14/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/28/2024"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 345 }}>
              <div className="item dynamic-item">
                {" "}
                <div className="dstbox">
                  <div className="imgbox">
                    <img src="Content/images/m.dest2.jpg" />
                  </div>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_5" method="post">
                    <ul>
                      <li>
                        <h3>FLL - ATL</h3> <p>06 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_5"
                          onclick="return SearchFlightTopDesitnationDeals('5')"
                        >
                          $92<sup>.98*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="FLL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="ATL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_5"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/06/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_6" method="post">
                    <ul>
                      <li>
                        <h3>ATL - FLL</h3> <p>07 Nov to 21 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_6"
                          onclick="return SearchFlightTopDesitnationDeals('6')"
                        >
                          $102<sup>.96*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="ATL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="FLL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_6"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/07/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/21/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_7" method="post">
                    <ul>
                      <li>
                        <h3>MIA - ATL</h3> <p>06 Nov to 16 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_7"
                          onclick="return SearchFlightTopDesitnationDeals('7')"
                        >
                          $102<sup>.96*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Miami"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="MIA" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="ATL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_7"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/06/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/16/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_8" method="post">
                    <ul>
                      <li>
                        <h3>MCO - FLL</h3> <p>04 Nov to 14 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_8"
                          onclick="return SearchFlightTopDesitnationDeals('8')"
                        >
                          $103<sup>.21*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="MCO" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="FLL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_8"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/04/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/14/2024"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 345 }}>
              <div className="item dynamic-item">
                {" "}
                <div className="dstbox">
                  <div className="imgbox">
                    <img src="Content/images/m.dest3.jpg" />
                  </div>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_9" method="post">
                    <ul>
                      <li>
                        <h3>FLL - MCO</h3> <p>06 Nov to 16 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_9"
                          onclick="return SearchFlightTopDesitnationDeals('9')"
                        >
                          $103<sup>.21*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="FLL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="MCO"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_9"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/06/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/16/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_10" method="post">
                    <ul>
                      <li>
                        <h3>ATL - IAH</h3> <p>11 Nov to 22 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_10"
                          onclick="return SearchFlightTopDesitnationDeals('10')"
                        >
                          $109<sup>.99*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Houston"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="ATL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="IAH"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_10"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/11/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/22/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_11" method="post">
                    <ul>
                      <li>
                        <h3>LAS - OAK</h3> <p>10 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_11"
                          onclick="return SearchFlightTopDesitnationDeals('11')"
                        >
                          $117<sup>.89*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Oakland"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="LAS" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="OAK"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_11"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/10/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_12" method="post">
                    <ul>
                      <li>
                        <h3>SNA - LAS</h3> <p>10 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_12"
                          onclick="return SearchFlightTopDesitnationDeals('12')"
                        >
                          $127<sup>.20*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Santa Ana"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="SNA" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="LAS"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_12"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/10/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: 345 }}>
              <div className="item dynamic-item">
                {" "}
                <div className="dstbox">
                  <div className="imgbox">
                    <img src="Content/images/m.dest1.jpg" />
                  </div>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_1" method="post">
                    <ul>
                      <li>
                        <h3>LAS - PHX</h3> <p>04 Nov to 14 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_1"
                          onclick="return SearchFlightTopDesitnationDeals('1')"
                        >
                          $61<sup>.18*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Phoenix"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="LAS" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="PHX"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_1"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/04/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/14/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_2" method="post">
                    <ul>
                      <li>
                        <h3>MCO - ATL</h3> <p>05 Nov to 15 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_2"
                          onclick="return SearchFlightTopDesitnationDeals('2')"
                        >
                          $67<sup>.96*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="MCO" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="ATL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_2"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/05/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/15/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_3" method="post">
                    <ul>
                      <li>
                        <h3>LAS - LAX</h3> <p>08 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_3"
                          onclick="return SearchFlightTopDesitnationDeals('3')"
                        >
                          $74<sup>.98*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Los Angeles"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="LAS" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="LAX"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_3"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/08/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_4" method="post">
                    <ul>
                      <li>
                        <h3>ONT - LAS</h3> <p>14 Nov to 28 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_4"
                          onclick="return SearchFlightTopDesitnationDeals('4')"
                        >
                          $82<sup>.95*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Ontario"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="ONT" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="LAS"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_4"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/14/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/28/2024"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: 345 }}>
              <div className="item dynamic-item">
                {" "}
                <div className="dstbox">
                  <div className="imgbox">
                    <img src="Content/images/m.dest2.jpg" />
                  </div>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_5" method="post">
                    <ul>
                      <li>
                        <h3>FLL - ATL</h3> <p>06 Nov to 20 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_5"
                          onclick="return SearchFlightTopDesitnationDeals('5')"
                        >
                          $92<sup>.98*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="FLL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="ATL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_5"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/06/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/20/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_6" method="post">
                    <ul>
                      <li>
                        <h3>ATL - FLL</h3> <p>07 Nov to 21 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_6"
                          onclick="return SearchFlightTopDesitnationDeals('6')"
                        >
                          $102<sup>.96*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="ATL" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="FLL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_6"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/07/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/21/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_7" method="post">
                    <ul>
                      <li>
                        <h3>MIA - ATL</h3> <p>06 Nov to 16 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_7"
                          onclick="return SearchFlightTopDesitnationDeals('7')"
                        >
                          $102<sup>.96*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Miami"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Atlanta"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="MIA" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="ATL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_7"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/06/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/16/2024"
                    />
                  </form>
                </div>
                <div className="dstbox">
                  <form id="frmFlightTopDesitnationDeal_8" method="post">
                    <ul>
                      <li>
                        <h3>MCO - FLL</h3> <p>04 Nov to 14 Nov </p>
                      </li>
                      <li>
                        <button
                          type="button"
                          id="btnFlightTopDesitnationDeals_8"
                          onclick="return SearchFlightTopDesitnationDeals('8')"
                        >
                          $103<sup>.21*</sup>
                        </button>
                      </li>
                    </ul>
                    <input
                      name="hvOriginCityName"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input
                      name="hvDestinationCityName"
                      type="hidden"
                      defaultValue="Fort Lauderdale"
                    />
                    <input name="OriginCode" type="hidden" defaultValue="MCO" />
                    <input
                      name="DestinationCode"
                      type="hidden"
                      defaultValue="FLL"
                    />
                    <input name="AdultPaxCount" type="hidden" defaultValue={1} />
                    <input name="ChildPaxCount" type="hidden" defaultValue={0} />
                    <input
                      name="InfantLapPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="InfantSeatPaxCount"
                      type="hidden"
                      defaultValue={0}
                    />
                    <input
                      name="FlightUniqueId"
                      type="hidden"
                      id="hdnFlightTopDesitnationFlightGuid_8"
                      defaultValue="e2962e0e-3e32-4aa4-b1aa-53cbacab3f71"
                    />
                    <input
                      name="PreferredAirline"
                      type="hidden"
                      defaultValue=""
                    />
                    <input
                      name="PreferredAirlineName"
                      defaultValue=""
                      type="hidden"
                    />
                    <input
                      type="hidden"
                      name="DepDate"
                      defaultValue="11/04/2024"
                    />
                    <input
                      type="hidden"
                      name="RetDate"
                      defaultValue="11/14/2024"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav">
          <button type="button" role="presentation" className="owl-prev">
            <span aria-label="Previous">‹</span>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div className="owl-dots">
          <button role="button" className="owl-dot active">
            <span />
          </button>
          <button role="button" className="owl-dot">
            <span />
          </button>
          <button role="button" className="owl-dot">
            <span />
          </button>
        </div>
      </div>
      <p className="disclaimer">
        * Fares on this page are updated as of Sep 29, 2024 at 9:26 AM EST. They
        are for One Way or Round Trips as mentioned alongside. These include all{" "}
        <a target="_blank" href="/taxes-and-fee">
          taxes and fees
        </a>{" "}
        and{" "}
        <a href="javascript:void(0)" onclick="openpopupwindow('/service-fees')">
          our service fees
        </a>
        . Fares based on historical data, may change without prior notice, and
        can’t be guaranteed until booking confirmation. Please read our{" "}
        <a href="/terms-and-conditions" target="_blank">
          terms &amp; conditions
        </a>{" "}
        carefully.
      </p>
    </div>
    <div className="destination-offer">
      <section id="" className="crafting">
        <h2>EXPERIENCES</h2>
        <div className="container">
          <div className="craft owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1065px, 0px, 0px)",
                  transition: "all",
                  width: 4260
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: 345, marginRight: 10 }}
                >
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=group&pagetype=experience"
                    />
                    <img src="/Content/images/m.group.jpg" />
                    <h1>
                      Group Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 345, marginRight: 10 }}
                >
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=honeymoon&pagetype=experience"
                    />
                    <img src="/Content/images/m.honymoon.jpg" />
                    <h1>
                      Honeymoon{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 345, marginRight: 10 }}
                >
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=luxury&pagetype=experience"
                    />
                    <img src="/Content/images/m.luxury.jpg" />
                    <h1>
                      Luxury Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: 345, marginRight: 10 }}
                >
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=beach&pagetype=experience"
                    />
                    <img src="/Content/images/m.maldives.jpg" />
                    <h1>
                      Beach Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 345, marginRight: 10 }}>
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=safari&pagetype=experience"
                    />
                    <img src="/Content/images/m.safari.jpg" />
                    <h1>
                      Safari Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 345, marginRight: 10 }}>
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=family&pagetype=experience"
                    />
                    <img src="/Content/images/m.family.jpg" />
                    <h1>
                      Family Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 345, marginRight: 10 }}>
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=group&pagetype=experience"
                    />
                    <img src="/Content/images/m.group.jpg" />
                    <h1>
                      Group Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 345, marginRight: 10 }}>
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=honeymoon&pagetype=experience"
                    />
                    <img src="/Content/images/m.honymoon.jpg" />
                    <h1>
                      Honeymoon{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 345, marginRight: 10 }}>
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=luxury&pagetype=experience"
                    />
                    <img src="/Content/images/m.luxury.jpg" />
                    <h1>
                      Luxury Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 345, marginRight: 10 }}
                >
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=beach&pagetype=experience"
                    />
                    <img src="/Content/images/m.maldives.jpg" />
                    <h1>
                      Beach Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 345, marginRight: 10 }}
                >
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=safari&pagetype=experience"
                    />
                    <img src="/Content/images/m.safari.jpg" />
                    <h1>
                      Safari Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 345, marginRight: 10 }}
                >
                  <div className="craft-img">
                    <a
                      className="experiece-clickable-box"
                      href="/experience?loc=family&pagetype=experience"
                    />
                    <img src="/Content/images/m.family.jpg" />
                    <h1>
                      Family Vacations{" "}
                      <span>
                        Get Quote <img src="/Content/images/right-arow.png" />
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots">
              <button role="button" className="owl-dot active">
                <span />
              </button>
              <button role="button" className="owl-dot">
                <span />
              </button>
              <button role="button" className="owl-dot">
                <span />
              </button>
              <button role="button" className="owl-dot">
                <span />
              </button>
              <button role="button" className="owl-dot">
                <span />
              </button>
              <button role="button" className="owl-dot">
                <span />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section className="hotelhome" id="RUHUS_Top_Hotel_Deals" style={{}}>
      <div className="container">
        <h2>Top Hotel Deals</h2>
        <div className="dlmainbox owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-532px, 0px, 0px)",
                transition: "all",
                width: 2130
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_4" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_4"
                      defaultValue="ec7e58a3-b7e1-4c11-886a-e5e4b1d16bbc"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="US" />
                    <input name="CityCode" type="hidden" defaultValue="ORL" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-81.342"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="28.4788" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="United States"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Coco Key Hotel and Water Park Resort"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Orlando"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/07/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/11/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/ORL.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Coco Key Hotel and Water Park Resort</h3>
                        <div className="stars stars3" />
                        <p>Orlando, United States</p>
                        <p>Nov 07 - Nov 11</p>
                        <p>
                          From{" "}
                          <span>
                            $98<sup>.24*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_4"
                        onclick="SearchTopHotelDeal('4')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_5" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_5"
                      defaultValue="8b6f3608-1906-4ada-9741-585d757bd365"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="PA" />
                    <input name="CityCode" type="hidden" defaultValue="PTY" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Panama City"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-79.533"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="8.968" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="Panama"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Playa Blanca All Inclusive Beach Resort"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Panama City"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/06/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/10/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/PTY.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Playa Blanca All Inclusive Beach Resort</h3>
                        <div className="stars stars4" />
                        <p>Panama City, Panama</p>
                        <p>Nov 06 - Nov 10</p>
                        <p>
                          From{" "}
                          <span>
                            $136<sup>.14*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_5"
                        onclick="SearchTopHotelDeal('5')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_6" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_6"
                      defaultValue="5ba754ae-c51c-4e91-b3f0-a48155f04223"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="MX" />
                    <input name="CityCode" type="hidden" defaultValue="CUN" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Cancun"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input type="hidden" defaultValue="-86.83" name="Longitude" />
                    <input type="hidden" defaultValue="21.17" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="Mexico"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="BlueBay Grand Esmeralda"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Cancun"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/10/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/14/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/CUN.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>BlueBay Grand Esmeralda</h3>
                        <div className="stars stars5" />
                        <p>Cancun, Mexico</p>
                        <p>Nov 10 - Nov 14</p>
                        <p>
                          From{" "}
                          <span>
                            $137<sup>.30*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_6"
                        onclick="SearchTopHotelDeal('6')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_1" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_1"
                      defaultValue="f38ac029-7b0c-4ea5-8ce7-24d2ae8a2140"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="MX" />
                    <input name="CityCode" type="hidden" defaultValue="MEX" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Mexico City"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-99.131"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="19.4424" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="Mexico"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Holiday Inn Puebla La Noria"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Mexico City"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/13/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/17/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/MEX.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Holiday Inn Puebla La Noria</h3>
                        <div className="stars stars4" />
                        <p>Mexico City, Mexico</p>
                        <p>Nov 13 - Nov 17</p>
                        <p>
                          From{" "}
                          <span>
                            $61<sup>.00*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_1"
                        onclick="SearchTopHotelDeal('1')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_2" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_2"
                      defaultValue="95fd503d-595e-4c7a-a6aa-89ca2b1156a6"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="MX" />
                    <input name="CityCode" type="hidden" defaultValue="GDL" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Guadalajara"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-103.33"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="20.67" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="Mexico"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Krystal Urban Guadalajara"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Guadalajara"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/21/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/25/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/GDL.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Krystal Urban Guadalajara</h3>
                        <div className="stars stars4" />
                        <p>Guadalajara, Mexico</p>
                        <p>Nov 21 - Nov 25</p>
                        <p>
                          From{" "}
                          <span>
                            $65<sup>.53*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_2"
                        onclick="SearchTopHotelDeal('2')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_3" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_3"
                      defaultValue="02ca772a-916a-484e-99e7-71edf582eccb"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="US" />
                    <input name="CityCode" type="hidden" defaultValue="LAS" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-115.0901"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="36.288" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="United States"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Sahara Las Vegas"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Las Vegas"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/22/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/26/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/LAS.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Sahara Las Vegas</h3>
                        <div className="stars stars4" />
                        <p>Las Vegas, United States</p>
                        <p>Nov 22 - Nov 26</p>
                        <p>
                          From{" "}
                          <span>
                            $83<sup>.89*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_3"
                        onclick="SearchTopHotelDeal('3')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_4" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_4"
                      defaultValue="ec7e58a3-b7e1-4c11-886a-e5e4b1d16bbc"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="US" />
                    <input name="CityCode" type="hidden" defaultValue="ORL" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Orlando"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-81.342"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="28.4788" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="United States"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Coco Key Hotel and Water Park Resort"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Orlando"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/07/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/11/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/ORL.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Coco Key Hotel and Water Park Resort</h3>
                        <div className="stars stars3" />
                        <p>Orlando, United States</p>
                        <p>Nov 07 - Nov 11</p>
                        <p>
                          From{" "}
                          <span>
                            $98<sup>.24*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_4"
                        onclick="SearchTopHotelDeal('4')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_5" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_5"
                      defaultValue="8b6f3608-1906-4ada-9741-585d757bd365"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="PA" />
                    <input name="CityCode" type="hidden" defaultValue="PTY" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Panama City"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-79.533"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="8.968" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="Panama"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Playa Blanca All Inclusive Beach Resort"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Panama City"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/06/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/10/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/PTY.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Playa Blanca All Inclusive Beach Resort</h3>
                        <div className="stars stars4" />
                        <p>Panama City, Panama</p>
                        <p>Nov 06 - Nov 10</p>
                        <p>
                          From{" "}
                          <span>
                            $136<sup>.14*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_5"
                        onclick="SearchTopHotelDeal('5')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_6" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_6"
                      defaultValue="5ba754ae-c51c-4e91-b3f0-a48155f04223"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="MX" />
                    <input name="CityCode" type="hidden" defaultValue="CUN" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Cancun"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input type="hidden" defaultValue="-86.83" name="Longitude" />
                    <input type="hidden" defaultValue="21.17" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="Mexico"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="BlueBay Grand Esmeralda"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Cancun"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/10/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/14/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/CUN.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>BlueBay Grand Esmeralda</h3>
                        <div className="stars stars5" />
                        <p>Cancun, Mexico</p>
                        <p>Nov 10 - Nov 14</p>
                        <p>
                          From{" "}
                          <span>
                            $137<sup>.30*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_6"
                        onclick="SearchTopHotelDeal('6')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_1" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_1"
                      defaultValue="f38ac029-7b0c-4ea5-8ce7-24d2ae8a2140"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="MX" />
                    <input name="CityCode" type="hidden" defaultValue="MEX" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Mexico City"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-99.131"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="19.4424" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="Mexico"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Holiday Inn Puebla La Noria"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Mexico City"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/13/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/17/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/MEX.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Holiday Inn Puebla La Noria</h3>
                        <div className="stars stars4" />
                        <p>Mexico City, Mexico</p>
                        <p>Nov 13 - Nov 17</p>
                        <p>
                          From{" "}
                          <span>
                            $61<sup>.00*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_1"
                        onclick="SearchTopHotelDeal('1')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_2" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_2"
                      defaultValue="95fd503d-595e-4c7a-a6aa-89ca2b1156a6"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="MX" />
                    <input name="CityCode" type="hidden" defaultValue="GDL" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Guadalajara"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-103.33"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="20.67" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="Mexico"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Krystal Urban Guadalajara"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Guadalajara"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/21/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/25/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/GDL.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Krystal Urban Guadalajara</h3>
                        <div className="stars stars4" />
                        <p>Guadalajara, Mexico</p>
                        <p>Nov 21 - Nov 25</p>
                        <p>
                          From{" "}
                          <span>
                            $65<sup>.53*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_2"
                        onclick="SearchTopHotelDeal('2')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "167.5px", marginRight: 10 }}
              >
                <div className="htldlbox">
                  <form id="formTopHotelDeal_3" method="post">
                    <input
                      name="HotelGuid"
                      type="hidden"
                      id="hdnTopHotelDealGuid_3"
                      defaultValue="02ca772a-916a-484e-99e7-71edf582eccb"
                    />
                    <input name="CountryCode" type="hidden" defaultValue="US" />
                    <input name="CityCode" type="hidden" defaultValue="LAS" />
                    <input name="Duration" type="hidden" defaultValue={4} />
                    <input
                      name="Destination"
                      type="hidden"
                      defaultValue="Las Vegas"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageType"
                    />
                    <input
                      type="hidden"
                      defaultValue="Home"
                      name="OriginPageName"
                    />
                    <input
                      type="hidden"
                      defaultValue="-115.0901"
                      name="Longitude"
                    />
                    <input type="hidden" defaultValue="36.288" name="Latitude" />
                    <input
                      type="hidden"
                      defaultValue="United States"
                      name="CountryName"
                    />
                    <input type="hidden" defaultValue="False" name="IsHotel" />
                    <input type="hidden" defaultValue="" name="HotelCode" />
                    <input
                      type="hidden"
                      defaultValue="Sahara Las Vegas"
                      name="HotelName"
                    />
                    <input
                      type="hidden"
                      defaultValue="Las Vegas"
                      name="DestinationInfo"
                    />
                    <input type="hidden" defaultValue={1} name="NumberOfRooms" />
                    <input type="hidden" defaultValue={2} name="RoomAdultCount" />
                    <input type="hidden" defaultValue={0} name="RoomChildCount" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge1" />
                    <input type="hidden" defaultValue={1} name="RoomChildAge2" />
                    <input
                      type="hidden"
                      defaultValue="11/22/2024"
                      name="CheckinDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="11/26/2024"
                      name="CheckOutDate"
                    />
                    <input
                      type="hidden"
                      defaultValue="1 Room, 2 Adults , 0 Child"
                      name="HotelRoomPaxInfo"
                    />
                    <div className="dlimg">
                      <img src="/Content/images/HotelDeals/Home/Mobile/LAS.jpg" />
                      <div className="imgcaption">Save upto 35 %</div>
                    </div>
                    <div className="dlhtlContent">
                      <div className="htl">
                        <h3>Sahara Las Vegas</h3>
                        <div className="stars stars4" />
                        <p>Las Vegas, United States</p>
                        <p>Nov 22 - Nov 26</p>
                        <p>
                          From{" "}
                          <span>
                            $83<sup>.89*</sup>
                          </span>{" "}
                          per night &amp; twin-sharing
                        </p>
                      </div>
                      <button
                        id="btnTopHotelDeal_3"
                        onclick="SearchTopHotelDeal('3')"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots">
            <button role="button" className="owl-dot active">
              <span />
            </button>
            <button role="button" className="owl-dot">
              <span />
            </button>
            <button role="button" className="owl-dot">
              <span />
            </button>
          </div>
        </div>
        <p className="disclaimer">
          * All hotel rates displayed are updated as of Sep 29, 2024, at 9:26 AM
          EST. They are on a twin-sharing basis for one night unless stated
          otherwise.{" "}
          <a href="javascript:void(0)" onclick="openpopupwindow('/service-fees')">
            Our Service Fees
          </a>{" "}
          and{" "}
          <a target="_blank" href="/taxes-and-fee">
            taxes and fees
          </a>{" "}
          may apply. Please read our{" "}
          <a href="/terms-and-conditions" target="_blank">
            Terms &amp; Conditions
          </a>{" "}
          carefully.
        </p>
      </div>
    </section>
  </div>
  
}

export default Section3;