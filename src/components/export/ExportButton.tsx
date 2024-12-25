import React from 'react';
import { Download } from 'lucide-react';

interface Props {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}

export function ExportButton({ onClick, label, icon = <Download className="w-4 h-4" /> }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 w-full p-2 rounded-lg hover:bg-gray-50"
    >
      {icon}
      {label}
    </button>
  );
}