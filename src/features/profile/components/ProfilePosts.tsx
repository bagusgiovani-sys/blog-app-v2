'use client';

import { useEffect } from 'react';
import { EmptyPostIcon } from '@/components/icons';
import PostCard from '@/features/posts/components/PostCard';
import { usePosts } from '@/features/posts/hooks/usePosts';
import Link from 'next/link';

export default function ProfilePosts() {
  const { posts, isLoading, getMyPosts, likePost } = usePosts();

  useEffect(() => {
    getMyPosts();
  }, [getMyPosts]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-lg p-12 text-center shadow-sm">
        <div className="flex flex-col items-center">
          <EmptyPostIcon className="w-32 h-32 mb-4 text-gray-300" />
          <p className="text-gray-500 text-lg font-medium mb-2">Your writing journey starts here</p>
          <p className="text-gray-400 text-sm mb-6">No posts yet, but there&apos;s good news! You can write one now.</p>
          <Link href="/write" className="px-6 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors">
            Write Post
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post, i) => (
        <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
          <PostCard post={post} onLikeClick={() => likePost(post.id)} />
        </div>
      ))}
    </div>
  );
}
