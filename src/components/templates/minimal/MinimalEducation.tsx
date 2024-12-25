import { Education } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { formatDate } from '../../../utils/dates';

interface Props {
  education: Education[];
  colors: Template['colors'];
}

export function MinimalEducation({ education, colors }: Props) {
  if (!education.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-light mb-8">Education</h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-medium">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-700">{edu.field}</p>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:mt-0">
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </p>
            </div>

            {edu.gpa && (
              <p className="text-gray-600 mt-2">GPA: {edu.gpa}</p>
            )}

            {edu.honors && edu.honors.length > 0 && (
              <ul className="mt-3 space-y-1">
                {edu.honors.map((honor, i) => (
                  <li key={i} className="text-gray-600 flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    {honor}
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