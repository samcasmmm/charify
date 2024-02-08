import { ArchiveBox } from "@/components/icons";

const ArchiveButton = () => {
  return (
    <div className="group flex cursor-pointer flex-row items-center space-x-2 rounded-lg p-2 duration-200 ease-in-out hover:bg-blue-600">
      <ArchiveBox
        size={24}
        className="duration-200 ease-in-out group-hover:text-white"
      />
      <p className="select-none duration-200 ease-in-out group-hover:text-white">
        Archive
      </p>
    </div>
  );
};

export default ArchiveButton;
