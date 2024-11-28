// "use client"
// import { useState } from "react";
// const Navbar = () => {

//   const [mobMenuActive, setMobMenuActive] = useState(false);
//   const [importantLinkActive,setimportantLinkActive]=useState(false);
//   const [destinationLinkActive,setdestinationLinkActive]=useState(false);

//   const Flights= [
//     { "name": "Orlando", "url": "/book-flights/orlando-orl" },
//     { "name": "Las Vegas", "url": "/book-flights/las-vegas-las" },
//     { "name": "Fort Lauderdale", "url": "/book-flights/fort-lauderdale-fll" },
//     { "name": "New York", "url": "/book-flights/new-york-nyc" },
//     { "name": "Tampa", "url": "/book-flights/tampa-tpa" },
//     { "name": "Atlanta", "url": "/book-flights/atlanta-atl" },
//     { "name": "Los Angeles", "url": "/book-flights/los-angeles-lax" },
//     { "name": "Denver", "url": "/book-flights/denver-den" },
//     { "name": "Chicago", "url": "/book-flights/chicago-chi" },
//     { "name": "San Juan", "url": "/book-flights/san-juan-sju" }
//   ];

//     return   <header className="header">
//         <div className="container">
//           <div className="logo">
//             <a href="/">
//               <img src="/Content/images/logo.png" />
//             </a>
//           </div>
//           <div  className="number-top">
//             <a href="tel:1-833-914-2482" className="mbr">
//               Call NOW <span>7am - 5pm EST</span>
//             </a>
//           </div>
//           <div onClick={() => {
//              setMobMenuActive(prev => !prev);
//           }
//          } className="togglemenu">
//             <span />
//             <span />
//             <span />
//           </div>
//           {/* Mobile Menu */}
//           <div className={`mobilemenu ${mobMenuActive ? "active" : ""}`}>
//             <nav>
//               <a href="javascript:void(0)" onClick={()=>{
//                 setMobMenuActive(
//                   prev=>!prev
//                 );
//               }} className="menuclose">
//                 X
//               </a>
//               <div className="logo-menu">
//                 <a href="/" id="lnk_RUHUS_Logo_URL">
//                   <img src="/Content/images/logo.png" />
//                 </a>
//               </div>
//               <ul>
//                 <li>
//                   <a href="/" title="home">
//                     home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/vacations" title="vacations">
//                     Vacations
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/flight" title="flights">
//                     flights
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/hotel" title="hotels">
//                     hotels
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/car-hire" title="cars">
//                     cars
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/cruise" title="cars">
//                     cruises
//                   </a>
//                 </li>
//                 <li className="dropdown" onClick={()=>{
//                   setdestinationLinkActive(prev=>!prev);
//                 }}>
//                   <a href="javascript:void(0)"className={`${destinationLinkActive ? "submenus" : "submenus selected"}`}>
//                     destinations
//                   </a>
//                   <ul
//                     className="submenu dropdown-menu imp-links tabcontent"
//                     id="destination"
//                     style={{ display: destinationLinkActive ? "block"  : "none" }}
//                   >

