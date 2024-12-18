'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ourTeam } from '@/lib/team-data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function StaffsPage() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const [selectedStaff, setSelectedStaff] = useState<(typeof ourTeam)[0]['members'][0] | null>(null);

	return (
		<main className='min-h-screen'>
			<section ref={ref} className='relative h-[40vh]'>
				<motion.div style={{ y }} className='absolute inset-0'>
					<Image src='/static/image/cao.jpg' alt='Office' fill className='object-cover' />
					<div className='absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60' />
				</motion.div>
				<div className='relative container mx-auto px-4 h-full flex items-center'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='max-w-3xl'
					>
						<h1 className='text-5xl md:text-7xl font-bold mb-6'>Our Team</h1>
						<p className='text-xl text-muted-foreground'>
							Meet the dedicated professionals working to serve our nation
						</p>
					</motion.div>
				</div>
			</section>

			<section className='pb-24 bg-gradient-to-b from-background to-blue-950/10'>
				<div className='container mx-auto px-4'>
					{ourTeam.map((grp) => (
						<section key={grp.grpName}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className='my-16'
							>
								<h2 className='text-4xl font-bold mb-4'>{grp?.grpName}</h2>
							</motion.div>
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
								{grp?.members?.map((member, index) => (
									<motion.div
										key={member.name}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className='group cursor-pointer'
										onClick={() => setSelectedStaff(member)}
									>
										<div className='relative h-[400px] rounded-2xl overflow-hidden'>
											<Image
												src={
													member.image ||
													'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
												}
												alt={member.name}
												fill
												className='object-cover transition-transform duration-300 group-hover:scale-105'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
											<div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
												<h3 className='text-base font-bold mb-1'>{member.name}</h3>
												<p className='text-sm text-blue-200 mb-2'>{member.designation}</p>
												<div className='space-y-1'>
													{member?.email && (
														<p className='flex items-center text-xs text-blue-300'>
															<Mail className='w-4 h-4 mr-2' />
															{member.email}
														</p>
													)}
													{member?.phone && (
														<p className='flex items-center text-xs text-blue-300'>
															<Phone className='w-4 h-4 mr-2' />
															{member.phone}
														</p>
													)}
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</section>
					))}
				</div>
			</section>

			<Dialog open={!!selectedStaff} onOpenChange={() => setSelectedStaff(null)}>
				<DialogContent className='max-w-3xl'>
					{selectedStaff && (
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div className='relative aspect-[3/4] rounded-lg overflow-hidden'>
								<Image src={selectedStaff.image} alt={selectedStaff.name} fill className='object-cover' />
							</div>
							<div className='space-y-6'>
								<div>
									<h2 className='text-3xl font-bold'>{selectedStaff.name}</h2>
									<p className='text-xl text-primary'>{selectedStaff.designation}</p>
									<p className='text-muted-foreground'>{selectedStaff.office}</p>
								</div>

								<div className='space-y-2'>
									<p className='flex items-center'>
										<Mail className='w-4 h-4 mr-2' />
										{selectedStaff.email}
									</p>
									<p className='flex items-center'>
										<Phone className='w-4 h-4 mr-2' />
										{selectedStaff.phone}
									</p>
								</div>

								<div>
									<h3 className='text-xl font-semibold mb-2'>Biography</h3>
									{/* <p className='text-muted-foreground'>{selectedStaff.bio}</p> */}
								</div>

								<div>
									<h3 className='text-xl font-semibold mb-2'>Education</h3>
									<ul className='list-disc list-inside text-muted-foreground'>
										{/* {selectedStaff.education.map((edu, index) => (
											<li key={index}>{edu}</li>
										))} */}
									</ul>
								</div>

								<div>
									<h3 className='text-xl font-semibold mb-2'>Experience</h3>
									<ul className='list-disc list-inside text-muted-foreground'>
										{/* {selectedStaff.experience.map((exp, index) => (
											<li key={index}>{exp}</li>
										))} */}
									</ul>
								</div>
							</div>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</main>
	);
}
