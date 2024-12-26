import { Search } from 'lucide-react';
import { Input } from './input';

interface SearchBarProps {
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
	return (
		<div className='relative'>
			<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
			<Input
				type='text'
				placeholder={placeholder || 'Search ...'}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className='pl-10'
			/>
		</div>
	);
}
