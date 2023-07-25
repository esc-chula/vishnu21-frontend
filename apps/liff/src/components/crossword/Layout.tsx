import Background from './Background';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            {/* blur foreground */}
            <div
                className={`fixed top-0 left-0 right-0 bottom-0 z-1 0 duration-700 transition-all bg-black/0 pointer-events-none`}
            ></div>

            <div
                className={`z-20 absolute top-0 left-0 right-0 bottom-0 overflow-y-auto text-white px-4 duration-700`}
            >
                {children}
            </div>
            <Background />
        </>
    );
};

export default Layout;
