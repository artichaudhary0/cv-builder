import { Skill } from '../../types/cv';

interface Props {
  category: string;
  skills: Skill[];
  onEdit: (skill: Skill) => void;
}

export function SkillCategory({ category, skills, onEdit }: Props) {
  const getProgressWidth = (level: string) => {
    const levels = {
      Beginner: '25%',
      Intermediate: '50%',
      Advanced: '75%',
      Expert: '100%'
    };
    return levels[level as keyof typeof levels] || '0%';
  };

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-gray-700">{category}</h3>
      <div className="grid gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => onEdit(skill)}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: getProgressWidth(skill.level) }}
              />
            </div>
            {skill.yearsOfExperience && (
              <div className="mt-1 text-sm text-gray-500">
                {skill.yearsOfExperience} years
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}