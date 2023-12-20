import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  // legend: {
  //   show: false,
  //   position: 'top',
  //   horizontalAlign: 'left',
  // },
  // colors: ['#1D9E6F', '#1D9E6F'],
  // chart: {
  //   fontFamily: 'Satoshi, sans-serif',
  //   height: 335,
  //   type: 'area',
  //   dropShadow: {
  //     enabled: true,
      
  //     top: 10,
  //     blur: 4,
  //     left: 0,
  //     opacity: 0.1,
  //   },

  //   toolbar: {
  //     show: false,
  //   },
  // },
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     options: {
  //       chart: {
  //         height: 300,
  //       },
  //     },
  //   },
  //   {
  //     breakpoint: 1366,
  //     options: {
  //       chart: {
  //         height: 350,
  //       },
  //     },
  //   },
  // ],
  // stroke: {
  //   width: [2, 2],
  //   curve: 'straight',
  // },
  // // labels: {
  // //   show: false,
  // //   position: "top",
  // // },
  // grid: {
  //   xaxis: {
  //     lines: {
  //       show: true,
  //     },
  //   },
  //   yaxis: {
  //     lines: {
  //       show: true,
  //     },
  //   },
  // },
  // dataLabels: {
  //   enabled: false,
  // },
  // markers: {
  //   size: 6,
  //   colors: '#1D9E6F',
  //   strokeColors: ['#1D9E6F', ''],
  //   strokeWidth: 3,
  //   strokeOpacity: 0.9,
  //   strokeDashArray: 0,
  //   fillOpacity: 1,
  //   discrete: [],
  //   hover: {
  //     size: undefined,
  //     sizeOffset: 5,
  //   },
  // },
  
  // xaxis: {
  //   type: 'category',
  //   categories: [
  //     '1-5',
  //     '6-10',
  //     '11-15',
  //     '16-20',
  //     '21-25',
  //     '26-31',
   
  //   ],
  //   axisBorder: {
  //     show: false,
  //   },
  //   axisTicks: {
  //     show: false,
  //   },
  // },
  // yaxis: {
  //   title: {
  //     style: {
  //       fontSize: '0px',
  //     },
  //   },
  //   min: 0,
  //   max: 100,
  // },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const Chart: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Product One',
        data: [0, 50, 90,80,50,70 ,0 ],
      },

     
    ],
  });

  return (
    
    <div className="line  mt-5 w-180 col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8  " >
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5 text-gray-2">
      Total Products
        </div>
       
      </div>

      <div>
        <div id="chartOne" className="ml-12  align-center justify-center  items-center   ">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
            width={550}

          />

        </div>
      </div>
    </div>
  );
};

export default Chart;

