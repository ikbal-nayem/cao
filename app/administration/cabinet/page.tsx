'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cabinetMembers } from '@/lib/cabinet-data';

export default function CabinetPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-700">Advisery Council Members</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished Advisery council members who work tirelessly
            to implement national policies and drive Bangladesh&apos;s
            development agenda
          </p>
        </motion.div>

        <div className="space-y-8">
          {cabinetMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/90 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold">{member.name}</h2>
                    <p className="text-xl text-primary mt-1">{member.role}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Ministry / Division:</h3>
                    <ul className="space-y-2">
                      {member.ministry.map((ministry, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <Link 
                            href={`https://bangladesh.gov.bd/index.php`}
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {ministry}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}