// Dashboard home page
// Main dashboard page with profile editor

import { ProfileEditor } from '@/components/dashboard/ProfileEditor';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600 mt-2">
          Manage your profile information and customize how you appear to visitors.
        </p>
      </div>

      <ProfileEditor />

      {/* TODO: Add additional dashboard sections */}
      {/* 1. Quick stats overview */}
      {/* 2. Recent activity feed */}
      {/* 3. Profile preview card */}
      {/* 4. Quick actions (add link, change theme) */}
      {/* 5. Tips and onboarding for new users */}
      {/* 6. Profile completion progress */}
    </div>
  );
}