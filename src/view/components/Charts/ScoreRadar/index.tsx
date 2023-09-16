import { Chart, ChartData, Filler, LineElement, PointElement, RadialLinearScale } from "chart.js";
import { FC } from "react";
import { Radar } from "react-chartjs-2";

Chart.register(Filler, LineElement, PointElement, RadialLinearScale);

export interface ScoreRadarProps {
  labels: string[];
  values: number[];
  targetValues?: number[];
}

export const ScoreRadar: FC<ScoreRadarProps> = (props) => {
  const data: ChartData<"radar"> = {
    labels: props.labels,
    datasets: [
      {
        data: props.values,
        fill: true,
        animation: false,
        backgroundColor: "rgba(4,124,218,0.3)",
        borderColor: "rgba(4,124,218,0.5)",
        borderWidth: 1.5,
        pointRadius: 1.5,
      },
      {
        data: props.targetValues ?? [],
        fill: true,
        animation: false,
        backgroundColor: "rgba(222,3,43,0.3)",
        borderColor: "rgba(222,3,43,0.5)",
        borderWidth: 1.5,
        pointRadius: 1.5,
      },
    ],
  };

  const options = {
    layout: {
      autoPadding: false,
      padding: 0,
    },
    scales: {
      r: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 10,
        grid: {
          color: "#f4f4f4",
        },
        ticks: {
          color: "#666",
          stepSize: 1,
          font: {
            size: 8,
          },
        },
      },
    },
  };

  // TODO: not updated under safari (15.2), forced through a random key
  return <Radar key={Math.random()} data={data} options={options} />;
};
