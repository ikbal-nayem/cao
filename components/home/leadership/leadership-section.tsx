"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import LeadershipCard from './leadership-card';
import TeamMemberCard from './team-member-card';

const leader = {
  name: 'Dr. Muhammad Yunus',
  role: 'Chief Advisor',
  image: 'https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg',
  quote: 'Our mission is to build a Bangladesh where every citizen has the opportunity to prosper. Through innovative policies and sustainable development, we are creating pathways for inclusive growth.',
  description: 'Nobel Peace Prize laureate Dr. Muhammad Yunus brings his vast experience in social entrepreneurship and economic development to guide Bangladesh towards a prosperous future.'
};

const teamMembers = [
  {
    name: 'M Siraj Uddin Mia',
    role: 'Principal Secretary',
    organization: 'Chief Advisor Office',
    image: 'https://cdn.ittefaqbd.com/contents/cache/images/1100x618x1/uploads/media/2024/10/02/c49360402c1e1a6f375d3e94c6b58392-66fd54110b8f4.JPG?jadewits_media_id=189251'
  },
  {
    name: 'Dr. Mohammad Abdul Latif',
    role: 'Director General (Additional Secretary)',
    organization: 'Chief Advisor Office',
    image: 'https://giupmo.gov.bd/sites/default/files/files/giupmo.portal.gov.bd/officer_list/3853365b_c5dd_41df_8a11_1567882f6d7d/2021-01-06-12-50-ed7716b5876a2b0f555faca03e4da3b4.jpg'
  },
  {
    name: 'Saifullah Panna',
    role: 'Secretary',
    organization: 'Chief Advisor Office',
    image: 'https://www.shokalshondha.com/wp-content/uploads/elementor/thumbs/saifullah-panna-qua4sxivz8fekpmywgnu62hh3d9sq5q7y75i45buoo.jpg'
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Leadership
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders guiding our nation towards progress and prosperity through effective governance and sustainable development initiatives.
          </p>
        </motion.div>

        {/* Chief Advisor Section */}
        <div className="mb-24">
          <LeadershipCard {...leader} index={0} />
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection
