import Icon from "@/components/common/Icon";
import { Profile_Menu } from "@/data/index";
import { Button } from "@/components";
import { useAppSelector, useAppDispatch } from "@/hooks/useAppState";
import { incre } from "@/app/resources/Counter.slice";
import NameAvatar from "@/components/common/NameAvatar";

const Home = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-8 flex items-center justify-center space-x-5">
      <Icon Icon={Profile_Menu[1].icon} size={24} className="" />
      <Button onClick={() => dispatch(incre())}>{count}</Button>
      <NameAvatar label="vinit" />
    </div>
  );
};

export default Home;
