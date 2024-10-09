"use client"

import Image from "next/image";
import { useParams } from "next/navigation";
import Section1 from "@/app/_components/section1/page";
import Section2 from "@/app/_components/section2/page"; 
import Section3 from "@/app/_components/section3/page"; 
import Section4 from "@/app/_components/section4/page"; 
import Footer from "@/app/_components/footer/page"; 
import Copyright from "@/app/_components/copyright/page"; 
import { useEffect, useState } from "react";

export default function Airline({}) {
    console.log("=============================================================================");
    const params = useParams();
    const [selectedAirline, setSelectedAirline] = useState({});
    console.log(params, "Page Params");
    const airlines = [
        { name: "Aegean Airlines", url: "/book-airlines-flights/aegean-airlines-reservations" },
        { name: "Aer Lingus", url: "/book-airlines-flights/aer-lingus-reservations" },
        { name: "Aeroflot", url: "/book-airlines-flights/aeroflot-airlines-reservations" },
        { name: "Aerolíneas Argentinas", url: "/book-airlines-flights/aerolineas-argentinas-reservations" },
        { name: "Aeromexico", url: "/book-airlines-flights/aeromexico-reservations" },
        { name: "Air Astana", url: "/book-airlines-flights/air-astana-reservations" },
        { name: "Air Austral", url: "/book-airlines-flights/air-austral-reservations" },
        { name: "Air Baltic", url: "/book-airlines-flights/air-baltic-reservations" },
        { name: "Air Canada", url: "/book-airlines-flights/air-canada-reservations" },
        { name: "Air China", url: "/book-airlines-flights/air-china-reservations" },
        { name: "Air Choice One", url: "/book-airlines-flights/air-choice-one-reservations" },
        { name: "Air Dolomiti", url: "/book-airlines-flights/air-dolomiti-reservations" },
        { name: "Air Europa", url: "/book-airlines-flights/air-europa-reservations" },
        { name: "Air France", url: "/book-airlines-flights/air-france-reservations" },
        { name: "Air India", url: "/book-airlines-flights/air-india-reservations" },
        { name: "Air Mauritius", url: "/book-airlines-flights/air-mauritius-reservations" },
        { name: "Air New Zealand", url: "/book-airlines-flights/air-new-zealand-reservations" },
        { name: "Air Nostrum", url: "/book-airlines-flights/air-nostrum-reservations" },
        { name: "Air Serbia", url: "/book-airlines-flights/air-serbia-reservations" },
        { name: "Air Seychelles", url: "/book-airlines-flights/air-seychelles-reservations" },
        { name: "Air Tahiti Nui", url: "/book-airlines-flights/air-tahiti-nui-reservations" },
        { name: "Air Transat", url: "/book-airlines-flights/air-transat-reservations" },
        { name: "Air Wisconsin", url: "/book-airlines-flights/air-wisconsin-reservations" },
        { name: "AirAsia", url: "/book-airlines-flights/air-asia-reservations" },
        { name: "Alaska Airlines", url: "/book-airlines-flights/alaska-airlines-reservations" },
        { name: "Alitalia", url: "/book-airlines-flights/alitalia-airlines-reservations" },
        { name: "All Nippon Airways", url: "/book-airlines-flights/all-nippon-airways-reservations" },
        { name: "Allegiant Air", url: "/book-airlines-flights/allegiant-airlines-reservations" },
        { name: "American Airlines", url: "/book-airlines-flights/american-airlines-reservations" },
        { name: "American Eagle", url: "/book-airlines-flights/american-eagle-reservations" },
        { name: "Asiana Airlines", url: "/book-airlines-flights/asiana-airlines-reservations" },
        { name: "Austrian Airlines", url: "/book-airlines-flights/austrian-airlines-reservations" },
        { name: "Avelo Airlines", url: "/book-airlines-flights/avelo-airlines-reservations" },
        { name: "Avianca Airlines", url: "/book-airlines-flights/avianca-airlines-reservations" },
        { name: "Azerbaijan Airlines", url: "/book-airlines-flights/azerbaijan-airlines-reservations" },
        { name: "Azul Brazilian Airlines", url: "/book-airlines-flights/azul-brazilian-airlines-reservations" },
        { name: "Bahamasair", url: "/book-airlines-flights/bahamasair-reservations" },
        { name: "Bangkok Airways", url: "/book-airlines-flights/bangkok-airways-reservations" },
        { name: "Batik Air", url: "/book-airlines-flights/batik-air-reservations" },
        { name: "Bearskin Airlines", url: "/book-airlines-flights/bearskin-airlines-reservations" },
        { name: "Blue Panorama Airlines", url: "/book-airlines-flights/blue-panorama-airlines-reservations" },
        { name: "Breeze Airways", url: "/book-airlines-flights/breeze-airways-reservations" },
        { name: "British Airways", url: "/book-airlines-flights/british-airways-reservations" },
        { name: "Brussels Airlines", url: "/book-airlines-flights/brussels-airlines-reservations" },
        { name: "Buffalo Airways", url: "/book-airlines-flights/buffalo-airways-reservations" },
        { name: "Calm Air", url: "/book-airlines-flights/calm-air-reservations" },
        { name: "Canadian North", url: "/book-airlines-flights/canadian-north-reservations" },
        { name: "Cape Air", url: "/book-airlines-flights/cape-air-reservations" },
        { name: "Caribbean Airlines", url: "/book-airlines-flights/caribbean-airlines-reservations" },
        { name: "Cathay Pacific Airways", url: "/book-airlines-flights/cathay-pacific-airways-reservations" },
        { name: "CEBU Pacific Air", url: "/book-airlines-flights/cebu-pacific-air-reservations" },
        { name: "Central Mountain Air", url: "/book-airlines-flights/central-mountain-air-reservations" },
        { name: "China Airlines", url: "/book-airlines-flights/china-airlines-reservations" },
        { name: "China Eastern Airlines", url: "/book-airlines-flights/china-eastern-airlines-reservations" },
        { name: "China Southern Airlines", url: "/book-airlines-flights/china-southern-airlines-reservations" },
        { name: "Condor Airlines", url: "/book-airlines-flights/condor-airlines-reservations" },
        { name: "Copa Airlines", url: "/book-airlines-flights/copa-airlines-reservations" },
        { name: "Croatia Airlines", url: "/book-airlines-flights/croatia-airlines-reservations" },
        { name: "Czech Airlines", url: "/book-airlines-flights/czech-airlines-reservations" },
        { name: "Eastern Airlines", url: "/book-airlines-flights/eastern-airlines-reservations" },
        { name: "EasyJet Airlines", url: "/book-airlines-flights/easyjet-airlines-reservations" },
        { name: "Edelweiss Air", url: "/book-airlines-flights/edelweiss-air-reservations" },
        { name: "Egyptair", url: "/book-airlines-flights/egyptair-reservations" },
        { name: "El Al Israel Airlines", url: "/book-airlines-flights/el-al-israel-airlines-reservations" },
        { name: "Emirates Airlines", url: "/book-airlines-flights/emirates-reservations" },
        { name: "Ethiopian Airlines", url: "/book-airlines-flights/ethiopian-airlines-reservations" },
        { name: "Etihad Airways", url: "/book-airlines-flights/etihad-airways-reservations" },
        { name: "Eurowings Airlines", url: "/book-airlines-flights/eurowings-reservations" },
        { name: "Eva Air", url: "/book-airlines-flights/eva-air-reservations" },
        { name: "Fiji Airways", url: "/book-airlines-flights/fiji-airways-reservations" },
        { name: "Finnair", url: "/book-airlines-flights/finnair-reservations" },
        { name: "Flair Airlines", url: "/book-airlines-flights/flair-airlines-reservations" },
        { name: "FlyBe Airlines", url: "/book-airlines-flights/flybe-reservations" },
        { name: "FlyOne airlines", url: "/book-airlines-flights/flyone-reservations" },
        { name: "Frontier Airlines", url: "/book-airlines-flights/frontier-airlines-reservations" },
        { name: "Garuda Indonesia Airlines", url: "/"},
    ];
  // const selectedAirline = context.find(a => a.url == params);
    useEffect(()=>{
      let thisSelectedAirline = airlines.find(a=> {
        if(a.url ==="/book-airlines-flights/"+ params.airline){
          return a;
        };

      });

      setSelectedAirline(thisSelectedAirline);
      console.log(selectedAirline,"selectedailine");
    },[]);

  return (
   <>
      <Section1 selectedAirline={selectedAirline} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      <Copyright />
    
     </>
  );
}

