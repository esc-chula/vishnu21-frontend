import Background from '@/components/links/Background';
import Layout from '@/components/links/Layout';
import CrossWord from './crossword';

export default function CrosswordGame() {
    return (
        <section
            id="game"
            className="flex justify-center h-screen w-full bg-black overflow-hidden"
        >
            <Layout>
                <div className="max-w-[500px] h-screen flex flex-col gap-8 items-center justify-center mx-auto relative">
                    <h1 className="text-4xl font-bold text-white">Crossword</h1>

                    <CrossWord />
                </div>
            </Layout>
        </section>
    );
}
