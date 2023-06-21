import type { NextPage } from 'next';
import { AiOutlineSearch } from 'react-icons/ai';
import FAQItem from './components/faqItem';
import { useEffect, useState } from 'react';

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
            (faq.question + faq.answer)
                .toLowerCase()
                .includes(search.toLowerCase())
        );
        setFilteredFaqs(filtered);
    }, [search]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center font-ibm bg-primary-900 pt-7 px-7">
            <h1 className="font-semibold text-white text-xl">FAQ's</h1>
            <h1 className="font-semibold text-white text-2xl">
                คำถามที่พบบ่อย
            </h1>
            <div className="w-1/2 min-w-max max-w-full h-8 mt-4 flex items-center justify-center border-white border-2 rounded-3xl text-white relative">
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
            <div className="w-full mt-7 flex items-center flex-col gap-5">
                {filteredFaqs.map((faq) => (
                    <FAQItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
