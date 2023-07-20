import { FiPhone } from 'react-icons/fi';

interface ContactCardProps {
    name: string;
    department: string;
    tel: string;
    line: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
    name,
    department,
    tel,
    line,
}) => {
    return (
        <a
            href={`tel:${tel.replace(/-/g, '')}`}
            className="bg-neutral-50 shadow-button w-full rounded-2xl mb-4 cursor-pointer text-neutral-900 py-4 px-5 flex justify-between items-center"
        >
            <div>
                <h4 className="font-semibold mb-1">
                    {name}
                    <span className="text-sm text-gray-500 px-2">{`(${department})`}</span>
                </h4>
                <div className="flex text-sm">
                    <div className="w-12">เบอร์</div>
                    <div>{tel}</div>
                </div>
                <div className="flex text-sm">
                    <div className="w-12">ไลน์</div>
                    <div>{line}</div>
                </div>
            </div>
            <FiPhone className="text-xl mr-1 text-primary-600" />
        </a>
    );
};

export default ContactCard;
