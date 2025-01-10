"use client";
import React from "react";
import B1_Content from "./ChildComponents/B1_Content";
import { ArrowRight, Camera, Wind } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
function Home_HeaderComponents() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&q=80"
          alt="Background"
          fill
          className="object-cover brightness-[0.2]"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Camera className="w-8 h-8 text-primary" />
            <Wind className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            บริการติดตั้ง<span className="text-primary">กล้องวงจรปิด</span>และ
            <span className="text-primary">แอร์</span>
            โดยทีมงานมืออาชีพ
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            ให้บริการติดตั้ง ซ่อมบำรุง และดูแลระบบโดยช่างผู้เชี่ยวชาญ
            พร้อมรับประกันผลงาน
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                ปรึกษาเรา
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home_HeaderComponents;
