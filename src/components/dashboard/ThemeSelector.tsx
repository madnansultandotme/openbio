// Theme selection component
// Allows users to choose and customize their profile theme

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Check } from 'lucide-react';

type Theme = 'minimal-light' | 'dark-mode' | 'gradient-style';

interface ThemeOption {
  id: Theme;
  name: string;
  description: string;
  preview: string;
  colors: {
    background: string;
    text: string;
    accent: string;
  };
}

const themes: ThemeOption[] = [
  {
    id: 'minimal-light',
    name: 'Minimal Light',
    description: 'Clean and simple light theme',
    preview: 'bg-white border-gray-200',
    colors: {
      background: '#ffffff',
      text: '#1f2937',
      accent: '#3b82f6'
    }
  },
  {
    id: 'dark-mode',
    name: 'Dark Mode',
    description: 'Sleek dark theme for night owls',
    preview: 'bg-gray-900 border-gray-700',
    colors: {
      background: '#111827',
      text: '#f9fafb',
      accent: '#60a5fa'
    }
  },
  {
    id: 'gradient-style',
    name: 'Gradient Style',
    description: 'Vibrant gradient background',
    preview: 'bg-gradient-to-br from-purple-500 to-pink-500',
    colors: {
      background: 'linear-gradient(to bottom right, #8b5cf6, #ec4899)',
      text: '#ffffff',
      accent: '#fbbf24'
    }
  }
];

export function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>('minimal-light');
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [isLoading, setIsLoading] = useState(false);

  const handleThemeChange = (themeId: Theme) => {
    setSelectedTheme(themeId);
    // Update primary color to theme default
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setPrimaryColor(theme.colors.accent);
    }
  };

  const handleSaveTheme = async () => {
    setIsLoading(true);
    
    try {
      // TODO: Implement save theme logic
      // 1. Call update profile API endpoint with theme data
      // 2. Handle response
      // 3. Show success message
      
      console.log('Save theme:', { theme: selectedTheme, primaryColor });
    } catch (error) {
      console.error('Failed to save theme:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Your Theme</CardTitle>
        <CardDescription>
          Select a theme that matches your style. You can also customize the primary color.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`relative cursor-pointer rounded-lg border-2 transition-colors ${
                selectedTheme === theme.id
                  ? 'border-blue-500'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleThemeChange(theme.id)}
            >
              {/* Theme Preview */}
              <div className={`h-32 rounded-t-lg ${theme.preview} flex items-center justify-center`}>
                <div className="text-center space-y-2">
                  <div className={`w-12 h-12 rounded-full mx-auto ${
                    theme.id === 'dark-mode' ? 'bg-gray-600' : 
                    theme.id === 'gradient-style' ? 'bg-white/20' : 'bg-gray-200'
                  }`} />
                  <div className={`text-sm font-medium ${
                    theme.id === 'minimal-light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    John Doe
                  </div>
                  <div className={`w-20 h-6 rounded mx-auto ${
                    theme.id === 'dark-mode' ? 'bg-blue-400' :
                    theme.id === 'gradient-style' ? 'bg-yellow-400' : 'bg-blue-500'
                  }`} />
                </div>
              </div>

              {/* Theme Info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{theme.name}</h3>
                    <p className="text-sm text-gray-500">{theme.description}</p>
                  </div>
                  {selectedTheme === theme.id && (
                    <Check className="h-5 w-5 text-blue-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Primary Color Customization */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Primary Color
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="h-10 w-20 rounded border border-gray-300 cursor-pointer"
            />
            <div className="flex-1">
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="#3b82f6"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500">
            This color will be used for links and accent elements on your profile.
          </p>
        </div>

        {/* Preview Section */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Preview
          </label>
          <div className="border border-gray-200 rounded-lg p-4">
            <div 
              className="rounded-lg p-6 text-center"
              style={{
                background: themes.find(t => t.id === selectedTheme)?.colors.background,
                color: themes.find(t => t.id === selectedTheme)?.colors.text
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your Name</h3>
              <p className="text-sm opacity-80 mb-4">Your bio goes here...</p>
              <div 
                className="inline-block px-6 py-2 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: primaryColor }}
              >
                Sample Link
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={handleSaveTheme}
          loading={isLoading}
          className="w-full"
        >
          Save Theme
        </Button>
      </CardContent>
    </Card>
  );
}