import axios from '@/utils/fetcher';
import Footer from '@/components/Footer';
import GroupMembers from '@/components/GroupMembers';
import Navigation from '@/components/Navigation';
import ScoreTableRow from '@/components/table/ScoreTableRow';
import Section from '@/layouts/Section';
import Main from '@/layouts/Main';
import GroupData from '@/mocks/group-data.json';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useGroup } from '@/contexts/GroupContext';
import { createContext, useContext, useEffect, useState } from 'react';
import { IGroup } from 'types';
import Loading from '@/components/Loading';
import Guard from '@/components/Guard';
import { useAuth } from '@/contexts/AuthContext';
import dynamic from 'next/dynamic';

const GroupHomePage = dynamic(() => import('@/components/GroupHomePage'));

interface GroupContextProps {
    groupInformation: IGroup;
}

export const GroupInformationContext = createContext<GroupContextProps>(null);

interface GroupProps {
    slug: string;
}

const Group: NextPage<GroupProps> = ({ slug }) => {
    const { allGroupData } = useGroup();

    const [groupData, setGroupData] = useState<IGroup | null>(null);

    const fetchGroupData = async () => {
        await axios
            .get(`/groups/${groupInformation.groupId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                setGroupData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        if (allGroupData) fetchGroupData();
    }, [allGroupData]);

    if (!allGroupData) return <Loading />;

    const groupInformation = allGroupData.find((group) => group.group === slug);

    if (!groupData) return <Loading />;

    return (
        <GroupInformationContext.Provider value={{ groupInformation }}>
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
                                    {groupInformation.group}
                                </h1>
                            </div>
                            <div>
                                <p className="text-neutral-600 text-sm md:text-base">
                                    ชื่อ
                                </p>
                                <div className="flex flex-col md:flex-row md:items-end md:space-x-4">
                                    <h1 className="font-bold text-2xl md:text-4xl text-neutral-900">
                                        {groupInformation.shortName}
                                    </h1>
                                    <p className="text-neutral-500">
                                        {groupInformation.houseName}
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
                                {groupInformation.score}
                            </h1>
                        </div>
                    </div>
                </section>
                <Guard allowRoles={['Activity']}>
                    <Section toggle id="score" title="บันทึกคะแนน">
                        <div className="flex flex-col md:flex-row md:items-end space-y-6 md:space-y-0 md:space-x-6">
                            <div className="flex flex-col space-y-2.5">
                                <label className="text-sm md:text-base text-neutral-600">
                                    จำนวน
                                </label>
                                <input
                                    type="number"
                                    className="!outline-none w-32 rounded-lg border border-neutral-300 py-2 px-4 bg-transparent"
                                />
                            </div>
                            <div className="flex flex-col space-y-2.5 w-full">
                                <label className="text-sm md:text-base text-neutral-600">
                                    หมายเหตุ
                                </label>
                                <input className="!outline-none rounded-lg border border-neutral-300 py-2 px-4 bg-transparent w-full" />
                            </div>
                            <div className="flex flex-col space-y-2.5">
                                <button className="bg-neutral-800 text-white font-medium rounded-lg px-6 py-2">
                                    บันทึก
                                </button>
                            </div>
                        </div>
                    </Section>
                </Guard>
                <Guard allowRoles={['Activity']}>
                    <Section toggle id="score" title="ประวัติคะแนน">
                        <ScoreTableRow header amount="จำนวน" note="หมายเหตุ" />
                        <ScoreTableRow amount="10" note="ให้สักหน่อย" />
                    </Section>
                </Guard>
                <Guard allowRoles={['HeadHouse']}>
                    <GroupHomePage />
                </Guard>
                <Guard
                    allowRoles={[
                        'Board',
                        'Registration',
                        'HeadHouse',
                        'RegistrationHouse',
                    ]}
                >
                    <Section toggle id="members" title="สมาชิก">
                        <GroupMembers members={groupData.members} />
                    </Section>
                </Guard>
            </Main>
            <Footer />
        </GroupInformationContext.Provider>
    );
};

export const useGroupInformation = () => {
    const context = useContext(GroupInformationContext);

    if (!context) {
        throw new Error(
            'useGroupInformation must be used within GroupInformationProvider'
        );
    }

    return context;
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
    };
};

export default Group;
