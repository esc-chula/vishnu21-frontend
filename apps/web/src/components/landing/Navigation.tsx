import { PiHamburgerLight, PiListLight } from 'react-icons/pi';

const Navigation: React.FC<{
    setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setToggleNav }) => {
    return (
        <button
            onClick={() => setToggleNav(true)}
            className="z-40 fixed top-2 sm:top-4 left-2 sm:left-4 text-3xl sm:text-4xl p-6 text-primary-50 text-opacity-75"
        >
            {/* <PiListLight /> */}
            <PiHamburgerLight />
        </button>
    );
};

export default Navigation;
