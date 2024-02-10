import { useAppSelector, useAppDispatch } from "@/hooks/useAppState";
import { Chats } from "@/components";
import { motion } from "framer-motion";

const Home = () => {
  const { count } = useAppSelector((state) => state.counter);
  const { isOpen } = useAppSelector((state) => state.ChatSection);
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full flex-row ">
      <Chats />
      <motion.div
        className="w-[calc(100vw - 42px)] h-full bg-white p-3 duration-100 ease-linear"
        animate={{
          x: isOpen ? -360 : 0,
        }}
      >
        C
      </motion.div>
    </div>
  );
};

export default Home;
