"use client"
const FlightResultCard = (city)=>{
  if(city.city.airports.length <=1){
    console.log("Single Airport code executing", city);
    return  <li id="airList parent-auto-list ui-menu-item" style={{top: "88px", left: "37.5px", width: "338.5px", display: !city.city.airports.length && "none" }} tabIndex={-1} className="ui-menu-item-wrapper">
      <span className="highlight-auto-list"></span> {city.city.airports[0].name}, ({city.city.airports[0].iataCode}),{" "}
     </li>
  }else{
//     console.log("Multiple Airport code executing");
//     return <ul id="ui-id-3" tabIndex={-1} className="ui-menu-item-wrapper">

// <>
//   <li className="airList parent-auto-list ui-menu-item"> </li>
//   <li id="ui-id-459" tabIndex={-1} className="ui-menu-item-wrapper">
//     <span className="highlight-auto-list"></span> {city.name} All Airports (NYC),{" "}
//     <span className="highlight-auto-list">New</span> York, USA
//   </li>
// </>


    {/* <span className="highlight-auto-list"></span> {city.name}, All Airports (NYC) */}
    {
      city.city.airports.map(multiAitports => {
        console.log(multiAitports, "Multiairports")
      //   return <> <li id="ui-id-6" tabIndex={-1} className="ui-menu-item-wrapper">
      //   <span className="highlight-auto-list"></span> {multiAitports.name}, {multiAitports.iataCode}
      //   (JFK), <span className="highlight-auto-list">New</span> York, USA
      // </li>
      // </>
      return <>
      <li className="airList child-auto-list ui-menu-item"> 
      <li id="ui-id-460" tabIndex={-1} className="ui-menu-item-wrapper">
        <span className="highlight-auto-list">New</span>  {multiAitports.name}, {multiAitports.iataCode} <span className="highlight-auto-list">New</span> {multiAitports.city}
      </li>
      </li>
    </>
    
      })
    }
  // </ul>
  }
 

    // city.city.map(a=> {
    //   console.log(a, "City Result");
    //   return <li id="ui-id-588" tabindex="-1" className="ui-menu-item-wrapper">{a.city} (BUFSINGLE), <span className="highlight-auto-list">New Yor</span>k, USA</li>
    // })

  // if(city.city.airports.length <= 1 ){
  //  console.log(city, "With Single Airports")
  //  console.log(city.city);
  //  { city.city.airports.map( airport => {
  //   return <li id="ui-id-588" tabindex="-1" className="ui-menu-item-wrapper">{city.city} (BUFSINGLE), <span className="highlight-auto-list">New Yor</span>k, USA</li>
   
  //  } ) }
  // } else{
  //   console.log(city, "With Multiple Airports")
  //     {
  //     //   city.city.airports.map(multiAirports =>{
  //     //     console.log(multiAirports, "multiairports")
  //     //  {
            
  //     //       multiAirports.map(mul=>{
  //     //           return <li id="ui-id-1244" tabIndex={-1} className="ui-menu-item-wrapper">
  //     //           <span className="highlight-auto-list">{mul.name}</span> {mul.iataCode}, <span className="highlight-auto-list">New York,</span> USA
  //     //         </li>
              
              
  //     //       })
  //     //   } 
        
  //     // })
  //     }
  // }
  }
    

export default FlightResultCard;