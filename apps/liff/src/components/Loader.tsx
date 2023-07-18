import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Loading from './Loading';

const Loader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Loading />;
    } else {
        if (!user) {
            if (router.pathname === '/login') {
                return <>{children}</>;
            } else {
                return <Loading />;
            }
        } else {
            return <>{children}</>;
        }
    }
};

export default Loader;
