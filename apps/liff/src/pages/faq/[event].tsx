import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useReducer } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import FAQItem from './components/FAQItem';
import type { FAQItemProps } from './components/FAQItem';

import Branches1 from '@/public/images/branches1.svg';
import GrainBackground from '@/public/images/grain-background.svg';
import Spore1 from '@/public/images/spore1.svg';
import { useRouter } from 'next/router';

interface FAQState {
    faqs: FAQItemProps[];
    filteredFaqs: FAQItemProps[];
    search: string;
}

type FAQAction =
    | { type: 'SET_FAQS'; faqs: FAQItemProps[] }
    | { type: 'SET_FILTERED_FAQS'; filteredFaqs: FAQItemProps[] }
    | { type: 'SET_SEARCH'; search: string };

const faqReducer = (state: FAQState, action: FAQAction): FAQState => {
    switch (action.type) {
        case 'SET_FAQS':
            return { ...state, faqs: action.faqs, filteredFaqs: action.faqs };
        case 'SET_FILTERED_FAQS':
            return { ...state, filteredFaqs: action.filteredFaqs };
        case 'SET_SEARCH':
            return { ...state, search: action.search };
        default:
            return state;
    }
};

const FAQ: NextPage = () => {
    const router = useRouter();

    const initialState: FAQState = {
        faqs: [],
        filteredFaqs: [],
        search: '',
    };

    const [state, dispatch] = useReducer(faqReducer, initialState);
    const { faqs, filteredFaqs, search } = state;

    useEffect(() => {
        const getFAQs = async () => {
            try {
                if (router.query.event) {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/${router.query.event}`
                    );
                    const data = await res.json();
                    dispatch({ type: 'SET_FAQS', faqs: data });
                }
            } catch (error) {
                console.error(error);
            }
        };
        getFAQs();
    }, [router.query]);

    useEffect(() => {
        if (!search || search === '') {
            dispatch({ type: 'SET_FILTERED_FAQS', filteredFaqs: faqs });
            return;
        }

        const filtered = faqs.filter((faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase())
        );
        dispatch({ type: 'SET_FILTERED_FAQS', filteredFaqs: filtered });
    }, [search, faqs]);

    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 py-16">
            <h1 className="font-semibold text-white text-xl font-ibm">
                FAQ&apos;s
            </h1>
            <h1 className="font-semibold text-white text-xl font-baijam">
                คำถามที่พบบ่อย
            </h1>
            <div className="w-1/2 min-w-max h-8 mt-4 flex items-center justify-center border-white border-2 rounded-3xl text-white relative z-10">
                <AiOutlineSearch className="w-3 h-3 absolute left-2" />
                <input
                    type="text"
                    className="w-full h-8 bg-transparent text-white text-xs pl-6 pr-4 font-semibold placeholder:text-white/80 focus:outline-none"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => {
                        dispatch({
                            type: 'SET_SEARCH',
                            search: e.target.value,
                        });
                    }}
                />
            </div>
            <ul className="w-full mt-6 flex items-center flex-col gap-5 font-ibm">
                {filteredFaqs.map((faq) => (
                    <FAQItem
                        key={faq.id}
                        id={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </ul>

            {/* Background and decorations */}
            <Image
                src={GrainBackground}
                alt="background"
                className="fixed top-0 left-0 -z-50 h-screen w-full object-cover"
                loading="lazy"
            />
            <div className="fixed top-0 left-0 bg-gradient-to-b from-transparent to-primary-900 w-screen h-screen -z-40" />
            <div className="fixed top-0 right-0 overflow-hidden w-48 h-48">
                <Image
                    src={Spore1}
                    alt=""
                    className="absolute -top-8 -right-8 rotate-[54deg]"
                    loading="lazy"
                />
            </div>
            <div className="fixed top-0 left-0 overflow-hidden w-40 h-72">
                <Image
                    src={Branches1}
                    alt=""
                    className="absolute -top-36 left-0 rotate-45"
                    priority
                />
            </div>
        </div>
    );
};

export default FAQ;
