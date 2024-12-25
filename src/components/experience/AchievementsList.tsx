import { Plus, Minus } from 'lucide-react';

interface Props {
  achievements: string[];
  onChange: (achievements: string[]) => void;
}

export function AchievementsList({ achievements, onChange }: Props) {
  const handleAdd = () => {
    onChange([...achievements, '']);
  };

  const handleRemove = (index: number) => {
    onChange(achievements.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, value: string) => {
    const newAchievements = achievements.map((item, i) => 
      i === index ? value : item
    );
    onChange(newAchievements);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Key Achievements
      </label>
      {achievements.map((achievement, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={achievement}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="Describe your achievement..."
            className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={() => handleRemove(index)}
            className="text-red-500 hover:text-red-600"
          >
            <Minus className="w-5 h-5" />
          </button>
        </div>
      ))}
      <button
        onClick={handleAdd}
        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
      >
        <Plus className="w-4 h-4" />
        <span>Add Achievement</span>
      </button>
    </div>
  );
}