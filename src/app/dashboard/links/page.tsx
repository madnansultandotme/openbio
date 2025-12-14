// Dashboard links page
// Link management interface

import { LinkManager } from '@/components/dashboard/LinkManager';

export default function LinksPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Links</h1>
        <p className="text-gray-600 mt-2">
          Add, edit, and organize your links. Drag and drop to reorder them.
        </p>
      </div>

      <LinkManager />

      {/* TODO: Add additional link features */}
      {/* 1. Link categories/groups */}
      {/* 2. Bulk actions (hide/show multiple) */}
      {/* 3. Link templates/presets */}
      {/* 4. Link scheduling (show/hide at specific times) */}
      {/* 5. Link click tracking per link */}
      {/* 6. Link preview/validation */}
      {/* 7. Import links from other platforms */}
    </div>
  );
}