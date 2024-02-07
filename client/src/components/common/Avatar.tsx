import {
  Avatar as AvatarMain,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/clxs";

type AvatarProps = {
  label?: string;
  src?: string;
  alt?: string;
  isOnline?: boolean;
  className?: string;
};

type isOnlineProps = {
  online: boolean | false;
};

const RippleEffect = ({ online }: isOnlineProps) => {
  return (
    online && (
      <div className="absolute bottom-2 right-2 z-50 h-3 w-3 rounded-full ">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
        </span>
      </div>
    )
  );
};

const Avatar: React.FC<AvatarProps> = ({
  label,
  src,
  alt,
  isOnline = false,
  className,
}) => {
  return (
    <div className="relative p-2">
      <AvatarMain
        className={cn(
          "border-2 border-gray-400 dark:border-gray-100",
          className,
        )}
      >
        <AvatarImage
          src={src ? src : "https://github.com/shadcn.png"}
          alt={alt ? alt : "@shadcn"}
        />
        <AvatarFallback>{label ? label : "CN"}</AvatarFallback>
      </AvatarMain>

      <RippleEffect online={isOnline} />
    </div>
  );
};

export default Avatar;