//                     {
//                       Flights.map(Flight=>{
//                         return  <li>
//                         <a href={Flight.url}>{Flight.name}</a>
//                       </li>
//                       })
//                     }
//                     {/* <li>
//                       <a href="/book-flights/orlando-orl"> Orlando</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/las-vegas-las"> Las Vegas</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/fort-lauderdale-fll"> Fort Lauderdale</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/new-york-nyc"> New York</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/tampa-tpa"> Tampa</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/atlanta-atl"> Atlanta</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/los-angeles-lax"> Los Angeles</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/denver-den"> Denver</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/chicago-chi"> Chicago</a>
//                     </li>
//                     <li>
//                       <a href="/book-flights/san-juan-sju"> San Juan</a>
//                     </li> */}
//                   </ul>
//                 </li>
//                 <li className="dropdown">
//                   <a href="javascript:void(0)" className="submenus holidaylist">
//                     Packages
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li className="dropdown">
//                       <a href="javascript:void(0)" className="submenus traveltheme">
//                         Top Regions
//                       </a>
//                       <ul className="dropdown-menu">
//                         <li>
//                           <a href="/region/caribbean">Caribbean</a>
//                         </li>
//                         <li>
//                           <a href="/region/florida">Florida</a>
//                         </li>
//                         <li>
//                           <a href="/region/middle-east">Middle East</a>
//                         </li>
//                         <li>
//                           <a href="/region/europe">Europe</a>
//                         </li>
//                         <li>
//                           <a href="/region/africa">Africa</a>
//                         </li>
//                         <li>
//                           <a href="/sitemap#more-region">See All</a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="dropdown">
//                       <a href="javascript:void(0)" className="submenus typeflight">
//                         Top Vacation Cities
//                       </a>
//                       <ul className="dropdown-menu">
//                         <li>
//                           <a href="/vacation/barbados">Bridgetown</a>
//                         </li>
//                         <li>
//                           <a href="/vacation/london">London </a>
//                         </li>
//                         <li>
//                           <a href="/vacation/miami">Miami</a>
//                         </li>
//                         <li>
//                           <a href="/vacation/orlando">Orlando</a>
//                         </li>
//                         <li>
//                           <a href="/vacation/paris">Paris</a>
//                         </li>
//                         <li>
//                           <a href="/vacation/barcelona">Barcelona</a>
//                         </li>
//                         <li>
//                           <a href="/vacation/las-vegas">Las Vegas</a>
//                         </li>
//                         <li>
//                           <a href="/vacation/dubai">Dubai</a>
//                         </li>
//                         <li>
//                           <a href="/vacation/cape-town">Cape Town</a>
//                         </li>
//                         <li>
//                           <a href="/vacation/cancun">Cancun</a>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="dropdown">
//                   <a href="javascript:void(0)" className="submenus experiences">
//                     Experiences
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li className="dropdown">
//                       <a href="javascript:void(0)" className="submenus traveltheme">
//                         Travel By Theme
//                       </a>
//                       <ul className="dropdown-menu">
//                         <li>
//                           <a href="/flights-reservation/business-class-flights">
//                             Business Class
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/first-class-flights">
//                             First Class
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/lgbt-flights">LGBT Travel</a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/military-flights">
//                             Military Travel
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/premium-economy-flights">
//                             Premium Economy
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/senior-flights">
//                             Senior Travel
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/student-flights">
//                             Student Travel
//                           </a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="dropdown">
//                       <a href="javascript:void(0)" className="submenus typeflight">
//                         Type Of Flights
//                       </a>
//                       <ul className="dropdown-menu">
//                         <li>
//                           <a href="/flights-reservation/domestic-flights">
//                             Domestic Flights
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/last-minute-flights">
//                             Last-minute Flights
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/international-flights">
//                             International Flights
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/one-way-flights">
//                             One Way Flights
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/flights-reservation/round-trip-flights">
//                             Round Trip Flights
//                           </a>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="dropdown" onClick={()=>{
//                   setimportantLinkActive(prev=>!prev);
//                 }}>
//                   <a href="javascript:void(0)" className={`${importantLinkActive? "submenus" : "submenus selected"}`}>
//                     important links
//                   </a>
//                   <ul
//                     className="submenu dropdown-menu imp-links tabcontent"
//                     id="destination"
//                     style={{ display: importantLinkActive ?  "block"  : "none" }}

