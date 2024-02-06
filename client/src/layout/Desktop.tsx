import { Sidebar } from "@/components";
import Chats from "@/components/chats/Chats";
import { Outlet } from "react-router-dom";

const Desktop = () => {
  return (
    <div className="flex h-screen w-full flex-row">
      <Sidebar />
      <Chats />
      <Outlet />
    </div>
  );
};

export default Desktop;
