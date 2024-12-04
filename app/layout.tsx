import { LanguageProvider } from '@/components/language/language-context';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Chief Advisor Office - Bangladesh',
	description: 'Official website of the Chief Advisor Office of Bangladesh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider>
					<LanguageProvider>
						<Header />
						{children}
						<Footer />
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
