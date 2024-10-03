"use client"

import React, { useState } from 'react';

const Calendar = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const years = Array.from({ length: 125 }, (_, index) => 1900 + index);
    const [selectedMonth, setSelectedMonth] = useState(9); // October (0-based index)
    const [selectedYear, setSelectedYear] = useState(2024);
    
    return (
        <section className="lightpick__month ">
            <div className="lightpick__days-of-the-week">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="lightpick__day-of-the-week" title={day}>
                        {day}
                    </div>
                ))}
            </div>
            <div className="lightpick__month-title-bar">
                <div className="lightpick__month-title">
                    <select
                        className="lightpick__select lightpick__select-months"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(Number(e.target.value))}
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select
                        className="lightpick__select lightpick__select-years"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                    >
                        {years.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="lightpick__days">
                {/* Example days for October 2024 */}
                {[...Array(31).keys()].map(day => {
                    const date = new Date(selectedYear, selectedMonth, day + 1);
                    return (
                        <div key={day} className={`lightpick__day is-available`} data-time={date.getTime()}>
                            {day + 1}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Calendar;
