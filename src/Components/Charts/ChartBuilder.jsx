// components/MyChart.js
import { Line, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyChart = ({ chrTitle }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        data: [1, 59, 80, 81, 56, 55, 100],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This ensures the chart resizes dynamically
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chrTitle,
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{ position: "relative", height: "90%", width: "90%" }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default MyChart;
