'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send } from 'lucide-react';

export default function FeedbackPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Share Your Feedback</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your feedback helps us improve our services and better serve the nation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-primary/5 rounded-2xl p-8 space-y-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Why Your Feedback Matters</h2>
              <p className="text-muted-foreground">
                Your feedback is invaluable to us. It helps us:
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Improve our services and processes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Identify areas needing attention
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Better understand citizen needs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Make informed policy decisions
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border/50 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="Enter your full name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Enter feedback subject" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Your Feedback</label>
                <Textarea 
                  placeholder="Please share your feedback, suggestions, or concerns..."
                  className="min-h-[150px]"
                />
              </div>

              <Button className="w-full">
                Send Feedback
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}