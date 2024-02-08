import React from "react";
import { Icon, Separator } from "@/components/";
import { CircleDashed } from "@/components/icons";
import { ChatList } from "@/data";
import SearchBox from "@/components/chats/SearchBox";
import ChatListBox from "@/components/chats/ChatListBox";
import ArchiveButton from "@/components/chats/ArchiveButton";

const Chats: React.FC = () => {
  return (
    <div className="flex w-[360px] flex-col space-y-6 bg-slate-300/30 p-4 dark:bg-slate-800/70">
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
              key={item.id}
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
              key={item.id}
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
