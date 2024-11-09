// export default Carousel;

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useRef } from "react";

const MyTextCarousel = ({
  FlightList,
  oneWay,
  airlinesData,
  setActiveFlight,
  handleStopFilter,
}) => {
  const itemsPerSlide = 1; // Number of items to show per slide

  // Group flights based on items per slide
  const groupedFlights = [];
  for (let i = 0; i < airlinesData.length; i += itemsPerSlide) {
    groupedFlights.push(airlinesData.slice(i, i + itemsPerSlide));
  }

  const settings = {
    infinite: airlinesData.length > 1,
    slidesToShow: airlinesData.length == 1 ? 1 : 5,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: airlinesData.length == 1 ? 1 : 2,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: airlinesData.length == 1 ? 1 : 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  const [filteredAirlines, setFilteredAirlines] = useState(FlightList);
  const handleFlightDetails = (flight) => {
    setActiveFlight(flight);
  };
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Go to next slide
    }
  };

  // Function to go to previous slide
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Go to previous slide
    }
  };

  return (
    <div className="owl-carousel fare-slide owl-loaded owl-drag">
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
            transition: "all",
            width: "100%",
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {groupedFlights.map((group, groupIndex) => (
              <div key={groupIndex} className="matrix-data">
                {group.map((flight, index) => (
                  <div
                    key={index}
                    className="matrix-item"
                    style={{
                      padding: "0 10px",
                    }}
                  >
                    <ul>
                      <li
                        className="head"
                        onClick={() => handleFlightDetails(flight)}
                      >
                        <span className="l-img">
                          <img
                            src={flight.airlineLogo}
                            alt={`${flight.airlineName} logo`}
                          />
                        </span>
                        <a href="#" className="am-flight">
                          <p className="fw600">{flight.airlineName}</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            {flight.isNonStop ? `$${flight.price}` : "---"}
                          </span>
                        </a>
                      </li>
                      <li className="matrix-cell mstop1">
                        <i className="fa" />{" "}
                        {flight.isOnePlusStop ? `$${flight.price}` : "-"}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="owl-nav " style={{ border: "none" }}>
        <button
          type="button"
          role="presentation"
          className="owl-prev "
          onClick={handlePrev}
        >
          <span aria-label="Previous">‹</span>
        </button>
        <button
          type="button"
          role="presentation"
          className="owl-next"
          onClick={handleNext}
        >
          <span aria-label="Next">›</span>
        </button>
      </div>
      {/* <div className="owl-dots disabled" /> */}
    </div>
  );
};

export default MyTextCarousel;
