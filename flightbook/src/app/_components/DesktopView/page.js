import Container1 from "../ContainerDesktop1/page";
import Container2 from "../ContainerDesktop2/page";
import Header from "../HeaderDesktop/page";
import VacationTab from "../VacationTabDealSectionDesktop/page";
import FlightdealSection from "../FlightTabDealSectionDesktop/page";
import FooterDesktop from "../FooterDesktop/page";
import ContainerForm from "../ContainerDesktop/page";



const Desktop=()=>{
    return <div className="wrapper">
    <Header />
    {/* <Container1 /> */}
    <ContainerForm/>
    <Container2/>
    {/* <VacationTab/> */}
    <FlightdealSection/>

    </div>

}
export default Desktop;