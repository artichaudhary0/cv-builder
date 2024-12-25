import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  onAdd?: () => void;
  addLabel?: string;
}

export function Section({ title, icon: Icon, children, onAdd, addLabel }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        {onAdd && (
          <button
            onClick={onAdd}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
          >
            <span>{addLabel || 'Add'}</span>
          </button>
        )}
      </div>
      {children}
    </div>
  );
}