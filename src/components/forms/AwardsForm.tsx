import { Award } from '../../types/cv';
import { Trophy, Plus, Trash2 } from 'lucide-react';

interface Props {
  awards: Award[];
  onChange: (awards: Award[]) => void;
}

export function AwardsForm({ awards, onChange }: Props) {
  const handleAdd = () => {
    onChange([...awards, { title: '', issuer: '', date: '', description: '' }]);
  };

  const handleChange = (index: number, field: keyof Award, value: string) => {
    const newAwards = awards.map((award, i) =>
      i === index ? { ...award, [field]: value } : award
    );
    onChange(newAwards);
  };

  const handleRemove = (index: number) => {
    onChange(awards.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Awards & Honors</h2>
        <button
          onClick={handleAdd}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Award</span>
        </button>
      </div>

      {awards.map((award, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-3 bg-gray-50">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={award.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                placeholder="Award Title"
                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <input
            type="text"
            value={award.issuer}
            onChange={(e) => handleChange(index, 'issuer', e.target.value)}
            placeholder="Issuing Organization"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="date"
            value={award.date}
            onChange={(e) => handleChange(index, 'date', e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <textarea
            value={award.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
            placeholder="Award Description"
            rows={3}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ))}
    </div>
  );
}