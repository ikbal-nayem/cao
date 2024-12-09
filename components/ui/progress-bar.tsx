'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function AppProgressBar() {
  return (
    <ProgressBar
      height="3px"
      color="#00b6d5"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}