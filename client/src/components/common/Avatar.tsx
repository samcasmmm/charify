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
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ label, src, alt, className }) => {
  return (
    <AvatarMain className={cn("", className)}>
      <AvatarImage
        src={src ? src : "https://github.com/shadcn.png"}
        alt={alt ? alt : "@shadcn"}
      />
      <AvatarFallback>{label ? label : "CN"}</AvatarFallback>
    </AvatarMain>
  );
};

export default Avatar;
