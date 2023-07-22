import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Branches1 from '@/public/images/branches1.svg';
import GrainBackground from '@/public/images/grain-background.svg';
import Spore1 from '@/public/images/spore1.svg';
import QRCode from 'react-qr-code';
import Main from '@/layouts/Main';

const QRRequestPage = () => {
    const router = useRouter();
    const [qrCode, setQrCode] = useState<string>(
        '0401c8cf-3df7-46b7-9ede-9bffbe4a48c2'
    );

    function generateRandomHash(length: number) {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charCount = characters.length;
        let hash = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charCount);
            hash += characters.charAt(randomIndex);
        }

        return hash;
    }

    useEffect(() => {
        setQrCode(generateRandomHash(60));
    }, []);

    return (
        <Main foregroundImage="full1">
            <div className="grid place-content-center w-full h-full ">
                <QRCode value={qrCode} size={200} />
            </div>
        </Main>
    );
};

export default QRRequestPage;
