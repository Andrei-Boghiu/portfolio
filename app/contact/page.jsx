"use client";

import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.3, duration: 0.3, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] p-10 bg-[#27272c] rounded-xl">
          <h3 className="text-3xl">Contact</h3>
          <p>Feel free to reach out to me using LinkedIn</p>

          <Link href="https://www.linkedin.com/in/andreiboghiu/">
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
