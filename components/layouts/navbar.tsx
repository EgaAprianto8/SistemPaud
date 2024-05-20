import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  return (
    <div className="flex w-full bg-[#9b52bd] h-[20%] drop-shadow-xl">
      <div className="w-full p-[30px] flex justify-between ">
        <div className="flex flex-row">
          <div className="relative w-[50px] h-[50px]">
            <Image
              src="/images/logoSistem.png"
              alt="logo"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="border-r border-white mr-[15px] ml-[15px] h-[35px] my-auto" />
          <h1 className="font-bold text-white my-auto text-2xl">
            Sistem Informasi PAUD Bani Ruqoyah
          </h1>
        </div>
        <Popover>
          <PopoverTrigger>
            <div className="relative w-[50px] h-[50px] bg-white rounded-full"></div>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2">
              <button title="p" className="hover:bg-[#f5e0ff] bg-white text-black hover:text-[#9B52BD]">

              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
