import axios from '@/utils/fetcher';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiEdit, FiTrash2 } from 'react-icons/fi';
import GroupHomePageMock from './GroupHomePageMock';
import GroupHomePageAdminPost from './GroupHomePageAdminPost';
import Image from 'next/image';
import { useGroupInformation } from '@/pages/group/[group]';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/router';
import { IPost } from 'types';

interface GroupHomePageProps {
    posts: IPost[];
}

const GroupHomePage: React.FC<GroupHomePageProps> = ({ posts }) => {
    const router = useRouter();

    const { groupInformation } = useGroupInformation();

    const [expanded, setExpanded] = useState<boolean>(true);
    const [postContent, setPostContent] = useState<string>('');
    const [selectedExistingPostId, setSelectedExistingPostId] =
        useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [action, setAction] = useState<'create' | 'update'>('create');

    useEffect(() => {
        if (postContent === '<p></p>' || postContent === '<p><br></p>') {
            setPostContent('');
        }
    }, [postContent]);

    const createPost = async () => {
        if (isLoading) return;

        if (postContent === '') return;

        setIsLoading(true);

        await axios
            .post(
                `/posts/group/${groupInformation.group}`,
                {
                    title: '',
                    content: postContent,
                    description: '',
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setIsLoading(false);
                router.reload();
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const updatePost = async () => {
        if (isLoading) return;

        if (postContent === '') return;

        setIsLoading(true);

        await axios
            .patch(
                `/posts/${selectedExistingPostId}`,
                {
                    content: postContent,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setIsLoading(false);
                router.reload();
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const deletePost = async () => {
        if (isLoading) return;

        setIsLoading(true);

        await axios
            .delete(`/posts/${selectedExistingPostId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setIsLoading(false);
                router.reload();
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

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
                            value={postContent}
                            onChange={setPostContent}
                            className="h-48 pb-10"
                        />
                        <div className="flex justify-end space-x-5 h-10">
                            {action === 'update' ? (
                                <>
                                    <button
                                        onClick={() => {
                                            setAction('create');
                                            setPostContent('');
                                            setSelectedExistingPostId('');
                                        }}
                                        className="border-neutral-300 border-2 text-neutral-500 font-medium rounded-lg px-6 py-2"
                                    >
                                        ยกเลิก
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    'ต้องการลบโพสต์นี้ใช่หรือไม่'
                                                )
                                            )
                                                deletePost();
                                        }}
                                        className="border-red-300 border-2 text-red-500 font-medium rounded-lg px-6 py-2"
                                    >
                                        ลบโพสต์
                                    </button>
                                </>
                            ) : null}

                            <button
                                disabled={isLoading}
                                onClick={() => {
                                    if (action === 'create') createPost();
                                    else if (action === 'update') updatePost();
                                }}
                                className="bg-neutral-800 text-white font-medium rounded-lg px-6 py-2"
                            >
                                {isLoading
                                    ? 'loading'
                                    : action === 'create'
                                    ? 'โพสต์'
                                    : 'อัปเดต'}
                            </button>
                        </div>
                        <hr />
                        <h3 className="font-semibold text-lg">ประวัติโพสต์</h3>
                        {posts.map((post) => (
                            <div
                                key={post.postId}
                                className="flex flex-col items-end space-y-4 relative group"
                            >
                                <div
                                    id="admin-post-content"
                                    className="w-full bg-white rounded-xl border border-neutral-300 p-5"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content,
                                    }}
                                ></div>
                                <div className="flex absolute -top-5 group-hover:-top-8 opacity-0 group-hover:opacity-100 duration-200 z-10 text-neutral-800">
                                    <button
                                        onClick={() => {
                                            setAction('update');
                                            setPostContent(post.content);
                                            setSelectedExistingPostId(
                                                post.postId
                                            );
                                        }}
                                        className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg m-1.5"
                                    >
                                        <FiEdit />
                                    </button>
                                </div>
                            </div>
                        ))}
                        {/* <GroupHomePageAdminPost /> */}
                    </div>
                    <div className="w-[540px]">
                        <div className="border-neutral-200 border rounded-xl p-6 space-y-2">
                            <GroupHomePageMock>
                                <div className="z-20 absolute top-0 left-0 right-0 bottom-0 flex flex-col pt-12 px-5">
                                    <div className="w-full space-y-3">
                                        {postContent ? (
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: postContent,
                                                }}
                                                className="bg-white rounded-xl text-xs px-3 py-4"
                                                id="post-content"
                                            ></div>
                                        ) : (
                                            posts.map((post) => (
                                                <div
                                                    key={post.postId}
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.content,
                                                    }}
                                                    className="bg-white rounded-xl text-xs px-3 py-4"
                                                    id="post-content"
                                                ></div>
                                            ))
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
