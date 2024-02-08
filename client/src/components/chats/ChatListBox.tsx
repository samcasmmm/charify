import React from "react";
import { Avatar } from "@/components/";

type ChatListBoxProps = {
  id: number;
  img: string;
  name: string;
  msg: string;
  time: string;
  unread: number;
  online: boolean;
};

const truncateMessage = (message: string, truncateLength: number = 20) => {
  return message.length > truncateLength
    ? `${message.slice(0, truncateLength)} ...`
    : message;
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
    <div className="w-[95%] cursor-pointer rounded-md bg-white p-2 transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-800">
      <div className="flex">
        <div className="flex-2 flex w-full flex-row justify-start space-x-2">
          <Avatar src={img} isOnline={online} />
          <div className="">
            <p className="font-semibold">
              {name} : {id}
            </p>
            <p className="text-sm">{truncateMessage(msg)}</p>
          </div>
        </div>
        <div
          className={`flex flex-1 flex-col items-center ${
            unread !== 0 && "justify-center"
          }`}
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

export default ChatListBox;
