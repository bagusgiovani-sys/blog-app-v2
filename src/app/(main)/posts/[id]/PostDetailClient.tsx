'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { usePost } from '@/features/posts/hooks/usePost';
import PostDetail from '@/features/posts/components/PostDetail';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';

export default function PostDetailClient({ postId }: { postId: string }) {
  const { user } = useAuth();
  const { post, getPost, deletePost, likePost, isLoading, error } = usePost();

  useEffect(() => {
    if (postId) getPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  if (isLoading && !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <ErrorMessage message={error} />
          <Link href="/" className="mt-4 block text-center text-blue-500 hover:text-blue-600">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h1>
          <p className="text-gray-600 mb-4">The post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-blue-500 hover:text-blue-600">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M15 10H5M10 15l-5-5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to posts
        </Link>

        <PostDetail
          post={post}
          currentUser={user}
          onLike={() => likePost(postId)}
          onDelete={() => deletePost(postId)}
        />
      </div>
    </div>
  );
}
