import { useOnScreen } from '@/hooks/useOnScreen';
import { useRef } from 'react';

const Moon: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div
            ref={ref}
            className={`z-20 absolute w-[134px] h-[134px] -top-16 -right-10 rounded-full bg-[#f3d79c] opacity-70 blur-[8px] mix-blend-screen duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
                boxShadow: '0px 4px 100px 0px #D9AB9F',
            }}
        ></div>
    );
};

export default Moon;
