import * as React from 'react';
import { useState } from 'react';
import ClubCard from './components/clubcard';

const Club = () => {
    return (
        // bg-[url-("/resources/bg.png")] bg-cover bg-center somehow this doesn't work
        <div className='relative flex flex-col w-screen h-screen bg-purple-800'>
            {/* fading bg */}
            <div className='fixed bg-gradient-to-t from-[#130531] via-[#130531] via-[{100% - 40.92%}] w-screen h-screen'>

            </div>
            {/* content */}
            <div className='absolute p-[23px] pt-[50px] flex flex-col w-full items-center'>
                {/* head */}
                <h1 className='font-semibold text-white text-[20px]'>
                    ชมรมในวิศวฯ จุฬาฯ
                </h1>
                {/* TODO: set onclick */}
                <div className='flex flex-row gap-4 mt-[10px]'>
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
                {/* club */}
                <div className='grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 m-[30px] w-full gap-[33px]'>
                    <ClubCard isHighlight={false}></ClubCard>
                    <ClubCard isHighlight={true}></ClubCard>
                </div>
            </div>

        </div>
    );
}

export default Club;