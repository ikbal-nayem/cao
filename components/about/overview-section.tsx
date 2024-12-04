'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OverviewSection: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-blue-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About the Chief Advisor&apos;s Office
          </h1>
          <p className="text-xl text-muted-foreground">
            Leading Bangladesh towards progress through effective governance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">Our Role & History</h2>
            <p className="text-lg text-muted-foreground">
              The Chief Advisor&apos;s Office serves as the principal administrative authority
              of Bangladesh, coordinating national policies and ensuring effective governance.
              Established during a critical period of democratic transition, the office has
              evolved to become a cornerstone of administrative excellence.
            </p>
            <p className="text-lg text-muted-foreground">
              Our office plays a pivotal role in shaping national policies, maintaining
              administrative efficiency, and fostering collaboration between various
              government departments and agencies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/static/image/cao.jpg"
              alt="Chief Advisor's Office"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 p-8 bg-card rounded-2xl border border-border/50"
        >
          <h3 className="text-2xl font-bold mb-4">Significance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Policy Coordination</h4>
              <p className="text-muted-foreground">
                Ensuring coherent policy implementation across all government departments
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Administrative Oversight</h4>
              <p className="text-muted-foreground">
                Maintaining efficiency and transparency in government operations
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">National Development</h4>
              <p className="text-muted-foreground">
                Driving sustainable development initiatives for Bangladesh&apos;s progress
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;