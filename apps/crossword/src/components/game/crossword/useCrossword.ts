import { useState } from 'react';

export const crosswordData = [
    ['B', 'A', 'M', 'C', 'S', 'H', 'I', 'R', 'R', 'I'],
    ['J', 'N', 'T', 'N', 'I', 'B', 'N', 'S', 'E', 'V'],
    ['R', 'D', 'I', 'T', 'N', 'E', 'T', 'H', 'N', 'I'],
    ['L', 'A', 'R', 'N', 'G', 'E', 'A', 'R', 'R', 'S'],
    ['O', 'K', 'N', 'L', 'H', 'X', 'L', 'J', 'L', 'H'],
    ['I', 'A', 'P', 'N', 'A', 'M', 'A', 'Z', 'O', 'N'],
    ['B', 'S', 'Q', 'V', 'O', 'K', 'N', 'E', 'V', 'U'],
    ['R', 'U', 'I', 'Q', 'L', 'U', 'D', 'F', 'B', 'I'],
];

const words = ['LARNGEAR', 'VISHNU', 'AMAZON', 'INTALAND', 'SINGHA'];

export default function useCrossword() {
    const [query, setQuery] = useState('');
    const [foundWords, setFoundWords] = useState<string[]>([]);

    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    function handleQuerySubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (words.includes(query.toUpperCase())) {
            setFoundWords([...foundWords, query.toUpperCase()].sort());
        }
        setQuery('');
    }

    return {
        data: crosswordData,
        query,
        handleQueryChange,
        handleQuerySubmit,
        foundWords,
    };
}