//                   >
//                     <li>
//                       <a href="/about-us"> ABOUT US</a>
//                     </li>
//                     <li>
//                       <a href="/faqs"> FAQs</a>
//                     </li>
//                     <li>
//                       <a href="/disclaimer">DISCLAIMER </a>
//                     </li>
//                     <li>
//                       <a href="/contact-us"> CONTACT US</a>
//                     </li>
//                     <li>
//                       <a href="/sitemap"> SITEMAP</a>
//                     </li>
//                     <li>
//                       <a href="/baggage-policy"> BAGGAGE POLICY</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="dropdown">
//                   <a href="javascript:void(0)" className="submenus">
//                     LEGAL
//                   </a>
//                   <ul
//                     className="submenu dropdown-menu imp-links tabcontent"
//                     id="destination"
//                   >
//                     <li>
//                       <a href="/terms-and-conditions"> TERMS &amp; CONDITIONS</a>
//                     </li>
//                     <li>
//                       <a href="/privacy-policy">PRIVACY POLICY</a>
//                     </li>
//                     <li>
//                       <a href="/price-match-policy"> PRICE MATCH PROMISE</a>
//                     </li>
//                     <li>
//                       <a href="/taxes-and-fee"> TAXES &amp; FEES</a>
//                     </li>
//                     <li>
//                       <a href="/post-ticketing-fees"> POST TICKETING FEE</a>
//                     </li>
//                     <li>
//                       <a
//                         href="javascript:void(0)"
//                         onclick="openpopupwindow('/service-fees')"
//                       >
//                         OUR SERVICE FEES{" "}
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </nav>
//             {/* <style
//               dangerouslySetInnerHTML={{
//                 __html:
//                   "\nli.experiences-main ul.exprce li.active ul,\nli.holidaymenu ul.exprce li.active ul {display: block;}\n.mobilemenu nav> ul> li.active> ul {display: block;}\n.mobilemenu ul ul.exprce.active {display: block;}\n\n"
//               }}
//             /> */}
//             {/* <link
//               href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700&display=swap"
//               rel="stylesheet"
//             /> */}

//             <div className="currency-exchange">
//               <a
//                 href="JavaScript:void(0)"
//                 id="selectCurrency"
//                 className="acc_filter"
//                 data-toggle="collapse"
//                 data-target="#currency-list"
//               >
//                 <i>
//                   <img src="/Content/images/USD.jpg" alt="logo" />
//                 </i>
//                 USD
//                 <i className="fa fa-angle-down" aria-hidden="true" />
//               </a>
//               <ul id="currency-list" className="collapse">
//                 <li id="li-curr-USD">
//                   <a
//                     href="JavaScript:void(0)"
//                     onclick="return UpdateHomePageCurrency('USD');"
//                   >
//                     <img src="/Content/images/USD.jpg" alt="logo" />{" "}
//                     <span className="currency_bg">
//                       United States - English{" "}
//                       <img
//                         src="/Content/images/dlr.png"
//                         alt="logo"
//                         style={{ width: 13 }}
//                       />
//                     </span>
//                   </a>
//                 </li>
//                 <li id="li-curr-CAD">
//                   <a
//                     href="JavaScript:void(0)"
//                     onclick="return UpdateHomePageCurrency('CAD');"
//                   >
//                     <img src="/Content/images/CAD.jpg" alt="logo" />{" "}
//                     <span className="currency_bg">
//                       Canada - English{" "}
//                       <img
//                         src="/Content/images/cdlr.png"
//                         alt="logo"
//                         style={{ width: 13 }}
//                       />
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <input
//               type="hidden"
//               id="hdnBannerImageCountrySelector"
//               defaultValue="USD"
//             />
//             <div className="bg-black" />
//           </div>
//           {/* End Mobile Menu */}
//         </div>
//       </header>

//             }

// export default Navbar;

"use client";
import { useState, useEffect } from "react";

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

