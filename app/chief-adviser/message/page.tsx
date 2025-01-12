'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MessagePage() {
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
            <h1 className="text-4xl font-bold mb-6">Message from the Chief Adviser</h1>
            <p className="text-xl text-muted-foreground">
              Dr. Muhammad Yunus shares his vision for Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg"
                alt="Dr. Muhammad Yunus"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <blockquote className="text-xl italic border-l-4 border-primary pl-4">
                "Our mission is to build a Bangladesh where every citizen has the opportunity
                to prosper through sustainable development and inclusive growth."
              </blockquote>

              <div className="prose prose-lg dark:prose-invert">
                <p>
                  As the Chief Adviser of Bangladesh, I am deeply committed to serving
                  our nation and its people. Our focus is on implementing effective
                  governance mechanisms, ensuring transparency, and driving sustainable
                  development initiatives that benefit all citizens.
                </p>

                <p>
                  We are working tirelessly to strengthen our democratic institutions,
                  promote economic growth, and create opportunities for every
                  Bangladeshi. Our vision encompasses digital transformation,
                  environmental sustainability, and social equity.
                </p>

                <p>
                  Together, we can build a prosperous and inclusive Bangladesh that
                  stands as a model of development and progress in the global community.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-bold">Dr. Muhammad Yunus</h3>
                <p className="text-primary">Chief Adviser of Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}