import { NextPage } from 'next';
import Image from 'next/image';

import LoginBackground from '@/public/images/login-background.svg';
import VishnuLogo from '@/public/images/vishnu-logo.svg';
import { useState } from 'react';
import type Liff from '@line/liff';

const Login: NextPage = ({ liff }: { liff: typeof Liff }) => {
    const [studentId, setStudentId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const res = await fetch(
                // TODO: Change route later
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        studentId,
                        password,
                        lineToken: liff.getAccessToken(),
                    }),
                }
            );
            const data = await res.json();
            localStorage.setItem('token', data.token ? data.token : '');
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className="relative h-screen overflow-y-clip w-full flex flex-col items-center justify-center px-16">
            <form
                className="w-72 max-w-full h-full flex flex-col items-center justify-center gap-5"
                onSubmit={handleLogin}
            >
                <Image
                    src={VishnuLogo}
                    alt="Vishnu Logo"
                    width={180}
                    height={50}
                    className="object-contain"
                    priority
                />
                <input
                    type="text"
                    className="w-full rounded-3xl bg-secondary-700/30 px-4 py-2 text-neutral-800 font-baijam text-sm font-bold placeholder:text-neutral-500"
                    placeholder="รหัสประจำตัว"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                <input
                    type="password"
                    className="w-full rounded-3xl bg-secondary-700/30 px-4 py-2 text-neutral-800 font-baijam text-sm font-bold placeholder:text-neutral-500"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="w-44 max-w-full rounded-3xl bg-primary-700 px-4 py-3 text-white font-ibm text-base font-bold shadow-xl"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </form>
            <Image
                src={LoginBackground}
                alt="Login Background"
                fill
                className="-z-10 object-cover w-full h-full"
            />
        </div>
    );
};

export default Login;
