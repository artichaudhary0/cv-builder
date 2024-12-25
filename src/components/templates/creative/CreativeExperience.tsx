import { Experience } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Briefcase, ArrowRight } from 'lucide-react';
import { formatDate } from '../../../utils/dates';

interface Props {
  experience: Experience[];
  colors: Template['colors'];
}

export function CreativeExperience({ experience, colors }: Props) {
  if (!experience.length) return null;

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <Briefcase className={`w-8 h-8 text-${colors.accent}`} />
        Experience Journey
      </h2>

      <div className="space-y-16">
        {experience.map((exp, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {exp.company}
                </p>
                <p className="text-gray-600 mt-1">{exp.location}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {formatDate(exp.startDate)} <ArrowRight className="inline w-4 h-4" /> {exp.current ? 'Present' : formatDate(exp.endDate)}
                </p>
              </div>

              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-3">{exp.position}</h3>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>

                {exp.achievements?.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mt-2" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}