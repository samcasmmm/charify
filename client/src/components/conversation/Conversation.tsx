import ChatHeader from "./ChatHeader";

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
