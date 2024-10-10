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
import Destination_Section from "@/app/_components/destination_section/page";

export default function Airline({}) {
    console.log("=============================================================================");
    const params = useParams();
    const [selectedAirline, setSelectedAirline] = useState({});
    console.log(params, "Page Params");
    const Flights= [
      { "name": "Orlando", "url": "/book-flights/orlando-orl" },
      { "name": "Las Vegas", "url": "/book-flights/las-vegas-las" },
      { "name": "Fort Lauderdale", "url": "/book-flights/fort-lauderdale-fll" },
      { "name": "New York", "url": "/book-flights/new-york-nyc" },
      { "name": "Tampa", "url": "/book-flights/tampa-tpa" },
      { "name": "Atlanta", "url": "/book-flights/atlanta-atl" },
      { "name": "Los Angeles", "url": "/book-flights/los-angeles-lax" },
      { "name": "Denver", "url": "/book-flights/denver-den" },
      { "name": "Chicago", "url": "/book-flights/chicago-chi" },
      { "name": "San Juan", "url": "/book-flights/san-juan-sju" }
    ];
    
  // const selectedAirline = context.find(a => a.url == params);
    useEffect(()=>{
      let thisSelectedAirline = Flights.find(a=> {
        if(a.url ==="/book-flights/"+ params.flight){
          return a;
        };

      });

      setSelectedAirline(thisSelectedAirline);
      console.log(selectedAirline,"selectedailine");
    },[]);


    let aboutContentDynamic = [
      {airline: "Tampa", heading:"Book Your Orlando Flight Tickets on Red Umbrella Holidays",paragraph:"Do you have Orlando as the next destination you plan to travel to? If the answer is yes, then book your flights to Orlando with Red Umbrella Holidays at an affordable airfare. You can score great deals on your flights and plan a pocket-friendly trip with us.", heading2:"About flights to Orlando", questions:[ {question: 
	   "Q. What is the perfect time to visit Orlando?", answer: 
	"Red Umbrella Holidays recommends the ideal time to visit Orlando is from March till August. During this period, the pleasant weather perfectly compliments the spirit of sightseeing. The months from January to February are the perfect time to avoid the peak travel season and in-process grab accommodation and flights at a cheaper rate."}, {question: "Q. How far in advance should I book my tickets to fly to Orlando?", answer:"Red Umbrella Holidays suggests you should ideally book your flight tickets to Orlando at least three to four weeks in advance before your scheduled departure for great deals."},{question: "Q. Which airlines offer the cheapest airfares to Orlando?", answer: "	Frontier Airlines offers the cheapest airfares to Orlando, Florida."}, {question: "	Q. What are the best attractions that I should visit in Orlando?", answer2: "Walt Disney World Park", answer3: "Universal theme Park", answer4: "Sea world",answer5: "Volcano Bay",answer6:"Gatorland"}, {question: "	Q. What is the main airport and nearby airports of Orlando?", answer: "	The main airport of Orlando is Orlando International Airport, and its nearby airport options are:",answer1:"Orlando Sanford International Airport",answer2:"Daytona Beach International Airport",answer3:"Orlando Melbourne International Airport"}, {question: "	Q. Which major airlines are available on Red Umbrella Holidays to fly to Orlando?", answer: "Frontier Airlines",answer2:"United Airlines",answer3:"American Airlines",answer4:"Spirit Airlines"},
{question:"Why Book Flights to Orlando with Red Umbrella Holidays?",answer:"Our vision is to ensure that you have a fun time in Orlando.",answer1:"You may avail great discounts on your flight tickets to Orlando.",answer2:"Our Travel Curators guide you at every step of booking Orlando flight tickets.",answer3:"We book your journey to Orlando at a pocket-friendly price.",answer4:"We advise you on our cheapest deals and promo codes to fly to Orlando."} ]  }
    ]

  return (
   <>
      <Section1 selectedAirline={selectedAirline} />
      <Destination_Section  aboutContentDynamic={ aboutContentDynamic}/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      <Copyright />
    
     </>
  );
}

