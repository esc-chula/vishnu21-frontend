import { NextPage } from 'next';

const Auth: NextPage = () => {
    return (
        <main className="grid place-content-center h-screen">
            <div className="border-neutral-200 border rounded-xl p-6 space-y-10 w-96">
                <h1 className="font-bold">เข้าสู่ระบบ Vishnu21 Admin</h1>
                <div className="flex justify-end">
                    <button className="font-semibold text-white px-4 py-2 bg-neutral-800 rounded-lg shadow-md duration-100 hover:scale-105">
                        เข้าสู่ระบบด้วย CUNET
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Auth;
