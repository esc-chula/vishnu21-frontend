import { createContext, useContext, useEffect, useState } from 'react';
import axios from '@/utils/fetcher';
import { IGroup, IUser } from 'types';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

interface AuthContextProps {
    login: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    user: IUser;
}

export const AuthContext = createContext<AuthContextProps>(null);

const AuthProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState<IUser | null>(null);

    const fetchUser = async () => {
        await axios
            .get('/users/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                setUser(res.data);
                setIsLoading(false);
                if (router.pathname === '/login') {
                    router.push('/');
                }
            })
            .catch((err) => {
                console.error(err);
                setUser(null);
                setIsLoading(false);
                if (router.pathname !== '/login') {
                    router.push('/login');
                }
            });
    };

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const studentId = e.currentTarget.studentId.value;
        const password = e.currentTarget.password.value;

        setIsLoading(true);

        if (!studentId || !password) {
            setIsLoading(false);
            return;
        }

        const isStudentIdValid = /^653\d{5}21$/.test(studentId);

        if (!isStudentIdValid) {
            setIsLoading(false);
            return;
        }

        await axios
            .post('/users/login', {
                studentId,
                password,
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
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                login,
                isLoading,
                user,
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
