import Background from './Background';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="z-10 absolute top-0 left-0 right-0 bottom-0 overflow-y-auto text-white">
                {children}
            </div>
            <Background />
        </>
    );
};

export default Layout;
