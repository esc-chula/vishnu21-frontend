import Layout from '@/components/links/Layout';
import LinksData from '@/constants/links.json';
import { logo } from 'assets';
import Image from 'next/image';

const Links = () => {
    const links = LinksData;

    return (
        <Layout>
            <div className="flex flex-col items-center pt-28 space-y-20">
                {/* informations */}
                <div className="flex flex-col items-center space-y-5">
                    {/* icon */}
                    <div className="flex items-center space-x-3">
                        <Image
                            src={logo.firstdate}
                            alt="First Date Logo"
                            width={62}
                            height={47}
                        />
                        <div className="h-12 w-px bg-white" />
                        <Image
                            src={logo.vishnu}
                            alt="Vishnu Logo"
                            width={138}
                            height={38}
                        />
                    </div>

                    {/* information */}
                    <div className="text-center space-y-1">
                        <h1 className="font-bold text-xl">@vishnu21st</h1>
                        <h2 className="font-semibold text-sm">
                            งาน Intania First Date 2023
                            <br />
                            และค่ายวิษณุกรรมบุตรครั้งที่ 21
                        </h2>
                    </div>
                </div>

                {/* links */}
                <div className="flex flex-col max-w-[320px] w-full space-y-10">
                    {links.map((link) => {
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full p-3.5 pl-14 bg-white rounded-2xl text-primary-900 relative flex items-center justify-start font-semibold shadow-button hover:scale-105 duration-300 ease-in-out"
                            >
                                {link.icon ? (
                                    <picture className="absolute left-1 h-12 w-12 p-3">
                                        <source srcSet={link.icon} />
                                        <img
                                            src={link.icon}
                                            alt={link.label + ' icon'}
                                        />
                                    </picture>
                                ) : null}

                                {link.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Links;
