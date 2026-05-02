import type { Metadata } from 'next';
import LoginForm from '@/features/auth/components/LoginForm';

export const metadata: Metadata = {
  title: 'Sign In — Blog App',
  description: 'Sign in to your account to write posts, like articles, and join the conversation.',
};

export default function LoginPage() {
  return <LoginForm />;
}
