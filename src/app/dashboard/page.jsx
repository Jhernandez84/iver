// pages/index.js or any other Next.js component file
"use client";

import React, { useContext } from "react";
import dynamic from "next/dynamic";
import SimpleCard from "@/Components/SimpleCard/SimpleCard";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";

import "./styles.css";

const DBChart = dynamic(() => import("../../Components/Charts/ChartComponent"));
const CardChartComponent = dynamic(() =>
  import("@/Components/CardsCharts/CardChartComponent")
);
const CalendarAndSummary = dynamic(() =>
  import("@/Components/CdrAndSummary/CalendarAndSummary")
);

export default function Dashboard() {
  const { userThemePreference } = useContext(ThemeContext);
  const { authUser } = useContext(AuthContext);

  console.log(authUser);

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };

    return date.toLocaleString(undefined, options);
  };

  const AppointedDates = [
    { date: "2023-12-01", qty: "1" },
    { date: "2023-12-02", qty: "6" },
    { date: "2023-12-03", qty: "8" },
    { date: "2023-12-04", qty: "7" },
    { date: "2023-12-05", qty: "2" },
    { date: "2023-12-06", qty: "4" },
    { date: "2023-12-07", qty: "9" },
    { date: "2023-12-08", qty: "8" },
    { date: "2023-12-09", qty: "4" },
    { date: "2023-12-10", qty: "1" },
    { date: "2023-12-11", qty: "4" },
    { date: "2023-12-12", qty: "6" },
    { date: "2023-12-13", qty: "4" },
    { date: "2023-12-14", qty: "8" },
    { date: "2023-12-15", qty: "7" },
    { date: "2023-12-16", qty: "1" },
  ];

  return (
    <>
      <section
        className={
          userThemePreference === "Dark"
            ? "dashboard-container Dark"
            : "dashboard-container"
        }
      >
        <section className="dashboard-leftside-container">
          <section className="dashboard-header">
            <section className="dashboard-userdata">
              <div className="db-userdata-username">
                <p>Bienvenido: {authUser?.displayName}</p>
              </div>
              <div className="db-userdata-lastconect">
                <p>
                  Última conexión {convertTimestampToDate(authUser?.lastLoginAt)}
                </p>
              </div>
            </section>
          </section>
          <section className="dashboard-body">
            <section className="dashboard-body-left-col-container">
              <div>
                <SimpleCard Header={"Próximos cumpleaños"} MaxRrows={"3"} />
              </div>
              <div>
                <SimpleCard Header={"Líderes"} MaxRrows={"7"} />
              </div>
            </section>
            <section className="dashboard-body-right-col-container">
              <div className="dashboard-chart-containers">
                
              </div>

            </section>
          </section>
        </section>

        <section className="dashboard-rightside-container">
          <CalendarAndSummary />
        </section>
      </section>
    </>
  );
}
