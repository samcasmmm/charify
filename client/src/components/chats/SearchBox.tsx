import React from "react";
import { Input } from "@/components/";
import { MagnifyingGlass } from "@/components/icons";

const SearchBox: React.FC = () => {
  return (
    <div className=" flex w-full flex-row items-center rounded-full bg-blue-100 p-2 px-3 dark:bg-blue-900">
      <MagnifyingGlass size={24} className="text-blue-600 dark:text-blue-300" />
      <Input
        className="border-none bg-transparent text-blue-600  placeholder:text-blue-600  focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-blue-300 placeholder:dark:text-blue-300 "
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
