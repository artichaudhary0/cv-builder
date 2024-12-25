import { PersonalInfo } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface Props {
  cv: { personalInfo: PersonalInfo };
  colors: Template['colors'];
}

export function ExecutiveHeader({ cv, colors }: Props) {
  const { personalInfo } = cv;

  return (
    <header className={`bg-gradient-to-r ${colors.primary} text-white px-12 py-16`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">{personalInfo.fullName}</h1>
            <h2 className="text-2xl mt-2 text-slate-200">{personalInfo.title}</h2>
          </div>
          
          <div className="flex flex-wrap gap-6 text-slate-200">
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="w-5 h-5" />
                {personalInfo.email}
              </a>
            )}
            {personalInfo.phone && (
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-5 h-5" />
                {personalInfo.phone}
              </a>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {personalInfo.location}
              </div>
            )}
          </div>

          <div className="flex gap-4">
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/30 px-4 py-2 rounded hover:bg-slate-700/50"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/30 px-4 py-2 rounded hover:bg-slate-700/50"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {personalInfo.website && (
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/30 px-4 py-2 rounded hover:bg-slate-700/50"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {personalInfo.profileImage && (
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.fullName}
            className="w-40 h-40 rounded-full border-4 border-white/20 shadow-xl"
          />
        )}
      </div>
    </header>
  );
}