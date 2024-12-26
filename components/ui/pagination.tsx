import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from './button';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
	const getPageNumbers = () => {
		const delta = 2;
		const range = [];
		const rangeWithDots = [];

		// Always show first page
		range.push(1);

		// Calculate range around current page
		for (let i = currentPage - delta; i <= currentPage + delta; i++) {
			if (i > 1 && i < totalPages) {
				range.push(i);
			}
		}

		// Always show last page
		if (totalPages > 1) {
			range.push(totalPages);
		}

		// Add dots where needed
		let l;
		for (let i of range) {
			if (l) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l !== 1) {
					rangeWithDots.push('...');
				}
			}
			rangeWithDots.push(i);
			l = i;
		}

		return rangeWithDots;
	};

	return (
		<div className='flex items-center justify-center gap-2 mt-3'>
			<Button
				variant='outline'
				size='icon'
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className='hover:bg-primary hover:text-primary-foreground transition-colors'
			>
				<ChevronLeft className='h-4 w-4' />
			</Button>

			<div className='flex items-center gap-1'>
				{getPageNumbers().map((page, index) => {
					if (page === '...') {
						return (
							<div
								key={`ellipsis-${index}`}
								className='w-9 h-9 flex items-center justify-center text-muted-foreground'
							>
								<MoreHorizontal className='h-4 w-4' />
							</div>
						);
					}

					return (
						<Button
							key={page}
							variant={currentPage === page ? 'default' : 'outline'}
							size='icon'
							onClick={() => onPageChange(page as number)}
							className={cn(
								'w-9 h-9',
								currentPage === page
									? 'bg-primary text-primary-foreground hover:bg-primary/90'
									: 'hover:bg-primary hover:text-primary-foreground transition-colors'
							)}
						>
							{page}
						</Button>
					);
				})}
			</div>

			<Button
				variant='outline'
				size='icon'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className='hover:bg-primary hover:text-primary-foreground transition-colors'
			>
				<ChevronRight className='h-4 w-4' />
			</Button>
		</div>
	);
}
