'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const departments = [
  {
    title: 'Administration Wing',
    description: 'Oversees general administration, human resources, and office management',
    roles: ['Director General', 'Additional Secretary', 'Deputy Secretary']
  },
  {
    title: 'Planning & Development Wing',
    description: 'Responsible for policy planning, project development, and implementation',
    roles: ['Director General', 'Joint Secretary', 'Deputy Director']
  },
  {
    title: 'Economic Affairs Wing',
    description: 'Handles economic policy coordination and financial matters',
    roles: ['Director General', 'Economic Advisor', 'Research Director']
  },
  {
    title: 'International Cooperation Wing',
    description: 'Manages international relations and development partnerships',
    roles: ['Director General', 'Foreign Affairs Advisor', 'Program Coordinator']
  }
];

const OrganizationSection: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Organizational Structure</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our organization is structured to ensure efficient coordination and
            implementation of government policies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <h3 className="text-2xl font-bold mb-4">{dept.title}</h3>
              <p className="text-muted-foreground mb-6">{dept.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Key Positions:</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {dept.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Organizational Hierarchy</h3>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-center p-4 bg-primary text-primary-foreground rounded-lg">
                Chief Advisor
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                  Principal Secretary
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                  Cabinet Secretary
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {departments.map((dept) => (
                  <div
                    key={dept.title}
                    className="text-center p-4 bg-card rounded-lg border border-border/50 text-sm"
                  >
                    {dept.title.split(' ')[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizationSection;