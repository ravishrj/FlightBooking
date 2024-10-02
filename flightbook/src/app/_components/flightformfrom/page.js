const FlightFormFrom=()=>{
    return <div
    className="SearchOverlay txtOriginCodeOverlay"
    style={{ zIndex: -1, opacity: 0 }}
  >
    <h4 className="g-orange">
      Origin
      <a href="javascript:;" className="close-ol">
        x
      </a>
    </h4>
    <input
      id="txtHolidayOriginCode"
      type="text"
      className="ui-autocomplete-input"
      autoComplete="off"
      onkeypress="return isCharWithSpaceHyphen(event)"
      defaultValue=""
      required=""
      placeholder="Enter Origin City / Airport"
    />
    <i className="fa fa-times-circle demo-label" style={{ display: "none" }} />
  </div>
  
}
export default  FlightFormFrom;