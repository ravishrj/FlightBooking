// "use client"

// import { useState } from "react";

// const Calendar_Desktop=()=>{
//     const[toggle,setToggle]=useState(false)
// return <section
// className={`${toggle?"lightpick lightpick--2-columns":"lightpick lightpick--2-columns is-hidden"}`}
// onClick={()=>{
//     setToggle(prev=>!prev);
// }}
// data-top="426.0625"
// data-left="629.546875"
// style={{ top: "426.062px", left: "629.547px" }}
// >
// <div className="lightpick__inner">
//   <div className="lightpick__toolbar">
//     <div className="lightpick__toolbar">
//       <div className="lightpick_ruhus_selecteddate_header">
//         <span className="lightpick_ruhus_selecteddate_From_Date selecteddate_highlighter">
//           <span className="lightpick_ruhus_selecteddate_From_Date_Header">
//             Depart
//           </span>
//           Tue 15 Oct, 24
//         </span>
//         <span className="lightpick_ruhus_selecteddate_Separator">=&gt;</span>
//         <span className="lightpick_ruhus_selecteddate_To_Date">
//           <span className="lightpick_ruhus_selecteddate_To_Date_Header">
//             Return
//           </span>
//           Tue 15 Oct, 24
//         </span>
//       </div>
//       <button
//         type="button"
//         className="lightpick__previous-action"
//         style={{ visibility: "hidden" }}
//       >
//         ←
//       </button>
//       <button type="button" className="lightpick__next-action">
//         →
//       </button>
//     </div>
//   </div>
//   <div className="lightpick__months">
//     <section className="lightpick__month">
//       <div className="lightpick__month-title-bar">
//         <div className="lightpick__month-title">
//           <select
//             className="lightpick__select lightpick__select-months"
//             dir="rtl"
//             disabled=""
//           >
//             <option value={0}>January</option>
//             <option value={1}>February</option>
//             <option value={2}>March</option>
//             <option value={3}>April</option>
//             <option value={4}>May</option>
//             <option value={5}>June</option>
//             <option value={6}>July</option>
//             <option value={7}>August</option>
//             <option value={8}>September</option>
//             <option value={9} selected="selected">
//               October
//             </option>
//             <option value={10}>November</option>
//             <option value={11}>December</option>
//           </select>
//           <select
//             className="lightpick__select lightpick__select-years"
//             disabled=""
//           >
//             <option value={1900}>1900</option>
//             <option value={1901}>1901</option>
//             <option value={1902}>1902</option>
//             <option value={1903}>1903</option>
//             <option value={1904}>1904</option>
//             <option value={1905}>1905</option>
//             <option value={1906}>1906</option>
//             <option value={1907}>1907</option>
//             <option value={1908}>1908</option>
//             <option value={1909}>1909</option>
//             <option value={1910}>1910</option>
//             <option value={1911}>1911</option>
//             <option value={1912}>1912</option>
//             <option value={1913}>1913</option>
//             <option value={1914}>1914</option>
//             <option value={1915}>1915</option>
//             <option value={1916}>1916</option>
//             <option value={1917}>1917</option>
//             <option value={1918}>1918</option>
//             <option value={1919}>1919</option>
//             <option value={1920}>1920</option>
//             <option value={1921}>1921</option>
//             <option value={1922}>1922</option>
//             <option value={1923}>1923</option>
//             <option value={1924}>1924</option>
//             <option value={1925}>1925</option>
//             <option value={1926}>1926</option>
//             <option value={1927}>1927</option>
//             <option value={1928}>1928</option>
//             <option value={1929}>1929</option>
//             <option value={1930}>1930</option>
//             <option value={1931}>1931</option>
//             <option value={1932}>1932</option>
//             <option value={1933}>1933</option>
//             <option value={1934}>1934</option>
//             <option value={1935}>1935</option>
//             <option value={1936}>1936</option>
//             <option value={1937}>1937</option>
//             <option value={1938}>1938</option>
//             <option value={1939}>1939</option>
//             <option value={1940}>1940</option>
//             <option value={1941}>1941</option>
//             <option value={1942}>1942</option>
//             <option value={1943}>1943</option>
//             <option value={1944}>1944</option>
//             <option value={1945}>1945</option>
//             <option value={1946}>1946</option>
//             <option value={1947}>1947</option>
//             <option value={1948}>1948</option>
//             <option value={1949}>1949</option>
//             <option value={1950}>1950</option>
//             <option value={1951}>1951</option>
//             <option value={1952}>1952</option>
//             <option value={1953}>1953</option>
//             <option value={1954}>1954</option>
//             <option value={1955}>1955</option>
//             <option value={1956}>1956</option>
//             <option value={1957}>1957</option>
//             <option value={1958}>1958</option>
//             <option value={1959}>1959</option>
//             <option value={1960}>1960</option>
//             <option value={1961}>1961</option>
//             <option value={1962}>1962</option>
//             <option value={1963}>1963</option>
//             <option value={1964}>1964</option>
//             <option value={1965}>1965</option>
//             <option value={1966}>1966</option>
//             <option value={1967}>1967</option>
//             <option value={1968}>1968</option>
//             <option value={1969}>1969</option>
//             <option value={1970}>1970</option>
//             <option value={1971}>1971</option>
//             <option value={1972}>1972</option>
//             <option value={1973}>1973</option>
//             <option value={1974}>1974</option>
//             <option value={1975}>1975</option>
//             <option value={1976}>1976</option>
//             <option value={1977}>1977</option>
//             <option value={1978}>1978</option>
//             <option value={1979}>1979</option>
//             <option value={1980}>1980</option>
//             <option value={1981}>1981</option>
//             <option value={1982}>1982</option>
//             <option value={1983}>1983</option>
//             <option value={1984}>1984</option>
//             <option value={1985}>1985</option>
//             <option value={1986}>1986</option>
//             <option value={1987}>1987</option>
//             <option value={1988}>1988</option>
//             <option value={1989}>1989</option>
//             <option value={1990}>1990</option>
//             <option value={1991}>1991</option>
//             <option value={1992}>1992</option>
//             <option value={1993}>1993</option>
//             <option value={1994}>1994</option>
//             <option value={1995}>1995</option>
//             <option value={1996}>1996</option>
//             <option value={1997}>1997</option>
//             <option value={1998}>1998</option>
//             <option value={1999}>1999</option>
//             <option value={2000}>2000</option>
//             <option value={2001}>2001</option>
//             <option value={2002}>2002</option>
//             <option value={2003}>2003</option>
//             <option value={2004}>2004</option>
//             <option value={2005}>2005</option>
//             <option value={2006}>2006</option>
//             <option value={2007}>2007</option>
//             <option value={2008}>2008</option>
//             <option value={2009}>2009</option>
//             <option value={2010}>2010</option>
//             <option value={2011}>2011</option>
//             <option value={2012}>2012</option>
//             <option value={2013}>2013</option>
//             <option value={2014}>2014</option>
//             <option value={2015}>2015</option>
//             <option value={2016}>2016</option>
//             <option value={2017}>2017</option>
//             <option value={2018}>2018</option>
//             <option value={2019}>2019</option>
//             <option value={2020}>2020</option>
//             <option value={2021}>2021</option>
//             <option value={2022}>2022</option>
//             <option value={2023}>2023</option>
//             <option value={2024} selected="selected">
//               2024
//             </option>
//           </select>
//         </div>
//       </div>
//       <div className="lightpick__days-of-the-week">
//         <div className="lightpick__day-of-the-week" title="Monday">
//           Mon
//         </div>
//         <div className="lightpick__day-of-the-week" title="Tuesday">
//           Tue
//         </div>
//         <div className="lightpick__day-of-the-week" title="Wednesday">
//           Wed
//         </div>
//         <div className="lightpick__day-of-the-week" title="Thursday">
//           Thu
//         </div>
//         <div className="lightpick__day-of-the-week" title="Friday">
//           Fri
//         </div>
//         <div className="lightpick__day-of-the-week" title="Saturday">
//           Sat
//         </div>
//         <div className="lightpick__day-of-the-week" title="Sunday">
//           Sun
//         </div>
//       </div>
//       <div className="lightpick__days">
//         <div
//           className="lightpick__day is-previous-month is-disabled"
//           data-time={1727686186284}
//         >
//           30
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1727772586284}
//         >
//           1
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1727858986284}
//         >
//           2
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1727945386284}
//         >
//           3
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728031786284}
//         >
//           4
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728118186284}
//         >
//           5
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728204586284}
//         >
//           6
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728290986284}
//         >
//           7
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728377386284}
//         >
//           8
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728463786284}
//         >
//           9
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728550186284}
//         >
//           10
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728636586284}
//         >
//           11
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728722986284}
//         >
//           12
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728809386284}
//         >
//           13
//         </div>
//         <div
//           className="lightpick__day  is-disabled"
//           data-time={1728895786284}
//         >
//           14
//         </div>
//         <div
//           className="lightpick__day is-available  is-today"
//           data-time={1728982186284}
//         >
//           15
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729068586284}
//         >
//           16
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729154986284}
//         >
//           17
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729241386284}
//         >
//           18
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729327786284}
//         >
//           19
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729414186284}
//         >
//           20
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729500586284}
//         >
//           21
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729586986284}
//         >
//           22
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729673386284}
//         >
//           23
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729759786284}
//         >
//           24
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729846186284}
//         >
//           25
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1729932586284}
//         >
//           26
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730018986284}
//         >
//           27
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730105386284}
//         >
//           28
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730191786284}
//         >
//           29
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730278186284}
//         >
//           30
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730364586284}
//         >
//           31
//         </div>
//         <div />
//         <div />
//         <div />
//       </div>
//     </section>
//     <section className="lightpick__month">
//       <div className="lightpick__month-title-bar">
//         <div className="lightpick__month-title">
//           <select
//             className="lightpick__select lightpick__select-months"
//             dir="rtl"
//             disabled=""
//           >
//             <option value={0}>January</option>
//             <option value={1}>February</option>
//             <option value={2}>March</option>
//             <option value={3}>April</option>
//             <option value={4}>May</option>
//             <option value={5}>June</option>
//             <option value={6}>July</option>
//             <option value={7}>August</option>
//             <option value={8}>September</option>
//             <option value={9}>October</option>
//             <option value={10} selected="selected">
//               November
//             </option>
//             <option value={11}>December</option>
//           </select>
//           <select
//             className="lightpick__select lightpick__select-years"
//             disabled=""
//           >
//             <option value={1900}>1900</option>
//             <option value={1901}>1901</option>
//             <option value={1902}>1902</option>
//             <option value={1903}>1903</option>
//             <option value={1904}>1904</option>
//             <option value={1905}>1905</option>
//             <option value={1906}>1906</option>
//             <option value={1907}>1907</option>
//             <option value={1908}>1908</option>
//             <option value={1909}>1909</option>
//             <option value={1910}>1910</option>
//             <option value={1911}>1911</option>
//             <option value={1912}>1912</option>
//             <option value={1913}>1913</option>
//             <option value={1914}>1914</option>
//             <option value={1915}>1915</option>
//             <option value={1916}>1916</option>
//             <option value={1917}>1917</option>
//             <option value={1918}>1918</option>
//             <option value={1919}>1919</option>
//             <option value={1920}>1920</option>
//             <option value={1921}>1921</option>
//             <option value={1922}>1922</option>
//             <option value={1923}>1923</option>
//             <option value={1924}>1924</option>
//             <option value={1925}>1925</option>
//             <option value={1926}>1926</option>
//             <option value={1927}>1927</option>
//             <option value={1928}>1928</option>
//             <option value={1929}>1929</option>
//             <option value={1930}>1930</option>
//             <option value={1931}>1931</option>
//             <option value={1932}>1932</option>
//             <option value={1933}>1933</option>
//             <option value={1934}>1934</option>
//             <option value={1935}>1935</option>
//             <option value={1936}>1936</option>
//             <option value={1937}>1937</option>
//             <option value={1938}>1938</option>
//             <option value={1939}>1939</option>
//             <option value={1940}>1940</option>
//             <option value={1941}>1941</option>
//             <option value={1942}>1942</option>
//             <option value={1943}>1943</option>
//             <option value={1944}>1944</option>
//             <option value={1945}>1945</option>
//             <option value={1946}>1946</option>
//             <option value={1947}>1947</option>
//             <option value={1948}>1948</option>
//             <option value={1949}>1949</option>
//             <option value={1950}>1950</option>
//             <option value={1951}>1951</option>
//             <option value={1952}>1952</option>
//             <option value={1953}>1953</option>
//             <option value={1954}>1954</option>
//             <option value={1955}>1955</option>
//             <option value={1956}>1956</option>
//             <option value={1957}>1957</option>
//             <option value={1958}>1958</option>
//             <option value={1959}>1959</option>
//             <option value={1960}>1960</option>
//             <option value={1961}>1961</option>
//             <option value={1962}>1962</option>
//             <option value={1963}>1963</option>
//             <option value={1964}>1964</option>
//             <option value={1965}>1965</option>
//             <option value={1966}>1966</option>
//             <option value={1967}>1967</option>
//             <option value={1968}>1968</option>
//             <option value={1969}>1969</option>
//             <option value={1970}>1970</option>
//             <option value={1971}>1971</option>
//             <option value={1972}>1972</option>
//             <option value={1973}>1973</option>
//             <option value={1974}>1974</option>
//             <option value={1975}>1975</option>
//             <option value={1976}>1976</option>
//             <option value={1977}>1977</option>
//             <option value={1978}>1978</option>
//             <option value={1979}>1979</option>
//             <option value={1980}>1980</option>
//             <option value={1981}>1981</option>
//             <option value={1982}>1982</option>
//             <option value={1983}>1983</option>
//             <option value={1984}>1984</option>
//             <option value={1985}>1985</option>
//             <option value={1986}>1986</option>
//             <option value={1987}>1987</option>
//             <option value={1988}>1988</option>
//             <option value={1989}>1989</option>
//             <option value={1990}>1990</option>
//             <option value={1991}>1991</option>
//             <option value={1992}>1992</option>
//             <option value={1993}>1993</option>
//             <option value={1994}>1994</option>
//             <option value={1995}>1995</option>
//             <option value={1996}>1996</option>
//             <option value={1997}>1997</option>
//             <option value={1998}>1998</option>
//             <option value={1999}>1999</option>
//             <option value={2000}>2000</option>
//             <option value={2001}>2001</option>
//             <option value={2002}>2002</option>
//             <option value={2003}>2003</option>
//             <option value={2004}>2004</option>
//             <option value={2005}>2005</option>
//             <option value={2006}>2006</option>
//             <option value={2007}>2007</option>
//             <option value={2008}>2008</option>
//             <option value={2009}>2009</option>
//             <option value={2010}>2010</option>
//             <option value={2011}>2011</option>
//             <option value={2012}>2012</option>
//             <option value={2013}>2013</option>
//             <option value={2014}>2014</option>
//             <option value={2015}>2015</option>
//             <option value={2016}>2016</option>
//             <option value={2017}>2017</option>
//             <option value={2018}>2018</option>
//             <option value={2019}>2019</option>
//             <option value={2020}>2020</option>
//             <option value={2021}>2021</option>
//             <option value={2022}>2022</option>
//             <option value={2023}>2023</option>
//             <option value={2024} selected="selected">
//               2024
//             </option>
//           </select>
//         </div>
//       </div>
//       <div className="lightpick__days-of-the-week">
//         <div className="lightpick__day-of-the-week" title="Monday">
//           Mon
//         </div>
//         <div className="lightpick__day-of-the-week" title="Tuesday">
//           Tue
//         </div>
//         <div className="lightpick__day-of-the-week" title="Wednesday">
//           Wed
//         </div>
//         <div className="lightpick__day-of-the-week" title="Thursday">
//           Thu
//         </div>
//         <div className="lightpick__day-of-the-week" title="Friday">
//           Fri
//         </div>
//         <div className="lightpick__day-of-the-week" title="Saturday">
//           Sat
//         </div>
//         <div className="lightpick__day-of-the-week" title="Sunday">
//           Sun
//         </div>
//       </div>
//       <div className="lightpick__days">
//         <div />
//         <div />
//         <div />
//         <div />
//         <div
//           className="lightpick__day is-available "
//           data-time={1730450986284}
//         >
//           1
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730537386284}
//         >
//           2
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730623786284}
//         >
//           3
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730710186284}
//         >
//           4
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730796586284}
//         >
//           5
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730882986284}
//         >
//           6
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1730969386284}
//         >
//           7
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731055786284}
//         >
//           8
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731142186284}
//         >
//           9
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731228586284}
//         >
//           10
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731314986284}
//         >
//           11
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731401386284}
//         >
//           12
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731487786284}
//         >
//           13
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731574186284}
//         >
//           14
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731660586284}
//         >
//           15
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731746986284}
//         >
//           16
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731833386284}
//         >
//           17
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1731919786284}
//         >
//           18
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732006186284}
//         >
//           19
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732092586284}
//         >
//           20
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732178986284}
//         >
//           21
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732265386284}
//         >
//           22
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732351786284}
//         >
//           23
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732438186284}
//         >
//           24
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732524586284}
//         >
//           25
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732610986284}
//         >
//           26
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732697386284}
//         >
//           27
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732783786284}
//         >
//           28
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732870186284}
//         >
//           29
//         </div>
//         <div
//           className="lightpick__day is-available "
//           data-time={1732956586284}
//         >
//           30
//         </div>
//         <div
//           className="lightpick__day is-available is-next-month"
//           data-time={1733042986284}
//         >
//           1
//         </div>
//       </div>
//     </section>
//   </div>
//   <div className="lightpick__tooltip" style={{ visibility: "hidden" }} />
// </div>
// </section>


