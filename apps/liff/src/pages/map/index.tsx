import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Branches1 from '@/public/images/branches1.svg';
import GrainBackground from '@/public/images/grain-background.svg';
import Spore1 from '@/public/images/spore1.svg';
import { FaRestroom, FaUsers, FaHamburger } from 'react-icons/fa';
import { MdOutlineMedicalServices } from 'react-icons/md';
import MapMock from '@/public/images/map-mock.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const Map: NextPage = () => {
    return (
        <div>
            <TransformWrapper>
                <TransformComponent>
                    <Image
                        src={MapMock}
                        alt="map"
                        className="w-screen h-screen object-contain bg-black"
                    />
                </TransformComponent>
            </TransformWrapper>
            {/* Bottom part */}
            <div className="fixed bottom-0 left-0 h-1/4 overflow-hidden rounded-t-2xl">
                {/* Background and decorations */}
                <Image
                    src={GrainBackground}
                    alt="background"
                    className="abosolute top-0 left-0 -z-50 h-full w-screen object-cover"
                    loading="lazy"
                />
                <div className="absolute top-0 left-0 bg-gradient-to-l from-transparent to-primary-900 w-1/2 h-full " />
                <div className="absolute top-0 right-0 bg-gradient-to-r from-transparent to-primary-900 w-1/2 h-full " />
                <div className="absolute top-0 right-0 overflow-hidden w-48 h-48">
                    <Image
                        src={Spore1}
                        alt=""
                        className="absolute -top-12 -right-8 rotate-[54deg]"
                        loading="lazy"
                    />
                </div>
                <div className="absolute top-0 left-0 overflow-hidden w-40 h-72">
                    <Image
                        src={Branches1}
                        alt=""
                        className="absolute -top-40 left-0 rotate-45"
                        priority
                    />
                </div>
                {/* Menu */}
                <div className="absolute top-1/3 pt-3 w-full flex flex-row justify-evenly items-center text-white text-xs">
                    <button className="flex flex-col justify-between items-center h-20">
                        <div className="bg-primary-100/30 w-12 h-12 rounded-full flex justify-center items-center">
                            <FaRestroom className="w-6 h-6" />
                        </div>
                        <div>ห้องน้ำ</div>
                    </button>

                    <button className="flex flex-col justify-between items-center h-20">
                        <div className="bg-primary-100/30 w-12 h-12 rounded-full flex justify-center items-center">
                            <FaUsers className="w-6 h-6" />
                        </div>
                        <div>ชมรม</div>
                    </button>
                    <button className="flex flex-col justify-between items-center h-20">
                        <div className="bg-primary-100/30 w-12 h-12 rounded-full flex justify-center items-center">
                            <FaHamburger className="w-6 h-6" />
                        </div>
                        <div>ร้านอาหาร</div>
                    </button>
                    <button className="flex flex-col justify-between items-center h-20">
                        <div className="bg-primary-100/30 w-12 h-12 rounded-full flex justify-center items-center">
                            <MdOutlineMedicalServices className="w-6 h-6" />
                        </div>
                        <div>พยาบาล</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Map;
