'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Users, Building } from 'lucide-react';

const services = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Policy Development',
    description:
      'Formulating and implementing national policies for sustainable development.',
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: 'Governance',
    description:
      'Ensuring transparent and effective governance across all sectors.',
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Administration',
    description:
      'Coordinating with various ministries and government departments.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Public Services',
    description:
      'Facilitating efficient delivery of public services to citizens.',
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-blue-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of services provided by the Chief Advisor's
            Office
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-950/50 to-blue-900/10 p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-100/80">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
