import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const Desktop = () => {
  return (
    <div className="flex h-screen w-full flex-row">
      <Sidebar />
      <div>Chats</div>
      <Outlet />
    </div>
  );
};

export default Desktop;
