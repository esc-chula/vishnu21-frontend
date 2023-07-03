import GroupHomePageBackground from './GroupHomePageBackground';

interface GroupHomePageMockProps {
    children?: React.ReactNode;
}

const GroupHomePageMock: React.FC<GroupHomePageMockProps> = ({ children }) => {
    return (
        <div className="aspect-[393/852] relative">
            <div className="absolute left-0 right-0 bottom-0 top-[25.5%] bg-neutral-400 z-10 overflow-y-auto space-y-10">
                {children}
            </div>
            <GroupHomePageBackground />
        </div>
    );
};

export default GroupHomePageMock;
