import { Skill } from '../../../types/cv';
import { Template } from '../../../templates/types';

interface Props {
  skills: Skill[];
  colors: Template['colors'];
}

export function MinimalSkills({ skills, colors }: Props) {
  if (!skills.length) return null;

  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    return {
      ...acc,
      [category]: [...(acc[category] || []), skill],
    };
  }, {} as Record<string, Skill[]>);

  return (
    <section>
      <h2 className="text-2xl font-light mb-8">Skills</h2>

      <div className="space-y-8">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-lg font-medium text-gray-700 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}