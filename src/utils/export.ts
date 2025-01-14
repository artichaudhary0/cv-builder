import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CV } from '../types/cv';

export async function exportToPDF(elementId: string, cv: CV) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [canvas.width, canvas.height]
  });

  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save(`${cv.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`);
}