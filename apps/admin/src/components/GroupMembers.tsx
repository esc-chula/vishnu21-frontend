import UserData from '@/mocks/user-data.json';
import { useState } from 'react';

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
            <hr />
            <div>
                {UserData.filter((user) => user.role === selectedPage).map(
                    (user) => (
                        <div>{user.firstname}</div>
                    )
                )}
            </div>
        </div>
    );
};

export default GroupMembers;
