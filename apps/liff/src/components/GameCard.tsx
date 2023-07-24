import { FC, HTMLAttributes, DetailedHTMLProps } from 'react';
import Tag, { TagProps } from './Tag';
import { useRouter } from 'next/router';

type GameCardProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    title: string;
    gameId: string;
    description: string;
    tags: string[];
    submitted: boolean;
    expiresAt: string;
    startedAt: string;
};

const GameCard: FC<GameCardProps> = ({
    title,
    gameId,
    description,
    tags,
    submitted,
    className,
    expiresAt,
    startedAt,
    ...props
}) => {
    const router = useRouter();
    const notAvailable =
        submitted ||
        new Date(expiresAt).getTime() < Date.now() ||
        new Date(startedAt).getTime() > Date.now();
    return (
        <div
            onClick={() =>
                !notAvailable ? router.push(`/house/game/${gameId}`) : {}
            }
        >
            <div
                className={`flex flex-col gap-6 py-6 px-4 w-full rounded-3xl drop-shadow-md border-2 border-primary-700 bg-white ${
                    !notAvailable ? '' : 'opacity-50'
                }`}
            >
                <h1 className="text-sm font-semibold">{title}</h1>
                {description ? (
                    <p className="text-xs text-neutral-600">{description}</p>
                ) : (
                    <p className="text-xs text-italic italic text-neutral-600">
                        ไม่มีรายละเอียดเกม
                    </p>
                )}
                <div className="flex flex-row flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Tag key={index} title={tag} />
                    ))}
                </div>
                {submitted && (
                    <div className="absolute backdrop-blur-0 bg-neutral-500/50 w-full h-full inset-0 rounded-3xl" />
                )}
            </div>
        </div>
    );
};

export type { GameCardProps };
export default GameCard;
