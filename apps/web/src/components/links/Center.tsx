interface CenterProps {
    children: React.ReactNode;
    axis: 'x' | 'y';
}

const Center: React.FC<CenterProps> = ({ children, axis }) => {
    if (axis === 'x') {
        return <div className="flex w-full justify-center">{children}</div>;
    } else {
        return <div className="flex h-full items-center">{children}</div>;
    }
};

export default Center;
