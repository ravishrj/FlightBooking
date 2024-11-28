"use client";
import { useState, useEffect } from "react";
import Navbar from "../_components/navbar/page";
import NavbarDesktop from "../_components/NavbarDesktop/page";
import Section4 from "../_components/section4/page";
import Copyright from "../_components/copyright/page";
import Footer from "../_components/footer/page";
import FooterDesktop from "../_components/FooterDesktop/page";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial value

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

const TermsAndCondition = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  // useEffect(() => {
  //   if (width <= 768) {
  //     setIsMobile(true);
  //   } else if (width > 768) {
  //     setIsMobile(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(isMobile, "is Mobile from desktop navbar");
  //   const desktopCss = document.createElement("link");
  //   desktopCss.rel = "stylesheet";
  //   desktopCss.href = "/usmobile.css";

  //   const desktopHomeCss = document.createElement("link");
  //   desktopHomeCss.rel = "stylesheet";
  //   desktopHomeCss.href = "/usmobile_home.css";

  //   if (!isMobile) {
  //     console.log("Destop View loaded");
  //     document.head.appendChild(desktopCss);
  //     document.head.appendChild(desktopHomeCss);

  //     return () => {
  //       if (document.head.contains(desktopCss)) {
  //         document.head.removeChild(desktopCss);
  //       }
  //       if (document.head.contains(desktopHomeCss)) {
  //         document.head.removeChild(desktopHomeCss);
  //       }
  //     };
  //   }
  // }, [isMobile]);
  return (
    <>
      {isMobile ? <Navbar /> : <NavbarDesktop />}
      <div className="contentWrp">
        <div className="header-heading text-center">
          <h2>Red Umbrella Holidays Booking Terms</h2>
        </div>
        <div className="container">
          <p>
            Red Umbrella Holidays welcomes you to its website -
            Redumbrellaholidays.com that includes mobile &amp; desktop sites
            along with the mobile application. Any feature available on Red
            Umbrella Holidays, or all the features are known as the 'Website.'
          </p>
          <p>
            Our Website helps you with all the travel information to deliver the
            travel services, including air, hotel, or holiday bookings and
            transactions for them with travel suppliers available on our
            website. Red Umbrella Holidays is for non-commercial use, and terms
            like we, us, our, or 'Red Umbrella Holidays' refer to our company.
            The terms like 'you' or 'your' refer to the users of Red Umbrella
            Holidays.
          </p>
          <p>
            The Website is available for you under the condition that you accept
            it without modifications in our terms, conditions, or any notices
            written here. All of them are collectively known as the 'Terms' and
            the Terms, describe the booking terms and conditions applicable to
            the services you avail on our Website. It also gives the details of
            the responsibilities that you have as a user of Red Umbrella
            Holidays. The terms limit the liabilities of Red Umbrella Holidays
            and the third-party suppliers listed on our website. The suppliers
            include the services available on redumbrellaholidays.com. We refer
            to our third-party suppliers as 'Travel Service Providers', and we
            recommend you go through and understand the booking conditions
            mentioned below reserving Red Umbrella Holidays services for{" "}
            <a href="/flight" target="_blank">
              <u>flights</u>
            </a>
            ,{" "}
            <a href="/hotel" target="_blank">
              <u>hotels</u>
            </a>
            , or{" "}
            <a href="/" target="_blank">
              <u>holidays</u>
            </a>
            . We recommend that you check the details of your itinerary and
            ensure that the information mentioned in your confirmation email is
            understood by you. You must check our{" "}
            <a target="_blank" href="/privacy-policy">
              <u>Privacy Policy</u>
            </a>{" "}
            and understand how you can use our Website and how it is
            incorporated under the Agreement.
          </p>
          <p>
            When you use our Website to make a travel booking or reach out to
            our call center agents, you agree to Agreement terms. All the terms
            and conditions mentioned here apply to you. In case you have issues
            with the Terms, you are requested to stop the use of our Website.
            Red Umbrella Holidays reserves the right to modify and amend the
            Terms and post the revised terms at any time without giving any
            prior information. We advise you to keep a check on this page every
            time you visit the Website. The amended Terms are applicable
            starting from the date of the post. Our website is intended for the
            residents of the USA, Canada, and the terms of this Agreement apply
            to their residents. Under this Agreement, we determine your IP
            address to know if you are located anywhere in this region. UPON
            YOUR ACCEPTANCE OF THESE TERMS, YOU AGREE TO MANDATORY CLASS ACTION
            AND WAIVER A CLASS ACTION. The mentioned booking terms are mandatory
            for all the users, visitors, and customers of Red Umbrella Holidays
            that has its office located at 448 PRAIRIE KNOLL DR NAPERVILLE, IL
            60565. Any references in the booking terms mentions 'booking',
            'contracts', or 'arrangements' are for services availed by you.{" "}
          </p>
          <p>
            <strong>Use of Red Umbrella Holidays - Website</strong>
          </p>
          <p>
            There are some terms and conditions that you are required to fulfill
            to use our Website or to book with us. You must guarantee:
          </p>
          <p>● You are 18 or above.</p>
          <p>● You have the authority to engage in a legal contract with us.</p>
          <p>
            ● Your use of Red Umbrella Holidays will be according to the terms
            of the Agreement.
          </p>
          <p>
            ● You will make authentic bookings for your personal use or on
            someone's behalf who has given you the authority to do the same.
          </p>
          <p>
            ● In case you are booking on someone else's behalf, you must make
            sure that they are aware of the terms of this Agreement.
          </p>
          <p>
            Additionally, make sure the information that you share with us is
            up-to-date, true, and right
          </p>
          <p>
            We hold the right to deny anyone access to our Website or services
            for valid reasons at our discretion. It includes but is not limited
            to violation of terms of this Agreement.
          </p>
          <p>
            <strong>Resolution of Disputes</strong>
          </p>
          <p>
            Under this Agreement, you agree that Red Umbrella Holidays will be
            allowed to resolve a dispute or a claim that arises. It may arise
            due to the issues with the service provided with us or any issues
            with our Privacy Policy. You can resolve it by reaching out to our
            customer care number{" "}
            <a className="call-phone-number" href="tel:1-833-914-2482">
              1-833-914-2482
            </a>{" "}
            or writing to us at{" "}
            <a href="mailto:support@redumbrellaholidays.com">
              support@redumbrellaholidays.com
            </a>
            . If we are unable to resolve the Claims within 60-days, you have
            the right to seek redress via arbitration.
          </p>
          <p>
            <strong>Governing Laws; Submission to Jurisdiction</strong>
          </p>
          <p>
            The Terms and our rights with the third parties associated with us
            are under the governing laws of the State of Florida, USA. If not
            mentioned otherwise, it is decided and agreed upon by both the
            parties that if a Mandatory Arbitration arises, it will undergo
            under the jurisdiction of Illinois court. As a user of Red Umbrella
            Holidays, you give us the consent to decide this under the Terms.
            You must bring your Claims to our notice within 6-months from the
            date of the booking made.
          </p>
          <p>
            <strong>Mandatory Arbitration</strong>
          </p>
          <p>
            All the claims filed with us are resolved via arbitration initiated
            by the American Arbitration Association (AAA). You must declare the
            Claims on an individual basis in a small claims court in Illinois.
            If your claims qualify as per the rules of small claims court, they
            are stated by it. It is inclusive of claims asserted on Red Umbrella
            Holidays, its subsidiaries, and affiliates. It includes our travel
            suppliers or companies that are linked to us. It means that for any
            Claims that arise after you accept the Terms &amp; Conditions, the
            same will be considered even though the previous version requires
            changes. Red Umbrella Holidays can also assert claims against you at
            the small claims court. There will be no judges according to an
            agreement or the court will be required for a review of the
            agreement. But being a user of Red Umbrella Holidays, you can be the
            arbiter and award the same or similar damages including the
            statutory damages, attorney’s fees, and costs that a court follows
            to enforce these Terms. You have the choice to conduct the
            arbitration over the phone or choose to be physically present in the
            State where our office is located or mutually agreed upon location.
          </p>
          <p>
            For the process of arbitration, you must send a request letter with
            all the details of your Claims to our legal team. In case we request
            arbitration against you, we will provide you with the complete
            details and a notice at the email address that you shared with us.
            You should read AAA's instructions available at www.adr.org or call
            them at 1-631-309-0576 to understand the process better.
          </p>
          <p>
            If the proceedings aim at resolving the Claims, they will be
            conducted on an individual basis and not in the form of a class
            action or a consolidated action. Under any particular circumstances,
            if a Claim proceeds in court instead of arbitration, we waive your
            right to a jury trial. Resolution of disputes must resolve the
            claims stated against Red Umbrella Holidays. Any Claim filed but is
            not resolved by Resolution of Disputes is qualified as inadequately
            filed or void.
          </p>
          <p>
            <strong>Travel Information - General</strong>
          </p>
          <p>
            Red Umbrella Holidays provides you with information linked to your
            itinerary, travel plans, and the related Terms of booking after the
            booking is complete. It includes the details of the destination,
            packaged holiday, and the schedule of your flight.
          </p>
          <p>
            We provide you the information given to us by our third-party
            suppliers like airlines, tour operators, and other providers. We
            take the necessary steps to ensure that the information that we
            shared with you is accurate and up to date. However, if it is not,
            we have no responsibility or liability in such a case. All the
            information displayed on our website is subject to change without
            any prior notice. Also, all our services are subject to
            availability. As a user of Red Umbrella Holidays and a flyer, you
            have to understand the legal requirements of traveling. It includes
            a valid passport, destination-specific visa, health insurance
            documents, and provides us with the same to complete your booking.
            We are a service provider for you, and we assist you with the
            booking process through the desktop or mobile website or our booking
            team. The final responsibility lies with you to get all the
            information and to make sure that you take the required documents
            for travel.
          </p>
          <p>
            For other Terms of bookings and services availed on Red Umbrella
            Holidays, you must read all the Terms carefully. When you book a
            flight with us, make sure that you go through the airline's website
            terms available on their website. You must abide by all of the
            airline's terms and conditions. If the flight itinerary has multiple
            airline suppliers, then please go through the terms and conditions
            of all the mentioned airlines. The airfare booked is guaranteed
            after the purchase, and the payment transaction is complete. We
            issue a ticket after this process is complete and we receive a
            ticket from the supplier. Sometimes the airlines change their prices
            without informing us, and these fare changes are not dependent on
            us. As a travel agency, we have the right to cancel your booking if
            we do not receive your payment by the allocated time and date. All
            airlines have a different set of rules on their fee and charges. So
            in case, your flight is canceled or rescheduled resulting in a
            change to your other flight on the itinerary, you are responsible
            for the same. In a scenario like this, you have to bear the cost or
            buy new tickets for the unchanged flight. Usually, the airline
            charges a fee to make a change, refund, or exchange. In such a case,
            the cost is borne by the customer. You must comply with the terms of
            the airline and there are different rules for different airlines.
            You must have your outbound and return tickets along with the
            confirmation email with you during the trip. The authorities may
            seek proof of your return tickets during check-in. Red Umbrella
            Holidays recommends that you book a combination of two one-way
            tickets instead of purchasing one round-trip itinerary.
          </p>
          <p>
            We recommend it because on booking a combination of two one-way
            tickets, it is easier to offer better flexibility and choice of
            flights. The flights are usually cheaper when the booking is on
            different airlines as compared to when booked on the same airline.
            The combination of one-way flights is different from the terms of
            round-trip flights. The one-way flights are subject to their terms
            and conditions. So if a flight changes in your first way that causes
            a delay in the other flight, as a customer you will pay the
            applicable charges. In such a scenario, Red Umbrella Holidays has no
            responsibility or liability. The prices for low-cost carriers are
            usually converted from a different currency to USD for your
            convenience. As a result, you have to pay the converted charges that
            are the estimated (and not exact) value of the ticket purchased. So
            you might observe the amount paid is different due to currency
            fluctuation. On receiving your e-tickets, you might have to pay an
            additional fee on your credit card as a transaction fee because you
            paid us in a different currency or country. On making an
            international purchase, there are taxes levied by your bank.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>
              Red Umbrella Holidays TERMS &amp; CONDITIONS – FLIGHTS
            </strong>
          </p>
          <p>
            <strong>International Travel(s)</strong>
          </p>
          <p>
            When you go for international travel, the provisions of the Montreal
            Convention apply to the departure and destination countries. The
            Convention limits the liability of the airline supplier that may
            result in death or any personal injury to the passengers. As a
            passenger, you have to ensure that you have all the documents needed
            to enter into the foreign land including a passport, visa (business,
            tourist, or transit). You can be asked to present these documents at
            any time. To visit a foreign land, several responsibilities need to
            be met, and we are not responsible if you fail to accomplish them.
            You must check all the prohibitions, warnings, and announcements
            issued by the government before reaching the destination country.
          </p>
          <p>
            <strong>Visa and Passport</strong>
          </p>
          <p>
            Please ensure that you consult the designated Embassy and confirm
            the details of visa and passport information before traveling. Our
            agents may suggest the requirements they may change at any time, so
            please stay updated with the information from the Embassy before
            confirming your bookings with us. Red Umbrella Holidays cannot be
            held responsible if the authorities do not allow you to travel on
            the flight because they did not provide the required travel
            documents. The airport authorities, the airline including the
            transit airport's authorities can ask for the documents at any point
            and you must present them. It includes a stop made by the aircraft
            even if you have not left the premises of the airport.
          </p>
          <p>
            <strong>Health</strong>
          </p>
          <p>
            Take the necessary vaccinations to travel to a particular country.
            The required or suggested vaccines may change at any time, so keep a
            check on the updated information. Please consult a doctor before
            your departure and make sure that you adhere to all the health
            requirements and take the necessary vaccination, medication, and
            right medical procedure for a successful journey.
          </p>
          <p>
            <strong>Disinfection</strong>
          </p>
          <p>
            Several airlines have the authority and right to disinfect the
            aircraft if they perceive a doubt of threat to public health or the
            environment. The disinfectants that are used have been approved by
            the WHO (World Health Organization) and the International Civil
            Aviation Organization and includes:
          </p>
          <p>
            1. They are allowed to spray aerosolized insecticide while the
            passengers are on the board.
          </p>
          <p>
            2. They are allowed to treat aircraft surfaces with residual
            insecticide before the passenger board.
          </p>
          <p>
            When Red Umbrella Holidays books the travel for you to an
            international destination, it does not imply that we represent the
            country or guarantee that it is safe to travel with no risks
            involved. We are not liable for the damage or loss faced by you as a
            result of traveling to a destination.
          </p>
          <p>
            <strong>Airline Baggage Policies</strong>
          </p>
          <p>
            The airlines have different policies for baggage allowance, fees,
            and restrictions. We try our best to display the current baggage
            allowance policy and follow the airline's website to extract the
            baggage details but we cannot guarantee that the information is
            correct. We recommend you verify these details on the airline's
            website directly or call them before your scheduled departure. Also,
            the baggage fee is not included in the trip cost, unless stated
            otherwise.
          </p>
          <p>
            <strong>Check-In</strong>
          </p>
          <p>
            Different airlines have different check-in rules. You should have
            the updated details regarding the same and verify the check-in
            process' requirements before confirming the booking. Red Umbrella
            Holidays suggests that you usually should follow the below-mentioned
            schedule:
          </p>
          <p>
            For domestic flights, take a minimum of 90 minutes buffer time
            before the scheduled departure.
          </p>
          <p>
            For international flights, a minimum buffer of 3 hours before the
            scheduled departure.
          </p>
          <p>
            <strong>Airline Schedule Change</strong>
          </p>
          <p>
            Often there are changes in the flight schedule that may occur due to
            reasons like mechanical or crew issues, bad weather, or civil
            unrest. It includes the changes to the original flight, a direct one
            to a one-stop, or a connecting flight. In such cases, the changes
            are made by the airline. Red Umbrella Holidays has no responsibility
            for the same.
          </p>
          <p>
            If the schedule change includes a cancelation, then we inform our
            customers by calling them along with an email. This email entails
            all the details of the available options to choose from depending
            upon the airlines' guidelines. In a few cases, the airline doesn't
            inform us of the changes in advance. Hence, you must reach out to
            their customer service directly and confirm your flight schedule.
            You are advised to make this call at least 72-hours before the
            departure and protect yourself against a missed flight. If the
            schedule changes, the airline gives you the available recourse. In
            this, the final authority to provide an alternative flight option
            lies with them. After you check-in for the flight, it becomes the
            airline's responsibility to handle your bookings. So, any
            cancelations, delays, change of schedule, or rebooking is done
            directly by the airline. Red Umbrella Holidays will only provide you
            with the guidance of the procedure, and the final recourse is taken
            by the airline. If you are not aware of the updated schedule change,
            or cancelation 24-hour before the departure time, or you have
            already reached the airport, we think you should coordinate with the
            airline staff and know your available options. In such a time, the
            airline is your best information source and will give you the best
            advice. In bad weather, you have very limited options as a recourse.
          </p>
          <p>
            <strong>Overbooking of Flights</strong>
          </p>
          <p>
            Sometimes a flight might be overbooked, and to rectify the same,
            different airlines have different rules. To know more about the
            airline's contract of carriage, you may reach out to Red Umbrella
            Holidays travel experts or the airline directly, and they will help
            you with further details.
          </p>
          <p>
            <strong>Prices</strong>
          </p>
          <p>
            The airfares mentioned on Redumbrellaholidays.com are subject to
            change without prior notice. The airfare offered by us is guaranteed
            only after you have purchased and received the e-tickets from us,
            and we have issued you a PNR. The airfares fluctuate without
            providing us with any advance information. After the payment details
            are submitted, we will share a Booking Confirmation email. It
            includes your booking reference number, your travel itinerary, PNR
            number, and your e-ticket. If you do not receive the confirmation
            email then that implies that your booking is not complete.
          </p>
          <p>
            We inform you in case of a price change and then make the bookings.
            Under no circumstances you will be asked to pay extra once we have
            issued your ticket to you. The prices quoted on Red Umbrella
            Holidays are in USD or CAD. We have the right to cancel your
            bookings if we do not receive the complete payment within the
            suggested time frame. The mentioned segments in the confirmation
            email are used completely as on the flight segment. If you use your
            tickets improperly, your trip may get canceled.
          </p>
          <p>
            <strong>Cancelations and Refunds</strong>
          </p>
          <p>
            Any bookings made on Red Umbrella Holidays are non-refundable until
            specified otherwise. If you want to cancel the bookings, call us at
            our customer care desk, and we will be happy to help you with the
            process. For a refundable cancelation, an administrative cancelation
            fee will be charged as per the charges mentioned in our{" "}
            <a target="_blank" href="/post-ticketing-fees">
              <u>Post-ticketing Fee</u>
            </a>{" "}
            and other charges by the airline or other travel service providers.
          </p>
          <p>
            According to the airline's rules, if the cancelation request is
            raised within 4-hours of booking then you can claim a full refund.
            In this case, the amount will be credited to your original mode of
            payment. For some US airlines, you should book your tickets at least
            a week before flight departure to cancel and receive a refund. The
            process of your refund request is subject to the airline's rules and
            procedures. We process your refund after the airline approves the
            refund request. Once approved, we will send it back to your original
            payment method. After initiating your cancelation request, we begin
            the process by sending an email confirmation informing you that your
            request is in progress. To initiate the process, we deduct the
            service fee levied to the booking and transfer the balance amount.
            As we are a travel agency, we depend on the suppliers who will
            process the refund. After we receive the amount from the supplier,
            we take some time to process the refund, and further, it may take
            some time to reflect on your credit card. The complete process may
            take up to 60-90 days from the day we received the cancelation
            request.
          </p>
          <p>
            <b>Important Note:</b> The service fee is added to the taxes, and
            YOU HAVE TO PAY THE FINAL PRICE AS QUOTED REGARDLESS OF ANY CHANGES
            MADE IN OUR SERVICE FEE. You must review the final booking amount
            carefully and then confirm the final bookings. We will not be held
            responsible for your inability to do so.{" "}
          </p>
          <p>
            <b>Contact Center Booking Service Fee</b>
          </p>
          <p>
            When you book through the Red Umbrella Holidays contact center which
            may be a complex multi/stop and roundtrip booking, a service fee
            higher than our online booking fee is applicable. The service fee
            ranges from $10 to $200 per passenger by our agents.
          </p>
          <p>
            Important Note: Service fee is included in the taxes, and YOU HAVE
            TO PAY THE FINAL PRICE AS QUOTED REGARDLESS OF ANY CHANGES MADE IN
            OUR SERVICE FEE. Please review the final booking amount carefully
            before confirming the final bookings.
          </p>
          <p>
            <strong>Payment and Flight Information with Confirmation</strong>
          </p>
          <p>
            Credit card companies usually charge a fee to make an international
            transaction. It is called 'International Transaction'. It will be
            displayed on your credit card statement in your local currency and
            that is why you may see a difference in the billing amount as
            compared to the amount reflected on the payment page. When you book
            with Red Umbrella Holidays, please consider making the booking with
            a card having international validity as we will transfer your
            payment to our suppliers. After the transaction is done, your credit
            card company decides the current exchange rate and levies the
            transaction fee accordingly. In case you experience any
            discrepancies, please reach out to the bank and question them about
            the fee and the exchange rate charged on your transactions. Red
            Umbrella Holidays has no responsibility for the same.
          </p>
          <p>
            <strong>Unaccompanied Minors</strong>
          </p>
          <p>
            We have a policy to not allow an unaccompanied minor to make a
            reservation on Red Umbrella Holidays. We consider an individual
            under the age of 16 as a minor. All the airlines have a different
            set of policies for minors, and some airlines do not allow them to
            fly without adult supervision. Some airlines allow them to fly but
            the only offered option is to travel via non-stop flights. Some
            airlines charge an extra fee at the check-in counter to allow an
            unaccompanied minor to board the flight. For more details, you are
            requested to get in touch with the airline and confirm their
            policies for unaccompanied minors.
          </p>
          <p>
            <strong>Credit Card Chargeback</strong>
          </p>
          <p>
            You can dispute the travel charges levied with your credit card
            company. For any queries regarding a charge applied, we request you
            to reach out to Red Umbrella Holidays first and then dispute the
            claim with your credit card company. Post receiving our response
            with a resolution, and if we clear the disputed charges; you can ask
            your credit card company. In case the disputed chargeback request is
            incorrectly filed, Red Umbrella Holidays can cancel your bookings as
            a remedy.
          </p>
          <p>
            When choosing us as your Service Providers, you accept and agree
            with our cancelation policy. Our special offers, discounts, coupon
            codes, etc used to make the booking are not eligible in the
            cancelation policy. A chargeback is applicable if there is an
            improper charge. Our team has the right to investigate the claims
            and recover the cost of an incorrect claim. To verify the claims
            filed, we can make use of our call recordings including the service
            call made by us to dispute the claim.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>
              Red Umbrella Holidays TERMS &amp; CONDITIONS - HOLIDAY PACKAGES
            </strong>
          </p>
          <p>
            <strong>GENERAL INFORMATION</strong>
          </p>
          <p>
            The terms and conditions of the holiday package offered by
            RedUmbrella Holidays are subject to change at any time and without
            notice. Any changes to the RedUmbrella Holidays Holiday Package
            terms and conditions will be effective as of the day they are posted
            on this website. The amended Terms and Conditions, which contain the
            following information about change and cancellation, will take
            precedence over any previously published and incompatible relevant
            rules and Terms and conditions for any individual travel product
            included in the Holiday Package. The terms and conditions about
            travel packages, airline tickets, lodging, vehicle rentals, and
            other services and activities will all be complementary in any given
            area.
          </p>
          <p>
            Your booking is additionally subject to the specific terms and
            restrictions of the applicable Travel Service Provider, as indicated
            in the Terms &amp; and restrictions. Usually, the service provider's
            website has these available. Whenever feasible, we will send you a
            link to these terms after you check out with your reservation.
          </p>
          <p>
            RedUmbrella Holidays disclaims all liability for any errors or
            inaccuracies on the website or for the actions of any third parties
            (Travel Service Providers), which may include but are not limited
            to, rental car agencies, airlines, hotels, cruise lines, railroads,
            tour operators, consolidators, providers of activity services,
            providers of travel assistance, and providers of insurance.
          </p>
          <p>
            RedUmbrella Holidays offers travel management services but makes no
            warranties or representations regarding the quality of the products
            or services supplied by outside vendors, their solvency, or their
            capacity to reimburse you for any damages resulting from the
            insolvency of those vendors.
          </p>
          <p>
            RedUmbrella Holidays makes no representations about the quality,
            dependability, or insurance of any products or services offered by
            an outside service provider, their financial standing, or their
            promise to pay you back for any losses you may suffer as a result of
            that service provider's financial instability while it is offering
            travel management services. We disclaim all liability for the
            conduct of any travel service providers you may purchase services
            from through this website, including but not limited to airlines,
            hotels, cruise lines, tour operators, railroads, car rental
            companies, trip consolidators, Holiday Packages, activity providers,
            travel assistance service providers, and insurance providers.
          </p>
          <p>
            <strong>PRICING, TAXES/FEES &amp; PAYMENTS</strong>
          </p>
          <p>
            Prices and availability do not apply to individual components; they
            only apply to the purchase of the complete Holiday Package.
            RedUmbrella Holidays is unable to give you a detailed explanation of
            the costs associated with each item in your Holiday Package
            reservation due to contractual limitations. $50 per passenger, per
            ticket for flights, $40 per room, per night for hotel reservations,
            and up to $40 for car rental reservations are the service fees
            charged by RedUmbrella Holidays on new reservations.
          </p>
          <p>
            All taxes and costs for the holiday package, which includes travel,
            lodging, car rental, and activities, are included in the pricing
            displayed. On the other hand, you could have to pay any applicable
            service surcharges in addition to any extra money for fuel,
            security, luggage, seat reservations, incidental lodging, and other
            costs. Any additional costs levied by the travel service provider
            are your responsibility alone; please get in touch with them right
            away if you have any questions about these charges. Additionally,
            entry and exit taxes may be imposed by the government depending on
            where you are going; they are the full responsibility of the
            visitor.{" "}
          </p>
          <p>
            The prices do not include gas, child safety seats, sky racks,
            drop-off fees, liability insurance, collision damage waiver,
            personal effects protection, or incidental hotel room costs. At the
            time of rental car pickup or the hotel check-in counter, all of
            these fees must be paid.
          </p>
          <p>
            Full payment with a working credit card is needed at the time of
            reservation. All major credit cards are accepted by RedUmbrella
            Holidays, provided that the billing address is confirmed to be in
            the United States or Canada. You permit RedUmbrella Holidays and its
            authorized third-party partners to charge the full price of the
            Holiday Package that you have reserved to your credit card.
          </p>
          <p>
            To be picked up by a rental car company or to check into a hotel,
            travel service providers require you to present a valid credit card.
            This is to ensure that the authorized card is used and/or to collect
            any overages that might be assessed by their component policy. The
            passenger named on the reservation must typically be the cardholder.
            Furthermore, some travel agencies might not take debit cards. Verify
            with the travel service provider before you arrive.
          </p>
          <p>
            <strong>SELF-TRANSFER PACKAGE</strong>
          </p>
          <p>
            The terms and conditions may still be applicable if our
            "Self-transfer Package" is included on your airline ticket.
            Purchasing an airline ticket with our "Self-transfer Package"
            signifies your agreement to abide by their terms and restrictions.
            They outline the contents of the guarantee and the steps you must
            take to take advantage of it, therefore it is imperative that you
            carefully read them.
          </p>
          <p>
            Make sure the time allotted for the transfer or making your
            connecting flight meets your needs before buying a ticket that
            includes our "Self-transfer Package." Should you have any questions
            about whether our "Self-transfer Package" is included with your
            flight ticket, please get in touch with our customer service
            representatives right away.
          </p>
          <p>
            <strong>TRAVEL INSURANCE</strong>
          </p>
          <p>
            RedUmbrella Holidays strongly advises getting travel insurance since
            it may help with some changes and cancellation fees. If your
            vacation schedule changes, you might need to adjust your insurance
            coverage. If your plans change, please contact your travel insurance
            provider to make sure the coverage outlined in your policy is
            sufficient. Send an email to support@redumbrellaholidays.com to get
            in touch with a RedUmbrella Holidays customer service agent for
            additional information.{" "}
          </p>
          <p>
            <strong>CHANGES AND CANCELLATIONS</strong>
          </p>
          <p>
            For details on how to change or cancel your reservation, please see
            the terms and conditions of the relevant service provider. It is
            important to remember that during the booking process, we may have
            given you information regarding your rights, which is included in
            these terms and conditions.
          </p>
          <p>
            The terms and conditions of the relevant travel service provider
            will often be applicable if they change or cancel your reservation.
            Kindly get in touch with us directly, and we will help as part of
            our customer support services.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>
              Red Umbrella Holidays TERMS &amp; CONDITIONS - HOTEL RESERVATIONS
            </strong>
          </p>
          <p>
            The information regarding the hotels listed on Red Umbrella Holidays
            regarding their amenities and services are shared with us by the
            supplier. We have no responsibility for the changes that happen as a
            result of an old or misrepresenting that the supplier provided us.
            Special requests like a smoking/ non-smoking room or a lake-view/
            garden view, etc. are not guaranteed. They are considered as a
            request and are dependent on availability and first-cum first-serve
            basis. Most of the hotels honor these requests but Red Umbrella
            Holidays cannot guarantee it.
          </p>
          <p>
            Some tariffs are quoted under special membership programs like
            Corporate, government, AAA, or ARP. Offers under these rates will
            require the designated members of the program to be available at the
            time of check-in and prove eligibility. Hotels are not under an
            obligation to honor the special offers and tariffs if you fail to
            qualify for them or do not have the correct documents as
            identification proof. Red Umbrella Holidays or the hotel supplier
            will not issue a refund if the room is unused or for the nights that
            you did not avail due to early check-out. A few hotels offer the
            service of the airport shuttle. If you want to avail of it, reach
            out to the hotel directly and confirm with them along with the price
            details. Some hotels have an offer for a Booking Bonus for services
            like tours, breakfast, and more that are free of cost. You can check
            with them to avail of their services as they are under the hotel's
            policy.
          </p>
          <p>
            <strong>Pet Policy:</strong>
          </p>
          <p>
            When traveling with your pet, check with the hotel and confirm their
            pet policy. We, at Red Umbrella Holidays, have no responsibility for
            the pet policy at the hotel and the fee or the restrictions towards
            pets. The hotels have different policies applicable for different
            types, sizes, and breeds of the pet.
          </p>
          <p>
            <strong>Prepaid Reservations:</strong>
          </p>
          <p>
            The prepaid reservations are charged on your credit or debit card at
            the time of booking. This charge includes the base amount for the
            room reservation. But it does not include any cleaning fee, resort
            fee, energy surcharges, or minibar charges. The additional charges
            like meals, movies, games, parking, or a phone call are applied to
            incidentals on a regular basis during your stay.
          </p>
          <p>
            <strong>Pre-Paid Booking Vouchers:</strong>
          </p>
          <p>
            Your hotels may ask you for a booking voucher at the time of
            check-in. Red Umbrella Holidays provides you with a voucher to share
            at the hotel. You will get your hotel confirmation and booking
            vouchers in the same email. You are required to carry a printed copy
            of the same with you at the time of check-in.
          </p>
          <p>
            <strong>Meals:</strong>
          </p>
          <p>
            We make meal arrangements as per your selections at the time of
            booking. If you book a hotel that offers all the meals and you
            purchase the service at the time of booking, you will receive all
            the meals. Alternatively, you may opt for accommodation that offers
            the option to cook yourself or arrange your meals.
          </p>
          <p>Meal types (board-basis) &amp; their abbreviations:</p>
          <p>
            <strong>Room Only (RO): </strong>Meals are not in the booking price
            paid for the accommodation.
          </p>
          <p>
            <strong>Self-Catering (SC): </strong>Meals are not in the booking
            price paid. But you may self-cater and cook your meals on your own.
          </p>
          <p>
            <strong>Bed &amp; Breakfast (B&amp;B): </strong>The breakfast is at
            the booking price paid by you.
          </p>
          <p>
            <strong>Half Board (HB): </strong>The breakfast with an evening meal
            is in the booking amount paid by you. You have the option to opt for
            lunch and replace breakfast in this option. The hotel confirms
            availability post-arrival.
          </p>
          <p>
            <strong>Full Board (FB): </strong>All the meals including the
            breakfast, lunch, and evening meals are in the booking amount paid
            by you.
          </p>
          <p>
            <strong>All-Inclusive (AI):</strong>All the meals along with the
            locally produced drinks are in the package. You may enjoy the
            entertainment facilities and some non-motorized water sports being
            offered by the hotel.
          </p>
          <p>
            You are a no-show if you do not show at the hotel check-in desk
            without prior information. In case you do not check in on the
            reservation made, please contact the hotel directly. After
            contacting them, it is up to them if they penalize you or forfeit
            your booking amount.
          </p>
          <p>
            <strong>Hotel Confirmation:</strong>
          </p>
          <p>
            It takes up to 24 hours to issue a hotel voucher and confirm your
            booking request. The booking is initiated after you complete your
            booking transaction on Red Umbrella Holidays. Post receiving the
            confirmation email, our booking experts begin the reservation
            process with the hotel. Then they share the hotel vouchers after
            receiving them from the hotel. All the details regarding your hotel
            booking along with the booking reference number, your booking
            itinerary, and the additional services you have booked with us are
            present in our booking confirmation email. In case you do not
            receive the confirmation email from us, reach out to us at
            support@redumbrella.com. We highly recommend that you call the hotel
            and confirm your bookings 24-hours before the scheduled check-in
            time. We do not share your details with the hotel before 72-hours of
            check-in time. However, your reservation is secure and guaranteed
            once you receive our final confirmation along with the booking
            voucher. We recommend that you call the hotel check-in desk 48 hours
            before your arrival to confirm the details.
          </p>
          <p>
            <strong>Hotel Changes, Cancellations, and Refunds</strong>
          </p>
          <p>
            For any changes or cancellations, you should contact us at our
            customer care number. We understand that sometimes the plans change,
            and you might have to cancel. So we listed the policies that apply
            in such cases:
          </p>
          <p>
            • In case of high demand or a peak season like during the Super
            Bowl, Olympics, or Christmas and New Years' Eve. At this time the
            policies change. You must contact the hotel and ask for the reformed
            policies and details if you are booking during these times.
          </p>
          <p>
            • To request a cancellation or modification in your booking is
            subject to availability. Upon cancelation, Red Umbrella Holidays
            levies its cancelation charges added to hotel charges according to
            its cancelation policy.
          </p>
          <p>
            • No hotel will offer credits for unused rooms or reduced stay days
            due to early departure.
          </p>
          <p>
            • For an extended stay, you are required to make a new reservation.
            The tariff for the new booking cannot be guaranteed as the original
            booking rate.
          </p>
          <p>
            • Any refunds issued in case of an early departure or a no-show are
            on Red Umbrella Holidays and supplier's discretion.
          </p>
          <p>
            • We are eligible to ask you to cover the charges for all the
            probable losses or costs and damage with the expenses incurred by us
            due to a cancellation made by you.
          </p>
          <p>
            You must call Red Umbrella Holidays in case you face any issues in
            check-in or check out.
          </p>
          <p>
            <strong>Payment, Taxes, and Fees</strong>
          </p>
          <p>
            To facilitate your hotel bookings, your credit/ debit card may be
            charged with taxes &amp; fees. The charges are for an approximate
            amount required to recover the price that we paid to the hotel to
            get a confirmed booking. Taxes owed by the hotel without any
            limitations are sales, occupancy, room tax, and VAT. Some
            destinations and cities impose a government tax that cannot be
            directly paid to the authorities and must be collected by the hotel
            to pay to the government. It varies from the amount charged to you.
            We retain the balance of taxes and fees as compensation to serve
            you, and our profit on making the booking for you. For any new
            reservations, we charge a booking service fee - up to{" "}
            <strong>$35 depending upon the hotel category</strong>.
          </p>
          <table
            className="tble-hotel"
            border={1}
            style={{
              width: "100%",
              color: "#fff",
              marginBottom: 20,
              border: "1px solid lightgray",
              marginTop: 10,
            }}
          >
            <tbody>
              <tr>
                <td>Hotel Rating</td>
                <td>Service Fee</td>
              </tr>
              <tr>
                <td> &gt; 2 **</td>
                <td>$20</td>
              </tr>
              <tr>
                <td>3***</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>4 ****</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>5 *****</td>
                <td>$35</td>
              </tr>
            </tbody>
          </table>
          <p>
            For any changes or cancellations, or refunds of a hotel reservation,{" "}
            <strong>
              the service fee of Red Umbrella Holidays will remain
              non-refundable
            </strong>{" "}
            along with charges applicable by the hotel as a penalty fee for
            cancellation as per their policy.
          </p>
          <p>
            We do not collect or remit taxes that are paid to the taxing
            authorities. The listed suppliers are the vendors, and they apply
            the taxes that are billed to us and paid to them directly from your
            booking payment. We are not the co-vendors or have an association
            with them although we reserve your bookings with them. The taxes
            levied by us change depending on the destination of the booking
            made. For a hotel located in a certain jurisdiction, we charge your
            credit/ debit card with taxes required to be collected and remitted
            to the location's jurisdiction as taxes owed on the amount we retain
            for providing our services.
          </p>
          <p>
            Currency conversion is in approximate exchange rates, and while
            booking for you, it is used as an approximate parameter and not the
            exact amount. The tax rates are also dependent on room charges. The
            hotel collects payments on per night per room basis; and is
            accessible by the guests regularly. The incidentals include meals,
            parking, movies, games, and phone calls.
          </p>
          <p>
            <strong>Source of Inventory</strong>
          </p>
          <p>
            As a booking agent, we do not have the responsibility for errors
            except for an error made by our travel experts. The Terms &amp;
            Conditions are under US law. Unless the hotel supplier states
            otherwise, the contract is governed by the law of the place where
            you avail of the services, else the US law prevails if a dispute
            arises. In such a case, you will deal with the Illinois Court
            according to the Terms of this Agreement in the Illinois Court.
          </p>
          <p>
            <strong>Cancelation of Hotel and Its Terms</strong>
          </p>
          <p>
            To request a cancelation or alteration in the booking made, you can
            write to us at support@redumbrella.com. The request will only be
            considered if we receive an email stating your request, and then
            only we will initiate the process. After you accept the mentioned
            Cancelation Terms &amp; Conditions mentioned in this Agreement. In
            case you have booked a non-refundable hotel, our sales agent will
            inform you when they are booking for you.
          </p>
          <p>
            <strong>Intellectual Property</strong>
          </p>
          <p>
            Redumbrellaholidays.com, our software, the design, the graphics,
            layout, and content published on it are owned or licensed by Red
            Umbrella Holidays. As a visitor of the website, we are allowing you
            to view or read the content via a browser. Any other use of all
            these aspects like making a copy, selling, distributing, reposting,
            modifying, or reusing is strictly prohibited.
          </p>
          <p>
            If you attempt to do any of the activities mentioned above, it is a
            breach of the Agreement, and we will have to ban you from using our
            Website. The right, license, and permission to use our Intellectual
            Property lie only with us.
          </p>
          <p>
            {" "}
            <strong>Prohibited Activity</strong>
          </p>
          <p>
            Use Red Umbrella Holidays responsibly. All the information provided
            is proprietary to us or our authorized sellers. You are allowed to
            make copies of the travel itinerary if you agree that you will not
            use it or our software and services in any other form.
          </p>
          <p>
            <strong> You agree not that you won't:</strong>
          </p>
          <p>
            {" "}
            • Initiate a fraud or false inquiry; or book because you anticipated
            demand;
          </p>
          <p>
            {" "}
            • Use a robot, spider, scraper, or an automated/ manual process to
            monitor, access, or copy information on our website without our
            consent;
          </p>
          <p>
            {" "}
            • Share false or misleading information on the Website or with our
            travel experts;
          </p>
          <p>
            {" "}
            • Make a booking without the intention to use it for the rightful
            purposes;
          </p>
          <p>
            {" "}
            • Use of someone else' name, user ID, or password to inquire without
            seeking their consent;
          </p>
          <p>
            • Post defamatory, unlawful, threatening, obscene, libelous,
            indecent, pornographic, inflammatory or material on Red Umbrella
            Holidays resulting in a civil or criminal proceeding;
          </p>
          <p>
            {" "}
            • Negatively impact the proper functionality of our Website or our
            users;
          </p>
          <p>
            {" "}
            • Fiddle with our operations or make an unauthorized modification;
          </p>
          <p> • Delete our data without seeking our permission;</p>
          <p>
            {" "}
            • Transmit any malware, virus, or disability features on our
            Website;
          </p>
          <p>
            {" "}
            • Frame Red Umbrella Holidays to benefit our competitor website or
            cache it for your commercial use or personal gain;
          </p>
          <p> • Falsify the origin IP address while using the Website;</p>
          <p>
            We have the right to stop your access to our Website if we observe
            that you have violated any of the prohibitions. When we restrict or
            terminate your use, you must cease using Red Umbrella Holidays
            immediately. In case you continue to use our Website, it will be a
            violation and shall constitute an act of trespassing. So we are
            eligible to take legal action against the one we believe is in
            breach of these prohibitions.
          </p>
          <p>
            {" "}
            <strong>Indemnification</strong>
          </p>
          <p>
            You must agree to compensate Red Umbrella Holidays, our suppliers,
            agents, directors, employees if we face any losses, damages, claims,
            demands, recoveries, fines, penalties, or other costs. It includes
            the legal or accounts fees brought to us by a third-party as a
            result of:
          </p>
          <p> • A violation of our terms and conditions;</p>
          <p> • A breach of law or third-party's rights;</p>
          <p> • Use of Red Umbrella Holidays</p>
          <p>
            <strong>Release</strong>
          </p>
          <p>
            If a dispute arises between you and the supplier (airlines and tour
            operators) because of the non-delivery of services offered by our
            supplier; you release us (and our travel experts) from any claims,
            demands, or damages caused.
          </p>
          <p>
            <strong>Your Privacy</strong>
          </p>
          <p>
            We respect your privacy and consider it as an aspect that we must
            protect. Our Privacy Policy looks after your use of our Website and
            has all the information about how we collect and use your
            information. Check all the details under our{" "}
            <a target="_blank" href="/privacy-policy">
              <u>Privacy Policy</u>
            </a>
            .
          </p>
          <p>
            <strong>Disclaimers</strong>
          </p>
          <p>
            You should use this website 'as is' and 'wherever available' at no
            additional cost. However, we have no responsibility for
            misrepresentations or incorrect information, results, or accuracy of
            our data. We are unable to make sure that our content is 100%
            accurate. The airline, tour operators, or other suppliers provide
            you services through our Website. They are independent contractors
            and have no connection with us or our employees. Red Umbrella
            Holidays is not liable for the acts, errors, omissions,
            misrepresentations, breaches, or negligence of the supplier. We will
            not be under any liability to issue refunds if you face a delay,
            cancelation, force majeure, or any activity beyond our control.
          </p>
          <p>
            Our suppliers are liable to pay the damages of damaged equipment
            while browsing or downloading any material from Red Umbrella
            Holidays. We or our suppliers have no responsibility for any
            injuries, losses, claims, damages, or any special, punitive,
            indirect, incidental, or consequential damages caused to you.
          </p>
          <p>
            Our suppliers are not liable to pay an amount exceeding the total
            charges paid by you to make the booking. To raise a claim regarding
            the use of our Website or Services you must raise it within 6-months
            from the time of booking. We are an online travel agency that
            promotes, sells, and accepts bookings on behalf of our suppliers.
            They include airlines, tour operators, and other services. Our
            employees are only responsible for damages permissible to the
            maximum extent as per the law.
          </p>
          <p>
            You cannot include words in your Submissions that do not fall in
            sync with our moral rights. You approve Red Umbrella Holidays has
            the right to publish, use, modify, delete the Submissions made by
            you. We are not liable for the Submissions made by you. We are not
            under an obligation to post your comments and can determine what to
            publish. If you don't agree with these Terms, please do not make any
            Submissions on our Website.
          </p>
          <p>
            The content posted by you on Red Umbrella Holidays including your
            reviews is your responsibility. The content that we prohibit you
            from posting to the Website includes:
          </p>
          <p>
            (i) any material that is unlawful, threatening, libelous, obscene,
            or pornographic and violates rights of privacy or a law.
          </p>
          <p>
            (ii) that may infringe, or violate our or a third party's
            copyrights, trademarks, patent rights, or proprietary rights.
          </p>
          <p>
            You will be held responsible for damages we may face as a violation
            of the mentioned restrictions, or cause us harm as a result of the
            content posted by you. If you submit multiple submissions of the
            same service used we will consider only your most recent review. We
            follow the policy of ‘Claims of Copyright Infringement'.
          </p>
          <p>
            <strong>Notice of Infringing Material</strong>
          </p>
          <p>
            If any information on our website written or published infringes
            your copyright, please send us a notice by writing to us at{" "}
            <a href="mailto:support@redumbrellaholidays.com">
              support@redumbrellaholidays.com
            </a>
            . It is considered under the Digital Millennium Copyright Act (DMCA)
            and includes all the information mentioned above. If you cannot
            provide us with the relevant information for booking, we are not
            liable to process your request. You should consider taking legal
            counsel before making any claims against us. If your claim turns out
            to be wrong, you may be booked under breaking the law.
          </p>
          <p>
            We require the below-mentioned details when you file for Copyright
            Infringement:
          </p>
          <p>
            • The person's signature who has passed the authority to you to act
            as the owner of the copyrighted work.
          </p>
          <p>
            • A document listing the details of copyrighted work for a claim;
          </p>
          <p>• Your details: email ID, house address; phone number</p>
          <p>
            • A statement saying that the claim made by you is in good faith.
            Red Umbrella Holidays has the right to remove the content that
            allegedly infringes without any notice and/ or terminate the
            accounts of users infringing the IPRs.
          </p>
          <p>
            <strong>Linking</strong>
          </p>
          <p>
            If there are links to our Website that lead you to another website
            on the Internet it is for your convenience. We offer options for you
            to explore different travel services like insurance, reviews, and
            more. The inclusion of links does not mean that we endorse the other
            website or its products and services. We have no responsibility for
            the content published on our Website. You choose to browse the link
            and decide if it is free of viruses, worms, Trojan horses, or other
            device destructive components. In case you incur a loss on your
            visit to the linked website, we have no responsibility.
          </p>
          <p>
            <strong>Termination</strong>
          </p>
          <p>
            Red Umbrella Holidays has the right to terminate/modify this
            Agreement at any time without giving you any prior notice. We also
            reserve the right to terminate your access to
            redumbrellaholidays.com, without giving any prior notice.
          </p>
          <p>
            <strong>Our Relationship</strong>
          </p>
          <p>
            You hereby verify that there is no relationship between you and us.
            We are just a travel agency, and together we do not have any
            franchise, partnership, or joint venture. You agree that in no way,
            a relationship is feasible between us under these Terms and
            Conditions.
          </p>
          <p>
            <strong>Notices</strong>
          </p>
          <p>
            Our email IDs mentioned on our contact page are for legal purposes.
            If you have any complaints or feedback about Red Umbrella Holidays
            and our services, please submit them to{" "}
            <a href="mailto:support@redumbrellaholidays.com">
              support@redumbrellaholidays.com
            </a>{" "}
            and{" "}
            <a href="mailto:sales@redumbrellaholidays.com">
              sales@redumbrellaholidays.com
            </a>
            . Our travel experts will assist you with your concerns. When a
            complaint or feedback is submitted, you may experience a delay in
            receiving a response as we re-route it through the right source.
          </p>
          <p>
            <strong>General</strong>
          </p>
          <p>
            Terms and Conditions are bound by legal authority. Only particular
            provisions will strike out from the same. The remaining part will be
            completely enforceable and valid. At our discretion, if we decide
            not to take action against a violation made does not mean a waiver
            of the violated terms. Also, it does not change our rights to take
            action as a response to the violations.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>
              RedUmbrella Holidays TERMS &amp; CONDITIONS – CAR RENTAL
            </strong>
          </p>
          <p>
            RedUmbrella Holidays is thankful for your ongoing confidence in us.
            In keeping with that, below are the important particulars you should
            review when reserving a car via our app or website.
          </p>
          <p>
            <strong>Fees and Taxes:</strong>
          </p>
          <p>
            In accordance with US regulations, we charge a Value Added Tax (VAT)
            of 14.5% on our car rentals as applicable. Please carefully read our
            Terms and Conditions and visit our Taxes and Fees page for more
            information.
          </p>
          <p>
            <strong>Age Restrictions:</strong>
          </p>
          <p>
            ● The minimum age required to reserve a rental car with us is 19
            years. In the same way, particular limitations might apply depending
            on the type of car selected.
          </p>
          <p>
            ● Young driver surcharge may apply to drivers under the age of 25.
          </p>
          <p>
            ● Young driver surcharge will be charged for rentals starting in
            Maui, Newark, and Vernal, where the minimum age is 21.
          </p>
          <p>
            <strong>Additional Driver:</strong>
          </p>
          <p>
            With the renter's permission, another person or people may drive the
            rental car. In this scenario, the renter bears full responsibility
            for any issues and damages that may arise. Depending on the car
            category and rental policies, additional drivers may be subject to
            certain add-on fees.
          </p>
          <p>
            <strong>Driving Licence:</strong>
          </p>
          <p>
            The driver's license needs to be valid for at least 1 year from the
            date of the car rental booking. At the time of rental, all renters
            must show a valid driver's license (passport and driver's license
            from another country or the United States accompanied by both).
          </p>
          <p>
            <strong>International Renters:</strong>
          </p>
          <p>
            International renters are defined as those whose primary address is
            located outside of the United States. The address on the renter's
            valid driver's license will be used to determine where they
            primarily reside. RedUmbrella Holidays maintains the right to impose
            rules that are unique to international renters and do not apply to
            US nationals. Foreign renters must fulfill all of the prerequisites
            before picking up their rental:
          </p>
          <p>● A valid driver's license from the nation of origin.</p>
          <p>
            ● A valid passport with the same name as the driver's license is
            necessary.
          </p>
          <p>
            ● When renting a vehicle, it is required to have a working phone
            number available in case of an emergency.
          </p>
          <p>
            <strong>Cash Rental Deposit:</strong>
          </p>
          <p>
            Depending on the type of car selected, a car rental deposit might be
            required as a precaution. Please refer to the booking details before
            reserving your rental car on RedUmbrella Holidays for additional
            information.
          </p>
          <p>
            <strong>Accepted Cards:</strong>
          </p>
          <p>
            Accepted credit cards include American Express, Visa, MasterCard,
            and Debit cards as well as major prepaid cards. Before making a
            reservation, carefully read our Terms and Conditions for accurate
            information on the cards that are accepted.
          </p>
          <p>
            <strong>Vehicle Display and Availability:</strong>
          </p>
          <p>
            The cars that are shown for each car class on the RedUmbrella
            Holidays website or any of its partner websites are merely samples
            of the kinds of cars that can be rented. We are unable to guarantee
            the availability of any particular car when it comes time to pick it
            up. This is exclusively because of changes in the fleet,
            availability, location, timing, or other similar elements.
          </p>
          <p>
            <strong>Insurances:</strong>
          </p>
          <p>
            According to applicable US law, a number of insurances, such as RSA,
            Rental Liability Insurance, Supplemental Liability Insurance, and
            Deductible Loss Damage, may be assessed. Please review the booking
            details to obtain specific information on insurance policies before
            renting a car.
          </p>
          <p>
            Mexico Insurance: RedUmbrella Holidays makes it possible for you to
            get car protection while visiting Mexico. Insurance for Mexico must
            be obtained prior to travel. Only those Mexican states and cities
            closest to the borders with Arizona and California are eligible for
            this insurance coverage. For a full day, rates begin at $31.00 plus
            taxes. It is not allowed for any other cars to enter Mexico.
            Moreover, Mexico insurance does not cover car rentals from Vernal,
            Newark, or Maui.
          </p>
          <p>
            <strong>One-Way Rentals:</strong>
          </p>
          <p>
            Depending on the type of car, availability, and relevant laws and
            regulations, one-way rentals are only offered at a few designated
            locations. Only intrastate travel within the state of Florida is
            permitted for one-way car rentals that start in Florida. The cost of
            a one-way rental drop varies according to the local laws and
            policies that apply.
          </p>
          <p>
            ● Rentals from Newark to JFK Airport are offered in one way, but
            there will be a drop fee.
          </p>
          <p>
            ● Rentals going from Maui to Vernal might not be offered the one-way
            option.
          </p>
          <p>
            Before making a reservation, please ask our booking representative
            about all applicable fees and availability.
          </p>
          <p>
            <strong>Fees/Cancellation:</strong>
          </p>
          <p>
            Unless otherwise specified, all fees—including taxes, service fees,
            surcharges, and car rental costs—are non-refundable. You will
            forfeit your entire deposit if you need to cancel your car rental
            reservation.
          </p>
          <p>
            You will need to present the credit card or debit card that you used
            to make your car rental reservation when you pick it up. You must
            complete your reservation at the location of pick-up, and we might
            waive the cancellation fee if the card you used to book your car
            rental is lost, stolen, or replaced by the card issuer and cannot be
            shown at the time of rental.
          </p>
          <p>
            <strong>Reservations and Changes:</strong>
          </p>
          <p>
            Reservations for RedUmbrella Holidays car rentals are not
            refundable. If any changes are required, kindly cancel and rebook
            your rental car on RedUmbrella Holidays.
          </p>
          <p>
            If you make any changes to the pick-up or drop-off dates or location
            for a RedUmbrella Holidays car rental, the original reservation will
            be canceled and a new one will be made at the current rental rates.
          </p>
          <p>
            Depending on the selected car category, availability, and other
            similar factors, optional products (insurance coverage, car seats,
            GPS, etc.) may be added to or canceled without incurring additional
            surcharges.
          </p>
          <p>
            RedUmbrella Holidays Car Rentals are governed by all RedUmbrella
            Holidays Terms and Conditions as well as the specific rental
            guidelines of the associated suppliers. This covers returns made
            early or late, extensions, and reservations made by third parties
            not made through the RedUmbrella Holidays app or website.
          </p>
          <p>
            <strong>Other Services:</strong>
          </p>
          <p>
            <strong>Child Safety Seats:</strong> By state law, children who are
            eight years old and under and/or who weigh less than eighty pounds
            must use a child restraint system in California. In the same way,
            children under five in Arizona need to be buckled up in child safety
            seats. Drivers with kids have to abide by the state's and the city's
            current child passenger safety regulations. Rentals based in Vernal
            do not offer child safety seats.
          </p>
          <p>
            RedUmbrella Holidays disclaims all liability for any assumptions
            that might result from neglecting to abide by the necessary rules
            and regulations regarding child safety.
          </p>
          <p>
            <strong>Restriction of Use:</strong>
          </p>
          <p>
            Geographic car rentals are only good in the following states:
            Arizona, California, Oklahoma, Texas, Colorado, Idaho, Kansas,
            Nebraska, Oregon, South Dakota, Nevada, New Mexico, Utah,
            Washington, and Wyoming.
          </p>
          <p>
            Only driving within the state of Florida is permitted for car
            rentals that originate in Florida.
          </p>
          <p>
            Car rentals originating in the state of Texas can only be driven in
            the states of Arkansas, Louisiana, New Mexico, Oklahoma, and Texas.
          </p>
          <p>
            Car rentals originating in the state of Illinois can only be driven
            in the states of Illinois, Wisconsin, Iowa, Indiana, Missouri, and
            Kentucky.
          </p>
          <p>
            You can drive rental cars into Canada from the state of New Jersey.
            However, it takes a passport to enter Canada. Drivers with Canadian
            passports are prohibited from driving rental cars into and out of
            Canada by customs and excise laws.
          </p>
          <p>You can only drive rental cars from Maui on public roads.</p>
          <p>
            Only within the state of Utah may one drive a rental car from
            Vernal, Utah. Outside of Utah, travel is allowed with prior
            authorization. There is a 300 mile daily limit on mileage when
            driving outside of Utah, and each additional mile costs $0.25.
          </p>
          <p>
            You can drive a car rental from RedUmbrella Holidays into Mexico,
            but only if you have Mexico insurance. For more details, refer to
            the section above on Mexico insurance.
          </p>
          <p>
            You are only allowed to drive into British Columbia and Canada with
            a rental car from Washington. It is forbidden in every other
            province.
          </p>
          <p>
            When visiting Mexico, RedUmbrella Holidays car rentals are only
            allowed in the states and cities closest to the borders of
            California and Arizona as long as Mexico Insurance is obtained. For
            a list of the approved coverage areas, please refer to the Mexico
            Insurance section.
          </p>
          <p>
            Note: You cannot enter Mexico with a car that you rented in Vernal,
            Newark, or Maui.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>
              RedUmbrella Holidays TERMS &amp; CONDITIONS – CRUISE
            </strong>
          </p>
          <p>
            <strong>PRICING INFORMATION</strong>
          </p>
          <p>
            Unless otherwise specified, all prices are per person, in US
            dollars, and based on double occupancy. They do not include
            government fees, taxes, port charges, or airfare. There is a $35*
            non-refundable processing fee per booking; this is not included in
            the pricing. The cruise company reserves the right to charge a fuel
            surcharge, which is not included in the listed price and must be
            paid prior to departure. Before boarding, special-rate passengers
            must present a government-issued ID (passport, birth certificate, or
            driver's license) proving their address or age. Although the website
            makes every effort to present complete information, it cannot be
            held responsible for errors or omissions in content or pricing. The
            ship, stateroom, departure date, and departure city determine the
            exact price.
          </p>
          <p>
            Upgrades and offers are limited, subject to availability, and can be
            withdrawn at any time. A coupon code or promotion that is currently
            in effect only applies to the $35 RedUmbrella Holidays service fee.
            They cover specific days, vessels, itineraries, and stateroom types.
            Reservations made over the phone with credit cards are possible, but
            they are limited and require conversion to US dollars. Upgrades are
            subject to capacity limits and cannot be combined with group pricing
            or other promotions. Any information may change at any time without
            prior notice.
          </p>
          <table
            className="tble-hotel"
            border={1}
            style={{
              width: "100%",
              color: "#fff",
              marginBottom: 20,
              border: "1px solid lightgray",
              marginTop: 10,
            }}
          >
            <tbody>
              <tr>
                <td>Days Prior To Start Date</td>
                <td>Cancellation Fee (Per Person)</td>
              </tr>
              <tr>
                <td>91+ days</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>61 - 90 days</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>46 - 60 days</td>
                <td>50% of the fare deposit</td>
              </tr>
              <tr>
                <td>31 - 45 days</td>
                <td>75% of the fare deposit</td>
              </tr>
              <tr>
                <td>0 - 30 days</td>
                <td>100% of the fare deposit</td>
              </tr>
            </tbody>
          </table>
          <p>
            Please review the balance amount and due date on your booking
            confirmation email to ensure you pay by the deadline. If the
            remaining balance is not paid on time, there may be late payment
            penalties, and/or the reservation may be cancelled.
          </p>
          <p>
            <strong>PASSENGER NAMES</strong>
          </p>
          <p>
            Before making a reservation, you must confirm and verify the
            passenger names you provide on RedUmbrella Holidays. You have to
            make sure that everything matches, including the spelling of your
            first, middle, and last names on your passport or other official
            documents. If you require any changes to the booking information,
            you may be subject to additional fees from both the cruise line and
            operator. Contact us as soon as you can to apply any changes to your
            reservation.
          </p>
          <p>
            <strong>BAGGAGE ALLOWANCES</strong>
          </p>
          <p>
            The cruise lines' policies govern the amount of baggage allowed.
            Please visit the relevant cruise line's website for the most
            up-to-date information. If baggage allowances change, RedUmbrella
            Holidays is not obligated to give you updated information. You are
            entirely liable for checking the website of the cruise line or
            operator you have a reservation with for any updates regarding
            baggage terms. Please be advised that there is a limit to the
            quantity of luggage you can bring on a cruise. Before making a
            reservation, please carefully read the baggage allowance policy of
            the cruise line.
          </p>
          <p>
            <strong>SPECIAL REQUIREMENTS</strong>
          </p>
          <p>
            For any questions you may have regarding special meals, medical
            concerns, or traveling with a baby, please contact our Cruise
            Experts by phone at 1-833-914-2482 or via email at
            support@RedUmbrellaHolidays.com. Our cruise specialists are
            available to talk with you about your requirements and answer any
            queries you might have about your specifications. They will directly
            inform the cruise line of your special requirements.
          </p>
          <p>
            <strong>CANCELLATIONS &amp; REFUNDS</strong>
          </p>
          <p>
            Refundable rates apply to the deposit amount paid for the cruise
            booking. This must be duly paid before the deadline. This deposit
            amount does not include processing fees. This promotion is not
            applicable to charter sailings or group reservations made under
            contract. Instead of contacting the cruise provider, get in contact
            with RedUmbrella Holidays to change or cancel a reservation. There
            might be no partial or complete refund for the cruise. The number of
            passengers in the reserved cruise package cannot be changed once the
            booking is confirmed. Unless otherwise specified, there is a service
            charge imposed by RedUmbrella Holidays and a cancellation fee
            charged by the cruise provider when canceling a cruise package.
            After the trip has commenced, changes can't be accepted.
          </p>
        </div>
      </div>
      {isMobile ? <Section4 /> : ""}
      {isMobile ? <Footer /> : <FooterDesktop />}
      {isMobile ? <Copyright /> : ""}
    </>
  );
};
export default TermsAndCondition;
