'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Book, Globe2 } from 'lucide-react';

const BiographySection: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Biography of the Chief Adviser</h2>
          <p className="text-xl text-muted-foreground">
            Dr. Muhammad Yunus: A Visionary Leader
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg"
              alt="Dr. Muhammad Yunus"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Academic Excellence</h3>
              <p className="text-lg text-muted-foreground">
                Dr. Yunus holds a Ph.D. in Economics from Vanderbilt University and has
                pioneered innovative approaches to poverty alleviation and social business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">Nobel Peace Prize</h4>
                  <p className="text-muted-foreground">
                    Awarded the Nobel Peace Prize in 2006 for pioneering micro-credit
                    and microfinance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Book className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">Published Works</h4>
                  <p className="text-muted-foreground">
                    Author of several books on social business and poverty alleviation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">Global Impact</h4>
                  <p className="text-muted-foreground">
                    His work has influenced poverty reduction strategies worldwide
                  </p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-muted-foreground">
              "Our mission is to build a Bangladesh where every citizen has the opportunity
              to prosper through sustainable development and inclusive growth."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;