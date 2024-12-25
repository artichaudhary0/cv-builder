import { Education } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { GraduationCap } from 'lucide-react';
import { formatDate } from '../../../utils/dates';

interface Props {
  education: Education[];
  colors: Template['colors'];
}

export function ClassicEducation({ education, colors }: Props) {
  if (!education.length) return null;

  return (
    <section>
      <h2 className={`text-2xl font-serif font-bold text-${colors.text} mb-6 flex items-center gap-3`}>
        <GraduationCap className={`w-6 h-6 text-${colors.accent}`} />
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className={`text-${colors.accent} font-medium`}>{edu.institution}</p>
                <p className="text-gray-700">{edu.field}</p>
              </div>
              <p className="text-gray-600 text-sm">
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </p>
            </div>

            {edu.gpa && (
              <p className="mt-2 text-gray-700">GPA: {edu.gpa}</p>
            )}

            {edu.honors && edu.honors.length > 0 && (
              <ul className="mt-3 list-disc list-inside">
                {edu.honors.map((honor, i) => (
                  <li key={i} className="text-gray-600">{honor}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}