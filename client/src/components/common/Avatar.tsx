import {
  Avatar as AvatarMain,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type AvatarProps = {
  label?: string;
  src?: string;
  alt?: string;
};

const Avatar: React.FC<AvatarProps> = ({ label, src, alt }) => {
  return (
    <AvatarMain>
      <AvatarImage
        src={label ? label : "https://github.com/shadcn.png"}
        alt={alt ? alt : "@shadcn"}
      />
      <AvatarFallback>{label ? label : "CN"}</AvatarFallback>
    </AvatarMain>
  );
};

export default Avatar;
