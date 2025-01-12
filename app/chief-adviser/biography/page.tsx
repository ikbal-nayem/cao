'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Book, Globe2 } from 'lucide-react';

export default function BiographyPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Dr. Muhammad Yunus</h1>
            <p className="text-xl text-primary">Chief Adviser of Bangladesh</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg"
                alt="Dr. Muhammad Yunus"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Dr. Muhammad Yunus is a Bangladeshi social entrepreneur, banker, economist, and civil society leader who was awarded the Nobel Peace Prize for founding the Grameen Bank and pioneering the concepts of microcredit and microfinance.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold">Nobel Peace Prize</h4>
                      <p className="text-muted-foreground">
                        Awarded in 2006 for efforts to create economic and social development from below
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Book className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold">Academic Background</h4>
                      <p className="text-muted-foreground">
                        Ph.D. in Economics from Vanderbilt University
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Globe2 className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold">Global Impact</h4>
                      <p className="text-muted-foreground">
                        Founded Grameen Bank, revolutionizing microfinance worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Early Life and Education</h2>
            <p>
              Born in 1940 in the village of Bathua, Dr. Yunus studied at Dhaka University and completed his Ph.D. at Vanderbilt University. His early career included teaching economics at Middle Tennessee State University before returning to Bangladesh.
            </p>

            <h2>Professional Career</h2>
            <p>
              Dr. Yunus founded Grameen Bank in 1983, pioneering the concepts of microcredit and microfinance. The bank has helped millions of people escape poverty through small loans without requiring collateral.
            </p>

            <h2>Awards and Recognition</h2>
            <p>
              Besides the Nobel Peace Prize, Dr. Yunus has received numerous international honors including the Presidential Medal of Freedom and the Congressional Gold Medal.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}