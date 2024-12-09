"use client";

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './language-context';
import { useTheme } from 'next-themes';

export const LanguageSwitch: FC = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
      className="text-sm font-medium"
      style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
    >
      {language === 'en' ? 'বাংলা' : 'English'}
    </Button>
  );
};