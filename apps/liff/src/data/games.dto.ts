export interface IGame {
    title: string;
    description?: string;
    choices: { choiceId: string; text: string }[];
    scoring?: GameScoringMode;
    maxParticipant?: number;
    maxScore?: number;
    isIndividual?: boolean;
    expiresAt: Date;
    startedAt: Date;
    submitted?: boolean;
}

export enum GameScoringMode {
    'Equal',
    'Linear',
    'Exponential',
    'Logarithmic',
    'FirstBlood',
}
