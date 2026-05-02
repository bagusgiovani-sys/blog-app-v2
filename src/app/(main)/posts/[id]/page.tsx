import type { Metadata } from 'next';
import PostDetailClient from './PostDetailClient';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://be-blg-production.up.railway.app/api';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  try {
    const res = await fetch(`${API_URL}/posts/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) return { title: 'Post — Blog App' };
    const post = await res.json();
    const description = post.content?.substring(0, 160) ?? '';
    return {
      title: `${post.title} — Blog App`,
      description,
      openGraph: {
        title: post.title,
        description,
        images: post.imageUrl ? [{ url: post.imageUrl }] : [],
      },
    };
  } catch {
    return { title: 'Post — Blog App' };
  }
}

export default async function PostDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return <PostDetailClient postId={id} />;
}
