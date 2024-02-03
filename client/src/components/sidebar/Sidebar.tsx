import { useAppDispatch, useAppSelector } from "@/hooks/useAppState";
import { Icon, ThemeSwitcher } from "@/components";
import { Nav_Buttons } from "@/data";
import { setActiveButton } from "@/app/resources/NavButton.slice";

const Sidebar = () => {
  const { activeButton } = useAppSelector((state) => state.navButtons);
  const dispatch = useAppDispatch();
  return (
    <div className="w-28 bg-slate-50 shadow dark:bg-slate-800">
      <div className="flex h-full flex-col items-center justify-between p-4">
        <div className="flex flex-col items-center space-y-3 pt-6">
          <div className="cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:dark:bg-slate-950">
            <img src="/chatify_logo.png" alt="" className="w-16" />
          </div>
          {Nav_Buttons.map((item) => (
            <Icon
              Icon={item.icon}
              size={30}
              key={item.index}
              onClick={() => {
                dispatch(setActiveButton({ index: item.index }));
              }}
              className={`rounded-lg ${activeButton === item.index ? "bg-blue-600 text-white hover:bg-blue-700 hover:dark:bg-blue-700" : ""}`}
            />
          ))}
        </div>
        <div className="pb-6">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
