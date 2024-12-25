import { PersonalInfo } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface Props {
  cv: { personalInfo: PersonalInfo };
  colors: Template['colors'];
}

export function ModernHeader({ cv, colors }: Props) {
  const { personalInfo } = cv;

  return (
    <header className={`bg-gradient-to-r ${colors.primary} text-white px-8 py-12`}>
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{personalInfo.fullName}</h1>
          <h2 className={`text-2xl text-${colors.secondary}`}>{personalInfo.title}</h2>
          
          <div className="flex flex-wrap gap-4 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-${colors.secondary}">
                  {personalInfo.email}
                </a>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-${colors.secondary}">
                  {personalInfo.phone}
                </a>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>

        {personalInfo.profileImage && (
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.fullName}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        )}
      </div>

      {(personalInfo.linkedin || personalInfo.github || personalInfo.website) && (
        <div className="mt-6 flex gap-4">
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-${colors.accent}/20`}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-${colors.accent}/20`}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {personalInfo.website && (
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-${colors.accent}/20`}
            >
              <Globe className="w-4 h-4" />
              Portfolio
            </a>
          )}
        </div>
      )}
    </header>
  );
}