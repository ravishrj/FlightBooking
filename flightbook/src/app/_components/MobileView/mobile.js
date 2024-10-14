
import Section1 from "@/app/_components/section1/page";
import Section2 from "@/app/_components/section2/page"; 
import Section3 from "@/app/_components/section3/page"; 
import Section4 from "@/app/_components/section4/page"; 
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Copyright from "../copyright/page";


export default function Mobile({}) {
   
  return (
   <>
      {/* <Navbar /> */}
      <Section1  />
    
      <Section2 />
      <Section3 />
      <Section4 />
    
      <Copyright />
    
    
     </>
  );
}

