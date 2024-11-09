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
const SiteMap = () => {
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

  const airlines = [
    {
      name: "Aegean Airlines",
      url: "/book-airlines-flights/aegean-airlines-reservations",
    },
    {
      name: "Aer Lingus",
      url: "/book-airlines-flights/aer-lingus-reservations",
    },
    {
      name: "Aeroflot",
      url: "/book-airlines-flights/aeroflot-airlines-reservations",
    },
    {
      name: "Aerolíneas Argentinas",
      url: "/book-airlines-flights/aerolineas-argentinas-reservations",
    },
    {
      name: "Aeromexico",
      url: "/book-airlines-flights/aeromexico-reservations",
    },
    {
      name: "Air Astana",
      url: "/book-airlines-flights/air-astana-reservations",
    },
    {
      name: "Air Austral",
      url: "/book-airlines-flights/air-austral-reservations",
    },
    {
      name: "Air Baltic",
      url: "/book-airlines-flights/air-baltic-reservations",
    },
    {
      name: "Air Canada",
      url: "/book-airlines-flights/air-canada-reservations",
    },
    { name: "Air China", url: "/book-airlines-flights/air-china-reservations" },
    {
      name: "Air Choice One",
      url: "/book-airlines-flights/air-choice-one-reservations",
    },
    {
      name: "Air Dolomiti",
      url: "/book-airlines-flights/air-dolomiti-reservations",
    },
    {
      name: "Air Europa",
      url: "/book-airlines-flights/air-europa-reservations",
    },
    {
      name: "Air France",
      url: "/book-airlines-flights/air-france-reservations",
    },
    { name: "Air India", url: "/book-airlines-flights/air-india-reservations" },
    {
      name: "Air Mauritius",
      url: "/book-airlines-flights/air-mauritius-reservations",
    },
    {
      name: "Air New Zealand",
      url: "/book-airlines-flights/air-new-zealand-reservations",
    },
    {
      name: "Air Nostrum",
      url: "/book-airlines-flights/air-nostrum-reservations",
    },
    {
      name: "Air Serbia",
      url: "/book-airlines-flights/air-serbia-reservations",
    },
    {
      name: "Air Seychelles",
      url: "/book-airlines-flights/air-seychelles-reservations",
    },
    {
      name: "Air Tahiti Nui",
      url: "/book-airlines-flights/air-tahiti-nui-reservations",
    },
    {
      name: "Air Transat",
      url: "/book-airlines-flights/air-transat-reservations",
    },
    {
      name: "Air Wisconsin",
      url: "/book-airlines-flights/air-wisconsin-reservations",
    },
    { name: "AirAsia", url: "/book-airlines-flights/air-asia-reservations" },
    {
      name: "Alaska Airlines",
      url: "/book-airlines-flights/alaska-airlines-reservations",
    },
    {
      name: "Alitalia",
      url: "/book-airlines-flights/alitalia-airlines-reservations",
    },
    {
      name: "All Nippon Airways",
      url: "/book-airlines-flights/all-nippon-airways-reservations",
    },
    {
      name: "Allegiant Air",
      url: "/book-airlines-flights/allegiant-airlines-reservations",
    },
    {
      name: "American Airlines",
      url: "/book-airlines-flights/american-airlines-reservations",
    },
    {
      name: "American Eagle",
      url: "/book-airlines-flights/american-eagle-reservations",
    },
    {
      name: "Asiana Airlines",
      url: "/book-airlines-flights/asiana-airlines-reservations",
    },
    {
      name: "Austrian Airlines",
      url: "/book-airlines-flights/austrian-airlines-reservations",
    },
    {
      name: "Avelo Airlines",
      url: "/book-airlines-flights/avelo-airlines-reservations",
    },
    {
      name: "Avianca Airlines",
      url: "/book-airlines-flights/avianca-airlines-reservations",
    },
    {
      name: "Azerbaijan Airlines",
      url: "/book-airlines-flights/azerbaijan-airlines-reservations",
    },
    {
      name: "Azul Brazilian Airlines",
      url: "/book-airlines-flights/azul-brazilian-airlines-reservations",
    },
    {
      name: "Bahamasair",
      url: "/book-airlines-flights/bahamasair-reservations",
    },
    {
      name: "Bangkok Airways",
      url: "/book-airlines-flights/bangkok-airways-reservations",
    },
    { name: "Batik Air", url: "/book-airlines-flights/batik-air-reservations" },
    {
      name: "Bearskin Airlines",
      url: "/book-airlines-flights/bearskin-airlines-reservations",
    },
    {
      name: "Blue Panorama Airlines",
      url: "/book-airlines-flights/blue-panorama-airlines-reservations",
    },
    {
      name: "Breeze Airways",
      url: "/book-airlines-flights/breeze-airways-reservations",
    },
    {
      name: "British Airways",
      url: "/book-airlines-flights/british-airways-reservations",
    },
    {
      name: "Brussels Airlines",
      url: "/book-airlines-flights/brussels-airlines-reservations",
    },
    {
      name: "Buffalo Airways",
      url: "/book-airlines-flights/buffalo-airways-reservations",
    },
    { name: "Calm Air", url: "/book-airlines-flights/calm-air-reservations" },
    {
      name: "Canadian North",
      url: "/book-airlines-flights/canadian-north-reservations",
    },
    { name: "Cape Air", url: "/book-airlines-flights/cape-air-reservations" },
    {
      name: "Caribbean Airlines",
      url: "/book-airlines-flights/caribbean-airlines-reservations",
    },
    {
      name: "Cathay Pacific Airways",
      url: "/book-airlines-flights/cathay-pacific-airways-reservations",
    },
    {
      name: "CEBU Pacific Air",
      url: "/book-airlines-flights/cebu-pacific-air-reservations",
    },
    {
      name: "Central Mountain Air",
      url: "/book-airlines-flights/central-mountain-air-reservations",
    },
    {
      name: "China Airlines",
      url: "/book-airlines-flights/china-airlines-reservations",
    },
    {
      name: "China Eastern Airlines",
      url: "/book-airlines-flights/china-eastern-airlines-reservations",
    },
    {
      name: "China Southern Airlines",
      url: "/book-airlines-flights/china-southern-airlines-reservations",
    },
    {
      name: "Condor Airlines",
      url: "/book-airlines-flights/condor-airlines-reservations",
    },
    {
      name: "Copa Airlines",
      url: "/book-airlines-flights/copa-airlines-reservations",
    },
    {
      name: "Croatia Airlines",
      url: "/book-airlines-flights/croatia-airlines-reservations",
    },
    {
      name: "Czech Airlines",
      url: "/book-airlines-flights/czech-airlines-reservations",
    },
    {
      name: "Eastern Airlines",
      url: "/book-airlines-flights/eastern-airlines-reservations",
    },
    {
      name: "EasyJet Airlines",
      url: "/book-airlines-flights/easyjet-airlines-reservations",
    },
    {
      name: "Edelweiss Air",
      url: "/book-airlines-flights/edelweiss-air-reservations",
    },
    { name: "Egyptair", url: "/book-airlines-flights/egyptair-reservations" },
    {
      name: "El Al Israel Airlines",
      url: "/book-airlines-flights/el-al-israel-airlines-reservations",
    },
    {
      name: "Emirates Airlines",
      url: "/book-airlines-flights/emirates-reservations",
    },
    {
      name: "Ethiopian Airlines",
      url: "/book-airlines-flights/ethiopian-airlines-reservations",
    },
    {
      name: "Etihad Airways",
      url: "/book-airlines-flights/etihad-airways-reservations",
    },
    {
      name: "Eurowings Airlines",
      url: "/book-airlines-flights/eurowings-reservations",
    },
    { name: "Eva Air", url: "/book-airlines-flights/eva-air-reservations" },
    {
      name: "Fiji Airways",
      url: "/book-airlines-flights/fiji-airways-reservations",
    },
    { name: "Finnair", url: "/book-airlines-flights/finnair-reservations" },
    {
      name: "Flair Airlines",
      url: "/book-airlines-flights/flair-airlines-reservations",
    },
    {
      name: "FlyBe Airlines",
      url: "/book-airlines-flights/flybe-reservations",
    },
    {
      name: "FlyOne airlines",
      url: "/book-airlines-flights/flyone-reservations",
    },
    {
      name: "Frontier Airlines",
      url: "/book-airlines-flights/frontier-airlines-reservations",
    },
    { name: "Garuda Indonesia Airlines", url: "/" },
  ];

  {
    return (
      <section className="sitemap-content">
        <div className="container">
          <div className="header-heading text-center">
            <h2>SiteMap</h2>
          </div>
          <h3 id="more-airlines">Airlines </h3>
          <ul>
            {airlines.map((airline) => {
              return (
                <li>
                  <a href={airline.url}>{airline.name}</a>
                </li>
              );
            })}
          </ul>
          <h3 id="more-destination">Destinations</h3>
          <ul>
            <li>
              <a className="footer-link" href="/book-flights/addis-ababa-add">
                Addis Ababa
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/albuquerque-abq">
                Albuquerque
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/america-us">
                America
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/amman-amm">
                Amman
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/amsterdam-ams">
                Amsterdam
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/athens-ath">
                Athens
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/atlanta-atl">
                Atlanta
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/auckland-akl">
                Auckland
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/austin-aus">
                Austin
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/bahrain-bah">
                Bahrain
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/baltimore-bwi">
                Baltimore
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/bangalore-blr">
                Bangalore
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/bangkok-bkk">
                Bangkok
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/barbados-bb">
                Barbados
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/barcelona-bcn">
                Barcelona
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/beijing-bjs">
                Beijing
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/beirut-bey">
                Beirut
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/berlin-ber">
                Berlin
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/birmingham-bhx">
                Birmingham
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/birmingham-bhm">
                Birmingham
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/bologna-blq">
                Bologna
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/boston-bos">
                Boston
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/bridgetown-bgi">
                Bridgetown
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/brisbane-bne">
                Brisbane
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/brussels-bru">
                Brussels
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/bucharest-buh">
                Bucharest
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/budapest-bud">
                Budapest
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/buenos-aires-bue">
                Buenos Aires
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/cairo-cai">
                Cairo
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/calgary-yyc">
                Calgary
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/cali-clo">
                Cali
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/canada-ca">
                Canada
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/cancun-cun">
                Cancun
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/cape-town-cpt">
                Cape Town
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/caracas-ccs">
                Caracas
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/cebu-ceb">
                Cebu
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/charlotte-clt">
                Charlotte
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/chennai-maa">
                Chennai
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/chiang-mai-cnx">
                Chiang Mai
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/chicago-chi">
                Chicago
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/christchurch-chc">
                Christchurch
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/cincinnati-cvg">
                Cincinnati
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/cleveland-cle">
                Cleveland
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/colombo-cmb">
                Colombo
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/columbus-cmh">
                Columbus
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/copenhagen-cph">
                Copenhagen
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/dallas-dfw">
                Dallas
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/delhi-del">
                Delhi
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/denpasar-bali-dps">
                Denpasar Bali
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/denver-den">
                Denver
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/detroit-dtt">
                Detroit
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/doha-doh">
                Doha
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/douala-dla">
                Douala
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/dubai-dxb">
                Dubai
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/dublin-dub">
                Dublin
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/durban-dur">
                Durban
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/dusseldorf-dus">
                Dusseldorf
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/edinburgh-edi">
                Edinburgh
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/faro-fao">
                Faro
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/fort-lauderdale-fll"
              >
                Fort Lauderdale
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/france-fr">
                France
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/frankfurt-fra">
                Frankfurt
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/fukuoka-fuk">
                Fukuoka
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/gdansk-gdn">
                Gdansk
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/geneva-gva">
                Geneva
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/glasgow-gla">
                Glasgow
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/guadalajara-gdl">
                Guadalajara
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/guangzhou-can">
                Guangzhou
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/hamburg-ham">
                Hamburg
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/hanoi-han">
                Hanoi
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/hanover-haj">
                Hanover
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/helsinki-hel">
                Helsinki
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/ho-chi-minh-city-sgn"
              >
                Ho Chi Minh City
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/hong-kong-hkg">
                Hong Kong
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/honolulu-hnl">
                Honolulu
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/houston-hou">
                Houston
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/indianapolis-ind">
                Indianapolis
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/istanbul-ist">
                Istanbul
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/jakarta-jkt">
                Jakarta
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/jeddah-jed">
                Jeddah
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/johannesburg-jnb">
                Johannesburg
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/kansas-city-mkc">
                Kansas City
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/kiev-iev">
                Kiev
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/kingston-kin">
                Kingston
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/kota-kinabalu-bki">
                Kota Kinabalu
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/krakow-krk">
                Krakow
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/kuala-lumpur-kul">
                Kuala Lumpur
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/kuching-kch">
                Kuching
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/kuwait-kwi">
                Kuwait City
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/lagos-los">
                Lagos
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/larnaca-lca">
                Larnaca
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/las-palmas-lpa">
                Las Palmas
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/las-vegas-las">
                Las Vegas
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/lima-lim">
                Lima
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/lisbon-lis">
                Lisbon
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/london-lon">
                London
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/los-angeles-lax">
                Los Angeles
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/lyon-lys">
                Lyon
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/madrid-mad">
                Madrid
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/malaga-agp">
                Malaga
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/manchester-man">
                Manchester
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/manila-mnl">
                Manila
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/medan-mes">
                Medan
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/melbourne-mel">
                Melbourne
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/memphis-mem">
                Memphis
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/mexico-city-mex">
                Mexico City
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/miami-mia">
                Miami
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/milan-mil">
                Milan
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/milwaukee-mke">
                Milwaukee
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/minneapolis-msp">
                Minneapolis
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/monrovia-mlw">
                Monrovia
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/montego-bay-mbj">
                Montego Bay
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/montreal-ymq">
                Montreal
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/moscow-mow">
                Moscow
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/mumbai-bom">
                Mumbai
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/munich-muc">
                Munich
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/muscat-mct">
                Muscat
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/nagoya-ngo">
                Nagoya
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/nairobi-nbo">
                Nairobi
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/naples-nap">
                Naples
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/nashville-bna">
                Nashville
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/nassau-nas">
                Nassau
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/netherlands-nl">
                Netherlands
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/new-orleans-msy">
                New Orleans
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/new-york-nyc">
                New York
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/newburgh-swf">
                Newburgh
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/nice-nce">
                Nice
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/norfolk-orf">
                Norfolk
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/orlando-orl">
                Orlando
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/osaka-osa">
                Osaka
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/oslo-osl">
                Oslo
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/palma-de-mallorca-pmi"
              >
                Palma De Mallorca
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/paris-par">
                Paris
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/penang-pen">
                Penang
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/perth-per">
                Perth
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/philadelphia-phl">
                Philadelphia
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/phnom-penh-pnh">
                Phnom Penh
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/phoenix-phx">
                Phoenix
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/phuket-hkt">
                Phuket
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/pittsburgh-pit">
                Pittsburgh
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/portland-pwm">
                Portland
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/prague-prg">
                Prague
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/pristina-prn">
                Pristina
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/puerto-vallarta-pvr"
              >
                Puerto Vallarta
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/punta-cana-puj">
                Punta Cana
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/qingdao-tao">
                Qingdao
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/queenstown-zqn">
                Queenstown
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/raleigh-durham-rdu"
              >
                Raleigh Durham
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/reykjavik-rek">
                Reykjavik
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/riga-rix">
                Riga
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/rio-de-janeiro-rio"
              >
                Rio De Janeiro
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/riyadh-ruh">
                Riyadh
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/rochester-roc">
                Rochester
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/rome-rom">
                Rome
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/salt-lake-city-slc"
              >
                Salt Lake City
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/san-antonio-sat">
                San Antonio
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/san-diego-san">
                San Diego
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/san-francisco-sfo">
                San Francisco
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/san-jose-sjc">
                San Jose
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/san-juan-sju">
                San Juan
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/santa-ana-sna">
                Santa Ana
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/sao-paulo-sao">
                Sao Paulo
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/seattle-sea">
                Seattle
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/seoul-sel">
                Seoul
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/shanghai-sha">
                Shanghai
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/shannon-snn">
                Shannon
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/sharm-el-sheikh-ssh"
              >
                Sharm El Sheikh
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/shenyang-she">
                Shenyang
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/siem-reap-rep">
                Siem Reap
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/singapore-sin">
                Singapore
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/skopje-skp">
                Skopje
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/sofia-sof">
                Sofia
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/southwest-region-flight"
              >
                Southwest Region
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/st-louis-stl">
                St Louis
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/st-petersburg-led">
                St Petersburg
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/stockholm-sto">
                Stockholm
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/stuttgart-str">
                Stuttgart
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/sydney-syd">
                Sydney
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/taipei-tpe">
                Taipei
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/tampa-tpa">
                Tampa
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/tbilisi-tbs">
                Tbilisi
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/tehran-thr">
                Tehran
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/tel-aviv-tlv">
                Tel Aviv Yafo
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/tirana-tia">
                Tirana
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/tokyo-tyo">
                Tokyo
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/toronto-yto">
                Toronto
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/toulouse-tls">
                Toulouse
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/ulaanbaatar-uln">
                Ulaanbaatar
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/united-kingdom-uk">
                United Kingdom
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/vancouver-yvr">
                Vancouver
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/venice-vce">
                Venice
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/vienna-vie">
                Vienna
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/vientiane-vte">
                Vientiane
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/warsaw-waw">
                Warsaw
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/washington-was">
                Washington
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/wellington-wlg">
                Wellington
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/west-palm-beach-pbi"
              >
                West Palm Beach
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="/book-flights/westchester-county-hpn"
              >
                Westchester County
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/xiamen-xmn">
                Xiamen
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/zagreb-zag">
                Zagreb
              </a>
            </li>
            <li>
              <a className="footer-link" href="/book-flights/zurich-zrh">
                Zurich
              </a>
            </li>
          </ul>
          <h3 id="more-region">Top Regions</h3>
          <ul>
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
              <a href="/region/asia">Asia</a>
            </li>
            <li>
              <a href="/region/indian-ocean">Indian Ocean</a>
            </li>
          </ul>
          <h3 id="more-vacationcity">Top Vacation Cities</h3>
          <ul>
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
          <h3 id="more-theme">Travel by Theme</h3>
          <ul>
            <li>
              <a href="/flights-reservation/premium-economy-flights">
                Premium Economy
              </a>
            </li>
            <li>
              <a href="/flights-reservation/business-class-flights">
                Business Class
              </a>
            </li>
            <li>
              <a href="/flights-reservation/first-class-flights">First Class</a>
            </li>
            <li>
              <a href="/flights-reservation/last-minute-flights">
                Last-minute Flights
              </a>
            </li>
            <li>
              <a href="/flights-reservation/senior-flights">
                Senior Citizen Discount
              </a>
            </li>
            <li>
              <a href="/flights-reservation/student-flights">
                Students Discount
              </a>
            </li>
            <li>
              <a href="/flights-reservation/military-flights">
                Military Discount
              </a>
            </li>
            <li>
              <a href="/flights-reservation/international-flights">
                International Flights
              </a>
            </li>
            <li>
              <a href="/flights-reservation/one-way-flights">One-Way Flights</a>
            </li>
            <li>
              <a href="/flights-reservation/lgbt-flights">LGBT Travel</a>
            </li>
            <li>
              <a href="/flights-reservation/cheap-flights">Cheap Flights</a>
            </li>
            <li>
              <a href="/flights-reservation/round-trip-flights">
                Round Trip Flights
              </a>
            </li>
            <li>
              <a href="/flights-reservation/domestic-flights">
                Domestic Flights
              </a>
            </li>
            <li>
              <a href="/flights-reservation/cheap-airlines-reservation">
                Airlines Reservation
              </a>
            </li>
            <li>
              <a href="/flights-reservation/thanksgiving-flights">
                Thanksgiving Flight Deals
              </a>
            </li>
            <li>
              <a href="/flights-reservation/black-friday-flights">
                Black Friday Flight Deals
              </a>
            </li>
            <li>
              <a href="/flights-reservation/christmas-flights">
                Christmas Flight Deals
              </a>
            </li>
            <li>
              <a href="/flights-reservation/new-year-flights">
                New Year Flight Deals
              </a>
            </li>
          </ul>
          <h3 id="more-quick-link">Quick Links</h3>
          <ul>
            <li>
              <a href="/about-us"> About Us</a>
            </li>
            <li>
              <a href="/faqs"> FAQs</a>
            </li>
            <li>
              <a href="/disclaimer"> Disclaimer</a>
            </li>
            <li>
              <a href="/contact-us"> Contact Us</a>
            </li>
            <li>
              <a href="/baggage-policy"> Baggage Policy</a>
            </li>
            <li>
              <a href="/sitemap"> Sitemap</a>
            </li>
          </ul>
          <h3 id="more-legel">Legal</h3>
          <ul>
            <li>
              <a href="/terms-and-conditions"> Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy"> Privacy Policy</a>
            </li>
            <li>
              <a href="/price-match-policy"> Price Match Promise</a>
            </li>
            <li>
              <a href="/taxes-and-fee"> Taxes &amp; Fees</a>
            </li>
            <li>
              <a href="/post-ticketing-fees"> Post Ticketing Fee</a>
            </li>
            <li>
              <a href="/damage-management-policy"> Damage Management Policy</a>
            </li>
            <li>
              <a href="/cookies"> Cookie Policy</a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onclick="openpopupwindow('/service-fees')"
              >
                Our Service Fees{" "}
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
};
export default SiteMap;
