import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Branches1 from '@/public/images/branches1.svg';
import GrainBackground from '@/public/images/grain-background.svg';
import Spore1 from '@/public/images/spore1.svg';
import { useRouter } from 'next/router';

const QRAdmin: NextPage = () => {
    const router = useRouter();
    const [clubname, setClubName] = useState('Loading...');
    const [qrData, setQRData] = useState<string>(null);
    const [timer, setTimer] = useState(null);
    const [loading, setLoading] = useState(true);

    function padWithLeadingZeros(num, totalLength) {
        return String(num).padStart(totalLength, '0');
    }

    const secondsToTime = (secs: number) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        return `${padWithLeadingZeros(hours, 2)}:${padWithLeadingZeros(
            minutes,
            2
        )}:${padWithLeadingZeros(seconds, 2)}`;
    };

    useEffect(() => {
        if (timer !== 0) {
            const clock = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);

            return () => {
                clearInterval(clock);
            };
        } else {
            setLoading(true);
        }
    }, [setLoading]);

    const getQR = async () => {
        try {
            if (router.query.id && localStorage) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/stamps/create/${router.query.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                'token'
                            )}`,
                        },
                    }
                );
                const data = await res.json();

                if (data.clubName && data.qrCode) {
                    setClubName(data.clubName);
                    setQRData(data.qrCode);
                    setTimer(5 * 60); // 5 Minutes
                    setLoading(false);
                }
                console.log(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getQR();
    }, [router.query, getQR]);

    useEffect(() => {
        if (timer === 0) getQR();
    }, [timer, getQR]);

    return (
        <div className="w-screen h-screen flex flex-col items-center px-7 py-[15vh]">
            <h1 className="font-medium text-white text-md py-3 font-ibm">
                แสกนเพื่อรับสแตมป์
            </h1>
            <h1 className="font-semibold text-white text-center text-4xl font-baijam">
                {clubname}
            </h1>
            <div
                className={`mt-[5vh] min-w-[40vh] min-h-[40vh] items-center justify-center border-white border-2 text-white relative p-3 ${
                    loading ? 'opacity-25' : ''
                }`}
            >
                {qrData ? (
                    <Image
                        src={qrData}
                        alt="QR CODE"
                        className="w-full h-full"
                        width={700}
                        height={700}
                        loading="lazy"
                    />
                ) : (
                    <h1 className="font-semibold text-white text-xl font-baijam">
                        Loading...
                    </h1>
                )}
            </div>
            <div className="mt-[5vh] min-w-max items-center justify-center text-center">
                <h1 className="font-medium text-white text-lg font-baijam">
                    เวลาแสกนที่เหลือ
                </h1>
                <h1
                    className={`font-light  text-md font-baijam ${
                        timer < 5 ? 'text-red-500' : 'text-white'
                    }`}
                >
                    {secondsToTime(timer)}
                </h1>
            </div>

            {/* Background and decorations */}
            <Image
                src={GrainBackground}
                alt="background"
                className="fixed top-0 left-0 -z-50 h-screen w-full object-cover"
                loading="lazy"
            />
            <div className="fixed top-0 left-0 bg-gradient-to-b from-transparent to-primary-900 w-screen h-screen -z-40" />
            <div className="fixed top-0 right-0 overflow-hidden w-48 h-48">
                <Image
                    src={Spore1}
                    alt=""
                    className="absolute -top-8 -right-8 rotate-[54deg]"
                    loading="lazy"
                />
            </div>
            <div className="fixed top-0 left-0 overflow-hidden w-40 h-72">
                <Image
                    src={Branches1}
                    alt=""
                    className="absolute -top-36 left-0 rotate-45"
                    priority
                />
            </div>
        </div>
    );
};

export default QRAdmin;
