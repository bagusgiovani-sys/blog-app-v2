import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Blog App — Discover Posts',
  description: 'Discover recommended posts and trending articles from writers around the world.',
};

export default function HomePage() {
  return <HomeClient />;
}
