"use client";

import { BsCart } from "react-icons/bs";
import { services } from "@/components/services";
import { motion } from "framer-motion";
import Link from "next/link";

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.3, duration: 0.3, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map(({ id, title, description }) => (
            <div
              key={id}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {title}
                </div>
                <Link
                  href="#"
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsCart className="text-primary text-3xl" />
                </Link>
              </div>

              <p className="text-white/60">{description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
