"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function Activity() {
  const list = [
    {
      image: "/poster1.jpeg",
      title: "Titanium",
      date: "12 ธันวา 2024",
      time: "19:00 - 23:00 น",
    },
    {
      image: "/poster2.jpeg",
      title: "Clash",
      date: "15 ธันวา 2024",
      time: "19:00 - 23:00 น",
    },
  ];

  return (
    <div className="w-full flex items-center justify-start flex-col mt-14">
      <div className="w-full xs:max-w-5xl overflow-hidden">
        <h2 className="text-2xl text-start w-full font-bold mb-5 ml-6">
          คอนเสิร์ตใหม่มาแรง
        </h2>
        {list.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
            className="
            flex flex-col xs:space-y-4 space-x-6 xs:w-screen max-2xl:w-full pt-6
            ipad:flex-row mdx2:items-start ipad:space-y-0 ipad:justify-start
          "
            key={index}>
            <div className="w-[200px] h-[300px] flex-shrink-0">
              <Image
                src={item.image}
                width={200}
                height={300}
                className="w-full h-full object-cover"
                alt="poster"
              />
            </div>
            <div
              className="
            flex flex-col justify-between items-start
            min-h-[300px] w-[200px] 
            ipad:justify-between xs:justify-start xs:space-y-16 ipad:space-y-0
          ">
              <div className="space-y-3">
                <p className="text-2xl font-bold">{item.title}</p>
                <div className="flex space-x-3">
                  <FaCalendarAlt className="w-5 h-5 text-purple-500" />
                  <p>{item.date}</p>
                </div>
                <div className="flex space-x-3">
                  <MdOutlineAccessTimeFilled className="w-5 h-5 text-purple-500" />
                  <p>{item.time}</p>
                </div>
              </div>
              <button className="bg-gradient-to-r pl-3 pt-2 pb-2 pr-3 w-24 rounded-full from-purple-900 to-fuchsia-800 font-bold">
                ซื้อบัตร
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
