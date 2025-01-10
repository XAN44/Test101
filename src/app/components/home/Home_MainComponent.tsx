"use client";
import React from "react";
import { motion } from "framer-motion";

import { PenTool, Shield, ThumbsUp, Timer, Wrench } from "lucide-react";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";

export default function HomeMain() {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "รับประกันผลงาน",
      description: "รับประกันการติดตั้งและอุปกรณ์ทุกชิ้น พร้อมบริการหลังการขาย",
    },
    {
      icon: <Timer className="w-8 h-8 text-primary" />,
      title: "บริการรวดเร็ว",
      description: "ทีมงานพร้อมให้บริการภายใน 24 ชั่วโมง ทุกวันไม่มีวันหยุด",
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "ช่างมืออาชีพ",
      description: "ทีมช่างผู้เชี่ยวชาญ ผ่านการอบรมและมีประสบการณ์สูง",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการของเรา</h2>
          <p className="text-muted-foreground text-lg">
            ให้บริการครบวงจรทั้งติดตั้งและซ่อมบำรุง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}>
              <Card>
                <CardHeader>
                  <div className="mr-3">{service.icon}</div>
                  <h1>{service.title}</h1>
                </CardHeader>
                <CardFooter>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
              alt="Air Conditioning Service"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}>
            <h3 className="text-2xl font-bold mb-4">
              บริการติดตั้งและซ่อมแอร์ครบวงจร
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <ThumbsUp className="text-primary" />
                <span>ติดตั้งแอร์บ้านและแอร์เชิงพาณิชย์</span>
              </li>
              <li className="flex items-center gap-2">
                <ThumbsUp className="text-primary" />
                <span>ล้างแอร์และซ่อมบำรุง</span>
              </li>
              <li className="flex items-center gap-2">
                <ThumbsUp className="text-primary" />
                <span>เติมน้ำยาแอร์</span>
              </li>
              <li className="flex items-center gap-2">
                <ThumbsUp className="text-primary" />
                <span>ตรวจเช็คและแก้ไขระบบไฟฟ้า</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}>
            <h3 className="text-2xl font-bold mb-4">
              บริการติดตั้งกล้องวงจรปิดมาตรฐานสูง
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Wrench className="text-primary" />
                <span>ติดตั้งกล้องวงจรปิดทั้งในและนอกอาคาร</span>
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="text-primary" />
                <span>ระบบบันทึกภาพความละเอียดสูง</span>
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="text-primary" />
                <span>ระบบดูผ่านมือถือ</span>
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="text-primary" />
                <span>บริการซ่อมบำรุงและอัพเกรดระบบ</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
              alt="CCTV Installation"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
