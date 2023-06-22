import * as React from 'react';
import { useState } from 'react';
import ClubCard from './components/clubcard';


const Club = () => {
    return (
        // TODO: change background image
        <div className='relative flex flex-col w-screen h-screen'>
            {/* fading bg */}
            <div className='fixed top-0 bg-purple-800 w-screen h-screen'></div>
            <div className='fixed top-0 bg-gradient-to-t from-[#130531] via-[#130531] via-[{100% - 40.92%}] w-screen h-screen'>

            </div>
            {/* content */}
            <div className='absolute t-0 p-[23px] pt-[50px] w-full'>
                {/* head */}
                <div className='w-full items-center '>
                    <h1 className='font-semibold text-white text-[20px] text-center'>
                        ชมรมในวิศวฯ จุฬาฯ
                    </h1>
                    {/* TODO: set onclick */}
                    <div className='flex flex-row gap-4 mt-[10px] items-center justify-center'>
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

                {/* club */}
                <div className='grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-[30px] w-full gap-[25px]'>
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

        </div>
    );
}

export default Club;