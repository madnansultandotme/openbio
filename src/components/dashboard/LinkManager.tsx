// Link management component
// Handles adding, editing, reordering, and deleting links

'use client';

import { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
  DraggableStateSnapshot,
} from '@hello-pangea/dnd';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { 
  Plus, 
  GripVertical, 
  ExternalLink, 
  Edit2, 
  Trash2, 
  Eye, 
  EyeOff 
} from 'lucide-react';
import { Link } from '@/types/database';

// Mock data - TODO: Replace with real data from API
const mockLinks: Link[] = [
  {
    id: '1',
    user_id: 'user1',
    title: 'My Website',
    url: 'https://example.com',
    position: 0,
    visible: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export function LinkManager() {
  const [links, setLinks] = useState<Link[]>(mockLinks);
  const [isAddingLink, setIsAddingLink] = useState(false);
  const [editingLink, setEditingLink] = useState<string | null>(null);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(links);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update positions
    const updatedLinks = items.map((link, index) => ({
      ...link,
      position: index
    }));

    setLinks(updatedLinks);

    // TODO: Call reorder API endpoint
    console.log('Reorder links:', updatedLinks.map(l => l.id));
  };

  const handleAddLink = () => {
    setIsAddingLink(true);
  };

  const handleSaveLink = (linkData: { title: string; url: string }) => {
    // TODO: Implement add link logic
    // 1. Call create link API endpoint
    // 2. Add to local state
    // 3. Close add form
    console.log('Add link:', linkData);
    setIsAddingLink(false);
  };

  const handleEditLink = (linkId: string, linkData: { title: string; url: string }) => {
    // TODO: Implement edit link logic
    // 1. Call update link API endpoint
    // 2. Update local state
    // 3. Close edit form
    console.log('Edit link:', linkId, linkData);
    setEditingLink(null);
  };

  const handleDeleteLink = (linkId: string) => {
    if (confirm('Are you sure you want to delete this link?')) {
      // TODO: Implement delete link logic
      // 1. Call delete link API endpoint
      // 2. Remove from local state
      console.log('Delete link:', linkId);
      setLinks(links.filter(link => link.id !== linkId));
    }
  };

  const handleToggleVisibility = (linkId: string) => {
    // TODO: Implement toggle visibility logic
    // 1. Call update link API endpoint
    // 2. Update local state
    console.log('Toggle visibility:', linkId);
    setLinks(links.map(link => 
      link.id === linkId 
        ? { ...link, visible: !link.visible }
        : link
    ));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Manage Links</CardTitle>
            <CardDescription>
              Add, edit, and reorder your links. Drag to reorder.
            </CardDescription>
          </div>
          <Button onClick={handleAddLink}>
            <Plus className="h-4 w-4 mr-2" />
            Add Link
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Add Link Form */}
        {isAddingLink && (
          <LinkForm
            onSave={handleSaveLink}
            onCancel={() => setIsAddingLink(false)}
          />
        )}

        {/* Links List */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="links">
            {(provided: DroppableProvided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-2"
              >
                {links.map((link, index) => (
                  <Draggable key={link.id} draggableId={link.id} index={index}>
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border ${
                          snapshot.isDragging ? 'shadow-lg' : ''
                        }`}
                      >
                        <div
                          {...provided.dragHandleProps}
                          className="cursor-grab active:cursor-grabbing"
                        >
                          <GripVertical className="h-5 w-5 text-gray-400" />
                        </div>

                        <div className="flex-1">
                          {editingLink === link.id ? (
                            <LinkForm
                              initialData={link}
                              onSave={(data) => handleEditLink(link.id, data)}
                              onCancel={() => setEditingLink(null)}
                            />
                          ) : (
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-medium text-gray-900">
                                  {link.title}
                                </h3>
                                {!link.visible && (
                                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                    Hidden
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500 flex items-center">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                {link.url}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleVisibility(link.id)}
                          >
                            {link.visible ? (
                              <Eye className="h-4 w-4" />
                            ) : (
                              <EyeOff className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingLink(link.id)}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteLink(link.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {links.length === 0 && !isAddingLink && (
          <div className="text-center py-8">
            <p className="text-gray-500">No links yet. Add your first link to get started!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Link form component for adding/editing links
interface LinkFormProps {
  initialData?: { title: string; url: string };
  onSave: (data: { title: string; url: string }) => void;
  onCancel: () => void;
}

function LinkForm({ initialData, onSave, onCancel }: LinkFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [url, setUrl] = useState(initialData?.url || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && url.trim()) {
      onSave({ title: title.trim(), url: url.trim() });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-white border rounded-lg">
      <Input
        label="Link Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="My awesome link"
        required
      />
      <Input
        label="URL"
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        required
      />
      <div className="flex space-x-2">
        <Button type="submit" size="sm">
          Save
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}