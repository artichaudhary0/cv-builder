import { TemplateId } from '../../templates/types';
import { templates } from '../../templates';
import { CV } from '../../types/cv';

interface Props {
  templateId: TemplateId;
  cv: CV;
}

export function TemplateWrapper({ templateId, cv }: Props) {
  const template = templates.find(t => t.id === templateId);
  
  if (!template) {
    return null;
  }

  return (
    <div className={`
      bg-${template.colors.background}
      text-${template.colors.text}
    `}>
      <div className={`
        bg-gradient-to-r ${template.colors.primary}
        text-white px-8 py-12 rounded-t-lg
      `}>
        {/* Header content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{cv.personalInfo.fullName}</h1>
          <h2 className="text-2xl text-${template.colors.secondary}">
            {cv.personalInfo.title}
          </h2>
          {/* Contact info */}
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Sections rendered according to template style */}
        {cv.personalInfo.summary && (
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">{cv.personalInfo.summary}</p>
          </div>
        )}
        {/* Other sections */}
      </div>
    </div>
  );
}