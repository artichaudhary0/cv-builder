import { Experience } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Briefcase } from 'lucide-react';
import { formatDate } from '../../../utils/dates';

interface Props {
  experience: Experience[];
  colors: Template['colors'];
}

export function ModernExperience({ experience, colors }: Props) {
  if (!experience.length) return null;

  return (
    <section>
      <h2 className={`text-xl font-semibold text-${colors.text} mb-6 flex items-center gap-2`}>
        <Briefcase className={`w-5 h-5 text-${colors.accent}`} />
        Experience
      </h2>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className={`border-l-2 border-${colors.accent} pl-4`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{exp.position}</h3>
                <p className={`text-${colors.accent}`}>{exp.company}</p>
                {exp.location && (
                  <p className="text-sm text-gray-500">{exp.location}</p>
                )}
              </div>
              <p className="text-sm text-gray-500">
                {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
              </p>
            </div>
            
            <p className="mt-2 text-gray-600">{exp.description}</p>

            {exp.achievements?.length > 0 && (
              <div className="mt-3">
                <h4 className="font-medium text-gray-700 mb-1">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {exp.technologies?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 bg-${colors.secondary} text-${colors.accent} text-sm rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}