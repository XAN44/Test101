"use client";
import Image from "next/image";
import React from "react";
import { IoIosCheckmark, IoMdCheckmark } from "react-icons/io";
import { TiCameraOutline } from "react-icons/ti";
import SidebarBody from "./sideb_body";
import { AnimatePresence, motion } from "framer-motion";

function SidebarContent() {
  return (
    <AnimatePresence>
      <div className=" flex flex-col items-start ">
        <div className="w-full h-full flex items-center justify-center space-x-3">
          <div className=" relative  w-24 h-24 ">
            <Image
              src="/Personal.jpg"
              alt="Avatar"
              width={100}
              height={100}
              className=" object-cover rounded-full  w-24 h-24"
            />
            <TiCameraOutline className="absolute bottom-0 right-0 w-7 h-7 bg-neutral-900 rounded-full text-xl p-1 shadow-md" />
          </div>
          <div className="flex flex-col ">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex space-x-1">
              <p>Name</p>
              <p>Last</p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="text-neutral-400">
              091-1234-567
            </motion.p>

            <div className="flex space-x-1  items-center pt-1">
              <div className="relative w-4 h-4 bg-gradient-to-r from-purple-900 to-fuchsia-800 z-0 rounded-full">
                <IoMdCheckmark className="w-3 h-3 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="bg-gradient-to-r from-purple-900 to-fuchsia-800 text-transparent bg-clip-text font-bold">
                Verify
              </p>
            </div>
          </div>
        </div>
        <SidebarBody />
      </div>
    </AnimatePresence>
  );
}

export default SidebarContent;
