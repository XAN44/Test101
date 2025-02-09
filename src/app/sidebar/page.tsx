"use client";
import { GridIcon } from "@radix-ui/react-icons";
import { Grid } from "lucide-react";
import React, { useEffect, useState } from "react";
import { TbAlignLeft, TbAlignLeft2 } from "react-icons/tb";
import SidebarOpen from "../components/sidebarOpen";
import SidebarClose from "../components/sidebarClose";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.className = isOpen ? "bg-neutral-500" : "bg-black";
  }, [isOpen]);

  return (
    <>
      <div className="">
        {isOpen ? <SidebarOpen toggle={toggleMenu} isOpen={isOpen} /> : null}
        <SidebarClose toggle={toggleMenu} isOpen={isOpen} />
      </div>
    </>
  );
}

export default Sidebar;
