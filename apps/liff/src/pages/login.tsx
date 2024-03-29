import { useAuth } from '@/contexts/AuthContext';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Main from '@/layouts/Main';

const Login: NextPage = () => {
    const router = useRouter();
    const redirect = router.query.redirect as string;
    const { user, login, lineUserProfile } = useAuth();
    const [username, setUsername] = useState('...');

    useEffect(() => {
        if (user) router.push(redirect || '/house');
    }, [user, router, redirect]);

    useEffect(() => {
        if (lineUserProfile && lineUserProfile.displayName)
            setUsername(lineUserProfile.displayName);
    }, [lineUserProfile]);

    return (
        <>
            <Head>
                <title>เข้าสู่ระบบด้วย CUNET</title>
            </Head>
            <Main foregroundImage="full1">
                <div className="grid place-content-center h-full w-full">
                    <h1 className="text-white text-center text-2xl text-bold py-8">
                        เข้าสู่ระบบ
                    </h1>
                    <form
                        className="flex flex-col items-center justify-center gap-6 text-neutral-50"
                        onSubmit={login}
                    >
                        <input
                            name="studentId"
                            type="text"
                            className="!outline-none px-5 py-2.5 rounded-2xl bg-transparent border-2 border-neutral-50 border-opacity-30 placeholder:text-opacity-60 placeholder:text-neutral-50 font-semibold placeholder:font-normal backdrop-blur-[2.5px] focus:border-opacity-60 duration-200"
                            placeholder="รหัสนิสิต"
                        />

                        <input
                            name="password"
                            type="password"
                            className="!outline-none px-5 py-2.5 rounded-2xl bg-transparent border-2 border-neutral-50 border-opacity-30 placeholder:text-opacity-60 placeholder:text-neutral-50 font-semibold placeholder:font-normal backdrop-blur-[2.5px] focus:border-opacity-60 duration-200"
                            placeholder="รหัสผ่าน CUNET"
                        />
                        <p className="text-grey text-xs text-light">
                            Logging in as <b>{username}</b>
                        </p>
                        <button
                            type="submit"
                            className="bg-neutral-50 shadow-button rounded-2xl w-48 py-3 text-sm text-primary-600 font-bold"
                        >
                            เข้าสู่ระบบ
                        </button>
                    </form>
                </div>
            </Main>
            <div className="relative h-full w-full grid place-content-center bg-primary-800 bg-[url('/images/grained_background.jpg')] bg-repeat bg-[length:300px_300px]"></div>
            <div
                className={`z-10 absolute -top-44 -bottom-44 -left-44 -right-44 rounded-[100%] pointer-events-none`}
                style={{
                    background:
                        'radial-gradient(50% 50.00% at 50% 50.00%, rgba(19, 5, 49, 0.00) 27.04%, #130531 73.56%)',
                }}
            ></div>
        </>
    );
};

export default Login;
