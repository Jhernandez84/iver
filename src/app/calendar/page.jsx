"use client";
import React, { useState } from "react";
import CalendarComponent from "@/Components/CalendarComponent/CalendarComponent";

const Calendar = () => {
  const [calendarView, setCalendarView] = useState("MonthView");
  return <CalendarComponent />;
};

export default Calendar;
