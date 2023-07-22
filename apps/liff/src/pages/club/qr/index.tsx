import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Branches1 from '@/public/images/branches1.svg';
import GrainBackground from '@/public/images/grain-background.svg';
import Spore1 from '@/public/images/spore1.svg';

const QRRequestPage = () => {
    const router = useRouter();
    const [qrCode, setQrCode] = useState<string | null>(null);
    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center px-7 py-16">
            <h1 className="font-semibold text-white text-3xl font-ibm">
                QR Code Requester
            </h1>
            <div className="w-1/2 min-w-max h-8 mt-4 flex items-center py-5 px-3 justify-center border-white border-2 rounded-3xl text-white relative z-10">
                <input
                    type="text"
                    name="qrCode"
                    value={qrCode}
                    placeholder="Club Code"
                    className="w-full h-8 bg-transparent text-white text-md my-3 pl-6 pr-4 font-semibold placeholder:text-white/80 focus:outline-none"
                    onInput={(e) => {
                        e.preventDefault();
                        setQrCode(e.currentTarget.value);
                    }}
                />
            </div>
            <button
                className="button text-white text-center px-5 py-3 border-2 border-3xl rounded-3xl my-10"
                onClick={() => {
                    router.push(`/club/qr/${qrCode}`);
                }}
            >
                Request
            </button>
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

export default QRRequestPage;
