"use client";
import { useState, useEffect } from "react";

import Container1 from "../ContainerDesktop1/page";
import Container2 from "../ContainerDesktop2/page";
import Header from "../HeaderDesktop/page";
import VacationTab from "../VacationTabDealSectionDesktop/page";
import FlightdealSection from "../FlightTabDealSectionDesktop/page";
import FooterDesktop from "../FooterDesktop/page";
import ContainerForm from "../ContainerDesktop/page";
import SearchFlight from "../../searchFlight/page";

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

const Desktop = ({ selectedAirline }) => {
  return (
    <div className="wrapper">
      <Header selectedAirline={selectedAirline} />
      {/* <Container1 /> */}
      <ContainerForm />
      <Container2 />
      {/* <VacationTab/> */}
      <FlightdealSection />
    </div>
  );
};
export default Desktop;
