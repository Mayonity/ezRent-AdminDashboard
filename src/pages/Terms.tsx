import React, { useState , useEffect} from 'react'
import Sidebar from '../components/Sidebar/Sidebars';
import Navbar from '../components/Sidebar/Navbar';

const Terms = () => {
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Terms'; // Set your dynamic title here
  }, []);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
      <div className="flex flex-col md:flex-row bg-gray transition-all">
      {/* Sidebar and Navbar components */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 justify-center text-center items-center align-center">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
     
        <div className='m-10'>
       <div className="m-10 -ml-10" >
          <h1 className=" text-3xl md:text-5xl mt-5 width  md:mt-10 text-left font-bold ml-10">Terms & Conditions</h1>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="md:m-10 width border border-box rounded-2xl m p-5 md:p-10 w-full"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
          ></textarea>
        <button className='w-full  width md:w-4/5 lg:w-1/2 xl:w-1/3 h-15 bg-meta-3 text-white rounded-lg mt-5 md:mt-10'>Save</button>
        </div>
       </div>
      </div>
    </div>
          );

}

export default Terms
