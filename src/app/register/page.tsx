// Registration page
// New user signup page

import Link from 'next/link';
import { RegisterForm } from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            OpenBio
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 sm:px-0">
          <RegisterForm />
        </div>
      </div>

      {/* TODO: Add additional features */}
      {/* 1. Terms of service and privacy policy links */}
      {/* 2. Username availability checking */}
      {/* 3. Password strength indicator */}
      {/* 4. Email verification flow */}
      {/* 5. Social registration options (future) */}
      {/* 6. Redirect to onboarding after registration */}
    </div>
  );
}