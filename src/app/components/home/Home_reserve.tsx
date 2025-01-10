"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

function Home_reserve() {
  const handleReserveClick = () => {
    const lineUrl = "https://line.me/R/ti/p/@your-line-id";
    window.location.href = lineUrl;
  };

  return (
    <div className="w-full h-full flex items-center justify-center pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex items-center justify-center flex-col">
        <p className="font-bold text-2xl">ติดต่อสอบถามเพิ่มเติม</p>
        <p className="text-gray-600 mt-6">
          หากสนใจใช้บริการ กรุณากดปุ่มด้านล่าง
        </p>
        <Button
          onClick={handleReserveClick}
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
          ไปที่ LINE เพื่อจองคิว
        </Button>
      </motion.div>
    </div>
  );
}

export default Home_reserve;
