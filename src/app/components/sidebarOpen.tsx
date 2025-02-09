"use client";
import React, { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, useAnimationControls } from "framer-motion";
import SidebarContent from "./sidebarOpen/sideb_content";

interface SidebarComponent {
  isOpen: boolean;
  toggle: () => void;
}

const containerVarians = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      dumping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "20rem",
    transition: {
      type: "spring",
      dumping: 15,
      duration: 0.5,
    },
  },
};

function SidebarOpen({ isOpen, toggle }: SidebarComponent) {
  const boxRef = useRef<HTMLDivElement>(null);

  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      {
        containerControls.start("close");
      }
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed inset-0 bg-black/50 z-[60]" onClick={toggle} />
      <motion.nav
        initial="close"
        animate={containerControls}
        variants={containerVarians}
        key="sidebar"
        ref={boxRef}
        className={` bg-neutral-900   
          h-screen fixed top-0 left-0 z-[70]
          xs:w-[60%]
          smx:w-[50%]
          ipad:w-[40%]
          mdx:w-[30%]
          mdx2:w-[25%]
          mdx3:w-[20%]
          xxl:w-[21%]`}>
        <div className="flex h-full flex-col justify-start">
          <div className="pt-6 pl-6">
            <button>
              <RxCross2 onClick={toggle} className="w-9 h-9 text-white" />
            </button>
          </div>
          <SidebarContent />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="flex flex-grow items-center justify-center">
            <button className="p-3 bg-red-800/60 rounded-full w-40">
              ออกจากระบบ
            </button>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}

export default SidebarOpen;
