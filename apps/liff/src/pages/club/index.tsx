import * as React from 'react';
import { useState, useEffect } from 'react';
import ClubCard from './components/clubcard';
import { AiFillHeart } from 'react-icons/ai';
import { FaStamp, FaFilter } from 'react-icons/fa';

const club_datas = [
    {
        name: "Test1",
        tag: "Academic",
        logo: "",
        description: "test12345"
    },
    {
        name: "Test2",
        tag: "Sport",
        logo: "",
        description: "test12345"
    },
    {
        name: "Test3",
        tag: "Art",
        logo: "",
        description: "test12345"
    },
    {
        name: "Test4",
        tag: "CSR",
        logo: "",
        description: "test12345"
    }
]
const my_favorite = [
    {
        name: "Test1"
    }, {
        name: "Test2"
    }
]
const my_stamped = [
    {
        name: "Test1"
    }, {
        name: "Test3"
    }
]

const Club = () => {
    // 0 => all , 1 => filter , 2 => not filter
    const [filterState, setFilterState] = useState(0);
    const [currentMode, setCurrentMode] = useState("Stamp");
    const handleFilter = () => {
        const totalState = (currentMode == "Stamp") ? 3 : 2;
        setFilterState((filterState + 1) % totalState)
    }
    const handleChangeMode = () => {
        setFilterState(0);
        (currentMode == "Stamp") ? setCurrentMode("Favorite") : setCurrentMode("Stamp");
    }
    const filterColor = (filterState == 1) ? 'green' : (filterState == 2) ? 'red' : '#D9D9D9';

    // All , Academic , Sport , Art , CSR
    const [selection, setSelection] = useState("All");
    const headerText = (currentMode == "Stamp" && filterState == 1) ? "ชมรมที่แสตมป์แล้ว"
        : (currentMode == "Stamp" && filterState == 2) ? "ชมรมที่ยังไม่ได้แสตมป์"
            : (currentMode == "Favorite" && filterState == 1) ? "ชมรมที่สนใจ"
                : "ชมรมในวิศวฯ จุฬาฯ";

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
                        {headerText}
                    </h1>
                    {/* TODO: set filter */}
                    <div className='flex flex-row gap-4 mt-[12px] items-center justify-center'>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection == "All") ? "" : "opacity-60"}`} onClick={() => setSelection("All")}>
                            ทั้งหมด
                        </h1>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection == "Academic") ? "" : "opacity-60"}`} onClick={() => setSelection("Academic")}>
                            วิชาการ
                        </h1>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection == "Sport") ? "" : "opacity-60"}`} onClick={() => setSelection("Sport")}>
                            กีฬา
                        </h1>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection == "Art") ? "" : "opacity-60"}`} onClick={() => setSelection("Art")}>
                            ศิลปะวัฒนธรรม
                        </h1>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection == "CSR") ? "" : "opacity-60"}`} onClick={() => setSelection("CSR")}>
                            CSR
                        </h1>
                    </div>
                </div>

                {/* club list */}
                {/* TODO: create component according to data */}
                <div className='grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-[25px] w-full gap-[20px]'>
                    {
                        club_datas.map((club_data) =>
                            <ClubCard currentMode={currentMode}
                                isStamped={my_stamped.some(stamped => stamped.name == club_data.name)}
                                isFavorite={my_favorite.some(favorite => favorite.name == club_data.name)}
                                name={club_data.name}
                                // TODO: image param
                            />)
                    }
                </div>
            </div>

            {/* fading bg */}
            <div className='fixed bottom-0 bg-gradient-to-t from-black/80 via-black/80 w-screen h-[25%]'></div>

            {/* button */}
            <div className='fixed right-[15%] bottom-[8%] bg-white rounded-[28px] flex flex-row items-center justify-center px-[18px] py-[11px] gap-[15px]'>
                {
                    (currentMode == "Stamp") ? <FaStamp className='w-[30px] h-[30px] cursor-pointer' color='#9642E2' onClick={handleChangeMode} />
                        : <AiFillHeart className='w-[30px] h-[30px] cursor-pointer' color='red' onClick={handleChangeMode} />
                }

                <div className='bg-[#D9D9D9] w-[2px] h-[30px]' />

                {/* TODO: set filter */}
                <div className='relative cursor-pointer' onClick={handleFilter}>
                    <FaFilter className='relative w-[30px] h-[30px] cursor-pointer' color={filterColor} />
                </div>


            </div>
        </div>
    );
}

export default Club;