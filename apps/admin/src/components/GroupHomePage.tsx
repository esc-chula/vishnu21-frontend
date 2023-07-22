import axios from '@/utils/fetcher';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import GroupHomePageMock from './GroupHomePageMock';
import GroupHomePageAdminPost from './GroupHomePageAdminPost';
import Image from 'next/image';
import { useGroupInformation } from '@/pages/group/[group]';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const GroupHomePage: React.FC = () => {
    const { groupInformation } = useGroupInformation();

    const [expanded, setExpanded] = useState<boolean>(true);
    const [newPostContent, setNewPostContent] = useState<string>('');

    useEffect(() => {
        if (newPostContent === '<p></p>' || newPostContent === '<p><br></p>') {
            setNewPostContent('');
        }
    }, [newPostContent]);

    const createPost = async () => {
        await axios.post(`/posts/group/${groupInformation.group}`, {
            title: '',
            content: '',
            description: '',
        });
    };

    const updatePost = async () => {};

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
                        <ReactQuill
                            value={newPostContent}
                            onChange={setNewPostContent}
                            className="h-48 pb-10"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => {
                                    console.log(newPostContent);
                                }}
                                className="bg-neutral-800 text-white font-medium rounded-lg px-6 py-2"
                            >
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
                            <GroupHomePageMock>
                                <div className="z-20 absolute top-0 left-0 right-0 bottom-0 flex flex-col pt-12 px-5">
                                    <div className="w-full">
                                        {newPostContent ? (
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: newPostContent,
                                                }}
                                                className="bg-white rounded-xl text-xs px-3 py-4"
                                                id="post-content"
                                            ></div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                                <div className="z-10 absolute top-0 left-0 right-0 bottom-0 bg-white/20 backdrop-blur-md"></div>
                                <div className="z-0 absolute top-0 left-0 right-0 bottom-0 scale-105">
                                    <Image
                                        src={require(`@/public/images/banners/${groupInformation.group}.png`)}
                                        alt="Group Banner"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </GroupHomePageMock>
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default GroupHomePage;
