'use client';

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Cache queries for 5 minutes
      retry: 2,                 // Retry failed queries twice
    },
  },
});