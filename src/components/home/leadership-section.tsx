"use client";

import { FC } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

const LeadershipSection: FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders guiding our nation towards progress
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-96">
              <Image
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTDQv46ipsEqt9MZ6FaIZWysVAwOYVF3Ivy72QjYrwB-VyZKxoOMGy3CavLZ9pmpQoKIYNcEKfDOQuWTG0"
                alt="Dr. Muhammad Yunus"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Dr. Muhammad Yunus</h3>
              <p className="text-lg text-muted-foreground mb-4">Chief Advisor</p>
              <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
                "Our mission is to build a Bangladesh where every citizen has the opportunity to prosper. Through innovative policies and sustainable development, we are creating pathways for inclusive growth."
              </blockquote>
              <p className="text-muted-foreground">
                Nobel Peace Prize laureate Dr. Muhammad Yunus brings his vast experience in social entrepreneurship and economic development to guide Bangladesh towards a prosperous future.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-96">
              <Image
                src="https://cdn.ittefaqbd.com/contents/cache/images/1100x618x1/uploads/media/2024/10/02/c49360402c1e1a6f375d3e94c6b58392-66fd54110b8f4.JPG?jadewits_media_id=189251"
                alt="M Siraz Uddin Mia"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">M Siraz Uddin Mia</h3>
              <p className="text-lg text-muted-foreground mb-4">Principal Secretary</p>
              <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
                "Efficient administration and transparent governance are the cornerstones of our progress. We are committed to serving the people of Bangladesh with dedication and integrity."
              </blockquote>
              <p className="text-muted-foreground">
                With decades of experience in public administration, M Siraz Uddin Mia leads the implementation of government policies and ensures efficient coordination across all departments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;