// Utility functions
// This file contains helper functions used throughout the application

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind CSS class merging utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Username validation
export const validateUsername = (username: string): boolean => {
  // TODO: Implement username validation
  // 1. Check length (3-30 characters)
  // 2. Allow only alphanumeric and underscores
  // 3. No consecutive underscores
  // 4. Must start with letter or number
  const regex = /^[a-zA-Z0-9][a-zA-Z0-9_]{1,28}[a-zA-Z0-9]$/;
  return regex.test(username);
};

// URL validation
export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Generate unique username suggestions
export const generateUsernameSuggestions = (name: string): string[] => {
  // TODO: Generate username suggestions based on display name
  // 1. Remove spaces and special characters
  // 2. Add random numbers
  // 3. Check availability
  return [];
};

// Format analytics numbers
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Debounce function for search/input
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};