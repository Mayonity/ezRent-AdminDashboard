import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  
}) => {
  const navigate = useNavigate();
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'white',
  };

  const rightContentStyle = {
    marginLeft: 'auto', // Pushes the content to the right
  };

  const navigateToPage = () => {
    navigate('/');
  };


  return (
    <header className=" top-0 z-999 flex" style={headerStyle}>
      {/* Hamburger Menu Icon (only when sidebar is closed) */}
      {!props.sidebarOpen ? (
        <div>
          <FaBars
            className="text-2xl cursor-pointer md:hidden "
            onClick={() => {
              props.setSidebarOpen(true);
              console.log("Sidebar Opened");
            }}
          />
        </div>
      ) : null}

      <div style={rightContentStyle} className="flex space-x-10 ">
        <h1 className="text-[#313131] text-2xl not-italic font-bold leading-[normal] opacity-30 mt-2 heading">Hi John</h1>
   
        <button onClick={navigateToPage} className="bg-meta-3 hover:bg-blue-700 text-white but font-bold flex items-center justify-center w-52 h-[59px] shrink-0 rounded-[7px] rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.0001 12H3.62012" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span className="ml-2">Logout</span>
    </button>
      </div>
    </header>
  );
};

export default Header;
