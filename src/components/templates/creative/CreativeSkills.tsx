import { Skill } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Wrench } from 'lucide-react';

interface Props {
  skills: Skill[];
  colors: Template['colors'];
}

export function CreativeSkills({ skills, colors }: Props) {
  if (!skills.length) return null;

  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    return {
      ...acc,
      [category]: [...(acc[category] || []), skill],
    };
  }, {} as Record<string, Skill[]>);

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
    <section>
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <Wrench className={`w-8 h-8 text-${colors.accent}`} />
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-purple-200">
              {category}
            </h3>
            <div className="space-y-4">
              {categorySkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-purple-600">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                      style={{ width: getProgressWidth(skill.level) }}
                    />
                  </div>
                  {skill.yearsOfExperience && (
                    <p className="text-sm text-gray-500 mt-1">
                      {skill.yearsOfExperience} years of experience
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}