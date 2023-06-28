import GroupData from '@/mocks/group-data.json';
import { useEffect, useState } from 'react';

const SendMessage: React.FC = () => {
    const [target, setTarget] = useState<string>('Everyone');
    const [messageType, setMessageType] = useState<string>('Text');
    const [selectedGroup, setSelectedGroup] = useState<string[]>([]);

    const [confirmation, setConfirmation] = useState<boolean>(false);

    const [messageContent, setMessageContent] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    useEffect(() => {
        if (!selectedImage) {
            setImagePreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedImage);
        setImagePreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedImage]);

    const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedImage(undefined);
            return;
        }
        setSelectedImage(e.target.files[0]);
    };

    const sendHandler = () => {
        setConfirmation(false);
    };

    return (
        <>
            {/* modal */}
            {confirmation ? (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
                    <div className="flex justify-center items-center relative w-full h-full px-3">
                        {/* body */}
                        <div className="z-50 bg-white rounded-lg border max-w-screen-sm w-full border-neutral-300 p-6 space-y-6">
                            <div className="flex space-x-2">
                                <div className="flex flex-col">
                                    <p className="text-sm md:text-base text-neutral-600">
                                        Target
                                    </p>
                                    <p className="font-bold text-xl flex items-start sm:items-center">
                                        <span>{target}</span>
                                        <span className="ml-4 font-medium flex space-x-3 text-base">
                                            {selectedGroup.length > 0 &&
                                            target === 'Group'
                                                ? GroupData.filter((group) =>
                                                      selectedGroup.includes(
                                                          group.group
                                                      )
                                                  )
                                                      .sort()
                                                      .map((group) => (
                                                          <p className="flex items-center space-x-2">
                                                              <span className="font-bold text-lg">
                                                                  {group.group}
                                                              </span>
                                                              <span className="text-neutral-500">
                                                                  {group.name}
                                                              </span>
                                                          </p>
                                                      ))
                                                : null}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm md:text-base text-neutral-600">
                                    Message Type
                                </p>
                                <p className="font-bold text-lg">
                                    {messageType}
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm md:text-base text-neutral-600">
                                    Message Content
                                </p>
                                <div className="whitespace-pre-wrap break-words">
                                    {messageContent}
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={sendHandler}
                                    className="bg-neutral-800 text-white font-medium rounded-lg px-6 py-2"
                                >
                                    Send
                                </button>
                            </div>
                        </div>

                        {/* background */}
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
                            <option value="Everyone">Everyone</option>
                            <option value="Registered">Registered</option>
                            <option value="Group">Group</option>
                            <option value="Update Score">Update Score</option>
                        </select>
                    </div>
                    {target === 'Group' ? (
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
                                            onClick={() => {
                                                if (
                                                    selectedGroup.includes(
                                                        group.group
                                                    )
                                                ) {
                                                    setSelectedGroup(
                                                        selectedGroup.filter(
                                                            (g) =>
                                                                g !==
                                                                group.group
                                                        )
                                                    );
                                                } else {
                                                    setSelectedGroup([
                                                        ...selectedGroup,
                                                        group.group,
                                                    ]);
                                                }
                                            }}
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
                {target !== 'Update Score' ? (
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
                                    <option value="Text">Text</option>
                                    <option value="Image">Image</option>
                                    <option value="Flex">Flex</option>
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2.5 w-full">
                                <label className="text-sm md:text-base text-neutral-600">
                                    Content{' '}
                                    {messageType === 'Flex' ? '(JSON)' : ''}{' '}
                                    {messageType === 'Image' ? '(Image)' : ''}
                                </label>
                                {messageType !== 'Image' ? (
                                    <textarea
                                        value={messageContent}
                                        onChange={(e) =>
                                            setMessageContent(e.target.value)
                                        }
                                        className="!outline-none h-36 rounded-lg border border-neutral-300 py-2 px-4 bg-transparent"
                                    />
                                ) : (
                                    <>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={onSelectImage}
                                        />
                                        {selectedImage && (
                                            <img
                                                src={imagePreview}
                                                className="max-w-lg"
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                ) : null}

                {/* submit */}
                <hr />
                <div className="flex justify-end items-center space-x-4">
                    <button
                        onClick={() => setConfirmation(true)}
                        className="border-2 text-neutral-600 font-medium rounded-lg px-6 py-2"
                    >
                        Test
                    </button>
                    <button
                        onClick={() => setConfirmation(true)}
                        className="bg-neutral-800 text-white font-medium rounded-lg px-6 py-2"
                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    );
};

export default SendMessage;
