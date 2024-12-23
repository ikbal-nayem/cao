import { LanguageProvider } from '@/components/language/language-context';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { AppProgressBar } from '@/components/ui/progress-bar';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { queryClient } from '@/config/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Chief Adviser Office - Bangladesh',
	description: 'Official website of the Chief Adviser Office of Bangladesh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
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
