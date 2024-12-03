"use client";

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './language-context';

export const LanguageSwitch: FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
      className="text-sm font-medium"
    >
      {language === 'en' ? 'বাংলা' : 'English'}
    </Button>
  );
};