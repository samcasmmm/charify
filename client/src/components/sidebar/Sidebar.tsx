import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppState";
import { Icon, ThemeSwitcher, Avatar } from "@/components";
import { Nav_Buttons } from "@/data";
import { setActiveButton } from "@/app/resources/NavButton.slice";
import { faker } from "@faker-js/faker";

interface SidebarProps {
  index: number;
  onClick: () => void;
}

const SidebarIcon: React.FC<SidebarProps> = ({ index, onClick }) => {
  const { activeButton } = useAppSelector((state) => state.navButtons);

  return (
    <Icon
      Icon={Nav_Buttons[index].icon}
      size={30}
      onClick={onClick}
      className={`rounded-lg ${
        activeButton === index
          ? "bg-blue-600 text-white hover:bg-blue-700 hover:dark:bg-blue-700"
          : ""
      }`}
    />
  );
};

const LogoWrapper: React.FC = () => {
  let bool = false;
  const toggleChats = (): void => {
    if (bool) {
      console.log("true");
      bool = false;
    } else {
      console.log("false");
      bool = true;
    }
  };
  return (
    <div
      className="cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:dark:bg-slate-950"
      onClick={toggleChats}
    >
      <img src="/chatify_logo.png" alt="" className="w-16" />
    </div>
  );
};

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-28 bg-slate-50 shadow dark:bg-slate-800">
      <div className="flex h-full flex-col items-center justify-between p-4">
        <div className="flex flex-col items-center space-y-3 pt-6">
          <LogoWrapper />
          {Nav_Buttons.map((_, index) => (
            <SidebarIcon
              key={index}
              index={index}
              onClick={() => dispatch(setActiveButton({ index }))}
            />
          ))}
        </div>
        <div className="flex flex-col items-center space-y-3 pb-6">
          <ThemeSwitcher />
          <Avatar src={faker.image.avatar()} isOnline />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
