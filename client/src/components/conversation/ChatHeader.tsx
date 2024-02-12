import { VideoCamera, Phone, MagnifyingGlass, CaretDown } from "phosphor-react";
import { Avatar, Icon } from "..";
import { faker } from "@faker-js/faker";

const ChatHeader = () => {
  const iconArray = [VideoCamera, Phone, MagnifyingGlass, CaretDown];

  return (
    <div className="w-full bg-slate-200 p-2 shadow-md dark:bg-slate-800">
      <div className="flex h-full w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-2 pl-3">
          <Avatar src={faker.image.avatar()} isOnline />
          <div className="flex flex-col justify-center ">
            <p className="text-md font-semibold">Sameer Bagwan</p>
            <p className="text-sm">online</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3">
          {iconArray.map((icon) => (
            <Icon Icon={icon} size={24} className="hover:bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
