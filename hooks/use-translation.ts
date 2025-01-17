'use client';

import { useLanguage } from '@/context/language/language-context';
import { TranslationKey, getTranslation } from '@/lib/translations';

const convertEnToBn = (str: string) => {
	if (str)
		return str
			?.toString()
			.replaceAll('0', '০')
			.replaceAll('1', '১')
			.replaceAll('2', '২')
			.replaceAll('3', '৩')
			.replaceAll('4', '৪')
			.replaceAll('5', '৫')
			.replaceAll('6', '৬')
			.replaceAll('7', '৭')
			.replaceAll('8', '৮')
			.replaceAll('9', '৯');
};

export function useTranslation() {
	const { language } = useLanguage();

	const t = (key: TranslationKey) => {
		return getTranslation(language, key);
	};

	const tNumber = (value: number | string, options?: Intl.NumberFormatOptions) => {
		if (typeof value === 'string') {
			return language === 'bn' ? convertEnToBn(value) : value.toString();
		}
		return new Intl.NumberFormat(language, options).format(value);
	};

	return { t, tNumber };
}
