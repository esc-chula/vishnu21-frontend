import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Main from '@/layouts/Main';
import GroupData from '@/mocks/group-data.json';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface GroupProps {
    slug: string;
}

const Group: NextPage<GroupProps> = ({ slug }) => {
    const group = GroupData.find((group) => group.group === slug);

    return (
        <>
            <Navigation />
            <Main>
                <section id="information" className="space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold">
                            Group {group.group}
                        </h1>
                        <h2 className="text-2xl font-semibold">
                            {group.longName}
                        </h2>
                    </div>
                </section>
                <section id="score" className="space-y-6">
                    <h2 className="text-xl font-bold">ประวัติคะแนน</h2>
                </section>
            </Main>
            <Footer />
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const groups = GroupData;

    const paths = groups.map((group) => {
        return {
            params: {
                group: group.group,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = encodeURI(params?.group as string);

    return {
        props: { slug }, // try to deny server-side rendering cuz need real-time data
        revalidate: 600,
    };
};

export default Group;
