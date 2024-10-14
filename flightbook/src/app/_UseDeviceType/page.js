"use client"
import Mobile from '../_components/MobileView/mobile';
import Desktop from '../_components/DesktopView/page';
import Footer from '../_components/footer/page';
import FooterDesktop from '../_components/FooterDesktop/page';
import { useEffect, useState } from 'react';
import Navbar from '../_components/navbar/page';

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

const MyComponent = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768; // You can adjust the breakpoint as needed

  return (
    <div>
      
        {isMobile ?   <Navbar /> :""}
      {isMobile ? <Mobile /> : <Desktop />}
      {isMobile ? <Footer /> :<FooterDesktop />}
    </div>
  );
};



export default MyComponent;
