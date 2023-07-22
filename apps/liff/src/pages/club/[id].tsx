import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import ClubBackground from 'public/images/GrainBackground.svg';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';
import { AiFillHeart } from 'react-icons/ai';
import { useLiff } from '@/contexts/LiffContext';
import Head from 'next/head';
import Main from '@/layouts/Main';
import SponsorFooter from '@/components/SponsorFooter';

export const ClubPage = () => {
    const router = useRouter();
    const liff = useLiff();

    const [clubData, setClubData] = useState({
        id: '...',
        clubName: 'Loading...',
        tag: 'Loading...',
        previousActivity: 'Loading...',
        objective: 'Loading...',
        logo: 'https://picsum.photos/200/300',
    });
    const [scanable, setScanable] = useState(false);
    const [fav, setFav] = useState(false);
    const [favList, setFavList] = useState([] as string[]);
    const [stamps, setStamps] = useState(
        [] as {
            stampHash: string;
            timestamp: number;
        }[]
    );

    useEffect(() => {
        if (localStorage) {
            setStamps(
                (JSON.parse(localStorage.getItem('VISHNU21ST::stamps')) ||
                    []) as {
                    stampHash: string;
                    timestamp: number;
                }[]
            );
            setFavList(
                JSON.parse(localStorage.getItem('VISHNU21ST::favorites')) || []
            );
        }
    }, []);

    useEffect(() => {
        if (favList.filter((fav: string) => fav === clubData.id).length > 0)
            setFav(true);
        else setFav(false);
        localStorage.setItem('VISHNU21ST::favorites', JSON.stringify(favList));
    }, [favList, clubData]);

    useEffect(() => {
        if (stamps)
            if (
                stamps.filter((stamp) => stamp.stampHash === clubData.id)
                    .length > 0
            )
                setScanable(false);
            else setScanable(true);
        console.log(stamps, scanable, clubData);
        if (stamps && stamps.length !== 0)
            localStorage.setItem('VISHNU21ST::stamps', JSON.stringify(stamps));
    }, [stamps, clubData]);

    useEffect(() => {
        const getFAQs = async () => {
            try {
                if (router.query.id) {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}/stamps/info/${router.query.id}`
                    );
                    const data = await res.json();
                    setClubData(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getFAQs();
    }, [router.query]);

    const handleFavToggle = () => {
        if (fav) {
            setFavList(favList.filter((favId) => favId !== clubData.id));
        } else {
            setFavList([...favList, clubData.id]);
        }
    };

    const scanQr = () => {
        liff.scanCodeV2().then(async (result) => {
            const string = result.value;
            try {
                const data = JSON.parse(string);
                const stampId = data.stampId;
                const slug = data.slug;
                const timestamp = Date.now().toString();
                const res = await fetch(
                    `${
                        process.env.NEXT_PUBLIC_API_BASE_URL
                    }/stamps/validate?${new URLSearchParams({
                        stampId,
                        slug,
                        timestamp,
                    })}`
                ).then((res) => res.json());
                console.log(res);
                if (
                    res.isValid === true &&
                    res.stampHash !== undefined &&
                    scanable
                ) {
                    setStamps([
                        ...stamps,
                        {
                            stampHash: res.stampHash,
                            timestamp: parseInt(timestamp),
                        },
                    ]);
                } else {
                    alert('QR ใช้ไม่ได้นะค้าบบ :3');
                }
            } catch (error) {
                console.log(error);
                alert('Invalid QR Code');
            }
        });
    };

    return (
        <>
            <Head>
                <title>ชมรมในวิศวฯ จุฬา</title>
            </Head>
            <Main foregroundImage="full2" background>
                <div className="fixed w-full h-36 flex overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center ">
                        {/* logo bg */}
                        <picture className="w-full brightness-25 bg-white">
                            <img
                                className="object-cover object-center w-full"
                                src={clubData.logo}
                                width={72}
                                height={72}
                                alt=""
                            />
                        </picture>

                        {/* overlay logo */}
                        <div className="absolute flex flex-row items-center justify-between w-full px-[7%]">
                            <div className="relative flex flex-grow flex-row items-center ">
                                {/* glowing logo */}
                                <div className="absolute flex w-[60px] h-[60px] rounded-[20px] blur-sm bg-black/40" />
                                {/* logo box */}
                                <div className="relative flex flex-shrink-0 w-[60px] h-[60px] bg-white rounded-2xl items-center justify-center">
                                    <picture>
                                        <img
                                            className="object-cover w-[45px] h-[45px] rounded-xl flex"
                                            src={clubData.logo}
                                            width={100}
                                            height={100}
                                            alt=""
                                        />
                                    </picture>
                                </div>
                                <div className="flex flex-col pl-[20px]">
                                    {/* name */}
                                    <p className="text-white text-left font-bold text-lg font-ibm break-words inline-block">
                                        {clubData.clubName}
                                    </p>
                                    {/* tag */}
                                    <p className="text-white text-left font-semibold text-sm font-ibm">
                                        {clubData.tag}
                                    </p>
                                </div>
                            </div>

                            <AiFillHeart
                                className="flex flex-shrink-0 w-[30px] h-[30px] ml-[20px]"
                                color={fav ? 'red' : '#D9D9D9'}
                                onClick={handleFavToggle}
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-y-auto w-full h-full">
                    <div className="pt-44 px-6 space-y-6 w-full h-full mb-40">
                        <div className="py-5 px-6 flex flex-col bg-neutral-50 rounded-3xl shadow-faq text-neutral-700 space-y-2">
                            <p className="flex text-lg font-bold text-neutral-800">
                                จุดประสงค์ชมรม
                            </p>
                            <div className="flex flex-col">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {clubData.objective}
                                </ReactMarkdown>
                            </div>
                        </div>
                        <div className="py-5 px-6 flex flex-col bg-neutral-50 rounded-3xl shadow-faq text-neutral-700 space-y-2">
                            <p className="flex text-lg font-bold text-neutral-800">
                                กิจกรรมที่ผ่านมา
                            </p>
                            <div className="flex flex-col">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {clubData.previousActivity}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
            <div className="fixed z-50 bottom-6 left-4 right-4 h-[72px] bg-neutral-50 rounded-2xl shadow-faq flex items-center p-3 space-x-4 pr-4">
                <button
                    className={`w-full rounded-2xl bg-primary-500 px-4 py-3 text-white font-ibm text-base font-bold ${
                        scanable
                            ? 'hover:bg-primary-600'
                            : 'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={!scanable}
                    onClick={scanQr}
                >
                    {scanable ? 'แสกนสแตมป์ชมรม' : 'คุณได้รับสแตมป์นี้แล้ว'}
                </button>
            </div>
        </>
    );

    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7">
            {/* bg */}
            <picture>
                <img
                    className="fixed bg-[#370682] brightness-50 z-[-10] w-full h-full object-cover"
                    src={ClubBackground}
                    alt="ClubBackground"
                />
            </picture>
            {/* content */}
            <div className="absolute top-0 w-full h-full flex flex-col">
                <div className="relative w-full h-full flex flex-col overflow-auto no-scrollbar">
                    {/* header */}
                    <div className="fixed w-full h-[19vh] flex overflow-hidden">
                        <div className="relative w-full h-full flex items-center justify-center ">
                            {/* logo bg */}
                            <picture>
                                <img
                                    className="object-cover object-center brightness-25 w-full"
                                    src={clubData.logo}
                                    width={72}
                                    height={72}
                                    alt="ClubLogo"
                                />
                            </picture>

                            {/* overlay logo */}
                            <div className="absolute flex flex-row items-center justify-between w-full px-[7%]">
                                <div className="relative flex flex-grow flex-row items-center ">
                                    {/* glowing logo */}
                                    <div className="absolute flex w-[60px] h-[60px] rounded-[20px] blur-sm bg-black/40" />
                                    {/* logo box */}
                                    <div className="relative flex flex-shrink-0 w-[60px] h-[60px] bg-white rounded-[20px] items-center justify-center">
                                        <picture>
                                            <img
                                                className="object-cover w-[45px] h-[45px] rounded-[15px] flex"
                                                src={clubData.logo}
                                                width={100}
                                                height={100}
                                                alt="ClubLogo"
                                            />
                                        </picture>
                                    </div>
                                    <div className="flex flex-col pl-[20px]">
                                        {/* name */}
                                        <p className="text-white text-left font-bold text-base font-ibm break-words inline-block">
                                            {clubData.clubName}
                                        </p>
                                        {/* tag */}
                                        <p className="text-white text-left font-semibold text-xs font-ibm pt-[5px]">
                                            {clubData.tag}
                                        </p>
                                    </div>
                                </div>

                                <AiFillHeart
                                    className="flex flex-shrink-0 w-[30px] h-[30px] ml-[20px]"
                                    color={fav ? 'red' : '#D9D9D9'}
                                    onClick={handleFavToggle}
                                />
                            </div>
                        </div>
                    </div>
                    {/* details card */}
                    <div className="pt-[calc(19vh+16px)] py-[16px] px-[25px] w-full shadow-inner">
                        <div className="px-[20px] pt-[10px] pb-[16px] flex flex-col bg-[#D9D9D94D] rounded-[20px] ">
                            <p className="flex text-xl py-2 font-ibm text-white font-bold">
                                จุดประสงค์ชมรม
                            </p>
                            <div className="flex pl-[28px] pb-[10px] font-ibm text-white flex-col font-normal">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {clubData.objective}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    <div className="py-[16px] px-[25px] w-full shadow-inner">
                        <div className="px-[20px] pt-[10px] pb-[16px] flex flex-col bg-[#D9D9D94D] rounded-[20px] ">
                            <p className="flex text-xl py-2 font-ibm text-white font-bold">
                                กิจกรรมที่ผ่านมา
                            </p>
                            <div className="flex pl-[28px] pb-[10px] font-ibm text-white flex-col font-normal">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {clubData.previousActivity}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>

                    {/* contract card */}
                    <div className="px-[25px] pt-[25px] pb-[40px] text-center w-full shadow-inner">
                        <button
                            className={`max-w-full rounded-3xl bg-primary-700 px-4 py-3 text-white font-ibm text-base font-bold shadow-xl ${
                                scanable
                                    ? 'hover:bg-primary-600'
                                    : 'opacity-50 cursor-not-allowed'
                            }`}
                            disabled={!scanable}
                            onClick={scanQr}
                        >
                            {scanable
                                ? 'แสกนสแตมป์ชมรม'
                                : 'คุณได้รับสแตมป์นี้แล้ว'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubPage;
