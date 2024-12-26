import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
	categories: string[];
	selectedCategory: string | null;
	onSelectCategory: (category: string | null) => void;
}
export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
	return (
		<div className='rounded-lg sticky top-24'>
			<h3 className='font-semibold text-lg mb-4 text-sidebar-foreground'>Categories</h3>
			<ScrollArea className='h-[calc(100vh-250px)] pr-4'>
				<div className='space-y-2'>
					<motion.div whileTap={{ scale: 0.98 }}>
						<Badge
							variant={selectedCategory === null ? 'default' : 'outline'}
							className='w-full justify-start cursor-pointer text-sm py-1 hover:bg-foreground/5 hover:text-foreground dark:hover:bg-gray-800'
							onClick={() => onSelectCategory(null)}
						>
							All Categories
						</Badge>
					</motion.div>
					{categories.map((category) => (
						<motion.div key={category} whileTap={{ scale: 0.98 }}>
							<Badge
								variant={selectedCategory === category ? 'default' : 'outline'}
								className='w-full justify-start cursor-pointer text-sm py-1 hover:bg-foreground/5 hover:text-foreground dark:hover:bg-gray-800'
								onClick={() => onSelectCategory(category)}
							>
								{category}
							</Badge>
						</motion.div>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
