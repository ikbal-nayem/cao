"use client";

import { FC } from 'react';
import { motion } from "framer-motion";
import { FileCheck, Users, Building2, Globe2 } from "lucide-react";

const stats = [
  {
    icon: <FileCheck className="w-8 h-8" />,
    value: "1000+",
    label: "Policies Implemented",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "5M+",
    label: "Citizens Served",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "64",
    label: "Districts Connected",
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    value: "100+",
    label: "International Partners",
  },
];

const StatsSection: FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-4xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;