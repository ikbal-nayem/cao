"use client";

import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { useLanguage } from './language-context';

export const LanguageSwitch: FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
      className="text-xs font-medium"
    >
      {language === 'en' ? 'বাংলা' : 'English'}
    </Button>
  );
};