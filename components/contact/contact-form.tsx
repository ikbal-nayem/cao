'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input 
            id="firstName" 
            placeholder="Enter first name"
            className="transition-all duration-300 hover:border-primary focus:border-primary" 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input 
            id="lastName" 
            placeholder="Enter last name"
            className="transition-all duration-300 hover:border-primary focus:border-primary" 
          />
        </div>
      </div>

      <div className="space-y-2 mt-6">
        <Label htmlFor="email">Email *</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Enter your email"
          className="transition-all duration-300 hover:border-primary focus:border-primary" 
        />
      </div>

      <div className="space-y-2 mt-6">
        <Label htmlFor="phone">Phone *</Label>
        <Input 
          id="phone" 
          type="tel" 
          placeholder="Enter phone number"
          className="transition-all duration-300 hover:border-primary focus:border-primary" 
        />
      </div>

      <div className="space-y-2 mt-6">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Enter your message"
          className="min-h-[150px] transition-all duration-300 hover:border-primary focus:border-primary"
        />
      </div>

      <div className="flex items-center space-x-2 mt-6">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-sm">
          I agree to the terms and conditions
        </Label>
      </div>

      <Button 
        className="w-full mt-8 transition-all duration-300 hover:scale-[1.02]"
        size="lg"
      >
        Send Message
      </Button>
    </motion.div>
  );
}