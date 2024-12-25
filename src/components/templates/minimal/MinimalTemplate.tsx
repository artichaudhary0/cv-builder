import { CV } from '../../../types/cv';
import { templates } from '../../../templates';
import { MinimalHeader } from './MinimalHeader';
import { MinimalExperience } from './MinimalExperience';
import { MinimalEducation } from './MinimalEducation';
import { MinimalSkills } from './MinimalSkills';

interface Props {
  cv: CV;
}

export function MinimalTemplate({ cv }: Props) {
  const template = templates.find(t => t.id === 'minimal')!;

  return (
    <div className="bg-white">
      <MinimalHeader cv={cv} colors={template.colors} />
      
      <div className="max-w-3xl mx-auto p-8 space-y-12">
        {cv.personalInfo.summary && (
          <p className="text-lg text-gray-700 leading-relaxed">
            {cv.personalInfo.summary}
          </p>
        )}

        <MinimalExperience experience={cv.experience} colors={template.colors} />
        <MinimalEducation education={cv.education} colors={template.colors} />
        <MinimalSkills skills={cv.skills} colors={template.colors} />
      </div>
    </div>
  );
}