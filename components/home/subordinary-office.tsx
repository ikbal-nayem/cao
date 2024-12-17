import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const office = [
	{ name: 'Governance Innovation Unit', logo: 'static/logo/gov-bn.png', link: 'https://giupmo.gov.bd/' },
	{
		name: 'Special Security Force',
		logo: 'https://seeklogo.com/images/S/special-security-force-logo-924637660F-seeklogo.com.png',
		link: 'http://ssf.gov.bd/',
	},
	{
		name: 'Bangladesh Economic Zone Authority',
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpLeBuYt8ibGbRq48lsgWif2gW3QXNdZW1Q&s',
		link: 'http://www.beza.gov.bd/',
	},
	{
		name: 'BEPZA',
		logo: 'https://upload.wikimedia.org/wikipedia/en/0/08/BEPZA_logo.png',
		link: 'http://www.bepza.gov.bd/',
	},
	{
		name: 'PPPO',
		logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Public-Private_Partnership_Authority_logo.jpeg',
		link: 'http://www.pppo.gov.bd/',
	},
	{
		name: 'NGO Affairs Bureau',
		logo: 'https://cdn6.aptoide.com/imgs/3/0/e/30e5b4265dae4b22526bab045c738343_icon.png',
		link: 'http://www.ngoab.gov.bd/',
	},
	{
		name: 'Ashrayan-2 Project',
		logo: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Ashrayan_Project_logo.png',
		link: 'http://www.ashrayanpmo.gov.bd/',
	},
	{
		name: 'National Skill Development Authority',
		logo: 'https://upload.wikimedia.org/wikipedia/en/3/37/National_Skills_Development_Authority_logo.png',
		link: 'http://nsda.gov.bd/',
	},
	{
		name: 'Bangladesh Investment Development Authority',
		logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQF9nsYj5kEWIQ/company-logo_200_200/company-logo_200_200/0/1729768854738/bangladesh_investment_development_authority_logo?e=2147483647&v=beta&t=neCLacj5R5Dm_9QKJcpNBQTECgTHOd5XCu-WP4RedRo',
		link: 'http://www.bida.gov.bd/',
	},
];

const SubordinaryOfficeSection: FC = () => {
	const itemVariants = {
		hover: { scale: 1.05, transition: { duration: 0.2 } },
	};

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
					<h2 className='text-4xl font-bold mb-6'>Subordinary Offices</h2>
				</motion.div>
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center'>
					{office.map((partner, index) => (
						<motion.a
							key={index}
							href={partner.link}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
							variants={itemVariants}
							whileHover='hover'
						>
							<div className='flex flex-col items-center'>
								<Image
									src={partner.logo}
									alt={partner.name}
									width={64}
									height={64}
									className='object-contain mb-2'
								/>
								<span className='text-center text-sm text-gray-600'>{partner.name}</span>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
};

export default SubordinaryOfficeSection;
