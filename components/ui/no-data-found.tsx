'use client';

import { useTranslation } from '@/hooks/use-translation';

const NoDataFound = () => {
	const { t } = useTranslation();

	return (
		<div>
			<div className='text-center'>
				<div className='relative w-64 h-64 mx-auto mb-8'>
					<svg
						className='w-full h-full transform transition-transform duration-1000 hover:scale-105'
						viewBox='0 0 200 200'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M40 60 L80 60 L90 50 L160 50 L160 140 L40 140 Z'
							className='fill-gray-200 stroke-gray-400 animate-[float_6s_ease-in-out_infinite]'
							strokeWidth='4'
						/>

						<g className='animate-[slideUp_8s_ease-in-out_infinite]'>
							<path
								d='M60 80 L140 80'
								stroke='#6B7280'
								strokeWidth='4'
								strokeLinecap='round'
								className='opacity-40'
							/>
							<path
								d='M60 100 L120 100'
								stroke='#6B7280'
								strokeWidth='4'
								strokeLinecap='round'
								className='opacity-40'
							/>
							<path
								d='M60 120 L130 120'
								stroke='#6B7280'
								strokeWidth='4'
								strokeLinecap='round'
								className='opacity-40'
							/>
						</g>

						{/* Search Icon */}
						<g className='animate-[float_7s_ease-in-out_infinite]' transform='translate(110, 70) scale(0.8)'>
							<circle cx='40' cy='40' r='16' stroke='#4B5563' strokeWidth='4' className='fill-transparent' />
							<line x1='52' y1='52' x2='60' y2='60' stroke='#4B5563' strokeWidth='4' strokeLinecap='round' />
						</g>

						{/* Question Mark */}
						<g className='animate-[bounce_6s_ease-in-out_infinite]'>
							<circle cx='160' cy='40' r='12' className='fill-blue-400 opacity-80' />
							<text x='156' y='45' className='fill-white text-sm font-bold'>
								?
							</text>
						</g>

						{/* Decorative Elements */}
						<circle
							cx='30'
							cy='30'
							r='4'
							className='fill-red-400 animate-[fadeInOut_5s_ease-in-out_infinite]'
						/>
						<circle
							cx='170'
							cy='150'
							r='4'
							className='fill-blue-400 animate-[fadeInOut_5s_ease-in-out_infinite_0.5s]'
						/>
						<circle
							cx='20'
							cy='150'
							r='4'
							className='fill-green-400 animate-[fadeInOut_5s_ease-in-out_infinite_1s]'
						/>
					</svg>
				</div>

				<h1 className='text-3xl font-bold text-gray-400 mb-4 transition-all duration-700 hover:text-gray-500'>
					{t('noDataFound')}
				</h1>
				<p className='text-gray-300 mb-8 max-w-md mx-auto transition-all duration-500 hover:text-gray-500'>
					{t('noDataFoundDetails')}
				</p>
			</div>

			<style jsx global>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-10px);
					}
				}

				@keyframes slideUp {
					0%,
					100% {
						transform: translateY(0px);
						opacity: 0.6;
					}
					50% {
						transform: translateY(-5px);
						opacity: 1;
					}
				}

				@keyframes fadeInOut {
					0%,
					100% {
						opacity: 0.3;
					}
					50% {
						opacity: 0.8;
					}
				}

				@keyframes bounce {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-8px);
					}
				}
			`}</style>
		</div>
	);
};

export default NoDataFound;
