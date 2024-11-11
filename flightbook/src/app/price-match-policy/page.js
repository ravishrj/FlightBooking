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

const Price_Match_Policy = () => {
  const [isMobile, setIsMobile] = useState(true);
  const width = useWindowWidth();

  useEffect(() => {
    console.log(isMobile, "is mobile");
    const mobileCss = document.createElement("link");
    mobileCss.rel = "stylesheet";
    mobileCss.href = "/usmobile.css";

    const mobileHomeCss = document.createElement("link");
    mobileHomeCss.rel = "stylesheet";
    mobileHomeCss.href = "/usmobile_home.css";

    const listnav = document.createElement("link");
    listnav.rel = "stylesheet";
    listnav.href = "/Content/css/m.lightpick.css?v=RUS2021";

    console.log("Is Mobile Loaded");
    document.head.appendChild(mobileCss);
    document.head.appendChild(mobileHomeCss);
    document.head.appendChild(listnav);

    return () => {
      if (document.head.contains(mobileCss)) {
        document.head.removeChild(mobileCss);
      }
      if (document.head.contains(mobileHomeCss)) {
        document.head.removeChild(mobileHomeCss);
      }
      if (document.head.contains(listnav)) {
        document.head.removeChild(listnav);
      }
    };
  }, [isMobile]);

  return (
    <div className="contentWrp">
      <div className="header-heading text-center">
        <h2>PRICE MATCH PROMISE</h2>
      </div>
      <div className="container">
        <p>
          <strong>
            When you book with Red Umbrella Holidays, our Travel Experts make
            sure you find the best-offered price.
          </strong>
        </p>
        <p>
          To do the same, we have incorporated the Price Match Policy. Under
          this policy, if you find an all-inclusive price that is lower than our
          offered price; with the same itinerary on a Major OTA within 24-hours
          of booking, we will match the price and refund the difference.{" "}
        </p>
        <p>
          <strong>What's meant by the 'same itinerary'?</strong>
        </p>
        <p>
          'The same itinerary' implies that every element of the booking matches
          our quoted booking details. It includes flight number, airline
          carrier, dates of travel, number of passengers, and seat type.
        </p>
        <p>
          <strong>
            Why is it a requirement that bookings under PMP must be 'offered and
            available'?
          </strong>
        </p>
        <p>
          You are required to make sure that the itinerary you find to beat our
          rate is live on a competitor's site; and at the time when our agent
          visits the website it is available to be booked.
        </p>
        <p>
          <strong>
            How can I notify Red Umbrella Holidays regarding invoking PMP?
          </strong>
        </p>
        <p>
          To invoke PMP, you are required to contact us at{" "}
          <a href="mailto:support@redumbrellaholidays.com">
            support@redumbrellaholidays.com
          </a>{" "}
          or call us on{" "}
          <a className="call-phone-number" href="javascript:void(0);">
            1-833-914-2482
          </a>{" "}
          to share your Red Umbrella Holidays booking reference number and all
          the details of the lower priced itinerary. With this you must share
          the URL/ screenshot that enables our customer service representatives
          about the itinerary verification. Our Travel Experts should be able to
          find the lower rate from the information provide by you. We have the
          the right to deny the claims if our curator is not able to verify the
          details. And if it is verified, you will be offered to choose from
          retaining the itinerary or getting a refund of the difference
        </p>
        <p>
          <strong>Are there any exceptions to Price Match Policy?</strong>
        </p>
        <p>
          The fares under PMP are not applicable on membership programs,
          corporate discounts, group discounts, charter, rewards programs,
          incentives, meeting, convention, or consolidated fares. Even the
          coupon promotions, or any other promotional offer which is not valid
          for the general public is valid.
        </p>
        <p>
          <b>Exclusions:</b>military, student, government, tour operator, bulk,
          vacation package and fare errors are excluded.
        </p>
      </div>
    </div>
  );
};
export default Price_Match_Policy;
