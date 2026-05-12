'use client';

import { useState } from 'react';
import { usePosts } from '@/features/posts/hooks/usePosts';
import PostList from '@/features/posts/components/PostList';
import MostLiked from '@/features/posts/components/MostLiked';
import Pagination from '@/components/ui/Pagination';

export default function HomeClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const { page, lastPage } = usePosts();

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="layout-gutter py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recommend For You</h2>
            </div>

            <PostList type="recommended" limit={limit} initialPage={currentPage} />

            {lastPage > 1 && (
              <div className="mt-8">
                <Pagination currentPage={page} totalPages={lastPage} onPageChange={handlePageChange} />
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-6">
              <MostLiked />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
