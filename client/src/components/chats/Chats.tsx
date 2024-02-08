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
    <div className="w-full rounded bg-white p-2 dark:bg-slate-700">
      <div className="flex">
        <div className="flex-2 flex w-full flex-row justify-start space-x-2">
          <Avatar src={img} isOnline={online} />
          <div className="">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{msg}</p>
          </div>
        </div>
        <div
          className={`flex flex-1 flex-col items-center ${unread !== 0 && "justify-center"}`}
        >
          <p>{time}</p>
          {unread !== 0 && (
            <p className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-sm text-white">
              {unread}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const ArchiveButton = () => {
  return (
    <div className="group flex cursor-pointer flex-row items-center space-x-1 rounded-lg p-2 duration-200 ease-in-out hover:bg-blue-600">
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
      <div className=" scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white dark:scrollbar-track-slate-700 flex flex-col overflow-y-scroll">
        <p className="py-3 font-semibold">Pinned</p>
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
        <p className="py-3 font-semibold">All Chats</p>
        <div className="flex flex-col items-center justify-between space-y-4">
          {ChatList.filter((el) => !el.pinned).map((item) => (
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
    </div>
  );
};

export default Chats;
