import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Loading from './Loading';
import Body from './Body';

const Loader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <Body>
                <Loading />
            </Body>
        );
    } else {
        if (!user) {
            if (router.pathname === '/login') {
                return <>{children}</>;
            } else {
                return (
                    <Body>
                        <Loading />
                    </Body>
                );
            }
        } else {
            return <>{children}</>;
        }
    }
};

export default Loader;
