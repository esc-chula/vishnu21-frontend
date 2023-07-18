import FaqData from '@/constants/faq';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQ: React.FC = () => {
    const [toggles, setToggles] = useState(Array(FaqData.length).fill(false));

    return (
        <div className="max-w-screen-sm w-full flex flex-col space-y-8 sm:space-y-10">
            {FaqData.map((faq) => (
                <div
                    key={faq.question}
                    className="flex flex-col w-full bg-white rounded-2xl shadow-button sm:shadow-faq px-4 sm:px-6"
                >
                    <div
                        className="flex justify-between items-center py-4 sm:py-5 cursor-pointer select-none"
                        onClick={() =>
                            setToggles((prev) => {
                                const newToggles = [...prev];
                                newToggles[FaqData.indexOf(faq)] =
                                    !newToggles[FaqData.indexOf(faq)];
                                return newToggles;
                            })
                        }
                    >
                        <p className="text-primary-700 font-semibold text-sm sm:text-lg pr-10">
                            {faq.question}
                        </p>
                        <div className="w-max">
                            <FiChevronDown
                                className={`text-primary-700 text-lg sm:text-xl duration-500 ease-in-out ${
                                    toggles[FaqData.indexOf(faq)] &&
                                    'rotate-180'
                                }`}
                            />
                        </div>
                    </div>
                    <div
                        className={`overflow-y-auto transition-all duration-500 ease-in-out text-neutral-600 font-baijam font-medium text-sm sm:text-base leading-relaxed sm:leading-relaxed ${
                            toggles[FaqData.indexOf(faq)]
                                ? 'max-h-[500px] py-2 pb-10'
                                : 'max-h-0'
                        }`}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
