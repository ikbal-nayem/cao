'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function AddressPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Location</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find us at the heart of Bangladesh's administrative center
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4125620566856!2d90.38813422487756!3d23.76831881616332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70077941f29%3A0x23c70eb69a1b1daf!2sChief%20Advisor&#39;s%20Office!5e0!3m2!1sen!2sbd!4v1733672901301!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border/50 rounded-2xl p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Office Address</h3>
                  <p className="text-muted-foreground">
                    Chief Adviser's Office<br />
                    Old Parliament Building<br />
                    Tejgaon, Dhaka-1215<br />
                    Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone Numbers</h3>
                  <p className="text-muted-foreground">
                    Tel: +880-2-XXXXXXXX<br />
                    Fax: +880-2-XXXXXXXX<br />
                    Hotline: 16XXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@cao.gov.bd<br />
                    support@cao.gov.bd
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Sunday - Thursday<br />
                    9:00 AM - 5:00 PM<br />
                    Closed on Friday, Saturday<br />
                    and Government Holidays
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}