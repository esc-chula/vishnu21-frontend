import { AiFillHeart } from "react-icons/ai";

const ClubCard = ({ img = <div className='flex bg-gray-500 h-[72px] w-[72px] rounded-[20px] place-self-center' />, name = "Card name", isStamped = false, isFavorite = false }) => {
    const filter = (isStamped) ? <div /> : <div className='flex absolute bg-[#3B0D8D]/[70%] w-full h-full' />
    const icon_heart = (isFavorite) ? <AiFillHeart className="absolute h-[30px] w-[30px] top-0 right-0" color="red" /> : <div />
    // TODO: change img,name according to input
    return (
        <div className='flex flex-col relative items-center'>
            <div className="flex relative pt-[8px] pr-[8px]">
                <div className='flex relative bg-white h-[92px] w-[92px] rounded-[20px] items-center justify-center'>
                    {img}
                    {filter}
                    
                </div>
                {icon_heart}
            </div>

            <h1 className='text-center text-white font-semibold text-[10px] mt-[10px]'>
                {name}
            </h1>

        </div>
    );
}

export default ClubCard;