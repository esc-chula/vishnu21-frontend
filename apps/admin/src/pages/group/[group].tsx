import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Section from '@/components/Section';
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
                    <div className="flex justify-between">
                        {/* group information */}
                        <div className="flex space-x-6">
                            <div>
                                <p className="text-neutral-600 text-sm md:text-base">
                                    กรุ้ป
                                </p>
                                <h1 className="font-bold text-2xl md:text-4xl text-neutral-900">
                                    {group.group}
                                </h1>
                            </div>
                            <div>
                                <p className="text-neutral-600 text-sm md:text-base">
                                    ชื่อ
                                </p>
                                <div className="flex flex-col md:flex-row md:items-end md:space-x-4">
                                    <h1 className="font-bold text-2xl md:text-4xl text-neutral-900">
                                        {group.name}
                                    </h1>
                                    <p className="text-neutral-500">
                                        {group.longName}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* score */}
                        <div className="flex flex-col items-end">
                            <p className="text-neutral-600 text-sm md:text-base">
                                คะแนน
                            </p>
                            <h1 className="font-bold text-2xl md:text-4xl text-neutral-900">
                                {group.score}
                            </h1>
                        </div>
                    </div>
                </section>
                <Section toggle id="score" title="ประวัติคะแนน">
                    บันทึกคะแนน
                    <hr />
                </Section>
                <Section toggle id="members" title="สมาชิก">
                    test
                </Section>
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
