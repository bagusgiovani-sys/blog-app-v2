import type { Metadata } from 'next';
import { Suspense } from 'react';
import WritePageClient from './WritePageClient';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Write a Post — Blog App',
  description: 'Share your thoughts and ideas with the world.',
};

export default function WritePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
      <WritePageClient />
    </Suspense>
  );
}
