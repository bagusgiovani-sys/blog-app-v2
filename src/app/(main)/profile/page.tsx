import type { Metadata } from 'next';
import ProfilePageClient from './ProfilePageClient';

export const metadata: Metadata = {
  title: 'My Profile — Blog App',
  description: 'View and manage your profile, posts, and settings.',
};

export default function ProfilePage() {
  return <ProfilePageClient />;
}
