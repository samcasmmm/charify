import { Avatar, Icon, Separator } from "@/components/";
import { ArchiveBox, CircleDashed } from "phosphor-react";
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
  online: boolean;
};

const ChatListBox: React.FC<ChatListBoxProps> = ({
  id,
  img,
  name,
  msg,
  time,
  unread,
  online,
}) => {
  return (
    <div className="dark:bg-black20 w-full rounded bg-white p-2">
      <div className="flex w-full flex-row justify-between">
        <div className="flex w-full flex-row justify-start space-x-2">
          <Avatar src={img} isOnline={online} />
          <div className="">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{msg}</p>
          </div>
        </div>
        <div className="">
          <p>{time}</p>
          <p className="flex items-center justify-center rounded-full bg-emerald-600">
            {unread}
          </p>
        </div>
      </div>
    </div>
  );
};

const ArchiveButton = () => {
  return (
    <div className="group flex cursor-pointer flex-row items-center space-x-2 rounded-lg p-2 duration-200 ease-in-out hover:bg-blue-600">
      <ArchiveBox
        size={24}
        className="duration-200 ease-in-out group-hover:text-white"
      />
      <p className="select-none duration-200 ease-in-out group-hover:text-white">
        Archive
      </p>
    </div>
  );
};

const Chats: React.FC = () => {
  return (
    <div className="flex w-[350px] flex-col space-y-6 bg-slate-300/30 p-4 dark:bg-slate-800/70">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold">Chats</p>
        <Icon Icon={CircleDashed} size={24} />
      </div>
      <SearchBox />
      <ArchiveButton />
      <Separator />
      <div className="flex flex-col items-center justify-between space-y-4">
        {ChatList.filter((el) => el.pinned).map((item) => (
          <ChatListBox
            id={item.id}
            img={item.img}
            name={item.name}
            msg={item.msg}
            time={item.time}
            unread={item.unread}
            online={item.online}
          />
        ))}
      </div>
    </div>
  );
};

export default Chats;
