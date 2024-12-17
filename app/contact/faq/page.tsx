'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is the role of the Chief Adviser's Office?",
    answer: "The Chief Adviser's Office is responsible for overseeing the administration of the interim government, ensuring fair elections, and maintaining the continuity of essential government functions during the transition period."
  },
  {
    question: "How can I schedule a meeting with the Chief Adviser?",
    answer: "Meetings with the Chief Adviser are scheduled through the Office Secretary. You can submit a formal request through our contact form or by sending an email to appointments@cao.gov.bd."
  },
  {
    question: "What services are provided by the Chief Adviser's Office?",
    answer: "Our office provides various services including policy coordination, administrative oversight, public grievance redressal, and coordination with different government departments."
  },
  {
    question: "How can I submit a complaint or suggestion?",
    answer: "You can submit complaints or suggestions through our online feedback form, by email, or by postal mail to our office address. All submissions are reviewed and addressed accordingly."
  },
  {
    question: "What are the office hours?",
    answer: "The office is open Sunday through Thursday, 9:00 AM to 5:00 PM. We are closed on Fridays, Saturdays, and government holidays."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about the Chief Adviser's Office and our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </main>
  );
}