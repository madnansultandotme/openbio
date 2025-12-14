// Public profile component
// Displays the user's public link-in-bio page

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Profile, Link as LinkType } from '@/types/database';

interface PublicProfileProps {
  username: string;
}

export function PublicProfile({ username }: PublicProfileProps) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [links, setLinks] = useState<LinkType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProfile();
    trackPageView();
  }, [username]);

  const loadProfile = async () => {
    try {
      // TODO: Implement profile loading
      // 1. Call API to get profile by username
      // 2. Call API to get visible links
      // 3. Handle 404 if profile not found
      // 4. Update state
      
      // Mock data for now
      const mockProfile: Profile = {
        id: '1',
        user_id: 'user1',
        username: username,
        name: 'John Doe',
        bio: 'Creator, developer, and coffee enthusiast. Building cool things on the internet.',
        avatar_url: null,
        theme: 'minimal-light',
        primary_color: '#3b82f6',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const mockLinks: LinkType[] = [
        {
          id: '1',
          user_id: 'user1',
          title: 'My Website',
          url: 'https://johndoe.com',
          position: 0,
          visible: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: '2',
          user_id: 'user1',
          title: 'Instagram',
          url: 'https://instagram.com/johndoe',
          position: 1,
          visible: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ];

      setProfile(mockProfile);
      setLinks(mockLinks);
    } catch (error) {
      console.error('Failed to load profile:', error);
      setError('Profile not found');
    } finally {
      setIsLoading(false);
    }
  };

  const trackPageView = async () => {
    try {
      // TODO: Implement page view tracking
      // 1. Call analytics API to track page view
      // 2. Include user agent and IP for analytics
      console.log('Track page view for:', username);
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  };

  const handleLinkClick = async (link: LinkType) => {
    try {
      // TODO: Implement link click tracking
      // 1. Call analytics API to track link click
      // 2. Open link in new tab
      console.log('Track link click:', link.id);
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to track link click:', error);
      // Still open the link even if tracking fails
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-8">Profile not found</p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  // Apply theme styles
  const getThemeStyles = () => {
    switch (profile.theme) {
      case 'dark-mode':
        return {
          background: '#111827',
          color: '#f9fafb',
          containerBg: '#1f2937',
          linkBg: '#374151',
          linkHover: '#4b5563'
        };
      case 'gradient-style':
        return {
          background: 'linear-gradient(to bottom right, #8b5cf6, #ec4899)',
          color: '#ffffff',
          containerBg: 'rgba(255, 255, 255, 0.1)',
          linkBg: 'rgba(255, 255, 255, 0.2)',
          linkHover: 'rgba(255, 255, 255, 0.3)'
        };
      default: // minimal-light
        return {
          background: '#ffffff',
          color: '#1f2937',
          containerBg: '#ffffff',
          linkBg: '#f9fafb',
          linkHover: '#f3f4f6'
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{ 
        background: themeStyles.background,
        color: themeStyles.color 
      }}
    >
      <div className="max-w-md mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-8">
          {/* Avatar */}
          <div className="mb-6">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div 
                className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg"
                style={{ backgroundColor: profile.primary_color }}
              >
                {profile.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Name and Bio */}
          <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
          {profile.bio && (
            <p className="text-sm opacity-80 leading-relaxed max-w-xs mx-auto">
              {profile.bio}
            </p>
          )}
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link)}
              className="w-full p-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-between group"
              style={{
                backgroundColor: themeStyles.linkBg,
                border: `1px solid ${profile.primary_color}20`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = themeStyles.linkHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = themeStyles.linkBg;
              }}
            >
              <span className="font-medium text-left">{link.title}</span>
              <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {links.length === 0 && (
          <div className="text-center py-12">
            <p className="opacity-60">No links available</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-current border-opacity-20">
          <p className="text-xs opacity-60">
            Created with{' '}
            <a
              href="https://openbio.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ color: profile.primary_color }}
            >
              OpenBio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}