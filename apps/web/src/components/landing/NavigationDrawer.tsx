import Link from 'next/link';
import { PiXLight } from 'react-icons/pi';

const NavigationDrawer: React.FC<{
    setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setToggleNav }) => {
    return (
        <div
            className="z-50 fixed top-4 left-4 w-60"
            style={{
                background: 'rgba( 255, 255, 255, 0.1 )',
                boxShadow: '0 8px 32px 0 rgba(71, 19, 163, 0.2)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '10px',
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
            }}
        >
            <button
                onClick={() => setToggleNav(false)}
                className="text-2xl sm:text-3xl p-5 sm:p-7 h-16 sm:h-20"
            >
                <PiXLight />
            </button>
            <div className="flex flex-col w-full items-start px-7 pt-4 pb-10 space-y-4 font-baijam font-semibold text-primary-50 text-lg">
                <button className="opacity-80 hover:opacity-100 duration-100">
                    เกี่ยวกับค่าย
                </button>
                <button className="opacity-80 hover:opacity-100 duration-100">
                    ผู้สนับสนุน
                </button>
                <Link
                    href="/links"
                    className="opacity-80 hover:opacity-100 duration-100"
                >
                    Links
                </Link>
                <button className="opacity-80 hover:opacity-100 duration-100">
                    รายละเอียดกิจกรรม
                </button>
            </div>
        </div>
    );
};

export default NavigationDrawer;
