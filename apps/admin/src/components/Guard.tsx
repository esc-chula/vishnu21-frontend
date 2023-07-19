import { useAuth } from '@/contexts/AuthContext';
import { TRoles } from 'types';

interface GuardProps {
    children: React.ReactNode;
    allowRoles: TRoles[];
}

const Guard: React.FC<GuardProps> = ({ children, allowRoles }) => {
    const { user } = useAuth();

    const userRoles: TRoles[] = user.roles;

    if (userRoles.some((role) => allowRoles.includes(role))) {
        return <>{children}</>;
    }

    return null;
};

export default Guard;

// ยังไม่เสด ปัญหาในฝ่าย หน้าที่
