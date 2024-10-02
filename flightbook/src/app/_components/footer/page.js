const Footer=()=>{
    return <footer className="footer">
    <div className="container">
      <div className="left-footer">
        <img src="/Content/images/logo.png" />
      </div>
      <div className="right-footer">
        <p></p>
        <div
          className="cnt"
          itemScope=""
          itemType="https://schema.org/TravelAgency"
        >
          <span itemProp="name">Red Umbrella Holidays</span>
          <div
            itemProp="address"
            itemScope=""
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="streetAddress">448 PRAIRIE KNOLL DR NAPERVILLE</span>
            <span itemProp="postalCode">IL 60565</span>
            <span itemProp="addressLocality">United States</span>
          </div>
          <span itemProp="telephone">
            <a href="tel:1-833-914-2482">1-833-914-2482</a>
          </span>
          ,<br />
          <span itemProp="email">
            <a href="mailto:sales@redumbrellaholidays.com">
              sales<span>@</span>redumbrellaholidays.com
            </a>
          </span>
        </div>
        <p />
      </div>
    </div>
  </footer>
  
}
export default Footer;