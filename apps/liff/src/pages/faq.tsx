import SponsorFooter from '@/components/SponsorFooter';
import FaqData from '@/constants/faq-data.json';
import { useLiff } from '@/contexts/LiffContext';
import Main from '@/layouts/Main';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQ: NextPage = () => {
    const liff = useLiff();

    const [userQuestion, setUserQuestion] = useState<string>('');
    const [toggles, setToggles] = useState(Array(FaqData.length).fill(false));

    const sendUserQuestionHandler = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        await liff.sendMessages([
            {
                type: 'text',
                text: userQuestion,
            },
        ]);
        setUserQuestion('');
    };

    return (
        <>
            <Head>
                <title>FAQ</title>
            </Head>
            <Main foregroundImage="top2">
                <h1 className="font-bold text-2xl mt-12">FAQ</h1>
                <div className="w-full h-full mt-8">
                    <div className="overflow-y-auto w-full h-full space-y-4 px-6 pb-60">
                        {FaqData.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-neutral-50 shadow-button rounded-2xl"
                            >
                                <div
                                    onClick={() =>
                                        setToggles((prev) => {
                                            const newToggles = [...prev];
                                            newToggles[FaqData.indexOf(faq)] =
                                                !newToggles[
                                                    FaqData.indexOf(faq)
                                                ];
                                            return newToggles;
                                        })
                                    }
                                    className="flex justify-between items-center pl-6 pr-4 py-4 w-full text-neutral-800 font-semibold text-sm select-none"
                                >
                                    <p>{faq.question}</p>
                                    <FiChevronDown
                                        className={`text-lg ${
                                            toggles[FaqData.indexOf(faq)] &&
                                            'rotate-180'
                                        }`}
                                    />
                                </div>
                                <div
                                    className={`overflow-y-auto text-neutral-600 font-baijam font-medium text-sm sm:text-base leading-relaxed sm:leading-relaxed ${
                                        toggles[FaqData.indexOf(faq)]
                                            ? 'h-auto'
                                            : 'h-0'
                                    }`}
                                >
                                    <div className="px-6 pb-6 pt-2">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <form
                            onSubmit={sendUserQuestionHandler}
                            className="flex flex-col items-center py-8"
                        >
                            <label>อยากถามเพิ่มสามารถพิมพ์ในนี้ได้เลย!</label>
                            <textarea
                                className="outline-none px-4 py-3 rounded-2xl bg-transparent border-2 border-neutral-50 border-opacity-30 placeholder:text-opacity-60 placeholder:text-neutral-50 font-semibold placeholder:font-normal placeholder:text-xs backdrop-blur-[2.5px] focus:border-opacity-60 duration-200 focus:h-40 focus:w-full mt-2 mb-6"
                                placeholder="แนะนำร้านอาหารให้หน่อยได้มั้ยงับ..."
                                value={userQuestion}
                                onChange={(e) => {
                                    setUserQuestion(e.target.value);
                                }}
                            />
                            {userQuestion && (
                                <button
                                    type="submit"
                                    className="text-primary-600 bg-white shadow-button rounded-xl px-5 py-2.5 font-semibold"
                                >
                                    ส่ง
                                </button>
                            )}
                        </form>
                        <SponsorFooter />
                    </div>
                </div>
            </Main>
            <div className="fixed z-50 bottom-6 left-4 right-4 h-[72px] bg-neutral-50 rounded-2xl shadow-faq flex items-center px-5 py-3 space-x-2">
                <Link
                    href="/faq"
                    className="bg-primary-500 text-white px-4 py-1.5 w-full flex justify-center items-center font-bold rounded-xl h-full"
                >
                    FAQ
                </Link>
                <Link
                    href="/rules"
                    className="text-primary-500 px-4 py-1.5 w-full flex justify-center items-center font-bold rounded-xl h-full"
                >
                    กฏค่าย
                </Link>
            </div>
        </>
    );
};

export default FAQ;
