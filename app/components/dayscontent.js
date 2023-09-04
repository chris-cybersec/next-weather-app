"use client";

import styles from "@/app/styles/min/DaysContent.module.css"

import {
  Chart as ChartJS,
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
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

import { Line } from "react-chartjs-2";

const DaysContent = ({ dailyData }) => {
  const { time, temperature_2m_min, temperature_2m_max } = dailyData;

  //******************************************labels
  const labels = time.slice(0, 3);
  const minTemp = temperature_2m_min.slice(0, 3);
  const maxTemp = temperature_2m_max.slice(0, 3);

  //******************************************colors
  const bgClr = "rgba(255, 255, 255, 0.8)";
  const minTempClr = "rgba(2, 167, 193, 0.8)";
  const maxTempClr = "rgba(203, 1, 1, 0.8)";

  //******************************************data
  const data = {
    labels,
    datasets: [
      {
        label: "min-Temp",
        borderColor: minTempClr,
        backgroundColor: bgClr,
        data: minTemp,
      },
      {
        label: "max-Temp",
        borderColor: maxTempClr,
        backgroundColor: bgClr,
        data: maxTemp,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Line data={data} />
    </div>
  );
};

export default DaysContent;

//sources
//https://www.chartjs.org/docs/latest/getting-started/
//https://react-chartjs-2.js.org/
