/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri"
import UploadImage from "../components/UploadImage"
import Image from '../assets/Mask group.png';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { showCategories } from '../redux/Category/categoryAction';
import { addProduct } from '../redux/Product/productAction';
import { showUsers } from '../redux/User/userAction';
import { toast } from 'react-toastify';

const EditProduct = () => {
    const dispatch: AppDispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [totalQuantity, setTotalQuantity] = useState('');
    const [tagLine, setTagline] = useState('')
    const [collectionFee, setCollectionFee] = useState('')
    const [refundDeposit, setRefundDeposit] = useState('')
    const [description, setDescription] = useState('')
    const [featureImage, setFeatureImage] = useState<File | null>(null)
    const [filesArray, setFilesArray] = useState<File[]>([]);
    const [oldProductImages, setOldProductImages] = useState<File[]>([]);
    const [isOpenDropdown1, setIsOpenDropdown1] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState();
    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const [faqSections, setFaqSections] = useState([]);
    const toggleDropdown1 = () => {
        setIsOpenDropdown1(!isOpenDropdown1);
    }
    const handleSubmit = async () => {
        if(!selectedCategoryId){
            toast.error('Please select a category')
            return
        }
        if(!selectedUserId){
            toast.error('Please select a user')
            return
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('total_quantity', totalQuantity);
        formData.append('tagline', tagLine);
        formData.append('collection_fee', collectionFee);
        formData.append('refundable_deposit', refundDeposit);
        formData.append('description', description);
        formData.append('category_id', selectedCategoryId);
        formData.append('user_id', selectedUserId);
        formData.append('status', 1);
        formData.append('faqs', JSON.stringify(faqSections));
        if (featureImage) {
            formData.append('image', featureImage);
        }
        // Append multiple files
        filesArray.forEach((file, _index) => {
            formData.append(`images`, file);
        });
        dispatch(addProduct(formData));

    };
    const getUsers = useSelector((state: RootState) => state.user.users);
    const users = getUsers.filter(user => user.status === true);
    const getCategories = useSelector((state: RootState) => state.category.categories);
    const categories = getCategories.filter(category => category.status === true);
    useEffect(() => {
        dispatch(showCategories())
        dispatch(showUsers())
    }, [])
    const handleUserSelection = (event) => {
        const userId = event.target.value;
        setSelectedUserId(userId);
    };
    const handleCategorySelection = (event) => {
        const categoryId = event.target.value;
        console.log(categoryId, 'cat id')
        setSelectedCategoryId(categoryId);
    };
  
console.log(categories, 'categories')
    const addFaqSection = () => {
        setFaqSections([...faqSections, { question: '', answer: '' }]);
    };
    const handleInputChange = (index, field, value) => {
        const updatedFaqSections = [...faqSections];
        updatedFaqSections[index][field] = value;
        setFaqSections(updatedFaqSections);
    };
    return (
        <div>

            <div className='xl:w-[1100px]  2xl:w-full  mt-10 w-full  m-5  '>
                <h1 className="text-gray-2 relative">
                    <div className="">
                        <button
                            onClick={toggleDropdown1}
                            type="button"
                            className="inline-flex  gap-x-1.5 text-left text-sm font-semibold text-gray-900 hover:bg-gray-50"
                        >
                            <h1 className={`text-black text-xl ${isOpenDropdown1}`}>By: <span className='text-gray-2'>Select Lessor</span></h1>

                        </button>
                        {isOpenDropdown1 && (
                            <div
                                className="absolute left-0  z-10 mt-2 w-80 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex={-1}
                            >
                                <div className="py-1m p-5" role="none">
                                    {/* <input type="text"
                                        id="first_name"
                                        className="bg-gray text-gray-900 text-sm  outline:none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="🔍    Search User"
                                        required />
                                    <br /> */}
                                    <select
                                        id="default"
                                        onChange={handleUserSelection}
                                        value={selectedUserId}
                                        className="2xl:w-[220px] text-sm text-center xl:w-[150px] w-[130px] border-[#DEDEDE] mt-2 flex items-center justify-end border-2 2xl:h-[91px] h-[80px] rounded-[7px] custom-select"
                                    >
                                        <option value="" disabled selected>Select User</option>
                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* <span className="font-black text-black">Address:</span> 22-04-2022 */}
                </h1>                <hr className='2xl:my-7 my-5 md:block hidden' />
                <div className='lg:flex gap-0'>
                    <div className=' lg:w-[300px] md:w-full '>
                        <UploadImage onFileChange={setFeatureImage} onFilesArrayChange={setFilesArray} oldProductImages={setOldProductImages} />
                    </div>
                    <div className='border bg-gray-300 ml-5 lg:block hidden w-[1px] mt-16  h-[700px]'>

                    </div>
                    <hr className='border lg:hidden block my-5 ' />
                    <div className='mx-5 '>
                        <h1 className='text-[#111827] 2xl:text-xl text-lg md:text-start text-center font-bold'>Product information</h1>
                        <div className='xl:flex xl:gap-5 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Product Name*</label>
                                <div className=' w-full  mt-2  rounded-[15px]'>
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='text-sm cursor-pointer 2xl:w-[520px] px-3 xl:w-[370px] md:w-[330px] w-[95%] mx-auto  outline-none focus:border-[#0E9F6E]  border-[#DEDEDE] border-2 rounded-[7px] 2xl:py-3 py-2' />
                                </div>
                            </div>
                            <div className='flex xl:gap-5 gap-6 md:mt-0 mt-5 '>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Price (per day)*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='text-sm cursor-pointer 2xl:w-[220px] px-3 xl:w-[150px] w-[130px] outline-none focus:border-[#0E9F6E] border-[#DEDEDE] border-2 rounded-[7px] 2xl:py-3 py-2' />
                                    </div>
                                </div>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Quantity*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <input type="text" value={totalQuantity} onChange={(e) => setTotalQuantity(e.target.value)} className='text-sm cursor-pointer 2xl:w-[220px]  px-3 xl:w-[150px] w-[130px] outline-none focus:border-[#0E9F6E]  border-[#DEDEDE] border-2  rounded-[7px] 2xl:py-3 py-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:flex xl:gap-5 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Tagline*</label>
                                <div className=' w-full mt-2   rounded-[15px]'>
                                    <input type="text" value={tagLine} onChange={(e) => setTagline(e.target.value)} className='text-sm cursor-pointer 2xl:w-[520px] px-3 xl:w-[370px] md:w-[350px] w-[95%] outline-none focus:border-[#0E9F6E] border-[#DEDEDE] border-2   rounded-[7px] 2xl:py-3 py-2' />
                                </div>
                            </div>
                            <div className='flex xl:gap-5 gap-6 md:mt-0 mt-5'>
                                <div>
                                    <label className='2xl:text-lg  text-[10px]'>Delivery/ collection fee*</label>
                                    <div className='mt-2  rounded-[15px]'>
                                        <input type="text" value={collectionFee} onChange={(e) => setCollectionFee(e.target.value)} className='text-sm cursor-pointer 2xl:w-[220px] px-3 xl:w-[150px] w-[130px] outline-none focus:border-[#0E9F6E] border-[#DEDEDE] border-2 rounded-[7px] 2xl:py-3 py-2' />
                                    </div>
                                </div>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Refundable deposit*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <input type="text" value={refundDeposit} onChange={(e) => setRefundDeposit(e.target.value)} className='text-sm cursor-pointer 2xl:w-[220px] px-3 xl:w-[150px] w-[130px]  outline-none focus:border-[#0E9F6E] border-[#DEDEDE] border-2 rounded-[7px] 2xl:py-3 py-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:flex xl:gap-5 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Description*</label>
                                <div>
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                                        className=' text-sm  cursor-pointer  border-2 p-2 mt-2 rounded-[7px] px-3 2xl:h-[91px] 2xl:w-[760px] xl:w-[540px] border-[#DEDEDE] md:w-[350px] outline-none focus:border-[#0E9F6E] w-full h-[80px]' />
                                </div>
                            </div>
                            <div className='flex flex-col mt-2'>
                                <label htmlFor="small" className="block text-[10px] font-medium text-gray-900">Category*</label>
                                <div className="relative">

                                    <select
                                        id="default"
                                        onChange={(e) => {
                                            console.log('Select changed');
                                            handleCategorySelection(e);
                                        }}
                                        className="2xl:w-[220px] text-sm text-center xl:w-[150px] w-[130px] border-[#DEDEDE] mt-2 flex items-center justify-end border-2 2xl:h-[91px] h-[80px] rounded-[7px] custom-select"
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute top-1  right-0 h-full flex items-center pr-3 pointer-events-none">
                                        <RiArrowDropDownLine className="text-2xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' gap-10 mt-7'>
                            {faqSections.map((faq, index) => (
                                <div key={index} className='gap-10 mt-7'>
                                    <div>
                                        <label className='2xl:text-xl text-xs'>FAQ</label>
                                        <div className='w-full mt-2 rounded-[7px]'>
                                            <input
                                                type="text"
                                                value={faq.question}
                                                onChange={(e) => handleInputChange(index, 'question', e.target.value)}
                                                className='text-sm cursor-pointer w-[100%] border-[#DEDEDE] px-5 outline-none focus:border-[#0E9F6E] border-2 rounded-[7px] 2xl:py-3 py-2'
                                                placeholder="Question"
                                            />
                                        </div>
                                        <div className='mt-5 rounded-[7px]'>
                                            <input
                                                type="text"
                                                value={faq.answer}
                                                onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                                                className='text-sm cursor-pointer w-[100%] border-[#DEDEDE] px-5 outline-none focus:border-[#0E9F6E] border-2 rounded-[7px] 2xl:py-3 py-2'
                                                placeholder="Answer"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=' md:flex justify-between w-full md:mt-5 mt-5'>
                            <button onClick={addFaqSection} className='text-[#0E9F6E] bg-[#F1F5F9] 2xl:py-3 py-2 2xl:text-xl text-xs 2xl:h-14 h-12 rounded-lg w-32 2xl:w-28'>+ Add FAQ</button>
                        </div>
                        <div className='mb-4.5 float-right  mt-25'>

                            <button
                                onClick={handleSubmit}
                                className="inline-flex items-center md:ml-40 justify-center gap-5 md:w-1/4 w-44 rounded-md md:gap-2.5 bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            >

                                Save
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditProduct
