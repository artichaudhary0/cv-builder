import { Experience } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { formatDate } from '../../../utils/dates';

interface Props {
  experience: Experience[];
  colors: Template['colors'];
}

export function MinimalExperience({ experience, colors }: Props) {
  if (!experience.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-light mb-8">Experience</h2>

      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-medium">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                {exp.location && (
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                )}
              </div>
              <p className="text-gray-500 text-sm mt-2 md:mt-0">
                {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">{exp.description}</p>

            {exp.achievements?.length > 0 && (
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    {achievement}
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