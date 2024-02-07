import { Avatar, Icon, Input } from "@/components/";
import { CircleDashed, MagnifyingGlass } from "phosphor-react";
import SearchBox from "./SearchBox";
import { ChatList } from "@/data";
import React from "react";

type ChatListBoxProps = {
  id: number;
  img: string;
  name: string;
  msg: string;
  time: string;
  unread: number;
  pinned: boolean;
  online: boolean;
};

const ChatListBox: React.FC<ChatListBoxProps> = ({
  id,
  img,
  name,
  msg,
  time,
  unread,
  pinned,
  online,
}) => {
  return (
    <div className="dark:bg-black20 w-full rounded bg-white p-2">ChatBox</div>
  );
};

const Chats: React.FC = () => {
  return (
    <div className="flex w-[300px] flex-col space-y-6 bg-slate-300/30 p-4 dark:bg-slate-800/70">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold">Chats</p>
        <Icon Icon={CircleDashed} size={24} />
      </div>
      <SearchBox />
      <div className="flex flex-col items-center justify-between space-y-4">
        {ChatList.map((item) => (
          <ChatListBox
            id={item.id}
            img={item.img}
            name={item.name}
            msg={item.msg}
            time={item.time}
            unread={item.unread}
            pinned={item.pinned}
            online={item.online}
          />
        ))}
      </div>
    </div>
  );
};

export default Chats;
