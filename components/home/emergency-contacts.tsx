'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import {
  AlertCircle,
  Shield,
  Heart,
  FileText,
  CloudLightning,
  Map,
  Baby,
  Fish,
  Plane,
  Building2,
  Phone,
  Zap,
  Scale,
  Briefcase,
} from 'lucide-react';

const contacts = [
  {
    title: 'Govt. Information',
    number: '333',
    description: 'Govt. Service and Information',
    icon: FileText,
    color: 'from-blue-600 to-blue-400',
  },
  {
    title: 'Emergency Services',
    number: '999',
    description: 'National Emergency Service',
    icon: AlertCircle,
    color: 'from-red-600 to-red-400',
  },
  {
    title: 'Fire Service',
    number: '16163',
    description: 'Emergency Fire Service Support',
    icon: Shield,
    color: 'from-orange-600 to-orange-400',
  },
  {
    title: "Women's Helpline",
    number: '109',
    description: 'Support for Women and Children',
    icon: Heart,
    color: 'from-pink-600 to-pink-400',
  },
  {
    title: 'Anti-Corruption',
    number: '106',
    description: 'Report Corruption',
    icon: Scale,
    color: 'from-purple-600 to-purple-400',
  },
  {
    title: 'Disaster Warning',
    number: '1090',
    description: 'Disaster and Weather Updates',
    icon: CloudLightning,
    color: 'from-yellow-600 to-yellow-400',
  },
  {
    title: 'Land Services',
    number: '16122',
    description: 'Land Information and Services',
    icon: Map,
    color: 'from-green-600 to-green-400',
  },
  {
    title: 'Child Helpline',
    number: '1098',
    description: 'Child Protection Helpline',
    icon: Baby,
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    title: 'Fisheries Info',
    number: '16171',
    description: 'Fisheries and Marine Services',
    icon: Fish,
    color: 'from-teal-600 to-teal-400',
  },
  {
    title: 'Expatriates',
    number: '16135',
    description: 'Services for Expatriates',
    icon: Plane,
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    title: 'e-GP Helpdesk',
    number: '16575',
    description: 'e-Government Procurement',
    icon: Building2,
    color: 'from-violet-600 to-violet-400',
  },
  {
    title: 'BTRC Helpline',
    number: '100',
    description: 'Telecommunication Complaints',
    icon: Phone,
    color: 'from-fuchsia-600 to-fuchsia-400',
  },
  {
    title: 'Power Division',
    number: '16999',
    description: 'Power and Energy Helpline',
    icon: Zap,
    color: 'from-rose-600 to-rose-400',
  },
  {
    title: 'Legal Aid',
    number: '16430',
    description: 'Free Legal Aid Helpline',
    icon: Scale,
    color: 'from-emerald-600 to-emerald-400',
  },
  {
    title: 'Labour Welfare',
    number: '16357',
    description: 'Labor Rights and Support',
    icon: Briefcase,
    color: 'from-sky-600 to-sky-400',
  },
];

const EmergencyContacts: FC = () => {
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
          <h2 className="text-4xl font-bold mb-6">Emergency Contacts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            24/7 Emergency Services at Your Service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -m-1 p-1 blur-lg bg-grid-white" />
              <div className="relative bg-card border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Large Background Icon */}
                <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 opacity-5 group-hover:opacity-10 transition-all duration-300">
                  <contact.icon className="w-32 h-32" />
                </div>
                
                <div className="relative z-10">
                  <div className={`mb-3 inline-flex p-2 rounded-lg bg-gradient-to-br ${contact.color}`}>
                    <contact.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{contact.title}</h3>
                  <p className="text-2xl font-mono font-bold text-primary mb-1">
                    {contact.number}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {contact.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;