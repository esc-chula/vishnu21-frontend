export type Member = {
    profileImg: String;
    name: string;
    line: string;
    ig: string;
};
const members: React.FC<Member> = ({ profileImg, name, line, ig }) => {
    return (
        <li className="flex w-full h-20 rounded-2xl px-6 py-2.5 shadow-details bg-gray-300 bg-opacity-30 text-white z-10">
            <div className="flex w-12 h-full justify-center items-center mr-7">
                <div className="w-12 h-12 rounded-full bg-white" />
                {/* <image 
                src={profileImg}
                alt=""
                className="w-12 h-12 rounded-full"
                loading="lazy"
            /> */}
            </div>

            <div className="w-44 text-white block">
                <div className="font-bold text-sm">ชื่อเล่น : {name}</div>
                <div className="font-semibold my-1 text-xs">line : {line}</div>
                <div className="font-semibold mb-0.5 text-xs">IG : {ig}</div>
            </div>
        </li>
    );
};
export default members;
