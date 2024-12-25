import { Skill } from '../types/cv';
import { Wrench, Plus, Trash2 } from 'lucide-react';

interface Props {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export function SkillsForm({ skills, onChange }: Props) {
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;

  const handleAdd = () => {
    onChange([...skills, {
      name: '', level: 'Beginner',
      category: 'Technical'
    }]);
  };

  const handleChange = (index: number, field: keyof Skill, value: string) => {
    const newSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [field]: value } : skill
    );
    onChange(newSkills);
  };

  const handleRemove = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
        <button
          onClick={handleAdd}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Skill</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="p-3 border rounded-lg bg-gray-50 space-y-2">
            <div className="flex items-center space-x-2">
              <Wrench className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                placeholder="Skill name"
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <select
              value={skill.level}
              onChange={(e) => handleChange(index, 'level', e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {skillLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}