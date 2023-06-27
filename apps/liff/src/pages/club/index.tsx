import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
        name: "Test11",
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
        name: "Test22",
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
function isFavorite(data) {
    return my_favorite.some(favorite => data.name === favorite.name)
}
function isStamped(data) {
    return my_stamped.some(stamped => data.name === stamped.name)
}


const Club = () => {
    // selection : All , Academic , Sport , Art , CSR
    const [selection, setSelection] = useState("All");
    const [clubSelected, setClubSelected] = useState(club_datas);
    const [clubFiltered, setClubFiltered] = useState(clubSelected);

    // 0 => all , 1 => filter , 2 => not filter
    const [filterState, setFilterState] = useState(0);
    // Stamp , Favorite
    const [currentMode, setCurrentMode] = useState("Stamp");
    const handleFilter = () => {
        const totalState = (currentMode === "Stamp") ? 3 : 2;
        setFilterState((filterState + 1) % totalState)
    }
    const handleChangeMode = () => {
        setFilterState(0);
        (currentMode === "Stamp") ? setCurrentMode("Favorite") : setCurrentMode("Stamp");
    }

    const [headerText, setHeaderText] = useState("ชมรมที่แสตมป์แล้ว");
    const [filterColor, setFilterColor] = useState('#D9D9D9');

    useEffect(() => {
        // set club data according to selector
        (selection === "All") ?
            setClubSelected(club_datas) :
            setClubSelected(club_datas.filter(club_data => club_data.tag === selection));
    }, [selection]);

    useEffect(() => {
        // set top text according to filter mode
        (currentMode === "Stamp" && filterState === 1) ? setHeaderText("ชมรมที่แสตมป์แล้ว")
            : (currentMode == "Stamp" && filterState == 2) ? setHeaderText("ชมรมที่ยังไม่ได้แสตมป์")
                : (currentMode == "Favorite" && filterState == 1) ? setHeaderText("ชมรมที่สนใจ")
                    : setHeaderText("ชมรมในวิศวฯ จุฬาฯ");

        // set filter icon color
        (filterState === 1) ? setFilterColor('green') :
            (filterState === 2) ? setFilterColor('red') :
                setFilterColor('#D9D9D9');

    }, [currentMode, filterState]);

    useEffect(() => {
        // set club data according to filter mode 
        (filterState === 0) ? setClubFiltered(clubSelected) :
            (filterState === 1) ? setClubFiltered(clubSelected.filter(club =>
                (currentMode === "Stamp") ? isStamped(club) : isFavorite(club)
            )) : setClubFiltered(clubSelected.filter(club =>
                (currentMode === "Stamp") ? !isStamped(club) : !isFavorite(club)
            ))
    }, [clubSelected, filterState]);

    // router
    const router = useRouter();

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
                    <div className='flex flex-row gap-4 mt-[12px] items-center justify-center'>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection === "All") ? "" : "opacity-60"}`} onClick={() => setSelection("All")}>
                            ทั้งหมด
                        </h1>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection === "Academic") ? "" : "opacity-60"}`} onClick={() => setSelection("Academic")}>
                            วิชาการ
                        </h1>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection === "Sport") ? "" : "opacity-60"}`} onClick={() => setSelection("Sport")}>
                            กีฬา
                        </h1>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection === "Art") ? "" : "opacity-60"}`} onClick={() => setSelection("Art")}>
                            ศิลปะวัฒนธรรม
                        </h1>
                        <h1 className={`font-semibold text-white text-[14px] ${(selection === "CSR") ? "" : "opacity-60"}`} onClick={() => setSelection("CSR")}>
                            CSR
                        </h1>
                    </div>
                </div>

                {/* club list */}
                <div className='grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-[25px] w-full gap-[20px]'>
                    {
                        clubFiltered.map((club_data) => {
                            const pathName = "/club/" + club_data.name;
                            return <ClubCard currentMode={currentMode}
                                // TODO: image param
                                isStamped={isStamped(club_data)}
                                isFavorite={isFavorite(club_data)}
                                name={club_data.name}
                                onClick={() => 
                                    router.push(
                                        {
                                            pathname: pathName,
                                            query: {
                                                name: club_data.name,
                                                description: club_data.description,
                                                // TODO: image param
                                            }
                                        }
                                    )
                                } />

                        })
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

                <div className='relative cursor-pointer' onClick={handleFilter}>
                    <FaFilter className='relative w-[30px] h-[30px] cursor-pointer' color={filterColor} />
                </div>


            </div>
        </div>
    );
}

export default Club;