// }
// export default Calendar_Desktop;

"use client"

import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

const TravelDatePicker = ({ tripType }) => {
    const [depDate, setDepDate] = useState(new Date());

    const handleDepartureChange = (date) => {
        setDepDate(date[0]); // Flatpickr returns an array
    };

    return (
        <div className="col-xs-12 col-sm-6 col-lg-3">
            <label className="form-label cal-label">Travel Dates</label>
            <div className="calender-txt calender-block">
                <span>
                    <img
                        src="/assets/images/calender-icon.png"
                        className="input-icon cal-icon"
                        alt="Calendar Icon"
                    />
                    <Flatpickr
                        value={depDate}
                        onChange={handleDepartureChange}
                        options={{
                            dateFormat: 'Y-m-d',
                            minDate: "today",
                            disableMobile: true,
                        }}
                        render={({ defaultValue, value, ...props }, ref) => (
                            <input
                                {...props}
                                ref={ref}
                                className="hand"
                                type="text"
                                placeholder="Departure Date"
                            />
                        )}
                    />
                </span>
                {tripType === "Round-Trip" && (
                    <span>
                        <img
                            className="input-icon cal-icon retcal"
                            src="/assets/images/calender-icon.png"
                            alt="Return Calendar Icon"
                        />
                        {/* Add a second Flatpickr for return date if needed */}
                    </span>
                )}
            </div>
        </div>
    );
};

export default TravelDatePicker;
