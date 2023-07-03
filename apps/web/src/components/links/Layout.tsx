import { LinksLoadingContext } from '@/pages/links';
import Background from './Background';
import { useContext } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { vignetteLoaded } = useContext(LinksLoadingContext);

    return (
        <>
            {/* blur foreground */}
            <div
                className={`fixed top-0 left-0 right-0 bottom-0 z-1 0 duration-700 transition-all ${
                    vignetteLoaded
                        ? 'bg-black/0 pointer-events-none'
                        : 'bg-black/20 backdrop-blur-sm'
                }`}
            ></div>

            <div
                className={`z-20 absolute top-0 left-0 right-0 bottom-0 overflow-y-auto text-white px-4 duration-700 ${
                    !vignetteLoaded && 'scale-[99%]'
                }`}
            >
                {children}
            </div>
            <Background />
        </>
    );
};

export default Layout;
