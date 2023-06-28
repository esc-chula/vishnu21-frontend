import { useState } from 'react';
 import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
type Rules = {
    topic: string;
    detail: string;
};

const RuleItem: React.FC<Rules> = ({topic , detail }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <li
            className="w-full rounded-2xl p-2 shadow-details bg-gray-300 bg-opacity-30 text-white z-10"
            onClick={toggle}
        >
            <div className="flex items-center justify-between cursor-pointer">
                <h1 className="font-semibold text-sm pt-2 pr-5 pb-2 pl-1">{topic}</h1>
                {isOpen ? (
                    <AiOutlineRight className="w-3 h-3 text-white" />
                ) : (
                    <AiOutlineDown className="w-3 h-3 text-" />
                )}
            </div>
            <p
                className={`pl-5 pr-8 overflow-hidden transition-all duration-300 ease-in-out text-xs leading-5 font-semibold ${
                    isOpen ? 'max-h-96 mb-4' : 'max-h-0'
                }`}
            >
                {detail}
            </p>
        </li>
    );
};

export default RuleItem;