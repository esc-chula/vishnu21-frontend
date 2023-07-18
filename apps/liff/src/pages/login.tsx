import LoginBackground from '@/public/images/assets/login_background.png';
import { useAuth } from '@/contexts/AuthContext';
import { NextPage } from 'next';
import Image from 'next/image';

const Login: NextPage = () => {
    const { login } = useAuth();

    return (
        <>
            <div className="relative h-full w-full grid place-content-center bg-primary-800 bg-[url('/images/grained_background.jpg')] bg-repeat bg-[length:300px_300px]">
                <form
                    className="flex flex-col items-center justify-center gap-6 text-neutral-50"
                    onSubmit={login}
                >
                    <div className="flex flex-col">
                        <label className="text-sm opacity-80 mb-2 ml-2">
                            รหัสนิสิต
                        </label>
                        <input
                            name="studentId"
                            type="text"
                            className="!outline-none px-5 py-2.5 rounded-2xl bg-transparent border-2 border-neutral-50 border-opacity-30 placeholder:text-opacity-60 placeholder:text-neutral-50 font-semibold placeholder:font-normal backdrop-blur-[2.5px]"
                            placeholder="Ex. 663..."
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm opacity-80 mb-2 ml-2">
                            รหัสผ่าน CUNET
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="!outline-none px-5 py-2.5 rounded-2xl bg-transparent border-2 border-neutral-50 border-opacity-30 placeholder:text-opacity-60 placeholder:text-neutral-50 font-semibold placeholder:font-normal backdrop-blur-[2.5px]"
                            placeholder="รหัสผ่าน"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-neutral-50 shadow-button rounded-2xl w-48 py-3 text-sm text-primary-600 font-bold mt-4"
                    >
                        เข้าสู่ระบบ
                    </button>
                </form>
            </div>
            <div
                className={`z-10 absolute -top-44 -bottom-44 -left-44 -right-44 rounded-[100%] pointer-events-none`}
                style={{
                    background:
                        'radial-gradient(50% 50.00% at 50% 50.00%, rgba(19, 5, 49, 0.00) 27.04%, #130531 73.56%)',
                }}
            ></div>
            <div className="z-20 absolute top-0 left-0 right-0 bottom-0 pointer-events-none select-none">
                <div className="relative flex justify-center items-center w-full h-full">
                    <Image
                        src={LoginBackground}
                        alt=""
                        fill
                        className="scale-105 object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default Login;
