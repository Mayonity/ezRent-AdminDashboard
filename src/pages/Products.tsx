import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import Sidebar from '../components/Sidebar/Sidebars';
import Navbar from '../components/Sidebar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { RiArrowDropDownLine } from "react-icons/ri"
import { searchProducts, showProducts, updateProduct } from '../redux/Product/productAction';
import moment from 'moment';
import Toggle from "../components/Toggle"
const Products = () => {
  const products = useSelector((state: RootState) => state.product.products);
  console.log(products, 'products')
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(showProducts())
    document.title = 'Ez-Rent-Admin | Products'; // Set your dynamic title here
  }, []);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate('/AddProduct');
  };
  const navigateToPage2 = (pageId:any) => {
    navigate('/ViewProduct/' + pageId);
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
  const handleBlock = (id:any, status:any, comment:any) => {
    const data = {
      id : id,
      status : status,
      comment : comment
    }
    dispatch(updateProduct(data));
  }
  const [search, setSearch] = useState('');
  const [type, setType] = useState('name');

  const handleSearch = () => {
    const data = {
      search : search,
      type: type
    }
    dispatch(searchProducts(data));
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row h-full bg-gray transition-all">
      {/* Sidebar and Navbar components */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1 className="text-bold text-3xl m-5 md:m-10 boldish">
          Products <span className="text-meta-3 boldish">{`(${products.length})`}</span>
        </h1>
        <div className="flex flex-col md:flex-row m-5 md:m-10 gap-4 p-5 rounded-lg bg-white border border-box">
          <div className="w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search products by"
              className="w-full p-4 bg-white border border-box rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className='relative text-center   text-xs space-y-5  border-box border-1 rounded-lg bg-whiter text-gray-2 md:w-full lg:w-1/5  md:mt-0 border '>
            <select
              id="default"
              value={type}
              onChange={(e) => 
                setType(e.target.value)}
              className="text-center text-xs space-y-5  border-box border-1 rounded-lg bg-whiter text-gray-2 w-full h-15  custom-select md:mt-0 border  "
            >
              <option value="name" selected>Lessor Name</option>
              <option value="category">Category</option>
            </select>
            <div className="absolute top-0  right-0 h-full pr-1 pointer-events-none">
              <RiArrowDropDownLine className="text-2xl" />
            </div>
          </div>
          <div className="md:w-1/4 mt-4 md:mt-0 flex relative">
            <button
            onClick={handleSearch}
              className="flex-grow bg-meta-3 h-15 text-white rounded-md text-center flex justify-center align-center items-center"

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
              </svg>     Search
            </button>
          </div>
          <div className="md:w-1/4 mt-4 md:mt-0 flex relative">
            <button onClick={navigateToPage}
              className="flex-grow bg-meta-3 h-15 text-white rounded-md text-center flex justify-center align-center items-center"

            >
              +   Add product
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-box m-10 bg-white px-5  shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead className='2xl:text-xl  text-xs '>
                <tr className="bg text-center dark:bg-meta-4 border-b border-box py-5   dark:border-strokedark  ">
                  <th scope="col" className=" py-3 text-gray-2">
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                      ID
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className=" py-3  pl-12   text-gray-2">
                    <div style={{ display: 'flex', justifyContent: '', alignItems: "center", whiteSpace: 'nowrap' }}>
                      PRODUCT NAME
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="py-3 pl-4 text-gray-2">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: '', whiteSpace: 'nowrap' }}>
                      CATEGORY
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="pl-4 py-3  text-gray-2">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: '', whiteSpace: 'nowrap' }}>
                      PRICE/D
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="pl-4   py-3 text-gray-2">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: '', whiteSpace: 'nowrap' }}>
                      LESSOR NAME
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className=" py-3 text-gray-2">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: '', whiteSpace: 'nowrap' }}>
                      STATUS
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="pl-3  py-3 text-gray-2">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: '', whiteSpace: 'nowrap' }}>
                      ADDED ON
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="  py-3 text-gray-2">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}>
                   
                    </div>
                  </th>

                </tr>
              </thead>
              <tbody className='2xl:text-xl text-xs'>
                {products.length > 0 ? ( products.map((product, index) => (
                  <tr key={index}>
                    <td className="border-b border-box py-5   dark:border-strokedark ">
                      <h5 className="font-medium dark:text-white text-left">
                        {product.id}
                      </h5>

                    </td>

                    <td className="border-b border-box py-5  dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {product.title}
                      </h5>

                    </td>
                    <td className="border-b border-box py-5  dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {product?.category?.name}
                      </h5>

                    </td>
                    <td className="border-b border-box py-5   dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {product.price}
                      </h5>

                    </td>
                    <td className="border-b border-box py-5   dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {product?.user?.name}
                      </h5>

                    </td>
                    <td className="border-b border-box py-5  dark:border-strokedark">
                      <Toggle onClick={handleBlock} isToggle={product.status} id={product.id} comment={product.comment}/>
                    </td>
                    <td className="border-b border-box py-5   dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {moment(product.created_at).format('YYYY-MM-DD')}
                      </h5>

                    </td>
                    <td className="border-b border-box py-5  dark-border-box text-primary">
                      <button onClick={() => navigateToPage2(product.id)} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
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

      </div>
      {showSignInForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-80 z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative bg-white rounded-lg shadow-2xl">
              <button onClick={closeSignInForm} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="p-8">
                <SignInForm />
              </div>
            </div>
          </div>
        </div>
      )}
      {showBlock && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 bg-gray-2  z-50">
          <div className="relative w-full max-w-lg bg-white">
            <div className="relative rounded-2xl shadow-2xl bg-white">
              <button onClick={closeBlock} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="pl-7">
                <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className=" text-center ml-10 text-3xl font-bold leading-9 tracking-tight text-[#C70813] ">
                      Block this Products
                    </h2>
                    <br />
                  </div>
                  <div>
                    <textarea name="" id="" placeholder=' User Block' className='bg-white text-gray-2 border-2 border-box w-100 h-40 rounded-lg p-5' />
                    <br />
                    <div className='text-center mt-5'>
                      <button className='text-white bg-[#C70813] p-4 w-50 ml-10 text-center rounded-lg'>Block</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
