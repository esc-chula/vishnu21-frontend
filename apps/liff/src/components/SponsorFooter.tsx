import Sponsor1 from '@/public/images/sponsors/gcme_logo.png';
import Sponsor2 from '@/public/images/sponsors/fujifilm_logo.png';
import Sponsor3 from '@/public/images/sponsors/instax_logo.png';
import Sponsor4 from '@/public/images/sponsors/major_logo.png';
import Sponsor5 from '@/public/images/sponsors/bright_hair_logo.png';
import Image from 'next/image';

const SponsorFooter: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full space-y-2 text-neutral-50">
            <p>สนับสนุนโดย</p>
            <div className="flex items-center space-x-2">
                <Image src={Sponsor1} alt="Sponsor" className="w-10" />
                <Image src={Sponsor2} alt="Sponsor" className="w-10" />
                <Image src={Sponsor3} alt="Sponsor" className="w-10" />
                <Image src={Sponsor4} alt="Sponsor" className="w-10" />
                <Image src={Sponsor5} alt="Sponsor" className="w-10" />
            </div>
        </div>
    );
};

export default SponsorFooter;
