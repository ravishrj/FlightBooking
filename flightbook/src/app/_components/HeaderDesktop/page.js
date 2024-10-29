// const Header=()=>{
//  return <header>
//  {/* Navigation panel*/}
//  <style
//    dangerouslySetInnerHTML={{
//      __html:
//        "\n    @media only screen and (max-width: 991px) {\n        /*nav ul li:nth-child(7) {display:none;*/\n        }\n    }\n"
//    }}
//  />
//  {/*Navigation*/}
//  <nav>
//    <section className="logo">
//      <a href="/" id="lnk_RUHUS_Logo_URL" title="Red Umbrella Holidays">
//        <img src="/Content/images/logo.png" alt="Red Umbrella" />
//      </a>
//    </section>
//    <ul>
//      <li>
//        <a href="/" title="Home">
//          Home
//        </a>
//      </li>
//      <li>
//        <a href="/vacations" title="vacations">
//          Vacations
//        </a>
//      </li>
//      <li>
//        <a href="/flight" title="flights">
//          Flights
//        </a>
//      </li>
//      <li>
//        <a href="/hotel" title="hotels">
//          Hotels
//        </a>
//      </li>
//      <li>
//        <a href="/car-hire" title="cars">
//          Cars
//        </a>
//      </li>
//      <li>
//        <a href="/cruise" title="cars">
//          Cruises
//        </a>
//      </li>
//      <li>
//        <a href="javascript:;" title="destination">
//          Destinations <i className="fa fa-angle-down" aria-hidden="true" />
//        </a>
//        <ul className="no-sub">
//          <li>
//            <a href="/book-flights/orlando-orl"> Orlando</a>
//          </li>
//          <li>
//            <a href="/book-flights/las-vegas-las"> Las Vegas</a>
//          </li>
//          <li>
//            <a href="/book-flights/fort-lauderdale-fll"> Fort Lauderdale</a>
//          </li>
//          <li>
//            <a href="/book-flights/new-york-nyc"> New York</a>
//          </li>
//          <li>
//            <a href="/book-flights/tampa-tpa"> Tampa</a>
//          </li>
//          <li>
//            <a href="/book-flights/atlanta-atl"> Atlanta</a>
//          </li>
//          <li>
//            <a href="/book-flights/los-angeles-lax"> Los Angeles</a>
//          </li>
//          <li>
//            <a href="/book-flights/denver-den"> Denver</a>
//          </li>
//          <li>
//            <a href="/book-flights/chicago-chi"> Chicago</a>
//          </li>
//          <li>
//            <a href="/book-flights/san-juan-sju"> San Juan</a>
//          </li>
//        </ul>
//      </li>
//      <li className="vacation-txt">
//        <a href="javascript:;">
//          Packages <i className="fa fa-angle-down" aria-hidden="true" />
//        </a>
//        <div className="vac">
//          <div className="submenu-vacation">
//            <div className="region-sub">
//              <div className="reg">
//                <strong>Region</strong>
//              </div>
//              <div className="sub-reg">
//                <a href="/region/caribbean">Caribbean</a>
//                <a href="/region/florida">Florida</a>
//                <a href="/region/middle-east">Middle East</a>
//                <a href="/region/europe">Europe</a>
//                <a href="/region/africa">Africa</a>
//                <a href="/sitemap#more-region">See All</a>
//              </div>
//            </div>
//            <div className="cities-sub">
//              <div className="reg">
//                <strong>Cities</strong>
//              </div>
//              <div className="sub-cities">
//                <a href="/vacation/barbados">Bridgetown</a>
//                <a href="/vacation/london">London </a>
//                <a href="/vacation/miami">Miami</a>
//                <a href="/vacation/orlando">Orlando</a>
//                <a href="/vacation/paris">Paris</a>
//                <a href="/vacation/barcelona">Barcelona</a>
//                <a href="/vacation/las-vegas">Las Vegas</a>
//                <a href="/vacation/dubai">Dubai</a>
//                <a href="/vacation/cape-town">Cape Town</a>
//                <a href="/vacation/cancun">Cancun</a>
//              </div>
//            </div>
//          </div>
//        </div>
//      </li>
//      <li>
//        <a href="javascript:;">
//          Experiences <i className="fa fa-angle-down" aria-hidden="true" />
//        </a>
//        <ul>
//          <li>
//            <a href="javascript:;">Travel By Theme</a>
//            <ul>
//              <li>
//                <a href="/flights-reservation/business-class-flights">
//                  Business Class
//                </a>
//              </li>
//              <li>
//                <a href="/flights-reservation/first-class-flights">
//                  First Class
//                </a>
//              </li>
//              <li>
//                <a href="/flights-reservation/lgbt-flights">LGBT Travel</a>
//              </li>
//              <li>
//                <a href="/flights-reservation/military-flights">
//                  Military Travel
//                </a>
//              </li>
//              <li>
//                <a href="/flights-reservation/premium-economy-flights">
//                  Premium Economy
//                </a>
//              </li>
//              <li>
//                <a href="/flights-reservation/senior-flights">Senior Travel</a>
//              </li>
//              <li>
//                <a href="/flights-reservation/student-flights">
//                  Student Travel
//                </a>
//              </li>
//            </ul>
//          </li>
//          <li>
//            <a href="javascript:;">Type Of Flights</a>
//            <ul className="tof">
//              <li>
//                <a href="/flights-reservation/domestic-flights">
//                  Domestic Flights
//                </a>
//              </li>
//              <li>
//                <a href="/flights-reservation/last-minute-flights">
//                  Last-minute Flights
//                </a>
//              </li>
//              <li>
//                <a href="/flights-reservation/international-flights">
//                  International Flights
//                </a>
//              </li>
//              <li>
//                <a href="/flights-reservation/one-way-flights">
//                  One Way Flights
//                </a>
//              </li>
//              <li>
//                <a href="/flights-reservation/round-trip-flights">
//                  Round Trip Flights
//                </a>
//              </li>
//            </ul>
//          </li>
//        </ul>
//      </li>
//      <li className="show">
//        <h2 className="callUs">
//          <span>Call Us At</span>
//          <a className="call-phone-number" href="javascript:void(0);">
//            1-833-914-2482 <img src="/Content/images/phone.png" />
//          </a>
//          <b>7am - 5pm EST</b>
//        </h2>
//      </li>
//    </ul>
//  </nav>
//  {/*Navigation*/}
//  <link
//    href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700&display=swap"
//    rel="stylesheet"
//  />
//  <style
//    dangerouslySetInnerHTML={{
//      __html:
//        "\n        /*.bg-black{\n            position:absolute; width:100%; height:100%; background:#00006b;\n        }*/\n        "
//    }}
//  />
//  <div className="currency-exchange">
//    <a
//      href="JavaScript:void(0)"
//      id="selectCurrency"
//      className="acc_filter"
//      data-toggle="collapse"
//      data-target="#currency-list"
//    >
//      <i>
//        <img src="/Content/images/USD.jpg" alt="logo" />
//      </i>
//      USD
//      <i className="fa fa-angle-down" aria-hidden="true" />
//    </a>
//    <ul id="currency-list" className="collapse" style={{ display: "none" }}>
//      <li id="li-curr-USD">
//        <a
//          href="JavaScript:void(0)"
//          onclick="return UpdateHomePageCurrency('USD');"
//        >
//          <img src="/Content/images/USD.jpg" alt="logo" />{" "}
//          <span className="currency_bg">
//            United States - English{" "}
//            <img
//              src="/Content/images/dlr.png"
//              alt="logo"
//              style={{ width: 13 }}
//            />
//          </span>
//        </a>
//      </li>
//      <li id="li-curr-CAD">
//        <a
//          href="JavaScript:void(0)"
//          onclick="return UpdateHomePageCurrency('CAD');"
//        >
//          <img src="/Content/images/CAD.jpg" alt="logo" />{" "}
//          <span className="currency_bg">
//            Canada - English{" "}
//            <img
//              src="/Content/images/cdlr.png"
//              alt="logo"
//              style={{ width: 13 }}
//            />
//          </span>
//        </a>
//      </li>
//    </ul>
//  </div>
//  <input type="hidden" id="hdnBannerImageCountrySelector" defaultValue="USD" />
//  <div className="bg-black" />
//  <div className="bannerText">
//    <h1>
//      <span>TAILOR-MADE HOLIDAYS OF A LIFETIME</span> 100% flexible tours
//      planned by experts to 70+ destinations
//    </h1>
//  </div>
//  <img
//    id="homepagebanner_RUH"
//    src="/Content/images/banner-1.jpg"
//    alt="Red Umbrella"
//    className="heroBanner"
//  />
// </header>

