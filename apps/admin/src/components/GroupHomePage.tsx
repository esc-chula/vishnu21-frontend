import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import GroupHomePageMock from './GroupHomePageMock';
import GroupHomePageAdminPost from './GroupHomePageAdminPost';

const GroupHomePage: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(true);

    return (
        <section id="" className="space-y-6">
            <div
                onClick={() => setExpanded(!expanded)}
                className={`flex justify-between items-center cursor-pointer select-none`}
            >
                <h2 className="text-xl font-bold">Group Home Page</h2>
                {expanded ? (
                    <FiChevronDown className="text-xl" />
                ) : (
                    <FiChevronUp className="text-xl" />
                )}
            </div>
            {expanded ? (
                <div className="flex space-x-6">
                    <div className="w-full border-neutral-200 border rounded-xl py-8 px-6 space-y-4">
                        <h3 className="font-semibold text-lg">เพิ่มโพสต์</h3>
                        <textarea className="!outline-none w-full h-28 rounded-lg border border-neutral-300 py-2 px-3 bg-transparent" />
                        <div className="flex justify-end">
                            <button className="bg-neutral-800 text-white font-medium rounded-lg px-6 py-2">
                                โพสต์
                            </button>
                        </div>
                        <hr />
                        <h3 className="font-semibold text-lg">ประวัติโพสต์</h3>
                        <GroupHomePageAdminPost />
                        <GroupHomePageAdminPost />
                    </div>
                    <div className="w-[540px]">
                        <div className="border-neutral-200 border rounded-xl p-6 space-y-2">
                            <GroupHomePageMock></GroupHomePageMock>
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default GroupHomePage;
