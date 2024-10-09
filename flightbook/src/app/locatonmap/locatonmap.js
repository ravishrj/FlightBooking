const LocatonMap =()=>{
    return <section className="locatonmap">
    <div className="container">
      <div className="fdetail-hdr">
        <h3>Location Map</h3>
      </div>
      <div className="flight-details">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.387126411511!2d-88.14533798460278!3d41.73374207923387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e583b7a817a81%3A0x2ff64702f975d666!2s448%20Prairie%20Knoll%20Dr%2C%20Naperville%2C%20IL%2060565%2C%20USA!5e0!3m2!1sen!2sin!4v1634552359846!5m2!1sen!2sin"
          frameBorder={0}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  </section>
  
}
export default LocatonMap;