'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Mail, Phone } from 'lucide-react';

const staffMembers = [
  {
    id: 1,
    name: 'Dr. Muhammad Yunus',
    designation: 'Chief Adviser',
    email: 'yunus@cao.gov.bd',
    phone: '+880-2-XXXXXXXX',
    image: 'https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg',
    department: 'Office of the Chief Adviser',
    education: [
      'Ph.D. in Economics, Vanderbilt University',
      'M.A. in Economics, Vanderbilt University',
      'B.A. in Economics, Dhaka University'
    ],
    experience: [
      'Founder, Grameen Bank',
      'Professor, Chittagong University',
      'Nobel Peace Prize Laureate, 2006'
    ],
    bio: 'Dr. Muhammad Yunus is a Bangladeshi social entrepreneur, banker, economist, and civil society leader who was awarded the Nobel Peace Prize for founding the Grameen Bank and pioneering the concepts of microcredit and microfinance.'
  },
  {
    id: 2,
    name: 'Saifullah Panna',
    designation: 'Secretary',
    email: 'panna@cao.gov.bd',
    phone: '+880-2-XXXXXXXX',
    image: 'https://www.shokalshondha.com/wp-content/uploads/elementor/thumbs/saifullah-panna-qua4sxivz8fekpmywgnu62hh3d9sq5q7y75i45buoo.jpg',
    department: 'Planning and Development',
    education: [
      'Masters in Public Administration',
      'Bachelor in Civil Engineering'
    ],
    experience: [
      'Joint Secretary, Ministry of Planning',
      'Deputy Commissioner, Dhaka Division',
      'Additional Secretary, Cabinet Division'
    ],
    bio: 'Mr. Saifullah Panna is a seasoned civil servant with extensive experience in public administration and development planning.'
  },
  // Add more staff members as needed
];

export default function StaffsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [selectedStaff, setSelectedStaff] = useState<typeof staffMembers[0] | null>(null);

  return (
    <main className="min-h-screen">
      <section ref={ref} className="relative h-[60vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/static/image/cao.jpg"
            alt="Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-200">
              Meet the dedicated professionals working to serve our nation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-blue-950/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedStaff(member)}
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-lg text-blue-200 mb-2">{member.designation}</p>
                    <div className="space-y-1">
                      <p className="flex items-center text-sm text-blue-300">
                        <Mail className="w-4 h-4 mr-2" />
                        {member.email}
                      </p>
                      <p className="flex items-center text-sm text-blue-300">
                        <Phone className="w-4 h-4 mr-2" />
                        {member.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedStaff} onOpenChange={() => setSelectedStaff(null)}>
        <DialogContent className="max-w-3xl">
          {selectedStaff && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src={selectedStaff.image}
                  alt={selectedStaff.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold">{selectedStaff.name}</h2>
                  <p className="text-xl text-primary">{selectedStaff.designation}</p>
                  <p className="text-muted-foreground">{selectedStaff.department}</p>
                </div>

                <div className="space-y-2">
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {selectedStaff.email}
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {selectedStaff.phone}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Biography</h3>
                  <p className="text-muted-foreground">{selectedStaff.bio}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {selectedStaff.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {selectedStaff.experience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}