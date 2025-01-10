"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">แบบฟอร์มติดต่อ</h2>
      <Button type="submit" className="w-full">
        ส่งข้อมูล
      </Button>
    </motion.div>
  );
}
