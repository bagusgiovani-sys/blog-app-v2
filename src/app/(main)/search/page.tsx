import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchPageClient from './SearchPageClient';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Search Posts — Blog App',
  description: 'Search for posts by title, content, or tags.',
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
      <SearchPageClient />
    </Suspense>
  );
}
