const VacationTab=()=>{
return <div id="VacationTabDealSection">
<div className="container">
  <p className="disclaimer vactabdisc">
    * All holiday package rates displayed are updated as of Oct 09, 2024, at
    9:26 AM EST. They are on a twin-sharing basis for one night unless stated
    otherwise.{" "}
    <a href="javascript:void(0)" onclick="openpopupwindow('/service-fees')">
      Our Service Fees
    </a>{" "}
    and{" "}
    <a target="_blank" href="/taxes-and-fee">
      taxes and fees
    </a>{" "}
    may apply. Please read our{" "}
    <a href="/terms-and-conditions" target="_blank">
      Terms &amp; Conditions
    </a>{" "}
    carefully.
  </p>
</div>
<section id="FlightOffers" className="middleContainer blkbackground">
  {/* Start get inspired*/}
  <div className="bg-box" />
  <h2>EXPERIENCES</h2>
  {/* Experiences & occasions Slides */}
  <div className="container">
    <div className="luxuryListing">
      <div className="expslider">
        <div className="item">
          <a
            className="experiece-clickable-box"
            style={{ cursor: "pointer" }}
            href="javascript:void(0)"
          />
          <img src="/Content/images/maldives.png" alt="beach" />
          <h1>Beaches</h1>
          <div className="btn-planing">
            <button
              type="button"
              className="red-btn"
              onclick="location.href = '/experience?loc=beach&pagetype=experience'"
            >
              START PLANNING
            </button>
          </div>
        </div>
        <div className="item">
          <a
            className="experiece-clickable-box"
            style={{ cursor: "pointer" }}
            href="javascript:void(0)"
          />
          <img src="/Content/images/elepahant.png" alt="Safari" />
          <h1>Safari</h1>
          <div className="btn-planing">
            <button
              type="button"
              className="red-btn"
              onclick="location.href = '/experience?loc=safari&pagetype=experience'"
            >
              START PLANNING
            </button>
          </div>
        </div>
        <div className="item">
          <a
            className="experiece-clickable-box"
            style={{ cursor: "pointer" }}
            href="javascript:void(0)"
          />
          <img src="/Content/images/family.png" alt="Family" />
          <h1>Family</h1>
          <div className="btn-planing">
            <button
              type="button"
              className="red-btn"
              onclick="location.href = '/experience?loc=family&pagetype=experience'"
            >
              START PLANNING
            </button>
          </div>
        </div>
        <div className="item">
          <a
            className="experiece-clickable-box"
            style={{ cursor: "pointer" }}
            href="javascript:void(0)"
          />
          <img src="/Content/images/honymoon.png" alt="Honymoon" />
          <h1>Honeymoon </h1>
          <div className="btn-planing">
            <button
              type="button"
              className="red-btn"
              onclick="location.href = '/experience?loc=honeymoon&pagetype=experience'"
            >
              START PLANNING
            </button>
          </div>
        </div>
        <div className="item">
          <a
            className="experiece-clickable-box"
            style={{ cursor: "pointer" }}
            href="javascript:void(0)"
          />
          <img src="/Content/images/luxury.png" alt="Luxury" />
          <h1>Luxury </h1>
          <div className="btn-planing">
            <button
              type="button"
              className="red-btn"
              onclick="location.href = '/experience?loc=luxury&pagetype=experience'"
            >
              START PLANNING
            </button>
          </div>
        </div>
        <div className="item">
          <a
            className="experiece-clickable-box"
            style={{ cursor: "pointer" }}
            href="javascript:void(0)"
          />
          <img src="/Content/images/group.png" alt="Group" />
          <h1>Group</h1>
          <div className="btn-planing">
            <button
              type="button"
              className="red-btn"
              onclick="location.href = '/experience?loc=group&pagetype=experience'"
            >
              START PLANNING
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End get inspired*/}
</section>
</div>

}
export default VacationTab