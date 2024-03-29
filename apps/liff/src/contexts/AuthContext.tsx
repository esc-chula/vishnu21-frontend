import { createContext, useContext, useEffect, useState } from 'react';
import axios from '@/utils/fetcher';
import { ILineProfile, IUser } from 'types';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';
import { useLiff } from './LiffContext';

interface AuthContextProps {
    login: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    user: IUser;
    fetchUser: () => Promise<void>;
    lineUserProfile: ILineProfile;
}

export const AuthContext = createContext<AuthContextProps>(null);
const AuthProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const liff = useLiff();
    const router = useRouter();
    const redirect = router.query.redirect as string;
    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState<IUser | null>(null);
    const [lineUserProfile, setLineUserProfile] = useState<ILineProfile | null>(
        null
    );

    const fetchLineUserProfile = async () => {
        const profile = await liff
            .getProfile()
            .then((res) => res as ILineProfile)
            .catch(() => null);
        setLineUserProfile(profile);
    };

    const fetchUser = async () => {
        await axios
            .get('/users/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data));

                setUser(res.data);
                setIsLoading(false);
                if (router.pathname.includes('login')) {
                    router.push(redirect || '/house');
                }
            })
            .catch((err) => {
                console.error(err);
                setUser(null);
                setIsLoading(false);
                if (!router.pathname.includes('login')) {
                    router.push('/login?redirect=' + router.asPath);
                }
            });
    };

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const studentId = e.currentTarget.studentId.value;
        const password = e.currentTarget.password.value;
        const lineToken = liff ? liff.getAccessToken() : null;

        setIsLoading(true);

        if (!studentId || !password) {
            setIsLoading(false);
            return;
        }

        await axios
            .post('/users/login', {
                studentId,
                password,
                lineToken,
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                fetchUser();
            })
            .catch((err) => {
                console.error(err);
                localStorage.removeItem('token');
                setIsLoading(false);
            });
    };

    useEffect(() => {
        setUser(
            localStorage.getItem('user')
                ? JSON.parse(localStorage.getItem('user'))
                : null
        );
        fetchUser();
    }, []);

    useEffect(() => {
        if (liff) fetchLineUserProfile();
    }, [liff]);

    return (
        <AuthContext.Provider
            value={{
                login,
                isLoading,
                user,
                fetchUser,
                lineUserProfile,
            }}
        >
            <Loader>{children}</Loader>
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return context;
};
