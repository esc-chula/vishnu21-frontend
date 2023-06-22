import Image from 'next/image';
import { AiFillPhone } from 'react-icons/ai';

type ContactItemProps = {
    name: string;
    phone: string;
    remark: string;
    line: string;
    photo_url: string;
};

const ContactItem: React.FC<ContactItemProps> = ({
    name,
    phone,
    remark,
    line,
    photo_url,
}) => {
    return (
        <li className="w-full flex items-center justify-between bg-secondary-50/30 rounded-3xl px-6 py-2 text-white z-0">
            <div className="w-1/6 flex items-center justify-center relative mr-7">
                <Image
                    src={photo_url}
                    alt=""
                    width={48}
                    height={48}
                    className="z-0"
                />
            </div>
            <div className="w-4/6 flex flex-col gap-1 font-ibm font-semibold text-xs">
                <h1 className="font-bold text-sm">{name}</h1>
                <div className="flex">
                    <h1 className="w-0 pr-16">เบอร์</h1>
                    <h1>{phone}</h1>
                </div>
                <div className="flex">
                    <h1 className="w-0 pr-16">Line</h1>
                    <h1>{line}</h1>
                </div>
                {remark && (
                    <div className="flex">
                        <h1 className="w-0 pr-16">หมายเหตุ</h1>
                        <h1>{remark}</h1>
                    </div>
                )}
            </div>
            <div className="w-1/6 flex items-center justify-center">
                <button className="w-8 h-8 flex items-center justify-center">
                    <AiFillPhone className="w-5 h-5 text-white" />
                </button>
            </div>
        </li>
    );
};

export default ContactItem;
