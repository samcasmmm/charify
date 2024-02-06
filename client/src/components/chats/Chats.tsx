import { Avatar, Icon } from "@/components/";
import { CircleDashed, MagnifyingGlass } from "phosphor-react";
import { Input } from "../ui/input";
const Chats: React.FC = () => {
  return (
    <div className="flex w-[300px] flex-col space-y-6 bg-slate-300/30 p-4 dark:bg-slate-800/70">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold">Chats</p>
        <Icon Icon={CircleDashed} size={24} />
      </div>
      <div className=" flex w-full flex-row items-center rounded-full bg-blue-100 p-2 dark:bg-blue-900">
        <MagnifyingGlass size={24} />
        <Input />
      </div>
    </div>
  );
};

export default Chats;
