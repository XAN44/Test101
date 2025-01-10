"use client";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ContactHeader() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <div className="flex justify-center mb-6">
            <MessageSquare className="w-16 h-16 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            ปรึกษาเรา
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            ติดต่อเราเพื่อรับคำปรึกษาและใบเสนอราคาฟรี
            ทีมงานของเราพร้อมให้บริการคุณ
          </p>
        </motion.div>
      </div>
    </section>
  );
}
