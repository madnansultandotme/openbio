// Public profile page
// Dynamic route for user profiles (e.g., /johndoe)

import { PublicProfile } from '@/components/profile/PublicProfile';
import { notFound } from 'next/navigation';

interface ProfilePageProps {
  params: {
    username: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { username } = params;

  // Basic username validation
  if (!username || username.length < 3 || username.length > 30) {
    notFound();
  }

  // TODO: Add server-side profile validation
  // 1. Check if username exists in database
  // 2. Return 404 if profile not found
  // 3. Generate metadata for SEO
  // 4. Handle private profiles

  return <PublicProfile username={username} />;
}

// TODO: Generate metadata for SEO
export async function generateMetadata({ params }: ProfilePageProps) {
  const { username } = params;
  
  // TODO: Fetch profile data for metadata
  // 1. Get profile by username
  // 2. Generate title, description, and Open Graph tags
  // 3. Include profile image and bio
  // 4. Add structured data for search engines
  
  return {
    title: `${username} - OpenBio`,
    description: `Check out ${username}'s links and profile on OpenBio`,
    // TODO: Add more metadata
    // openGraph: {
    //   title: profile.name,
    //   description: profile.bio,
    //   images: [profile.avatar_url],
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: profile.name,
    //   description: profile.bio,
    // }
  };
}

// TODO: Generate static params for popular profiles (optional)
export async function generateStaticParams() {
  // TODO: Pre-generate pages for popular profiles
  // 1. Query database for most visited profiles
  // 2. Return array of username params
  // 3. This will pre-build pages at build time for better performance
  
  return [
    // { username: 'popular-user-1' },
    // { username: 'popular-user-2' },
  ];
}