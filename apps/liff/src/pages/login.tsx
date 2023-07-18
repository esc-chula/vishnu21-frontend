import { NextPage } from 'next';
import Image from 'next/image';

import LoginBackground from '@/public/images/login-background.svg';
import VishnuLogo from '@/public/images/vishnu-logo.svg';
import { useState } from 'react';
import type Liff from '@line/liff';
import { useAuth } from '@/contexts/AuthContext';

const Login: NextPage = ({ liff }: { liff: typeof Liff }) => {
    const { login } = useAuth();

    const [studentId, setStudentId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className="relative h-screen overflow-y-clip w-full flex flex-col items-center justify-center px-16">
            <form
                className="w-72 max-w-full h-full flex flex-col items-center justify-center gap-5"
                onSubmit={(e) =>
                    login(e, {
                        studentId: studentId,
                        password: password,
                        lineToken: liff.getAccessToken(),
                    })
                }
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
                    name="studentId"
                    type="text"
                    className="w-full rounded-3xl bg-secondary-700/30 px-4 py-2 text-neutral-800 font-baijam text-sm font-bold placeholder:text-neutral-500"
                    placeholder="รหัสประจำตัว"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    className="w-full rounded-3xl bg-secondary-700/30 px-4 py-2 text-neutral-800 font-baijam text-sm font-bold placeholder:text-neutral-500"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-44 max-w-full rounded-3xl bg-primary-700 px-4 py-3 text-white font-ibm text-base font-bold shadow-xl"
                >
                    Login
                </button>
            </form>
            {/* <Image
                src={LoginBackground}
                alt="Login Background"
                fill
                className="-z-10 object-cover w-full h-full"
            /> */}
        </div>
    );
};

export default Login;
