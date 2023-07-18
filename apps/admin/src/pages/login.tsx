import { useAuth } from '@/contexts/AuthContext';
import { NextPage } from 'next';

const Login: NextPage = () => {
    const { login } = useAuth();

    return (
        <main className="grid place-content-center h-screen">
            <div className="border-neutral-200 border rounded-xl p-6 space-y-8 w-80">
                <h1 className="font-bold">เข้าสู่ระบบ Vishnu21 Admin</h1>
                <form onSubmit={login} className="space-y-4 pb-4">
                    <div>
                        <label className="text-sm text-gray-500">
                            Student ID
                        </label>
                        <input
                            name="studentId"
                            className="!outline-none px-4 py-2 border-neutral-300 border w-full rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="!outline-none px-4 py-2 border-neutral-300 border w-full rounded-lg"
                        />
                    </div>
                    <div className="flex justify-end pt-6">
                        <button
                            type="submit"
                            className="font-semibold text-white px-4 py-2 !bg-neutral-800 rounded-lg shadow-md duration-200 hover:scale-105"
                        >
                            เข้าสู่ระบบด้วย CUNET
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;
