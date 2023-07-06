import { FC, HTMLAttributes, DetailedHTMLProps } from 'react';
import Badge, { BadgeProps } from './Badge';

type GameCardProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    title: string;
    description: string;
    badges: BadgeProps[];
    isDone: boolean;
};

const GameCard: FC<GameCardProps> = ({
    title,
    description,
    badges,
    isDone,
    className,
    ...props
}) => {
    return (
        <div>
            <div className="flex flex-col gap-6 py-6 px-4 w-full rounded-3xl drop-shadow-md border-2 border-primary-700 bg-white">
                <h1 className="text-sm">{title}</h1>
                <p className="text-xs text-neutral-600">{description}</p>
                <div className="flex flex-row gap-2">
                    {badges.map((badge, index) => (
                        <Badge key={index} {...badge} />
                    ))}
                </div>
                {isDone && (
                    <div className="absolute backdrop-blur-0 bg-neutral-500/50 w-full h-full inset-0 rounded-3xl" />
                )}
            </div>
        </div>
    );
};

export type { GameCardProps };
export default GameCard;
