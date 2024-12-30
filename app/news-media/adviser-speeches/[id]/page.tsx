import { speeches } from '@/lib/data';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'next/dist/build/templates/pages';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// interface SpeechDetailsPageProps {
//   params: {
//     id: string;
//   };
// }
type SpeechDetailsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default async function SpeechDetailsPage({ params }: SpeechDetailsPageProps) {
	const { id } = await params;

	const speech = speeches[parseInt(id)];

	if (!speech) {
		notFound();
	}

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<div className='mb-8'>
						<div className='flex items-center gap-4 text-sm text-muted-foreground mb-4'>
							<span className='px-3 py-1 rounded-full bg-primary/10 text-primary'>{speech.category}</span>
							<span className='flex items-center'>
								<Calendar className='w-4 h-4 mr-1' />
								{format(new Date(speech.date), 'MMMM d, yyyy')}
							</span>
						</div>
						<h1 className='text-4xl font-bold mb-6'>{speech.title}</h1>
						<p className='text-xl text-muted-foreground'>{speech.subtitle}</p>
					</div>

					{speech.image && (
						<div className='relative aspect-video rounded-xl overflow-hidden mb-8'>
							<Image src={speech.image} alt={speech.title} fill className='object-cover' />
						</div>
					)}

					{speech.video && (
						<div className='aspect-video mb-8'>
							<iframe
								width='100%'
								height='100%'
								src={`https://www.youtube.com/embed/${speech.video}`}
								title={speech.title}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								className='rounded-xl'
							></iframe>
						</div>
					)}

					<div className='prose prose-lg dark:prose-invert max-w-none'>
						{speech.content.split('\n').map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
