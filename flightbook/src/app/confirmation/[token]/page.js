

import BookingForm from "@/app/_components/bookingForm/page";

const Booking=()=>{
    return <section className="confirmation">
    <div className="container">
      <div className="headings">
        <a className="btn-back" href="javascript:void(0);">
          Go Back
        </a>
        <h1>Review Trip Details &amp; Book</h1>
        <div className="cong-new">
          <h2>
            <strong>Congratulations!</strong> You have got the best offer. It’s a
            steal - <strong>Wait No More!</strong>
          </h2>
        </div>
      </div>
    </div>
    <div className="container ipdcon">
      <div className="col-sm-8">
        {/* Flight Details */}
        <div className="flight-details">
          <div className="depart-flight">
            <div className="box-left">
              <img src="/content/images/depart-icon-red.png" />
              <h3>Depart</h3>
            </div>
            <div className="box-right">
              <h3>
                New York (JFK) - Delhi (DEL) <span>|</span> Fri, Oct 25 | 22h 55m
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
                    <i>2 PC</i>
                  </p>
                </li>
              </ul>
              <div className="changefligth">
                <p>Mumbai (BOM) | 6h 5m Layover</p>
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
                  <span>AI 660</span>
                </li>
                <li>
                  <p>Chhatrapati Shivaji Maharaj Intl. (BOM)</p>
                  <span>Sat | 06:00 PM | Oct 26</span>
                </li>
                <li>
                  <p>Indira Gandhi Intl. (DEL)</p>
                  <span>Sat | 08:20 PM | Oct 26</span>
                </li>
                <li>
                  <p>
                    <strong>Coach</strong>
                  </p>
                  <span>2h 20m</span>
                  <p className="bag-info">
                    <i>2 PC</i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="depart-flight return-flight">
            <div className="box-left">
              <img src="/content/images/return-icon-red.png" />
              <h3>Return</h3>
            </div>
            <div className="box-right">
              <h3>
                Delhi (DEL) - New York (JFK) <span>|</span> Fri, Nov 08 | 14h 55m
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
                  <span>AI 101</span>
                </li>
                <li>
                  <p>Indira Gandhi Intl. (DEL)</p>
                  <span>Fri | 02:30 AM | Nov 08</span>
                </li>
                <li>
                  <p>John F Kennedy Intl. (JFK)</p>
                  <span>Fri | 06:55 AM | Nov 08</span>
                </li>
                <li>
                  <p>
                    <strong>Coach</strong>
                  </p>
                  <span>14h 55m</span>
                  <p className="bag-info">
                    <i>2 PC</i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Flight Details */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n     .CamelT {\n        text-transform: capitalize;\n        display:block;\n    }\n"
          }}
        />
        {/* End Flight Details */}
       <BookingForm/>
      </div>
      <div className="col-sm-4">
        <div
          className="fixme"
          style={{ top: 15, bottom: "auto", position: "fixed" }}
        >
          <div className="righthdng" style={{ display: "none" }}>
            <h3>Congratulations!</h3>
            <p>You have got the best offer. It’s a steal - Wait no more!</p>
          </div>
          {/*Price Details box*/}
          <div className="priceboxdtl" id="divPriceSummary">
            <h4 className="g-orange">price details (USD)</h4>
            <ul style={{ position: "relative", zIndex: 10 }}>
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
                    and <a href="/taxes-and-fee">taxes &amp; fees</a>. Please read
                    our <a href="/terms-and-conditions">Terms &amp; Conditions</a>{" "}
                    for more details.
                  </b>
                </div>
              </li>
            </ul>
            <ul>
              <li>1 x Adult(s)</li>
              <li>$522.00</li>
              <li>$425.35</li>
              <li>$947.35</li>
            </ul>
            <ul>
              <li className="PcOldfare" style={{ display: "none" }}>
                <span>Total Price</span>{" "}
                <span className="PcOldfare" style={{ display: "none" }}>
                  $947.35
                </span>
              </li>
            </ul>
            <hr />
            <ul className="totlevlu totalPrice">
              <li id="spnTotalfareHeading">Total Price (USD)</li>
              <li id="spnTotalfare" className="spnTotalfareGeneral">
                $947.35
              </li>
            </ul>
            <ul className="avg-fare" style={{ display: "none" }}>
              <li>Average Price Per Person: (USD)</li>
              <li className="avg-fare avg-fare-value">$947.35</li>
            </ul>
            <input type="hidden" id="hdnNoofPaxForAvg" defaultValue={1} />
            {/* left Section */}
            <input type="hidden" id="hdncurrencyRate" defaultValue={1} />
            <input type="hidden" id="hdncurrencySymbol" defaultValue="$" />
            <input type="hidden" id="hdnAvgTotalFareV2" defaultValue="947.35" />
            <input type="hidden" id="hdnTotalGDSFareV2" defaultValue="947.35" />
            <input type="hidden" id="hdnToCurrencyType" defaultValue="USD" />
            <input type="hidden" id="hdnDiscountAmount" defaultValue={0} />
            <input type="hidden" id="hdnCouponList" defaultValue="RUH30#" />
            <input type="hidden" id="hdnDiscountList" defaultValue="7#" />
          </div>
          {/*End Price Details box*/}
          {/*secure ssl booking*/}
          <div className="secusslbox">
            <h3 className="g-orange">
              <i className="fa fa-lock" /> secure ssl booking
            </h3>
            <p>Your personal information is encrypted and secure.</p>
            <ul>
              <li>Transactions are 100% secure</li>
            </ul>
            <div className="imgs">
              <h6>secured by</h6>
              <div>
                <img src="/Content/images/atollogo.png" />
                <img src="/Content/images/tta-logo.png" />
              </div>
            </div>
          </div>
          {/*End secure ssl booking*/}
          <div className="why-redumbrell">
            <h3 className="g-orange">Why RED UMBRELLA HOLIDAYS?</h3>
            <ul>
              <li>
                <img src="/Content/images/check.png" />
                Low Airfare Promise
              </li>
              <li>
                <img src="/Content/images/check.png" />
                Hassle-Free Bookings
              </li>
              <li>
                <img src="/Content/images/check.png" />
                Offers from 400+ Airlines
              </li>
              <li>
                <img src="/Content/images/check.png" />
                Quick Support &amp; Assistance
              </li>
            </ul>
          </div>
          <div className="paylater" style={{ display: "none" }}></div>
          {/*Call box*/}
          <div className="collingbox g-mfp-blue">
            <h6>Need Help?</h6>
            <h3>
              Our team of professional travel experts are ready to help! Call us
              and we'll help you plan the perfect vacation for you and your
              family.
            </h3>
            <div className="pic-call">
              <img src="/Content/images/callme.png" />
            </div>
            <div className="callbox">
              <span className="g-mfp-blue">Call Us</span>
              <h2 className="g-orange">
                <span>
                  <img src="/Content/images/deal-flight-icon.png" />
                </span>{" "}
                <a href="tel:1-833-914-2482">1-833-914-2482</a>
              </h2>
            </div>
          </div>
          {/*End Call box*/}
        </div>
      </div>
    </div>
  </section>
}
export default Booking;