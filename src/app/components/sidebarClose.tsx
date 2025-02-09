// components/sidebarClose.tsx
import React from "react";
import { TbAlignLeft } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";

interface SidebarComponent {
  isOpen: boolean;
  toggle: () => void;
}

function SidebarClose({ isOpen, toggle }: SidebarComponent) {
  return (
    <div className="w-full h-full">
      <div
        className={`fixed top-0 left-0 right-0 w-full h-16  flex items-center justify-between px-6 z-50 ${
          isOpen ? "bg-neutral-500" : "bg-black"
        }`}>
        <button>
          <TbAlignLeft className="w-9 h-9 text-white" onClick={toggle} />
        </button>
        <TiShoppingCart className="w-9 h-9 text-white transform scale-x-[-1]" />
      </div>
    </div>
  );
}

export default SidebarClose;
