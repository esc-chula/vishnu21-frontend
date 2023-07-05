import LinksData from '@/mocks/links-data.json';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash2 } from 'react-icons/fi';

const Links: React.FC = () => {
    const [linksData, setLinksData] = useState(LinksData);

    return (
        <div className="space-y-16">
            {linksData.map((link, idx) => {
                return (
                    <div key={idx} className="flex space-x-10">
                        <div className="flex flex-col justify-between h-40">
                            <button
                                onClick={() => {
                                    if (idx === 0) return;
                                    const newFaqData = [...linksData];
                                    newFaqData.splice(
                                        idx - 1,
                                        0,
                                        newFaqData.splice(idx, 1)[0]
                                    );
                                    setLinksData(newFaqData);
                                }}
                                className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg"
                            >
                                <FiChevronUp />
                            </button>
                            <button
                                onClick={() => {
                                    if (idx === linksData.length - 1) return;
                                    const newFaqData = [...linksData];
                                    newFaqData.splice(
                                        idx + 1,
                                        0,
                                        newFaqData.splice(idx, 1)[0]
                                    );
                                    setLinksData(newFaqData);
                                }}
                                className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg"
                            >
                                <FiChevronDown />
                            </button>
                            <button
                                onClick={() => {
                                    const newFaqData = [...linksData];
                                    newFaqData.splice(idx, 1);
                                    setLinksData(newFaqData);
                                }}
                                className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg"
                            >
                                <FiTrash2 />
                            </button>
                        </div>

                        <div className="flex flex-col flex-grow space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-neutral-500">
                                    Href
                                </label>
                                <input
                                    value={link.href}
                                    onChange={(e) => {
                                        const newFaqData = [...linksData];
                                        newFaqData[idx].href = e.target.value;
                                        setLinksData(newFaqData);
                                    }}
                                    className="px-4 py-2 !outline-none border border-neutral-300 rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-neutral-500">
                                    Label
                                </label>
                                <input
                                    value={link.label}
                                    onChange={(e) => {
                                        const newFaqData = [...linksData];
                                        newFaqData[idx].label = e.target.value;
                                        setLinksData(newFaqData);
                                    }}
                                    className="px-4 py-2 !outline-none border border-neutral-300 rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-neutral-500">
                                    Icon
                                </label>
                                <input
                                    value={link.icon}
                                    onChange={(e) => {
                                        const newFaqData = [...linksData];
                                        newFaqData[idx].icon = e.target.value;
                                        setLinksData(newFaqData);
                                    }}
                                    className="px-4 py-2 !outline-none border border-neutral-300 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="flex justify-end space-x-6">
                <button
                    onClick={() => {
                        setLinksData([
                            ...linksData,
                            {
                                href: '',
                                label: '',
                                icon: '',
                            },
                        ]);
                    }}
                    className="rounded-lg border border-neutral-300 px-6 py-2.5 font-medium"
                >
                    เพิ่ม Link
                </button>
                {LinksData === linksData ? (
                    <button
                        onClick={() => {}}
                        disabled
                        className="rounded-lg opacity-30 bg-neutral-800 text-white px-6 py-2.5 font-medium"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => {}}
                        className="rounded-lg bg-neutral-800 text-white px-6 py-2.5 font-medium"
                    >
                        Save
                    </button>
                )}
            </div>
        </div>
    );
};

export default Links;
