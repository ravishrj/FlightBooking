const Cruise=()=>{
    return <> <section className="banners ">
    <div className="bannerInner">
      <div className="">
        <div className="newLogoFlex">
          <a href="tel:1-833-914-2482" className="ddka" />
          <div className="siteLogo">
            <img src="/Content/images/logo.png" />
          </div>
          <div className="rightDiv">
            <div className="siteNumb">1-833-914-2482</div>
            <div className="hamburger" />
          </div>
        </div>
        <div className="airlineLlogos"></div>
        <div className="bannerCarousel owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-770px, 0px, 0px)",
                transition: "all",
                width: 3080
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: 375, marginRight: 10 }}
              >
                <div className="item">
                  <a href="tel:1-833-914-2482">
                    <img src="/Content/images/cruiseBannerCarnival.jpg" />
                  </a>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 375, marginRight: 10 }}
              >
                <div className="item">
                  <a href="tel:1-833-914-2482">
                    <img src="/Content/images/cruiseBannerNorwegian.jpg" />
                  </a>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: 375, marginRight: 10 }}
              >
                <div className="item">
                  <a href="tel:1-833-914-2482">
                    <img src="/Content/images/cruiseBannerRoyal.jpg" />
                  </a>
                </div>
              </div>
              <div className="owl-item" style={{ width: 375, marginRight: 10 }}>
                <div className="item">
                  <a href="tel:1-833-914-2482">
                    <img src="/Content/images/cruiseBannerCelebrity.jpg" />
                  </a>
                </div>
              </div>
              <div className="owl-item" style={{ width: 375, marginRight: 10 }}>
                <div className="item">
                  <a href="tel:1-833-914-2482">
                    <img src="/Content/images/cruiseBannerCarnival.jpg" />
                  </a>
                </div>
              </div>
              <div className="owl-item" style={{ width: 375, marginRight: 10 }}>
                <div className="item">
                  <a href="tel:1-833-914-2482">
                    <img src="/Content/images/cruiseBannerNorwegian.jpg" />
                  </a>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 375, marginRight: 10 }}
              >
                <div className="item">
                  <a href="tel:1-833-914-2482">
                    <img src="/Content/images/cruiseBannerRoyal.jpg" />
                  </a>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 375, marginRight: 10 }}
              >
                <div className="item">
                  <a href="tel:1-833-914-2482">
                    <img src="/Content/images/cruiseBannerCelebrity.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots">
            <button role="button" className="owl-dot active">
              <span />
            </button>
            <button role="button" className="owl-dot">
              <span />
            </button>
            <button role="button" className="owl-dot">
              <span />
            </button>
            <button role="button" className="owl-dot">
              <span />
            </button>
          </div>
        </div>
        <h2>
          <b>Call Us to Avail Offer</b>
        </h2>
        <div className="numbers themeBg">
          <a href="tel:1-833-914-2482">
            <span className="ringing_phone" />
            <span className="nbrs"> 1-833-914-2482</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <div className="absolutSearchWidget">
  <div className="searchContainer">
    <form id="formCruiseSearchWidget">
      <input
        name="FlightUniqueId"
        type="hidden"
        id="hdnFlightUniqueCode"
        defaultValue="fe4516af-7450-4684-84b6-12079d9d60a2"
      />
      <input name="sea" type="hidden" id="hdnIsSeaCruise" defaultValue={1} />
      <input
        name="package"
        type="hidden"
        id="hdnAllCruise"
        defaultValue="all"
      />
      <div className="searchWidget">
        <div className="tabs dFlex">
          <ul className="dFlex">
            <li className="liCruiseType sea-cruisetype active">
              <a href="javascript:;">ocean cruises</a>
              <input
                type="radio"
                name="cruisetype"
                id="rdoSeaCruise"
                onclick="SetCruiseType('sea')"
              />
            </li>
            <li className="liCruiseType river-cruisetype">
              <a href="javascript:;">river cruises</a>
              <input
                type="radio"
                name="cruisetype"
                id="rdoRiverCruise"
                onclick="SetCruiseType('river')"
              />
            </li>
          </ul>
          <div className="checkTabs">
            <h4>search all cruises by</h4>
            <div className="liPackageType package-only">
              Package Only{" "}
              <input
                type="radio"
                name="packagetype"
                defaultChecked=""
                id="chkPackageType"
                onclick="SetPackageType('package')"
              />
              <span className="checked" />
            </div>
            <div className="liPackageType  all-cruise active">
              All Cruise{" "}
              <input
                type="radio"
                name="packagetype"
                defaultChecked=""
                id="chkAllCruise"
                onclick="SetPackageType('allcruise')"
              />
              <span className="checked" />
            </div>
          </div>
        </div>
        <div className="searchBox dFlex">
          <ul>
            <li>
              <input
                type="text"
                readOnly="readonly"
                id="txtAreaSelect"
                name="AreaSelectName"
                defaultValue="Cruise Area"
                onclick="ToggerCruiseAreaWrapper()"
              />
              <input type="hidden" name="area" id="hdnAreaSelect" />
              <input type="hidden" id="hdnAreaPreSelectName" />
              <input type="hidden" id="hdnAreaPreSelect" />
              <div
                id="divCruiseAreaWrapper"
                className="popupSelect"
                style={{ display: "none" }}
              >
                <div className="fixedBtnRow">
                  <a
                    id="ancAreaSelectNone"
                    href="javascript:void(0)"
                    onclick="UnselectAllRegions(); return false;"
                  >
                    Select None
                  </a>
                  <a
                    id="ancAreaSelectOK"
                    href="javascript:void(0)"
                    onclick="ToggerCruiseAreaWrapper()"
                  >
                    OK
                  </a>
                </div>
                <ul id="ulCruiseArea">
                  <li className="main-area" id="li_Area_102_NA">
                    <label>
                      America
                      <input
                        type="checkbox"
                        id="chk_Area_102_NA"
                        defaultValue="America"
                        onclick='addRemoveArea(this,"America","102")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_4">
                    <label>
                      Caribbean
                      <input
                        type="checkbox"
                        id="chk_Area_102_4"
                        defaultValue="Caribbean"
                        onclick='addRemoveArea(this,"Caribbean","4")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_40">
                    <label>
                      Caribbean (eastern)
                      <input
                        type="checkbox"
                        id="chk_Area_102_40"
                        defaultValue="Caribbean (eastern)"
                        onclick='addRemoveArea(this,"Caribbean (eastern)","40")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_41">
                    <label>
                      Caribbean (western)
                      <input
                        type="checkbox"
                        id="chk_Area_102_41"
                        defaultValue="Caribbean (western)"
                        onclick='addRemoveArea(this,"Caribbean (western)","41")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_42">
                    <label>
                      Caribbean (southern)
                      <input
                        type="checkbox"
                        id="chk_Area_102_42"
                        defaultValue="Caribbean (southern)"
                        onclick='addRemoveArea(this,"Caribbean (southern)","42")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_202">
                    <label>
                      North America
                      <input
                        type="checkbox"
                        id="chk_Area_102_202"
                        defaultValue="North America"
                        onclick='addRemoveArea(this,"North America","202")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_14">
                    <label>
                      Alaska
                      <input
                        type="checkbox"
                        id="chk_Area_102_14"
                        defaultValue="Alaska"
                        onclick='addRemoveArea(this,"Alaska","14")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_44">
                    <label>
                      North America East Coast
                      <input
                        type="checkbox"
                        id="chk_Area_102_44"
                        defaultValue="North America East Coast"
                        onclick='addRemoveArea(this,"North America East Coast","44")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_64">
                    <label>
                      North America West Coast
                      <input
                        type="checkbox"
                        id="chk_Area_102_64"
                        defaultValue="North America West Coast"
                        onclick='addRemoveArea(this,"North America West Coast","64")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_10">
                    <label>
                      South America
                      <input
                        type="checkbox"
                        id="chk_Area_102_10"
                        defaultValue="South America"
                        onclick='addRemoveArea(this,"South America","10")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_21">
                    <label>
                      Antarctica
                      <input
                        type="checkbox"
                        id="chk_Area_102_21"
                        defaultValue="Antarctica"
                        onclick='addRemoveArea(this,"Antarctica","21")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_55">
                    <label>
                      Galapagos
                      <input
                        type="checkbox"
                        id="chk_Area_102_55"
                        defaultValue="Galapagos"
                        onclick='addRemoveArea(this,"Galapagos","55")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_43">
                    <label>
                      Panama Canal
                      <input
                        type="checkbox"
                        id="chk_Area_102_43"
                        defaultValue="Panama Canal"
                        onclick='addRemoveArea(this,"Panama Canal","43")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_102_62">
                    <label>
                      Round Southamerica
                      <input
                        type="checkbox"
                        id="chk_Area_102_62"
                        defaultValue="Round Southamerica"
                        onclick='addRemoveArea(this,"Round Southamerica","62")'
                      />
                    </label>
                  </li>
                  <li className="main-area" id="li_Area_84_NA">
                    <label>
                      Arctic
                      <input
                        type="checkbox"
                        id="chk_Area_84_NA"
                        defaultValue="Arctic"
                        onclick='addRemoveArea(this,"Arctic","84")'
                      />
                    </label>
                  </li>
                  <li className="main-area" id="li_Area_103_NA">
                    <label>
                      Asia
                      <input
                        type="checkbox"
                        id="chk_Area_103_NA"
                        defaultValue="Asia"
                        onclick='addRemoveArea(this,"Asia","103")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_103_12">
                    <label>
                      Far East
                      <input
                        type="checkbox"
                        id="chk_Area_103_12"
                        defaultValue="Far East"
                        onclick='addRemoveArea(this,"Far East","12")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_103_15">
                    <label>
                      Indian Ocean
                      <input
                        type="checkbox"
                        id="chk_Area_103_15"
                        defaultValue="Indian Ocean"
                        onclick='addRemoveArea(this,"Indian Ocean","15")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_103_19">
                    <label>
                      South East Asia
                      <input
                        type="checkbox"
                        id="chk_Area_103_19"
                        defaultValue="South East Asia"
                        onclick='addRemoveArea(this,"South East Asia","19")'
                      />
                    </label>
                  </li>
                  <li className="main-area" id="li_Area_105_NA">
                    <label>
                      Europe
                      <input
                        type="checkbox"
                        id="chk_Area_105_NA"
                        defaultValue="Europe"
                        onclick='addRemoveArea(this,"Europe","105")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_68">
                    <label>
                      Mediterranean
                      <input
                        type="checkbox"
                        id="chk_Area_105_68"
                        defaultValue="Mediterranean"
                        onclick='addRemoveArea(this,"Mediterranean","68")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_7">
                    <label>
                      Black Sea
                      <input
                        type="checkbox"
                        id="chk_Area_105_7"
                        defaultValue="Black Sea"
                        onclick='addRemoveArea(this,"Black Sea","7")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_6">
                    <label>
                      Mediterranean, central
                      <input
                        type="checkbox"
                        id="chk_Area_105_6"
                        defaultValue="Mediterranean, central"
                        onclick='addRemoveArea(this,"Mediterranean, central","6")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_2">
                    <label>
                      Mediterranean, eastern
                      <input
                        type="checkbox"
                        id="chk_Area_105_2"
                        defaultValue="Mediterranean, eastern"
                        onclick='addRemoveArea(this,"Mediterranean, eastern","2")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_1">
                    <label>
                      Mediterranean, western
                      <input
                        type="checkbox"
                        id="chk_Area_105_1"
                        defaultValue="Mediterranean, western"
                        onclick='addRemoveArea(this,"Mediterranean, western","1")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_205">
                    <label>
                      Northeurope
                      <input
                        type="checkbox"
                        id="chk_Area_105_205"
                        defaultValue="Northeurope"
                        onclick='addRemoveArea(this,"Northeurope","205")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_39">
                    <label>
                      Baltic Sea and Baltic States
                      <input
                        type="checkbox"
                        id="chk_Area_105_39"
                        defaultValue="Baltic Sea and Baltic States"
                        onclick='addRemoveArea(this,"Baltic Sea and Baltic States","39")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_48">
                    <label>
                      Greenland/Iceland/Svalbard
                      <input
                        type="checkbox"
                        id="chk_Area_105_48"
                        defaultValue="Greenland/Iceland/Svalbard"
                        onclick='addRemoveArea(this,"Greenland/Iceland/Svalbard","48")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_53">
                    <label>
                      North Cape
                      <input
                        type="checkbox"
                        id="chk_Area_105_53"
                        defaultValue="North Cape"
                        onclick='addRemoveArea(this,"North Cape","53")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_3">
                    <label>
                      North Europe
                      <input
                        type="checkbox"
                        id="chk_Area_105_3"
                        defaultValue="North Europe"
                        onclick='addRemoveArea(this,"North Europe","3")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_38">
                    <label>
                      Norwegian Fjords
                      <input
                        type="checkbox"
                        id="chk_Area_105_38"
                        defaultValue="Norwegian Fjords"
                        onclick='addRemoveArea(this,"Norwegian Fjords","38")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_206">
                    <label>
                      South Europe
                      <input
                        type="checkbox"
                        id="chk_Area_105_206"
                        defaultValue="South Europe"
                        onclick='addRemoveArea(this,"South Europe","206")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_37">
                    <label>
                      Canary Isles
                      <input
                        type="checkbox"
                        id="chk_Area_105_37"
                        defaultValue="Canary Isles"
                        onclick='addRemoveArea(this,"Canary Isles","37")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_207">
                    <label>
                      West Europe
                      <input
                        type="checkbox"
                        id="chk_Area_105_207"
                        defaultValue="West Europe"
                        onclick='addRemoveArea(this,"West Europe","207")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_61">
                    <label>
                      Around western Europe
                      <input
                        type="checkbox"
                        id="chk_Area_105_61"
                        defaultValue="Around western Europe"
                        onclick='addRemoveArea(this,"Around western Europe","61")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_45">
                    <label>
                      Atlantic Ocean Europe
                      <input
                        type="checkbox"
                        id="chk_Area_105_45"
                        defaultValue="Atlantic Ocean Europe"
                        onclick='addRemoveArea(this,"Atlantic Ocean Europe","45")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_105_52">
                    <label>
                      British Isles
                      <input
                        type="checkbox"
                        id="chk_Area_105_52"
                        defaultValue="British Isles"
                        onclick='addRemoveArea(this,"British Isles","52")'
                      />
                    </label>
                  </li>
                  <li className="main-area" id="li_Area_108_NA">
                    <label>
                      Middle East
                      <input
                        type="checkbox"
                        id="chk_Area_108_NA"
                        defaultValue="Middle East"
                        onclick='addRemoveArea(this,"Middle East","108")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_108_23">
                    <label>
                      Arabic Sea
                      <input
                        type="checkbox"
                        id="chk_Area_108_23"
                        defaultValue="Arabic Sea"
                        onclick='addRemoveArea(this,"Arabic Sea","23")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_108_46">
                    <label>
                      Red Sea
                      <input
                        type="checkbox"
                        id="chk_Area_108_46"
                        defaultValue="Red Sea"
                        onclick='addRemoveArea(this,"Red Sea","46")'
                      />
                    </label>
                  </li>
                  <li className="main-area" id="li_Area_104_NA">
                    <label>
                      Pacific
                      <input
                        type="checkbox"
                        id="chk_Area_104_NA"
                        defaultValue="Pacific"
                        onclick='addRemoveArea(this,"Pacific","104")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_104_18">
                    <label>
                      Australia
                      <input
                        type="checkbox"
                        id="chk_Area_104_18"
                        defaultValue="Australia"
                        onclick='addRemoveArea(this,"Australia","18")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_104_11">
                    <label>
                      Hawaii
                      <input
                        type="checkbox"
                        id="chk_Area_104_11"
                        defaultValue="Hawaii"
                        onclick='addRemoveArea(this,"Hawaii","11")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_104_54">
                    <label>
                      Mexican Riviera
                      <input
                        type="checkbox"
                        id="chk_Area_104_54"
                        defaultValue="Mexican Riviera"
                        onclick='addRemoveArea(this,"Mexican Riviera","54")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_104_13">
                    <label>
                      South Pacific
                      <input
                        type="checkbox"
                        id="chk_Area_104_13"
                        defaultValue="South Pacific"
                        onclick='addRemoveArea(this,"South Pacific","13")'
                      />
                    </label>
                  </li>
                  <li className="main-area" id="li_Area_107_NA">
                    <label>
                      Trans-Cruises
                      <input
                        type="checkbox"
                        id="chk_Area_107_NA"
                        defaultValue="Trans-Cruises"
                        onclick='addRemoveArea(this,"Trans-Cruises","107")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_107_58">
                    <label>
                      Transafrica
                      <input
                        type="checkbox"
                        id="chk_Area_107_58"
                        defaultValue="Transafrica"
                        onclick='addRemoveArea(this,"Transafrica","58")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_107_59">
                    <label>
                      Transamerica
                      <input
                        type="checkbox"
                        id="chk_Area_107_59"
                        defaultValue="Transamerica"
                        onclick='addRemoveArea(this,"Transamerica","59")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_107_60">
                    <label>
                      Transasia
                      <input
                        type="checkbox"
                        id="chk_Area_107_60"
                        defaultValue="Transasia"
                        onclick='addRemoveArea(this,"Transasia","60")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_107_9">
                    <label>
                      Transatlantic
                      <input
                        type="checkbox"
                        id="chk_Area_107_9"
                        defaultValue="Transatlantic"
                        onclick='addRemoveArea(this,"Transatlantic","9")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_107_56">
                    <label>
                      Transorient
                      <input
                        type="checkbox"
                        id="chk_Area_107_56"
                        defaultValue="Transorient"
                        onclick='addRemoveArea(this,"Transorient","56")'
                      />
                    </label>
                  </li>
                  <li className="sub-area" id="li_Area_107_57">
                    <label>
                      Transpacific
                      <input
                        type="checkbox"
                        id="chk_Area_107_57"
                        defaultValue="Transpacific"
                        onclick='addRemoveArea(this,"Transpacific","57")'
                      />
                    </label>
                  </li>
                  <li className="main-area" id="li_Area_8_NA">
                    <label>
                      World Tour
                      <input
                        type="checkbox"
                        id="chk_Area_8_NA"
                        defaultValue="World Tour"
                        onclick='addRemoveArea(this,"World Tour","8")'
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <input
                type="text"
                readOnly="readonly"
                id="txtCruiseLinesSelect"
                name="CruiseLinesSelectName"
                defaultValue="Cruise Line"
                onclick="ToggerCruiseLineWrapper()"
              />
              <input
                type="hidden"
                name="cruiseline"
                id="hdnCruiseLinesSelect"
              />
              <input type="hidden" id="hdnCruiseLinesPreSelectName" />
              <input type="hidden" id="hdnCruiseLinesPreSelect" />
              <div
                id="divCruiseLineWrapper"
                className="popupSelect"
                style={{ display: "none" }}
              >
                <div className="fixedBtnRow">
                  <a
                    id="ancCruiseLineSelectNone"
                    href="javascript:void(0)"
                    onclick="UnselectAllCruise()"
                  >
                    Select None
                  </a>
                  <a
                    id="ancCruiseLineSelectOK"
                    href="javascript:void(0)"
                    onclick="ToggerCruiseLineWrapper()"
                  >
                    OK
                  </a>
                </div>
                <ul id="ulCruiseLine">
                  <li className="main-cruiseline" id="li_CruiseLine_AID">
                    <label>
                      AIDA Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_AID"
                        defaultValue="AIDA Cruises"
                        onclick='addRemoveCruiseLine(this,"AIDA Cruises","AID")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_AZA">
                    <label>
                      Azamara
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_AZA"
                        defaultValue="Azamara"
                        onclick='addRemoveCruiseLine(this,"Azamara","AZA")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_EXP">
                    <label>
                      Explora Journeys
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_EXP"
                        defaultValue="Explora Journeys"
                        onclick='addRemoveCruiseLine(this,"Explora Journeys","EXP")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_CEL">
                    <label>
                      Celebrity Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_CEL"
                        defaultValue="Celebrity Cruises"
                        onclick='addRemoveCruiseLine(this,"Celebrity Cruises","CEL")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_CYL">
                    <label>
                      Celestyal Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_CYL"
                        defaultValue="Celestyal Cruises"
                        onclick='addRemoveCruiseLine(this,"Celestyal Cruises","CYL")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_CST">
                    <label>
                      Costa Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_CST"
                        defaultValue="Costa Cruises"
                        onclick='addRemoveCruiseLine(this,"Costa Cruises","CST")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_CCL">
                    <label>
                      Carnival Cruise
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_CCL"
                        defaultValue="Carnival Cruise"
                        onclick='addRemoveCruiseLine(this,"Carnival Cruise","CCL")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_CSE">
                    <label>
                      CroisiEurope Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_CSE"
                        defaultValue="CroisiEurope Cruises"
                        onclick='addRemoveCruiseLine(this,"CroisiEurope Cruises","CSE")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_CUN">
                    <label>
                      Cunard
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_CUN"
                        defaultValue="Cunard"
                        onclick='addRemoveCruiseLine(this,"Cunard","CUN")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_EMC">
                    <label>
                      Emerald Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_EMC"
                        defaultValue="Emerald Cruises"
                        onclick='addRemoveCruiseLine(this,"Emerald Cruises","EMC")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_HLK">
                    <label>
                      Hapag-Lloyd Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_HLK"
                        defaultValue="Hapag-Lloyd Cruises"
                        onclick='addRemoveCruiseLine(this,"Hapag-Lloyd Cruises","HLK")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_HAL">
                    <label>
                      Holland America
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_HAL"
                        defaultValue="Holland America"
                        onclick='addRemoveCruiseLine(this,"Holland America","HAL")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_HUR">
                    <label>
                      Hurtigruten
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_HUR"
                        defaultValue="Hurtigruten"
                        onclick='addRemoveCruiseLine(this,"Hurtigruten","HUR")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_MSC">
                    <label>
                      MSC Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_MSC"
                        defaultValue="MSC Cruises"
                        onclick='addRemoveCruiseLine(this,"MSC Cruises","MSC")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_NIC">
                    <label>
                      Nicko Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_NIC"
                        defaultValue="Nicko Cruises"
                        onclick='addRemoveCruiseLine(this,"Nicko Cruises","NIC")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_NCL">
                    <label>
                      Norwegian Cruise Line
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_NCL"
                        defaultValue="Norwegian Cruise Line"
                        onclick='addRemoveCruiseLine(this,"Norwegian Cruise Line","NCL")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_OCA">
                    <label>
                      Oceania Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_OCA"
                        defaultValue="Oceania Cruises"
                        onclick='addRemoveCruiseLine(this,"Oceania Cruises","OCA")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_OCE">
                    <label>
                      Oceanwide Expeditions
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_OCE"
                        defaultValue="Oceanwide Expeditions"
                        onclick='addRemoveCruiseLine(this,"Oceanwide Expeditions","OCE")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_PAO">
                    <label>
                      P and O cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_PAO"
                        defaultValue="P and O cruises"
                        onclick='addRemoveCruiseLine(this,"P and O cruises","PAO")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_GAU">
                    <label>
                      Paul Gauguin Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_GAU"
                        defaultValue="Paul Gauguin Cruises"
                        onclick='addRemoveCruiseLine(this,"Paul Gauguin Cruises","GAU")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_COM">
                    <label>
                      PONANT
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_COM"
                        defaultValue="PONANT"
                        onclick='addRemoveCruiseLine(this,"PONANT","COM")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_PCL">
                    <label>
                      Princess Cruises
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_PCL"
                        defaultValue="Princess Cruises"
                        onclick='addRemoveCruiseLine(this,"Princess Cruises","PCL")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_REG">
                    <label>
                      Regent Seven Seas
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_REG"
                        defaultValue="Regent Seven Seas"
                        onclick='addRemoveCruiseLine(this,"Regent Seven Seas","REG")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_RCI">
                    <label>
                      Royal Caribbean
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_RCI"
                        defaultValue="Royal Caribbean"
                        onclick='addRemoveCruiseLine(this,"Royal Caribbean","RCI")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_SCD">
                    <label>
                      Sea Cloud
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_SCD"
                        defaultValue="Sea Cloud"
                        onclick='addRemoveCruiseLine(this,"Sea Cloud","SCD")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_SBN">
                    <label>
                      Seabourn Cruise Line
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_SBN"
                        defaultValue="Seabourn Cruise Line"
                        onclick='addRemoveCruiseLine(this,"Seabourn Cruise Line","SBN")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_SDM">
                    <label>
                      Seadream
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_SDM"
                        defaultValue="Seadream"
                        onclick='addRemoveCruiseLine(this,"Seadream","SDM")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_SSE">
                    <label>
                      Silversea
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_SSE"
                        defaultValue="Silversea"
                        onclick='addRemoveCruiseLine(this,"Silversea","SSE")'
                      />
                    </label>
                  </li>
                  <li className="main-cruiseline" id="li_CruiseLine_THT">
                    <label>
                      Thurgau Travel
                      <input
                        type="checkbox"
                        id="chk_CruiseLine_THT"
                        defaultValue="Thurgau Travel"
                        onclick='addRemoveCruiseLine(this,"Thurgau Travel","THT")'
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <input
                type="text"
                readOnly="readonly"
                id="txtShipSelect"
                name="ShipSelect"
                defaultValue="Ship"
                onclick="ToggerShipWrapper()"
              />
              <input type="hidden" name="ship" id="hdnShipSelect" />
              <input type="hidden" id="hdnShipPreSelectName" />
              <input type="hidden" id="hdnShipPreSelect" />
              <div
                id="divShipWrapper"
                className="popupSelect"
                style={{ display: "none" }}
              >
                <div className="fixedBtnRow">
                  <a
                    id="ancShipSelectNone"
                    href="javascript:void(0)"
                    onclick="UnselectAllShip()"
                  >
                    Select None
                  </a>
                  <a
                    id="ancShipSelectOK"
                    href="javascript:void(0)"
                    onclick="ToggerShipWrapper()"
                  >
                    OK
                  </a>
                </div>
                <ul id="ulShip">
                  <li className="cruise-line-heading" id="li_Ship_AZA">
                    <label>
                      Azamara
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_AZA"
                        defaultValue="Azamara"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YV">
                    <label>
                      Azamara Onward
                      <input
                        type="checkbox"
                        id="chk_Ship_YV"
                        defaultValue="Azamara Onward"
                        onclick='addRemoveShip(this,"Azamara Onward","YV")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YP">
                    <label>
                      Azamara Pursuit
                      <input
                        type="checkbox"
                        id="chk_Ship_YP"
                        defaultValue="Azamara Pursuit"
                        onclick='addRemoveShip(this,"Azamara Pursuit","YP")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YJ">
                    <label>
                      Journey
                      <input
                        type="checkbox"
                        id="chk_Ship_YJ"
                        defaultValue="Journey"
                        onclick='addRemoveShip(this,"Journey","YJ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YQ">
                    <label>
                      Quest
                      <input
                        type="checkbox"
                        id="chk_Ship_YQ"
                        defaultValue="Quest"
                        onclick='addRemoveShip(this,"Quest","YQ")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_AID">
                    <label>
                      AIDA Cruises
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_AID"
                        defaultValue="AIDA Cruises"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AA">
                    <label>
                      AIDAaura
                      <input
                        type="checkbox"
                        id="chk_Ship_AA"
                        defaultValue="AIDAaura"
                        onclick='addRemoveShip(this,"AIDAaura","AA")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AX">
                    <label>
                      AIDAbella
                      <input
                        type="checkbox"
                        id="chk_Ship_AX"
                        defaultValue="AIDAbella"
                        onclick='addRemoveShip(this,"AIDAbella","AX")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AB">
                    <label>
                      AIDAblu
                      <input
                        type="checkbox"
                        id="chk_Ship_AB"
                        defaultValue="AIDAblu"
                        onclick='addRemoveShip(this,"AIDAblu","AB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_A7">
                    <label>
                      AIDAcosma
                      <input
                        type="checkbox"
                        id="chk_Ship_A7"
                        defaultValue="AIDAcosma"
                        onclick='addRemoveShip(this,"AIDAcosma","A7")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AD">
                    <label>
                      AIDAdiva
                      <input
                        type="checkbox"
                        id="chk_Ship_AD"
                        defaultValue="AIDAdiva"
                        onclick='addRemoveShip(this,"AIDAdiva","AD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AU">
                    <label>
                      AIDAluna
                      <input
                        type="checkbox"
                        id="chk_Ship_AU"
                        defaultValue="AIDAluna"
                        onclick='addRemoveShip(this,"AIDAluna","AU")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AY">
                    <label>
                      AIDAmar
                      <input
                        type="checkbox"
                        id="chk_Ship_AY"
                        defaultValue="AIDAmar"
                        onclick='addRemoveShip(this,"AIDAmar","AY")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_A6">
                    <label>
                      Aidanova
                      <input
                        type="checkbox"
                        id="chk_Ship_A6"
                        defaultValue="Aidanova"
                        onclick='addRemoveShip(this,"Aidanova","A6")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_A4">
                    <label>
                      AIDAperla
                      <input
                        type="checkbox"
                        id="chk_Ship_A4"
                        defaultValue="AIDAperla"
                        onclick='addRemoveShip(this,"AIDAperla","A4")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AK">
                    <label>
                      AIDAprima
                      <input
                        type="checkbox"
                        id="chk_Ship_AK"
                        defaultValue="AIDAprima"
                        onclick='addRemoveShip(this,"AIDAprima","AK")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AG">
                    <label>
                      AIDAsol
                      <input
                        type="checkbox"
                        id="chk_Ship_AG"
                        defaultValue="AIDAsol"
                        onclick='addRemoveShip(this,"AIDAsol","AG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_AP">
                    <label>
                      AIDAstella
                      <input
                        type="checkbox"
                        id="chk_Ship_AP"
                        defaultValue="AIDAstella"
                        onclick='addRemoveShip(this,"AIDAstella","AP")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_EXP">
                    <label>
                      Explora Journeys
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_EXP"
                        defaultValue="Explora Journeys"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_M1">
                    <label>
                      EXPLORA I
                      <input
                        type="checkbox"
                        id="chk_Ship_M1"
                        defaultValue="EXPLORA I"
                        onclick='addRemoveShip(this,"EXPLORA I","M1")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_M2">
                    <label>
                      EXPLORA II
                      <input
                        type="checkbox"
                        id="chk_Ship_M2"
                        defaultValue="EXPLORA II"
                        onclick='addRemoveShip(this,"EXPLORA II","M2")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_CEL">
                    <label>
                      Celebrity Cruises
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_CEL"
                        defaultValue="Celebrity Cruises"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YT">
                    <label>
                      Apex
                      <input
                        type="checkbox"
                        id="chk_Ship_YT"
                        defaultValue="Apex"
                        onclick='addRemoveShip(this,"Apex","YT")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YZ">
                    <label>
                      Ascent
                      <input
                        type="checkbox"
                        id="chk_Ship_YZ"
                        defaultValue="Ascent"
                        onclick='addRemoveShip(this,"Ascent","YZ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YU">
                    <label>
                      Beyond
                      <input
                        type="checkbox"
                        id="chk_Ship_YU"
                        defaultValue="Beyond"
                        onclick='addRemoveShip(this,"Beyond","YU")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YL">
                    <label>
                      Constellation
                      <input
                        type="checkbox"
                        id="chk_Ship_YL"
                        defaultValue="Constellation"
                        onclick='addRemoveShip(this,"Constellation","YL")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YA">
                    <label>
                      Eclipse
                      <input
                        type="checkbox"
                        id="chk_Ship_YA"
                        defaultValue="Eclipse"
                        onclick='addRemoveShip(this,"Eclipse","YA")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YD">
                    <label>
                      Edge
                      <input
                        type="checkbox"
                        id="chk_Ship_YD"
                        defaultValue="Edge"
                        onclick='addRemoveShip(this,"Edge","YD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YE">
                    <label>
                      Equinox
                      <input
                        type="checkbox"
                        id="chk_Ship_YE"
                        defaultValue="Equinox"
                        onclick='addRemoveShip(this,"Equinox","YE")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YO">
                    <label>
                      Flora
                      <input
                        type="checkbox"
                        id="chk_Ship_YO"
                        defaultValue="Flora"
                        onclick='addRemoveShip(this,"Flora","YO")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YJ">
                    <label>
                      Infinity
                      <input
                        type="checkbox"
                        id="chk_Ship_YJ"
                        defaultValue="Infinity"
                        onclick='addRemoveShip(this,"Infinity","YJ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YM">
                    <label>
                      Millennium
                      <input
                        type="checkbox"
                        id="chk_Ship_YM"
                        defaultValue="Millennium"
                        onclick='addRemoveShip(this,"Millennium","YM")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YF">
                    <label>
                      Reflection
                      <input
                        type="checkbox"
                        id="chk_Ship_YF"
                        defaultValue="Reflection"
                        onclick='addRemoveShip(this,"Reflection","YF")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YB">
                    <label>
                      Silhouette
                      <input
                        type="checkbox"
                        id="chk_Ship_YB"
                        defaultValue="Silhouette"
                        onclick='addRemoveShip(this,"Silhouette","YB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YY">
                    <label>
                      Solstice
                      <input
                        type="checkbox"
                        id="chk_Ship_YY"
                        defaultValue="Solstice"
                        onclick='addRemoveShip(this,"Solstice","YY")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YS">
                    <label>
                      Summit
                      <input
                        type="checkbox"
                        id="chk_Ship_YS"
                        defaultValue="Summit"
                        onclick='addRemoveShip(this,"Summit","YS")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YX">
                    <label>
                      Xpedition
                      <input
                        type="checkbox"
                        id="chk_Ship_YX"
                        defaultValue="Xpedition"
                        onclick='addRemoveShip(this,"Xpedition","YX")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_YN">
                    <label>
                      Xploration
                      <input
                        type="checkbox"
                        id="chk_Ship_YN"
                        defaultValue="Xploration"
                        onclick='addRemoveShip(this,"Xploration","YN")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_CYL">
                    <label>
                      Celestyal Cruises
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_CYL"
                        defaultValue="Celestyal Cruises"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_WD">
                    <label>
                      Celestyal Crystal
                      <input
                        type="checkbox"
                        id="chk_Ship_WD"
                        defaultValue="Celestyal Crystal"
                        onclick='addRemoveShip(this,"Celestyal Crystal","WD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_WE">
                    <label>
                      Celestyal Journey
                      <input
                        type="checkbox"
                        id="chk_Ship_WE"
                        defaultValue="Celestyal Journey"
                        onclick='addRemoveShip(this,"Celestyal Journey","WE")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_W1">
                    <label>
                      Celestyal Olympia
                      <input
                        type="checkbox"
                        id="chk_Ship_W1"
                        defaultValue="Celestyal Olympia"
                        onclick='addRemoveShip(this,"Celestyal Olympia","W1")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_CST">
                    <label>
                      Costa Cruises
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_CST"
                        defaultValue="Costa Cruises"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CX">
                    <label>
                      Costa Deliziosa
                      <input
                        type="checkbox"
                        id="chk_Ship_CX"
                        defaultValue="Costa Deliziosa"
                        onclick='addRemoveShip(this,"Costa Deliziosa","CX")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CH">
                    <label>
                      Costa Diadema
                      <input
                        type="checkbox"
                        id="chk_Ship_CH"
                        defaultValue="Costa Diadema"
                        onclick='addRemoveShip(this,"Costa Diadema","CH")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CY">
                    <label>
                      Costa Fascinosa
                      <input
                        type="checkbox"
                        id="chk_Ship_CY"
                        defaultValue="Costa Fascinosa"
                        onclick='addRemoveShip(this,"Costa Fascinosa","CY")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CF">
                    <label>
                      Costa Fortuna
                      <input
                        type="checkbox"
                        id="chk_Ship_CF"
                        defaultValue="Costa Fortuna"
                        onclick='addRemoveShip(this,"Costa Fortuna","CF")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CB">
                    <label>
                      Costa Favolosa
                      <input
                        type="checkbox"
                        id="chk_Ship_CB"
                        defaultValue="Costa Favolosa"
                        onclick='addRemoveShip(this,"Costa Favolosa","CB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CP">
                    <label>
                      Costa Firenze
                      <input
                        type="checkbox"
                        id="chk_Ship_CP"
                        defaultValue="Costa Firenze"
                        onclick='addRemoveShip(this,"Costa Firenze","CP")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CJ">
                    <label>
                      Costa Pacifica
                      <input
                        type="checkbox"
                        id="chk_Ship_CJ"
                        defaultValue="Costa Pacifica"
                        onclick='addRemoveShip(this,"Costa Pacifica","CJ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CT">
                    <label>
                      Costa Smeralda
                      <input
                        type="checkbox"
                        id="chk_Ship_CT"
                        defaultValue="Costa Smeralda"
                        onclick='addRemoveShip(this,"Costa Smeralda","CT")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_CW">
                    <label>
                      Costa Toscana
                      <input
                        type="checkbox"
                        id="chk_Ship_CW"
                        defaultValue="Costa Toscana"
                        onclick='addRemoveShip(this,"Costa Toscana","CW")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_CCL">
                    <label>
                      Carnival Cruise Line
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_CCL"
                        defaultValue="Carnival Cruise Line"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V1">
                    <label>
                      Breeze
                      <input
                        type="checkbox"
                        id="chk_Ship_V1"
                        defaultValue="Breeze"
                        onclick='addRemoveShip(this,"Breeze","V1")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V2">
                    <label>
                      Carnival Sunshine
                      <input
                        type="checkbox"
                        id="chk_Ship_V2"
                        defaultValue="Carnival Sunshine"
                        onclick='addRemoveShip(this,"Carnival Sunshine","V2")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V9">
                    <label>
                      Celebration
                      <input
                        type="checkbox"
                        id="chk_Ship_V9"
                        defaultValue="Celebration"
                        onclick='addRemoveShip(this,"Celebration","V9")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VQ">
                    <label>
                      Conquest
                      <input
                        type="checkbox"
                        id="chk_Ship_VQ"
                        defaultValue="Conquest"
                        onclick='addRemoveShip(this,"Conquest","VQ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VZ">
                    <label>
                      Dream
                      <input
                        type="checkbox"
                        id="chk_Ship_VZ"
                        defaultValue="Dream"
                        onclick='addRemoveShip(this,"Dream","VZ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VE">
                    <label>
                      Elation
                      <input
                        type="checkbox"
                        id="chk_Ship_VE"
                        defaultValue="Elation"
                        onclick='addRemoveShip(this,"Elation","VE")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VD">
                    <label>
                      Firenze
                      <input
                        type="checkbox"
                        id="chk_Ship_VD"
                        defaultValue="Firenze"
                        onclick='addRemoveShip(this,"Firenze","VD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VK">
                    <label>
                      Freedom
                      <input
                        type="checkbox"
                        id="chk_Ship_VK"
                        defaultValue="Freedom"
                        onclick='addRemoveShip(this,"Freedom","VK")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VG">
                    <label>
                      Glory
                      <input
                        type="checkbox"
                        id="chk_Ship_VG"
                        defaultValue="Glory"
                        onclick='addRemoveShip(this,"Glory","VG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V4">
                    <label>
                      Horizon
                      <input
                        type="checkbox"
                        id="chk_Ship_V4"
                        defaultValue="Horizon"
                        onclick='addRemoveShip(this,"Horizon","V4")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VH">
                    <label>
                      Jubilee
                      <input
                        type="checkbox"
                        id="chk_Ship_VH"
                        defaultValue="Jubilee"
                        onclick='addRemoveShip(this,"Jubilee","VH")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VL">
                    <label>
                      Legend
                      <input
                        type="checkbox"
                        id="chk_Ship_VL"
                        defaultValue="Legend"
                        onclick='addRemoveShip(this,"Legend","VL")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VB">
                    <label>
                      Liberty
                      <input
                        type="checkbox"
                        id="chk_Ship_VB"
                        defaultValue="Liberty"
                        onclick='addRemoveShip(this,"Liberty","VB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VC">
                    <label>
                      Luminosa
                      <input
                        type="checkbox"
                        id="chk_Ship_VC"
                        defaultValue="Luminosa"
                        onclick='addRemoveShip(this,"Luminosa","VC")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VW">
                    <label>
                      Magic
                      <input
                        type="checkbox"
                        id="chk_Ship_VW"
                        defaultValue="Magic"
                        onclick='addRemoveShip(this,"Magic","VW")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V8">
                    <label>
                      Mardi Gras
                      <input
                        type="checkbox"
                        id="chk_Ship_V8"
                        defaultValue="Mardi Gras"
                        onclick='addRemoveShip(this,"Mardi Gras","V8")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VM">
                    <label>
                      Miracle
                      <input
                        type="checkbox"
                        id="chk_Ship_VM"
                        defaultValue="Miracle"
                        onclick='addRemoveShip(this,"Miracle","VM")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V5">
                    <label>
                      Panorama
                      <input
                        type="checkbox"
                        id="chk_Ship_V5"
                        defaultValue="Panorama"
                        onclick='addRemoveShip(this,"Panorama","V5")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VA">
                    <label>
                      Paradise
                      <input
                        type="checkbox"
                        id="chk_Ship_VA"
                        defaultValue="Paradise"
                        onclick='addRemoveShip(this,"Paradise","VA")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VP">
                    <label>
                      Pride
                      <input
                        type="checkbox"
                        id="chk_Ship_VP"
                        defaultValue="Pride"
                        onclick='addRemoveShip(this,"Pride","VP")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V7">
                    <label>
                      Radiance
                      <input
                        type="checkbox"
                        id="chk_Ship_V7"
                        defaultValue="Radiance"
                        onclick='addRemoveShip(this,"Radiance","V7")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VR">
                    <label>
                      Spirit
                      <input
                        type="checkbox"
                        id="chk_Ship_VR"
                        defaultValue="Spirit"
                        onclick='addRemoveShip(this,"Spirit","VR")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V6">
                    <label>
                      Sunrise
                      <input
                        type="checkbox"
                        id="chk_Ship_V6"
                        defaultValue="Sunrise"
                        onclick='addRemoveShip(this,"Sunrise","V6")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VX">
                    <label>
                      Valor
                      <input
                        type="checkbox"
                        id="chk_Ship_VX"
                        defaultValue="Valor"
                        onclick='addRemoveShip(this,"Valor","VX")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_VT">
                    <label>
                      Venezia
                      <input
                        type="checkbox"
                        id="chk_Ship_VT"
                        defaultValue="Venezia"
                        onclick='addRemoveShip(this,"Venezia","VT")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_V3">
                    <label>
                      Vista
                      <input
                        type="checkbox"
                        id="chk_Ship_V3"
                        defaultValue="Vista"
                        onclick='addRemoveShip(this,"Vista","V3")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_HUR">
                    <label>
                      Hurtigruten
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_HUR"
                        defaultValue="Hurtigruten"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3M">
                    <label>
                      MS Fram
                      <input
                        type="checkbox"
                        id="chk_Ship_3M"
                        defaultValue="MS Fram"
                        onclick='addRemoveShip(this,"MS Fram","3M")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_94">
                    <label>
                      MS Fridtjof Nansen
                      <input
                        type="checkbox"
                        id="chk_Ship_94"
                        defaultValue="MS Fridtjof Nansen"
                        onclick='addRemoveShip(this,"MS Fridtjof Nansen","94")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_31">
                    <label>
                      MS Kong Harald
                      <input
                        type="checkbox"
                        id="chk_Ship_31"
                        defaultValue="MS Kong Harald"
                        onclick='addRemoveShip(this,"MS Kong Harald","31")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_XG">
                    <label>
                      MS Maud
                      <input
                        type="checkbox"
                        id="chk_Ship_XG"
                        defaultValue="MS Maud"
                        onclick='addRemoveShip(this,"MS Maud","XG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3F">
                    <label>
                      MS Nordkapp
                      <input
                        type="checkbox"
                        id="chk_Ship_3F"
                        defaultValue="MS Nordkapp"
                        onclick='addRemoveShip(this,"MS Nordkapp","3F")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3G">
                    <label>
                      MS Nordlys
                      <input
                        type="checkbox"
                        id="chk_Ship_3G"
                        defaultValue="MS Nordlys"
                        onclick='addRemoveShip(this,"MS Nordlys","3G")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3D">
                    <label>
                      MS Nordnorge
                      <input
                        type="checkbox"
                        id="chk_Ship_3D"
                        defaultValue="MS Nordnorge"
                        onclick='addRemoveShip(this,"MS Nordnorge","3D")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3K">
                    <label>
                      MS Nordstjernen
                      <input
                        type="checkbox"
                        id="chk_Ship_3K"
                        defaultValue="MS Nordstjernen"
                        onclick='addRemoveShip(this,"MS Nordstjernen","3K")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_XH">
                    <label>
                      MS Otto Sverdrup
                      <input
                        type="checkbox"
                        id="chk_Ship_XH"
                        defaultValue="MS Otto Sverdrup"
                        onclick='addRemoveShip(this,"MS Otto Sverdrup","XH")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3E">
                    <label>
                      MS Polarlys
                      <input
                        type="checkbox"
                        id="chk_Ship_3E"
                        defaultValue="MS Polarlys"
                        onclick='addRemoveShip(this,"MS Polarlys","3E")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3H">
                    <label>
                      MS Richard With
                      <input
                        type="checkbox"
                        id="chk_Ship_3H"
                        defaultValue="MS Richard With"
                        onclick='addRemoveShip(this,"MS Richard With","3H")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3B">
                    <label>
                      MS Trollfjord
                      <input
                        type="checkbox"
                        id="chk_Ship_3B"
                        defaultValue="MS Trollfjord"
                        onclick='addRemoveShip(this,"MS Trollfjord","3B")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_3J">
                    <label>
                      MS Vesteralen
                      <input
                        type="checkbox"
                        id="chk_Ship_3J"
                        defaultValue="MS Vesteralen"
                        onclick='addRemoveShip(this,"MS Vesteralen","3J")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_ZN">
                    <label>
                      MS Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_ZN"
                        defaultValue="MS Princess"
                        onclick='addRemoveShip(this,"MS Princess","ZN")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_ZV">
                    <label>
                      Vasco da Gama
                      <input
                        type="checkbox"
                        id="chk_Ship_ZV"
                        defaultValue="Vasco da Gama"
                        onclick='addRemoveShip(this,"Vasco da Gama","ZV")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_08">
                    <label>
                      World Voyager
                      <input
                        type="checkbox"
                        id="chk_Ship_08"
                        defaultValue="World Voyager"
                        onclick='addRemoveShip(this,"World Voyager","08")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_OQ">
                    <label>
                      MS EUROPA 2
                      <input
                        type="checkbox"
                        id="chk_Ship_OQ"
                        defaultValue="MS EUROPA 2"
                        onclick='addRemoveShip(this,"MS EUROPA 2","OQ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_OI">
                    <label>
                      MS HANSEATIC inspiration
                      <input
                        type="checkbox"
                        id="chk_Ship_OI"
                        defaultValue="MS HANSEATIC inspiration"
                        onclick='addRemoveShip(this,"MS HANSEATIC inspiration","OI")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_OT">
                    <label>
                      MS La Belle de lAdriatique
                      <input
                        type="checkbox"
                        id="chk_Ship_OT"
                        defaultValue="MS La Belle de lAdriatique"
                        onclick='addRemoveShip(this,"MS La Belle de lAdriatique","OT")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_QA">
                    <label>
                      MS La Belle des Oceans
                      <input
                        type="checkbox"
                        id="chk_Ship_QA"
                        defaultValue="MS La Belle des Oceans"
                        onclick='addRemoveShip(this,"MS La Belle des Oceans","QA")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_87">
                    <label>
                      MS Roald Amundsen
                      <input
                        type="checkbox"
                        id="chk_Ship_87"
                        defaultValue="MS Roald Amundsen"
                        onclick='addRemoveShip(this,"MS Roald Amundsen","87")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_XI">
                    <label>
                      MS Santa Cruz II
                      <input
                        type="checkbox"
                        id="chk_Ship_XI"
                        defaultValue="MS Santa Cruz II"
                        onclick='addRemoveShip(this,"MS Santa Cruz II","XI")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_GN">
                    <label>
                      Queen Anne
                      <input
                        type="checkbox"
                        id="chk_Ship_GN"
                        defaultValue="Queen Anne"
                        onclick='addRemoveShip(this,"Queen Anne","GN")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_GE">
                    <label>
                      Queen Elizabeth
                      <input
                        type="checkbox"
                        id="chk_Ship_GE"
                        defaultValue="Queen Elizabeth"
                        onclick='addRemoveShip(this,"Queen Elizabeth","GE")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_GM">
                    <label>
                      Queen Mary 2
                      <input
                        type="checkbox"
                        id="chk_Ship_GM"
                        defaultValue="Queen Mary 2"
                        onclick='addRemoveShip(this,"Queen Mary 2","GM")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_GV">
                    <label>
                      Queen Victoria
                      <input
                        type="checkbox"
                        id="chk_Ship_GV"
                        defaultValue="Queen Victoria"
                        onclick='addRemoveShip(this,"Queen Victoria","GV")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HF">
                    <label>
                      Eurodam
                      <input
                        type="checkbox"
                        id="chk_Ship_HF"
                        defaultValue="Eurodam"
                        onclick='addRemoveShip(this,"Eurodam","HF")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HN">
                    <label>
                      Koningsdam
                      <input
                        type="checkbox"
                        id="chk_Ship_HN"
                        defaultValue="Koningsdam"
                        onclick='addRemoveShip(this,"Koningsdam","HN")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HB">
                    <label>
                      Nieuw Amsterdam
                      <input
                        type="checkbox"
                        id="chk_Ship_HB"
                        defaultValue="Nieuw Amsterdam"
                        onclick='addRemoveShip(this,"Nieuw Amsterdam","HB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HM">
                    <label>
                      Noordam
                      <input
                        type="checkbox"
                        id="chk_Ship_HM"
                        defaultValue="Noordam"
                        onclick='addRemoveShip(this,"Noordam","HM")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HK">
                    <label>
                      Oosterdam
                      <input
                        type="checkbox"
                        id="chk_Ship_HK"
                        defaultValue="Oosterdam"
                        onclick='addRemoveShip(this,"Oosterdam","HK")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HY">
                    <label>
                      Rotterdam
                      <input
                        type="checkbox"
                        id="chk_Ship_HY"
                        defaultValue="Rotterdam"
                        onclick='addRemoveShip(this,"Rotterdam","HY")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HO">
                    <label>
                      Volendam
                      <input
                        type="checkbox"
                        id="chk_Ship_HO"
                        defaultValue="Volendam"
                        onclick='addRemoveShip(this,"Volendam","HO")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HW">
                    <label>
                      Westerdam
                      <input
                        type="checkbox"
                        id="chk_Ship_HW"
                        defaultValue="Westerdam"
                        onclick='addRemoveShip(this,"Westerdam","HW")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HZ">
                    <label>
                      Zaandam
                      <input
                        type="checkbox"
                        id="chk_Ship_HZ"
                        defaultValue="Zaandam"
                        onclick='addRemoveShip(this,"Zaandam","HZ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_HU">
                    <label>
                      Zuiderdam
                      <input
                        type="checkbox"
                        id="chk_Ship_HU"
                        defaultValue="Zuiderdam"
                        onclick='addRemoveShip(this,"Zuiderdam","HU")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_MSC">
                    <label>
                      MSC Cruises
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_MSC"
                        defaultValue="MSC Cruises"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_ME">
                    <label>
                      MSC Divina
                      <input
                        type="checkbox"
                        id="chk_Ship_ME"
                        defaultValue="MSC Divina"
                        onclick='addRemoveShip(this,"MSC Divina","ME")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_MB">
                    <label>
                      MSC Magnifica
                      <input
                        type="checkbox"
                        id="chk_Ship_MB"
                        defaultValue="MSC Magnifica"
                        onclick='addRemoveShip(this,"MSC Magnifica","MB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_MG">
                    <label>
                      MSC Meraviglia
                      <input
                        type="checkbox"
                        id="chk_Ship_MG"
                        defaultValue="MSC Meraviglia"
                        onclick='addRemoveShip(this,"MSC Meraviglia","MG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_MQ">
                    <label>
                      MSC Seascape
                      <input
                        type="checkbox"
                        id="chk_Ship_MQ"
                        defaultValue="MSC Seascape"
                        onclick='addRemoveShip(this,"MSC Seascape","MQ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_MX">
                    <label>
                      MSC Seashore
                      <input
                        type="checkbox"
                        id="chk_Ship_MX"
                        defaultValue="MSC Seashore"
                        onclick='addRemoveShip(this,"MSC Seashore","MX")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_MH">
                    <label>
                      MSC Seaside
                      <input
                        type="checkbox"
                        id="chk_Ship_MH"
                        defaultValue="MSC Seaside"
                        onclick='addRemoveShip(this,"MSC Seaside","MH")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_MR">
                    <label>
                      MSC World America
                      <input
                        type="checkbox"
                        id="chk_Ship_MR"
                        defaultValue="MSC World America"
                        onclick='addRemoveShip(this,"MSC World America","MR")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_MP">
                    <label>
                      MSC Poesia
                      <input
                        type="checkbox"
                        id="chk_Ship_MP"
                        defaultValue="MSC Poesia"
                        onclick='addRemoveShip(this,"MSC Poesia","MP")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_NCL">
                    <label>
                      Norwegian Cruise Line
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_NCL"
                        defaultValue="Norwegian Cruise Line"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_N2">
                    <label>
                      Norwegian Bliss
                      <input
                        type="checkbox"
                        id="chk_Ship_N2"
                        defaultValue="Norwegian Bliss"
                        onclick='addRemoveShip(this,"Norwegian Bliss","N2")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NZ">
                    <label>
                      Norwegian Breakaway
                      <input
                        type="checkbox"
                        id="chk_Ship_NZ"
                        defaultValue="Norwegian Breakaway"
                        onclick='addRemoveShip(this,"Norwegian Breakaway","NZ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NA">
                    <label>
                      Norwegian Dawn
                      <input
                        type="checkbox"
                        id="chk_Ship_NA"
                        defaultValue="Norwegian Dawn"
                        onclick='addRemoveShip(this,"Norwegian Dawn","NA")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_N3">
                    <label>
                      Norwegian Encore
                      <input
                        type="checkbox"
                        id="chk_Ship_N3"
                        defaultValue="Norwegian Encore"
                        onclick='addRemoveShip(this,"Norwegian Encore","N3")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NQ">
                    <label>
                      Norwegian Epic
                      <input
                        type="checkbox"
                        id="chk_Ship_NQ"
                        defaultValue="Norwegian Epic"
                        onclick='addRemoveShip(this,"Norwegian Epic","NQ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_N1">
                    <label>
                      Norwegian Escape
                      <input
                        type="checkbox"
                        id="chk_Ship_N1"
                        defaultValue="Norwegian Escape"
                        onclick='addRemoveShip(this,"Norwegian Escape","N1")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NG">
                    <label>
                      Norwegian Gem
                      <input
                        type="checkbox"
                        id="chk_Ship_NG"
                        defaultValue="Norwegian Gem"
                        onclick='addRemoveShip(this,"Norwegian Gem","NG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NU">
                    <label>
                      Norwegian Getaway
                      <input
                        type="checkbox"
                        id="chk_Ship_NU"
                        defaultValue="Norwegian Getaway"
                        onclick='addRemoveShip(this,"Norwegian Getaway","NU")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NN">
                    <label>
                      Norwegian Jade
                      <input
                        type="checkbox"
                        id="chk_Ship_NN"
                        defaultValue="Norwegian Jade"
                        onclick='addRemoveShip(this,"Norwegian Jade","NN")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NJ">
                    <label>
                      Norwegian Jewel
                      <input
                        type="checkbox"
                        id="chk_Ship_NJ"
                        defaultValue="Norwegian Jewel"
                        onclick='addRemoveShip(this,"Norwegian Jewel","NJ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_N4">
                    <label>
                      Norwegian Joy
                      <input
                        type="checkbox"
                        id="chk_Ship_N4"
                        defaultValue="Norwegian Joy"
                        onclick='addRemoveShip(this,"Norwegian Joy","N4")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NB">
                    <label>
                      Norwegian Pearl
                      <input
                        type="checkbox"
                        id="chk_Ship_NB"
                        defaultValue="Norwegian Pearl"
                        onclick='addRemoveShip(this,"Norwegian Pearl","NB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NK">
                    <label>
                      Norwegian Prima
                      <input
                        type="checkbox"
                        id="chk_Ship_NK"
                        defaultValue="Norwegian Prima"
                        onclick='addRemoveShip(this,"Norwegian Prima","NK")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NY">
                    <label>
                      Norwegian Sky
                      <input
                        type="checkbox"
                        id="chk_Ship_NY"
                        defaultValue="Norwegian Sky"
                        onclick='addRemoveShip(this,"Norwegian Sky","NY")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NI">
                    <label>
                      Norwegian Spirit
                      <input
                        type="checkbox"
                        id="chk_Ship_NI"
                        defaultValue="Norwegian Spirit"
                        onclick='addRemoveShip(this,"Norwegian Spirit","NI")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NR">
                    <label>
                      Norwegian Star
                      <input
                        type="checkbox"
                        id="chk_Ship_NR"
                        defaultValue="Norwegian Star"
                        onclick='addRemoveShip(this,"Norwegian Star","NR")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NS">
                    <label>
                      Norwegian Sun
                      <input
                        type="checkbox"
                        id="chk_Ship_NS"
                        defaultValue="Norwegian Sun"
                        onclick='addRemoveShip(this,"Norwegian Sun","NS")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NP">
                    <label>
                      Pride of America
                      <input
                        type="checkbox"
                        id="chk_Ship_NP"
                        defaultValue="Pride of America"
                        onclick='addRemoveShip(this,"Pride of America","NP")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_JC">
                    <label>
                      Insignia
                      <input
                        type="checkbox"
                        id="chk_Ship_JC"
                        defaultValue="Insignia"
                        onclick='addRemoveShip(this,"Insignia","JC")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_JF">
                    <label>
                      Marina
                      <input
                        type="checkbox"
                        id="chk_Ship_JF"
                        defaultValue="Marina"
                        onclick='addRemoveShip(this,"Marina","JF")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_JD">
                    <label>
                      Nautica
                      <input
                        type="checkbox"
                        id="chk_Ship_JD"
                        defaultValue="Nautica"
                        onclick='addRemoveShip(this,"Nautica","JD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_JE">
                    <label>
                      Regatta
                      <input
                        type="checkbox"
                        id="chk_Ship_JE"
                        defaultValue="Regatta"
                        onclick='addRemoveShip(this,"Regatta","JE")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_JG">
                    <label>
                      Riviera
                      <input
                        type="checkbox"
                        id="chk_Ship_JG"
                        defaultValue="Riviera"
                        onclick='addRemoveShip(this,"Riviera","JG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_JI">
                    <label>
                      Sirena
                      <input
                        type="checkbox"
                        id="chk_Ship_JI"
                        defaultValue="Sirena"
                        onclick='addRemoveShip(this,"Sirena","JI")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_JJ">
                    <label>
                      Vista
                      <input
                        type="checkbox"
                        id="chk_Ship_JJ"
                        defaultValue="Vista"
                        onclick='addRemoveShip(this,"Vista","JJ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_G3">
                    <label>
                      Hondius
                      <input
                        type="checkbox"
                        id="chk_Ship_G3"
                        defaultValue="Hondius"
                        onclick='addRemoveShip(this,"Hondius","G3")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_G1">
                    <label>
                      Plancius
                      <input
                        type="checkbox"
                        id="chk_Ship_G1"
                        defaultValue="Plancius"
                        onclick='addRemoveShip(this,"Plancius","G1")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_G0">
                    <label>
                      Rembrandt van Rijn
                      <input
                        type="checkbox"
                        id="chk_Ship_G0"
                        defaultValue="Rembrandt van Rijn"
                        onclick='addRemoveShip(this,"Rembrandt van Rijn","G0")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_P7">
                    <label>
                      Arcadia
                      <input
                        type="checkbox"
                        id="chk_Ship_P7"
                        defaultValue="Arcadia"
                        onclick='addRemoveShip(this,"Arcadia","P7")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_P0">
                    <label>
                      Arvia
                      <input
                        type="checkbox"
                        id="chk_Ship_P0"
                        defaultValue="Arvia"
                        onclick='addRemoveShip(this,"Arvia","P0")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_P1">
                    <label>
                      Aurora
                      <input
                        type="checkbox"
                        id="chk_Ship_P1"
                        defaultValue="Aurora"
                        onclick='addRemoveShip(this,"Aurora","P1")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_P2">
                    <label>
                      Azura
                      <input
                        type="checkbox"
                        id="chk_Ship_P2"
                        defaultValue="Azura"
                        onclick='addRemoveShip(this,"Azura","P2")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_P3">
                    <label>
                      Britannia
                      <input
                        type="checkbox"
                        id="chk_Ship_P3"
                        defaultValue="Britannia"
                        onclick='addRemoveShip(this,"Britannia","P3")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_P9">
                    <label>
                      Iona
                      <input
                        type="checkbox"
                        id="chk_Ship_P9"
                        defaultValue="Iona"
                        onclick='addRemoveShip(this,"Iona","P9")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_P5">
                    <label>
                      Ventura
                      <input
                        type="checkbox"
                        id="chk_Ship_P5"
                        defaultValue="Ventura"
                        onclick='addRemoveShip(this,"Ventura","P5")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TG">
                    <label>
                      Paul Gauguin
                      <input
                        type="checkbox"
                        id="chk_Ship_TG"
                        defaultValue="Paul Gauguin"
                        onclick='addRemoveShip(this,"Paul Gauguin","TG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SG">
                    <label>
                      Le Austral
                      <input
                        type="checkbox"
                        id="chk_Ship_SG"
                        defaultValue="Le Austral"
                        onclick='addRemoveShip(this,"Le Austral","SG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SZ">
                    <label>
                      Le Bellot
                      <input
                        type="checkbox"
                        id="chk_Ship_SZ"
                        defaultValue="Le Bellot"
                        onclick='addRemoveShip(this,"Le Bellot","SZ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SF">
                    <label>
                      Le Boreal
                      <input
                        type="checkbox"
                        id="chk_Ship_SF"
                        defaultValue="Le Boreal"
                        onclick='addRemoveShip(this,"Le Boreal","SF")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SQ">
                    <label>
                      Le Bougainville
                      <input
                        type="checkbox"
                        id="chk_Ship_SQ"
                        defaultValue="Le Bougainville"
                        onclick='addRemoveShip(this,"Le Bougainville","SQ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SN">
                    <label>
                      Le Champlain
                      <input
                        type="checkbox"
                        id="chk_Ship_SN"
                        defaultValue="Le Champlain"
                        onclick='addRemoveShip(this,"Le Champlain","SN")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SR">
                    <label>
                      Le Commandant Charcot
                      <input
                        type="checkbox"
                        id="chk_Ship_SR"
                        defaultValue="Le Commandant Charcot"
                        onclick='addRemoveShip(this,"Le Commandant Charcot","SR")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SP">
                    <label>
                      Le Dumont dUrville
                      <input
                        type="checkbox"
                        id="chk_Ship_SP"
                        defaultValue="Le Dumont dUrville"
                        onclick='addRemoveShip(this,"Le Dumont dUrville","SP")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_NW">
                    <label>
                      Le Jacques Cartier
                      <input
                        type="checkbox"
                        id="chk_Ship_NW"
                        defaultValue="Le Jacques Cartier"
                        onclick='addRemoveShip(this,"Le Jacques Cartier","NW")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SO">
                    <label>
                      Le Laperouse
                      <input
                        type="checkbox"
                        id="chk_Ship_SO"
                        defaultValue="Le Laperouse"
                        onclick='addRemoveShip(this,"Le Laperouse","SO")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_ST">
                    <label>
                      Le Lyrial
                      <input
                        type="checkbox"
                        id="chk_Ship_ST"
                        defaultValue="Le Lyrial"
                        onclick='addRemoveShip(this,"Le Lyrial","ST")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SB">
                    <label>
                      Le Ponant
                      <input
                        type="checkbox"
                        id="chk_Ship_SB"
                        defaultValue="Le Ponant"
                        onclick='addRemoveShip(this,"Le Ponant","SB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SS">
                    <label>
                      Le Soleal
                      <input
                        type="checkbox"
                        id="chk_Ship_SS"
                        defaultValue="Le Soleal"
                        onclick='addRemoveShip(this,"Le Soleal","SS")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_SO">
                    <label>
                      Le Laperouse
                      <input
                        type="checkbox"
                        id="chk_Ship_SO"
                        defaultValue="Le Laperouse"
                        onclick='addRemoveShip(this,"Le Laperouse","SO")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_REG">
                    <label>
                      Regent Seven Seas
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_REG"
                        defaultValue="Regent Seven Seas"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TX">
                    <label>
                      Seven Seas Explorer
                      <input
                        type="checkbox"
                        id="chk_Ship_TX"
                        defaultValue="Seven Seas Explorer"
                        onclick='addRemoveShip(this,"Seven Seas Explorer","TX")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_U5">
                    <label>
                      Seven Seas Grandeur
                      <input
                        type="checkbox"
                        id="chk_Ship_U5"
                        defaultValue="Seven Seas Grandeur"
                        onclick='addRemoveShip(this,"Seven Seas Grandeur","U5")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TE">
                    <label>
                      Seven Seas Mariner
                      <input
                        type="checkbox"
                        id="chk_Ship_TE"
                        defaultValue="Seven Seas Mariner"
                        onclick='addRemoveShip(this,"Seven Seas Mariner","TE")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TF">
                    <label>
                      Seven Seas Navigator
                      <input
                        type="checkbox"
                        id="chk_Ship_TF"
                        defaultValue="Seven Seas Navigator"
                        onclick='addRemoveShip(this,"Seven Seas Navigator","TF")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_T4">
                    <label>
                      Seven Seas Splendor
                      <input
                        type="checkbox"
                        id="chk_Ship_T4"
                        defaultValue="Seven Seas Splendor"
                        onclick='addRemoveShip(this,"Seven Seas Splendor","T4")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TV">
                    <label>
                      Seven Seas Voyager
                      <input
                        type="checkbox"
                        id="chk_Ship_TV"
                        defaultValue="Seven Seas Voyager"
                        onclick='addRemoveShip(this,"Seven Seas Voyager","TV")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RA">
                    <label>
                      Adventure of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RA"
                        defaultValue="Adventure of the Seas"
                        onclick='addRemoveShip(this,"Adventure of the Seas","RA")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RQ">
                    <label>
                      Allure of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RQ"
                        defaultValue="Allure of the Seas"
                        onclick='addRemoveShip(this,"Allure of the Seas","RQ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RZ">
                    <label>
                      Anthem of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RZ"
                        defaultValue="Anthem of the Seas"
                        onclick='addRemoveShip(this,"Anthem of the Seas","RZ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RB">
                    <label>
                      Brilliance of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RB"
                        defaultValue="Brilliance of the Seas"
                        onclick='addRemoveShip(this,"Brilliance of the Seas","RB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RE">
                    <label>
                      Enchantment of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RE"
                        defaultValue="Enchantment of the Seas"
                        onclick='addRemoveShip(this,"Enchantment of the Seas","RE")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RS">
                    <label>
                      Explorer of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RS"
                        defaultValue="Explorer of the Seas"
                        onclick='addRemoveShip(this,"Explorer of the Seas","RS")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RF">
                    <label>
                      Freedom of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RF"
                        defaultValue="Freedom of the Seas"
                        onclick='addRemoveShip(this,"Freedom of the Seas","RF")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RX">
                    <label>
                      Grandeur of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RX"
                        defaultValue="Grandeur of the Seas"
                        onclick='addRemoveShip(this,"Grandeur of the Seas","RX")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_R0">
                    <label>
                      Harmony of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_R0"
                        defaultValue="Harmony of the Seas"
                        onclick='addRemoveShip(this,"Harmony of the Seas","R0")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_R6">
                    <label>
                      Icon of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_R6"
                        defaultValue="Icon of the Seas"
                        onclick='addRemoveShip(this,"Icon of the Seas","R6")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RT">
                    <label>
                      Independence of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RT"
                        defaultValue="Independence of the Seas"
                        onclick='addRemoveShip(this,"Independence of the Seas","RT")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RW">
                    <label>
                      Jewel of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RW"
                        defaultValue="Jewel of the Seas"
                        onclick='addRemoveShip(this,"Jewel of the Seas","RW")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RJ">
                    <label>
                      Liberty of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RJ"
                        defaultValue="Liberty of the Seas"
                        onclick='addRemoveShip(this,"Liberty of the Seas","RJ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RN">
                    <label>
                      Navigator of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RN"
                        defaultValue="Navigator of the Seas"
                        onclick='addRemoveShip(this,"Navigator of the Seas","RN")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RK">
                    <label>
                      Oasis of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RK"
                        defaultValue="Oasis of the Seas"
                        onclick='addRemoveShip(this,"Oasis of the Seas","RK")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_R5">
                    <label>
                      Odyssey of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_R5"
                        defaultValue="Odyssey of the Seas"
                        onclick='addRemoveShip(this,"Odyssey of the Seas","R5")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_R1">
                    <label>
                      Ovation of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_R1"
                        defaultValue="Ovation of the Seas"
                        onclick='addRemoveShip(this,"Ovation of the Seas","R1")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RV">
                    <label>
                      Quantum of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RV"
                        defaultValue="Quantum of the Seas"
                        onclick='addRemoveShip(this,"Quantum of the Seas","RV")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RR">
                    <label>
                      Radiance of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RR"
                        defaultValue="Radiance of the Seas"
                        onclick='addRemoveShip(this,"Radiance of the Seas","RR")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RH">
                    <label>
                      Rhapsody of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RH"
                        defaultValue="Rhapsody of the Seas"
                        onclick='addRemoveShip(this,"Rhapsody of the Seas","RH")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RD">
                    <label>
                      Serenade of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RD"
                        defaultValue="Serenade of the Seas"
                        onclick='addRemoveShip(this,"Serenade of the Seas","RD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_R4">
                    <label>
                      Spectrum of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_R4"
                        defaultValue="Spectrum of the Seas"
                        onclick='addRemoveShip(this,"Spectrum of the Seas","R4")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_R2">
                    <label>
                      Symphony of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_R2"
                        defaultValue="Symphony of the Seas"
                        onclick='addRemoveShip(this,"Symphony of the Seas","R2")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RQ">
                    <label>
                      Vision of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RQ"
                        defaultValue="Vision of the Seas"
                        onclick='addRemoveShip(this,"Vision of the Seas","RQ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_RY">
                    <label>
                      Voyager of the Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_RY"
                        defaultValue="Voyager of the Seas"
                        onclick='addRemoveShip(this,"Voyager of the Seas","RY")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_R3">
                    <label>
                      Wonder Of The Seas
                      <input
                        type="checkbox"
                        id="chk_Ship_R3"
                        defaultValue="Wonder Of The Seas"
                        onclick='addRemoveShip(this,"Wonder Of The Seas","R3")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TV">
                    <label>
                      Seven Seas Voyager
                      <input
                        type="checkbox"
                        id="chk_Ship_TV"
                        defaultValue="Seven Seas Voyager"
                        onclick='addRemoveShip(this,"Seven Seas Voyager","TV")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_SBN">
                    <label>
                      Seabourn Cruise Line
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_SBN"
                        defaultValue="Seabourn Cruise Line"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_KR">
                    <label>
                      Seabourn Encore
                      <input
                        type="checkbox"
                        id="chk_Ship_KR"
                        defaultValue="Seabourn Encore"
                        onclick='addRemoveShip(this,"Seabourn Encore","KR")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_KO">
                    <label>
                      Seabourn Odyssey
                      <input
                        type="checkbox"
                        id="chk_Ship_KO"
                        defaultValue="Seabourn Odyssey"
                        onclick='addRemoveShip(this,"Seabourn Odyssey","KO")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_KM">
                    <label>
                      Seabourn Ovation
                      <input
                        type="checkbox"
                        id="chk_Ship_KM"
                        defaultValue="Seabourn Ovation"
                        onclick='addRemoveShip(this,"Seabourn Ovation","KM")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_KK">
                    <label>
                      Seabourn Pursuit
                      <input
                        type="checkbox"
                        id="chk_Ship_KK"
                        defaultValue="Seabourn Pursuit"
                        onclick='addRemoveShip(this,"Seabourn Pursuit","KK")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_KQ">
                    <label>
                      Seabourn Quest
                      <input
                        type="checkbox"
                        id="chk_Ship_KQ"
                        defaultValue="Seabourn Quest"
                        onclick='addRemoveShip(this,"Seabourn Quest","KQ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_KJ">
                    <label>
                      Seabourn Sojourn
                      <input
                        type="checkbox"
                        id="chk_Ship_KJ"
                        defaultValue="Seabourn Sojourn"
                        onclick='addRemoveShip(this,"Seabourn Sojourn","KJ")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_KN">
                    <label>
                      Seabourn Venture
                      <input
                        type="checkbox"
                        id="chk_Ship_KN"
                        defaultValue="Seabourn Venture"
                        onclick='addRemoveShip(this,"Seabourn Venture","KN")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_SDM">
                    <label>
                      Seadream
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_SDM"
                        defaultValue="Seadream"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_LA">
                    <label>
                      Seadream I
                      <input
                        type="checkbox"
                        id="chk_Ship_LA"
                        defaultValue="Seadream I"
                        onclick='addRemoveShip(this,"Seadream I","LA")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_LB">
                    <label>
                      Seadream II
                      <input
                        type="checkbox"
                        id="chk_Ship_LB"
                        defaultValue="Seadream II"
                        onclick='addRemoveShip(this,"Seadream II","LB")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_SSE">
                    <label>
                      Silversea
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_SSE"
                        defaultValue="Silversea"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_T2">
                    <label>
                      Silver Cloud Expedition
                      <input
                        type="checkbox"
                        id="chk_Ship_T2"
                        defaultValue="Silver Cloud Expedition"
                        onclick='addRemoveShip(this,"Silver Cloud Expedition","T2")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_T6">
                    <label>
                      Silver Dawn
                      <input
                        type="checkbox"
                        id="chk_Ship_T6"
                        defaultValue="Silver Dawn"
                        onclick='addRemoveShip(this,"Silver Dawn","T6")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_U7">
                    <label>
                      Silver Endeavour
                      <input
                        type="checkbox"
                        id="chk_Ship_U7"
                        defaultValue="Silver Endeavour"
                        onclick='addRemoveShip(this,"Silver Endeavour","U7")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TB">
                    <label>
                      Silver Explorer
                      <input
                        type="checkbox"
                        id="chk_Ship_TB"
                        defaultValue="Silver Explorer"
                        onclick='addRemoveShip(this,"Silver Explorer","TB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_T0">
                    <label>
                      Silver Moon
                      <input
                        type="checkbox"
                        id="chk_Ship_T0"
                        defaultValue="Silver Moon"
                        onclick='addRemoveShip(this,"Silver Moon","T0")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_T1">
                    <label>
                      Silver Muse
                      <input
                        type="checkbox"
                        id="chk_Ship_T1"
                        defaultValue="Silver Muse"
                        onclick='addRemoveShip(this,"Silver Muse","T1")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_U6">
                    <label>
                      Silver Nova
                      <input
                        type="checkbox"
                        id="chk_Ship_U6"
                        defaultValue="Silver Nova"
                        onclick='addRemoveShip(this,"Silver Nova","U6")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_U8">
                    <label>
                      Silver Ray
                      <input
                        type="checkbox"
                        id="chk_Ship_U8"
                        defaultValue="Silver Ray"
                        onclick='addRemoveShip(this,"Silver Ray","U8")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TA">
                    <label>
                      Silver Shadow
                      <input
                        type="checkbox"
                        id="chk_Ship_TA"
                        defaultValue="Silver Shadow"
                        onclick='addRemoveShip(this,"Silver Shadow","TA")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TD">
                    <label>
                      Silver Spirit
                      <input
                        type="checkbox"
                        id="chk_Ship_TD"
                        defaultValue="Silver Spirit"
                        onclick='addRemoveShip(this,"Silver Spirit","TD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TP">
                    <label>
                      Silver Whisper
                      <input
                        type="checkbox"
                        id="chk_Ship_TP"
                        defaultValue="Silver Whisper"
                        onclick='addRemoveShip(this,"Silver Whisper","TP")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_TW">
                    <label>
                      Silver Wind
                      <input
                        type="checkbox"
                        id="chk_Ship_TW"
                        defaultValue="Silver Wind"
                        onclick='addRemoveShip(this,"Silver Wind","TW")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_D2">
                    <label>
                      MV Thurgau Adriatica
                      <input
                        type="checkbox"
                        id="chk_Ship_D2"
                        defaultValue="MV Thurgau Adriatica"
                        onclick='addRemoveShip(this,"MV Thurgau Adriatica","D2")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_EMC">
                    <label>
                      Emerald Cruises
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_EMC"
                        defaultValue="Emerald Cruises"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_LD">
                    <label>
                      Emerald Azzurra
                      <input
                        type="checkbox"
                        id="chk_Ship_LD"
                        defaultValue="Emerald Azzurra"
                        onclick='addRemoveShip(this,"Emerald Azzurra","LD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_LE">
                    <label>
                      Emerald Sakara
                      <input
                        type="checkbox"
                        id="chk_Ship_LE"
                        defaultValue="Emerald Sakara"
                        onclick='addRemoveShip(this,"Emerald Sakara","LE")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_PCL">
                    <label>
                      Princess Cruises
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_PCL"
                        defaultValue="Princess Cruises"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PC">
                    <label>
                      Caribbean Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PC"
                        defaultValue="Caribbean Princess"
                        onclick='addRemoveShip(this,"Caribbean Princess","PC")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PL">
                    <label>
                      Coral Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PL"
                        defaultValue="Coral Princess"
                        onclick='addRemoveShip(this,"Coral Princess","PL")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PW">
                    <label>
                      Crown Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PW"
                        defaultValue="Crown Princess"
                        onclick='addRemoveShip(this,"Crown Princess","PW")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PD">
                    <label>
                      Diamond Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PD"
                        defaultValue="Diamond Princess"
                        onclick='addRemoveShip(this,"Diamond Princess","PD")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PX">
                    <label>
                      Discovery Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PX"
                        defaultValue="Discovery Princess"
                        onclick='addRemoveShip(this,"Discovery Princess","PX")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PF">
                    <label>
                      Emerald Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PF"
                        defaultValue="Emerald Princess"
                        onclick='addRemoveShip(this,"Emerald Princess","PF")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PV">
                    <label>
                      Enchanted Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PV"
                        defaultValue="Enchanted Princess"
                        onclick='addRemoveShip(this,"Enchanted Princess","PV")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PG">
                    <label>
                      Grand Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PG"
                        defaultValue="Grand Princess"
                        onclick='addRemoveShip(this,"Grand Princess","PG")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PI">
                    <label>
                      Island Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PI"
                        defaultValue="Island Princess"
                        onclick='addRemoveShip(this,"Island Princess","PI")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PM">
                    <label>
                      Majestic Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PM"
                        defaultValue="Majestic Princess"
                        onclick='addRemoveShip(this,"Majestic Princess","PM")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PK">
                    <label>
                      Regal Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PK"
                        defaultValue="Regal Princess"
                        onclick='addRemoveShip(this,"Regal Princess","PK")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PY">
                    <label>
                      Royal Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PY"
                        defaultValue="Royal Princess"
                        onclick='addRemoveShip(this,"Royal Princess","PY")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PB">
                    <label>
                      Ruby Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PB"
                        defaultValue="Ruby Princess"
                        onclick='addRemoveShip(this,"Ruby Princess","PB")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PS">
                    <label>
                      Sapphire Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PS"
                        defaultValue="Sapphire Princess"
                        onclick='addRemoveShip(this,"Sapphire Princess","PS")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PN">
                    <label>
                      Sky Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PN"
                        defaultValue="Sky Princess"
                        onclick='addRemoveShip(this,"Sky Princess","PN")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_PU">
                    <label>
                      Sun Princess
                      <input
                        type="checkbox"
                        id="chk_Ship_PU"
                        defaultValue="Sun Princess"
                        onclick='addRemoveShip(this,"Sun Princess","PU")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_SCD">
                    <label>
                      Sea Cloud
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_SCD"
                        defaultValue="Sea Cloud"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_QS">
                    <label>
                      Sea Cloud
                      <input
                        type="checkbox"
                        id="chk_Ship_QS"
                        defaultValue="Sea Cloud"
                        onclick='addRemoveShip(this,"Sea Cloud","QS")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_QC">
                    <label>
                      Sea Cloud II
                      <input
                        type="checkbox"
                        id="chk_Ship_QC"
                        defaultValue="Sea Cloud II"
                        onclick='addRemoveShip(this,"Sea Cloud II","QC")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_QD">
                    <label>
                      Sea Cloud Spirit
                      <input
                        type="checkbox"
                        id="chk_Ship_QD"
                        defaultValue="Sea Cloud Spirit"
                        onclick='addRemoveShip(this,"Sea Cloud Spirit","QD")'
                      />
                    </label>
                  </li>
                  <li className="cruise-line-heading" id="li_Ship_SLC">
                    <label>
                      Scenic Luxury Cruises
                      <input
                        onclick="GetResultCount()"
                        type="label"
                        id="chk_Ship_SLC"
                        defaultValue="Scenic Luxury Cruises"
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_LL">
                    <label>
                      Scenic Eclipse I
                      <input
                        type="checkbox"
                        id="chk_Ship_LL"
                        defaultValue="Scenic Eclipse I"
                        onclick='addRemoveShip(this,"Scenic Eclipse I","LL")'
                      />
                    </label>
                  </li>
                  <li className="main-ship" id="li_Ship_LM">
                    <label>
                      Scenic Eclipse II
                      <input
                        type="checkbox"
                        id="chk_Ship_LM"
                        defaultValue="Scenic Eclipse II"
                        onclick='addRemoveShip(this,"Scenic Eclipse II","LM")'
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <input
                type="text"
                readOnly="readonly"
                id="txtDurationSelect"
                name="DurationsName"
                defaultValue="Cruise length*"
                onclick="ToggerDurationWrapper()"
              />
              <input type="hidden" name="duration" id="hdnDurationSelect" />
              <input type="hidden" id="hdnDurationPreSelect" />
              <input type="hidden" id="hdnDurationNamePreSelect" />
              <span
                id="spnDurationErrMsg"
                className="error-message"
                style={{ display: "none" }}
              />
              <div
                id="divDurationWrapper"
                className="popupSelect"
                style={{ display: "none" }}
              >
                <div className="fixedBtnRow">
                  <a
                    id="ancDurationSelectNone"
                    href="javascript:void(0)"
                    onclick="UnselectAllDuration()"
                  >
                    Select None
                  </a>
                  <a
                    id="ancDurationSelectOK"
                    href="javascript:void(0)"
                    onclick="ToggerDurationWrapper()"
                  >
                    OK
                  </a>
                </div>
                <ul id="ulDuration">
                  <li className="duration" id="li_Duration_1-5">
                    <label>
                      1-5 NIGHTS
                      <input
                        type="checkbox"
                        id="chk_Duration_1-5"
                        defaultValue="1-5 NIGHTS"
                        onclick='addRemoveDuration(this,"1-5 NIGHTS","1-5")'
                      />
                    </label>
                  </li>
                  <li className="duration" id="li_Duration_6-9">
                    <label>
                      6-9 NIGHTS
                      <input
                        type="checkbox"
                        id="chk_Duration_6-9"
                        defaultValue="6-9 NIGHTS"
                        onclick='addRemoveDuration(this,"6-9 NIGHTS","6-9")'
                      />
                    </label>
                  </li>
                  <li className="duration" id="li_Duration_10-14">
                    <label>
                      10-14 NIGHTS
                      <input
                        type="checkbox"
                        id="chk_Duration_10-14"
                        defaultValue="10-14 NIGHTS"
                        onclick='addRemoveDuration(this,"10-14 NIGHTS","10-14")'
                      />
                    </label>
                  </li>
                  <li className="duration" id="li_Duration_15">
                    <label>
                      MORE THAN 14 NIGHTS
                      <input
                        type="checkbox"
                        id="chk_Duration_15"
                        defaultValue="MORE THAN 14 NIGHTS"
                        onclick='addRemoveDuration(this,"MORE THAN 14 NIGHTS","15")'
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dateFild">
              <input
                type="text"
                readOnly="readonly"
                id="txtDepartureDate"
                className="departureDate mtz-monthpicker-widgetcontainer"
                placeholder="Earliest Departure"
                name="departure"
                defaultValue=""
              />
              <input type="hidden" id="hdnDepartureDate" />
              <span
                id="spnDepDateErrMsg"
                className="error-message"
                style={{ display: "none" }}
              >
                Select depart date
              </span>
            </li>
            <li className="dateFild">
              <input
                type="text"
                readOnly="readonly"
                id="txtReturnDate"
                className="returnDate mtz-monthpicker-widgetcontainer"
                placeholder="Latest Return"
                name="arrival"
                defaultValue=""
              />
              <input type="hidden" id="hdnReturnDate" />
              <span
                id="spnRetDateErrMsg"
                className="error-message"
                style={{ display: "none" }}
              >
                Select return date
              </span>
            </li>
          </ul>
          <div className="markedMandatory">Field marked * are mandatory</div>
          <div className="button">
            <button
              type="button"
              className="submit g-orange"
              id="BtnSearchFare"
            >
              Search Now
            </button>
          </div>
          <div className="searchResult">
            <h5 id="spnSearchResultcount" />
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
<section className="cruiseDeal">
  <h2>
    <span>Top Cruise Lines</span>
  </h2>
  <div className="crsmbox owl-carousel owl-loaded owl-drag">
    {/*Deal Box*/}
    {/*End Deal Box*/}
    {/*Deal Box*/}
    {/*End Deal Box*/}
    {/*Deal Box*/}
    {/*End Deal Box*/}
    {/*End Deal Box*/}
    {/*Deal Box*/}
    {/*End Deal Box*/}
    {/*Deal Box*/}
    {/*End Deal Box*/}
    {/*Deal Box*/}
    {/*End Deal Box*/}
    {/*Deal Box*/}
    {/*End Deal Box*/}
    {/*Deal Box*/}
    {/*End Deal Box*/}
    <div className="owl-stage-outer">
      <div
        className="owl-stage"
        style={{
          transform: "translate3d(-1625px, 0px, 0px)",
          transition: "all",
          width: 6560,
          paddingLeft: 30,
          paddingRight: 30
        }}
      >
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/azamara-club-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Azamara-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/azamara-club-cruises.png"
                alt="azamara-club-cuises"
              />
              <p>
                Explore Azamara Cruises with Red Umbrella Holidays. Indulge in
                luxury voyages across seven continents aboard their intimate
                fleet. Discover over 300 ports with immersive cultural
                experiences, gourmet dining, and personalized service, ensuring
                unforgettable journeys tailored to discerning travelers.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $325 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/carnival-cruise-lines" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Carnival-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/carnival-cruise-lines.png"
                alt="carnival-cruise-lines"
              />
              <p>
                Discover the world with Carnival Cruises! From the sun-soaked
                Caribbean to the majestic Alaskan wilderness, embark on
                unforgettable voyages aboard Carnival's newest ships like
                Carnival Jubilee and Carnival Firenze.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $323 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/celebrity-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Celebrity-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/celebrity-cruises.png"
                alt="celibrity-cruises"
              />
              <p>
                Experience the extraordinary with Celebrity Cruises. Whether you
                crave the intimate charm of smaller ships or the excitement of
                larger ones, Celebrity delivers unparalleled luxury and service.{" "}
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $487 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/costa-cruise-lines" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Costa-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/costa-cruise-lines.png"
                alt="costa-cruise-lines"
              />
              <p>
                Book Costa Cruises for a luxurious voyage aboard their modern
                fleet, renowned for their Italian elegance and innovative
                technology. Discover over 250 destinations worldwide, from
                Antarctica to the Mediterranean, with family-friendly
                activities, authentic cuisine, and sustainable travel practices
                enhancing every journey.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $109 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/msc-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/MSC-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/msc-cruises.png"
                alt="msc-cruises"
              />
              <p>
                Explore the world in style aboard MSC's modern fleet, from the
                Mediterranean's charm to the Caribbean's allure and beyond.
                Experience unforgettable moments while making a positive impact
                on the seas with MSC Cruises' commitment to environmental
                stewardship and exceptional service.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $154 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item active"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/royal-caribbean" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Royal-Caribbean.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/royal-caribbean.png"
                alt="royal-caribbean"
              />
              <p>
                Set sail with Royal Caribbean Cruises via Red Umbrella Holidays
                and discover over 50 years of maritime excellence. Experience
                unforgettable voyages spanning from sun-soaked beaches to
                ancient wonders, seamlessly blending adventure, relaxation, and
                luxury at sea.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $251 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/princess-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Princes-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/princess-cruises.png"
                alt="princess-cruises"
              />
              <p>
                Discover the essence of every destination with Princess Cruises
                via Red Umbrella Holidays. From gourmet dining and
                Broadway-style shows to personalized MedallionClass service,
                embark on a voyage that seamlessly blends adventure and
                relaxation.{" "}
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $117 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/norwegian-cruise-line" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Norwegian-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/norwegian-cruise-line.png"
                alt="norwegian-cruise-line"
              />
              <p>
                Explore Freestyle Cruising with Norwegian Cruise Line through
                Red Umbrella Holidays and discover a world of flexible dining,
                quality entertainment, and spacious accommodations tailored to
                your preferences.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $386 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/holland-america-line" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Holland-America-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/holland-america-line.png"
                alt="holland-america-line"
              />
              <p>
                Experience timeless elegance and enriching journeys with Holland
                America Line, offering exceptional service and cultural
                immersion on unforgettable voyages.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $100 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/windstar-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Windstar-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/windstar-cruises.png"
                alt="windstar-cruises"
              />
              <p>
                Sail aboard Windstar Cruises, intimate, yacht-like ships
                designed for personalized adventures. Discover hidden gems from
                the Caribbean to Southeast Asia, enjoying gourmet dining, live
                music, and exclusive watersports. With luxurious accommodations
                and impeccable service, each voyage promises a unique blend of
                luxury, intimacy, and exploration.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $450 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/azamara-club-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Azamara-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/azamara-club-cruises.png"
                alt="azamara-club-cuises"
              />
              <p>
                Explore Azamara Cruises with Red Umbrella Holidays. Indulge in
                luxury voyages across seven continents aboard their intimate
                fleet. Discover over 300 ports with immersive cultural
                experiences, gourmet dining, and personalized service, ensuring
                unforgettable journeys tailored to discerning travelers.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $325 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/carnival-cruise-lines" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Carnival-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/carnival-cruise-lines.png"
                alt="carnival-cruise-lines"
              />
              <p>
                Discover the world with Carnival Cruises! From the sun-soaked
                Caribbean to the majestic Alaskan wilderness, embark on
                unforgettable voyages aboard Carnival's newest ships like
                Carnival Jubilee and Carnival Firenze.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $323 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/celebrity-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Celebrity-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/celebrity-cruises.png"
                alt="celibrity-cruises"
              />
              <p>
                Experience the extraordinary with Celebrity Cruises. Whether you
                crave the intimate charm of smaller ships or the excitement of
                larger ones, Celebrity delivers unparalleled luxury and service.{" "}
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $487 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/costa-cruise-lines" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Costa-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/costa-cruise-lines.png"
                alt="costa-cruise-lines"
              />
              <p>
                Book Costa Cruises for a luxurious voyage aboard their modern
                fleet, renowned for their Italian elegance and innovative
                technology. Discover over 250 destinations worldwide, from
                Antarctica to the Mediterranean, with family-friendly
                activities, authentic cuisine, and sustainable travel practices
                enhancing every journey.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $109 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-item" style={{ width: 315, marginRight: 10 }}>
          <div className="box item">
            <a href="/cruise/msc-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/MSC-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/msc-cruises.png"
                alt="msc-cruises"
              />
              <p>
                Explore the world in style aboard MSC's modern fleet, from the
                Mediterranean's charm to the Caribbean's allure and beyond.
                Experience unforgettable moments while making a positive impact
                on the seas with MSC Cruises' commitment to environmental
                stewardship and exceptional service.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $154 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/royal-caribbean" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Royal-Caribbean.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/royal-caribbean.png"
                alt="royal-caribbean"
              />
              <p>
                Set sail with Royal Caribbean Cruises via Red Umbrella Holidays
                and discover over 50 years of maritime excellence. Experience
                unforgettable voyages spanning from sun-soaked beaches to
                ancient wonders, seamlessly blending adventure, relaxation, and
                luxury at sea.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $251 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/princess-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Princes-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/princess-cruises.png"
                alt="princess-cruises"
              />
              <p>
                Discover the essence of every destination with Princess Cruises
                via Red Umbrella Holidays. From gourmet dining and
                Broadway-style shows to personalized MedallionClass service,
                embark on a voyage that seamlessly blends adventure and
                relaxation.{" "}
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $117 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/norwegian-cruise-line" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Norwegian-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/norwegian-cruise-line.png"
                alt="norwegian-cruise-line"
              />
              <p>
                Explore Freestyle Cruising with Norwegian Cruise Line through
                Red Umbrella Holidays and discover a world of flexible dining,
                quality entertainment, and spacious accommodations tailored to
                your preferences.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $386 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/holland-america-line" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Holland-America-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/holland-america-line.png"
                alt="holland-america-line"
              />
              <p>
                Experience timeless elegance and enriching journeys with Holland
                America Line, offering exceptional service and cultural
                immersion on unforgettable voyages.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $100 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="owl-item cloned"
          style={{ width: 315, marginRight: 10 }}
        >
          <div className="box item">
            <a href="/cruise/windstar-cruises" className="fLink" />
            <div className="imagecr">
              <img src="/Content/images/Cruise-Ship-image/Mobile/Windstar-Cruise.jpg" />
            </div>
            <div className="contents">
              <img
                src="/Content/images/Cruise-Logo-image/windstar-cruises.png"
                alt="windstar-cruises"
              />
              <p>
                Sail aboard Windstar Cruises, intimate, yacht-like ships
                designed for personalized adventures. Discover hidden gems from
                the Caribbean to Southeast Asia, enjoying gourmet dining, live
                music, and exclusive watersports. With luxurious accommodations
                and impeccable service, each voyage promises a unique blend of
                luxury, intimacy, and exploration.
              </p>
              <div className="priceDiv">
                <span className="startPrice">Starting From</span>
                $450 <sup>pp</sup>
              </div>
              <div className="telNum">
                <a href="tel:1-833-914-2482">
                  <span className="ringing_phone" />
                  <span className="nbrs"> 1-833-914-2482</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="owl-nav disabled">
      <button type="button" role="presentation" className="owl-prev">
        <span aria-label="Previous">‹</span>
      </button>
      <button type="button" role="presentation" className="owl-next">
        <span aria-label="Next">›</span>
      </button>
    </div>
    <div className="owl-dots disabled" />
  </div>
