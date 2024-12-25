import { Experience } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Briefcase } from 'lucide-react';
import { formatDate } from '../../../utils/dates';

interface Props {
  experience: Experience[];
  colors: Template['colors'];
}

export function ClassicExperience({ experience, colors }: Props) {
  if (!experience.length) return null;

  return (
    <section>
      <h2 className={`text-2xl font-serif font-bold text-${colors.text} mb-6 flex items-center gap-3`}>
        <Briefcase className={`w-6 h-6 text-${colors.accent}`} />
        Professional Experience
      </h2>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className={`text-${colors.accent} font-medium`}>{exp.company}</p>
                {exp.location && (
                  <p className="text-gray-600 text-sm mt-1">{exp.location}</p>
                )}
              </div>
              <p className="text-gray-600 text-sm">
                {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
              </p>
            </div>

            <p className="mt-3 text-gray-700">{exp.description}</p>

            {exp.achievements?.length > 0 && (
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}