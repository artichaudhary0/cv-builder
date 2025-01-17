import { CV } from '../../../types/cv';
import { templates } from '../../../templates';
import { ModernHeader } from '../modern/ModernHeader';
import { ModernExperience } from '../modern/ModernExperience';
// import { ModernEducation } from '../modern/ModernEducation';
// import { ModernSkills } from '../modern/ModernSkills';

interface Props {
  cv: CV;
}

export function TechTemplate({ cv }: Props) {
  const template = templates.find(t => t.id === 'tech')!;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50">
      <ModernHeader cv={cv} colors={template.colors} />
      
      <div className="max-w-5xl mx-auto p-8 space-y-8">
        {cv.personalInfo.summary && (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{cv.personalInfo.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <ModernExperience experience={cv.experience} colors={template.colors} />
            {/* <ModernEducation education={cv.education} colors={template.colors} /> */}
          </div>
          <div>
            {/* <ModernSkills skills={cv.skills} colors={template.colors} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}