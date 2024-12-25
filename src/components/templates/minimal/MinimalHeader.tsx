import { PersonalInfo } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface Props {
  cv: { personalInfo: PersonalInfo };
  colors: Template['colors'];
}

export function MinimalHeader({ cv, colors }: Props) {
  const { personalInfo } = cv;

  return (
    <header className="py-12 border-b">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-light tracking-wide">{personalInfo.fullName}</h1>
          <h2 className="text-xl text-gray-600">{personalInfo.title}</h2>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-gray-900">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
            )}
            {personalInfo.phone && (
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-gray-900">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </a>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>
            )}
          </div>

          <div className="flex justify-center gap-4 text-gray-400">
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {personalInfo.website && (
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}