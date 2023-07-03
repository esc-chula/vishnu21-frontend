import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import ContactItem from './components/ContactItem';
import Decorate from '@/public/images/decorate.svg';
import GrainBackground from '@/public/images/grain-background.svg';

const EmergencyContactList: NextPage = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;

        const getContacts = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/groups/emergency/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = await res.json();
                setContacts(data);
            } catch (error) {
                console.error(error);
            }
        };

        getContacts();
    }, []);

    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 pt-16 pb-48">
            <h1 className="font-bold text-white text-xl font-baijam mb-6">
                ติดต่อฉุกเฉิน
            </h1>
            <ul className="flex flex-col justify-center gap-2 items-center w-full">
                {contacts.map((contact) => (
                    <ContactItem key={contact.id} {...contact} />
                ))}
            </ul>

            {/* Background and decorations */}
            <Image
                src={GrainBackground}
                alt="background"
                className="fixed top-0 left-0 -z-50 h-screen w-full object-cover"
                loading="lazy"
            />
            <div className="fixed top-0 left-0 bg-gradient-to-b from-transparent to-primary-900 w-screen h-screen -z-40" />
            <Image
                src={Decorate}
                alt="background"
                className="fixed bottom-0 left-0 w-full max-h-48 object-cover overflow-visible -z-30"
                priority
            />
        </div>
    );
};

export default EmergencyContactList;
