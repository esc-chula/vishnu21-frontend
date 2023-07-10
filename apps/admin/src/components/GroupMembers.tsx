import UserData from '@/mocks/user-data.json';
import { useState } from 'react';
import MemberTableRow from './table/MemberTableRow';

const GroupMembers: React.FC = () => {
    const pages = ['intania107', 'intania106'];
    const [selectedPage, setSelectedPage] = useState<typeof pages[number]>(
        pages[0]
    );

    return (
        <div className="space-y-4">
            <div className="flex space-x-3">
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => setSelectedPage(page)}
                        className={`${
                            page === selectedPage
                                ? 'bg-neutral-800 text-white'
                                : 'border border-neutral-300'
                        } px-3.5 py-1.5 rounded-lg text-sm`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <div>
                <MemberTableRow
                    header
                    firstName="ชื่อจริง"
                    lastName="นามสกุล"
                    nickName="ชื่อเล่น"
                    gender="เพศ"
                    studentId="เลขนิสิต"
                    lineUserId="LINE"
                />
                {UserData.filter((user) => user.role === selectedPage).map(
                    (user) => (
                        <MemberTableRow
                            key={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            nickName={user.nickName}
                            gender={user.gender}
                            studentId={user.studentId}
                            lineUserId={user.lineUserId}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default GroupMembers;
