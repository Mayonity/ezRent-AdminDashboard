/* eslint-disable @next/next/no-img-element */
import { LuImagePlus } from "react-icons/lu"
import React, { ChangeEvent, useEffect, useState } from 'react';


function UploadImage({  onFileChange, onFilesArrayChange, productImages , featuredImagePath, oldProductImages}) {
    const [oldImagesArray, setOldImagesArray] = useState(productImages || []);
    const [imagesArray, setImagesArray] = useState<File[]>([]);
    const [imageUrl1, setImageUrl1] = useState<string | undefined>(featuredImagePath || undefined);
    const [imageUrl2, setImageUrl2] = useState<string | undefined>(productImages && productImages[0]?.path  || undefined);
    const [imageUrl3, setImageUrl3] = useState<string | undefined>(productImages && productImages[1]?.path ||undefined);
    const [imageUrl4, setImageUrl4] = useState<string | undefined>(productImages && productImages[2]?.path || undefined);
    const [imageUrl5, setImageUrl5] = useState<string | undefined>(productImages && productImages[3]?.path ||undefined);

    const handleSingleFileChange = (file) => {
        readURL(file, 'first');
        onFileChange(file.files[0]);
        if (oldImagesArray.length > 0) {
            console.log('we are here')
            setOldImagesArray((oldArray) => oldArray.slice(1));
        }
    };

    const handleFirstFileChange = (file) => {
        if (file.files[0]) {
            readURL(file, 'second');
            setImagesArray(prevArray => [...prevArray, file.files[0]]);
            if (oldImagesArray.length > 0) {
                console.log('we are here')
                setOldImagesArray((oldArray) => oldArray.slice(1));
            }

        }
    }
    const handleSecondFileChange = (file) => {
        if (file.files[0]) {
            readURL(file, 'third');
            setImagesArray(prevArray => [...prevArray, file.files[0]]);
            if (oldImagesArray.length > 0) {
                setOldImagesArray((oldArray) => oldArray.slice(2));
            }
        }
    }
    const handleThirdFileChange = (file) => {
        if (file.files[0]) {
            readURL(file, 'fourth');
            setImagesArray(prevArray => [...prevArray, file.files[0]]);
            if (oldImagesArray.length > 0) {
                setOldImagesArray((oldArray) => oldArray.slice(3));
            }
        }
    }
    const handleFourthFileChange = (file) => {
        if (file.files[0]) {
            readURL(file, 'fifth');
            setImagesArray(prevArray => [...prevArray, file.files[0]]);
            if (oldImagesArray.length > 0) {
                setOldImagesArray((oldArray) => oldArray.slice(4));
            }
        }
    }
    useEffect(() => {
        onFilesArrayChange(imagesArray);
        oldProductImages(oldImagesArray)
    }, [imagesArray, onFilesArrayChange,oldImagesArray]);
    function readURL(input: HTMLInputElement | null, type: string) {
        if (input && input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                if (type === 'first') {
                    setImageUrl1(e.target?.result as string);
                } else if (type === 'second') {
                    setImageUrl2(e.target?.result as string);
                }
                else if (type === 'third') {
                    setImageUrl3(e.target?.result as string);
                } else if (type === 'fourth') {
                    setImageUrl4(e.target?.result as string);
                } else if (type === 'fifth') {
                    setImageUrl5(e.target?.result as string);
                }
            };

            reader.readAsDataURL(file);
        }
    }
    
    return (
        <div className="flex lg:flex-col md:flex-row flex-col md:ml-0 gap-5 justify-center items">
            <div className='2xl:w-[300px] lg:w-[250px] md:w-[300px] w-[250px] 2xl:mx-auto text-center 2xl:py-28 py-24 bg-[#F1F5F9] border border-[#CACACA] rounded-2xl'>
                <label className="btn btn-default" htmlFor="inputFile">
                    <label ><LuImagePlus className="text-[#0E9F6E] mx-auto w-[36px] h-[36px]" /></label>

                    <div className="fa fa-upload fa-2x">
                        <h1 className="text-[#787878] text-md">Drop your images here or</h1>
                        <h1 className="text-[#0E9F6E] text-md">click to browse </h1>
                    </div>
                </label>
                <input
                    id="inputFile"
                    type="file"
                    accept="image/*"
                    // style={{ display: 'none' }}
                    onChange={(e) => handleSingleFileChange(e.target)}
                />
                {imageUrl1 && (
                    <div className="box ">
                        <img src={imageUrl1} 
                    onChange={(e) => handleSingleFileChange(e.target)}

                         alt="Uploaded Image" className="  absolute -mt-[200px] flex justify-center 2xl:w-[300px] lg:w-[250px] md:w-[300px] w-[250px]   lg:h-[300px] h-[330px] rounded-2xl  h-auto" />
                    </div>
                )}
            </div>
            <div className="lg:flex lg:flex-col md:flex-row flex-col">
                <div className="flex gap-5 md:justify-start justify-center mt-5">
                    <div className='2xl:w-[140px] w-[120px]  text-center py-12 bg-[#F1F5F9] border border-[#CACACA] rounded-2xl'>
                        <label className="btn btn-default" htmlFor="inputFile">
                            <label ><LuImagePlus className="text-[#0E9F6E] mx-auto w-[36px] h-[36px]" /> </label>
                            <input
                                id="inputFile"
                                type="file"
                                accept="image/*"
                               
                                onChange={(e) => handleFirstFileChange(e.target)}
                            />
                            {imageUrl2 && (
                                <div className="box ">
                                    <img src={imageUrl2} alt="Uploaded Image" className="  absolute -mt-[90px] flex justify-center 2xl:w-[140px] w-[120px]  rounded-2xl  h-36" />
                                </div>
                            )}
                        </label>

                    </div>
                    <div className='2xl:w-[140px] w-[120px]  text-center py-12 bg-[#F1F5F9] border border-[#CACACA] rounded-2xl'>
                        <label className="btn btn-default" htmlFor="inputFile">
                            <label ><LuImagePlus className="text-[#0E9F6E] mx-auto w-[36px] h-[36px]" /></label>
                            <input
                                id="inputFile"
                                type="file"
                                accept="image/*"
                              
                                onChange={(e) => handleSecondFileChange(e.target)}
                            />
                            {imageUrl3 && (
                                <div className="box ">
                                    <img src={imageUrl3} alt="Uploaded Image" className="  absolute -mt-[90px] flex justify-center 2xl:w-[140px] w-[120px]  rounded-2xl  h-36" />
                                </div>
                            )}
                        </label>

                    </div>
                </div>
                <div className="flex gap-5 md:justify-start justify-center  mt-5">
                    <div className='2xl:w-[140px] w-[120px]  text-center py-12 bg-[#F1F5F9] border border-[#CACACA] rounded-2xl'>
                        <label className="btn btn-default" htmlFor="inputFile">
                            <label ><LuImagePlus className="text-[#0E9F6E] mx-auto w-[36px] h-[36px]" /></label>
                            <input
                                id="inputFile"
                                type="file"
                                accept="image/*"
                               
                                onChange={(e) => handleThirdFileChange(e.target)}
                            />
                            {imageUrl4 && (
                                <div className="box ">
                                    <img src={imageUrl4} alt="Uploaded Image" className="  absolute -mt-[90px] flex justify-center 2xl:w-[140px] w-[120px]  rounded-2xl  h-36" />
                                </div>
                            )}
                        </label>

                    </div>
                    <div className='2xl:w-[140px] w-[120px]  text-center py-12 bg-[#F1F5F9] border border-[#CACACA] rounded-2xl'>
                        <label className="btn btn-default" htmlFor="inputFile">
                            <label ><LuImagePlus className="text-[#0E9F6E] mx-auto w-[36px] h-[36px]" /></label>
                            <input
                                id="inputFile"
                                type="file"
                                accept="image/*"
                                
                                onChange={(e) => handleFourthFileChange(e.target)}
                            />
                            {imageUrl5 && (
                                <div className="box ">
                                    <img src={imageUrl5} alt="Uploaded Image" className="  absolute -mt-[90px] flex justify-center 2xl:w-[140px] w-[120px]  rounded-2xl  h-36" />
                                </div>
                            )}
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadImage