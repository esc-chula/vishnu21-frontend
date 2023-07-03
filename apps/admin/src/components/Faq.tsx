import FaqData from '@/mocks/faq-data.json';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash2 } from 'react-icons/fi';

const Faq: React.FC = () => {
    const [faqData, setFaqData] = useState(FaqData);

    return (
        <div className="space-y-16">
            {faqData.map((faq, idx) => {
                return (
                    <div key={idx} className="flex space-x-10">
                        <div className="flex flex-col justify-between">
                            <button
                                onClick={() => {
                                    if (idx === 0) return;
                                    const newFaqData = [...faqData];
                                    newFaqData.splice(
                                        idx - 1,
                                        0,
                                        newFaqData.splice(idx, 1)[0]
                                    );
                                    setFaqData(newFaqData);
                                }}
                                className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg"
                            >
                                <FiChevronUp />
                            </button>
                            <button
                                onClick={() => {
                                    if (idx === faqData.length - 1) return;
                                    const newFaqData = [...faqData];
                                    newFaqData.splice(
                                        idx + 1,
                                        0,
                                        newFaqData.splice(idx, 1)[0]
                                    );
                                    setFaqData(newFaqData);
                                }}
                                className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg"
                            >
                                <FiChevronDown />
                            </button>
                            <button
                                onClick={() => {
                                    const newFaqData = [...faqData];
                                    newFaqData.splice(idx, 1);
                                    setFaqData(newFaqData);
                                }}
                                className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg"
                            >
                                <FiTrash2 />
                            </button>
                        </div>

                        <div className="flex flex-col flex-grow space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-neutral-500">
                                    Question
                                </label>
                                <input
                                    value={faq.question}
                                    onChange={(e) => {
                                        const newFaqData = [...faqData];
                                        newFaqData[idx].question =
                                            e.target.value;
                                        setFaqData(newFaqData);
                                    }}
                                    className="px-4 py-2 !outline-none border border-neutral-300 rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-neutral-500">
                                    Answer
                                </label>
                                <input
                                    value={faq.answer}
                                    onChange={(e) => {
                                        const newFaqData = [...faqData];
                                        newFaqData[idx].answer = e.target.value;
                                        setFaqData(newFaqData);
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
                        setFaqData([
                            ...faqData,
                            {
                                question: '',
                                answer: '',
                            },
                        ]);
                    }}
                    className="rounded-lg border border-neutral-300 px-6 py-2.5 font-medium"
                >
                    เพิ่ม FAQ
                </button>
                {FaqData === faqData ? (
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

export default Faq;
