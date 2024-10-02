const Cars=()=>{
    return <>
    <section className="banner carHeroBanner ">
    <div className="container">
    <div className="captionBanner">
      <h1>Book Easy Car Rentals</h1>
      <p>Now, wherever you go, you can rent the perfect car! </p>
    </div>
  </div>
    </section>
    <section className="productSec">
  <div className="container">
    <h2>Cheap Car Rentals on RedUmbrella Holidays</h2>
    <p>
      You may now reserve rental cars across Europe and the US for a variety of
      new automobile models. Make the most of your road trips by finding the
      finest bargains that provide you with the best value for intercity travel.
      Choose from fleets fit for an off-road excursion, luxury cars, or
      reasonably priced cars.{" "}
    </p>
    <div className="">
      <div className="prodCard item">
        <div className="description">
          <h4>Cars</h4>
          <p>A diverse selection of compact and fuel-efficient vehicles </p>
          <a href="/car-detail/car" className="seeMore g-orange">
            See More
          </a>
        </div>
        <div className="imageDiv">
          <img src="/Content/images/carThumb1.jpg" />
        </div>
      </div>
      <div className="prodCard item">
        <div className="description">
          <h4>Electric</h4>
          <p>
            Go electric, hybrid, or plug-in vehicles to protect the environment.
          </p>
          <a href="/car-detail/electric" className="seeMore g-orange">
            See More
          </a>
        </div>
        <div className="imageDiv">
          <img src="/Content/images/carThumb2.jpg" />
        </div>
      </div>
      <div className="prodCard item">
        <div className="description">
          <h4>Prestige</h4>
          <p>
            Ultra-luxury vehicles that prioritize comfort and are inventive
            marvels
          </p>
          <a href="/car-detail/prestige" className="seeMore g-orange">
            See More
          </a>
        </div>
        <div className="imageDiv">
          <img src="/Content/images/carThumb3.jpg" />
        </div>
      </div>
      <div className="prodCard item">
        <div className="description">
          <h4>Vans</h4>
          <p>Comfortable and safe plus-size cars with plenty of space </p>
          <a href="/car-detail/van" className="seeMore g-orange">
            See More
          </a>
        </div>
        <div className="imageDiv">
          <img src="/Content/images/carThumb4.jpg" />
        </div>
      </div>
    </div>
    <div className="discountSec">
      <ul>
        <li>
          <span>
            <img src="/Content/images/carIcon-1.png" />
          </span>
          <div className="content">
            <h5>Expert Support</h5>Get round-the-clock assistance from
            professionals for any questions you have regarding car rentals,
            cancellations, and other topics.
          </div>
        </li>
        <li>
          <span>
            <img src="/Content/images/carIcon-2.png" />
          </span>
          <div className="content">
            <h5>Versatile Rentals</h5>Select from daily, weekly, or monthly
            rentals that accommodate all kinds of travelers and itinerary
            arrangements.
          </div>
        </li>
        <li>
          <span>
            <img src="/Content/images/carIcon-3.png" />
          </span>
          <div className="content">
            <h5>Online Check-in</h5>Make your reservation for a car utilizing
            our user-friendly online car rental platform from any location.{" "}
          </div>
        </li>
      </ul>
    </div>
  </div>
    </section>
    <section className="CallStrip">
  <div className="container">
    <div className="flexFooterStrip">
      <a href="tel:1-833-914-2482" className="callLinkFooter g-orange">
        Call Us at 1-833-914-2482
      </a>{" "}
      and get assistance 24/7
    </div>
  </div>
    </section>
     <section className="getcode">
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




    </>
}
export default Cars;