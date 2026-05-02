import type { Metadata } from 'next';
import UserProfileClient from './UserProfileClient';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://be-blg-production.up.railway.app/api';

export async function generateMetadata(
  { params }: { params: Promise<{ username: string }> }
): Promise<Metadata> {
  const { username } = await params;
  try {
    const res = await fetch(`${API_URL}/users/by-username/${username}`, { next: { revalidate: 60 } });
    if (!res.ok) return { title: `@${username} — Blog App` };
    const profile = await res.json();
    return {
      title: `${profile.name} (@${profile.username}) — Blog App`,
      description: profile.headline || `Posts and profile of ${profile.name}.`,
    };
  } catch {
    return { title: `@${username} — Blog App` };
  }
}

export default async function UserProfilePage(
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  return <UserProfileClient username={username} />;
}
