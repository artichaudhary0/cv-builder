import { CV } from '../../types/cv';
import { TemplateId } from '../../templates/types';
import { ModernTemplate } from '../templates/modern/ModernTemplate';
import { ClassicTemplate } from '../templates/classic/ClassicTemplate';
import { MinimalTemplate } from '../templates/minimal/MinimalTemplate';
import { ExecutiveTemplate } from '../templates/executive/ExecutiveTemplate';
import { CreativeTemplate } from '../templates/creative/CreativeTemplate';
import { ProfessionalTemplate } from '../templates/professional/ProfessionalTemplate';
import { ElegantTemplate } from '../templates/elegant/ElegantTemplate';
import { TechTemplate } from '../templates/tech/TechTemplate';
import { AcademicTemplate } from '../templates/academic/AcademicTemplate';
import { CompactTemplate } from '../templates/compact/CompactTemplate';
import { ExportOptions } from '../export/ExportOptions';
import { exportToPDF } from '../../utils/export';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

interface Props {
  cv: CV;
  templateId: TemplateId;
}

const templateComponents = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimal: MinimalTemplate,
  executive: ExecutiveTemplate,
  creative: CreativeTemplate,
  professional: ProfessionalTemplate,
  elegant: ElegantTemplate,
  tech: TechTemplate,
  academic: AcademicTemplate,
  compact: CompactTemplate,
} as const;

export function Preview({ cv, templateId }: Props) {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportPDF = async () => {
    if (componentRef.current) {
      await exportToPDF('cv-preview', cv);
    }
  };

  const TemplateComponent = templateComponents[templateId];

  return (
    <div className="relative">
      <div id="cv-preview" ref={componentRef} className="max-w-4xl mx-auto">
        <TemplateComponent cv={cv} />
      </div>

      <ExportOptions
        cv={cv}
        onExportPDF={handleExportPDF}
        onPrint={handlePrint}
      />
    </div>
  );
}