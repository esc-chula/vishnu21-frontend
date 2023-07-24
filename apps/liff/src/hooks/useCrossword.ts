import { useState } from 'react';

// export const crosswordData = [
//     ['B', 'A', 'M', 'C', 'S', 'H', 'I', 'R', 'R', 'I'],
//     ['J', 'N', 'T', 'N', 'I', 'B', 'N', 'S', 'E', 'V'],
//     ['R', 'D', 'I', 'T', 'N', 'E', 'T', 'H', 'N', 'I'],
//     ['L', 'A', 'R', 'N', 'G', 'E', 'A', 'R', 'R', 'S'],
//     ['O', 'K', 'N', 'L', 'H', 'X', 'L', 'J', 'L', 'H'],
//     ['I', 'A', 'P', 'N', 'A', 'M', 'A', 'Z', 'O', 'N'],
//     ['B', 'S', 'Q', 'V', 'O', 'K', 'N', 'E', 'V', 'U'],
//     ['R', 'U', 'I', 'Q', 'L', 'U', 'D', 'F', 'B', 'I'],
// ];
// export const crosswordData = [
//     [' ', ' ', ' ', 'V', ' ', ' ', 'P', ' ', 'M', ' '],
//     [' ', ' ', ' ', 'I', 'N', 'T', 'A', 'N', 'I', 'A'],
//     [' ', ' ', ' ', 'S', ' ', ' ', 'R', ' ', 'D', 'F'],
//     ['P', 'Y', 'T', 'H', 'O', 'N', 'A', ' ', 'T', 'R'],
//     [' ', ' ', ' ', 'N', ' ', ' ', 'B', ' ', 'E', 'E'],
//     [' ', 'C', 'H', 'U', 'L', 'A', 'O', ' ', 'R', 'S'],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'L', ' ', 'M', 'H'],
//     ['L', 'A', 'R', 'N', 'G', 'E', 'A', 'R', ' ', 'Y'],
// ];
export const crosswordData = [
    ['H', 'I', 'R', 'V', 'Y', 'X', 'P', 'G', 'M', 'F'],
    ['J', 'A', 'F', 'I', 'N', 'T', 'A', 'N', 'I', 'A'],
    ['B', 'O', 'C', 'S', 'Z', 'M', 'R', 'O', 'D', 'F'],
    ['P', 'Y', 'T', 'H', 'O', 'N', 'A', 'N', 'T', 'R'],
    ['E', 'D', 'S', 'N', 'K', 'L', 'B', 'P', 'E', 'E'],
    ['A', 'C', 'H', 'U', 'L', 'A', 'O', 'Q', 'R', 'S'],
    ['R', 'Q', 'Y', 'E', 'S', 'A', 'L', 'B', 'M', 'H'],
    ['L', 'A', 'R', 'N', 'G', 'E', 'A', 'R', 'V', 'Y'],
];

// const words = ['LARNGEAR', 'VISHNU', 'AMAZON', 'INTALAND', 'SINGHA'];
const words = [
    'VISHNU',
    'PARABOLA',
    'MIDTERM',
    'INTANIA',
    'PYTHON',
    'CHULA',
    'LARNGEAR',
    'FRESHY',
];

export default function useCrossword() {
    const [query, setQuery] = useState('');
    const [foundWords, setFoundWords] = useState<string[]>([]);

    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    function handleQuerySubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (
            words.includes(query.toUpperCase()) &&
            !foundWords.includes(query.toUpperCase())
        ) {
            setFoundWords([...foundWords, query.toUpperCase()].sort());
        } else {
            alert('ไม่พบคำนี้ในปริศนา');
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
