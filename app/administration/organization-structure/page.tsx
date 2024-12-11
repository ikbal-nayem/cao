'use client';

import { motion } from 'framer-motion';
import { Building2, Users, FileText, Globe } from 'lucide-react';

const departments = [
  {
    title: 'Cabinet Division',
    description: 'Coordinates inter-ministerial affairs and policy implementation',
    icon: Building2,
    roles: [
      'Cabinet Secretary',
      'Additional Secretary',
      'Joint Secretary'
    ]
  },
  {
    title: 'Public Administration',
    description: 'Manages civil service and administrative matters',
    icon: Users,
    roles: [
      'Director General',
      'Director (Admin)',
      'Deputy Director'
    ]
  },
  {
    title: 'Planning Commission',
    description: 'Formulates development plans and economic policies',
    icon: FileText,
    roles: [
      'Chief Planning Officer',
      'Principal Planner',
      'Senior Planner'
    ]
  },
  {
    title: 'External Relations',
    description: 'Handles international cooperation and diplomatic affairs',
    icon: Globe,
    roles: [
      'Director (International)',
      'Senior Coordinator',
      'Protocol Officer'
    ]
  }
];

export default function OrganizationStructurePage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Organization Structure</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the hierarchical structure and departmental organization of the Chief Adviser&apos;s Office
          </p>
        </motion.div>

        {/* Organizational Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="text-center p-6 bg-primary text-primary-foreground rounded-lg">
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

        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{dept.title}</h3>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Key Positions:</h4>
                  <ul className="space-y-1">
                    {dept.roles.map((role) => (
                      <li key={role} className="text-sm text-muted-foreground">
                        • {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}