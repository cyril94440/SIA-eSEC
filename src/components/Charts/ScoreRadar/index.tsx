import { Chart, Filler, LineElement, PointElement, RadialLinearScale } from 'chart.js'
import { VFC } from 'react'
import { Radar } from 'react-chartjs-2'

Chart.register(Filler, LineElement, PointElement, RadialLinearScale)

export interface ScoreRadarProps {
  values: number[]
  targetValues: number[]
  labels: string[]
}

export const ScoreRadar: VFC<ScoreRadarProps> = (props) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.values,
        fill: true,
        backgroundColor: 'rgba(66, 153, 225, 0.6)',
      },
      {
        data: props.targetValues,
        fill: false,
        backgroundColor: 'red',
        borderColor: 'red',
      },
    ],
  }

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  }

  return (
    <Radar data={data} options={options} />
  )
}

