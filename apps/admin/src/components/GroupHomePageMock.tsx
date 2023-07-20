import GroupHomePageBackground from './GroupHomePageBackground';

interface GroupHomePageMockProps {
    children?: React.ReactNode;
}

const GroupHomePageMock: React.FC<GroupHomePageMockProps> = ({ children }) => {
    return (
        <div className="aspect-[393/852] relative">
            <div className="absolute left-0 right-0 bottom-0 top-[25.5%] bg-neutral-400 z-10 overflow-hidden space-y-10">
                <div className="relative w-full h-full">{children}</div>
            </div>
            <GroupHomePageBackground />
        </div>
    );
};

export default GroupHomePageMock;
