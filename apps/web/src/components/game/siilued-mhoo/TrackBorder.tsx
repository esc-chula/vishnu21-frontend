const TrackBorder: React.FC = () => {
    return (
        <div className="z-20 absolute top-0 left-0 right-0 bottom-0 grid grid-cols-4">
            {['d', 'f', 'j', 'k'].map((key) => (
                <div
                    key={key}
                    className={`border-[1.5px] border-white/10`}
                ></div>
            ))}
        </div>
    );
};

export default TrackBorder;
