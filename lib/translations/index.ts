import { bn } from './bn';
import { en } from './en';

export const translations = {
  en,
  bn,
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key];
}