import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const currentLocation = useLocation();
  const [isActive, setIsActive] = useState(
    currentLocation.pathname === '/' || currentLocation.pathname.includes('dashboard')
  );

  useEffect(() => {
    // Update isActive when the location changes
    setIsActive(currentLocation.pathname === '/' || currentLocation.pathname.includes('dashboard'));
  }, [currentLocation.pathname]);

  const handleClick = () => {
    // Add any additional logic or actions you want to perform when the item is clicked
    setIsActive(true);
  };

  useEffect(() => {
    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    setSidebarExpanded(
      storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    );

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());

    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  useEffect(() => {
    if (windowWidth <= 1532) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(sidebarExpanded);
    }
  }, [windowWidth, sidebarExpanded, setSidebarOpen]);
  const [isHovered, setIsHovered] = useState(false);

  const sidebarContent = {
    marginTop: '-15px',
  };

  return (
    <aside
      style={sidebarContent}
      ref={sidebar}
      className={`absolute left-0  top-0 z-9999 flex  w-72.5 flex-col  bg-white  pb-50 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
   {/* <!-- SIDEBAR HEADER --> */}
   <div className="flex items-center justify-between gap-2 px-10 py-5.5 lg:py-6.5 text-black text-3xl ">
        <NavLink to="/">
 <h1 className='text-black font-bold'> EZ Rent</h1>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>


      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5  px-4  lg:px-6">
    
          <div>
           

            <ul className="mb-6 flex flex-col gap-3.5">
            <li>
  <NavLink
    to="/Dashboard"
    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium cursor-pointer ${
      isActive ? 'text-meta-3' : 'text-gray-2 hover:text-meta-3'
    }`}
    onClick={handleClick}
  >
    <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" className=''>
<g id="vuesax/linear/element-4">
<g id="element-4">
<path id="Vector" d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="#787878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#787878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22H4.23C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1Z" stroke="#787878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z" stroke="#787878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>

    Dashboard
  </NavLink>
</li>

         
<li>
  <NavLink
    to="/Users"
    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:text-meta-3  ${
      pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
    }`}
  >
    <svg
   
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={pathname.includes('/Users') ? '#1D9E6F' : '#787878'} // Set fill color based on active state
      className={pathname.includes('/Users') ? 'hover:fill-meta-3' : ''} // Apply hover effect when active
    >
      <path
        d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
        fill=""
      />
      <path
        d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
        fill=""
      />
    </svg>
    <span className={pathname.includes('/Users') ? 'text-meta-3' : 'text-gray-2'}>
      Users
    </span>
  </NavLink>
</li>


         
           
<li>
  <NavLink
    to="/Categories"
    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:text-meta-3  ${
      pathname.includes('tables') && 'bg-graydark dark:bg-meta-4'
    }`}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={pathname.includes('/Categories') ? '#1D9E6F' : '#787878'} // Set fill color based on active state
      className={pathname.includes('/Categories') ? 'hover:fill-meta-3' : ''} // Apply hover effect when active
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke="#787878"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill=""
      />
      <path
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="#787878"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill=""
      />
      <path
        d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996"
        stroke="#787878"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill=""
      />
      <path
        d="M17.6799 10.82V6.73999"
        stroke="#ff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill=""
      />
      <path
        d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z"
        stroke="#787878"
        stroke-width="1.5"
        fill=""
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.34998 15.45L6.31998 17.7499L10.27 15.46"
        stroke="#7878782"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill=""
      />
      <path
        d="M6.31995 21.82V17.74"
        stroke="#787878"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill=""
      />
      <path
        d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z"
        stroke="#787878"
        stroke-width="1.5"
        stroke-linecap="round"
        fill=""
        stroke-linejoin="round"
      />
    </svg>
    <span className={pathname.includes('/Categories') ? 'text-meta-3' : 'text-gray-2'}>
      Categories
    </span>
  </NavLink>
</li>

              
            
<li>
  <NavLink
    to="/Products"
    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-2 duration-300 ease-in-out hover:text-meta-3  ${
      pathname.includes('settings') && 'bg-graydark dark:bg-meta-4'
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={pathname.includes('/Products') ? '#1D9E6F' : '#787878'} // Set stroke color based on active state
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pathname.includes('/Products') ? 'hover:stroke-meta-3' : ''} // Apply hover effect when active
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
    <span className={pathname.includes('/Products') ? 'text-meta-3' : 'text-gray-2'}>
      Products
    </span>
  </NavLink>
</li>

