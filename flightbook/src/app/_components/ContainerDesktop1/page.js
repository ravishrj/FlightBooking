const Container1=()=>{
return <div className="container">
<section className="searchWidget">
  <div className="TabContainer">
    <div className="tabHolder">
      <ul>
        <li
          id="vacationtablink"
          onclick="OpenTab('VacationTab')"
          className="active"
        >
          <div className="helicopter_wrapper charter">
            <div className="helicopter">
              <img src="/Content/images/v1.png" alt="" />
            </div>
          </div>
          <a href="javascript:void(0)" title="Vacations">
            <span>Vacations</span>
          </a>
        </li>
        <li id="flighttablink" onclick="OpenTab('FlightTab')">
          <div className="helicopter_wrapper charter">
            <div className="helicopter">
              <img src="/Content/images/v2.png" alt="" />
            </div>
          </div>
          <a href="javascript:void(0)" title="Flights">
            <span>Flights</span>
          </a>
        </li>
        <li id="hoteltablink" onclick="OpenTab('HotelTab')">
          <div className="helicopter_wrapper charter">
            <div className="helicopter hotel">
              <img src="/Content/images/v3.png" alt="" />
            </div>
          </div>
          <a href="javascript:void(0)" title="Hotels">
            <span>Hotels</span>
          </a>
        </li>
      </ul>
      <div id="Vacations" className="TabSearchCopmonent active">
        <link
          href="/Content/css/hotel-home.css?v=RUS2021"
          rel="stylesheet"
          type="text/css"
          charSet="utf-8"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .swapHolidayDest{\n    position: absolute;\n    right: -31px;\n    top: 20px;\n    z-index: 1;\n    cursor: pointer;\n}\n    body .date.searchSec{\nwidth: 39%;\n}\n.blkbackground {\n    border-top: 3px solid #fff;\n}\nbody .From.searchSec.origin{\n    width:59%;\n}\nbody .From.searchSec.origin.dset{\n    padding-left:31px;\n}\nbody .date.searchSec.datepic{\n    padding-left: 25px;\n}\nbody .searchSec.no-day{\n    padding-left: 34px;\n}\n.searchSec.roomselect{\n    width:87%;\n}\n\n.no-day ::-webkit-scrollbar {\n    width: 5px;\n}\n.no-day ::-webkit-scrollbar-thumb {\n    background: #610101;\n    border-radius: 10px;\n}\n.no-day ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 10px;\n}\n\n.hotelvacationguestdrop{\n    top: 88px;\n}\n /*section.lightpick{\n        top:426.17px!important;\n    }*/\n"
          }}
        />
        <form id="formVacationSearch" className="hotel-home-form">
          <input
            name="FlightUniqueId"
            type="hidden"
            id="hdnVacationGuid"
            defaultValue="a8893f2f-84f3-4dcc-a07e-6a9547cf2adb"
          />
          {/* Search box */}
          <div className="f-tabs">
            <div className="From searchSec origin">
              <div className="icon-class">
                <img src="/Content/images/plane.png" />
              </div>
              <span>From</span>
              <input
                id="txtHolidayOriginCode"
                type="text"
                className="ui-autocomplete-input"
                autoComplete="off"
                onkeypress="return isCharWithSpaceHyphen(event)"
                defaultValue=""
                required=""
                placeholder="Departure"
              />
              <i
                className="fa fa-times-circle demo-label"
                style={{ display: "none" }}
              />
              <input
                name="OriginCode"
                type="hidden"
                id="hdnHolidayOriginCode"
              />
              <span
                id="spanHolidayOriginCityName"
                className="spanCity"
                style={{ display: "none" }}
              >
                City/Airport
              </span>
              <div
                id="spnHolidayOriginErrMsg"
                className="errorMsg"
                style={{ display: "none" }}
              >
                Please select departure
              </div>
            </div>
            <div className="From searchSec origin dset">
              <div className="icon-class">
                <img src="/Content/images/point.png" />
              </div>
              <span>Going To</span>
              <input
                id="txtHolidayDestCode"
                type="text"
                className="ui-autocomplete-input"
                autoComplete="off"
                onkeypress="return isCharWithSpaceHyphen(event)"
                defaultValue=""
                required=""
                placeholder="Destination"
              />
              <i
                className="fa fa-times-circle demo-label"
                style={{ display: "none" }}
              />
              <input
                name="DestinationCode"
                type="hidden"
                id="hdnHolidayDestinationCode"
              />
              <span
                id="spanHolidayDestCityName"
                className="spanCity"
                style={{ display: "none" }}
              >
                City/Airport
              </span>
              <div
                id="spnHolidayDestErrMsg"
                className="errorMsg"
                style={{ display: "none" }}
              >
                Please select destination
              </div>
            </div>
            {/* date */}
            <div className="date searchSec datepic">
              <div className="icon-class">
                <img src="/Content/images/date1.png" />
              </div>
              {/* date To */}
              <div className="Date Datee">
                <span>Check-in</span>
                <input
                  type="text"
                  id="tbVacationCheckIn"
                  name="DepDate"
                  className="date"
                  placeholder="Date"
                  readOnly="readonly"
                />
                <p style={{ display: "none" }}>
                  <span className="date" id="tbVacationCheckIn_MMM">
                    Date
                  </span>
                  <span
                    className="date"
                    id="tbVacationCheckIn_DD"
                    style={{ display: "none" }}
                  />
                </p>
                <span
                  id="tbVacationCheckIn_DAY"
                  style={{ display: "none" }}
                />
                <span
                  id="tbVacationCheckIn_YYYY"
                  style={{ display: "none" }}
                />
                <div
                  id="spnVacationCheckInDateErrMsg"
                  className="errorMsg"
                  style={{ display: "none" }}
                >
                  Select check-in date
                </div>
              </div>
              {/* End date To */}
              {/* date From */}
              <div className="Date" style={{ display: "none" }}>
                <span>Check-out</span>
                <input
                  type="text"
                  id="tbVacationCheckOut"
                  name="RetDate"
                  className="date"
                  placeholder="Date"
                  readOnly="readonly"
                />
                <p style={{ display: "none" }}>
                  <span className="date" id="tbVacationCheckOut_MMM">
                    Date
                  </span>
                  <span
                    className="date"
                    id="tbVacationCheckOut_DD"
                    style={{ display: "none" }}
                  />
                </p>
                <span id="tbVacationCheckOut_DAY" />
                <span id="tbVacationCheckOut_YYYY" />
                <div
                  id="spnVacationCheckOutDateErrMsg"
                  className="errorMsg"
                  style={{ display: "none" }}
                >
                  Select check-out date
                </div>
              </div>
            </div>
            <div className="From searchSec no-day">
              <div className="icon-class">
                <img src="/Content/images/night.png" />
              </div>
              <span>Duration</span>
              <p className="night-stay">1 Night</p>
              <div className="night-popup">
                <ul>
                  <li className="nightday1 active">
                    <span>1 Night</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday2">
                    <span>2 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday3">
                    <span>3 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday4">
                    <span>4 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday5">
                    <span>5 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday6">
                    <span>6 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday7">
                    <span>7 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday8">
                    <span>8 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday9">
                    <span>9 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday10">
                    <span>10 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday11">
                    <span>11 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday12">
                    <span>12 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday13">
                    <span>13 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday14">
                    <span>14 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday15">
                    <span>15 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday16">
                    <span>16 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday17">
                    <span>17 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday18">
                    <span>18 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday19">
                    <span>19 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday20">
                    <span>20 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday21">
                    <span>21 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday22">
                    <span>22 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday23">
                    <span>23 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday24">
                    <span>24 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday25">
                    <span>25 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday26">
                    <span>26 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday27">
                    <span>27 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday28">
                    <span>28 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday29">
                    <span>29 Nights</span>
                    <span className="sel" />
                  </li>
                  <li className="nightday30">
                    <span>30 Nights</span>
                    <span className="sel" />
                  </li>
                </ul>
                <input
                  id="hdnNightDuration"
                  defaultValue={1}
                  type="hidden"
                  name="Duration"
                />
              </div>
            </div>
            <div className="searchSec roomselect">
              <div className="icon-class">
                <img src="/Content/images/room.png" />
              </div>
              <span>Rooms &amp; Guests</span>
              <input
                type="text"
                id="totalVacationpersonH"
                onclick="return OpenVacationRoomGuestBox()"
                name="HotelRoomPaxInfo"
                className=""
                placeholder="1 Room, 2 Adults, 0 Child"
                readOnly=""
                defaultValue="1 ROOM , 2 ADULTS, 0 CHILD"
                title="1 ROOM , 2 ADULTS, 0 CHILD"
              />
            </div>
            <div className="searchSec boardbasis" style={{ display: "none" }}>
              <span>Board Basis</span>
              <p className="night-board">Any</p>
              <div className="nightboard-popup">
                <ul>
                  <li className="bbTypeAny active">
                    <span>Any</span>
                    <span className="sel" />
                  </li>
                  <li className="bbTypeAll_Inclusive">
                    <span>All Inclusive</span>
                    <span className="sel" />
                  </li>
                  <li className="bbTypeFull_Board">
                    <span>Full Board</span>
                    <span className="sel" />
                  </li>
                  <li className="bbTypeHalf_Board">
                    <span>Half Board</span>
                    <span className="sel" />
                  </li>
                  <li className="bbTypeBed_Breakfast">
                    <span>Bed &amp; Breakfast</span>
                    <span className="sel" />
                  </li>
                  <li className="bbTypeSelf_Catering">
                    <span>Self Catering</span>
                    <span className="sel" />
                  </li>
                  <li className="bbTypeRoom_Only">
                    <span>Room Only</span>
                    <span className="sel" />
                  </li>
                </ul>
                <input
                  id="hdnBoardBasis"
                  defaultValue="Any"
                  type="hidden"
                  name="BoardBasis"
                />
              </div>
            </div>
            <div className="button-search">
              <button
                type="button"
                className="submit g-orange"
                id="btnSearchVacationHotels"
                value="Search Now"
                onclick="return SearchHotelFaresNew()"
              >
                Get Quote
              </button>
            </div>
            {/*Dropdown*/}
            <input
              type="hidden"
              name="NumberOfRooms"
              id="hdnVacationRoomCount"
              defaultValue={1}
            />
            <div className="hotelvacationguestdrop">
              <div className="roomvacation-slct" id="divVacationRoom_1">
                <h3 className=" g-vacation-orange">Room 1</h3>
                {/* adult */}
                <div className="box">
                  <label>
                    Adult <small>18y+</small>
                  </label>
                  <div className="bunch">
                    <span
                      onclick="AddVacationSubtract(1, '-','ADT')"
                      className="minus increment"
                    >
                      -
                    </span>
                    <input
                      type="text"
                      id="txtVacationAdultCount_1"
                      className="cls_Vacation_RoomAdultCount"
                      name="RoomAdultCount"
                      readOnly="readonly"
                      size={10}
                      defaultValue={2}
                    />
                    <span
                      onclick="AddVacationSubtract(1, '+', 'ADT')"
                      className="plus increment"
                    >
                      +
                    </span>
                  </div>
                </div>
                {/*End adult */}
                {/* Children */}
                <div className="box">
                  <label>
                    Children <small>(12 years or below)</small>
                  </label>
                  <div className="bunch">
                    <span
                      onclick="AddVacationSubtract(1, '-', 'CHD')"
                      className="minus increment"
                    >
                      -
                    </span>
                    <input
                      type="text"
                      id="txtVacationChildCount_1"
                      className="cls_Vacation_RoomChildCount"
                      name="RoomChildCount"
                      readOnly="readonly"
                      size={10}
                      defaultValue={0}
                    />
                    <span
                      onclick="AddVacationSubtract(1, '+', 'CHD')"
                      className="plus increment"
                    >
                      +
                    </span>
                  </div>
                </div>
                {/*End Children */}
                {/* Child 1 Age */}
                <div
                  id="divVacationChildAgeBox1_1"
                  className="box age2"
                  style={{ display: "none" }}
                >
                  <label>
                    1<sup>st</sup> Child Age
                  </label>
                  <div className="bunch">
                    <span
                      onclick="AddVacationSubtract(1, '-', 'AGE1')"
                      className="minus increment"
                    >
                      -
                    </span>
                    <input
                      type="text"
                      id="txtVacationChildAge1_1"
                      className="cls_Vacation_RoomChildAge1"
                      name="RoomChildAge1"
                      readOnly="readonly"
                      size={10}
                      defaultValue={1}
                    />
                    <span
                      onclick="AddVacationSubtract(1, '+', 'AGE1')"
                      className="plus increment"
                    >
                      +
                    </span>
                  </div>
                </div>
                <div
                  id="divVacationChildAgeBox2_1"
                  className="box"
                  style={{ display: "none" }}
                >
                  <label>
                    2<sup>nd</sup> Child Age
                  </label>
                  <div className="bunch">
                    <span
                      onclick="AddVacationSubtract(1, '-', 'AGE2')"
                      className="minus increment"
                    >
                      -
                    </span>
                    <input
                      type="text"
                      id="txtVacationChildAge2_1"
                      className="cls_Vacation_RoomChildAge2"
                      name="RoomChildAge2"
                      readOnly="readonly"
                      size={10}
                      defaultValue={1}
                    />
                    <span
                      onclick="AddVacationSubtract(1, '+', 'AGE2')"
                      className="plus increment"
                    >
                      +
                    </span>
                  </div>
                </div>
                {/*End Children */}
              </div>
              {/* add more room button */}
              <div className="btsmoreroom">
                <a href="javascript:;" onclick="AddVacationRooms()">
                  +ADD ROOM
                </a>
                <button
                  type="button"
                  onclick="return HideVacationRoomGuestBox()"
                  className="g-orange"
                >
                  DONE
                </button>
              </div>
              {/* End add more room button */}
            </div>
            {/*Close Dropdown */}
            {/* End date From */}
          </div>
          {/* End Search box */}
        </form>
      </div>
      <div
        id="Flights"
        className="TabSearchCopmonent"
        style={{ display: "none" }}
      ></div>
      <div
        id="Hotels"
        className="TabSearchCopmonent"
        style={{ display: "none" }}
      ></div>
    </div>
  </div>
</section>
</div>


}
export default Container1;