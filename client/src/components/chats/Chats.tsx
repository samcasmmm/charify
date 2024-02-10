import React from "react";
import { Icon, Separator } from "@/components/";
import { CircleDashed } from "@/components/icons";
import { ChatList } from "@/data";
import SearchBox from "@/components/chats/SearchBox";
import ChatListBox from "@/components/chats/ChatListBox";
import ArchiveButton from "@/components/chats/ArchiveButton";
import { useAppSelector } from "@/hooks/useAppState";
import { motion } from "framer-motion";

const Chats: React.FC = () => {
  const { isOpen } = useAppSelector((state) => state.ChatSection);
  return (
    <div
      className={`uration-100 z-[1] flex  min-w-[360px] flex-col space-y-6 bg-slate-300/30  p-4 transition-all ease-linear dark:bg-slate-800/70`}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold">Chats</p>
        <Icon Icon={CircleDashed} size={24} />
      </div>
      <SearchBox />
      <ArchiveButton />
      <Separator />
      <div className=" flex flex-col overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-200 dark:scrollbar-track-slate-700  dark:scrollbar-thumb-slate-900">
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
