import { Avatar } from "..";
import { faker } from "@faker-js/faker";
import Icon from "./../common/Icon";

const ChatHeader = () => {
  return (
    <div className="h-[100px] w-full bg-slate-200 shadow-md dark:bg-slate-800">
      <div className="flex h-full w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-2 pl-3">
          <Avatar src={faker.image.avatar()} isOnline />
          <div className="flex flex-col justify-center ">
            <p className="text-md font-semibold">Sameer Bagwan</p>
            <p className="text-sm">online</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <Icon />
        </div>
      </div>
    </div>
  );
};
const ChatMessages = () => {
  return <div className=" bg relative w-full flex-grow"></div>;
};
const ChatFooter = () => {
  return (
    <div className="h-[100px] w-full bg-slate-200 shadow-md dark:bg-slate-800 "></div>
  );
};

const Conversation = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <ChatHeader />

      <ChatMessages />
      <ChatFooter />
    </div>
  );
};

export default Conversation;
