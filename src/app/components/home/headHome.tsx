"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function HeadHome() {
  return (
    <div className="w-full h-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-16 ">
        <div className="flex items-center justify-center w-full h-full">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}>
            <Image
              src="svg2.svg"
              alt="Content One"
              width={1080}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col items-center justify-start  "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeInOut",
          }}
          style={{
            justifyContent: "flex-start",
          }}>
          <h1 className="font-bold whitespace-normal">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            distinctio autem ratione odio esse unde veritatis eligendi provident
            totam facere!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeInOut",
          }}>
          <h1 className="font-bold whitespace-normal">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            distinctio autem ratione odio esse unde veritatis eligendi provident
            totam facere!
          </p>
        </motion.div>
        <div className="flex items-center justify-center w-full h-full">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: "easeInOut",
            }}>
            <Image
              src="svg2.svg"
              alt="Content One"
              width={1080}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeadHome;
