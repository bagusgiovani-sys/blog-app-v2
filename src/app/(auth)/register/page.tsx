import type { Metadata } from 'next';
import RegisterForm from '@/features/auth/components/RegisterForm';

export const metadata: Metadata = {
  title: 'Create Account — Blog App',
  description: 'Join Blog App and start sharing your ideas with the world.',
};

export default function RegisterPage() {
  return <RegisterForm />;
}
