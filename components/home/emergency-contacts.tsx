'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Phone, Ambulance, AlertCircle, FlameKindling } from 'lucide-react';

const EmergencyContacts: FC = () => {
  const contacts = [
    {
      Icon: Phone,
      title: 'National Emergency',
      number: '999',
      description: '24/7 Emergency Services'
    },
    {
      Icon: Ambulance,
      title: 'Ambulance',
      number: '16263',
      description: 'Medical Emergency'
    },
    {
      Icon: AlertCircle,
      title: 'Police',
      number: '01769-690019',
      description: 'Law Enforcement'
    },
    {
      Icon: FlameKindling,
      title: 'Fire Service',
      number: '16163',
      description: 'Fire & Rescue'
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Emergency Contacts</h2>
          <p className="text-blue-100">24/7 Emergency Services at Your Service</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <contact.Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
              <p className="text-2xl font-mono font-bold text-blue-200 mb-2">
                {contact.number}
              </p>
              <p className="text-blue-200 text-sm">{contact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;