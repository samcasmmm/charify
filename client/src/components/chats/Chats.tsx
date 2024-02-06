import { Avatar, Icon } from "@/components/";
import { CircleDashed } from "phosphor-react";
const Chats: React.FC = () => {
  return (
    <div className="w-[300px] bg-slate-300/30 p-4 dark:bg-slate-800/70">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-2xl font-bold">Chats</h4>
        <div className="">asdfAAvatar</div>
        <Icon Icon={CircleDashed} size={24} />
      </div>
    </div>
  );
};

export default Chats;
