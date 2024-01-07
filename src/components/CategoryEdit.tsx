import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { addCategory,updateCategory } from '../redux/Category/categoryAction';
const Uploading: React.FC = (props:any) => {
  const {category,onClick} = props
  const dispatch: AppDispatch = useDispatch();
  const [categoryName, setCategoryName] = useState(category.name);
  const [previewUrl, setPreviewUrl] = useState<string | null>(category.image_path);
  const [file, setFile] = useState<any>(category.image_path);

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
    formData.append('id', category.id)
    formData.append('name', categoryName);
    formData.append('image', file);

    dispatch(updateCategory(formData));
    onClick(false)

  };
  const handleClose = () => {
    onClick(false)
  }

  return (
    <div className="col-span-5 xl:col-span-2 ">
      <div className="  bg-white   ">
        <br />

        <h1 className='2xl:text-4xl text-2xl text-center text-meta-3 text-bold'>Edit Category</h1>
        <p className='text-gray-2 text-xs mt-2 w-96 text-center mx-auto '>Edit your product category and necessary information from here</p>
        <div className="p-7">
        
            <div className=" flex items-center gap-3">
              <h1 className='2xl:text-xl text-md font-bold'>Category Icon</h1>

            </div>

            <div
              id="FileUpload"
              className="relative mb-5.5 mt-2  block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-box bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
              />
               {previewUrl ? (
              <div className="image-preview">
                <img src={previewUrl} alt="File preview" />
              </div>
            ) :
              <div className="flex flex-col items-center justify-center space-y-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 15C15.1569 15 16.5 13.6569 16.5 12C16.5 10.3431 15.1569 9 13.5 9C11.8431 9 10.5 10.3431 10.5 12C10.5 13.6569 11.8431 15 13.5 15Z" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33H22.5C30 33 33 30 33 22.5V15" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.625 7.5H31.875" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round" />
                    <path d="M27.75 11.625V3.375" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round" />
                    <path d="M4.005 28.425L11.4 23.46C12.585 22.665 14.295 22.755 15.36 23.67L15.855 24.105C17.025 25.11 18.915 25.11 20.085 24.105L26.325 18.75C27.495 17.745 29.385 17.745 30.555 18.75L33 20.85" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>


                <p>Drag your image here</p>
                <p className='text-gray-2 2xl:text-xl text-xs'>(Only * jpg and *png images will be accepted)</p>
              </div>
}
            </div>
            <div className="md:w-full lg:w-2/3">
              <label htmlFor="" className='2xl:text-1xl text-sm'>Category name</label>
              <input
                type="text"
                value={categoryName}
                onChange={(e)=>setCategoryName(e.target.value)}
                className="w-100 p-3  border border-box rounded-lg"
              />
            </div>
            <br />
            <div className="flex justify-center gap-15 ">
              <button
                className="flex justify-center  rounded border border-stroke 2xl:py-3 py-2 2xl:text-xl text-xs 2xl:px-15 px-10 font-medium text-danger hover:shadow-1 dark:border-strokedark dark:text-white "
               onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="flex justify-center rounded bg-meta-3 2xl:py-3 py-2 2xl:text-xl text-xs 2xl:px-15 px-10 font-medium text-gray hover:bg-opacity-70"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Uploading;
