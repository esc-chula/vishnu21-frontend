import { useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

type FAQItemProps = {
    question: string;
    answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <div
            className={`w-full rounded-2xl p-5 ${
                isOpen ? 'bg-primary-50' : 'bg-white'
            }`}
            onClick={toggle}
        >
            <div className="flex items-center justify-between cursor-pointer">
                <h1 className="font-semibold text-lg">{question}</h1>
                {isOpen ? (
                    <AiOutlineRight className="w-5 h-5" />
                ) : (
                    <AiOutlineDown className="w-5 h-5" />
                )}
            </div>
            {isOpen && <p className="text-sm mt-3">{answer}</p>}
        </div>
    );
};

export default FAQItem;