</section>
<div className="container disclaimer">
  * All cruise fares mentioned on this page are updated as of Sep 30, 2024 at
  9:26 AM EST. These are based on historical data and may change without notice.
  These prices are non-transferable and non-refundable after booking
  confirmation. For further details, read{" "}
  <a href="javascript:void(0)" onclick="openpopupwindow('/service-fees')">
    our Service Fees
  </a>
  ,{" "}
  <a target="_blank" href="/taxes-and-fee">
    Taxes and Fees
  </a>
  , and{" "}
  <a href="/terms-and-conditions" target="_blank">
    Terms and Conditions
  </a>{" "}
  carefully.
</div>
<section className="dealContents">
  <div className="container airline-hdng">
    <h2 className="themeColor">Choose The Best Cruise Experience</h2>
    <p>
      Make sure you use RedUmbrella Holidays to get the greatest prices on
      anything cruise-related. Make the most of your cruise vacations with extra
      savings and exclusive offers, a well-planned itinerary, professional
      advice, immediate booking confirmations, and more. Select from a variety
      of the most unique cruise lines, destinations, and cruise vacation
      packages.
    </p>
    <h2 className="themeColor">
      Sail Away in Style with RedUmbrella Holidays Cruises
    </h2>
    <p>
      No matter how you choose to cruise, RedUmbrella Holidays guarantees the
      finest deals for the most affordable cruise trips. It could be a lengthy
      expedition that lasts many weeks or a quick trip across local waterways.
      Realize your aspirations of traveling the world in style with over 700
      ships and 50+ partner cruise lines. To sail with total assurance, plan
      your next cruise vacation today.
    </p>
    <h2 className="themeColor">
      Find your ideal voyage with RedUmbrella Holidays. Start your adventure
      now!{" "}
    </h2>
  </div>
  <div className="flexFooterStrip">
    <a href="tel:1-833-914-2482" className="callLinkFooter g-orange">
      Call Us at 1-833-914-2482
    </a>{" "}
    and get assistance 24/7
  </div>
</section>
  
    </>
}
export default Cruise;