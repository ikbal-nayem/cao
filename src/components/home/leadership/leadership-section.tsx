'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import LeadershipCard from './leadership-card';

const leaders = [
  {
    name: 'Dr. Muhammad Yunus',
    role: 'Chief Advisor',
    image: 'https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg',
    quote: 'Our mission is to build a Bangladesh where every citizen has the opportunity to prosper. Through innovative policies and sustainable development, we are creating pathways for inclusive growth.',
    description: 'Nobel Peace Prize laureate Dr. Muhammad Yunus brings his vast experience in social entrepreneurship and economic development to guide Bangladesh towards a prosperous future.'
  },
  {
    name: 'M Siraj Uddin Mia',
    role: 'Principal Secretary',
    image: 'https://cdn.ittefaqbd.com/contents/cache/images/1100x618x1/uploads/media/2024/10/02/c49360402c1e1a6f375d3e94c6b58392-66fd54110b8f4.JPG?jadewits_media_id=189251',
    quote: 'Efficient administration and transparent governance are the cornerstones of our progress. We are committed to serving the people of Bangladesh with dedication and integrity.',
    description: 'With decades of experience in public administration, M Siraj Uddin Mia leads the implementation of government policies and ensures efficient coordination across all departments.'
  }
];

const LeadershipSection: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-blue-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-medium">WHO?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders guiding our nation towards progress and prosperity through effective governance and sustainable development initiatives.
          </p>
        </motion.div>

        <div className="space-y-24">
          {leaders.map((leader, index) => (
            <LeadershipCard key={index} {...leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;