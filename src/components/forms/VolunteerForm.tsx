import { Volunteer } from '../../types/cv';
import { Heart, Plus, Trash2 } from 'lucide-react';

interface Props {
  volunteer: Volunteer[];
  onChange: (volunteer: Volunteer[]) => void;
}

export function VolunteerForm({ volunteer, onChange }: Props) {
  const handleAdd = () => {
    onChange([...volunteer, {
      organization: '',
      role: '',
      startDate: '',
      current: false,
      description: '',
      achievements: []
    }]);
  };

  const handleChange = (index: number, field: keyof Volunteer, value: any) => {
    const newVolunteer = volunteer.map((vol, i) =>
      i === index ? { ...vol, [field]: value } : vol
    );
    onChange(newVolunteer);
  };

  const handleRemove = (index: number) => {
    onChange(volunteer.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Volunteer Experience</h2>
        <button
          onClick={handleAdd}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Volunteer Experience</span>
        </button>
      </div>

      {volunteer.map((vol, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-3 bg-gray-50">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={vol.organization}
                onChange={(e) => handleChange(index, 'organization', e.target.value)}
                placeholder="Organization"
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
            value={vol.role}
            onChange={(e) => handleChange(index, 'role', e.target.value)}
            placeholder="Role"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <div className="flex items-center space-x-2">
            <input
              type="date"
              value={vol.startDate}
              onChange={(e) => handleChange(index, 'startDate', e.target.value)}
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {!vol.current && (
              <input
                type="date"
                value={vol.endDate || ''}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            )}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={vol.current}
                onChange={(e) => handleChange(index, 'current', e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">Current</span>
            </label>
          </div>

          <textarea
            value={vol.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
            placeholder="Description"
            rows={3}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ))}
    </div>
  );
}