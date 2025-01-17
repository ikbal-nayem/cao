'use client';

import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { DATE_FORMAT } from '@/constants/common.constant';
import { useLanguage } from '../../context/language/language-context';
import { bn, enUS } from 'date-fns/locale';
import { isNull } from '@/lib/utils';

interface SpeechHeaderProps {
	title?: string;
	subtitle?: string;
	date?: string;
	onPreviewClick: () => void;
}

export function SpeechHeader({ title, subtitle, date, onPreviewClick }: SpeechHeaderProps) {
	const { t, tNumber } = useTranslation();
	const { language } = useLanguage();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='relative'
		>
			<div className='flex items-center justify-between mb-4'>
				{!!date && (
					<span className='flex items-center text-sm text-muted-foreground'>
						<Calendar className='w-4 h-4 mr-1' />
						{tNumber(format(new Date(date), DATE_FORMAT.CASUAL, { locale: language === 'en' ? enUS : bn }))}
					</span>
				)}

				<Button size='sm' onClick={onPreviewClick} className='gap-2'>
					<FileText className='w-4 h-4' />
					{t('preview')}
				</Button>
			</div>

			<h1 className='text-4xl font-bold mb-6'>{title}</h1>
			<p className='text-xl text-muted-foreground'>{subtitle}</p>
		</motion.div>
	);
}
