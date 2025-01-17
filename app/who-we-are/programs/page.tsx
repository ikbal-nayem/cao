'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const programs = [
  {
    title: 'Digital Bangladesh Vision 2041',
    description: 'Building a technologically advanced nation through digital transformation and innovation.',
    image: '/static/image/cao.jpg',
    objectives: [
      'Establish nationwide digital infrastructure',
      'Develop skilled human resources for the digital age',
      'Promote e-governance and digital services',
      'Foster digital entrepreneurship and innovation'
    ]
  },
  {
    title: 'Social Safety Net Programs',
    description: 'Comprehensive social protection initiatives to support vulnerable populations.',
    image: 'https://nassp.gov.ng/wp-content/uploads/2021/10/social-protection-e1617219307663.jpg',
    objectives: [
      'Expand coverage of social safety nets',
      'Improve targeting and delivery mechanisms',
      'Enhance program monitoring and evaluation',
      'Strengthen institutional capacity'
    ]
  },
  {
    title: 'Infrastructure Development Projects',
    description: 'Large-scale infrastructure projects to boost economic growth and connectivity.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcp-7vrKlnT9_5_W0MPYtHmfGaFLIjb0YFg&s',
    objectives: [
      'Develop transportation networks',
      'Upgrade power generation capacity',
      'Improve urban infrastructure',
      'Enhance port facilities'
    ]
  }
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the key initiatives and programs driving Bangladesh&apos;s development agenda under the leadership of the Chief Adviser&apos;s Office.
          </p>
        </motion.div>

        <div className="space-y-24">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-3xl font-bold">{program.title}</h2>
                <p className="text-lg text-muted-foreground">{program.description}</p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Objectives:</h3>
                  <ul className="space-y-3">
                    {program.objectives.map((objective) => (
                      <li key={objective} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className={`relative aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}