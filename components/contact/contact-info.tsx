'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: ['Chief Advisor\'s Office', 'Old Parliament Building', 'Dhaka 1221, Bangladesh']
  },
  {
    icon: Phone,
    title: 'Phone',
    content: ['+880-2-9545400', '+880-2-9545500']
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['info@cao.gov.bd']
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: ['Sunday - Thursday', '9:00 AM - 5:00 PM']
  }
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactInfo.map((info, index) => (
        <motion.div
          key={info.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
              <info.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              {info.content.map((line, i) => (
                <p key={i} className="text-muted-foreground">{line}</p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}