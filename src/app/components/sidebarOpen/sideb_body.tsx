"use client";
import React from "react";
import { PiNotification } from "react-icons/pi";
import { RiTranslate2 } from "react-icons/ri";
import { motion } from "framer-motion";
function SidebarBody() {
  const ListItem = [
    {
      Setting: [
        {
          title: "ภาษา",
          icon: <RiTranslate2 className="w-6 h-6" />,
        },
        {
          title: "การแจ้งเตือน",
          icon: <PiNotification className="w-6 h-6" />,
        },
      ],
      Help: [
        {
          title: "เงื่อนไขการใช้งาน",
        },
        {
          title: "คำถามที่พบบ่อย",
        },
        {
          title: "ช่วยเหลือ",
        },
        {
          title: "ติดต่อเรา",
        },
      ],
    },
  ];

  return (
    <div className="ml-6 mt-16 h-full">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="text-white/65 font-bold">
            ตั้งค่า
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="mt-1 flex flex-col space-y-5">
            {ListItem[0].Setting.map((item, index) => (
              <div key={index} className="ml-3 mt-4 ">
                <div className="space-x-2 flex">
                  <p>{item.icon}</p>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col mt-12">
          <motion.p
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="text-white/65 font-bold">
            ช่วยเหลือ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="mt-1 flex flex-col space-y-5">
            {ListItem[0].Help.map((item, index) => (
              <div key={index} className="ml-3 mt-4 ">
                <div className="space-x-2 flex">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SidebarBody;
