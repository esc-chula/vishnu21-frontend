const Vignette: React.FC = () => {
    return (
        <div
            className="z-20 absolute -top-44 -bottom-44 -left-44 -right-44 opacity-80 rounded-[100%]"
            style={{
                background:
                    'radial-gradient(50% 50.00% at 50% 50.00%, rgba(19, 5, 49, 0.00) 27.04%, #130531 73.56%)',
            }}
        ></div>
    );
};

export default Vignette;