const Navbar = () => {
  const [mobMenuActive, setMobMenuActive] = useState(false);
  const [importantLinkActive, setimportantLinkActive] = useState(false);
  const [destinationLinkActive, setdestinationLinkActive] = useState(false);
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
    listnav.href = "/Content/css/listnav.css";

    // const listing = document.createElement("link");
    // listing.rel = "stylesheet";
    // listing.href = "/listing.css";

    console.log("Is Mobile Loaded");
    document.head.appendChild(mobileCss);
    document.head.appendChild(mobileHomeCss);
    document.head.appendChild(listnav);
    // document.head.appendChild(listing);
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
      // if (document.head.contains(listing)) {
      //   document.head.removeChild(listing);
      // }
    };
  }, [isMobile]);

  const Flights = [
    { name: "Orlando", url: "/book-flights/orlando-orl" },
    { name: "Las Vegas", url: "/book-flights/las-vegas-las" },
    { name: "Fort Lauderdale", url: "/book-flights/fort-lauderdale-fll" },
    { name: "New York", url: "/book-flights/new-york-nyc" },
    { name: "Tampa", url: "/book-flights/tampa-tpa" },
    { name: "Atlanta", url: "/book-flights/atlanta-atl" },
    { name: "Los Angeles", url: "/book-flights/los-angeles-lax" },
    { name: "Denver", url: "/book-flights/denver-den" },
    { name: "Chicago", url: "/book-flights/chicago-chi" },
    { name: "San Juan", url: "/book-flights/san-juan-sju" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/Content/images/logo.png" />
          </a>
        </div>
        <div className="number-top">
          <a href="tel:1-833-914-2482" className="mbr">
            Call NOW <span>7am - 5pm EST</span>
          </a>
        </div>
        <div
          onClick={() => {
            setMobMenuActive((prev) => !prev);
          }}
          className="togglemenu"
        >
          <span />
          <span />
          <span />
        </div>
        {/* Mobile Menu */}
        <div className={`mobilemenu ${mobMenuActive ? "active" : ""}`}>
          <nav>
            <a
              href="javascript:void(0)"
              onClick={() => {
                setMobMenuActive((prev) => !prev);
              }}
              className="menuclose"
            >
              X
            </a>
            <div className="logo-menu">
              <a href="/" id="lnk_RUHUS_Logo_URL">
                <img src="/Content/images/logo.png" />
              </a>
            </div>
            <ul>
              <li>
                <a href="/" title="home">
                  home
                </a>
              </li>
              <li>
                <a href="/vacations" title="vacations">
                  Vacations
                </a>
              </li>
              <li>
                <a href="/flight" title="flights">
                  flights
                </a>
              </li>
              <li>
                <a href="/hotel" title="hotels">
                  hotels
                </a>
              </li>
              <li>
                <a href="/car-hire" title="cars">
                  cars
                </a>
              </li>
              <li>
                <a href="/cruise" title="cars">
                  cruises
                </a>
              </li>
              <li
                className="dropdown"
                onClick={() => {
                  setdestinationLinkActive((prev) => !prev);
                }}
              >
                <a
                  href="javascript:void(0)"
                  className={`${
                    destinationLinkActive ? "submenus" : "submenus selected"
                  }`}
                >
                  destinations
                </a>
                <ul
                  className="submenu dropdown-menu imp-links tabcontent"
                  id="destination"
                  style={{ display: destinationLinkActive ? "block" : "none" }}
                >
                  {Flights.map((Flight) => {
                    return (
                      <li>
                        <a href={Flight.url}>{Flight.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0)" className="submenus holidaylist">
                  Packages
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a
                      href="javascript:void(0)"
                      className="submenus traveltheme"
                    >
                      Top Regions
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/region/caribbean">Caribbean</a>
                      </li>
                      <li>
                        <a href="/region/florida">Florida</a>
                      </li>
                      <li>
                        <a href="/region/middle-east">Middle East</a>
                      </li>
                      <li>
                        <a href="/region/europe">Europe</a>
                      </li>
                      <li>
                        <a href="/region/africa">Africa</a>
                      </li>
                      <li>
                        <a href="/sitemap#more-region">See All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:void(0)"
                      className="submenus typeflight"
                    >
                      Top Vacation Cities
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/vacation/barbados">Bridgetown</a>
                      </li>
                      <li>
                        <a href="/vacation/london">London </a>
                      </li>
                      <li>
                        <a href="/vacation/miami">Miami</a>
                      </li>
                      <li>
                        <a href="/vacation/orlando">Orlando</a>
                      </li>
                      <li>
                        <a href="/vacation/paris">Paris</a>
                      </li>
                      <li>
                        <a href="/vacation/barcelona">Barcelona</a>
                      </li>
                      <li>
                        <a href="/vacation/las-vegas">Las Vegas</a>
                      </li>
                      <li>
                        <a href="/vacation/dubai">Dubai</a>
                      </li>
                      <li>
                        <a href="/vacation/cape-town">Cape Town</a>
                      </li>
                      <li>
                        <a href="/vacation/cancun">Cancun</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0)" className="submenus experiences">
                  Experiences
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a
                      href="javascript:void(0)"
                      className="submenus traveltheme"
                    >
                      Travel By Theme
                    </a>
                    <ul className="dropdown-menu">
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
                        <a href="/flights-reservation/lgbt-flights">
                          LGBT Travel
                        </a>
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
                        <a href="/flights-reservation/senior-flights">
                          Senior Travel
                        </a>
                      </li>
                      <li>
                        <a href="/flights-reservation/student-flights">
                          Student Travel
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:void(0)"
                      className="submenus typeflight"
                    >
                      Type Of Flights
                    </a>
                    <ul className="dropdown-menu">
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
              <li
                className="dropdown"
                onClick={() => {
                  setimportantLinkActive((prev) => !prev);
                }}
              >
                <a
                  href="javascript:void(0)"
                  className={`${
                    importantLinkActive ? "submenus" : "submenus selected"
                  }`}
                >
                  important links
                </a>
                <ul
                  className="submenu dropdown-menu imp-links tabcontent"
                  id="destination"
                  style={{ display: importantLinkActive ? "block" : "none" }}
                >
                  <li>
                    <a href="/about-us"> ABOUT US</a>
                  </li>
                  <li>
                    <a href="/faqs"> FAQs</a>
                  </li>
                  <li>
                    <a href="/disclaimer">DISCLAIMER </a>
                  </li>
                  <li>
                    <a href="/contact-us"> CONTACT US</a>
                  </li>
                  <li>
                    <a href="/sitemap"> SITEMAP</a>
                  </li>
                  <li>
                    <a href="/baggage-policy"> BAGGAGE POLICY</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0)" className="submenus">
                  LEGAL
                </a>
                <ul
                  className="submenu dropdown-menu imp-links tabcontent"
                  id="destination"
                >
                  <li>
                    <a href="/terms-and-conditions"> TERMS &amp; CONDITIONS</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">PRIVACY POLICY</a>
                  </li>
                  <li>
                    <a href="/price-match-policy"> PRICE MATCH PROMISE</a>
                  </li>
                  <li>
                    <a href="/taxes-and-fee"> TAXES &amp; FEES</a>
                  </li>
                  <li>
                    <a href="/post-ticketing-fees"> POST TICKETING FEE</a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onclick="openpopupwindow('/service-fees')"
                    >
                      OUR SERVICE FEES{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* <style
              dangerouslySetInnerHTML={{
                __html:
                  "\nli.experiences-main ul.exprce li.active ul,\nli.holidaymenu ul.exprce li.active ul {display: block;}\n.mobilemenu nav> ul> li.active> ul {display: block;}\n.mobilemenu ul ul.exprce.active {display: block;}\n\n"
              }}
            /> */}
          {/* <link
              href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700&display=swap"
              rel="stylesheet"
            /> */}

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
            <ul id="currency-list" className="collapse">
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
          <input
            type="hidden"
            id="hdnBannerImageCountrySelector"
            defaultValue="USD"
          />
          <div className="bg-black" />
        </div>
        {/* End Mobile Menu */}
      </div>
    </header>
  );
};

export default Navbar;
