import { createContext, useContext, useEffect, useState } from 'react';
import axios from '@/utils/fetcher';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/router';
import { IGroup } from 'types';

interface GroupContextProps {
    groupData: IGroup;
    allGroupData: IGroup[];
}

export const GroupContext = createContext<GroupContextProps>(null);

const GroupProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const router = useRouter();
    const { user } = useAuth();

    const [groupData, setGroupData] = useState<IGroup | null>(null);
    const [allGroupData, setAllGroupData] = useState<IGroup[] | null>(null);

    const fetchGroupData = async () => {
        await axios
            .get('/groups/user', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                setGroupData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const fetchAllGroupData = async () => {
        await axios
            .get('/groups', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                setAllGroupData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        if (user) {
            fetchAllGroupData();
            fetchGroupData();
        }
    }, [user]);

    useEffect(() => {
        if (user && groupData) {
            if (user.roles.includes('HeadHouse')) {
                router.push(`/group/${groupData.group}`);
            }
        }
    }, [user, groupData]);

    return (
        <GroupContext.Provider
            value={{
                groupData,
                allGroupData,
            }}
        >
            {children}
        </GroupContext.Provider>
    );
};

export default GroupProvider;

export const useGroup = () => {
    const context = useContext(GroupContext);

    if (context === undefined) {
        throw new Error('useGroup must be used within a GroupProvider');
    }

    return context;
};
