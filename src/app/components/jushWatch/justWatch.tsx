"use client";
import React, { useEffect, useRef, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiMicrophone } from "react-icons/gi";
import { GrCar } from "react-icons/gr";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuTickets } from "react-icons/lu";
import {
  MdOutlineFastfood,
  MdOutlineLibraryMusic,
  MdOutlineRateReview,
} from "react-icons/md";
import CustomIcon from "../customIcon/customIcon";
import { FaMoneyBills } from "react-icons/fa6";
import { motion } from "framer-motion";

function JustWatch() {
  const list = [
    { title: "โลเคชั่น", icon: <CiLocationOn className="w-6 h-6" /> },
    { title: "จองโต๊ะ", icon: <LuTickets className="w-6 h-6" /> },
    { title: "สั่งอาหาร", icon: <MdOutlineFastfood className="w-6 h-6" /> },
    { title: "คอนเสิร์ต", icon: <GiMicrophone className="w-6 h-6" /> },
    {
      title: "วาร์ป..",
      icon: <IoChatbubbleEllipsesOutline className="w-6 h-6" />,
    },
    { title: "จองที่จอดรถ", icon: <GrCar className="w-6 h-6" /> },
    { title: "กลุ่มดีลร้าน", icon: <CustomIcon /> },
    { title: "ขอเพลง", icon: <MdOutlineLibraryMusic className="w-6 h-6" /> },
    { title: "ให้ทิปพนักงาน", icon: <FaMoneyBills className="w-6 h-6" /> },
    { title: "รีวิว", icon: <MdOutlineRateReview className="w-6 h-6" /> },
  ];

  const [constraint, setConstraint] = useState(0);
  const [rightConstraint, setRightConstraint] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateConstraint = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth;
        const containerWidth = sliderRef.current.clientWidth;

        if (sliderWidth > containerWidth) {
          setConstraint(-(sliderWidth - containerWidth));
          setRightConstraint(50); // ปรับให้เลื่อนไปทางซ้ายได้มากขึ้น
        } else {
          setConstraint(0);
          setRightConstraint(0);
        }
      }
    };

    updateConstraint();
    window.addEventListener("resize", updateConstraint);
    return () => window.removeEventListener("resize", updateConstraint);
  }, [list]);

  return (
    <div className="w-full flex items-center justify-start flex-col mt-14">
      <div className="w-full max-w-5xl overflow-hidden">
        <h2 className="text-2xl text-start w-full font-bold mb-5 ml-6">
          เลือกสิ่งที่คุณต้องการ
        </h2>
        <div
          ref={sliderRef}
          className="
        
        mdx2:max-w-full 
        mdx2:w-full overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: constraint, right: rightConstraint }}
            dragMomentum={true}
            whileTap={{ cursor: "grabbing" }}
            animate={{ x: 0 }}
            className="grid grid-cols-5 place-items-center md:gap-3 xs:gap-x-28 xs:gap-y-12">
            {list.map((item, index) => (
              <motion.div
                key={index}
                className="
                flex flex-col items-center justify-center pb-3 w-[87px] h-[75px] pt-3 space-y-2 bg-neutral-900 rounded-lg shadow-md flex-shrink-0">
                <div className="text-purple-500">{item.icon}</div>
                <div className="text-sm">{item.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default JustWatch;
