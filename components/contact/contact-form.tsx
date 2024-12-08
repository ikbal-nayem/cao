'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
	return (
		<form className='space-y-6'>
			<div>
				<Input
					placeholder='Full Name'
          required
					className='w-full p-4 bg-transparent border-b border-gray-300 focus:border-cyan-500 transition-colors'
				/>
			</div>

			<div>
				<Input
					type='email'
					placeholder='Email'
          required
					className='w-full p-4 bg-transparent border-b border-gray-300 focus:border-cyan-500 transition-colors'
				/>
			</div>

			<div>
				<Input
					type='phone'
					placeholder='Phone'
          required
					className='w-full p-4 bg-transparent border-b border-gray-300 focus:border-cyan-500 transition-colors'
				/>
			</div>

			<div>
				<Textarea
					placeholder='Type your Message...'
					className='w-full p-4 bg-transparent border-b border-gray-300 focus:border-cyan-500 transition-colors min-h-[150px]'
				/>
			</div>

			<Button className='w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-md transition-colors'>
				Send
			</Button>
		</form>
	);
}
