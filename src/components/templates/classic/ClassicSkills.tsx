import { Skill } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Wrench } from 'lucide-react';

interface Props {
  skills: Skill[];
  colors: Template['colors'];
}

export function ClassicSkills({ skills, colors }: Props) {
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
      <h2 className={`text-2xl font-serif font-bold text-${colors.text} mb-6 flex items-center gap-3`}>
        <Wrench className={`w-6 h-6 text-${colors.accent}`} />
        Skills
      </h2>

      <div className="space-y-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="font-medium text-gray-700 mb-3">{category}</h3>
            <div className="space-y-2">
              {categorySkills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg bg-gray-50 border border-gray-200`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className={`text-sm text-${colors.accent}`}>{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}