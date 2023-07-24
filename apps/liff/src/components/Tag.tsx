import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

type TagProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    title: string;
};

const Tag: FC<TagProps> = ({ title, className, ...props }) => {
    const colors = [
        'bg-primary-600',
        'bg-secondary-600',
        'bg-neutral-600',
        'bg-success-600',
        'bg-error-600',
    ];
    const bgColor: string = `${
        colors[Math.floor(Math.random() * colors.length)]
    }`;

    return (
        <div
            className={`flex flex-row gap-2 items-center text-white rounded-full h-6 px-3 py-2 ${bgColor} ${className}`}
            {...props}
        >
            <p className="text-xs">{title}</p>
        </div>
    );
};

export type { TagProps };
export default Tag;
