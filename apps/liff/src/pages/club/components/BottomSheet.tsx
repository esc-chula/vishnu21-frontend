import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import ClubBackground from 'public/images/GrainBackground.svg';
import LogoTest from 'public/images/logoTest.jpg';
import QrTest from 'public/images/qrTest.png';
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BottomSheet = ({ isOpen, onClose }) => {
    const [favColor, setFavColor] = useState('red');
    const handleFavToggle = () => {
        favColor === 'red' ? setFavColor('#D9D9D9') : setFavColor('red');
    };

    // TODO: change these value
    const ClubName = 'Thailand Incubator (Thinc.)';
    const Tagname = 'CSR';

    // Bottom Sheet
    const bottomSheetRef = useRef(null);
    const handleClickOutside = (event) => {
        console.log(bottomSheetRef);
        if (
            isOpen &&
            bottomSheetRef.current &&
            !bottomSheetRef.current.contains(event.target)
        ) {
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
        <div
            ref={bottomSheetRef}
            className={`fixed bottom-0 left-0 right-0 transform ${bottomSheetClass} bg-white transition-transform duration-300 ease-in-out overflow-hidden h-[85%] flex flex-col rounded-[20px]`}
        >
            <div className="w-full h-[10px] bg-white flex items-center justify-center">
                <div className="w-[30%] h-[2px] bg-gray-300 rounded-lg" />
            </div>
            {/* content bottom sheet */}
            <div className="relative flex flex-col w-full h-full">
                {/* bg */}
                <Image
                    className="fixed top-[30px] bg-[#370682] brightness-50 w-full h-full object-cover"
                    src={ClubBackground}
                    alt="ClubBackground"
                />
                {/* content */}
                <div className="absolute top-0 w-full h-full flex flex-col">
                    <div className="relative w-full h-full flex flex-col overflow-auto no-scrollbar">
                        {/* header */}
                        <div className="fixed w-full h-[19vh] flex overflow-hidden">
                            <div className="relative w-full h-full flex items-center justify-center ">
                                {/* logo bg */}
                                <Image
                                    className="object-cover object-center brightness-25 w-full"
                                    src={LogoTest}
                                    alt="LogoTest"
                                />

                                {/* overlay logo */}
                                <div className="absolute flex flex-row items-center justify-between w-full px-[7%]">
                                    <div className="relative flex flex-grow flex-row items-center ">
                                        {/* glowing logo */}
                                        <div className="absolute flex w-[60px] h-[60px] rounded-[20px] blur-sm bg-black/40" />
                                        {/* logo box */}
                                        <div className="relative flex flex-shrink-0 w-[60px] h-[60px] bg-white rounded-[20px] items-center justify-center ">
                                            <Image
                                                className="object-cover w-[45px] h-[45px] rounded-[15px] flex"
                                                src={LogoTest}
                                                alt="LogoTest"
                                            />
                                        </div>
                                        <div className="flex flex-col pl-[20px]">
                                            {/* name */}
                                            <p className="text-white text-left font-bold text-base font-ibm break-words inline-block">
                                                {ClubName}
                                            </p>
                                            {/* tag */}
                                            <p className="text-white text-left font-semibold text-xs font-ibm pt-[5px]">
                                                {Tagname}
                                            </p>
                                        </div>
                                    </div>

                                    <AiFillHeart
                                        className="flex flex-shrink-0 w-[30px] h-[30px] ml-[20px]"
                                        color={favColor}
                                        onClick={handleFavToggle}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* details card */}
                        <div className="pt-[calc(19vh+16px)] py-[16px] px-[25px] w-full shadow-inner">
                            <div className="px-[20px] pt-[10px] pb-[16px] flex flex-col bg-[#D9D9D94D] rounded-[20px] ">
                                <p className="flex text-xl py-2 font-ibm text-white font-bold">
                                    รายละเอียดชมรม
                                </p>
                                <div className="flex pl-[28px] pb-[10px] font-ibm text-white flex-col font-normal">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {`# Hi **bold**\n\nHe is a boy\n\n+ Hi\n+ Hello`}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>

                        {/* contract card */}
                        <div className="px-[25px] pt-[25px] pb-[40px] text-center w-full shadow-inner">
                            <button
                                className="w-44 max-w-full rounded-3xl bg-primary-700 px-4 py-3 text-white font-ibm text-base font-bold shadow-xl"
                                onClick={() => liff.scanCodeV2()}
                            >
                                Scan QR Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSheet;
