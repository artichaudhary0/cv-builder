import { CV } from '../types/cv';

export function generateShareText(cv: CV): string {
  return `Check out ${cv.personalInfo.fullName}'s CV - ${cv.personalInfo.title}`;
}

export function generateShareUrl(): string {
  return window.location.href;
}

export function generateFileName(cv: CV, extension: string): string {
  return `${cv.personalInfo.fullName.replace(/\s+/g, '_')}_CV.${extension}`;
}