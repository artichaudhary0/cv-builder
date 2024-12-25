
import { Experience } from '../types/cv';
import { Briefcase, Calendar, Plus, Trash2 } from 'lucide-react';

interface Props {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

export function ExperienceForm({ experience, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...experience,
      {
        company: '', position: '', startDate: '', endDate: '', description: '',
        location: '',
        current: false,
        achievements: [],
        technologies: []
      },
    ]);
  };

  const handleChange = (index: number, field: keyof Experience, value: string) => {
    const newExperience = experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    onChange(newExperience);
  };

  const handleRemove = (index: number) => {
    onChange(experience.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
        <button
          onClick={handleAdd}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Experience</span>
        </button>
      </div>

      {experience.map((exp, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-3 bg-gray-50">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
                placeholder="Company"
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
            value={exp.position}
            onChange={(e) => handleChange(index, 'position', e.target.value)}
            placeholder="Position"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <input
              type="date"
              value={exp.startDate}
              onChange={(e) => handleChange(index, 'startDate', e.target.value)}
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span>to</span>
            <input
              type="date"
              value={exp.endDate}
              onChange={(e) => handleChange(index, 'endDate', e.target.value)}
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <textarea
            value={exp.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
            placeholder="Job Description"
            rows={3}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ))}
    </div>
  );
}