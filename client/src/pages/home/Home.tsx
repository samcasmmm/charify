import { Chats, Conversation } from "@/components";

const Home = () => {
  return (
    <div className="flex w-full flex-row ">
      <Chats />
      <Conversation />
    </div>
  );
};

export default Home;
