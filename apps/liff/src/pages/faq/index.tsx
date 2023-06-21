import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import FAQItem from './components/FAQItem';

import Branches1 from '/public/images/branches1.svg';
import GrainBackground from '/public/images/grain-background.svg';
import Spore1 from '/public/images/spore1.svg';

// TODO: fetch from API
const faqs = [
    {
        id: '1',
        question: 'Lorem ipsum dolor sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '2',
        question: 'Lorem ipsum dolor sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '3',
        question: 'Lorem ipsum dolor sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '4',
        question: 'Lorem ipsum dolor sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '5',
        question: 'What is Lorem Ipsum?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
];

const FAQ: NextPage = () => {
    const [search, setSearch] = useState('');
    const [filteredFaqs, setFilteredFaqs] = useState(faqs);

    useEffect(() => {
        if (!search) {
            setFilteredFaqs(faqs);
            return;
        }

        const filtered = faqs.filter((faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredFaqs(filtered);
    }, [search]);

    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 py-16 bg-gradient-to-b from-transparent to-primary-900">
            <h1 className="font-semibold text-white text-xl font-ibm">
                FAQ&apos;s
            </h1>
            <h1 className="font-semibold text-white text-xl font-baijam">
                คำถามที่พบบ่อย
            </h1>
            <div className="w-1/2 min-w-max h-8 mt-4 flex items-center justify-center border-white border-2 rounded-3xl text-white relative">
                <AiOutlineSearch className="w-3 h-3 absolute left-2" />
                <input
                    type="text"
                    className="w-full h-8 bg-transparent text-white text-xs pl-6 pr-4 font-semibold placeholder:text-white focus:outline-none"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
            <div className="w-full mt-6 flex items-center flex-col gap-5 font-ibm">
                {filteredFaqs.map((faq) => (
                    <FAQItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
            <Image
                src={GrainBackground}
                alt="background"
                className="fixed top-0 left-0 -z-10 h-screen w-full object-cover"
            />
            <div className="absolute top-0 right-0 overflow-hidden w-48 h-48">
                <Image
                    src={Spore1}
                    alt=""
                    className="absolute -top-8 -right-8 rotate-[54deg]"
                />
            </div>
            <div className="absolute top-0 left-0 overflow-hidden w-40 h-72">
                <Image
                    src={Branches1}
                    alt=""
                    className="absolute -top-36 left-0 rotate-45"
                />
            </div>
        </div>
    );
};

export default FAQ;
