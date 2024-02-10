import { useAppSelector, useAppDispatch } from "@/hooks/useAppState";
import { Chats } from "@/components";
import { motion } from "framer-motion";

const Home = () => {
  const { count } = useAppSelector((state) => state.counter);
  const { isOpen } = useAppSelector((state) => state.ChatSection);
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full flex-row ">
      {/* <Chats /> */}
      <div className="w-[calc(100vw - 42px)] j h-full w-full bg-white p-3  transition-all duration-100 ease-linear dark:bg-slate-800">
        C
      </div>
    </div>
  );
};

export default Home;
