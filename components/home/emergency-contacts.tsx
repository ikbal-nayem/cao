'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

const contacts = [
	{
		image:
			'https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/files/a3cbb305_511d_4266_bf35_74cfcfd2be9d/333.png',
		title: 'Govt. Information',
		number: '333',
		description: 'Govt. Service and Information',
		url: 'https://333.gov.bd',
	},
	{
		image:
			'https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/files/a3cbb305_511d_4266_bf35_74cfcfd2be9d/999.png',
		title: 'Emergency Services',
		number: '999',
		description: 'National Emergency Service',
		url: 'https://www.999.gov.bd',
	},
	{
		image: '',
		title: 'Fire Service and Civil Defense',
		number: '16163',
		description: 'Emergency Fire Service Support',
		url: 'https://fireservice.gov.bd',
	},
	{
		image: '',
		title: "Women's Helpline",
		number: '109',
		description: 'Support for Women and Children',
		url: 'https://mowca.gov.bd',
	},
	{
		image: '',
		title: 'Anti-Corruption Hotline',
		number: '106',
		description: 'Report Corruption',
		url: 'https://www.acc.org.bd',
	},
	{
		image: '',
		title: 'Disaster Warning',
		number: '1090',
		description: 'Disaster and Weather Updates',
		url: 'http://www.ddm.gov.bd/site/page/5de3f14d-66fe-447e-b61a-67300e680fd7/',
	},
	{
		image: '',
		title: 'Land Services',
		number: '16122',
		description: 'Land Information and Services',
		url: 'https://land.gov.bd',
	},
	{
		image: '',
		title: 'Child Helpline',
		number: '1098',
		description: 'Child Protection Helpline',
		url: 'https://msw.portal.gov.bd/site/page/d3f1e674-e3e0-44e6-b07e-237aa969c4e2',
	},
	{
		image: '',
		title: 'Fisheries Information',
		number: '16171',
		description: 'Fisheries and Marine Services',
		url: 'https://tmis.bffwt.gov.bd/tatthoform/',
	},
	{
		image: '',
		title: 'Expatriates Welfare',
		number: '16135',
		description: 'Services for Expatriates',
		url: 'https://probashi.gov.bd',
	},
	{
		image: '',
		title: 'e-GP Helpdesk',
		number: '16575',
		description: 'e-Government Procurement Help',
		url: 'https://www.eprocure.gov.bd/HelpDesk.jsp',
	},
	{
		image: '',
		title: 'BTRC Helpline',
		number: '100',
		description: 'Telecommunication Complaints',
		url: 'http://www.btrc.gov.bd/',
	},
	{
		image:
			'https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/page/972e48fb_41f7_499c_917c_25b2e1c5b625/WhatsApp%20Image%202024-02-20%20at%2011.18.43%20AM.jpeg',
		title: 'Power Division',
		number: '16999',
		description: 'Power and Energy Helpline',
		url: 'http://www.powerdivision.gov.bd/',
	},
	{
		image:
			'//bangladesh.gov.bd/uploader/server/../../sites/default/files/files/bangladesh.gov.bd/page/972e48fb_41f7_499c_917c_25b2e1c5b625/Leagal-Aid-call-centre02.png',
		title: 'Legal Aid Services',
		number: '16430',
		description: 'Free Legal Aid Helpline',
		url: 'https://nlaso.gov.bd',
	},
	{
		image:
			'//bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/page/972e48fb_41f7_499c_917c_25b2e1c5b625/srom.png',
		title: 'Labour Welfare',
		number: '16357',
		description: 'Labor Rights and Support',
		url: 'https://infocom.gov.bd',
	},
	{
		image:
			'//bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/page/972e48fb_41f7_499c_917c_25b2e1c5b625/Untitled-2%20%281%29.png',
		title: 'National Productivity Authority',
		number: '16131',
		description: 'National Productivity Support',
		url: 'https://npa.gov.bd/',
	},
];

const EmergencyContacts: FC = () => {
	return (
		<section className='py-20 bg-blue-600 text-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl font-bold mb-4'>Emergency Contacts</h2>
					<p className='text-blue-100'>24/7 Emergency Services at Your Service</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{contacts.map((contact, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors'
						>
							{/* <div className='flex justify-center mb-4'>
								<contact.Icon className='w-8 h-8' />
							</div> */}
							<h3 className='text-xl font-bold mb-2'>{contact.title}</h3>
							<p className='text-2xl font-mono font-bold text-blue-200 mb-2'>{contact.number}</p>
							<p className='text-blue-200 text-sm'>{contact.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmergencyContacts;
