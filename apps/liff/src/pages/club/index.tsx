import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiFillHeart } from 'react-icons/ai';
import { FaStamp, FaFilter } from 'react-icons/fa';
import ClubBackground from 'public/images/GrainBackground.svg';
import Image from 'next/image';
import ClubCard from './components/ClubCard';
import BottomSheet from './components/BottomSheet';

// TODO: fetch data from api
const club_datas = [
    {
        name: 'Test1',
        tag: 'Academic',
        logo: '',
        description: 'test12345',
        id: 'test1',
    },
    {
        name: 'Test11',
        tag: 'Academic',
        logo: '',
        description: 'test12345',
        id: 'test11',
    },
    {
        name: 'Test2',
        tag: 'Sport',
        logo: '',
        description: 'test12345',
        id: 'test2',
    },
    {
        name: 'Test22',
        tag: 'Sport',
        logo: '',
        description: 'test12345',
        id: 'test22',
    },
    {
        name: 'Test3',
        tag: 'Art',
        logo: '',
        description: 'test12345',
        id: 'test3',
    },
    {
        name: 'Test4',
        tag: 'CSR',
        logo: '',
        description: 'test12345',
        id: 'test4',
    },
    {
        name: 'Thailand Incubator (Thinc.)',
        tag: 'Academic',
        logo: '',
        description: 'test12345',
        id: 'thinc',
    },
];
const my_favorite = ['test1', 'test2'];
const my_stamped = ['test1', 'test3'];
function isFavorite(data) {
    return my_favorite.some((favorite) => data.id === favorite);
}
function isStamped(data) {
    return my_stamped.some((stamped) => data.id === stamped);
}

const Club = () => {
    // selection : All , Academic , Sport , Art , CSR
    const [selection, setSelection] = useState('All');
    const [clubSelected, setClubSelected] = useState(club_datas);
    const [clubFiltered, setClubFiltered] = useState(clubSelected);

    // 0 => all , 1 => filter , 2 => not filter
    const [filterState, setFilterState] = useState(0);
    // Stamp , Favorite
    const [currentMode, setCurrentMode] = useState('Stamp');
    const handleFilter = () => {
        const totalState = currentMode === 'Stamp' ? 3 : 2;
        setFilterState((filterState + 1) % totalState);
    };
    const handleChangeMode = () => {
        setFilterState(0);
        currentMode === 'Stamp'
            ? setCurrentMode('Favorite')
            : setCurrentMode('Stamp');
    };

    const [headerText, setHeaderText] = useState('ชมรมที่แสตมป์แล้ว');
    const [filterColor, setFilterColor] = useState('#D9D9D9');

    useEffect(() => {
        // set club data according to selector
        selection === 'All'
            ? setClubSelected(club_datas)
            : setClubSelected(
                  club_datas.filter((club_data) => club_data.tag === selection)
              );
    }, [selection]);

    useEffect(() => {
        // set top text according to filter mode
        currentMode === 'Stamp' && filterState === 1
            ? setHeaderText('ชมรมที่แสตมป์แล้ว')
            : currentMode == 'Stamp' && filterState == 2
            ? setHeaderText('ชมรมที่ยังไม่ได้แสตมป์')
            : currentMode == 'Favorite' && filterState == 1
            ? setHeaderText('ชมรมที่สนใจ')
            : setHeaderText('ชมรมในวิศวฯ จุฬาฯ');

        // set filter icon color
        filterState === 1
            ? setFilterColor('green')
            : filterState === 2
            ? setFilterColor('red')
            : setFilterColor('#D9D9D9');
    }, [currentMode, filterState]);

    useEffect(() => {
        // set club data according to filter mode
        filterState === 0
            ? setClubFiltered(clubSelected)
            : filterState === 1
            ? setClubFiltered(
                  clubSelected.filter((club) =>
                      currentMode === 'Stamp'
                          ? isStamped(club)
                          : isFavorite(club)
                  )
              )
            : setClubFiltered(
                  clubSelected.filter((club) =>
                      currentMode === 'Stamp'
                          ? !isStamped(club)
                          : !isFavorite(club)
                  )
              );
    }, [clubSelected, filterState]);

    // router
    const router = useRouter();

    // bottom sheet
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    useEffect(() => {
        console.log(isBottomSheetOpen);
    }, [isBottomSheetOpen]);

    // TODO: change tailwind to not hardcode & add font
    return (
        <>
            <div className="relative flex flex-col w-screen h-screen">
                {/* bg */}
                <Image
                    className="fixed top-0 bg-[#370682] w-screen h-screen object-cover"
                    src={ClubBackground}
                    alt="ClubBackground"
                />

                {/* content */}
                <div className="absolute top-0 p-[23px] pt-[50px] w-full">
                    {/* head */}
                    <div className="w-full items-center ">
                        <p className="font-bold text-white text-xl text-center font-ibm">
                            {headerText}
                        </p>
                        <div className="flex flex-row gap-4 mt-[12px] items-center justify-center">
                            <p
                                className={`font-bold font-ibm text-white text-sm ${
                                    selection === 'All' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('All')}
                            >
                                ทั้งหมด
                            </p>
                            <p
                                className={`font-bold font-ibm text-white text-sm ${
                                    selection === 'Academic' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('Academic')}
                            >
                                วิชาการ
                            </p>
                            <p
                                className={`font-bold font-ibm text-white text-sm ${
                                    selection === 'Sport' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('Sport')}
                            >
                                กีฬา
                            </p>
                            <p
                                className={`font-bold font-ibm text-white text-sm ${
                                    selection === 'Art' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('Art')}
                            >
                                ศิลปะวัฒนธรรม
                            </p>
                            <p
                                className={`font-bold font-ibm text-white text-sm ${
                                    selection === 'CSR' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('CSR')}
                            >
                                CSR
                            </p>
                        </div>
                    </div>

                    {/* club list */}
                    <div className="grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-[25px] w-full gap-[20px]">
                        {clubFiltered.map((club_data) => {
                            const pathName = '/club/' + club_data.name;
                            return (
                                <ClubCard
                                    currentMode={currentMode}
                                    // TODO: image param
                                    isStamped={isStamped(club_data)}
                                    isFavorite={isFavorite(club_data)}
                                    name={club_data.name}
                                    key={club_data.name}
                                    onClick={handleOpenBottomSheet}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* fading bg */}
                <div className="fixed bottom-0 bg-gradient-to-t from-black/80 via-black/80 w-screen h-[25%]"></div>

                {/* button */}
                <div className="fixed right-[15%] bottom-[8%] bg-white rounded-[28px] flex flex-row items-center justify-center px-[18px] py-[11px] gap-[15px]">
                    {currentMode == 'Stamp' ? (
                        <FaStamp
                            className="w-[30px] h-[30px] cursor-pointer"
                            color="#9642E2"
                            onClick={handleChangeMode}
                        />
                    ) : (
                        <AiFillHeart
                            className="w-[30px] h-[30px] cursor-pointer"
                            color="red"
                            onClick={handleChangeMode}
                        />
                    )}

                    <div className="bg-[#D9D9D9] w-[2px] h-[30px]" />

                    <div
                        className="relative cursor-pointer"
                        onClick={handleFilter}
                    >
                        <FaFilter
                            className="relative w-[30px] h-[30px] cursor-pointer"
                            color={filterColor}
                        />
                    </div>
                </div>
                <BottomSheet
                    isOpen={isBottomSheetOpen}
                    onClose={handleCloseBottomSheet}
                />
            </div>
        </>
    );
};

export default Club;
