import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface GroupHomePageAdminPostProps {
    content: string;
}

const GroupHomePageAdminPost: React.FC<GroupHomePageAdminPostProps> = ({
    content,
}) => {
    return (
        <div className="flex flex-col items-end space-y-4 relative group">
            <div
                id="admin-post-content"
                className="w-full bg-white rounded-xl border border-neutral-300 p-5"
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <div className="flex absolute -top-5 group-hover:-top-8 opacity-0 group-hover:opacity-100 duration-200 z-10 text-neutral-800">
                <button className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg m-1.5">
                    <FiEdit />
                </button>
                <button className="grid place-content-center w-10 h-10 bg-white border border-neutral-300 rounded-lg m-1.5">
                    <FiTrash2 />
                </button>
            </div>
        </div>
    );
};

export default GroupHomePageAdminPost;
