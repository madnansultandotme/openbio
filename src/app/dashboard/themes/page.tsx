// Dashboard themes page
// Theme selection and customization interface

import { ThemeSelector } from '@/components/dashboard/ThemeSelector';

export default function ThemesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Themes</h1>
        <p className="text-gray-600 mt-2">
          Customize the look and feel of your profile page with themes and colors.
        </p>
      </div>

      <ThemeSelector />

      {/* TODO: Add additional theme features */}
      {/* 1. Custom CSS editor for advanced users */}
      {/* 2. Theme preview in different screen sizes */}
      {/* 3. Font selection options */}
      {/* 4. Background image/pattern options */}
      {/* 5. Animation preferences */}
      {/* 6. Theme marketplace/community themes */}
      {/* 7. Export/import theme configurations */}
    </div>
  );
}