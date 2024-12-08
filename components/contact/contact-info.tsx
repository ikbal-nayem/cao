'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: ['Chief Advisor Office', 'Old Parliament Building', 'Dhaka 1221, Bangladesh']
  },
  {
    icon: Phone,
    title: 'Phone',
    content: ['+880 1XX XXX XXXX']
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['info@cao.gov.bd']
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactInfo.map((info, index) => (
        <motion.div
          key={info.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start gap-4 text-gray-800 dark:text-white"
        >
          <div className="p-4 rounded-full bg-cyan-500/20">
            <info.icon className="w-6 h-6 text-cyan-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">{info.title}</h3>
            {info.content.map((line, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-300">{line}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}