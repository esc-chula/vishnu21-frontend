import { AiFillHeart } from "react-icons/ai";
import { ReactNode } from "react";

interface ClubCardProps {
    img?: ReactNode;
    name?: string;
    isStamped?: boolean;
    isFavorite?: boolean;
    currentMode?: string;
    onClick?: () => void;
}

const ClubCard: React.FC<ClubCardProps> = ({
    img = <div className='flex bg-gray-500 h-[72px] w-[72px] rounded-[20px] place-self-center' />,
    name = "Card name",
    isStamped,
    isFavorite,
    currentMode,
    onClick
}: ClubCardProps) => {
    const filter = (isStamped) ? <div /> : <div className='flex absolute bg-[#3B0D8D]/[70%] w-full h-full rounded-[20px]' />
    const icon_heart = (currentMode == "Favorite" && isFavorite) ? <AiFillHeart className="absolute h-[30px] w-[30px] top-0 right-0" color="red" /> : <div />
    // TODO: change img according to input
    return (
        <div className='flex relative justify-center'>
            <div className="flex flex-col relative items-center  ">
                {/* glowing border */}
                <div className="flex absolute top-0 bg-black h-[92px] w-[92px] rounded-[20px] blur-sm" />

                {/* white box */}
                <div className='flex relative bg-white h-[92px] w-[92px] rounded-[20px] items-center justify-center shadow-[#7A36E359] shadow-inner' onClick={onClick}>
                    {/* img */}
                    {img}
                    {filter}
                </div>

                <p className='text-center text-white font-semibold font-ibm text-[10px] mt-[10px]'>
                    {name}
                </p>
                {icon_heart}
            </div>
        </div>
    );
};


export default ClubCard;