import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const Desktop = () => {
  return (
    <div className="flex h-screen w-full flex-row">
      <Sidebar />
      <div className="w-[300px] bg-slate-300/30 dark:bg-slate-800/70">
        Chats
      </div>
      <Outlet />
    </div>
  );
};

export default Desktop;
