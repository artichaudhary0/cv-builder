import { Education } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { GraduationCap } from 'lucide-react';
import { formatDate } from '../../../utils/dates';

interface Props {
  education: Education[];
  colors: Template['colors'];
}

export function CreativeEducation({ education, colors }: Props) {
  if (!education.length) return null;

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <GraduationCap className={`w-8 h-8 text-${colors.accent}`} />
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
          >
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-purple-600 font-medium mt-1">{edu.institution}</p>
            <p className="text-gray-600 mt-1">{edu.field}</p>
            
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
              <span>{formatDate(edu.startDate)}</span>
              <span>-</span>
              <span>{formatDate(edu.endDate)}</span>
            </div>

            {edu.gpa && (
              <p className="mt-3 text-gray-700">GPA: {edu.gpa}</p>
            )}

            {edu.honors && edu.honors.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Honors</h4>
                <ul className="space-y-1">
                  {edu.honors.map((honor, i) => (
                    <li key={i} className="text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                      {honor}
                    </li>
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