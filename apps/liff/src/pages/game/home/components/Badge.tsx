import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

type BadgeProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    title: string;
    color: string;
    Icon: IconType;
};

const Badge: FC<BadgeProps> = ({ title, color, Icon, className, ...props }) => {
    const bgColor: string = `bg-${color}`;

    return (
        <div
            className={`flex flex-row gap-2 items-center text-white rounded-full h-6 px-3 py-2 ${bgColor} ${className}`}
            {...props}
        >
            <p className="text-xs">{title}</p>
            <Icon className="w-4 h-4" />
        </div>
    );
};

export type { BadgeProps };
export default Badge;
