import { CV } from '../../../types/cv';
import { templates } from '../../../templates';
import { CreativeHeader } from './CreativeHeader';
import { CreativeExperience } from './CreativeExperience';
import { CreativeEducation } from './CreativeEducation';
import { CreativeSkills } from './CreativeSkills';

interface Props {
  cv: CV;
}

export function CreativeTemplate({ cv }: Props) {
  const template = templates.find(t => t.id === 'creative')!;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50">
      <CreativeHeader cv={cv} colors={template.colors} />
      
      <div className="p-8 space-y-12">
        {cv.personalInfo.summary && (
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              {cv.personalInfo.summary}
            </p>
          </div>
        )}

        <div className="max-w-6xl mx-auto space-y-16">
          <CreativeExperience experience={cv.experience} colors={template.colors} />
          <CreativeEducation education={cv.education} colors={template.colors} />
          <CreativeSkills skills={cv.skills} colors={template.colors} />
        </div>
      </div>
    </div>
  );
}