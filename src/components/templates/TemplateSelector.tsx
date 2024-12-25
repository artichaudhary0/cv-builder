import { templates } from '../../templates';
import { TemplateId } from '../../templates/types';

interface Props {
  selectedTemplate: TemplateId;
  onSelect: (templateId: TemplateId) => void;
}

export function TemplateSelector({ selectedTemplate, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`
            relative rounded-lg overflow-hidden cursor-pointer transition-all
            ${selectedTemplate === template.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}
          `}
          onClick={() => onSelect(template.id)}
        >
          <img
            src={template.thumbnail}
            alt={template.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-lg">{template.name}</h3>
            <p className="text-sm text-gray-600">{template.description}</p>
          </div>
          {selectedTemplate === template.id && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
              Selected
            </div>
          )}
        </div>
      ))}
    </div>
  );
}