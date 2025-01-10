"use client";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "โทรศัพท์",
      info: "099-999-9999",
      description: "ติดต่อเราได้ตลอด 24 ชั่วโมง",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "อีเมล",
      info: "contact@example.com",
      description: "เราจะตอบกลับภายใน 24 ชั่วโมง",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "ที่อยู่",
      info: "กรุงเทพมหานคร",
      description: "ให้บริการครอบคลุมทั่วกรุงเทพและปริมณฑล",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "เวลาทำการ",
      info: "24/7",
      description: "เปิดให้บริการทุกวัน ไม่มีวันหยุด",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">ข้อมูลการติดต่อ</h2>
        <p className="text-muted-foreground">
          เลือกช่องทางที่สะดวกสำหรับคุณ เรายินดีให้คำปรึกษา
        </p>
      </div>

      <div className="grid gap-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}>
            <Card>
              <CardBody className="flex items-start gap-4 p-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-lg mb-1">{item.info}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
