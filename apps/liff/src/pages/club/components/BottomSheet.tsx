import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import ClubBackground from 'public/assets/ClubBackground.png';
import LogoTest from 'public/assets/logoTest.jpg';
import QrTest from 'public/assets/qrTest.png';
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';


const BottomSheet = ({ isOpen, onClose }) => {
    const [favColor, setFavColor] = useState('red');
    const handleFavToggle = () => {
        (favColor === 'red') ? setFavColor('#D9D9D9') : setFavColor('red');
    };

    // TODO: change these value
    const ClubName = "Thailand Incubator (Thinc.) Lorem ipsum dolor sit amet consectetur?";
    const Detail = "Lorem ipsum dolor sit amet consectetur? Lorem ipsum dolor sit amet consectetur? Lorem ipsum dolor sit amet consectetur?Lorem ipsum dolor sit amet consectetur?Lorem ipsum dolor sit amet consectetur?Lorem ipsum dolor sit amet consectetur?Lorem ipsum dolor sit amet consectetur?Lorem ipsum dolor sit amet consectetur?Lorem ipsum dolor sit amet consectetur?";
    const Tagname = "CSR"

    // Bottom Sheet
    const bottomSheetRef = useRef(null);
    const handleClickOutside = (event) => {
        console.log(bottomSheetRef)
        if (isOpen && bottomSheetRef.current && !bottomSheetRef.current.contains(event.target)) {
            onClose();
        }
    };
    useEffect(() => {
        let timeoutId;

        if (isOpen) {
            // Delay the registration of the click event to allow rendering
            timeoutId = setTimeout(() => {
                document.addEventListener('mousedown', handleClickOutside);
            }, 100);
        }

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const bottomSheetClass = isOpen ? 'translate-y-0' : 'translate-y-full';

    return (
        <div ref={bottomSheetRef} className={`fixed bottom-0 left-0 right-0 transform ${bottomSheetClass} bg-white transition-transform duration-300 ease-in-out overflow-hidden h-[80%] flex flex-col rounded-[20px]`}>
            <div className='w-full h-[30px] bg-white flex items-center justify-center'>
                <div className='w-[30%] h-[5px] bg-gray-300 rounded-sm' />
            </div>
            {/* content bottom sheet */}
            <div className='relative flex flex-col w-full h-full'>
                {/* bg */}
                <Image className='fixed top-[30px] bg-[#370682] w-full h-full'
                    src={ClubBackground} alt='ClubBackground' />
                {/* content */}
                <div className='absolute top-0 w-full h-full flex flex-col'>
                    <div className='relative w-full h-full flex flex-col overflow-auto no-scrollbar'>
                        {/* header */}
                        <div className='fixed w-full h-[19vh] flex overflow-hidden'>
                            <div className='relative w-full h-full flex items-center justify-center'>
                                {/* logo bg */}
                                <Image className='object-cover object-center w-full'
                                    src={LogoTest} alt='LogoTest' />

                                {/* overlay logo */}
                                <div className='absolute flex flex-row items-center justify-between w-full px-[7%]'>
                                    <div className='relative flex flex-grow flex-row items-center '>
                                        {/* glowing logo */}
                                        <div className='absolute flex w-[60px] h-[60px] rounded-[20px] blur-sm bg-black/40' />
                                        {/* logo box */}
                                        <div className='relative flex flex-shrink-0 w-[60px] h-[60px] bg-white rounded-[20px] items-center justify-center '>
                                            <Image className='object-cover w-[45px] h-[45px] rounded-[15px] flex'
                                                src={LogoTest}
                                                alt='LogoTest'
                                            />
                                        </div>
                                        <div className='flex flex-col pl-[20px]'>
                                            {/* name */}
                                            <p className='text-white text-left font-bold text-base font-ibm break-words inline-block'>
                                                {ClubName}
                                            </p>
                                            {/* tag */}
                                            <p className='text-white text-left font-semibold text-xs font-ibm pt-[5px]'>
                                                {Tagname}
                                            </p>
                                        </div>

                                    </div>

                                    <AiFillHeart className='flex flex-shrink-0 w-[30px] h-[30px] ml-[20px]' color={favColor} onClick={handleFavToggle} />

                                </div>
                            </div>
                        </div>
                        {/* details card */}
                        <div className='pt-[calc(19vh+16px)] px-[25px] w-full shadow-inner'>
                            <div className='px-[20px] pt-[10px] pb-[16px] flex flex-col bg-[#D9D9D94D] rounded-[20px] '>
                                <p className='flex text-xl font-ibm text-white font-bold'>
                                    Details
                                </p>
                                <div className='flex pl-[28px] pt-[20px] pb-[10px] text-sm font-ibm text-white font-medium'>
                                    <ReactMarkdown>{Detail}</ReactMarkdown>
                                </div>
                            </div>
                        </div>

                        {/* contract card */}
                        <div className='px-[25px] pt-[25px] pb-[40px] w-full shadow-inner'>
                            <div className='px-[20px] py-[16px] flex flex-col bg-[#D9D9D94D] rounded-[20px] '>
                                <p className='flex text-xl font-ibm text-white font-bold tracking-wide'>
                                    Contract
                                </p>
                                {/* qr */}
                                <div className='flex flex-col justify-center items-center mt-[30px]'>
                                    {/* TODO: change qr dynamically */}
                                    <Image src={QrTest} alt='QrTest' className='flex w-[150px] h-[150px]' />
                                    <p className='text-xl font-ibm text-white font-bold mt-[16px] mb-[80px] text-center'>
                                        Join ours Club
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default BottomSheet;

