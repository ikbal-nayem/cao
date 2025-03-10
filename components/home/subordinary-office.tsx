import { useSubordinateOfficeList } from '@/api/who-we-are';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { useTranslation } from '@/hooks/use-translation';
import { ISubordinateOffice } from '@/interface/home.interface';
import { makePreviewURL } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import { useLanguage } from '../../context/language/language-context';

const itemVariants = {
	hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const SubordinaryOfficeSection: FC = () => {
	const { data: offices } = useSubordinateOfficeList();
	const { t } = useTranslation();
	const { language } = useLanguage();

	return (
		<section className='py-20'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl font-bold mb-6'>{t('menu.subordinateOffice')}</h2>
				</motion.div>

				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-start'>
					{offices?.map((partner: ISubordinateOffice, index: number) => (
						<motion.a
							key={index}
							href={partner?.external_url}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: index * 0.1 },
							}}
							variants={itemVariants}
							whileHover='hover'
						>
							<div className='flex flex-col items-center'>
								<Image
									src={makePreviewURL(partner?.logo?.[0]?.relativepath) || DEFAULT_LINKS.GOV_LOGO_BN}
									alt={language === 'en' ? partner.title_en : partner.title_bn}
									width={64}
									height={64}
									className='object-contain mb-2'
								/>
								<span className='text-center text-sm text-gray-600'>
									{language === 'en' ? partner.title_en : partner.title_bn}
								</span>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
};

export default SubordinaryOfficeSection;
