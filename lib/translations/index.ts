import { bn } from './bn';
import { en } from './en';

export const translations = {
	en,
	bn,
} as const;

export type Language = keyof typeof translations;

function getNestedValue<T>(obj: T, path: string): any {
  // @ts-ignore
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

type NestedKeyOf<T> = {
	[K in keyof T]: T[K] extends object ? `${Extract<K, string>}.${NestedKeyOf<T[K]>}` : Extract<K, string>;
}[keyof T];

export type TranslationKey = NestedKeyOf<typeof translations.en>;

export function getTranslation(lang: Language, key: TranslationKey): string {
  const translation = getNestedValue(translations[lang], key);
  if (typeof translation !== 'string') {
    throw new Error(`Translation key "${key}" not found in language "${lang}"`);
  }
  return translation;
}
