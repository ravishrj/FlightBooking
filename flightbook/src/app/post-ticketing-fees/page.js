"use client";
import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

const PostTicketingFees = () => {
  const [isMobile, setIsMobile] = useState(true);
  const width = useWindowWidth();

  useEffect(() => {
    console.log(isMobile, "is mobile");
    const mobileCss = document.createElement("link");
    mobileCss.rel = "stylesheet";
    mobileCss.href = "/usmobile.css";

    const mobileHomeCss = document.createElement("link");
    mobileHomeCss.rel = "stylesheet";
    mobileHomeCss.href = "/US_customcss.css";

    const listnav = document.createElement("link");
    listnav.rel = "stylesheet";
    listnav.href = "/Content/css/m.lightpick.css?v=RUS2021";

    console.log("Is Mobile Loaded");
    document.head.appendChild(mobileCss);
    document.head.appendChild(mobileHomeCss);
    // document.head.appendChild(listnav);

    return () => {
      if (document.head.contains(mobileCss)) {
        document.head.removeChild(mobileCss);
      }
      if (document.head.contains(mobileHomeCss)) {
        document.head.removeChild(mobileHomeCss);
      }
    };
  }, [isMobile]);

  return (
    <div className="posttickets">
      <div className="container">
        <h1>Post-Ticketing Fees</h1>
        <table>
          <tbody>
            <tr>
              <th width="30%">Applies To</th>
              <th width="35%">For</th>
              <th width="35%">Amount per Ticket</th>
            </tr>
            <tr>
              <td colSpan={3} className="flgt">
                FLIGHTS
              </td>
            </tr>
            <tr>
              <td rowSpan={4}>
                Agent Assisted Cancelation <sub>1</sub>
              </td>
              <td>Request of Cancelation made within 24 hours of booking</td>
              <td>
                <p>Per-passenger, per-ticket fees</p>
                <p>
                  <span>Domestic</span>
                  <span>$50</span>
                </p>
                <p>
                  <span>International</span>
                  <span>$75</span>
                </p>
                <p>
                  <span>(after 24 hrs)Business and First Class</span>
                  <span>$75</span>
                </p>
              </td>
            </tr>
            <tr className="innerred">
              <td colSpan={2}>Cancelation &amp; Refunds (after 24 hrs)</td>
            </tr>
            <tr className="black">
              <td>Economy</td>
              <td>Business/First</td>
            </tr>
            <tr className="eco">
              <td>
                <p>
                  <span>Domestic</span> <span>International</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Domestic</span> <span>International</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                Cancelation assisted by Agent<sub>1</sub> w/Future Credit
              </td>
              <td>
                <p className="price-data">
                  <span>$50</span> <span>$50</span>
                </p>
              </td>
              <td>
                <p className="price-data">
                  <span>$100</span> <span>$100</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                Cancelation assisted by agent<sub>2</sub> w/Refund
              </td>
              <td>
                <p className="price-data">
                  <span>$100</span> <span>$250</span>
                </p>
              </td>
              <td>
                <p className="price-data">
                  <span>$250</span> <span>$250</span>
                </p>
              </td>
            </tr>
            <tr className="innerred">
              <td colSpan={3}>Changes to Existing Bookings (exchange)</td>
            </tr>
            <tr>
              <td>
                Within 10 days of new travel date<sub>1</sub>
              </td>
              <td>
                <p className="price-data">
                  <span>$50</span> <span>$50</span>
                </p>
              </td>
              <td>
                <p className="price-data">
                  <span>$100</span> <span>$100</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                Beyond 10 days of new travel date<sub>2</sub>
              </td>
              <td>
                <p className="price-data">
                  <span>$100</span> <span>$250</span>
                </p>
              </td>
              <td>
                <p className="price-data">
                  <span>$250</span> <span>$250</span>
                </p>
              </td>
            </tr>
            <tr className="innerred">
              <td colSpan={3}>Changes to Existing Bookings (exchange)</td>
            </tr>
            <tr>
              <td rowSpan={2}>Agent Assisted Waivers</td>
              <td className="tblack">Economy</td>
              <td className="tblack">Business/First</td>
            </tr>
            <tr style={{ display: "none" }}>
              <td>
                <p>
                  <span>Domestic</span> <span>International</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Domestic</span> <span>International</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="price-data">
                  <span>$50</span> <span>$50</span>
                </p>
              </td>
              <td>
                <p className="price-data">
                  <span>$100</span> <span>$100</span>
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="flgt">
                HOTEL
              </td>
            </tr>
            <tr>
              <td className="s1">
                {" "}
                Agent Assisted Cancelation <sup>^</sup>
              </td>
              <td className="">
                {" "}
                Request of Cancelation made within 24 hours of booking
              </td>
              <td className="bd">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        Per-passenger, per booking
                      </td>
                    </tr>
                    <tr>
                      <td>Domestic</td>
                      <td>International</td>
                    </tr>
                    <tr>
                      <td>$50</td>
                      <td>$75</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="s1">
                {" "}
                Agent Assisted Cancelation <sup>^</sup>
              </td>
              <td className="">
                {" "}
                Request of Cancelation made after 24 hours and within the
                cancellation validity of booking
              </td>
              <td className="bd">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        Per-passenger, per booking
                      </td>
                    </tr>
                    <tr>
                      <td>Domestic</td>
                      <td>International</td>
                    </tr>
                    <tr>
                      <td>$35</td>
                      <td>$50</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="flgt">
                HOLIDAYS
              </td>
            </tr>
            <tr>
              <td className="s1">
                {" "}
                Agent Assisted Cancelation <sup>1</sup>
              </td>
              <td className="bd" colSpan={2}>
                <table>
                  <tbody>
                    <tr className="innerred">
                      <td colSpan={4} style={{ textAlign: "center" }}>
                        Request of Cancelation made within 24 hours of booking
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="tblack">
                        Economy Flight Tickets
                      </td>
                      <td colSpan={2} className="tblack">
                        Business/First Flight Tickets
                      </td>
                    </tr>
                    <tr>
                      <td>Domestic</td>
                      <td>International</td>
                      <td>Domestic</td>
                      <td>International</td>
                    </tr>
                    <tr>
                      <td>$50</td>
                      <td>$75</td>
                      <td>$75</td>
                      <td>$75</td>
                    </tr>
                    <tr>
                      <td
                        colSpan={4}
                        className="tblack"
                        style={{ textAlign: "center" }}
                      >
                        Hotel Booking
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        Domestic
                      </td>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        International
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        $35
                      </td>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        $35
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="s1">
                {" "}
                Cancelation assisted by Agent <sup>1</sup> w/Future Credit{" "}
              </td>
              <td className="bd" colSpan={2}>
                <table>
                  <tbody>
                    <tr className="innerred">
                      <td colSpan={4} style={{ textAlign: "center" }}>
                        Request of Cancelation made after 24 hours of booking
                        &amp; within the hotel cancelation validity
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="tblack">
                        Economy Flight Tickets
                      </td>
                      <td colSpan={2} className="tblack">
                        Business/First Flight Tickets
                      </td>
                    </tr>
                    <tr>
                      <td>Domestic</td>
                      <td>International</td>
                      <td>Domestic</td>
                      <td>International</td>
                    </tr>
                    <tr>
                      <td>$50</td>
                      <td>$50</td>
                      <td>$100</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td
                        colSpan={4}
                        className="tblack"
                        style={{ textAlign: "center" }}
                      >
                        Hotel Booking
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        Domestic
                      </td>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        International
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        $50
                      </td>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        $50
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="s1">
                {" "}
                Cancelation assisted by Agent <sup>2</sup> w/Refund{" "}
              </td>
              <td className="bd" colSpan={2}>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={2} className="tblack">
                        Economy Flight Tickets
                      </td>
                      <td colSpan={2} className="tblack">
                        Business/First Flight Tickets
                      </td>
                    </tr>
                    <tr>
                      <td>Domestic</td>
                      <td>International</td>
                      <td>Domestic</td>
                      <td>International</td>
                    </tr>
                    <tr>
                      <td>$100</td>
                      <td>$250</td>
                      <td>$250</td>
                      <td>$250</td>
                    </tr>
                    <tr>
                      <td
                        colSpan={4}
                        className="tblack"
                        style={{ textAlign: "center" }}
                      >
                        Hotel Booking
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        Domestic
                      </td>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        International
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        $100
                      </td>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        $100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="innerred">
              <td colSpan={3}>
                Fees charged for an agent assisted refund or future airline
                credit for any of the reasons listed below<sub>3</sub>
              </td>
            </tr>
            <tr className="txt-medical">
              <td colSpan={3} style={{ padding: 0, border: 0 }}>
                <table>
                  <tbody>
                    <tr>
                      <td width="20%">Death/Bereavement</td>
                      <td width="20%">Infant</td>
                      <td width="20%">Visa/Schengen Visa Issues</td>
                    </tr>
                    <tr>
                      <td>Duplicate</td>
                      <td>Medical UMNR</td>
                      <td>UMNR</td>
                    </tr>
                    <tr>
                      <td>Reinstate</td>
                      <td>Routing Changes</td>
                      <td />
                    </tr>
                    <tr>
                      <td>No Show</td>
                      <td>Name Correction</td>
                      <td>Ticket Validity</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="contets">
                <p>
                  Passenger type = Adult, child, senior, infant, student,
                  military.
                  <br />
                  Service fees charged on changes, refunds, cancelations &amp;
                  any future credits is charged on a per passenger, per ticket
                  basis.
                  <br />
                  Government imposed taxes and fees are subject to change. You
                  will only be charged the final total amount displayed or
                  quoted by our agent or mentioned on our website.
                </p>
                &nbsp;
                <p>
                  <b>1</b> Our booking fees, all post-ticketing service fees are
                  non-refundable &amp; subjected to change without any prior
                  information. Our fees is in addition to service charge or fees
                  imposed by any airline or our suppliers.
                </p>
                <p>
                  <b>2</b> All Airline Refunds/Future Credits are subjected to
                  the fare rules of the airline as well as their procedures
                  &amp; policies
                </p>
                <p>
                  <b>^</b> All hotel &amp; holidays cancelations are applicable
                  with the fee (if any) that is charge by the hotel or the
                  airline.{" "}
                </p>
                <p>
                  <b>3</b> Special Services - All Special Services are made on
                  request ONLY and are subjected to airline's or supplier's
                  review &amp; approval. Special Service Fees is levied only if
                  there is an avaialbility of the service(s) and will be
                  refunded ONLY when request is declined by the airline or the
                  supplier.
                </p>
                <p>
                  Name Misspelling - Passenger's name on the ticket doesn't
                  match the details on the passport or any other universally
                  accepted government ID
                </p>
                <p>
                  Visa/Passport Decline- Visa/Passport decline letter is
                  normally required in order to process a request
                </p>
                <p>
                  Name Misspelling - Passenger's name on the ticket doesn't
                  match the details on the passport or any other universally
                  accepted government ID
                </p>
                <p>Baggage - please retain the baggage receipts &amp; tags</p>
                <p>
                  No-Show - We will require documents that indicate why you were
                  unable to make your scheduled departure
                </p>
                <p>
                  Denied Boarding - We will be requiring the documentats to why
                  you were denied boarding of your scheduled departure
                </p>
                <p>
                  Duplicate Tickets - Copies of all tickets, reflecting exact
                  same itineraries booked with us will be required in order to
                  process a refund request
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PostTicketingFees;
