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
const DamageManagementPolicy = () => {
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
    <div className="contentWrp damagePolicy">
      <div className="container">
        <div className="header-heading text-center">
          <h2>Car Rental - Damage Management Policy</h2>
        </div>
        <h3>What occurs if you damage the car while it's being rented?</h3>
        <p>
          Our renters generally drive defensively, and accidents don't happen
          very often. Thus, rather than being the norm, so car damage is the
          exception rather than the rule. But it's important to consider how
          we're going to deal with the damage if it happens.
        </p>
        <p>
          To help you understand the cost you will be charged for any damage you
          do to the car while renting it, RedUmbrella Holidays has developed a
          clear damage management policy. Please carefully read our Terms and
          Conditions for more details.{" "}
        </p>
        <p>
          <b>You may not be fully liable.</b>
        </p>
        <p>
          Your liability for the damage may be limited or nonexistent, depending
          on the type of rental protection you purchased. Please carefully read
          our Terms &amp; Conditions for more information.{" "}
        </p>
        <h3>Types of Damage</h3>
        <p>The cost of damages will change based on the type of damage.</p>
        <p>
          <b>"Light Damage"</b> includes any minor harm done to the car as well
          as any misplacement, theft, or harm done to the car's accessories,
          papers, or keys, as appropriate. Any minor dents, chips, or scratches
          to any part of the car are considered light damage.
        </p>
        <p>
          <b>"Tyre Replacement"</b> describes any damage to the tires that
          requires a new tire to be installed on the car.{" "}
        </p>
        <p>
          <b>"Total Loss"</b> describes a situation in which we determine that
          the vehicle's damage has become too great to be repaired, or that
          doing so would be not feasible or impossible.
        </p>
        <p>
          <b>"Serious Damage"</b> describes any damage to the car other than
          minor dents, tire replacements, or total loss.
        </p>
        <h3>DAMAGES IDENTIFIED DURING VEHICLE RETURN</h3>
        <p>When you bring the car back to us, we examine it in front of you.</p>
        <p>
          We will send you an invoice detailing the necessary charges if light
          damage is found, and you sign the vehicle's statement of return
          indicating your acceptance and consent to the damage. As per our
          policies, a Light Damage Administration Charge will be included in
          these expenses.
        </p>
        <p>
          We will have the damage examined and provide you with the following
          documents if we find significant damage or believe the car may be a
          total loss and you sign the statement of return voluntarily
          acknowledging and agreeing to this degree of damage.
        </p>
        <p>Vehicle return statement with damage details include:</p>
        <ul>
          <li>Images of the damage that occurred</li>
          <li>
            An invoice outlining all applicable fees will be provided, along
            with (i) an engineer's charge for evaluating the damage, excluding
            tyre and windscreen damage, and (ii) a charge for our loss of use of
            the vehicle as a result of its immobilization. The fees will include
            either a Serious Damage Administration Charge or a Tyre or
            Windscreen Damage Administration Charge, depending on the nature of
            the damage.
          </li>
          <li>
            The costs of the Light Damage Administration Charge, Serious Damage,
            Tyre or Windscreen Damage Administration Charges, and Engineer's
            Charge are specified at the time of booking. Please carefully read
            our terms and conditions for more details.
          </li>
        </ul>
        <h3>DAMAGES IDENTIFIED AFTER THE RENTAL IS FINISHED </h3>
        <p>
          After you complete your rental and leave, we will inspect the car and
          if we then find any damage, we will provide you with the following
          documentation alongside the vehicle return statement:
        </p>
        <ul>
          <li>Images of the damage that occurred</li>
          <li>
            The invoice with a breakdown of the costs involved. It will include
            an administration charge (either the Serious, Tyre, or Windscreen
            Damage Administration Charges for Serious Damage, depending on which
            one applies). If the damage is serious or total, it will also
            include an engineer's charge for assessing the damage (unless it's
            Tyre or Windscreen Damage), as well as a charge for our loss of use
            of the vehicle.
          </li>
        </ul>
        <h3>CLAIMS</h3>
        <p>
          Within 14 days of receiving the documentation, please send us an email
          or notification if you have any questions about the identified damage
          or the associated charges. We may send you an invoice for the required
          fees if we don't hear from you after the first 14 days.
        </p>
        <p>
          Please contact our customer service agent at{" "}
          <a href="mailto:support@RedUmbrellaHolidays.com">
            support@RedUmbrellaHolidays.com
          </a>{" "}
          or give us a call at <a href="tel:1-833-914-2482">1-833-914-2482</a>{" "}
          if you have any questions concerning your car rental damage invoice.{" "}
        </p>
      </div>
    </div>
  );
};
export default DamageManagementPolicy;
