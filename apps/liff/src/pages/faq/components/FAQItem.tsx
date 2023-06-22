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
            className="w-full rounded-3xl p-5 shadow-details bg-white"
            onClick={toggle}
        >
            <div className="flex items-center justify-between cursor-pointer">
                <h1 className="font-semibold text-sm">{question}</h1>
                {isOpen ? (
                    <AiOutlineRight className="w-3 h-3 text-black" />
                ) : (
                    <AiOutlineDown className="w-3 h-3 text-black" />
                )}
            </div>
            <p
                className={`overflow-hidden transition-all duration-300 ease-in-out text-xs leading-5 font-semibold ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                {answer}
            </p>
        </div>
    );
};

export default FAQItem;
