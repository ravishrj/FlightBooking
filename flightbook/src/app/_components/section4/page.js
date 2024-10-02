const Section4=()=>{
    return <section className="getcode">
    <div className="container">
      <h2>SUBSCRIBE</h2>
      <p>Never miss our updates and offers! </p>
      <form id="frmNewsletter" action="/FooterLinks/ContactUs" method="post">
        <input
          type="hidden"
          id="hdnSubscribe"
          name="FormType"
          defaultValue="Subscribe"
        />
        <span id="spanNewsletterThanks" style={{ display: "none" }}>
          Thanks for subscribing to RedUmbrellaHolidays!
        </span>
        <input
          className="form-control"
          id="txtNewsletterMail"
          type="text"
          maxLength={55}
          placeholder="Your email address"
          name="Email"
        />
        <button
          type="submit"
          className="g-orange"
          onclick="return subscribeEmail()"
          id="btnNewsletterSubmit"
        >
          SUBSCRIBE
        </button>
        <span id="spnAlreadyExist" className="spnAlreadyExist" />
      </form>
      <b className="subcribeContent">
        You consent to get marketing content by entering your Email ID. For
        details, read our <a href="/privacy-policy"> Privacy Policy</a>,{" "}
        <a href="/terms-and-conditions"> Terms &amp; Conditions</a>
      </b>
    </div>
  </section>
  
}

export default Section4;