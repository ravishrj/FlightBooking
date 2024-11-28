"use client";

import Section4 from "../_components/section4/page";
import Footer from "../_components/footer/page";
import Copyright from "../_components/copyright/page";

import { useState, useEffect } from "react";
import Navbar from "../_components/navbar/page";
import NavbarDesktop from "../_components/NavbarDesktop/page";
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

const Privacy_Policy = () => {
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
          <h2>PRIVACY POLICY</h2>
        </div>
        <div className="container">
          <p>
            <b>Red Umbrella Holidays</b> values your trust and treats your
            privacy as our topmost priority and we want you to be aware of the
            ways we collect, use, and disclose your information. Our Privacy
            Policy shares the details of the practices related to the
            information collected by us upon your visit to our website. Your
            access or use to our website via mobile or desktop devices, or avail
            our booking services that you access via our Website and/or contact
            centers.
          </p>
          <p>
            On your visit to our website or when you avail of any of our
            services, you agree to the terms of the Privacy Policy and our{" "}
            <a href="/terms-and-conditions" target="_blank">
              Terms &amp; Conditions
            </a>
            .
          </p>
          <p>
            <strong>PERSONAL INFORMATION</strong>
          </p>
          <p>
            <strong>
              Personal Information Collected By Red Umbrella Holidays
            </strong>
          </p>
          <p>
            <b>When we refer to&nbsp;Personal Information</b>&nbsp;we mean any
            information that identifies you as an individual and makes you an
            identifiable person. It includes:&nbsp;
            <br />
            • Name
            <br />
            • Postal address
            <br />
            • Telephone number
            <br />
            • Email address
            <br />
            • Information about Credit and debit card number
            <br />
            • Social media accounts' details
            <br />
            • Passport number
            <br />• Information to make a booking with us (e.g., your dietary
            preferences or health concerns). With that, the points of departure
            and destinations.
          </p>
          <p>
            In case you share any Personal Information related to someone else
            with us or our service providers for the services to be availed, you
            are required to represent that you have the permission or authority
            to do so. With that authority or permit, you are allowing us to
            further use that information according to this Privacy
            Policy.&nbsp;&nbsp;
          </p>
          <p>
            <strong>
              How Red Umbrella Holidays Collects Personal Information
            </strong>
          </p>
          <p>
            We collect your Personal Information and share it with our Service
            Providers. The ways we do so includes:&nbsp;
          </p>
          <p>
            <b>Via our Services:</b>&nbsp;We collect your Personal Information
            when you subscribe to our newsletters and promotions; or when you
            make a booking or avail of our services through our website.
          </p>
          <p>
            <b>Offline:</b>&nbsp;If you reach out to us through our call centers
            or our customer care service, we collect your Personal Information
            through you offline.
          </p>
          <p>
            <b>Via Social Media:</b>&nbsp;We might access your social media
            information through the social media platforms that include
            Facebook, Instagram, Twitter, and other third parties to the extent
            the applicable law permits.
          </p>
          <p>
            <strong>
              How Red Umbrella Holidays Uses Your Personal Information
            </strong>
          </p>
          <p>
            We may use Personal Information:
            <br />• To complete and fulfill the booking request that you made or
            service availed. It includes the payment process or any
            communication between you and our agent about the booking, to
            provide you with our customer service if required. We also use the
            information on your passport to complete your travel bookings.{" "}
            <br />
            • To respond to your inquiries and fulfill the requests made by you.
            To our promotional newsletters to you via emails. <br />
            • To send administrative information to you. It may include details
            about the Services and changes incorporated to our terms,
            conditions, or our booking policies.
            <br />
            • To send marketing communications of your interest, as per the
            applicable law.
            <br />
            • To deliver a personalized experience on the Services and
            tailor-made offers for you.
            <br />
            • To enhance business and mitigate data analysis, risk analysis, and
            fraud prevention.&nbsp;
            <br />
            • To enhance our efforts to improve or modify our Services and
            marketing by identifying your online usage trends. This way we
            further enhance our campaigns.&nbsp;
            <br />
          </p>
          <p>
            As we believe necessary or appropriate:&nbsp; <br />
            (a) as per the applicable US laws;&nbsp;
            <br />
            (b) to comply with our legal process;&nbsp;
            <br />
            (c) to respond to requests from US authorities;&nbsp;
            <br />
            (d) to enforce our terms and conditions rightfully;
            <br />
            (e) to ensure that we meet our operations or interests;&nbsp;
            <br />
            (f) to protect the rights, privacy, and safety of our corporate
            <br />
            (g) to limit the damages that we may sustain.
          </p>
          <p>
            <strong>How Your Personal Information Might Get Disclosed</strong>
            <br />
            • Our service providers: Their Privacy Practices are not under our
            control, and the Personal Information that we disclose to them is,
            and its usage is under their security practices. So you must review
            their privacy policy as well.&nbsp;
            <br />
            • Our parent company, subsidiaries, our joint ventures: Our
            companies are directly under the common control of Red Umbrella
            Holidays and follow the same Policy. Your Personal Information is
            jointly used by these entities as well.&nbsp;
            <br />
            • Our Travel Suppliers: It includes our suppliers like airlines and
            hotels. We provide them with your Personal Information for them to
            efficiently deliver the services booked by you using.
            <br />
            • Other Companies: These companies are the ones we partnered with to
            provide you with the required Services. It includes airline
            consolidators or aggregators, other travel agencies to access their
            inventories, and Travel Insurance suppliers.
            <br />
            • Our third-party service providers like website hosting companies
            review websites (like Trustpilot), data analytics companies, payment
            gateways, order fulfillment, and customer service, email delivery,
            auditing, and other services. The shared information is subject to
            confidentiality obligations.&nbsp;
            <br />• Your social media accounts have the settings on which you
            can decide whether we can share your information present there in
            connection with your social activity. If you disable it, we won't
            share your Personal Information or you have the choice to not
            connect your social media account with Red Umbrella Holidays.
          </p>
          <p>
            <strong>OTHER INFORMATION</strong>
          </p>
          <p>
            We refer to&nbsp;<b>Other Information</b>&nbsp;that is not directly
            revealing your identity or relate you to anyone. This includes:{" "}
            <br />
            • Your browser information
            <br />
            • Your device information
            <br />
            • The information collected through cookies, pixel tags, and
            analytics technologies
            <br />
            • Your geographic information
            <br />• Any other aggregated information
          </p>
          <p>
            <b>Using cookies:</b>&nbsp;Cookies are information pieces that are
            stored directly on the device that you use. Cookies are used to
            collect information like the browser type, time spent on a
            particular webpage on the Red Umbrella Holiday's website, pages
            visited, language preference, and other anonymous traffic
            data.&nbsp;
          </p>
          <p>
            <b>Using pixel tags:</b>&nbsp;Pixel tags are to track the user's
            actions and measure the impact of the marketing campaign. This also
            includes compiling the statistics about usage and the response rate
            of the customer.
          </p>
          <p>
            <b>IP Address:</b>&nbsp;The number assigned to your computer by your
            ISP (Internet Service Provider). Your IP address is derived when you
            log in on our server files and to know the time of the visit and
            number of page (s) visited on Red Umbrella Holidays. It is an
            automated standard practice followed by most of the websites to know
            the usage levels, diagnose server issues, and administer the
            Services. This also provides your approximate location.
          </p>
          <p>
            <b>Physical Location:</b>&nbsp;We use your physical location to
            provide you with personalized location-based content and serve you
            with geo-targeted advertisements. You may disable this feature using
            your device settings.
          </p>
          <p>
            <b>From you:</b>&nbsp;We seek your information regarding the
            preferred means of communication and any special travel requests
            (example: dietary restriction or health concerns.) You provide this
            information to us voluntarily and choose to not share the same with
            us.
          </p>
          <p>
            <strong>&nbsp;THIRD-PARTY SERVICES</strong>
            <br />
            • Under this Privacy policy, we do not address the practices
            followed by third parties that are linked to us or our website. It
            includes Facebook likes or share buttons. Any links on Red Umbrella
            Holidays do not imply any sort of endorsements.&nbsp;
            <br />• We are not responsible if Facebook, Google, Microsoft, or
            Apple collect, use, or disclose your data including the Personal
            Information shared with us while you were using these
            applications.&nbsp;
          </p>
          <p>
            <strong>THIRD-PARTY ADVERTISERS</strong>
          </p>
          <p>
            We are a travel agency and we use third-party advertising companies
            to serve our advertisements. These advertisements are delivered to
            you depending on your access and use of the devices. For this,
            third-party companies may place cookies in your browser and
            recognize your devices like a mobile or a laptop. To know more,
            please visit,
            <a
              rel="nofollow"
              href="http://www.networkadvertising.org/managing/opt_out.asp"
              target="_blank"
            >
              http://www.networkadvertising.org/managing/opt_out.asp
            </a>
            &nbsp;and&nbsp;
            <a
              rel="nofollow"
              href="https://optout.aboutads.info/"
              target="_blank"
            >
              https://optout.aboutads.info/
            </a>
            .
          </p>
          <p>
            <strong>SECURITY</strong>
            <br />
            Under security, we seek measures to protect Personal Information
            under our technical, organizational, and administrative
            organization. However, unfortunately, no data transmission or
            storage system is known to be 100% secure. So, if you have any
            reason to believe that your interaction with us is not safe or we
            have breached your privacy, please immediately notify us at{" "}
            <a className="call-phone-number" href="tel:1-833-914-2482">
              1-833-914-2482
            </a>{" "}
            or write to us at{" "}
            <a href="mailto:support@redumbrellaholidays.com">
              support@redumbrellaholidays.com
            </a>
            .
          </p>
          <p>
            <strong>CHOICES AND ACCESS</strong>
            <br />
            As a customer of Red Umbrella Holidays, you are free to choose the
            way to use your Personal Information. You can opt-out from receiving
            our marketing interactions by calling us at{" "}
            <a className="call-phone-number" href="tel:1-833-914-2482">
              1-833-914-2482
            </a>{" "}
            or by writing to us at{" "}
            <a href="mailto:support@redumbrellaholidays.com">
              support@redumbrellaholidays.com
            </a>
            .
          </p>
          <p>
            <strong>We will comply with your request.</strong>
            <br />
            Please note that if you opt-out of receiving our marketing
            communications, you will still receive the operational messages or
            emails that have all the details of your bookings, and you cannot
            opt-out of that.
          </p>
          <p>
            <strong>RETENTION PERIOD</strong>
            <br />
            Your Personal Information is retained with us till necessary. We
            keep it to fulfill the purpose as outlined under this Policy. Under
            some circumstances, a longer retention period may be required like
            government procedures. In cases like that retaining the data is
            permitted under US law.
          </p>
        </div>
      </div>
      {isMobile ? <Section4 /> : ""}
      {isMobile ? <Footer /> : <FooterDesktop />}
      {isMobile ? <Copyright /> : ""}
    </>
  );
};
export default Privacy_Policy;
