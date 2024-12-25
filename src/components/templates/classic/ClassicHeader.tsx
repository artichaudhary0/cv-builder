import { PersonalInfo } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface Props {
  cv: { personalInfo: PersonalInfo };
  colors: Template['colors'];
}

export function ClassicHeader({ cv, colors }: Props) {
  const { personalInfo } = cv;

  return (
    <header className={`bg-gradient-to-r ${colors.primary} text-white px-8 py-12`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-4xl font-serif font-bold">{personalInfo.fullName}</h1>
            <h2 className="text-xl text-gray-200">{personalInfo.title}</h2>
            
            <div className="flex flex-wrap gap-4 text-gray-200">
              {personalInfo.email && (
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white">
                  <Mail className="w-4 h-4" />
                  {personalInfo.email}
                </a>
              )}
              {personalInfo.phone && (
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-white">
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
          </div>

          {personalInfo.profileImage && (
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.fullName}
              className="w-32 h-32 rounded-full border-4 border-white/20"
            />
          )}
        </div>

        <div className="mt-6 flex gap-4">
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {personalInfo.website && (
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}