import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiFillHeart } from 'react-icons/ai';
import { FaStamp, FaFilter } from 'react-icons/fa';
import ClubBackground from 'public/images/GrainBackground.svg';
// import BottomSheet from 'react-draggable-bottom-sheet';
import Image from 'next/image';
import ClubCard from './components/ClubCard';
import Sheet from './components/BottomSheet';

const Club = ({ liff }) => {
    // selection : All , Academic , Sport , Art , CSR
    const [selection, setSelection] = useState('All');
    const [clubs, setClubs] = useState([]);
    const [clubSelected, setClubSelected] = useState(clubs);
    const [stamped, setStamped] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const isStamped = (id: string) => {
        return stamped.some((stamped) => id === stamped.id);
    };
    const isFavorite = (id: string) => {
        return favorites.some((favorite) => id === favorite.id);
    };
    const [clubFiltered, setClubFiltered] = useState(clubSelected);

    // 0 => all , 1 => filter , 2 => not filter
    const [filterState, setFilterState] = useState(0);
    // Stamp , Favorite
    const [currentMode, setCurrentMode] = useState('Favorite');
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
            ? setClubSelected(clubs)
            : setClubSelected(
                  clubs.filter((club_data) => club_data.tag === selection)
              );
    }, [selection]);

    useEffect(() => {}, []);

    useEffect(() => {
        const getFAQs = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/stamps`
                );
                const data = await res.json();
                setClubs(data);
            } catch (error) {
                console.error(error);
            }
        };
        getFAQs().then(() => {});
        setStamped(JSON.parse(localStorage.getItem('stamped')) || []);
        setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
    }, []);

    useEffect(() => {
        setSelection('All');
        setClubSelected(clubs);
    }, [clubs]);

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
                            const pathName = '/club/' + club_data.clubName;
                            return (
                                <ClubCard
                                    currentMode={currentMode}
                                    // TODO: image param
                                    img={club_data.logo}
                                    isStamped={isStamped(club_data)}
                                    isFavorite={isFavorite(club_data)}
                                    name={club_data.clubName}
                                    key={club_data.id}
                                    onClick={() => handleOpenBottomSheet()}
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
                {/* <BottomSheet
                    isOpen={isBottomSheetOpen}
                    close={handleCloseBottomSheet}
                > */}
                <Sheet
                    isOpen={isBottomSheetOpen}
                    onClose={handleCloseBottomSheet}
                />
                {/* </BottomSheet> */}
            </div>
        </>
    );
};

export default Club;
