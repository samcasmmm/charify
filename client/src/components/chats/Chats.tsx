import { Avatar, Icon, Input } from "@/components/";
import { CircleDashed, MagnifyingGlass } from "phosphor-react";
import SearchBox from "./SearchBox";

const ChatWithPerson: React.FC = () => {};

const Chats: React.FC = () => {
  return (
    <div className="flex w-[300px] flex-col space-y-6 bg-slate-300/30 p-4 dark:bg-slate-800/70">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold">Chats</p>
        <Icon Icon={CircleDashed} size={24} />
      </div>
      <SearchBox />
    </div>
  );
};

export default Chats;
