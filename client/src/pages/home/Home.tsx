import Icon from "@/components/common/Icon";
import { Profile_Menu } from "@/data/index";
import { Button } from "@/components";
import { useAppSelector, useAppDispatch } from "@/hooks/useAppState";
import { incre } from "@/app/resources/Counter.slice";
import NameAvatar from "@/components/common/NameAvatar";
import { Sidebar, Chats } from "@/components";

const Home = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full flex-row">
      <Chats />
      <div className="w-[calc(100vw - 42px)] h-full bg-white">C</div>
    </div>
  );
};

export default Home;
