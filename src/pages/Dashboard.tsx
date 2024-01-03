import { useState, useEffect } from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import Card from '../components/Card';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import LineChart from "../components/Linechart";
import LineChart1 from '../components/Chart2';
import LineChart2 from '../components/Chart1';
import LineChart3 from '../components/Chart3';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuCalendarDays } from "react-icons/lu"
const Dashboard = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Dashboard'; // Set your dynamic title here
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-gray transition-all">
        {/* Sidebar and Navbar components */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:gap-7.5 place-content-center m-2 md:m-6">
            <div className="card 2xl:p-4 card">
              <Card />
            </div>
            <div className="card 2xl:p-4 card">
              <Card1 />
            </div>
            <div className="card 2xl:p-4 card">
              <Card2 />
            </div>
            <div className="card 2xl:p-4 card">
              <Card3 />
            </div>
          </div>

          {/* Date input */}
          <div className="md:px-5 px-2 md:ml-5 ml-2   md:flex   gap-5">
            <h1 className='text-lg pt-6  font-bold'>
              Time Range:
            </h1>
            <div className="flex  mt-5 justify-around w-60 items-center ">
              <div className='relative'>
                <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} className='w-24  md:text-[10px] text-[6px] text-end  rounded-full p-2 outline-none bg-gray border-[#CACACA] border focus:border-[#0E9F6E]' />
                <LuCalendarDays className="absolute top-1 left-1 p-1 text-2xl border-r-[#CACACA] border-t-transparent border-b-transparent border-l-transparent border" />
              </div>
              <p className='text-[10px] font-bold'>- To -</p>
              <div className='relative'>
                <DatePicker selected={endDate} onChange={(date: any) => setEndDate(date)} className='w-24  md:text-[10px] text-[6px] text-end  rounded-full p-2 outline-none bg-gray  border-[#CACACA] border focus:border-[#0E9F6E]' />
                <LuCalendarDays className="absolute top-1 left-1 p-1 text-2xl border-r-[#CACACA] border-t-transparent border-b-transparent border-l-transparent border" />

              </div>
            </div>
          </div>

          <div className="md:px-5 px-2 md:ml-5 ml-2 mb-4  md:flex  justify-between md:w-[665px] gap-5">
            <h1 className='text-lg pt-6  font-bold'>
              Show by:
            </h1>
            <div className="flex flex-wrap mt-5 justify-around md:w-[490px] gap-3 items-center ">
              <button className='w-26  text-sm text-center  text-[#787878] rounded-full py-1 outline-none bg-gray border-[#CACACA] border focus:border-[#0E9F6E]'>Days</button>
              <button  className='w-26  text-sm text-center text-[#787878] rounded-full py-1 outline-none bg-gray border-[#CACACA] border focus:border-[#0E9F6E]'>Weeks</button>
              <button  className='w-26  text-sm text-center text-[#787878] rounded-full py-1 outline-none bg-gray border-[#CACACA] border focus:border-[#0E9F6E]'>Months</button>
              <button  className='w-26  text-sm text-center text-[#787878] rounded-full py-1 outline-none bg-gray border-[#CACACA] border focus:border-[#0E9F6E]'>Year</button>

            </div>
          </div>

          {/* Line Charts */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 m-2 md:m-10">
            <div className="chart-container flex flex-col mb-4 md:mb-0 w-full  chart">
              <LineChart />
            </div>
            <div className="chart-container flex flex-col mb-4 md:mb-0 w-full chart">
              <LineChart1 />
            </div>
            <div className="chart-container flex flex-col mb-4 md:mb-0 w-full chart">
              <LineChart2 />
            </div>
            <div className="chart-container flex flex-col mb-4 md:mb-0 w-full chart">
              <LineChart3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