// }
// export default Header;

"use client"
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
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowWidth();


  // useEffect(() => {
  //   if (width <= 768) {
  //     setIsMobile(true);
  //   } else if (width > 768) {
  //     setIsMobile(false);
  //   }
  // }, []);

  useEffect(() => {
    console.log(isMobile, "is Mobile from desktop navbar");
    const desktopCss = document.createElement("link");
    desktopCss.rel = "stylesheet";
    desktopCss.href = "/US_customcss.css";

    const desktopHomeCss = document.createElement("link");
    desktopHomeCss.rel = "stylesheet";
    desktopHomeCss.href = "/UScustomhome.css";

    const listing = document.createElement("link");
    listing.rel = "stylesheet";
    listing.href = "/listing.css";

    const owlCarausel = document.createElement("link");
    owlCarausel.rel = "stylesheet";
    owlCarausel.href = "/owlCarausel.css";

    const confirmation = document.createElement("link");
    confirmation.rel = "stylesheet";
    confirmation.href = "/Content/css/confirmation.css";

    const flight_popup = document.createElement("link");
    flight_popup.rel = "stylesheet";
    flight_popup.href = "/Content/css/flight-pop.css";

    const e28 = document.createElement("link");
    e28.rel = "stylesheet";
    e28.href = "Content/css/e28";
    const lightPick = document.createElement("link");
    lightPick.rel = "stylesheet";
    lightPick.href = "/Content/css/m.lightpick.css";

   
    if (!isMobile) {
      console.log("Destop View loaded");
      document.head.appendChild(desktopCss);
      document.head.appendChild(desktopHomeCss);
      document.head.appendChild(listing);
      document.head.appendChild(owlCarausel);
      document.head.appendChild(confirmation);
      document.head.appendChild(flight_popup);
      document.head.appendChild(e28);
      document.head.appendChild(lightPick);
      return () => {
        if (document.head.contains(desktopCss)) {
          document.head.removeChild(desktopCss);
        }
        if (document.head.contains(desktopHomeCss)) {
          document.head.removeChild(desktopHomeCss);
        }
        if (document.head.contains(listing)) {
          document.head.removeChild(listing);
        }
        if (document.head.contains( owlCarausel)) {
          document.head.removeChild( owlCarausel);
        }
        if (document.head.contains(confirmation)) {
          document.head.removeChild(confirmation);
        }
        if (document.head.contains(flight_popup)) {
          document.head.removeChild(flight_popup);
        }
        if (document.head.contains(e28)) {
          document.head.removeChild(e28);
        }
        if (document.head.contains(lightPick)) {
          document.head.removeChild(lightPick);
        }
      }
    }
  }, [isMobile]);



  return <header>
    {/* Navigation panel*/}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    @media only screen and (max-width: 991px) {\n        /*nav ul li:nth-child(7) {display:none;*/\n        }\n    }\n"
      }}
    />
    {/*Navigation*/}
    <nav>
      <section className="logo">
        <a href="/" id="lnk_RUHUS_Logo_URL" title="Red Umbrella Holidays">
          <img src="/Content/images/logo.png" alt="Red Umbrella" />
        </a>
      </section>
      <ul>
        <li>
          <a href="/" title="Home">
            Home
          </a>
        </li>
        <li>
          <a href="/vacations" title="vacations">
            Vacations
          </a>
        </li>
        <li>
          <a href="/flight" title="flights">
            Flights
          </a>
        </li>
        <li>
          <a href="/hotel" title="hotels">
            Hotels
          </a>
        </li>
        <li>
          <a href="/car-hire" title="cars">
            Cars
          </a>
        </li>
        <li>
          <a href="/cruise" title="cars">
            Cruises
          </a>
        </li>
        <li>
          <a href="javascript:;" title="destination">
            Destinations <i className="fa fa-angle-down" aria-hidden="true" />
          </a>
          <ul className="no-sub">
            <li>
              <a href="/book-flights/orlando-orl"> Orlando</a>
            </li>
            <li>
              <a href="/book-flights/las-vegas-las"> Las Vegas</a>
            </li>
            <li>
              <a href="/book-flights/fort-lauderdale-fll"> Fort Lauderdale</a>
            </li>
            <li>
              <a href="/book-flights/new-york-nyc"> New York</a>
            </li>
            <li>
              <a href="/book-flights/tampa-tpa"> Tampa</a>
            </li>
            <li>
              <a href="/book-flights/atlanta-atl"> Atlanta</a>
            </li>
            <li>
              <a href="/book-flights/los-angeles-lax"> Los Angeles</a>
            </li>
            <li>
              <a href="/book-flights/denver-den"> Denver</a>
            </li>
            <li>
              <a href="/book-flights/chicago-chi"> Chicago</a>
            </li>
            <li>
              <a href="/book-flights/san-juan-sju"> San Juan</a>
            </li>
          </ul>
        </li>
        <li className="vacation-txt">
          <a href="javascript:;">
            Packages <i className="fa fa-angle-down" aria-hidden="true" />
          </a>
          <div className="vac">
            <div className="submenu-vacation">
              <div className="region-sub">
                <div className="reg">
                  <strong>Region</strong>
                </div>
                <div className="sub-reg">
                  <a href="/region/caribbean">Caribbean</a>
                  <a href="/region/florida">Florida</a>
                  <a href="/region/middle-east">Middle East</a>
                  <a href="/region/europe">Europe</a>
                  <a href="/region/africa">Africa</a>
                  <a href="/sitemap#more-region">See All</a>
                </div>
              </div>
              <div className="cities-sub">
                <div className="reg">
                  <strong>Cities</strong>
                </div>
                <div className="sub-cities">
                  <a href="/vacation/barbados">Bridgetown</a>
                  <a href="/vacation/london">London </a>
                  <a href="/vacation/miami">Miami</a>
                  <a href="/vacation/orlando">Orlando</a>
                  <a href="/vacation/paris">Paris</a>
                  <a href="/vacation/barcelona">Barcelona</a>
                  <a href="/vacation/las-vegas">Las Vegas</a>
                  <a href="/vacation/dubai">Dubai</a>
                  <a href="/vacation/cape-town">Cape Town</a>
                  <a href="/vacation/cancun">Cancun</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="javascript:;">
            Experiences <i className="fa fa-angle-down" aria-hidden="true" />
          </a>
          <ul>
            <li>
              <a href="javascript:;">Travel By Theme</a>
              <ul>
                <li>
                  <a href="/flights-reservation/business-class-flights">
                    Business Class
                  </a>
                </li>
                <li>
                  <a href="/flights-reservation/first-class-flights">
                    First Class
                  </a>
                </li>
                <li>
                  <a href="/flights-reservation/lgbt-flights">LGBT Travel</a>
                </li>
                <li>
                  <a href="/flights-reservation/military-flights">
                    Military Travel
                  </a>
                </li>
                <li>
                  <a href="/flights-reservation/premium-economy-flights">
                    Premium Economy
                  </a>
                </li>
                <li>
                  <a href="/flights-reservation/senior-flights">Senior Travel</a>
                </li>
                <li>
                  <a href="/flights-reservation/student-flights">
                    Student Travel
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;">Type Of Flights</a>
              <ul className="tof">
                <li>
                  <a href="/flights-reservation/domestic-flights">
                    Domestic Flights
                  </a>
                </li>
                <li>
                  <a href="/flights-reservation/last-minute-flights">
                    Last-minute Flights
                  </a>
                </li>
                <li>
                  <a href="/flights-reservation/international-flights">
                    International Flights
                  </a>
                </li>
                <li>
                  <a href="/flights-reservation/one-way-flights">
                    One Way Flights
                  </a>
                </li>
                <li>
                  <a href="/flights-reservation/round-trip-flights">
                    Round Trip Flights
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="show">
          <h2 className="callUs">
            <span>Call Us At</span>
            <a className="call-phone-number" href="javascript:void(0);">
              1-833-914-2482 <img src="/Content/images/phone.png" />
            </a>
            <b>7am - 5pm EST</b>
          </h2>
        </li>
      </ul>
    </nav>
    {/*Navigation*/}
    <link
      href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700&display=swap"
      rel="stylesheet"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        /*.bg-black{\n            position:absolute; width:100%; height:100%; background:#00006b;\n        }*/\n        "
      }}
    />
    <div className="currency-exchange">
      <a
        href="JavaScript:void(0)"
        id="selectCurrency"
        className="acc_filter"
        data-toggle="collapse"
        data-target="#currency-list"
      >
        <i>
          <img src="/Content/images/USD.jpg" alt="logo" />
        </i>
        USD
        <i className="fa fa-angle-down" aria-hidden="true" />
      </a>
      <ul id="currency-list" className="collapse" style={{ display: "none" }}>
        <li id="li-curr-USD">
          <a
            href="JavaScript:void(0)"
            onclick="return UpdateHomePageCurrency('USD');"
          >
            <img src="/Content/images/USD.jpg" alt="logo" />{" "}
            <span className="currency_bg">
              United States - English{" "}
              <img
                src="/Content/images/dlr.png"
                alt="logo"
                style={{ width: 13 }}
              />
            </span>
          </a>
        </li>
        <li id="li-curr-CAD">
          <a
            href="JavaScript:void(0)"
            onclick="return UpdateHomePageCurrency('CAD');"
          >
            <img src="/Content/images/CAD.jpg" alt="logo" />{" "}
            <span className="currency_bg">
              Canada - English{" "}
              <img
                src="/Content/images/cdlr.png"
                alt="logo"
                style={{ width: 13 }}
              />
            </span>
          </a>
        </li>
      </ul>
    </div>
    <input type="hidden" id="hdnBannerImageCountrySelector" defaultValue="USD" />
    <div className="bg-black" />
    <div className="bannerText">
      <h1>
        <span>TAILOR-MADE HOLIDAYS OF A LIFETIME</span> 100% flexible tours
        planned by experts to 70+ destinations
      </h1>
    </div>
    <img
      id="homepagebanner_RUH"
      src="/Content/images/banner-1.jpg"
      alt="Red Umbrella"
      className="heroBanner"
    />
  </header>

}
export default Header;