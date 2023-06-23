import GroupData from '@/mocks/group-data.json';
import { useState } from 'react';

const SendMessage: React.FC = () => {
    const [target, setTarget] = useState<string>('everyone');
    const [messageType, setMessageType] = useState<string>('text');
    const [confirmation, setConfirmation] = useState<boolean>(false);

    return (
        <>
            {/* modal */}
            {confirmation ? (
                <div className="fixed top-0 left-0 right-0 bottom-0">
                    <div className="flex justify-center items-center relative w-full h-full">
                        <div className="z-50 bg-white rounded-lg border border-neutral-300 p-20"></div>
                        <div
                            onClick={() => setConfirmation(false)}
                            className="absolute z-40 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-sm"
                        ></div>
                    </div>
                </div>
            ) : null}

            {/* form */}
            <div className="space-y-6">
                {/* target */}
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    <div className="flex flex-col space-y-2.5">
                        <label className="text-sm md:text-base text-neutral-600">
                            Target
                        </label>
                        <select
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            className="bg-transparent rounded-lg border border-neutral-300 px-4 py-2 w-full md:w-40"
                        >
                            <option value="everyone">Everyone</option>
                            <option value="registered">Registered</option>
                            <option value="group">Group</option>
                            <option value="update-score">Update Score</option>
                        </select>
                    </div>
                    {target === 'group' ? (
                        <div className="flex flex-col space-y-2.5">
                            <label className="text-sm md:text-base text-neutral-600">
                                Group
                            </label>
                            <div className="flex flex-wrap -mx-2 -my-1">
                                {GroupData.map((group) => (
                                    <div
                                        key={group.group}
                                        className="flex space-x-2 mx-2 my-1"
                                    >
                                        <input
                                            id={group.group}
                                            name={group.group}
                                            type="checkbox"
                                        />
                                        <label
                                            htmlFor={group.group}
                                            className="select-none flex items-center space-x-2 whitespace-nowrap"
                                        >
                                            <span className="font-bold text-lg">
                                                {group.group}
                                            </span>
                                            <span className="text-neutral-500">
                                                {group.name}
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>

                {/* input */}
                {target !== 'update-score' ? (
                    <>
                        <hr />
                        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                            <div className="flex flex-col space-y-2.5">
                                <label className="text-sm md:text-base text-neutral-600">
                                    Message Type
                                </label>
                                <select
                                    value={messageType}
                                    onChange={(e) =>
                                        setMessageType(e.target.value)
                                    }
                                    className="bg-transparent rounded-lg border border-neutral-300 px-4 py-2 w-full md:w-40"
                                >
                                    <option value="text">Text</option>
                                    <option value="image">Image</option>
                                    <option value="flex">Flex</option>
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2.5 w-full">
                                <label className="text-sm md:text-base text-neutral-600">
                                    Content{' '}
                                    {messageType === 'flex' ? '(JSON)' : ''}{' '}
                                    {messageType === 'image' ? '(Image)' : ''}
                                </label>
                                {messageType !== 'image' ? (
                                    <textarea className="!outline-none h-36 rounded-lg border border-neutral-300 py-2 px-4 bg-transparent" />
                                ) : (
                                    <input type="file" accept="image/*" />
                                )}
                            </div>
                        </div>
                    </>
                ) : null}

                {/* submit */}
                <hr />
                <div className="flex justify-end items-center space-x-4">
                    {' '}
                    <button
                        onClick={() => setConfirmation(true)}
                        className="border-2 text-neutral-600 font-medium rounded-lg px-6 py-2 duration-200 hover:scale-105"
                    >
                        Test
                    </button>
                    <button
                        onClick={() => setConfirmation(true)}
                        className="bg-neutral-800 text-white font-medium rounded-lg px-6 py-2 duration-200 hover:scale-105"
                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    );
};

export default SendMessage;
