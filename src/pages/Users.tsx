import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import Sidebar from '../components/Sidebar/Sidebars';
import Navbar from '../components/Sidebar/Navbar';
import { Block } from '../components/Block';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { searchUsers, showUsers, updateUser } from '../redux/User/userAction';
import {RiArrowDropDownLine} from "react-icons/ri"
import Toggle from "../components/Toggle"

import moment from 'moment';

const Users = () => {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch: AppDispatch = useDispatch();

  const [showSignInForm, setShowSignInForm] = useState(false);
  
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate('/UserInfo');
  };

  const openSignInForm = () => {
    setShowSignInForm(true);
  };

  const closeSignInForm = () => {
    console.log("Closing sign-in form");
    setShowSignInForm(false);
  };
  const [showBlock, setShowBlock] = useState(false);
 
  const closeBlock = () => {
    console.log("Closing sign-in form");
    setShowBlock(false);
  };
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Users'; // Set your dynamic title here
    dispatch(showUsers())
  }, []);
  const handleBlock = (id:any, status:any, comment:any) => {
    const data = {
      id : id,
      status : status,
      comment : comment
    }
    dispatch(updateUser(data));
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('name');

  const handleSearch = () => {
    const data = {
      search : search,
      type: type
    }
    dispatch(searchUsers(data));
  };

  return (
    <div className="flex flex-col md:flex-row h-full  transition-all">
      {/* Sidebar and Navbar components */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`flex-1 ${sidebarOpen ? '' : ''}bg-gray h-screen`}>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1 className="text-bold text-2xl md:text-3xl boldish lg:text-4xl m-5 md:m-10">
          Users <span className="text-meta-3 boldish">({users.length})</span>
        </h1>
        <div className="flex flex-col md:flex-row m-5 md:m-10 gap-4 p-5 rounded-lg bg-white border border-box">
          <div className="w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search by"
              className="w-full p-4 bg-white border border-box rounded-lg"
              value={search}
          onChange={(e) => {setSearch(e.target.value)}}
            />
          </div>
          
          <div className='relative text-center  border-box border-1 rounded-lg bg-whiter text-gray-2 md:w-full lg:w-1/5 mt-4 md:mt-0 border '>
            <select
              id="default"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              className="text-center  border-box border-1 rounded-lg bg-whiter text-gray-2 w-full h-15 custom-select mt-4 md:mt-0 border "
            >
              <option value="name" selected>Name</option>
              <option value="email">Email</option>
              <option  value="phone">Phone</option>
              
            </select>
            <div className="absolute top-0  right-0 h-full flex items-center pr-7 pointer-events-none">
              <RiArrowDropDownLine className="text-2xl" />
            </div>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0 flex">
          <button
            className="flex-grow bg-meta-3 h-15 text-white rounded-md text-center flex justify-center align-center items-center"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#1D9E6F"
              stroke="currentColor"
              width={20}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>  Search
          </button>
        </div>  
          <div className="md:w-[20%] mt-4 md:mt-0 flex relative">
            <button
              className="w-full text-sm bg-meta-3 h-15 text-white rounded-md"
              onClick={openSignInForm}
            >
              + Add New User
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto m-5 md:m-10 border-box rounded-2xl border">
          <table className="w-full 2xl:text-base text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg border-box">
          <thead className=" text-gray-2 uppercase border-box border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className=" px-5 py-3 border-b border-box text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ID
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 border-b border-box text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    NAME
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="hidden md:table-cell py-3 border-b border-box text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    MAIN PHONE NO
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="  py-3 border-b border-box text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    EMAIL
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="hidden md:table-cell py-3 border-b border-box text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    CREATED ON
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" px- py-4 border-b border-box text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    VERIFIED
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? ( users.map((user, index) => (

                <tr key={index} className="bg-white border-box border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-5 px-5">
                    {user?.id}
                  </td>
                  <td className="">
                    {user?.name}
                  </td>
                  <td className="hidden md:table-cell">
                    {user.phone ? `+65 ${user?.phone}` : 'N/A'}
                  </td>
                  <td className="hidden md:table-cell">
                    {user?.email}
                  </td>
                  <td className="hidden md:table-cell">
                    {moment(user.created_at).format('MMMM Do YYYY')}

                  </td>
                  <td className="">
                    Email
                  </td>
                  <td className="border-b border-box ">
                  <Toggle onClick={handleBlock} isToggle={user.status} id={user.id} comment={user.comment}/>
                  </td>
                  <td className="   ">
                    <button onClick={navigateToPage} className='w-[35px] h-[35px] shrink-0 rounded-[17.5px] bg-[#D5EDE5] flex items-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                  </td>
                </tr>
              ))
              ) : (
                <tr className="2xl:text-base text-xs border-b border-1 border-box">
                  <td className="px-6 py-4">No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>



      </div>
      {showSignInForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 bg-gray-2 z-50">
          <div className="relative w-full m-5 max-w-lg bg-white">
            <div className="relative rounded-2xl shadow-2xl bg-white">
              <button
                onClick={closeSignInForm}
                className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700 opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div className="p-4 md:p-8">
                <SignInForm setShowSignInForm={setShowSignInForm} />
              </div>
            </div>
          </div>
        </div>
      )}

      {showBlock && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 bg-gray-2 z-50">
          <div className="relative w-full max-w-lg bg-white">
            <div className="relative rounded-lg shadow-2xl bg-white">
              <button onClick={closeBlock} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="pl-7">
                <Block />
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Users;