<li>
  <NavLink
    to="/Orders"
    className="icon group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-2 duration-300 ease-in-out hover:text-meta-3 dark:hover:bg-meta-4"
  >
    <span className="icon group relative flex items-center gap-2.5 text-gray-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={pathname.includes('/Orders') ? '#1D9E6F' : '#787878'} // Set stroke color based on active state
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`orders hover:stroke-meta-3 text-gray-2 ${pathname.includes('/Orders') ? 'text-meta-3' : ''}`} // Apply hover effect and text color when active
      >
        <path opacity="0.4" d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M10.4395 15L11.0895 15.65C11.2795 15.84 11.5895 15.85 11.7795 15.66L13.5595 14.02" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <span className={pathname.includes('/Orders') ? 'text-meta-3' : 'text-gray-2'}>
      Orders
    </span>
  </NavLink>
</li>

<li>
  <NavLink
    to="/Chats"
    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-2 duration-300 ease-in-out hover:text-meta-3  ${
      pathname.includes('/Chats') && 'text-meta-3' // Set text color based on active state
    } ${pathname.includes('tables') && 'bg-graydark dark:bg-meta-4'}`}
  >
    <span className="group relative flex items-center gap-2.5">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke={pathname.includes('/Chats') ? '#1D9E6F' : '#787878'} // Set stroke color based on active state
        className={`orders hover:stroke-meta-3 text-gray-2 ${
          pathname.includes('/Chats') ? 'text-meta-3' : '' // Apply hover effect and text color when active
        }`}
      >
        <path
          d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.9965 11H16.0054"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.9955 11H12.0045"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.99451 11H8.00349"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Chats
    </span>
  </NavLink>
</li>

<li>
  <NavLink
    to="/Reports"
    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out ${
      pathname.includes('/Reports') ? 'text-meta-3 hover:text-meta-3' : 'text-gray-2 hover:text-meta-3'
    } ${pathname.includes('tables') && 'bg-graydark dark:bg-meta-4'}`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path
        d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"
        fill={pathname.includes('/Reports') ? '#47B881' : '#787878'}
      />
    </svg>
    Reports
  </NavLink>
</li>




