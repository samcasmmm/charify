import { cn } from "@/lib/clxs";
import createAvatar from "@/utils/createAvatar";

interface Props {
  label: string;
  className?: string;
}
const Avatar = ({ label, className }: Props) => {
  const { name, colorClass } = createAvatar(label);

  return (
    <p
      className={cn(
        `flex cursor-pointer flex-col items-center justify-center rounded-full bg-slate-50 p-2 transition-all ease-in-out first-line:flex hover:bg-slate-100 dark:bg-slate-800 ${colorClass} bottom-[1px] h-12 w-12 border border-slate-100 text-center font-semibold dark:border-slate-900 dark:hover:bg-slate-700`,
        className,
      )}
    >
      {name}
    </p>
  );
};

export default Avatar;
