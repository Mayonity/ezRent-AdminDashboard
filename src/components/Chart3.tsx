import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart3: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const labels = ["1-5", "6-10", "11-15", "16-20", "21-25", "26-31"];
      const data = {
        labels: labels,
        datasets: [
          {
            label: " ",
            backgroundColor: 'transparent',
            borderColor: "#1D9E6F",
            data: [50, 15, 20, 5, 20, 60],
            borderWidth: 5,
            pointRadius: 8,
            pointBackgroundColor: "#5ABB9B",
          },
        ],
      };

      const configLineChart = {
        type: "line",
        data,
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: true,
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            y: {
              display: true,
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                padding: 15,
              },
            },
          },
        },
      };

      const chartLine = new Chart(chartRef.current, configLineChart);

      return () => {
        chartLine.destroy();
      };
    }
  }, []);

  return (
   











<div>
  
  <div className="w-[681px]  shrink-0 border rounded-[10px] bg-white border-solid border-[#CACACA] " style={{ maxWidth: '180%', width: '700px', margin: '0 auto' }}>
  <h1 className='text-xl text-gray-2 pl-10 opacity-90 mt-6'>Total Transaction amount</h1>
  <br />
  <div className='p-6'>
  <div className='flex'>   
  <div className="text-[#787878] text-xl font-bold not-italic" style={{ writingMode: 'vertical-rl', transform: 'rotate(-180deg)', marginBottom: '30px' }}>
  Transaction amount ($)
  </div>
  
  
  
  
  <div style={{ width: '75%', height: '35vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="">
  <canvas ref={chartRef} style={{ width: '80%', height: '60%' }}/>
  </div>
  </div>
  
  <div className='text-[#787878] text-center text-xl not-italic font-bold leading-[normal] mt-20'>March 2023</div>
  </div>
  </div>
  </div>
  );
};

export default LineChart3;