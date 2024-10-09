"use client"
import { useState, useEffect } from "react";

const Faqs = () => {
const[faqToggle,setfaqToggle]=useState(true);
const [faqBoxes, setFaqBoxes] = useState([]);


  const expandFaqContainer = (e)=>{
    console.log("Clicked on the box");
    faqBoxes.forEach(a=> {
        a.className = removeClass(a.className, "active");
    })
      e.target.className += " active";
  }

  useEffect(()=>{
    console.log(document.getElementsByClassName("fabboxS"), "LOADED Array");
    setFaqBoxes(Object.values(document.getElementsByClassName("fabboxS")));
  }, [])


  const removeClass = (currentClasses, classToRemove) => {
    // Split the current class names into an array
    const classesArray = currentClasses.split(' ');
  
    // Filter out the class you want to remove
    const updatedClassesArray = classesArray.filter(className => className !== classToRemove);
  
    // Join the array back into a string
    return updatedClassesArray.join(' ');
  };

  const shrinkFaqContainer = (a)=>{
    console.log("Fired Shrink", a);
    
  }

    return <div className="faqpages">
    <div className="header-heading text-center">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
    </div>
    <div className="container">
      <div className="fabBx" itemScope="" itemType="https://schema.org/FAQPage" >
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            WHAT IS MEANT BY ONLINE CHECK-IN FOR AIRLINES?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              The process of confirming your tickets online is called online
              check-in. This process confirms your presence on the flight booked.
              It involves printing your boarding pass at your convenience or
              scanning it at the airport. It helps you to avoid long queues to
              wait for checking in. After online check-in, you only drop in your
              baggage and proceed to the security gates directly. For most
              airlines, the process of online check-in opens 24-48 hours before
              the flight departure time and stays open until 1-2 hours. You can
              check out the respective airline's check-in policy on their website
              to know more.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            HOW TO PLACE A REQUEST FOR AN IN-FLIGHT MEAL?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              Most airlines who are low-cost carriers do not offer free meals to
              the flyers while onboard. Usually, they charge an additional amount
              for providing meals to the travelers. At the time of booking, you
              have an option to place a request for an in-flight meal. The request
              then reaches the airlines, and you are required to place this
              request at least 24 hours before the flight departure time. Agents
              with Red Umbrella Holidays may place a request to the airlines for
              your meal on your behalf. But we hold no guarantee that your meal
              request is delivered as is it's up to the airline's discretion.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            WHY DID THE FARE INCREASE AFTER I PLACED MY BOOKING AND RECEIVED
            CONFIRMATION?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              The booking confirmation email that you receive from Red Umbrella
              Holidays informs you that we have received your booking request.
              Once we receive your query, our agents begin working on the same for
              you. The airline's airfares are dynamic and regulated every minute.
              You may observe the change in fare depending upon the demand and
              supply matrix of your travel. When our agent finds a suitable flight
              for you and makes a booking, it may result in selling out of some
              inventories or particular seats on the aircraft. This further
              results in the change of airfare. Then the flight supplier offers
              different choices, and the newly offered seats or a class may be of
              a higher price. Hence, the new airline that you finally book may not
              be the one that is available on the website.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            HOW TO SELECT SPECIAL SEATS WHEN ONBOARD?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              To request a special seat, please inform us in advance regarding
              your preference for a window or an aisle seat. Some airlines offer
              seat selection during the online check-in process. If you want our
              travel experts will book your seat and place a request to the
              airline. However, please note this is just a request and cannot be
              guaranteed by our agents. The option may not be available, and you
              might have to pay an additional amount for the same, especially when
              you travel on a low-cost carrier.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            HOW TO KNOW THAT I HAVE A CONFIRMED BOOKING?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              After you complete the online booking request, we send you a
              confirmation email that has all the details of your booking with the
              displayed airfare. The booking confirmation email implies that we
              have received your booking request, and our agents will now start
              looking out for the flights to your desired destination.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            WHAT IS A HOLIDAY PACKAGE ON RED UMBRELLA HOLIDAYS?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              A holiday package prepared by Red Umbrella Holidays holiday experts
              is a combination of Flight and Hotel that gives you access to better
              offers than booking the services individually with us. The package
              displayed is usually on a per person basis with double sharing
              accommodation.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            WHAT ARE THE BENEFITS OF PURCHASING A HOLIDAY PACKAGE WITH RED
            UMBRELLA HOLIDAYS?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              If you purchase a Holiday Package from Red Umbrella Holidays, you
              save on your time and money. Our holiday packages have the
              lowest-offered airfare with the Book Now Pay Later option. With
              that, we negotiate accommodation tariffs to further offer the
              savings to you. You may travel on any day of your choice and enjoy a
              stay as long as you wish. We do not limit you to a fixed number of
              days.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            HOW DO I KNOW IF THE HOLIDAY PACKAGE I PURCHASED FROM RED UMBRELLA
            HOLIDAYS IS WORTH MY MONEY?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              Red Umbrella Holidays experts suggest you travel during the non-peak
              season if you are flexible with your travel dates. We recommend that
              you avoid the major holidays and weekends. Apart from that, we have
              seen a trend that suggests that Tuesday, Wednesday and sometimes
              Saturday have the cheapest airfares if you are looking for flights.
              And the accommodation is cheaper during the weekdays as compared to
              weekends. You may book on one of these days to get the best-offered
              prices on holidays. If you plan to visit places like Orlando or
              Vegas, we strongly recommend not picking Friday departure and Sunday
              returns. They are the highest-priced days to travel to these
              destinations. For destinations like Las Vegas, Jackson Hole, and
              Orlando, the weekends are most expensive. And, packages in Chicago
              which is a business center cost less on weekends. Having said that,
              our agents are well-versed with the industry norms and will guide
              you to the best of their abilities about the best-offered holiday
              packages.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            WHEN I AM BOOKING A HOLIDAY PACKAGE WITH RED UMBRELLA HOLIDAYS, CAN I
            OPT FOR A FLIGHT OR A HOTEL OF MY CHOICE?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              Yes, you may. Red Umbrella Holiday packages are 100% customizable.
              We bundle the options that combine your required travel service
              based on price, location, and ratings. If you want to select a
              flight or a hotel of your choice, you may have to pay the fare or
              tariff difference as applicable and our service fee. You may get a
              customized holiday package of your choice by connecting with Red
              Umbrella Holidays experts.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            AM I ALLOWED TO CANCEL MY HOLIDAY PACKAGE OR A PORTION OF MY PACKAGE
            BOOKED WITH RED UMBRELLA HOLIDAYS AND RETAIN THE REST OF IT?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              The SUPER SAVER PRICE price featured on our website for an offered
              holiday is according to a particular combination of selected travel
              services (flight &amp; hotel). Once the package is booked, and you
              want to cancel one of the services you have to cancel the entire
              holiday package. For the same, the cancelation rule of individual
              products is applicable.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            WILL I BE RECEIVING A CONFIRMATION VOUCHER FROM RED UMBRELLA HOLIDAYS
            FOR MAKING A HOTEL RESERVATION?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              When you book an accommodation on Red Umbrella Holidays we send a
              confirmation email to your shared details and assign you a booking
              reference ID. With this number, you receive your hotel e-vouchers
              within 24-48 hours of your booking. The email confirmation is our
              formal communication informing you that we have received your
              booking request, and we will begin the booking process.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            WILL YOU ALLOW ADDITIONAL GUESTS TO BE ADDED TO AN ALREADY MADE HOTEL
            BOOKING?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              Red Umbrella Holidays allows you to add additional guests to your
              hotel bookings if there is availability. Our travel experts will
              reach out to the hotel supplier with your request to add more guests
              and check the availability on your behalf. We charge our service fee
              and the tariff difference to do this. Reach out to our travel agent
              at{" "}
              <a className="call-btn-abtus" href="tel:1-833-914-2482">
                1-833-914-2482
              </a>
              . Alternatively, you may choose to make a new reservation on the
              website.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            THE HOTEL I BOOKED ON RED UMBRELLA HOLIDAYS IS SEEKING A HIGHER AMOUNT
            THAN MENTIONED IN MY BOOKING CONFIRMATION EMAIL. WHAT SHOULD I DO?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              Sometimes the hotel charges you an additional fee called hotel/
              resort fee, and you have to pay the same at the hotel. In some
              cities, a government tax is applicable that is to be paid at the
              time of checkout. Apart from these two charges, usually, hotels
              honor the rate quoted while making the reservation. We recommend
              that you carry a printout of your reservation as evidence and ask
              them to rectify the extra charges if levied.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            HOW TO CANCEL MY RED UMBRELLA HOLIDAYS HOTEL BOOKINGS?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              To cancel a hotel reservation made on Red Umbrella Holidays, you
              must reach out to Red Umbrella Holidays customer care at{" "}
              <a className="call-btn-abtus" href="tel:1-833-914-2482">
                1-833-914-2482
              </a>{" "}
              . Our executives will guide you with the entire cancelation process
              and brief you about our Policy and service fees to process the
              request.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            WHAT IF I FACE ANY ISSUES DURING CHECK-IN AT THE HOTEL?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              Red Umbrella Holidays recommends that you carry a printout of the
              email confirmation and the e-vouchers shared by our Holiday experts.
              If the property is overbooked (it happens on some occasions), and if
              you have a confirmed reservation, then the booked hotel must provide
              you with another hotel at comparable prices. They must also pay for
              your transfer or offer free private transfers to the new property.
              In such an event, please reach out to Red Umbrella Holidays customer
              care, and they will help you with the process.
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            I WANT TO RESCHEDULE MY HOTEL BOOKING DATES. HOW CAN I DO THAT?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              For any date, type of room, name of booking holder changes; call our
              Customer Care team. The changes are at the sole discretion of the
              hotel supplier and their policies. Our team will only reach out to
              the hotel on your behalf and request a change. To process this
              request, we levy a service fee as mentioned in our{" "}
              <a href="/post-ticketing-fees" target="_blank">
                Post-Ticketing Fee
              </a>
              .
            </div>
          </div>
        </div>
        <div
          className="fabboxS"
          onClick={expandFaqContainer}
          itemScope=""
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div itemProp="name" className="panel-title">
            HOW TO GET IN TOUCH WITH YOUR TRAVEL CONSULTANTS?
          </div>
          <div
            itemScope=""
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="panel-body">
              You can get in touch with us at any time for queries related to your
              booking. Give us a call at our toll-free helpline number{" "}
              <a className="call-btn-abtus" href="tel:1-833-914-2482">
                1-833-914-2482
              </a>{" "}
              or write to us at{" "}
              <a href="mailto:support@redumbrellaholidays.com">
                support@redumbrellaholidays.com
              </a>
              . Our travel consultants will get back to you within 24-hours of
              placing your inquiry.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
}
export default Faqs;