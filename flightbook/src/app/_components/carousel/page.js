// export default Carousel;

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const MyTextCarousel = ({
  FlightList,
  oneWay,
  airlinesData,
  setActiveFlight,
  handleStopFilter,
}) => {
  const airlines = [
    {
      code: "AI",
      name: "Air India",
      logo: "/Content/images/AirlinesLogo/AI.png",
      prices: ["$175.18", "$160.48"],
    },
    {
      code: "UK",
      name: "Air Vistara",
      logo: "/Content/images/AirlinesLogo/UK.png",
      prices: ["$172.28", "---"],
    },
  ];
  const itemsPerSlide = 3; // Number of items to show per slide

  // Group flights based on items per slide
  const groupedFlights = [];
  for (let i = 0; i < airlinesData.length; i += itemsPerSlide) {
    groupedFlights.push(airlinesData.slice(i, i + itemsPerSlide));
  }

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  const [filteredAirlines, setFilteredAirlines] = useState(FlightList);

  const handleSorting = (value) => {
    if (value.startsWith("|")) {
      // Filter by airline code
      const airlineCode = value.slice(1, -1);
      const filtered = initialAirlines.filter(
        (flight) =>
          flight.itineraries[0].segments[0].airline.code === airlineCode
      );
      setFilteredAirlines(filtered);
    } else if (value.startsWith("DO|")) {
      // Sort by price (departure)
      const sorted = [...filteredAirlines].sort((a, b) => {
        const priceA =
          a.prices[0] !== "---"
            ? parseFloat(a.prices[0].replace("$", "").replace(".", ""))
            : Infinity;
        const priceB =
          b.prices[0] !== "---"
            ? parseFloat(b.prices[0].replace("$", "").replace(".", ""))
            : Infinity;
        return priceA - priceB; // Ascending order
      });
      setFilteredAirlines(sorted);
    } else {
      // Reset to original
      setFilteredAirlines(airlines);
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
          {/* <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000}
            showArrows={true} // Enable arrows if necessary
            items={4}
            // Adjust based on your library's prop for number of items
          >
            {groupedFlights.map((group, groupIndex) => (
              <div
                className="owl-item active"
                style={{ display: "flex" }}
                key={groupIndex}
              >
                {group.map((flight, index) => (
                  <div
                    key={index}
                    className="matrix-item"
                    style={{ flex: "1", padding: "0 10px" }}
                  >
                    <ul>
                      <li
                        className="head"
                        onClick={() => HandleFlightDetails(flight)}
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
          </Carousel> */}

          <Slider {...settings}>
            {groupedFlights.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="matrix-data"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {group.map((flight, index) => (
                  <div
                    key={index}
                    className="matrix-item"
                    style={{
                      padding: "0 10px",
                      width: "33%",
                    }}
                  >
                    <ul>
                      <li
                        className="head"
                        onClick={() => HandleFlightDetails(flight)}
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
      <div className="owl-nav disabled">
        <button type="button" role="presentation" className="owl-prev disabled">
          <span aria-label="Previous">‹</span>
        </button>
        <button type="button" role="presentation" className="owl-next disabled">
          <span aria-label="Next">›</span>
        </button>
      </div>
      <div className="owl-dots disabled" />
    </div>
  );
};

export default MyTextCarousel;
