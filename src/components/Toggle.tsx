import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const ToggleButton = () => {
    const location = useLocation();

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(false);
        if (isToggled === true) {
            setShowBlock(false);
        }
        else {
            setShowBlock(true);
        }

    };
    const [showBlock, setShowBlock] = useState(false);
    const openBlock = () => {
        setShowBlock(true);
    };

    const closeBlock = () => {
        console.log("Closing sign-in form");
        setShowBlock(false);

        setIsToggled(true);
    };

    return (
        <>
            <div
                style={{ color: isToggled ? 'red' : 'green' }}
                className="toggleContainer flex gap-2">

                {isToggled ? <p>Blocked</p> : <p onClick={openBlock}>UnBlocked</p>}
                <button
                    onClick={handleToggle}
                    className={`toggleButton ${isToggled ? "toggled " : ''}`}

                    style={{ backgroundColor: '#F1F5F9' }}
                >
                    <div
                        style={{ backgroundColor: isToggled ? '#C90000' : '#0E9F6E' }}
                        className="slider"></div>
                </button>
            </div>
            {showBlock && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 bg-gray-2 z-50">
                    <div className="relative w-full max-w-lg bg-white">
                        <div className="relative rounded-2xl shadow-2xl bg-white">
                            <button onClick={closeBlock} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                            </button>
                            <div className="pl-7">
                                <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                                        <h2 className=" text-center ml-10 text-2xl font-bold leading-9 tracking-tight text-[#C70813] ">
                                            {location.pathname === '/Users' ? ' Block this Users' : ''}
                                            {location.pathname === '/Categories' ? ' Block this Categories' : ''}
                                            {location.pathname === '/Products' ? ' Block this Products' : ''}
                                            {location.pathname === '/Chats' ? ' Block this Chats' : ''}
                                        </h2>
                                        <br />
                                    </div>
                                    <div>
                                        <textarea name="" id="" placeholder='Add remarks' className='bg-white text-gray-2 border-2 border-box w-100 h-40 rounded-lg p-5' />
                                        <br />
                                        <div className='text-center mt-5'>
                                            <button onClick={closeBlock} className='text-white bg-[#C70813] p-4 w-50 ml-10 text-center rounded-lg'>Block</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ToggleButton;
