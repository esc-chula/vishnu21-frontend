import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

const Navigation: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full border-neutral-200 border-b h-14 flex justify-center px-5">
            <div className="w-full max-w-screen-xl h-full flex items-center justify-between">
                <Link href="/" className="font-bold text-neutral-900">
                    Vishnu21 Admin
                </Link>
                <button className="rounded-full border-neutral-200 border pl-4 p-1.5 flex items-center space-x-3">
                    <p className="text-sm font-semibold text-neutral-700">
                        {user.studentId}
                    </p>
                    <div className="w-7 h-7 bg-neutral-200 rounded-full"></div>
                </button>
            </div>
        </div>
    );
};

export default Navigation;
