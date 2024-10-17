//  "use client"
//  import { useEffect } from "react";
//  import CarouselLoader from "../carouselLoader/page";

// import Script from 'next/script';
// import $ from 'jquery';
// import 'owl.carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';

// const FlightCarousel = () => {
//   useEffect(() => {
//     if (typeof $ !== 'undefined') {
//       $('.owl-carousel').owlCarousel({
//         items: 3,
//         margin: 10,
//         nav: true,
//         dots: false,
//       });
//     }
//   }, []);


//   const GetMatrixSorting = (code) => {
//     console.log(`Sorting by: ${code}`);
//     // Implement your sorting logic here
//   };

//   return (
//     <>
//      <CarouselLoader />
   
//     <div className="owl-carousel fare-slide">
//       <div className="owl-item">
//         <ul className="item">
//           <li>
//             <a href="JavaScript:void(0)" onClick={() => GetMatrixSorting('|AI|')}>
//               <span className="l-img">
//                 <img src="/Content/images/AirlinesLogo/AI.png" alt="Air India" />
//               </span>
//             </a>
//             <a href="#" className="am-flight" onClick={() => GetMatrixSorting('|AI|')}>
//               <p className="fw600">Air India</p>
//             </a>
//           </li>
//           <li>
//             <a href="#" onClick={() => GetMatrixSorting('DO|AI|$1292.35')}>
//               <span>$1292<sup className="small">.35</sup></span>
//             </a>
//           </li>
//           <li>
//             <a href="#" onClick={() => GetMatrixSorting('M|AI|$1028.35')}>
//               <span>$1028<sup className="small">.35</sup></span>
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* Add more owl-item divs here, following the same structure */}
//       <div className="owl-item">
//         <ul className="item">
//           <li>
//             <a href="JavaScript:void(0)" onClick={() => GetMatrixSorting('|LX|')}>
//               <span className="l-img">
//                 <img src="/Content/images/AirlinesLogo/LX.png" alt="Swiss International Airlines" />
//               </span>
//             </a>
//             <a href="#" className="am-flight" onClick={() => GetMatrixSorting('|LX|')}>
//               <p className="fw600">Swiss International Airlines</p>
//             </a>
//           </li>
//           <li>
//             <a href="#" onClick={() => GetMatrixSorting('M|LX|$1144.15')}>
//               <span>$1144<sup className="small">.15</sup></span>
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* Repeat similar structure for more items */}
//     </div>
//     </>
//   );
// };

// export default FlightCarousel;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const handleSorting = (value) => {
    // Replace with your sorting logic
    console.log("Sorting by:", value);
  };

  const airlines = [
    { code: 'AI', name: 'Air India', logo: '/Content/images/AirlinesLogo/AI.png', prices: ['$1292.35', '$1028.35'] },
    { code: 'LX', name: 'Swiss International Airlines', logo: '/Content/images/AirlinesLogo/LX.png', prices: ['---', '$1144.15'] },
    { code: 'UA', name: 'United Airlines', logo: '/Content/images/AirlinesLogo/UA.png', prices: ['---', '$1144.15'] },
    { code: 'EY', name: 'Etihad Airways', logo: '/Content/images/AirlinesLogo/EY.png', prices: ['---', '$1203.15'] },
    { code: 'AA', name: 'American Airlines', logo: '/Content/images/AirlinesLogo/AA.png', prices: ['$1300.55', '$1891.55'] },
    { code: 'CX', name: 'Cathay Pacific', logo: '/Content/images/AirlinesLogo/CX.png', prices: ['---', '$1448.35'] },
    { code: 'LH', name: 'Lufthansa Airline', logo: '/Content/images/AirlinesLogo/LH.png', prices: ['---', '$1491.05'] },
    { code: 'AY', name: 'Finnair', logo: '/Content/images/AirlinesLogo/AY.png', prices: ['---', '$1689.75'] },
    // Add more airlines as needed
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {airlines.map((airline) => (
        <div className="owl-item" key={airline.code}>
          <ul className="item">
            <li>
              <a href="JavaScript:void(0)" onClick={() => handleSorting(`|${airline.code}|`)}>
                <span className="l-img">
                  <img src={airline.logo} alt={airline.name} />
                </span>
              </a>
              <a href="#" className="am-flight" onClick={() => handleSorting(`|${airline.code}|`)}>
                <p className="fw600">{airline.name}</p>
              </a>
            </li>
            {airline.prices.map((price, index) => (
              <li key={index}>
                <a href="#" onClick={() => handleSorting(`M|${airline.code}|${price}`)}>
                  <span>{price === '---' ? price : `$${price}`}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
