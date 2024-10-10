const FlightdealSection=()=>{
    return <div id="FlightTabDealSection">
    {/*------Today-flight-deals------*/}
    <div className="container">
      <p className="disclaimer flighttabdisc">
        * Fares on this page are updated as of Oct 09, 2024 at 9:26 AM EST. They
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
      <section className="flight-deals" id="RUHUS_TodayFlightDeals">
        <div className="deal-picture">
          <img src="/Content/images/deal-flight.png" />
        </div>
        <div className="deal-text">
          <h2>BESTSELLING FLIGHT DEALS</h2>
          <form id="frmTodayFlightDeal_1" method="post">
            <div className="deal-deatil">
              <div></div>
              <div>LGA - ATL</div>
              <div>07 Nov to 17 Nov</div>
              <div>
                $100<sup>.08*</sup>
              </div>
              <div>
                <button
                  type="button"
                  className="deal-button"
                  id="btnSearchTodayFlightDeals_1"
                  onclick="return SearchTodayFlightDeal('1')"
                >
                  book now
                </button>
              </div>
              <input
                name="hvOriginCityName"
                type="hidden"
                defaultValue="New York"
              />
              <input
                name="hvDestinationCityName"
                type="hidden"
                defaultValue="Atlanta"
              />
              <input name="OriginCode" type="hidden" defaultValue="LGA" />
              <input name="DestinationCode" type="hidden" defaultValue="ATL" />
              <input name="AdultPaxCount" type="hidden" defaultValue={1} />
              <input name="ChildPaxCount" type="hidden" defaultValue={0} />
              <input name="InfantLapPaxCount" type="hidden" defaultValue={0} />
              <input name="InfantSeatPaxCount" type="hidden" defaultValue={0} />
              <input
                name="FlightUniqueId"
                type="hidden"
                id="hdnTodayDealFlightGuid_1"
                defaultValue="a8893f2f-84f3-4dcc-a07e-6a9547cf2adb"
              />
              <input name="PreferredAirline" type="hidden" defaultValue="" />
              <input name="PreferredAirlineName" defaultValue="" type="hidden" />
              <input type="hidden" name="DepDate" defaultValue="11/07/2024" />
              <input type="hidden" name="RetDate" defaultValue="11/17/2024" />
            </div>
          </form>
          <form id="frmTodayFlightDeal_2" method="post">
            <div className="deal-deatil">
              <div></div>
              <div>LAS - DEN</div>
              <div>14 Nov to 28 Nov</div>
              <div>
                $102<sup>.96*</sup>
              </div>
              <div>
                <button
                  type="button"
                  className="deal-button"
                  id="btnSearchTodayFlightDeals_2"
                  onclick="return SearchTodayFlightDeal('2')"
                >
                  book now
                </button>
              </div>
              <input
                name="hvOriginCityName"
                type="hidden"
                defaultValue="Las Vegas"
              />
              <input
                name="hvDestinationCityName"
                type="hidden"
                defaultValue="Denver"
              />
              <input name="OriginCode" type="hidden" defaultValue="LAS" />
              <input name="DestinationCode" type="hidden" defaultValue="DEN" />
              <input name="AdultPaxCount" type="hidden" defaultValue={1} />
              <input name="ChildPaxCount" type="hidden" defaultValue={0} />
              <input name="InfantLapPaxCount" type="hidden" defaultValue={0} />
              <input name="InfantSeatPaxCount" type="hidden" defaultValue={0} />
              <input
                name="FlightUniqueId"
                type="hidden"
                id="hdnTodayDealFlightGuid_2"
                defaultValue="a8893f2f-84f3-4dcc-a07e-6a9547cf2adb"
              />
              <input name="PreferredAirline" type="hidden" defaultValue="" />
              <input name="PreferredAirlineName" defaultValue="" type="hidden" />
              <input type="hidden" name="DepDate" defaultValue="11/14/2024" />
              <input type="hidden" name="RetDate" defaultValue="11/28/2024" />
            </div>
          </form>
          <form id="frmTodayFlightDeal_3" method="post">
            <div className="deal-deatil">
              <div></div>
              <div>FLL - MCO</div>
              <div>06 Nov to 16 Nov</div>
              <div>
                $102<sup>.98*</sup>
              </div>
              <div>
                <button
                  type="button"
                  className="deal-button"
                  id="btnSearchTodayFlightDeals_3"
                  onclick="return SearchTodayFlightDeal('3')"
                >
                  book now
                </button>
              </div>
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
              <input name="DestinationCode" type="hidden" defaultValue="MCO" />
              <input name="AdultPaxCount" type="hidden" defaultValue={1} />
              <input name="ChildPaxCount" type="hidden" defaultValue={0} />
              <input name="InfantLapPaxCount" type="hidden" defaultValue={0} />
              <input name="InfantSeatPaxCount" type="hidden" defaultValue={0} />
              <input
                name="FlightUniqueId"
                type="hidden"
                id="hdnTodayDealFlightGuid_3"
                defaultValue="a8893f2f-84f3-4dcc-a07e-6a9547cf2adb"
              />
              <input name="PreferredAirline" type="hidden" defaultValue="" />
              <input name="PreferredAirlineName" defaultValue="" type="hidden" />
              <input type="hidden" name="DepDate" defaultValue="11/06/2024" />
              <input type="hidden" name="RetDate" defaultValue="11/16/2024" />
            </div>
          </form>
          <form id="frmTodayFlightDeal_4" method="post">
            <div className="deal-deatil">
              <div></div>
              <div>MCO - FLL</div>
              <div>08 Nov to 20 Nov</div>
              <div>
                $103<sup>.21*</sup>
              </div>
              <div>
                <button
                  type="button"
                  className="deal-button"
                  id="btnSearchTodayFlightDeals_4"
                  onclick="return SearchTodayFlightDeal('4')"
                >
                  book now
                </button>
              </div>
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
              <input name="DestinationCode" type="hidden" defaultValue="FLL" />
              <input name="AdultPaxCount" type="hidden" defaultValue={1} />
              <input name="ChildPaxCount" type="hidden" defaultValue={0} />
              <input name="InfantLapPaxCount" type="hidden" defaultValue={0} />
              <input name="InfantSeatPaxCount" type="hidden" defaultValue={0} />
              <input
                name="FlightUniqueId"
                type="hidden"
                id="hdnTodayDealFlightGuid_4"
                defaultValue="a8893f2f-84f3-4dcc-a07e-6a9547cf2adb"
              />
              <input name="PreferredAirline" type="hidden" defaultValue="" />
              <input name="PreferredAirlineName" defaultValue="" type="hidden" />
              <input type="hidden" name="DepDate" defaultValue="11/08/2024" />
              <input type="hidden" name="RetDate" defaultValue="11/20/2024" />
            </div>
          </form>
        </div>
      </section>
    </div>
    {/*------Today-flight-deals------*/}
  </div>
  
}
export default FlightdealSection;