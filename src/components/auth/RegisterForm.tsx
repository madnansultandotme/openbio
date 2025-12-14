// Registration form component
// Handles new user registration

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { validateUsername } from '@/lib/utils';

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  name: string;
}

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch
  } = useForm<RegisterFormData>();

  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    
    try {
      // TODO: Implement registration logic
      // 1. Call registration API endpoint
      // 2. Handle response
      // 3. Redirect to dashboard on success
      // 4. Show error message on failure
      
      console.log('Registration attempt:', data);
    } catch (error) {
      setError('root', { message: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Join OpenBio and create your link-in-bio page in minutes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Full Name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            error={errors.name?.message}
          />

          <Input
            label="Username"
            {...register('username', {
              required: 'Username is required',
              validate: (value) => 
                validateUsername(value) || 'Username must be 3-30 characters, alphanumeric and underscores only'
            })}
            error={errors.username?.message}
            helperText="This will be your public URL: openbio.app/username"
          />
          
          <Input
            label="Email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            error={errors.email?.message}
          />
          
          <Input
            label="Password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
            error={errors.password?.message}
          />

          <Input
            label="Confirm Password"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match'
            })}
            error={errors.confirmPassword?.message}
          />

          {errors.root && (
            <p className="text-sm text-red-600">{errors.root.message}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            loading={isLoading}
          >
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}