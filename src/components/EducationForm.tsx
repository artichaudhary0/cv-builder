import { Education } from '../types/cv';
import { GraduationCap, Calendar, Plus, Trash2 } from 'lucide-react';

interface Props {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export function EducationForm({ education, onChange }: Props) {
  const handleAdd = () => {
    onChange([
      ...education,
      {
        institution: '', degree: '', field: '', startDate: '', endDate: '',
        location: ''
      },
    ]);
  };

  const handleChange = (index: number, field: keyof Education, value: string) => {
    const newEducation = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    onChange(newEducation);
  };

  const handleRemove = (index: number) => {
    onChange(education.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Education</h2>
        <button
          onClick={handleAdd}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Education</span>
        </button>
      </div>

      {education.map((edu, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-3 bg-gray-50">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleChange(index, 'institution', e.target.value)}
                placeholder="Institution"
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

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
              placeholder="Degree"
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              value={edu.field}
              onChange={(e) => handleChange(index, 'field', e.target.value)}
              placeholder="Field of Study"
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <input
              type="date"
              value={edu.startDate}
              onChange={(e) => handleChange(index, 'startDate', e.target.value)}
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span>to</span>
            <input
              type="date"
              value={edu.endDate}
              onChange={(e) => handleChange(index, 'endDate', e.target.value)}
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}