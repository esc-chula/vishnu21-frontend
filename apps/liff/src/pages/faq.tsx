import SponsorFooter from '@/components/SponsorFooter';
import FaqData from '@/constants/faq-data.json';
import Main from '@/layouts/Main';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQ: NextPage = () => {
    const [toggles, setToggles] = useState(Array(FaqData.length).fill(false));

    return (
        <>
            <Head>
                <title>FAQ</title>
            </Head>
            <Main foregroundImage="top2">
                <h1 className="font-bold text-2xl mt-12">FAQ</h1>
                <div className="w-full h-full mt-8">
                    <div className="overflow-y-auto w-full h-full space-y-4 px-6 pb-40">
                        {FaqData.map((faq) => (
                            <div className="bg-neutral-50 shadow-button rounded-2xl">
                                <button
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
                                    className="flex justify-between items-center pl-6 pr-4 py-4 w-full text-neutral-800 font-semibold text-sm cursor-pointer"
                                >
                                    <p>หิวอะ</p>
                                    <FiChevronDown
                                        className={`text-lg ${
                                            toggles[FaqData.indexOf(faq)] &&
                                            'rotate-180'
                                        }`}
                                    />
                                </button>
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
                        <SponsorFooter />
                    </div>
                </div>
            </Main>
        </>
    );
};

export default FAQ;
