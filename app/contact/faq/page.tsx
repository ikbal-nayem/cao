'use client';

import { useLanguage } from '@/components/language/language-context';
import PageTitle from '@/components/layout/page-title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { axiosIns } from '@/config/axios';
import { useTranslation } from '@/hooks/use-translation';
import { motion } from 'framer-motion';
import { use, useEffect, useState } from 'react';

type IFaq = {
	id: number;
	ques_bn: string;
	ques_en: string;
	ans_bn: string;
	ans_en: string;
	is_active: number;
};

export default function FAQPage() {
	const [faqs, setFaqs] = useState<IFaq[]>([]);
	const [isLoading, setLoading] = useState(false);

	const { t } = useTranslation();
	const { language } = useLanguage();

	useEffect(() => {
		setLoading(true);
		axiosIns
			.get('/get-faq-list')
			.then((resp) => setFaqs(resp?.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<main className='min-h-screen pt-24'>
			<div className='container mx-auto px-4'>
				<PageTitle title={t('faqTitle')} subTitle={t('faqSubtitle')} />

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='max-w-3xl mx-auto'
				>
					<Accordion type='single' collapsible className='space-y-4'>
						{isLoading && <FAQSkeleton />}
						{faqs?.map((faq, index) => (
							<motion.div
								key={faq?.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<AccordionItem value={`item-${index}`} className='border rounded-lg px-6'>
									<AccordionTrigger className='text-lg font-medium'>
										{language === 'bn' ? faq.ques_bn : faq.ques_en}
									</AccordionTrigger>
									<AccordionContent className='text-muted-foreground'>
										{language === 'bn' ? faq.ans_bn : faq.ans_en}
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

const FAQSkeleton: React.FC = () => {
	return (
		<div className='space-y-2'>
			{Array.from({ length: 6 }).map((_, index) => (
				<div key={index} className='flex items-center justify-between p-3 border rounded-lg animate-pulse'>
					<div className='bg-gray-300 w-5/6 h-7' />
					<div className='bg-gray-300 rounded-full w-5 h-5' />
				</div>
			))}
		</div>
	);
};
