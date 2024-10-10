import Container1 from "../ContainerDesktop1/page";
import Container2 from "../ContainerDesktop2/page";
import Header from "../HeaderDesktop/page";
import VacationTab from "../VacationTabDealSectionDesktop/page";
import FlightdealSection from "../FlightTabDealSectionDesktop/page";



const Desktop=()=>{
    return <>
    <Header />
    <Container1 />
    <Container2/>
    <VacationTab/>
    <FlightdealSection/>
    </>

}
export default Desktop;