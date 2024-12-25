import { ExternalLink, MapPin, Mail, Phone } from 'lucide-react';
import { PersonalInfo } from '../../types/cv';

interface Props {
  personalInfo: PersonalInfo;
}

export function PreviewHeader({ personalInfo }: Props) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-12 rounded-t-lg">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{personalInfo.fullName}</h1>
          <h2 className="text-2xl text-blue-100">{personalInfo.title}</h2>
          
          <div className="flex flex-wrap gap-4 text-blue-100">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
                  {personalInfo.email}
                </a>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white">
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
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
            >
              <ExternalLink className="w-4 h-4" />
              GitHub
            </a>
          )}
          {personalInfo.website && (
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
            >
              <ExternalLink className="w-4 h-4" />
              Portfolio
            </a>
          )}
        </div>
      )}
    </header>
  );
}