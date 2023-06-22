import * as React from 'react';
import { useState } from 'react';
import ClubCard from './components/clubcard';
import { AiFillHeart } from 'react-icons/ai';
import { FaStamp , FaSlash } from 'react-icons/fa';


const Club = () => {
    const [filterFavorite, setFilterFavorite] = useState(false);
    // 0 => all , 1 => filter stamped , 2 => filter not stamped
    const [filterStamp, setFilterStamp] = useState(0);

    const toggleFavorite = () => {setFilterFavorite(!filterFavorite)};
    const toggleStamp = () => {setFilterStamp((filterStamp+1)%3)};

    const favoriteColor = (filterFavorite) ? 'red' : '#dedddf';
    const stampColor = (filterStamp == 1) ? 'green' : '#dedddf';
    const stampSlash = (filterStamp == 2) ? <FaSlash className='w-[30px] h-[30px] absolute top-0' color='red'/> : <div />;

    return (
        // TODO: change background image
        <div className='relative flex flex-col w-screen h-screen'>
            {/* bg */}
            <div className='fixed top-0 bg-[#370682] w-screen h-screen'></div>

            {/* content */}
            <div className='absolute t-0 p-[23px] pt-[50px] w-full'>
                {/* head */}
                <div className='w-full items-center '>
                    <h1 className='font-semibold text-white text-[20px] text-center'>
                        ชมรมในวิศวฯ จุฬาฯ
                    </h1>
                    {/* TODO: set onclick */}
                    <div className='flex flex-row gap-4 mt-[12px] items-center justify-center'>
                        <h1 className='font-semibold text-white text-[14px]'>
                            ทั้งหมด
                        </h1>
                        <h1 className='font-semibold text-white/[0.6] text-[14px]'>
                            วิชาการ
                        </h1>
                        <h1 className='font-semibold text-white/[0.6] text-[14px]'>
                            กีฬา
                        </h1>
                        <h1 className='font-semibold text-white/[0.6] text-[14px]'>
                            ศิลปะวัฒนธรรม
                        </h1>
                        <h1 className='font-semibold text-white/[0.6] text-[14px]'>
                            CSR
                        </h1>
                    </div>
                </div>

                {/* club list */}
                {/* TODO: create component according to data */}
                <div className='grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-[25px] w-full gap-[20px]'>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                    <ClubCard ></ClubCard>
                    <ClubCard isStamped={true}></ClubCard>
                    <ClubCard isFavorite={true} isStamped={true}></ClubCard>
                </div>
            </div>

            {/* fading bg */}
            <div className='fixed bottom-0 bg-gradient-to-t from-black/80 via-black/80 w-screen h-[25%]'></div>

            {/* button */}
            <div className='fixed right-[15%] bottom-[8%] bg-white rounded-[20px] flex flex-row items-center justify-center px-[18px] py-[11px] gap-[15px]'>
                <AiFillHeart className='w-[30px] h-[30px] cursor-pointer' color={favoriteColor} onClick={toggleFavorite}/>

                <div className='bg-[#D9D9D9] w-[2px] h-[30px]'/>

                <div className='relative cursor-pointer' onClick={toggleStamp}>
                    <FaStamp className='relative w-[30px] h-[30px] cursor-pointer' color={stampColor} />
                    {stampSlash} 
                </div>
                
            </div>
        </div>
    );
}

export default Club;