<li>
  <NavLink
    to="/Transaction"
    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out ${
      pathname.includes('/Transaction') ? 'text-meta-3 hover:text-meta-3' : 'text-gray-2 hover:text-meta-3'
    } ${pathname.includes('tables') && 'bg-graydark dark:bg-meta-4'}`}
  >
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.73706 19.7C7.55706 18.82 8.80707 18.89 9.52707 19.85L10.5371 21.2C11.3471 22.27 12.6571 22.27 13.4671 21.2L14.4771 19.85C15.1971 18.89 16.4471 18.82 17.2671 19.7C19.0471 21.6 20.4971 20.97 20.4971 18.31V7.04C20.4971 3.01 19.5571 2 15.7771 2H8.21707C4.43707 2 3.49707 3.01 3.49707 7.04V18.3C3.50707 20.97 4.96706 21.59 6.73706 19.7Z" stroke="#787878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25879 10H14.7588" stroke="#787878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    Transaction
  </NavLink>
</li>


         
      <li>
        <SidebarLinkGroup
          activeCondition={pathname === '/' || pathname.includes('dashboard')}
        >
          {(handleClick, open) => (
            <React.Fragment>
              <NavLink
                to="#"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-2  hover:text-meta-3 ${
                  (pathname === '/' || pathname.includes('dashboard')) &&
                  'bg-graydark dark:bg-meta-4'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#787878"
                  className="orders hover:stroke-meta-3 text-gray-2"
                >
                  {/* SVG Path */}
                  <g clipPath="url(#clip0_130_9763)">
                      <path
                        d="M17.0721 7.30835C16.7909 6.99897 16.3971 6.83022 15.9752 6.83022H15.8909C15.7502 6.83022 15.6377 6.74585 15.6096 6.63335C15.5815 6.52085 15.5252 6.43647 15.4971 6.32397C15.4409 6.21147 15.4971 6.09897 15.5815 6.0146L15.6377 5.95835C15.9471 5.6771 16.1159 5.28335 16.1159 4.86147C16.1159 4.4396 15.9752 4.04585 15.6659 3.73647L14.569 2.61147C13.9784 1.99272 12.9659 1.9646 12.3471 2.58335L12.2627 2.6396C12.1784 2.72397 12.0377 2.7521 11.8971 2.69585C11.7846 2.6396 11.6721 2.58335 11.5315 2.55522C11.3909 2.49897 11.3065 2.38647 11.3065 2.27397V2.13335C11.3065 1.26147 10.6034 0.55835 9.73148 0.55835H8.15648C7.7346 0.55835 7.34085 0.7271 7.0596 1.00835C6.75023 1.31772 6.6096 1.71147 6.6096 2.10522V2.21772C6.6096 2.33022 6.52523 2.44272 6.41273 2.49897C6.35648 2.5271 6.32835 2.5271 6.2721 2.55522C6.1596 2.61147 6.01898 2.58335 5.9346 2.49897L5.87835 2.4146C5.5971 2.10522 5.20335 1.93647 4.78148 1.93647C4.3596 1.93647 3.96585 2.0771 3.65648 2.38647L2.53148 3.48335C1.91273 4.07397 1.8846 5.08647 2.50335 5.70522L2.5596 5.7896C2.64398 5.87397 2.6721 6.0146 2.61585 6.09897C2.5596 6.21147 2.53148 6.29585 2.47523 6.40835C2.41898 6.52085 2.3346 6.5771 2.19398 6.5771H2.1096C1.68773 6.5771 1.29398 6.71772 0.984604 7.0271C0.675229 7.30835 0.506479 7.7021 0.506479 8.12397L0.478354 9.69897C0.450229 10.5708 1.15335 11.274 2.02523 11.3021H2.1096C2.25023 11.3021 2.36273 11.3865 2.39085 11.499C2.4471 11.5833 2.50335 11.6677 2.53148 11.7802C2.5596 11.8927 2.53148 12.0052 2.4471 12.0896L2.39085 12.1458C2.08148 12.4271 1.91273 12.8208 1.91273 13.2427C1.91273 13.6646 2.05335 14.0583 2.36273 14.3677L3.4596 15.4927C4.05023 16.1115 5.06273 16.1396 5.68148 15.5208L5.76585 15.4646C5.85023 15.3802 5.99085 15.3521 6.13148 15.4083C6.24398 15.4646 6.35648 15.5208 6.4971 15.549C6.63773 15.6052 6.7221 15.7177 6.7221 15.8302V15.9427C6.7221 16.8146 7.42523 17.5177 8.2971 17.5177H9.8721C10.744 17.5177 11.4471 16.8146 11.4471 15.9427V15.8302C11.4471 15.7177 11.5315 15.6052 11.644 15.549C11.7002 15.5208 11.7284 15.5208 11.7846 15.4927C11.9252 15.4365 12.0377 15.4646 12.1221 15.549L12.1784 15.6333C12.4596 15.9427 12.8534 16.1115 13.2752 16.1115C13.6971 16.1115 14.0909 15.9708 14.4002 15.6615L15.5252 14.5646C16.144 13.974 16.1721 12.9615 15.5534 12.3427L15.4971 12.2583C15.4127 12.174 15.3846 12.0333 15.4409 11.949C15.4971 11.8365 15.5252 11.7521 15.5815 11.6396C15.6377 11.5271 15.7502 11.4708 15.8627 11.4708H15.9471H15.9752C16.819 11.4708 17.5221 10.7958 17.5502 9.92397L17.5784 8.34897C17.5221 8.01147 17.3534 7.5896 17.0721 7.30835ZM16.2284 9.9521C16.2284 10.1208 16.0877 10.2615 15.919 10.2615H15.8346H15.8065C15.1596 10.2615 14.569 10.6552 14.344 11.2177C14.3159 11.3021 14.2596 11.3865 14.2315 11.4708C13.9784 12.0333 14.0909 12.7365 14.5409 13.1865L14.5971 13.2708C14.7096 13.3833 14.7096 13.5802 14.5971 13.6927L13.4721 14.7896C13.3877 14.874 13.3034 14.874 13.2471 14.874C13.1909 14.874 13.1065 14.874 13.0221 14.7896L12.9659 14.7052C12.5159 14.2271 11.8409 14.0865 11.2221 14.3677L11.1096 14.424C10.4909 14.6771 10.0971 15.2396 10.0971 15.8865V15.999C10.0971 16.1677 9.95648 16.3083 9.78773 16.3083H8.21273C8.04398 16.3083 7.90335 16.1677 7.90335 15.999V15.8865C7.90335 15.2396 7.5096 14.649 6.89085 14.424C6.80648 14.3958 6.69398 14.3396 6.6096 14.3115C6.3846 14.199 6.1596 14.1708 5.9346 14.1708C5.54085 14.1708 5.1471 14.3115 4.83773 14.6208L4.78148 14.649C4.66898 14.7615 4.4721 14.7615 4.3596 14.649L3.26273 13.524C3.17835 13.4396 3.17835 13.3552 3.17835 13.299C3.17835 13.2427 3.17835 13.1583 3.26273 13.074L3.31898 13.0177C3.7971 12.5677 3.93773 11.8646 3.6846 11.3021C3.65648 11.2177 3.62835 11.1333 3.5721 11.049C3.3471 10.4583 2.7846 10.0365 2.13773 10.0365H2.05335C1.8846 10.0365 1.74398 9.89585 1.74398 9.7271L1.7721 8.1521C1.7721 8.0396 1.82835 7.98335 1.85648 7.9271C1.8846 7.89897 1.96898 7.84272 2.08148 7.84272H2.16585C2.81273 7.87085 3.40335 7.4771 3.65648 6.88647C3.6846 6.8021 3.74085 6.71772 3.76898 6.63335C4.0221 6.07085 3.9096 5.36772 3.4596 4.91772L3.40335 4.83335C3.29085 4.72085 3.29085 4.52397 3.40335 4.41147L4.52835 3.3146C4.61273 3.23022 4.6971 3.23022 4.75335 3.23022C4.8096 3.23022 4.89398 3.23022 4.97835 3.3146L5.0346 3.39897C5.4846 3.8771 6.1596 4.01772 6.77835 3.7646L6.89085 3.70835C7.5096 3.45522 7.90335 2.89272 7.90335 2.24585V2.13335C7.90335 2.02085 7.9596 1.9646 7.98773 1.90835C8.01585 1.8521 8.10023 1.82397 8.21273 1.82397H9.78773C9.95648 1.82397 10.0971 1.9646 10.0971 2.13335V2.24585C10.0971 2.89272 10.4909 3.48335 11.1096 3.70835C11.194 3.73647 11.3065 3.79272 11.3909 3.82085C11.9815 4.1021 12.6846 3.9896 13.1627 3.5396L13.2471 3.48335C13.3596 3.37085 13.5565 3.37085 13.669 3.48335L14.7659 4.60835C14.8502 4.69272 14.8502 4.7771 14.8502 4.83335C14.8502 4.8896 14.8221 4.97397 14.7659 5.05835L14.7096 5.1146C14.2034 5.53647 14.0627 6.2396 14.2877 6.8021C14.3159 6.88647 14.344 6.97085 14.4002 7.05522C14.6252 7.64585 15.1877 8.06772 15.8346 8.06772H15.919C16.0315 8.06772 16.0877 8.12397 16.144 8.1521C16.2002 8.18022 16.2284 8.2646 16.2284 8.3771V9.9521Z"
                        fill=""
                      />
                      <path
                        d="M9.00029 5.22705C6.89092 5.22705 5.17529 6.94268 5.17529 9.05205C5.17529 11.1614 6.89092 12.8771 9.00029 12.8771C11.1097 12.8771 12.8253 11.1614 12.8253 9.05205C12.8253 6.94268 11.1097 5.22705 9.00029 5.22705ZM9.00029 11.6114C7.59404 11.6114 6.44092 10.4583 6.44092 9.05205C6.44092 7.6458 7.59404 6.49268 9.00029 6.49268C10.4065 6.49268 11.5597 7.6458 11.5597 9.05205C11.5597 10.4583 10.4065 11.6114 9.00029 11.6114Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9763">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                Setting
                <svg
                  className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                    open && 'rotate-180'
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  strokeWidth="0.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                   <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                </svg>
              </NavLink>

              {/* Dropdown Menu Start */}
              <div
                className={`translate transform overflow-hidden ${
                  !open && 'hidden'
                }`}
              >
                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                  <li>
                    <NavLink
                      to="/Faq"
                      className={({ isActive }) =>
                        'group relative flex items-center gap-2 text-base rounded-md px-4 font-medium text-gray-2 ' +
                        (isActive && '!text-meta-3')
                      }
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Terms"
                      className={({ isActive }) =>
                        'group relative flex items-center gap-2 text-base rounded-md px-4 font-medium text-gray-2 ' +
                        (isActive && '!text-meta-3')
                      }
                    >
                      Terms & Conditions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Privacy"
                      className={({ isActive }) =>
                        'group relative flex items-center gap-2 text-base rounded-md px-4 font-medium text-gray-2 ' +
                        (isActive && '!text-meta-3')
                      }
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Dropdown Menu End */}
            </React.Fragment>
          )}
        </SidebarLinkGroup>
      </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
      
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
