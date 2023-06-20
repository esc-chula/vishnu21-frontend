interface DashboardBlockProps {
    title: string;
    value: string;
    unit: string;
    description?: string;
}

const DashboardBlock: React.FC<DashboardBlockProps> = ({
    title,
    value,
    unit,
    description,
}) => {
    return (
        <div className="border-neutral-200 border rounded-xl p-6 space-y-6">
            <h3 className="font-medium">{title}</h3>
            <div className="flex items-end space-x-3">
                <p className="font-bold text-5xl text-neutral-900">{value}</p>
                <p className="text-lg">{unit}</p>
            </div>
            <p className="text-neutral-500 text-sm">{description}</p>
        </div>
    );
};

export default DashboardBlock;
