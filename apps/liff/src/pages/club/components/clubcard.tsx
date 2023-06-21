const ClubCard = ({ img = <div className='flex bg-gray-500 h-[72px] w-[72px] rounded-[20px] place-self-center' />, name = "Card name", isHighlight }) => {
    const filter = (isHighlight) ? <div className='flex absolute bg-[#3B0D8D]/[70%] w-full h-full' /> : <div />

    // TODO: change img,name according to input
    return (
        <div className='flex flex-col'>
            <div className='flex relative bg-white h-[92px] w-[92px] rounded-[20px] items-center justify-center opa'>
                {img}
                {filter}
            </div>
            <h1 className='text-center text-white font-semibold text-[10px] mt-[10px]'>
                {name}
            </h1>
        </div>
    );
}

export default ClubCard;