const Destination_Section=({ aboutContentDynamic})=>{
    return <div className="contents">
    {/* Content */}
    <h4>{aboutContentDynamic.heading} </h4>
    <p>
      {/* Do you have Los Angeles as the next destination you plan to travel to? If
      the answer is yes, then book your flights to Los Angeles with Red Umbrella
      Holidays at an affordable airfare. You can score great deals on your flights
      and plan a pocket-friendly trip with us. */}
      {aboutContentDynamic.paragraph}
    </p>
    <p />
    <h4>{aboutContentDynamic.heading2}</h4>
    <h4>Q. What is the perfect time to visit Los Angeles?</h4>
    <p>
      Los Angeles is one of the few cities in the world that you can visit all
      year round. However, Red Umbrella Holidays recommends the ideal time to
      visit Los Angeles is from May till September. This period is perfect as the
      city truly comes alive with events, festivals, and concerts. The warm
      weather and iconic attractions are what attracts tourists from across the
      globe. If you are looking to avoid the peak travel season, Red Umbrella
      Holidays suggests you should plan your visit during September and November.
    </p>
    <h4>Q. How far in advance should I book my tickets to fly to Los Angeles?</h4>
    <p>
      Red Umbrella Holidays suggests you should ideally book your flight tickets
      to Los Angeles at least three to four weeks in advance before your scheduled
      departure for great deals.
    </p>
    <h4>Q. Which airlines offer the cheapest airfares to Los Angeles?</h4>
    <p>United Airlines offers the cheapest airfares to Los Angeles.</p>
    <h4>Q. What are the best attractions that I should visit in Los Angeles?</h4>
    <ul>
      <li style={{ marginLeft: "21.2pt" }}>Universal Studio Hollywood</li>
      <li style={{ marginLeft: "21.2pt" }}>Disneyland Resort</li>
      <li style={{ marginLeft: "21.2pt" }}>La Brea Tar Pits</li>
      <li style={{ marginLeft: "21.2pt" }}>Museum of Contemporary Art</li>
      <li style={{ marginLeft: "21.2pt" }}>Santa Monica</li>
      <li style={{ marginLeft: "21.2pt" }}>The Original Farmers Market</li>
      <li style={{ marginLeft: "21.2pt" }}>Griffith Park</li>
      <li style={{ marginLeft: "21.2pt" }}>Griffith Observatory</li>
    </ul>
    <h4>Q. What is the main airport and nearby airports of Los Angeles?</h4>
    <p>
      The main airport of Los Angeles is Los Angeles International Airport, and
      its nearby airport options are:
    </p>
    <ul>
      <li style={{ marginLeft: "21.2pt" }}>Ivanpah Valley Airport</li>
      <li style={{ marginLeft: "21.2pt" }}>North Los Angeles Airport</li>
    </ul>
    <h4>
      Q. Which major airlines are available on Red Umbrella Holidays to fly to Los
      Angeles?
    </h4>
    <p />
    <ul className="ruhuk-airline-dest-links">
      <li>
        <a
          style={{ color: "#333", textDecoration: "underline" }}
          target="_blank"
          href="/book-airlines-flights/united-airlines-reservations"
        >
          United Airlines
        </a>
      </li>
      <li>
        <a
          style={{ color: "#333", textDecoration: "underline" }}
          target="_blank"
          href="/book-airlines-flights/american-airlines-reservations"
        >
          American Airlines
        </a>
      </li>
      <li>
        <a
          style={{ color: "#333", textDecoration: "underline" }}
          target="_blank"
          href="/book-airlines-flights/frontier-airlines-reservations"
        >
          Frontier Airlines
        </a>
      </li>
      <li>
        <a
          style={{ color: "#333", textDecoration: "underline" }}
          target="_blank"
          href="/book-airlines-flights/spirit-airlines-reservations"
        >
          Spirit Airlines
        </a>
      </li>
    </ul>
    <h4>Why Book Flights to Los Angeles with Red Umbrella Holidays?</h4>
    <ul>
      <li>Our vision is to ensure that you have a fun time in Los Angeles.</li>
      <li>
        You may avail great discounts on your flight tickets to Los Angeles.
      </li>
      <li>
        Our Travel Curators guide you at every step of booking Los Angeles flight
        tickets.{" "}
      </li>
      <li>We book your journey to Los Angeles at a pocket-friendly price.</li>
      <li>
        We advise you on our cheapest deals and promo codes to fly to Los Angeles.
      </li>
    </ul>
  </div>
  
}
export default Destination_Section;