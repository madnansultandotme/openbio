// Profile editor component
// Allows users to edit their profile information

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Upload } from 'lucide-react';

interface ProfileFormData {
  name: string;
  bio: string;
  avatar_url?: string;
}

export function ProfileEditor() {
  const [isLoading, setIsLoading] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<ProfileFormData>({
    defaultValues: {
      // TODO: Load current profile data
      name: '',
      bio: '',
      avatar_url: ''
    }
  });

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    
    try {
      // TODO: Implement profile update logic
      // 1. Call profile update API endpoint
      // 2. Handle response
      // 3. Show success message
      // 4. Update local state
      
      console.log('Profile update:', data);
    } catch (error) {
      setError('root', { message: 'Failed to update profile. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // TODO: Implement avatar upload logic
      // 1. Validate file type and size
      // 2. Upload to storage service
      // 3. Update avatar_url in form
      // 4. Show preview
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Update your profile information that will be displayed on your public page.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Avatar Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Avatar preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Upload className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                  id="avatar-upload"
                />
                <label
                  htmlFor="avatar-upload"
                  className="cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Upload Image
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  JPG, PNG or GIF. Max 2MB.
                </p>
              </div>
            </div>
          </div>

          <Input
            label="Display Name"
            {...register('name', {
              required: 'Display name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            error={errors.name?.message}
            helperText="This is how your name will appear on your public page"
          />

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              {...register('bio', {
                maxLength: {
                  value: 160,
                  message: 'Bio must be 160 characters or less'
                }
              })}
              rows={3}
              className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tell people about yourself..."
            />
            {errors.bio && (
              <p className="text-sm text-red-600">{errors.bio.message}</p>
            )}
            <p className="text-sm text-gray-500">
              A short bio that describes who you are and what you do.
            </p>
          </div>

          {errors.root && (
            <p className="text-sm text-red-600">{errors.root.message}</p>
          )}

          <Button
            type="submit"
            loading={isLoading}
          >
            Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}