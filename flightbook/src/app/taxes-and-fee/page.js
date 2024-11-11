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

const TaxesAndFee = () => {
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
    <div className="textesfees">
      <div className="container">
        <h2>TAXES AND FEES</h2>
        <table>
          <tbody>
            <tr>
              <th width="50%">Name &amp; Description</th>
              <th width="22%">May Apply To</th>
              <th width="16%">Code</th>
              <th width="11%">Amount</th>
            </tr>
            <tr>
              <td>
                <p>
                  Security &amp; Insurance Surcharge Departure Israeli Carriers
                </p>
                On all Israeli Flights also when the arrival/departure is not
                from/to Israel.
              </td>
              <td>Each Way</td>
              <td>AP</td>
              <td>$4.00</td>
            </tr>
            <tr>
              <td>
                <p>
                  Travel Facilities Tax
                  <br /> (Alaska/Hawaii Ticket Tax)
                </p>
                Charged for certain flights to/or from Alaska and/or Hawaii
              </td>
              <td>U.S. Domestic and International</td>
              <td>US</td>
              <td>$10.60 OW/$21.20 RT</td>
            </tr>
            <tr>
              <td>
                <p>U.S. Flight Segment Tax Domestic</p>
                Charged for flights traversing the US depending on the
                per-segment fee
              </td>
              <td>U.S. Domestic and International</td>
              <td>ZP</td>
              <td>$4.80</td>
            </tr>
            <tr>
              <td>
                <p>
                  U.S. Excise Tax (or U.S. Domestic Transportation Tax; U.S.
                  Ticket Tax)
                </p>
                Charged for flights around the US or Canada/Mexico and its
                225-mile buffer zones.
              </td>
              <td>U.S. Domestic</td>
              <td>US</td>
              <td>7.50%</td>
            </tr>
            <tr>
              <td>
                <p>Passenger Facility Charge (PFC)</p>
                This is charged as a variable fee as a facilities improvement
                tax by particular airports. A maximum of 4 charges on one
                itinerary can be charged.
              </td>
              <td>Per Arrival in USA</td>
              <td>XF</td>
              <td>$4.50</td>
            </tr>
            <tr>
              <td>
                <p>
                  September 11th Security Fee
                  <br /> (U.S. Passenger Civil Aviation Security Fee)
                </p>
                For every one-way trip; Not over $11.20 per round trip. Charged
                to passengers on domestic and international flights for new
                civil aviation security measures enforced after 9/11.
              </td>
              <td>U.S. Domestic and International</td>
              <td>AY</td>
              <td>$5.60</td>
            </tr>
            <tr>
              <td>
                <p>U.S. International Transportation (Arrival/Departure) Tax</p>
                Levied on all flights arriving/departing from the US, Puerto
                Rico, or the U.S. Virgin Islands.
              </td>
              <td>International</td>
              <td>US</td>
              <td>$21.10</td>
            </tr>
            <tr>
              <td>
                <p>
                  U.S. Animal and Plant Health Inspection Service (APHIS) Fee
                </p>
                Levied on all flights starting abroad, except Canada, and
                landing in the US, Puerto Rico, or the U.S. Virgin Islands.
              </td>
              <td>International</td>
              <td>XA</td>
              <td>$3.83</td>
            </tr>
            <tr>
              <td>
                <p>U.S. Immigration User Fee</p>
                Applicable on all international arrivals to the U.S., Puerto
                Rico or the U.S. Virgin Islands.
              </td>
              <td>International</td>
              <td>XY</td>
              <td>$7.00</td>
            </tr>
            <tr>
              <td>
                <p>U.S. Customs User Fee</p>
                Charged to passengers arriving in the US or in Puerto Rico and
                the District of Columbia, for flights which don't begin in the
                US territories.
              </td>
              <td>International</td>
              <td>YC</td>
              <td>$6.52</td>
            </tr>
            <tr>
              <td>
                <p>
                  International Taxes and Government or Airport-imposed Fees
                </p>
                International Taxes and Government or Airport-imposed fees
              </td>
              <td>International</td>
              <td>Varies</td>
              <td>up to several hundred dollars</td>
            </tr>
            <tr>
              <td>
                <p>Online Air Transaction Service Fees</p>
                On all airfares, a service fee of up to $30 is levied on per pax
                for every passenger type**
              </td>
              <td>U.S. Domestic and International</td>
              <td>Fees</td>
              <td>up to $30.00</td>
            </tr>
            <tr>
              <td>
                <p>Online Hotel Transaction Services Fees</p>
                (per night, per room)
              </td>
              <td>All Hotels</td>
              <td>Fees</td>
              <td>up to $35</td>
            </tr>
            <tr>
              <td>
                <p>Online Car Rental Transaction Service Fees </p>
                (per rental)
              </td>
              <td>All Car Rentals</td>
              <td>Fees</td>
              <td>$14.00</td>
            </tr>
            <tr>
              <td colSpan={4}>
                <p>&nbsp;</p>
                *Approximate amount
                <br />
                **Passenger type = Adult, infant, student, child, senior,
                military
                <br />
                Taxes imposed by the government are subject to change without
                prior notice <br />
                Service Fees on all transactions are non-refundable.
                <br />
                <p>Exceptions to Online Air Transaction Service Fees:</p>
                Business &amp; First Class fares - Service fees on a passenger
                type may be up to $100 per passenger
                <br />
                Multi-city trips - Service fees on a passenger type tickets may
                be up to $100 per passenger
                <br />
                Multi airline trips or the cities with high fraud rates -
                Service fees on a passenger types may be up to $30 per passenger
                <p>&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TaxesAndFee;
