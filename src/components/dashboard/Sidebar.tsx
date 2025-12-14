// Dashboard sidebar navigation
// Provides navigation between different dashboard sections

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  User, 
  Link as LinkIcon, 
  Palette, 
  BarChart3, 
  Settings, 
  Eye,
  LogOut 
} from 'lucide-react';

const navigation = [
  { name: 'Profile', href: '/dashboard', icon: User },
  { name: 'Links', href: '/dashboard/links', icon: LinkIcon },
  { name: 'Themes', href: '/dashboard/themes', icon: Palette },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  const handleLogout = async () => {
    // TODO: Implement logout logic
    // 1. Call logout API endpoint
    // 2. Clear local storage/cookies
    // 3. Redirect to login page
    console.log('Logout clicked');
  };

  const handlePreview = () => {
    // TODO: Open public profile in new tab
    // 1. Get current user's username
    // 2. Open /[username] in new tab
    console.log('Preview clicked');
  };

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center px-6">
        <h1 className="text-xl font-bold text-gray-900">OpenBio</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="border-t border-gray-200 p-3 space-y-1">
        <button
          onClick={handlePreview}
          className="group flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <Eye className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
          Preview Page
        </button>
        
        <button
          onClick={handleLogout}
          className="group flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
          Sign Out
        </button>
      </div>
    </div>
  );
}