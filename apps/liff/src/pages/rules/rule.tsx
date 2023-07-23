import { useState } from 'react';
import { AiOutlineUp, AiOutlineRight } from 'react-icons/ai';
type Rules = {
    content: string;
};

const RuleItem: React.FC<Rules> = ({ content }) => {
    return (
        <li className="w-full rounded-2xl p-2 shadow-details bg-gray-300 bg-opacity-30 text-white z-10 text-center">
            <p
                className={
                    'px-3 py-2 overflow-hidden transition-all duration-300 ease-in-out text-xs leading-5 font-normal'
                }
            >
                {content}
            </p>
        </li>
    );
};

export default RuleItem;
