"use client"
import { useState } from "react";

const BookingForm=()=>{
    const [currencyToggle,setCurrencyToggle] = useState(false);
    return <form
    id="reviewpaymentform"
    action="/flightpaynow"
    method="post"
    autoComplete="nope"
  >
    <input
      name="__RequestVerificationToken"
      type="hidden"
      defaultValue="K6QBjnyapBaZb8jZBoIPyxSy0DAdlH2PGvPQR529VK5SoLNCv6ZXXVHnyIcXRFxrcmBevDgXdmaEYJwOzP3XwQLU7-DohYMJciF5QoVE05w1"
    />
    {/* TRAVELER DETAILS */}
    <input
      type="hidden"
      name="FlightGuidId"
      defaultValue="e28eceb2-6c8f-4cb7-9a5c-c8c5a7c18d6f"
      id="hdnPaymentFlightGuidID"
    />
    <input
      type="hidden"
      name="BookingGuid"
      defaultValue="d921541d-214d-4333-aaa1-c1c76215c80d"
      id="hdnPaymentBookingGuid"
    />
    <input
      type="hidden"
      name="hdnpromcodeapply"
      defaultValue={0}
      id="hdnpromcodeapply"
    />
    <input type="hidden" name="hdnpromcode" defaultValue="" id="hdnpromcode" />
    <input
      type="hidden"
      name="hdnTypeTrip"
      defaultValue="ROUNDTRIP"
      id="hdnTypeTrip"
    />
    <input
      type="hidden"
      name="flightUniqueId"
      defaultValue="e28eceb2-6c8f-4cb7-9a5c-c8c5a7c18d6f"
      id="hdnFlightUniqueId"
    />
    {/* Traveler Details */}
    <div className="fdetail-hdr">
      <h3>Traveler Details</h3>
    </div>
    <div className="traveler-details">
      <div className="info-deading">
        <h3>Adult 1</h3>
      </div>
      <ul>
        <li>
          <label>Title*</label>
          <select
            name="TitleAdult1"
            onchange="SetGenderControl(this,'Adult','1')"
          >
            <option value="">Select</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Miss">Miss</option>
          </select>
        </li>
        <li>
          <label>First Name*</label>
          <input
            className="spField-input-raw hack-lastpass-search paxfirstname"
            autoComplete="nope"
            onkeypress="return OnlyCharacterKey(event)"
            onblur="return ValidatePaxName()"
            placeholder="First Name"
            name="FnameAdult1"
            maxLength={16}
            type="text"
          />
        </li>
        <li>
          <label>Middle Name</label>
          <input
            className="spField-input-raw hack-lastpass-search paxmiddlename"
            autoComplete="nope"
            onkeypress="return OnlyCharacterKey(event)"
            onblur="return ValidatePaxName()"
            placeholder="Middle Name"
            name="MnameAdult1"
            maxLength={16}
            type="text"
          />
        </li>
        <li>
          <label>Last Name*</label>
          <input
            className="spField-input-raw hack-lastpass-search paxlastname"
            autoComplete="nope"
            onkeypress="return OnlyCharacterKey(event)"
            onblur="return ValidatePaxName()"
            placeholder="Last Name"
            name="LnameAdult1"
            maxLength={16}
            type="text"
          />
          <select
            name="NationalityAdult1"
            className="Nationality"
            style={{ border: "0 !important", display: "none" }}
          >
            <option value="US" selected="selected">
              United States
            </option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BQ">Bionare,Sint Eustatius and Saba</option>
            <option value="BO">Bolivia</option>
            <option value="BA">Bosnia Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BR">Brazil</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="VG">British Virgin Islands</option>
            <option value="BN">Brunei Darussalam</option>
            <option value="BG">Bulgaria</option>
            <option value="KH">Cambodia</option>
            <option value="KY">Cayman Islands</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CO">Colombia</option>
            <option value="CG">Congo</option>
            <option value="CR">Costa Rica</option>
            <option value="HR">Croatia</option>
            <option value="CW">Curacao</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="EE">Estonia</option>
            <option value="FK">Falkland Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GR">Greece</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HM">Heard and McDonald Islands</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Lao Peoples Democratic Republic</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LY">Libya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macau</option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="AN">Netherlands Antilles</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Island</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palau</option>
            <option value="PS">Palestinian Territory, Occupied</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn island</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="MK">Republic of Macedonia</option>
            <option value="RE">Reunion</option>
            <option value="RO">Romania</option>
            <option value="RU">Russia</option>
            <option value="RW">Rwanda</option>
            <option value="BL">Saint Barthelemy</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">Sao Tome and Principe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SX">Sint Maarten</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="GS">South Georgia and Sandwich Islands</option>
            <option value="KR">South Korea</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="KN">St. Christopher (St. Kitts) Nevis</option>
            <option value="SH">St. Helena</option>
            <option value="LC">St. Lucia</option>
            <option value="PM">St. Pierre and Miquelon</option>
            <option value="VC">St. Vincent and The Grenadines</option>
            <option value="SR">Suriname</option>
            <option value="SJ">Svalbard and Jan Mayen</option>
            <option value="SZ">Swaziland</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="SY">Syrian Arab Republic</option>
            <option value="TW">Taiwan</option>
            <option value="TH">Thailand</option>
            <option value="TL">Timor-Leste</option>
            <option value="TK">Tokelau</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="TR">Turkey</option>
            <option value="TC">Turks and Caicos Islands</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="UM">United States Minor Outlying Islands</option>
            <option value="UY">Uruguay</option>
            <option value="VI">US Virgin Islands</option>
            <option value="VA">Vatican City</option>
            <option value="VN">Vietnam</option>
            <option value="EH">Western Sahara</option>
            <option value="YE">Yemen</option>
            <option value="ZW">Zimbabwe</option>
          </select>
        </li>
        <li>
          <label>Gender*</label>
          <select
            name="GenderAdult1"
            onchange="SetTitleControl(this,'Adult','1')"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </li>
        <li className="input date-field DatePickerField-fieldsAdult1">
          <label>Date of Birth*</label>
          <select
            name="DOBMAdult1"
            id="DOBMAdult1"
            onchange="return ValidatePassengerDOB('Adult',1)"
          >
            <option value="">Month</option>
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
        </li>
        <li className="input date-field">
          <label>&nbsp;</label>
          <select
            name="DOBDAdult1"
            id="DOBDAdult1"
            onchange="return ValidatePassengerDOB('Adult',1)"
          >
            <option value="" selected="selected">
              Day
            </option>
            <option value={1}>01</option>
            <option value={2}>02</option>
            <option value={3}>03</option>
            <option value={4}>04</option>
            <option value={5}>05</option>
            <option value={6}>06</option>
            <option value={7}>07</option>
            <option value={8}>08</option>
            <option value={9}>09</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
            <option value={21}>21</option>
            <option value={22}>22</option>
            <option value={23}>23</option>
            <option value={24}>24</option>
            <option value={25}>25</option>
            <option value={26}>26</option>
            <option value={27}>27</option>
            <option value={28}>28</option>
            <option value={29}>29</option>
            <option value={30}>30</option>
            <option value={31}>31</option>
          </select>
        </li>
        <li className="input date-field">
          <label>&nbsp;</label>
          <select
            name="DOBYAdult1"
            id="DOBYAdult1"
            onchange="return ValidatePassengerDOB('Adult',1)"
          >
            <option value="" selected="selected">
              Year
            </option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
            <option value={2018}>2018</option>
            <option value={2017}>2017</option>
            <option value={2016}>2016</option>
            <option value={2015}>2015</option>
            <option value={2014}>2014</option>
            <option value={2013}>2013</option>
            <option value={2012}>2012</option>
            <option value={2011}>2011</option>
            <option value={2010}>2010</option>
            <option value={2009}>2009</option>
            <option value={2008}>2008</option>
            <option value={2007}>2007</option>
            <option value={2006}>2006</option>
            <option value={2005}>2005</option>
            <option value={2004}>2004</option>
            <option value={2003}>2003</option>
            <option value={2002}>2002</option>
            <option value={2001}>2001</option>
            <option value={2000}>2000</option>
            <option value={1999}>1999</option>
            <option value={1998}>1998</option>
            <option value={1997}>1997</option>
            <option value={1996}>1996</option>
            <option value={1995}>1995</option>
            <option value={1994}>1994</option>
            <option value={1993}>1993</option>
            <option value={1992}>1992</option>
            <option value={1991}>1991</option>
            <option value={1990}>1990</option>
            <option value={1989}>1989</option>
            <option value={1988}>1988</option>
            <option value={1987}>1987</option>
            <option value={1986}>1986</option>
            <option value={1985}>1985</option>
            <option value={1984}>1984</option>
            <option value={1983}>1983</option>
            <option value={1982}>1982</option>
            <option value={1981}>1981</option>
            <option value={1980}>1980</option>
            <option value={1979}>1979</option>
            <option value={1978}>1978</option>
            <option value={1977}>1977</option>
            <option value={1976}>1976</option>
            <option value={1975}>1975</option>
            <option value={1974}>1974</option>
            <option value={1973}>1973</option>
            <option value={1972}>1972</option>
            <option value={1971}>1971</option>
            <option value={1970}>1970</option>
            <option value={1969}>1969</option>
            <option value={1968}>1968</option>
            <option value={1967}>1967</option>
            <option value={1966}>1966</option>
            <option value={1965}>1965</option>
            <option value={1964}>1964</option>
            <option value={1963}>1963</option>
            <option value={1962}>1962</option>
            <option value={1961}>1961</option>
            <option value={1960}>1960</option>
            <option value={1959}>1959</option>
            <option value={1958}>1958</option>
            <option value={1957}>1957</option>
            <option value={1956}>1956</option>
            <option value={1955}>1955</option>
            <option value={1954}>1954</option>
            <option value={1953}>1953</option>
            <option value={1952}>1952</option>
            <option value={1951}>1951</option>
            <option value={1950}>1950</option>
            <option value={1949}>1949</option>
            <option value={1948}>1948</option>
            <option value={1947}>1947</option>
            <option value={1946}>1946</option>
            <option value={1945}>1945</option>
            <option value={1944}>1944</option>
            <option value={1943}>1943</option>
            <option value={1942}>1942</option>
            <option value={1941}>1941</option>
            <option value={1940}>1940</option>
            <option value={1939}>1939</option>
            <option value={1938}>1938</option>
            <option value={1937}>1937</option>
            <option value={1936}>1936</option>
            <option value={1935}>1935</option>
            <option value={1934}>1934</option>
            <option value={1933}>1933</option>
            <option value={1932}>1932</option>
            <option value={1931}>1931</option>
            <option value={1930}>1930</option>
            <option value={1929}>1929</option>
            <option value={1928}>1928</option>
            <option value={1927}>1927</option>
            <option value={1926}>1926</option>
            <option value={1925}>1925</option>
            <option value={1924}>1924</option>
            <option value={1923}>1923</option>
            <option value={1922}>1922</option>
            <option value={1921}>1921</option>
            <option value={1920}>1920</option>
            <option value={1919}>1919</option>
            <option value={1918}>1918</option>
            <option value={1917}>1917</option>
            <option value={1916}>1916</option>
            <option value={1915}>1915</option>
          </select>
        </li>
      </ul>
      <div className="note ">
        <p>
          <strong>Note:</strong> Use first name &amp; last name, date of birth as
          per the passport/ travel document since it’s a mandatory requirement for
          ticket issuance.
        </p>
      </div>
      <div className="Alert AdultDOBMsg " style={{ display: "none" }}>
        <div className="Alert-content">
          <i
            className="fa fa-info-circle"
            aria-hidden="true"
            style={{ marginTop: 5 }}
          />
          <div className="Alert-message">
            <span className="" data-tkey="booking.passenger.name_details.alert">
              Age of Adult(Traveler #1), on departure date, should be greater than
              or equal to 18yrs. Are you booking a flight for an unaccompanied
              minor? Certain airlines have restrictions on children under 18 years
              old traveling alone without an adult. Our expert travel agents can
              help -{" "}
              <a className="call-phone-number" href="javascript:void(0);">
                1-833-914-2482
              </a>
              .
            </span>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .AdultDOBMsg {\n            color: #fe0000;\n            background: #ffffb7;\n            padding: 10px 1% 12px;\n            border: 1px solid #fe0000;\n            line-height: 22px;\n        }\n    "
        }}
      />
    </div>
    <div className="Warning_info">
      <span id="pax-duplicate-warning" style={{ display: "none" }}>
        {" "}
        <i className="fa fa-exclamation-triangle" aria-hidden="true" />
        Duplicate Pax Details Found!
      </span>
    </div>
    {/* End Traveler Details */}
    {/* Payment Info */}
    <div className="fdetail-hdr payment-icon">
      <h3>
        Payment Info <small>(Secure SSL Encrypted Transaction)</small>
      </h3>
    </div>
    <div className="payment-info">
      <ul>
        <li>
          <label>Currency*</label>
        </li>
        <li>
          <div className="currency-exchange filter_holidays"
          onClick={()=>{
            setCurrencyToggle( prev =>!prev);
          }}>
            <a
              href="JavaScript:void(0)"
              id="selectCurrency2"
              className="acc_filter"
              data-toggle="collapse"
              data-target="#currency-list2"
            >
              <i>
                <img src="/Content/images/USD.jpg" alt="logo" />
              </i>
              USD
              <i className="fa fa-angle-down" aria-hidden="true" />
            </a>
            <div id="currency-list2" className="collapse" style={{ display: currencyToggle ? "block" : "none" }}
            >
              <p>
                <a
                  href="JavaScript:void(0)"
                  onclick="return UpdateBookingCurrency('USD');"
                >
                  <img src="/Content/images/USD.jpg" alt="logo" />{" "}
                  <span className="currency_bg">
                    USD <img src="/Content/images/dlr.png" alt="logo" />
                  </span>
                </a>
              </p>
              <p>
                <a
                  href="JavaScript:void(0)"
                  onclick="return UpdateBookingCurrency('CAD');"
                >
                  <img src="/Content/images/CAD.jpg" alt="logo" />{" "}
                  <span className="currency_bg">
                    CAD <img src="/Content/images/cdlr.png" alt="logo" />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <label>Payment Method*</label>
        </li>
        <li>
          <select
            name="selectCardType"
            id="selectCardType"
            className="chosen-select "
          >
            <option selected="selected" value="">
              Select
            </option>
            <option value="amex">Amex</option>
            <option value="discover">Discover</option>
            <option value="dinersclub">DinersClub</option>
            <option value="mastercard">MasterCard</option>
            <option value="visa">Visa</option>
          </select>
        </li>
        <li>
          <span
            id="spanCardLogo"
            style={{ display: "none" }}
            className="card-logo-unknown"
          />
          <input
            type="hidden"
            id="hdnCardType"
            name="hdnCardType"
            defaultValue="unknown"
          />
          <img src="/Content/images/card.png" />
        </li>
      </ul>
      <ul>
        <li>
          <label>Card Type*</label>
        </li>
        <li className="booking-card-type">
          <input
            type="radio"
            name="CardTypeCCDC"
            id="rdoCardTypeCC"
            defaultChecked=""
            defaultValue="CC"
          />
          <label htmlFor="rdoCardTypeCC">Credit Card &nbsp;&nbsp;</label>
          <input
            type="radio"
            name="CardTypeCCDC"
            id="rdoCardTypeDC"
            defaultValue="DC"
          />
          <label htmlFor="rdoCardTypeDC">Debit Card</label>
        </li>
        <li />
      </ul>
      <ul>
        <li>
          <label>Credit/Debit Card Number*</label>
        </li>
        <li>
          <input
            name="txtCreditCardNo"
            className=""
            autoComplete="nope"
            onkeypress="return isNumberKey(event)"
            onkeydown="return GetRemoveCreditCardType()"
            onblur="return  GetCreditCardType()"
            id="txtCreditCardNo"
            type="text"
            placeholder="Credit/Debit Card Number"
            maxLength={16}
          />
        </li>
        <li>
          <p>(Pay with credit or debit card)</p>
        </li>
      </ul>
      <ul>
        <li>
          <label>Card holder’s Name*</label>
        </li>
        <li>
          <input
            name="txtCardHolderName"
            id="txtCardHolderName"
            onkeypress="return isCharKey(event)"
            maxLength={100}
            autoComplete="nope"
            type="text"
            className=""
            placeholder="Card Holder's Name"
          />
        </li>
        <li>
          <p>(As it appears on your card)</p>
        </li>
      </ul>
      <ul>
        <li>
          <label>Expiration Date*</label>
        </li>
        <li className="exp-date expir-date">
          <span className="exp-month">
            <select
              className="chosen-select"
              name="txtExpirationMonth"
              id="txtExpirationMonth"
            >
              <option selected="selected" value="Select">
                Month
              </option>
              <option value={1}>01 - January</option>
              <option value={2}>02 - February</option>
              <option value={3}>03 - March</option>
              <option value={4}>04 - April</option>
              <option value={5}>05 - May</option>
              <option value={6}>06 - June</option>
              <option value={7}>07 - July</option>
              <option value={8}>08 - August</option>
              <option value={9}>09 - September</option>
              <option value={10}>10 - October</option>
              <option value={11}>11 - November</option>
              <option value={12}>12 - December</option>
            </select>
          </span>
          <span className="exp-year">
            <select
              className="chosen-select"
              name="txtExpirationYear"
              id="txtExpirationYear"
            >
              <option selected="selected" value="Select">
                Year
              </option>
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
              <option value={2027}>2027</option>
              <option value={2028}>2028</option>
              <option value={2029}>2029</option>
              <option value={2030}>2030</option>
              <option value={2031}>2031</option>
              <option value={2032}>2032</option>
              <option value={2033}>2033</option>
              <option value={2034}>2034</option>
              <option value={2035}>2035</option>
              <option value={2036}>2036</option>
              <option value={2037}>2037</option>
              <option value={2038}>2038</option>
            </select>
          </span>
        </li>
      </ul>
      <ul>
        <li>
          <label>Card Verification Number*</label>
        </li>
        <li className="cvv-card">
          <input
            name="txtCardCCV"
            onkeypress="return isNumberKey(event)"
            maxLength={4}
            type="password"
            className=""
            autoComplete="nope"
            aria-invalid="false"
            placeholder="CVV"
            style={{ width: 50 }}
          />
          <img src="/Content/images/cvv-card.png" />{" "}
          <p id="cvvNumberInfo">(3-digit number from your card)</p>
        </li>
      </ul>
      {/* Billing and Contact Info */}
      <div className="bc-info">
        <div className="left-info">
          <h2>Billing Information</h2>
          <ul>
            <li>
              <label>Address Line 1*</label>
            </li>
            <li>
              <textarea
                name="txtAddress"
                maxLength={100}
                autoComplete="nope"
                className=""
                rows={1}
                placeholder="Address Line 1*"
                style={{ height: 41 }}
                defaultValue={""}
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>Address Line 2</label>
            </li>
            <li>
              <textarea
                name="txtAddress2"
                maxLength={250}
                autoComplete="nope"
                type="text"
                className=""
                placeholder="Address Line 2"
                style={{ height: 70 }}
                defaultValue={""}
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>City*</label>
            </li>
            <li>
              <input
                name="txtCity"
                maxLength={250}
                autoComplete="nope"
                type="text"
                className=""
                onkeypress="return OnlyCharacterKey(event)"
                placeholder="City*"
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>Country*</label>
            </li>
            <li>
              <select
                name="ddlCountry"
                id="ddlBillCountry"
                className="Nationality"
                onchange="return ShowHideStateControl(this)"
              >
                <option value="US" selected="selected">
                  United States
                </option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BQ">Bionare,Sint Eustatius and Saba</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="VG">British Virgin Islands</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="KH">Cambodia</option>
                <option value="KY">Cayman Islands</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CO">Colombia</option>
                <option value="CG">Congo</option>
                <option value="CR">Costa Rica</option>
                <option value="HR">Croatia</option>
                <option value="CW">Curacao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="EE">Estonia</option>
                <option value="FK">Falkland Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GR">Greece</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard and McDonald Islands</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao Peoples Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macau</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn island</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="MK">Republic of Macedonia</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthelemy</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and Sandwich Islands</option>
                <option value="KR">South Korea</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="KN">St. Christopher (St. Kitts) Nevis</option>
                <option value="SH">St. Helena</option>
                <option value="LC">St. Lucia</option>
                <option value="PM">St. Pierre and Miquelon</option>
                <option value="VC">St. Vincent and The Grenadines</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TK">Tokelau</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TR">Turkey</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="VI">US Virgin Islands</option>
                <option value="VA">Vatican City</option>
                <option value="VN">Vietnam</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </li>
          </ul>
          <ul>
            <li>
              <label>State*</label>
            </li>
            <li>
              <select name="txtStateUS" id="txtStateUS" className="">
                <option selected="" value="">
                  State
                </option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District of Columbia">
                  District&nbsp;of&nbsp;Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New&nbsp;Hampshire</option>
                <option value="New Jersey">New&nbsp;Jersey</option>
                <option value="New Mexico">New&nbsp;Mexico</option>
                <option value="New York">New&nbsp;York</option>
                <option value="North Carolina">North&nbsp;Carolina</option>
                <option value="North Dakota">North&nbsp;Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode&nbsp;Island</option>
                <option value="South Carolina">South&nbsp;Carolina</option>
                <option value="South Dakota">South&nbsp;Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West&nbsp;Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
              <input
                name="txtState"
                id="txtState"
                maxLength={80}
                style={{ display: "none" }}
                autoComplete="nope"
                onkeypress="return OnlyCharacterKey(event)"
                type="text"
                className=""
                placeholder="State"
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>Pincode*</label>
            </li>
            <li>
              <input
                name="txtPinCode"
                className=""
                type="text"
                placeholder="Pincode"
                onkeypress="return OnlyCharNumberKey(event)"
                maxLength={10}
                autoComplete="nope"
              />
            </li>
          </ul>
        </div>
        <div className="right-info">
          <h2>Contact Information</h2>
          <ul style={{ display: "none" }}>
            <li>
              <label>Payee's Title*</label>
            </li>
            <li className="name-titel-mix">
              <select
                className="chosen-select form-control valid"
                name="txtBillingTitle"
                id="txtBillingTitle"
              >
                <option value="Mr" selected="">
                  Mr.
                </option>
                <option value="Mrs">Mrs.</option>
                <option value="Ms">Ms.</option>
                <option value="Miss">Miss</option>
              </select>
            </li>
          </ul>
          <ul>
            <li>
              <label>Payee's Name*</label>
            </li>
            <li>
              <input
                name="txtName"
                id="txtName"
                onkeypress="return OnlyCharacterKey(event)"
                maxLength={80}
                autoComplete="nope"
                type="text"
                className=""
                placeholder="Payee's Name*"
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>Payee's Phone No.*</label>
            </li>
            <li>
              <input
                name="txtPhone"
                id="txtPhone"
                onkeypress="return isNumberKey(event);"
                maxLength={10}
                autoComplete="nope"
                type="text"
                className="onlyNumber"
                placeholder="Payee's Phone No.*"
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>Mobile Phone*</label>
            </li>
            <li>
              <input
                name="txtContactPhone"
                id="txtContactPhone"
                onkeypress="return isNumberKey(event);"
                maxLength={10}
                autoComplete="nope"
                type="text"
                className="onlyNumber"
                placeholder="Mobile Phone*"
              />
              <input
                style={{ display: "none" }}
                name="txtAlternatePhone"
                className="onlyNumber"
                onkeypress="return isNumberKey(event);"
                title="Please enter 10-digit number"
                type="tel"
                placeholder="Alternate Phone Number"
                maxLength={15}
                minLength={10}
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>E-mail*</label>
            </li>
            <li>
              <input
                name="txtEmail"
                id="txtEmail"
                className=""
                maxLength={100}
                autoComplete="nope"
                type="text"
                placeholder="Email Address*"
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>Re-type email ID*</label>
            </li>
            <li>
              <input
                name="txtVerifyEmail"
                id="txtVerifyEmail"
                className=""
                maxLength={100}
                autoComplete="nope"
                type="text"
                placeholder="Re-type email ID*"
              />
              <input
                style={{ display: "none" }}
                name="txtContactEmail"
                id="txtContactEmail"
                className=""
                maxLength={100}
                autoComplete="nope"
                type="text"
                placeholder="Re-type email ID*"
              />
            </li>
          </ul>
          <ul>
            <li>
              <label>&nbsp;</label>
            </li>
          </ul>
        </div>
      </div>
      {/* End Billing and Contact Info */}
      {/* Secure SSL */}
      <div className="secure-ssl">
        <img className="ssl-img" src="/Content/images/lock-icon.png" />
        <h5>Secure SSL Booking</h5>
      </div>
      {/* End Secure SSL */}
    </div>
    {/* End Payment Info */}
    {/* Policies & Review */}
    <div className="polices-reviiew">
      <h2>Flight Terms &amp; Conditions</h2>
      <p>
        Fares displayed include all{" "}
        <a target="_blank" href="/taxes-and-fee">
          taxes and fees
        </a>{" "}
        and{" "}
        <a href="javascript:void(0)" onclick="openpopupwindow('/service-fees')">
          our service fees
        </a>
        . Tickets booked are non-transferable. Fares are not guaranteed until
        ticketed. Our service fees are non-refundable. Additional charges as per
        the airline{" "}
        <a target="_blank" href="/baggage-policy">
          baggage policy
        </a>{" "}
        and government or airline fees may apply with the{" "}
        <a href="/post-ticketing-fees" target="_blank">
          post-ticketing fees
        </a>
        .{" "}
      </p>
      <p>
        All fares are quoted in <span id="spnPolicyCurrency">USD</span>. Some
        airlines may charge you for checked baggage, read the{" "}
        <a target="_blank" href="/baggage-policy">
          baggage policy
        </a>{" "}
        for more details. Your credit/debit card may be billed for the full amount
        in one or more charges.{" "}
      </p>
      <hr />
      <p>
        By clicking on Book Now, you agree and accept the above-mentioned policies
        and confirm that you have checked our{" "}
        <a href="/terms-and-conditions" target="_blank">
          Terms of Booking
        </a>{" "}
        &amp;{" "}
        <a href="/privacy-policy" target="_blank">
          Privacy Policy
        </a>
        .
      </p>
    </div>
    {/* End Policies & Review */}
    {/* Fare Changed */}
    <div
      className="popup-layout flight-popup"
      id="fare-change-popup"
      style={{ display: "none" }}
    >
      <div className="popup-contents fare-change">
        <img src="/Content/images/fare-change-popup.png" />
        <h1>FARE CHANGED</h1>
        <p className="if">
          <small>
            Initial Fare: <b className="booking-old-fare-amt">$0.00</b>
          </small>
        </p>
        <p>
          New Fare: <b className="booking-new-fare-amt">$947.35</b>
        </p>
        <div className="noresult-numbr">
          <button type="button" onclick="CloseFareChangeBookingPopup()">
            BOOK NOW
          </button>
        </div>
        <div className="divdr" style={{ margin: "12px 0" }}>
          <span>or</span>
        </div>
        <div className="noresult-numbr">
          <a href="/air/listing/e28eceb2-6c8f-4cb7-9a5c-c8c5a7c18d6f">
            SEARCH NEW FLIGHT
          </a>
        </div>
      </div>
    </div>
    {/* End Fare Changed */}
    <div className="buttons">
      <button type="submit" className="g-orange" id="btnSubmit">
        BOOK NOW
      </button>
      <input name="hdnTest" type="hidden" id="hdnTest" defaultValue={0} />
      <input
        name="hdnAmount"
        type="hidden"
        id="hdnAmount"
        defaultValue="947.35"
      />
      <input
        name="hdnAmountCalc"
        type="hidden"
        id="hdnAmountCalc"
        defaultValue={0}
      />
      <input
        type="hidden"
        name="TotalFare"
        id="hdnAmountFinal"
        defaultValue="947.35"
      />
      <input type="hidden" id="hdnOldPrice" defaultValue={0} />
    </div>
    </form>
  

}
export default BookingForm;