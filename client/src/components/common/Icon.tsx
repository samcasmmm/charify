import { Icon } from "phosphor-react";
import { cn } from "@/lib/clxs";

type Props = {
  Icon: Icon;
  size?: number;
  onClick?: () => void;
  className?: string;
};

const Icon = ({ Icon, size, onClick, className }: Props) => {
  return (
    <div
      className={cn(
        "cursor-pointer flex-col items-center justify-center rounded-full p-2 transition-all duration-300 ease-in-out first-line:flex hover:bg-slate-200 dark:hover:bg-slate-700",
        className,
      )}
      onClick={onClick}
    >
      <Icon size={size} className="" />
    </div>
  );
};

export default Icon;
