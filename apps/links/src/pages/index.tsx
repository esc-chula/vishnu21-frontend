import Background from '@/components/Background';
import Vignette from '@/components/Vignette';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <Vignette />
            <Background />
        </>
    );
};

export default Home;
