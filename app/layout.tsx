import { LanguageProvider } from '@/components/language/language-context';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { AppProgressBar } from '@/components/ui/progress-bar';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { queryClient } from '@/config/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'], variable: '--font-roboto' });
const nikosh = localFont({src: '../static/fonts/Nikosh.woff2', variable: '--font-nikosh'})

export const metadata: Metadata = {
	title: 'Chief Adviser Office - Bangladesh',
	description: 'Official website of the Chief Adviser Office of Bangladesh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${roboto.variable} ${nikosh.variable}`}>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider>
						<LanguageProvider>
							<Header />
							<AppProgressBar />
							{children}
							<Footer />
							<ScrollToTop />
						</LanguageProvider>
					</ThemeProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
