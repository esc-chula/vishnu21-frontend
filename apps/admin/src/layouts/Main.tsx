interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main className="w-full h-full flex justify-center px-5 pt-14">
            <div className="w-full max-w-screen-xl h-full py-8 space-y-10">
                {children}
            </div>
        </main>
    );
};

export default Main;
