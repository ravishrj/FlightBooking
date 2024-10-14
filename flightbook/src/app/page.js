import Image from "next/image";
import Footer from "./_components/footer/page";
import Copyright from "./_components/copyright/page";
import Mobile from "./_components/MobileView/mobile";
import Desktop from "./_components/DesktopView/page";

import useDeviceType from "./_UseDeviceType/page";
import MyComponent from "./_UseDeviceType/page";
import useWindowWidth from "./_UseDeviceType/page";

export default function Home() {
  
  
  return (
   <>
   
{/* <Desktop/> */}
   <MyComponent/>
   {/* <Mobile /> */}
    
     </>
  );
}
