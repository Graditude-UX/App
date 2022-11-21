import React from 'react'
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend} from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
 

 ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: true,
      position: 'left', 
      text: 'Happiness Trends',
    },
    
  },
  scales: {
    y: {
        max: 100,
        min: 0,
        ticks: {
            stepSize: 20
        }
    }
}
};

const labels = ['12am', '3am', '9am', '12pm', '3am', '9pm', '11pm'];

export const data = {
  labels,
  datasets: [
    { 
      label: 'Happiness level',
      data: [65, 59, 55, 81, 60, 80],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


function HappinessChart(){
    return(
        <div>
        <Line data={data} options={options}/>
        </div>
    )
}

export default HappinessChart;
