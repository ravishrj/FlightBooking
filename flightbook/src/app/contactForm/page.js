const ContactForm = () => {
return <div className="contact-form container">
<div className="forms">
  <form id="contactform" action="/contact-us">
    <div className="fdetail-hdr">
      <h3>Get in touch</h3>
    </div>
    <div className="flight-details">
      <input
        id="hdnFormType"
        name="Formtype"
        type="hidden"
        defaultValue="ContactUs"
      />
      <div className="form-field">
        <input
          id="txtName"
          className="nameError"
          maxLength={50}
          name="Name"
          placeholder="Full Name*"
          required=""
          type="text"
          defaultValue=""
        />
        <span id="error-name" className="error" />
      </div>
      <div className="form-field">
        <input
          id="txtEmail"
          className="emailError"
          name="Email"
          placeholder="Email Address*"
          required=""
          type="email"
          defaultValue=""
        />
        <span id="error-email" className="error" />
      </div>
      <div className="form-field">
        <input
          id="txtMobile"
          className=" phoneError"
          maxLength={12}
          name="Phone"
          onkeypress="return isNumberKeys(event)"
          onpaste="return false"
          placeholder="Mobile Number*"
          required=""
          type="tel"
          defaultValue=""
        />
        <span id="error-phone" className="error" />
      </div>
      <div className="form-field">
        <textarea
          id="txtMessage"
          className=""
          cols={20}
          maxLength={500}
          name="Comment"
          placeholder="Type Message Here*"
          required=""
          rows={2}
          defaultValue={""}
        />
        <span id="error-comment" className="error" />
      </div>
      <div className="form-field btsc">
        <button type="button" id="btnSubmit" className="g-orange">
          Submit
        </button>
      </div>
      <div id="thanksmsg" style={{ display: "none" }}>
        <span className="right-thanks" />
        Thank you! We will get in touch with you soon.
        <span onclick="return Close()">X</span>
      </div>
    </div>
  </form>
</div>
</div>

}

export default ContactForm;