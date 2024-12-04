'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, FileText, Globe } from 'lucide-react';

const offices = [
  {
    title: 'Cabinet Division',
    description: 'Coordinates inter-ministerial affairs and policy implementation',
    icon: Building2
  },
  {
    title: 'Public Administration',
    description: 'Manages civil service and administrative matters',
    icon: Users
  },
  {
    title: 'Planning Commission',
    description: 'Formulates development plans and economic policies',
    icon: FileText
  },
  {
    title: 'External Relations',
    description: 'Handles international cooperation and diplomatic affairs',
    icon: Globe
  }
];

const ExecutiveOfficesSection: FC = () => {
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
          <h2 className="text-4xl font-bold mb-6">Executive Offices</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our executive offices work in coordination to ensure effective governance
            and policy implementation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => {
            const Icon = office.icon;
            return (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{office.title}</h3>
                <p className="text-muted-foreground">{office.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border/50"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Attached Bodies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Research Wing</h4>
              <p className="text-muted-foreground">
                Conducts policy research and analysis
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Implementation Unit</h4>
              <p className="text-muted-foreground">
                Monitors and evaluates policy implementation
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Coordination Cell</h4>
              <p className="text-muted-foreground">
                Ensures inter-departmental coordination
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveOfficesSection;