// Dashboard settings page
// Account settings and preferences

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Trash2, AlertTriangle } from 'lucide-react';

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // TODO: Implement password change
      // 1. Validate current password
      // 2. Update password in database
      // 3. Show success message
      console.log('Change password');
    } catch (error) {
      console.error('Failed to change password:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!showDeleteConfirm) {
      setShowDeleteConfirm(true);
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Implement account deletion
      // 1. Confirm user identity
      // 2. Delete all user data (profile, links, analytics)
      // 3. Delete user account
      // 4. Redirect to homepage
      console.log('Delete account');
    } catch (error) {
      console.error('Failed to delete account:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>
            View and update your account details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              value="user@example.com" // TODO: Load from user data
              disabled
              helperText="Contact support to change your email address"
            />
            <Input
              label="Username"
              value="username" // TODO: Load from user data
              disabled
              helperText="Username cannot be changed"
            />
          </div>
        </CardContent>
      </Card>

      {/* Password Change */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Update your password to keep your account secure.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              required
            />
            <Input
              label="New Password"
              type="password"
              required
              helperText="Must be at least 8 characters long"
            />
            <Input
              label="Confirm New Password"
              type="password"
              required
            />
            <Button type="submit" loading={isLoading}>
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>
            Control how your data is used and displayed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Analytics Tracking</h4>
              <p className="text-sm text-gray-500">
                Allow OpenBio to track page views and link clicks for analytics
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Public Profile</h4>
              <p className="text-sm text-gray-500">
                Make your profile visible to search engines and public directories
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Data Export */}
      <Card>
        <CardHeader>
          <CardTitle>Data Export</CardTitle>
          <CardDescription>
            Download a copy of your data for backup or migration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">
            Export My Data
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            This will include your profile information, links, and analytics data in JSON format.
          </p>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Danger Zone
          </CardTitle>
          <CardDescription>
            Irreversible actions that will permanently affect your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Delete Account</h4>
              <p className="text-sm text-gray-500 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              
              {showDeleteConfirm ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800 mb-4">
                    Are you absolutely sure? This will permanently delete your account, profile, links, and all analytics data.
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={handleDeleteAccount}
                      loading={isLoading}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Yes, Delete My Account
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="danger"
                  onClick={handleDeleteAccount}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* TODO: Add additional settings */}
      {/* 1. Notification preferences */}
      {/* 2. API key management */}
      {/* 3. Connected accounts/integrations */}
      {/* 4. Custom domain settings */}
      {/* 5. Backup and restore options */}
      {/* 6. Two-factor authentication */}
      {/* 7. Session management */}
    </div>
  );
}