'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { ArrowLeftIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const NotFoundPage: React.FC = () => {
	const [canGoBack, setCanGoBack] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		setCanGoBack(window.history.length > 1);
	}, []);

	const handleGoBack = () => {
		window.history.back();
	};

	return (
		<div className='relative flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800'>
			<h1 className='text-9xl font-bold text-gray-800 dark:text-gray-200'>404</h1>
			<p className='mt-4 text-2xl font-semibold text-gray-600'>{t('pageNotFound')}</p>
			<p className='mt-2 text-gray-500'>{t('pageNotFoundSubTitle')}</p>
			{canGoBack && (
				<Button
					onClick={handleGoBack}
					className='mt-8 px-6 py-3 font-semibold shadow-md focus:outline-none focus:ring-2 flex items-center space-x-2'
				>
					<ArrowLeftIcon className='h-5 w-5' />
					<span>Go Back</span>
				</Button>
			)}
			<div className='absolute -bottom-10 -right-20 text-gray-300 dark:text-gray-700 text-9xl opacity-20 transform -translate-x-1/2 -translate-y-1/2 select-none'>
				404
			</div>
		</div>
	);
};

export default NotFoundPage;
