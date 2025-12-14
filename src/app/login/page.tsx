// Login page
// User authentication page

import Link from 'next/link';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            OpenBio
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 sm:px-0">
          <LoginForm />
        </div>
      </div>

      {/* TODO: Add additional features */}
      {/* 1. "Remember me" checkbox */}
      {/* 2. "Forgot password" link */}
      {/* 3. Social login options (future) */}
      {/* 4. Loading states and error handling */}
      {/* 5. Redirect after successful login */}
    </div>
  );
}