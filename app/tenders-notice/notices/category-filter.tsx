import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { axiosIns } from '@/config/axios';
import { useTranslation } from '@/hooks/use-translation';
import { IObject } from '@/interface/common.interface';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CategoryFilterProps {
	selectedCategory: string | null;
	onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
	const [isLoading, setLoading] = useState<boolean>(true);
	const [categoryList, setCategoryList] = useState<IObject[]>([]);
	const { t } = useTranslation();

	useEffect(() => {
		setLoading(true);
		axiosIns
			.get('/get-notice-type')
			.then((resp) => setCategoryList(resp.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className='rounded-lg sticky top-24'>
			<h3 className='font-semibold text-lg mb-4 text-sidebar-foreground'>{t('categories')}</h3>
			<ScrollArea className='h-[calc(100vh-250px)] pr-4'>
				<div className='space-y-2'>
					<motion.div whileTap={{ scale: 0.98 }}>
						<Badge
							variant={selectedCategory === null ? 'default' : 'outline'}
							className='w-full justify-start cursor-pointer text-sm py-1 hover:bg-foreground/5 hover:text-foreground dark:hover:bg-gray-800'
							onClick={() => onSelectCategory(null)}
						>
							All
						</Badge>
					</motion.div>
					{isLoading && <CategoryListSkeleton />}
					{categoryList?.map((category) => (
						<motion.div key={category?.noticeType} whileTap={{ scale: 0.98 }}>
							<Badge
								variant={selectedCategory === category?.noticeType ? 'default' : 'outline'}
								className='w-full justify-start cursor-pointer text-sm py-1 hover:bg-foreground/5 hover:text-foreground dark:hover:bg-gray-800'
								onClick={() => onSelectCategory(category?.noticeType)}
							>
								{category?.noticeType}{' '}
								<small className='text-gray-400'>&nbsp;({category?.total})</small>
							</Badge>
						</motion.div>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}

const CategoryListSkeleton: React.FC = () => {
	return (
		<div className='space-y-2'>
			{Array.from({ length: 5 }).map((_, index) => (
				<div key={index} className='animate-pulse'>
					<div className='bg-gray-300 rounded-full w-full h-7' />
				</div>
			))}
		</div>
	);
};
