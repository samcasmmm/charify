import Icon from "@/components/common/Icon";
import { Nav_Buttons } from "@/data";

const Sidebar = () => {
  return (
    <div className="w-28 bg-slate-50 shadow dark:bg-slate-800">
      <div className="mt-4 flex flex-col items-center space-y-3 p-2">
        <div className="cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:dark:bg-slate-950">
          <img src="/chatify_logo.png" alt="" className="w-16" />
        </div>
        {Nav_Buttons.map((item) => (
          <Icon
            Icon={item.icon}
            size={30}
            key={item.index}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
