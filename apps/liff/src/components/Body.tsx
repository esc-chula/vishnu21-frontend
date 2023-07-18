const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex justify-center w-full min-h-screen">
            <div className="flex relative overflow-hidden max-w-screen-sm w-full min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default Body;
