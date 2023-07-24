import Image from 'next/image';
import {
    FC,
    HTMLAttributes,
    PropsWithChildren,
    DetailedHTMLProps,
} from 'react';
import { BsPersonFill } from 'react-icons/bs';

type ProfileCardProps = PropsWithChildren &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        imageUrl: string;
        nickname: string;
        houseName: string;
    };

const ProfileCard: FC<ProfileCardProps> = ({
    imageUrl,
    nickname,
    houseName,
    className,
    ...props
}) => {
    return (
        <div className="flex flex-row gap-6 py-10 px-8 w-full" {...props}>
            <div className="flex w-12 h-12 rounded-full bg-neutral-500 items-center justify-center">
                {!imageUrl ? (
                    <BsPersonFill className="w-6 h-6 text-white" />
                ) : (
                    <Image
                        className="w-12 h-12 rounded-full"
                        src={imageUrl}
                        alt="profile"
                        width={48}
                        height={48}
                    />
                )}
            </div>
            <div className="flex flex-col h-12 text-white">
                <h1 className=" text-xl">น้อง{nickname}</h1>
                <p className=" text-sm">บ้าน{houseName}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
