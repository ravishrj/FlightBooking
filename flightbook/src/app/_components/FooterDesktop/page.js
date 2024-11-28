const FooterDesktop = () => {
  return (
    <footer>
      <section className="footerLeft">
        <div>
          <a href="javascript:void(0)">
            {" "}
            <img src="/Content/images/logo.png" alt="Red umbrella" />
          </a>
          <p className="socialMedia">
            <a
              href="https://www.instagram.com/redumbrellaholidays/"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/redumbrellaholidays"
              target="_blank"
            >
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </p>
        </div>
        <div>
          <h4>important links</h4>
          <ul>
            <li>
              <a href="/about-us"> ABOUT US</a>
            </li>
            <li>
              <a href="/faqs"> FAQs</a>
            </li>
            <li>
              <a href="/disclaimer"> DISCLAIMER</a>
            </li>
            <li>
              <a href="/contact-us"> CONTACT US</a>
            </li>
            <li>
              <a href="/sitemap"> SITEMAP</a>
            </li>
            <li>
              <a href="/baggage-policy"> BAGGAGE POLICY</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>LEGAL</h4>
          <ul>
            <li>
              <a href="/terms-and-conditions"> TERMS &amp; CONDITIONS</a>
            </li>
            <li>
              <a href="/privacy-policy"> PRIVACY POLICY</a>
            </li>
            <li>
              <a href="/price-match-policy"> PRICE MATCH PROMISE</a>
            </li>
            <li>
              <a href="/taxes-and-fee"> TAXES &amp; FEES</a>
            </li>
            <li>
              <a href="/post-ticketing-fees"> POST TICKETING FEE</a>
            </li>
            <li>
              <a href="/damage-management-policy"> DAMAGE MANAGEMENT POLICY</a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onclick="openpopupwindow('/service-fees')"
              >
                OUR SERVICE FEES{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>CONTACT US</h4>
          <p></p>
          <div
            className="cnt"
            itemScope=""
            itemType="https://schema.org/TravelAgency"
          >
            <span className="ttl" itemProp="name">
              Red Umbrella Holidays
            </span>
            <span
              className="address-div"
              itemProp="address"
              itemScope=""
              itemType="https://schema.org/PostalAddress"
            >
              <i className="fa fa-map-marker" />
              <span>
                <span itemProp="streetAddress">
                  448 PRAIRIE KNOLL DR NAPERVILLE
                </span>
                <span itemProp="postalCode">IL 60565</span>
                <span itemProp="addressLocality">United States</span>
              </span>
            </span>
            <span className="tel-span" itemProp="telephone">
              <i className="fa fa-phone-square" />
              <a href="tel:1-833-914-2482">1-833-914-2482</a>
            </span>
            <span className="mail-span" itemProp="email">
              <i className="fa fa-envelope" />
              <a href="mailto:sales@redumbrellaholidays.com">
                {" "}
                sales<span>@</span>redumbrellaholidays.com
              </a>
            </span>
          </div>
          <p />
        </div>
      </section>
      <section className="footerRight">
        <h4>SUBSCRIBE</h4>
        <p>Never miss our updates and offers! </p>
        <div className="subscribeEmailerHolder">
          <form
            id="frmNewsletter"
            action="/FooterLinks/ContactUs"
            method="post"
          >
            <input
              type="hidden"
              id="hdnSubscribe"
              name="FormType"
              defaultValue="Subscribe"
            />
            <input
              type="text"
              placeholder="Your email address"
              id="txtNewsletterMail"
              maxLength={55}
              name="Email"
            />
            <input
              type="button"
              onclick="return subscribeEmail()"
              defaultValue="Subscribe!"
              id="btnNewsletterSubmit"
            />
            <span
              id="spanNewsletterThanks"
              style={{ display: "none" }}
              className="subscrbeThanks"
            >
              Thanks for subscribing to RedUmbrellaHolidays!
            </span>
            <div id="spnAlreadyExist" className="errorMsg" />
          </form>
        </div>
        <b className="subcribeContent">
          You consent to get marketing content by entering your Email ID. For
          details, read our <a href="/privacy-policy"> Privacy Policy</a>,{" "}
          <a href="/terms-and-conditions"> Terms &amp; Conditions</a>
        </b>
      </section>
      <section className="footerBootom">
        <div>
          <p className="footeraddress">
            RED UMBRELLA HOLIDAYS LLC bearing Registration No. 10843049, is
            located at 448 PRAIRIE KNOLL DR NAPERVILLE, IL 60565.
          </p>
          <div className="termcndintionFootertxt">
            <p>
              All users are subject to RED UMBRELLA HOLIDAYS
              <a href="/terms-and-conditions">
                {" "}
                Terms &amp; Conditions
              </a> and <a href="/privacy-policy"> Privacy Policy</a>
            </p>
            <p>
              Subject to{" "}
              <a
                href="javascript:void(0)"
                onclick="openpopupwindow('/service-fees')"
              >
                our service fees
              </a>{" "}
              and <a href="/post-ticketing-fees"> Post Ticketing Fees</a>. See
              Red Umbrella Holidays <a href="/cookies"> Cookie Policy</a>{" "}
            </p>
          </div>
        </div>
        <p>
          <img src="/Content/images/visalogo.png" />
          <br />© RED UMBRELLA HOLIDAYS 2024. ALL RIGHTS RESERVED.
        </p>
      </section>
      <a href="#" title="Scroll to Top" className="g-orange ScrollTop onscroll">
        <i className="fa fa-angle-up" />
      </a>
      {/* <style
        dangerouslySetInnerHTML={{
          __html:
            "\n   \nsection.footerBootom div {\ntext-align: left;\n}\nsection.footerBootom div p {\n    text-align: left;\n    padding-left: 0;\n    padding-top: 0;\n}\n\n",
        }}
      /> */}
      <style>
        {" "}
        {`
   
   section.footerBootom div {
   text-align: left;
   }
   section.footerBootom div p {
       text-align: left;
       padding-left: 0;
       padding-top: 0;
   }
   `}
      </style>
    </footer>
  );
};
export default FooterDesktop;
