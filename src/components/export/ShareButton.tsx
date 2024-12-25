import { Share2 } from 'lucide-react';

interface Props {
  onClick: () => void;
  platform: string;
}

export function ShareButton({ onClick, platform }: Props) {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded-full"
      title={`Share on ${platform}`}
    >
      <Share2 className="w-4 h-4" />
    </button>
  );
}