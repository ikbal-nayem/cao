'use client';

import { useLanguage } from '@/components/language/language-context';
import { TranslationKey, getTranslation } from '@/lib/translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: TranslationKey) => {
    return getTranslation(language, key);
  };

  return { t };
}