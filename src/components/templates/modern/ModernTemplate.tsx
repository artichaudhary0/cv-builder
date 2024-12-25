import { CV } from '../../../types/cv';
import { templates } from '../../../templates';
import { ModernHeader } from './ModernHeader';
import { ModernExperience } from './ModernExperience';
// import { ModernEducation } from './ModernEducation';
// import { ModernSkills } from './ModernSkills';

interface Props {
  cv: CV;
}

export function ModernTemplate({ cv }: Props) {
  const template = templates.find(t => t.id === 'modern')!;

  return (
    <div className="bg-white">
      <ModernHeader cv={cv} colors={template.colors} />
      
      <div className="p-8 space-y-8">
        {cv.personalInfo.summary && (
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">{cv.personalInfo.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <ModernExperience experience={cv.experience} colors={template.colors} />
            {/* <ModernEducation education={cv.education} colors={template.colors} /> */}
          </div>
          
          <div className="space-y-8">
            {/* <ModernSkills skills={cv.skills} colors={template.colors} /> */}
            {/* Add other sidebar sections */}
          </div>
        </div>
      </div>
    </div>
  );
}