import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface SectionProps {
    children: React.ReactNode;
    id: string;
    title: string;
    toggle?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, title, toggle }) => {
    const [expanded, setExpanded] = useState<boolean>(true);

    return (
        <section id={id} className="space-y-6">
            <div
                onClick={() => setExpanded(!expanded)}
                className={`flex justify-between items-center ${
                    toggle ? 'cursor-pointer select-none' : '"'
                }`}
            >
                <h2 className="text-xl font-bold">{title}</h2>
                {toggle ? (
                    expanded ? (
                        <FiChevronDown className="text-xl" />
                    ) : (
                        <FiChevronUp className="text-xl" />
                    )
                ) : null}
            </div>
            {expanded ? (
                <div className="border-neutral-200 border rounded-xl py-8 px-6 space-y-2">
                    {children}
                </div>
            ) : null}
        </section>
    );
};

export default Section;
