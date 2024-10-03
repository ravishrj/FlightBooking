const CustomCalendar = ()=>{
    return <section
    className="lightpick lightpick--1-columns"
    style={{ top: "359.438px", left: "-202.547px" }}
  >
    <div className="lightpick__inner">
      <div className="lightpick__toolbar">
        <div className="lightpick__toolbar">
          <button
            type="button"
            className="lightpick__previous-action"
            style={{ visibility: "hidden" }}
          >
            ←
          </button>
          <button
            type="button"
            className="lightpick__next-action"
            style={{ visibility: "hidden" }}
          >
            →
          </button>
          <button
            type="button"
            className="lightpick__close-action"
            style={{ visibility: "hidden" }}
          />
        </div>
      </div>
      <div className="lightpick__months">
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9} selected="selected">
                  October
                </option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024} selected="selected">
                  2024
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div
              className="lightpick__day is-previous-month is-disabled"
              data-time={1727697874496}
            >
              30
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1727784274496}
            >
              1
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1727870674496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available  is-today"
              data-time={1727957074496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728043474496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728129874496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728216274496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728302674496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728389074496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728475474496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728561874496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728648274496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728734674496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728821074496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728907474496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1728993874496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729080274496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729166674496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729253074496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729339474496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729425874496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729512274496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729598674496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729685074496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729771474496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729857874496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1729944274496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730030674496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730117074496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730203474496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730289874496}
            >
              30
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730376274496}
            >
              31
            </div>
            <div />
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10} selected="selected">
                  November
                </option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024} selected="selected">
                  2024
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1730462674496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730549074496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730635474496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730721874496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730808274496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730894674496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1730981074496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731067474496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731153874496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731240274496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731326674496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731413074496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731499474496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731585874496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731672274496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731758674496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731845074496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1731931474496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732017874496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732104274496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732190674496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732277074496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732363474496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732449874496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732536274496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732622674496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732709074496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732795474496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732881874496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1732968274496}
            >
              30
            </div>
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11} selected="selected">
                  December
                </option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024} selected="selected">
                  2024
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1733054674496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733141074496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733227474496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733313874496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733400274496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733486674496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733573074496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733659474496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733745874496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733832274496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1733918674496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734005074496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734091474496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734177874496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734264274496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734350674496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734437074496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734523474496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734609874496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734696274496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734782674496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734869074496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1734955474496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735041874496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735128274496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735214674496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735301074496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735387474496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735473874496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735560274496}
            >
              30
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735646674496}
            >
              31
            </div>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0} selected="selected">
                  January
                </option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1735733074496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735819474496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735905874496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1735992274496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736078674496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736165074496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736251474496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736337874496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736424274496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736510674496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736597074496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736683474496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736769874496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736856274496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1736942674496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737029074496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737115474496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737201874496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737288274496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737374674496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737461074496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737547474496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737633874496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737720274496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737806674496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737893074496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1737979474496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738065874496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738152274496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738238674496}
            >
              30
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738325074496}
            >
              31
            </div>
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1} selected="selected">
                  February
                </option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1738411474496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738497874496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738584274496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738670674496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738757074496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738843474496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1738929874496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739016274496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739102674496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739189074496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739275474496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739361874496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739448274496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739534674496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739621074496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739707474496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739793874496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739880274496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1739966674496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740053074496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740139474496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740225874496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740312274496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740398674496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740485074496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740571474496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740657874496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740744274496}
            >
              28
            </div>
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2} selected="selected">
                  March
                </option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1740830674496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1740917074496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741003474496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741089874496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741176274496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741262674496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741349074496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741435474496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741521874496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741608274496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741694674496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741781074496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741867474496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1741953874496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742040274496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742126674496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742213074496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742299474496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742385874496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742472274496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742558674496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742645074496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742731474496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742817874496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742904274496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1742990674496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743077074496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743163474496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743249874496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743336274496}
            >
              30
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743422674496}
            >
              31
            </div>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3} selected="selected">
                  April
                </option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1743509074496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743595474496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743681874496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743768274496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743854674496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1743941074496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744027474496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744113874496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744200274496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744286674496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744373074496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744459474496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744545874496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744632274496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744718674496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744805074496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744891474496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1744977874496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745064274496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745150674496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745237074496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745323474496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745409874496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745496274496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745582674496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745669074496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745755474496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745841874496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1745928274496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746014674496}
            >
              30
            </div>
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4} selected="selected">
                  May
                </option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1746101074496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746187474496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746273874496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746360274496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746446674496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746533074496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746619474496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746705874496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746792274496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746878674496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1746965074496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747051474496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747137874496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747224274496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747310674496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747397074496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747483474496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747569874496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747656274496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747742674496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747829074496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1747915474496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748001874496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748088274496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748174674496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748261074496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748347474496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748433874496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748520274496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748606674496}
            >
              30
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748693074496}
            >
              31
            </div>
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5} selected="selected">
                  June
                </option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1748779474496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748865874496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1748952274496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749038674496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749125074496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749211474496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749297874496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749384274496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749470674496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749557074496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749643474496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749729874496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749816274496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749902674496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1749989074496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750075474496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750161874496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750248274496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750334674496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750421074496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750507474496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750593874496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750680274496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750766674496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750853074496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1750939474496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751025874496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751112274496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751198674496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751285074496}
            >
              30
            </div>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6} selected="selected">
                  July
                </option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1751371474496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751457874496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751544274496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751630674496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751717074496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751803474496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751889874496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1751976274496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752062674496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752149074496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752235474496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752321874496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752408274496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752494674496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752581074496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752667474496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752753874496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752840274496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1752926674496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753013074496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753099474496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753185874496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753272274496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753358674496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753445074496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753531474496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753617874496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753704274496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753790674496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753877074496}
            >
              30
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1753963474496}
            >
              31
            </div>
            <div />
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7} selected="selected">
                  August
                </option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1754049874496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754136274496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754222674496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754309074496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754395474496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754481874496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754568274496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754654674496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754741074496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754827474496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1754913874496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755000274496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755086674496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755173074496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755259474496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755345874496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755432274496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755518674496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755605074496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755691474496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755777874496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755864274496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1755950674496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756037074496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756123474496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756209874496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756296274496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756382674496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756469074496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756555474496}
            >
              30
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756641874496}
            >
              31
            </div>
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8} selected="selected">
                  September
                </option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div
              className="lightpick__day is-available "
              data-time={1756728274496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756814674496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756901074496}
            >
              3
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1756987474496}
            >
              4
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757073874496}
            >
              5
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757160274496}
            >
              6
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757246674496}
            >
              7
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757333074496}
            >
              8
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757419474496}
            >
              9
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757505874496}
            >
              10
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757592274496}
            >
              11
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757678674496}
            >
              12
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757765074496}
            >
              13
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757851474496}
            >
              14
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1757937874496}
            >
              15
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758024274496}
            >
              16
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758110674496}
            >
              17
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758197074496}
            >
              18
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758283474496}
            >
              19
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758369874496}
            >
              20
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758456274496}
            >
              21
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758542674496}
            >
              22
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758629074496}
            >
              23
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758715474496}
            >
              24
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758801874496}
            >
              25
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758888274496}
            >
              26
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1758974674496}
            >
              27
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1759061074496}
            >
              28
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1759147474496}
            >
              29
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1759233874496}
            >
              30
            </div>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
        <section className="lightpick__month">
          <div className="lightpick__days-of-the-week">
            <div className="lightpick__day-of-the-week" title="Monday">
              Mon
            </div>
            <div className="lightpick__day-of-the-week" title="Tuesday">
              Tue
            </div>
            <div className="lightpick__day-of-the-week" title="Wednesday">
              Wed
            </div>
            <div className="lightpick__day-of-the-week" title="Thursday">
              Thu
            </div>
            <div className="lightpick__day-of-the-week" title="Friday">
              Fri
            </div>
            <div className="lightpick__day-of-the-week" title="Saturday">
              Sat
            </div>
            <div className="lightpick__day-of-the-week" title="Sunday">
              Sun
            </div>
          </div>
          <div className="lightpick__month-title-bar">
            <div className="lightpick__month-title">
              <select
                className="lightpick__select lightpick__select-months"
                dir="rtl"
                disabled=""
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9} selected="selected">
                  October
                </option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
              <select
                className="lightpick__select lightpick__select-years"
                disabled=""
              >
                <option value={1900}>1900</option>
                <option value={1901}>1901</option>
                <option value={1902}>1902</option>
                <option value={1903}>1903</option>
                <option value={1904}>1904</option>
                <option value={1905}>1905</option>
                <option value={1906}>1906</option>
                <option value={1907}>1907</option>
                <option value={1908}>1908</option>
                <option value={1909}>1909</option>
                <option value={1910}>1910</option>
                <option value={1911}>1911</option>
                <option value={1912}>1912</option>
                <option value={1913}>1913</option>
                <option value={1914}>1914</option>
                <option value={1915}>1915</option>
                <option value={1916}>1916</option>
                <option value={1917}>1917</option>
                <option value={1918}>1918</option>
                <option value={1919}>1919</option>
                <option value={1920}>1920</option>
                <option value={1921}>1921</option>
                <option value={1922}>1922</option>
                <option value={1923}>1923</option>
                <option value={1924}>1924</option>
                <option value={1925}>1925</option>
                <option value={1926}>1926</option>
                <option value={1927}>1927</option>
                <option value={1928}>1928</option>
                <option value={1929}>1929</option>
                <option value={1930}>1930</option>
                <option value={1931}>1931</option>
                <option value={1932}>1932</option>
                <option value={1933}>1933</option>
                <option value={1934}>1934</option>
                <option value={1935}>1935</option>
                <option value={1936}>1936</option>
                <option value={1937}>1937</option>
                <option value={1938}>1938</option>
                <option value={1939}>1939</option>
                <option value={1940}>1940</option>
                <option value={1941}>1941</option>
                <option value={1942}>1942</option>
                <option value={1943}>1943</option>
                <option value={1944}>1944</option>
                <option value={1945}>1945</option>
                <option value={1946}>1946</option>
                <option value={1947}>1947</option>
                <option value={1948}>1948</option>
                <option value={1949}>1949</option>
                <option value={1950}>1950</option>
                <option value={1951}>1951</option>
                <option value={1952}>1952</option>
                <option value={1953}>1953</option>
                <option value={1954}>1954</option>
                <option value={1955}>1955</option>
                <option value={1956}>1956</option>
                <option value={1957}>1957</option>
                <option value={1958}>1958</option>
                <option value={1959}>1959</option>
                <option value={1960}>1960</option>
                <option value={1961}>1961</option>
                <option value={1962}>1962</option>
                <option value={1963}>1963</option>
                <option value={1964}>1964</option>
                <option value={1965}>1965</option>
                <option value={1966}>1966</option>
                <option value={1967}>1967</option>
                <option value={1968}>1968</option>
                <option value={1969}>1969</option>
                <option value={1970}>1970</option>
                <option value={1971}>1971</option>
                <option value={1972}>1972</option>
                <option value={1973}>1973</option>
                <option value={1974}>1974</option>
                <option value={1975}>1975</option>
                <option value={1976}>1976</option>
                <option value={1977}>1977</option>
                <option value={1978}>1978</option>
                <option value={1979}>1979</option>
                <option value={1980}>1980</option>
                <option value={1981}>1981</option>
                <option value={1982}>1982</option>
                <option value={1983}>1983</option>
                <option value={1984}>1984</option>
                <option value={1985}>1985</option>
                <option value={1986}>1986</option>
                <option value={1987}>1987</option>
                <option value={1988}>1988</option>
                <option value={1989}>1989</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
                <option value={1996}>1996</option>
                <option value={1997}>1997</option>
                <option value={1998}>1998</option>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025} selected="selected">
                  2025
                </option>
              </select>
            </div>
          </div>
          <div className="lightpick__days">
            <div />
            <div />
            <div
              className="lightpick__day is-available "
              data-time={1759320274496}
            >
              1
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1759406674496}
            >
              2
            </div>
            <div
              className="lightpick__day is-available "
              data-time={1759493074496}
            >
              3
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1759579474496}
            >
              4
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1759665874496}
            >
              5
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1759752274496}
            >
              6
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1759838674496}
            >
              7
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1759925074496}
            >
              8
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760011474496}
            >
              9
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760097874496}
            >
              10
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760184274496}
            >
              11
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760270674496}
            >
              12
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760357074496}
            >
              13
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760443474496}
            >
              14
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760529874496}
            >
              15
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760616274496}
            >
              16
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760702674496}
            >
              17
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760789074496}
            >
              18
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760875474496}
            >
              19
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1760961874496}
            >
              20
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761048274496}
            >
              21
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761134674496}
            >
              22
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761221074496}
            >
              23
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761307474496}
            >
              24
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761393874496}
            >
              25
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761480274496}
            >
              26
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761566674496}
            >
              27
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761653074496}
            >
              28
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761739474496}
            >
              29
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761825874496}
            >
              30
            </div>
            <div
              className="lightpick__day  is-disabled"
              data-time={1761912274496}
            >
              31
            </div>
            <div
              className="lightpick__day is-next-month is-disabled"
              data-time={1761998674496}
            >
              1
            </div>
            <div
              className="lightpick__day is-next-month is-disabled"
              data-time={1762085074496}
            >
              2
            </div>
          </div>
        </section>
      </div>
      <div className="lightpick__tooltip" style={{ visibility: "hidden" }} />
      <div className="lightpick__footer">
        <button type="button" className="lightpick__reset-action">
          Clear Dates
        </button>
        <div className="lightpick__footer-message" />
        <button type="button" className="lightpick__apply-action">
          Confirm Dates
        </button>
      </div>
    </div>
  </section>
  
}
export default CustomCalendar;