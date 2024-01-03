import { useState, useEffect, ChangeEvent } from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import MyImage from '../assets/ps51_800KB.jpg';
import MyImage1 from '../assets/ps52.png';
import MyImage2 from '../assets/ps53.png';
import MyImage3 from '../assets/ps54.png';
import MyImage4 from '../assets/ps55.png';
import Image from '../assets/Mask group.png';
import { Link } from 'react-router-dom';
import { OrderModel } from '../components/OrderModel';
import { Block } from '../components/BlockProducts';
import Delete from '../components/Delete';
import { EditOffers } from '../components/EditOffers';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { addProduct } from '../redux/Product/productAction';
import { showCategories } from '../redux/Category/categoryAction';
import EditProduct from "../components/EditProduct"


const AddProduct = () => {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.category.categories);
  console.log(categories, 'categories')
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [totalQuantity, setTotalQuantity] = useState('');
  const [tagLine, setTagLine] = useState('')
  const [collectionFee, setCollectionFee] = useState('')
  const [refundDeposit, setRefundDeposit] = useState('')
  const [description, setdescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [file, setFile] = useState<any | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderModel, setShowOrderModel] = useState(false);

  useEffect(() => {
    document.title = 'Ez-Rent-Admin | AddProduct'; 
    dispatch(showCategories())
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenDropdown1, setIsOpenDropdown1] = useState(false);
  const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpenDropdown1(!isOpenDropdown1);
    // Close the other dropdown
    setIsOpenDropdown2(false);
  };

  const openOrderModel = () => {
    setShowOrderModel(true);
  };

  const closeOrderModel = () => {
    setShowOrderModel(false);
  };
  const [showBlock, setShowBlock] = useState(false);
  const openBlock = () => {
    setShowBlock(true);
  };

  const closeBlock = () => {
    console.log("Closing sign-in form");
    setShowBlock(false);
  };

  const [showDelete, setShowDelete] = useState(false);

  const closeDelete = () => {
    setShowDelete(false);
  };

  const openDelete = () => {
    setShowDelete(true);
  };
  const [showEditOffers, setShowEditOffers] = useState(false);

  const closeEditOffers = () => {
    setShowEditOffers(false);
  };

  const openEditOffers = () => {
    setShowEditOffers(true);
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile);

    if (selectedFile) {
      setFile(selectedFile);
      const filePreviewUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(filePreviewUrl);
    } else {
      setFile(null);
      setPreviewUrl(null);
    }
  };
  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('totalQuantity', totalQuantity);
    formData.append('tagLine', tagLine);
    formData.append('collection_fee', collectionFee);
    formData.append('refundable_deposit', refundDeposit);
    formData.append('description', description);
    formData.append('image', file);

    dispatch(addProduct(formData));

  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=''>

      <div className="flex flex-col md:flex-row bg-gray transition-all ">
        {/* Sidebar and Navbar components */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <EditProduct />
        </div>

      </div>
      <div>

      </div>
      {showOrderModel && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50  bg-gray-2 z-50">
          <div className="relative  max-w-lg">
            <div className="relative    rounded-lg  ">

              <div className="">
                <button onClick={closeOrderModel} className="absolute top-3  right-2 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <OrderModel />
              </div>
            </div>
          </div>
        </div>
      )}
      {showBlock && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80  bg-gray-2 z-50">
          <div className="relative w-full max-w-lg bg-white">
            <div className="relative rounded-lg shadow-lg bg-white">
              <button onClick={closeBlock} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="pl-7">
                <Block />
              </div>
            </div>
          </div>
        </div>
      )}
      {showDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80  bg-gray-100  bg-gray-2 z-50">
          <div className="relative w-100 max-w-lg ">
            <div className="relative rounded-3xl shadow-lg bg-white">
              <button onClick={closeDelete} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="p-6">
                <Delete />
              </div>
            </div>
          </div>
        </div>
      )}
      {showEditOffers && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 bg-gray-100  bg-gray-2  z-50 ">
          <div className="relative  max-w-lg ">
            <div className="relative rounded-3xl shadow-lg ">
              <button onClick={closeEditOffers} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="">
                <EditOffers />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default AddProduct;
function setShowDelete(arg0: boolean) {
  throw new Error('Function not implemented.');
}

