import { CV } from '../../../types/cv';
import { templates } from '../../../templates';
import { ExecutiveHeader } from './ExecutiveHeader';
import { ExecutiveExperience } from './ExecutiveExperience';
import { ExecutiveEducation } from './ExecutiveEducation';
import { ExecutiveSkills } from './ExecutiveSkills';

interface Props {
  cv: CV;
}

export function ExecutiveTemplate({ cv }: Props) {
  const template = templates.find(t => t.id === 'executive')!;

  return (
    <div className="bg-white">
      <ExecutiveHeader cv={cv} colors={template.colors} />
      
      <div className="p-8 space-y-8">
        {cv.personalInfo.summary && (
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-slate-800 pl-6 italic">
              {cv.personalInfo.summary}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <ExecutiveExperience experience={cv.experience} colors={template.colors} />
            <ExecutiveEducation education={cv.education} colors={template.colors} />
          </div>
          <div>
            <ExecutiveSkills skills={cv.skills} colors={template.colors} />
          </div>
        </div>
      </div>
    </div>
  );
}