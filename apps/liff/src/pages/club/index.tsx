import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiFillHeart } from 'react-icons/ai';
import { FaStamp, FaFilter } from 'react-icons/fa';
import ClubBackground from 'public/images/GrainBackground.svg';
import Image from 'next/image';
import ClubCard from './components/ClubCard';
import Head from 'next/head';
import Main from '@/layouts/Main';

const Club = () => {
    // selection : All , Academic , Sport , Art , CSR, Other
    const router = useRouter();
    const [selection, setSelection] = useState('All');
    const [clubs, setClubs] = useState([]);
    const [clubSelected, setClubSelected] = useState(clubs);
    const [stamped, setStamped] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const isStamped = (id: string) => {
        return stamped.some((stamped) => id === stamped.stampHash);
    };
    const isFavorite = (id: string) => {
        return favorites.some((favorite) => id === favorite);
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

    useEffect(() => {
        setClubs(JSON.parse(localStorage.getItem('VISHNU21ST::clubs')) || []);
        const getFAQs = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/stamps`
                );
                const data = await res.json();
                setClubs(data);
                localStorage.setItem('VISHNU21ST::clubs', JSON.stringify(data));
            } catch (error) {
                console.error(error);
            }
        };
        getFAQs().then(() => {});
        if (localStorage) {
            setStamped(
                (JSON.parse(localStorage.getItem('VISHNU21ST::stamps')) ||
                    []) as {
                    stampHash: string;
                    timestamp: number;
                }[]
            );
            setFavorites(
                JSON.parse(localStorage.getItem('VISHNU21ST::favorites')) || []
            );
        }
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
                          ? isStamped(club.id)
                          : isFavorite(club.id)
                  )
              )
            : setClubFiltered(
                  clubSelected.filter((club) =>
                      currentMode === 'Stamp'
                          ? !isStamped(club.id)
                          : !isFavorite(club.id)
                  )
              );
        console.log(stamped, favorites);
    }, [clubSelected, filterState, stamped, favorites]);

    return (
        <>
            <Head>
                <title>ชมรมในวิศวฯ จุฬา</title>
            </Head>
            <Main foregroundImage="top2" background>
                <div className="text-center h-full">
                    <h1 className="font-bold text-2xl mt-16 mb-2">
                        {headerText}
                    </h1>
                    <div className="w-full h-full overflow-y-auto pb-56 pt-3">
                        <div className="px-4">
                            <div className="grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 w-full gap-[20px]">
                                {clubFiltered.map((club_data) => {
                                    return (
                                        <ClubCard
                                            currentMode={currentMode}
                                            img={club_data.logo}
                                            isStamped={isStamped(club_data.id)}
                                            isFavorite={isFavorite(
                                                club_data.id
                                            )}
                                            name={club_data.clubName}
                                            key={club_data.id}
                                            onClick={() =>
                                                router.push(
                                                    `/club/${club_data.id}`
                                                )
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
            <div className="fixed z-50 bottom-6 left-4 right-4 h-[72px] bg-neutral-50 rounded-2xl shadow-faq flex items-center p-3 space-x-4 pr-4">
                <select
                    value={selection}
                    onChange={(e) => setSelection(e.target.value)}
                    className="bg-transparent border-primary-500 border-[3px] text-primary-500 px-4 py-1.5 w-full flex justify-center items-center font-semibold rounded-xl h-full accent-primary-500"
                >
                    <option value="All">ทั้งหมด</option>
                    <option value="Academic">วิชาการ</option>
                    <option value="Sport">กีฬา</option>
                    <option value="Art">ศิลปะวัฒนธรรม</option>
                    <option value="CSR">CSR</option>
                    <option value="Other">อื่นๆ</option>
                </select>
                <div className="h-full aspect-square grid place-content-center">
                    {currentMode == 'Stamp' ? (
                        <FaStamp
                            className="text-2xl cursor-pointer text-primary-500"
                            onClick={handleChangeMode}
                        />
                    ) : (
                        <FaStamp
                            className="text-2xl cursor-pointer text-neutral-300"
                            onClick={handleChangeMode}
                        />
                    )}
                </div>
            </div>
        </>
    );

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
                <div className="top-0 p-[23px] pt-[50px] pb-[20vh] w-full">
                    {/* head */}
                    <div className="w-full items-center ">
                        <p className="font-bold text-white text-xl text-center sticky font-ibm">
                            {headerText}
                        </p>
                        <div className="flex flex-row gap-4 mt-[12px] sticky items-center justify-center">
                            <p
                                className={`font-bold font-ibm text-center text-white text-sm ${
                                    selection === 'All' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('All')}
                            >
                                ทั้งหมด
                            </p>
                            <p
                                className={`font-bold font-ibm text-center text-white text-sm ${
                                    selection === 'Academic' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('Academic')}
                            >
                                วิชาการ
                            </p>
                            <p
                                className={`font-bold font-ibm text-center text-white text-sm ${
                                    selection === 'Sport' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('Sport')}
                            >
                                กีฬา
                            </p>
                            <p
                                className={`font-bold font-ibm text-center text-white text-sm ${
                                    selection === 'Art' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('Art')}
                            >
                                ศิลปะวัฒนธรรม
                            </p>
                            <p
                                className={`font-bold font-ibm text-center text-white text-sm ${
                                    selection === 'CSR' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('CSR')}
                            >
                                CSR
                            </p>
                            <p
                                className={`font-bold font-ibm text-center text-white text-sm ${
                                    selection === 'Other' ? '' : 'opacity-60'
                                }`}
                                onClick={() => setSelection('Other')}
                            >
                                อื่นๆ
                            </p>
                        </div>
                    </div>

                    {/* club list */}
                    <div className="grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-[25px] w-full gap-[20px]">
                        {clubFiltered.map((club_data) => {
                            return (
                                <ClubCard
                                    currentMode={currentMode}
                                    img={club_data.logo}
                                    isStamped={isStamped(club_data.id)}
                                    isFavorite={isFavorite(club_data.id)}
                                    name={club_data.clubName}
                                    key={club_data.id}
                                    onClick={() =>
                                        router.push(`/club/${club_data.id}`)
                                    }
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
            </div>
        </>
    );
};

export default Club;
