import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  label?: string;
  error?: string;
}

export function Input({ icon: Icon, label, error, className = '', ...props }: Props) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          {...props}
          className={`
            w-full rounded-md shadow-sm
            ${Icon ? 'pl-10' : 'pl-3'}
            ${error ? 'border-red-300' : 'border-gray-300'}
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${className}
          `}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}