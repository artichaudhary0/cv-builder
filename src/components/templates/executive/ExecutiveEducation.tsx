import { Education } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { GraduationCap } from 'lucide-react';
import { formatDate } from '../../../utils/dates';

interface Props {
  education: Education[];
  colors: Template['colors'];
}

export function ExecutiveEducation({ education, colors }: Props) {
  if (!education.length) return null;

  return (
    <section>
      <h2 className={`text-2xl font-bold text-${colors.text} mb-6 flex items-center gap-3`}>
        <GraduationCap className={`w-6 h-6 text-${colors.accent}`} />
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className={`border-l-4 border-${colors.accent} pl-6 py-2`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className={`text-${colors.accent} font-medium`}>{edu.institution}</p>
                <p className="text-gray-700">{edu.field}</p>
                {edu.location && (
                  <p className="text-gray-600 text-sm">{edu.location}</p>
                )}
              </div>
              <p className="text-gray-600 text-sm">
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </p>
            </div>

            {edu.gpa && (
              <p className="mt-2 text-gray-700">GPA: {edu.gpa}</p>
            )}

            {edu.honors && edu.honors.length > 0 && (
              <div className="mt-3">
                <h4 className="font-medium text-gray-700">Honors:</h4>
                <ul className="mt-1 list-disc list-inside">
                  {edu.honors.map((honor, i) => (
                    <li key={i} className="text-gray-600">{honor}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}