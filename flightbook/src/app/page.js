import Image from "next/image";

import Section1 from "./_components/section1/page";
import Section2 from "./_components/section2/page"
import Section3 from "./_components/section3/page";
import Section4 from "./_components/section4/page";
import Footer from "./_components/footer/page";
import Copyright from "./_components/copyright/page";
export default function Home() {
  return (
   <>
     <Section1 />
     <Section2 />
     <Section3 />
     <Section4 />
     <Footer />
      <Copyright />
     </>
  );
}
