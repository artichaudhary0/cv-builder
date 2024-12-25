import { CV } from '../../../types/cv';
import { templates } from '../../../templates';
import { ClassicHeader } from './ClassicHeader';
import { ClassicExperience } from './ClassicExperience';
import { ClassicEducation } from './ClassicEducation';
import { ClassicSkills } from './ClassicSkills';

interface Props {
  cv: CV;
}

export function ClassicTemplate({ cv }: Props) {
  const template = templates.find(t => t.id === 'classic')!;

  return (
    <div className="bg-white">
      <ClassicHeader cv={cv} colors={template.colors} />
      
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {cv.personalInfo.summary && (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{cv.personalInfo.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <ClassicExperience experience={cv.experience} colors={template.colors} />
            <ClassicEducation education={cv.education} colors={template.colors} />
          </div>
          <div>
            <ClassicSkills skills={cv.skills} colors={template.colors} />
          </div>
        </div>
      </div>
    </div>
  );
}