// Database types for OpenBio
// This file defines TypeScript interfaces for all database tables

export interface User {
  id: string;
  email: string;
  password_hash: string;
  created_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  username: string;
  name: string;
  bio: string;
  avatar_url: string | null;
  theme: 'minimal-light' | 'dark-mode' | 'gradient-style';
  primary_color?: string;
  created_at: string;
  updated_at: string;
}

export interface Link {
  id: string;
  user_id: string;
  title: string;
  url: string;
  position: number;
  visible: boolean;
  icon?: string;
  created_at: string;
  updated_at: string;
}

export interface Analytics {
  id: string;
  user_id: string;
  event_type: 'view' | 'click';
  link_id?: string;
  timestamp: string;
  ip_address?: string;
  user_agent?: string;
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// Dashboard data aggregations
export interface AnalyticsData {
  totalViews: number;
  totalClicks: number;
  topLinks: Array<{
    link_id: string;
    title: string;
    clicks: number;
  }>;
  recentActivity: Analytics[];
}