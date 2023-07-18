import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const { user, isLoading } = useAuth();

    const LoadingPage = () => {
        return (
            <div className="grid place-content-center h-screen w-full text-center text-5xl">
                Loading
            </div>
        );
    };

    if (isLoading) {
        return <LoadingPage />;
    } else {
        if (!user) {
            if (router.pathname === '/login') {
                return <>{children}</>;
            } else {
                return <LoadingPage />;
            }
        } else {
            return <>{children}</>;
        }
    }
};

export default Loading;
