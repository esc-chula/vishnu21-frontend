import Loading from '@/components/Loading';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
    const router = useRouter();

    return <Loading />;
};

export default Home;
