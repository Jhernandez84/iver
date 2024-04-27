"use client";

import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import "./styles.css";

export const DBChart = ({
  ChartType,
  ChartData,
  ChartId,
  ChartWidth,
  ChartTitle,
}) => {
  // Define las opciones del gráfico
  const options = {
    series: [
      {
        data: ChartData.map((item) => parseInt(item.qty, 10)),
      },
    ],
    chart: {
      type: ChartType || bar,
      height: "90%",
      // width: "90%",
      style: {
        colors: ["#ffffff"],
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#ffffff"], // Color blanco para el texto
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ChartData.map((item) => item.date),
      labels: {
        style: {
          colors: "#ffffff", // Color blanco para el texto del eje
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff", // Color blanco para el texto del eje Y
        },
      },
    },
  };

  // Usa useEffect para renderizar el gráfico cuando el componente esté montado
  useEffect(() => {
    const chart = new ApexCharts(
      document.querySelector(`#${ChartId}`),
      options
    );
    chart.render();

    // Limpia el gráfico cuando el componente se desmonte
    return () => {
      chart.destroy();
    };
  }, []); // El array de dependencias vacío asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <>
      <div className="chart-container">
        <div className="chart-inner-border">
          <div className="chart-header">
            <p className="chart-title">{ChartTitle}</p>
            <div className="chart-options">
              <div>
                <select
                  className="chart-options-selector"
                  id="chartOption"
                  name="chartOption"
                >
                  <option value="volvo">Opción 1</option>
                  <option value="saab">Opción 2</option>
                  <option value="saab">Opción 3</option>
                  <option value="saab">Opción 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="chart-render" id={ChartId}>
            {/* El gráfico se renderizará aquí */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DBChart;
