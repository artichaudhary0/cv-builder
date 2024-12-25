import { PersonalInfo } from '../../../types/cv';
import { Template } from '../../../templates/types';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface Props {
  cv: { personalInfo: PersonalInfo };
  colors: Template['colors'];
}

export function CreativeHeader({ cv, colors }: Props) {
  const { personalInfo } = cv;

  return (
    <header className={`bg-gradient-to-r ${colors.primary} text-white py-20`}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            {personalInfo.fullName}
          </h1>
          <h2 className="text-3xl text-purple-200">{personalInfo.title}</h2>

          {personalInfo.profileImage && (
            <div className="mt-8 mb-12">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                className="w-48 h-48 rounded-full border-4 border-white/20 shadow-xl mx-auto"
              />
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-8 text-lg">
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-purple-200">
                <Mail className="w-5 h-5" />
                {personalInfo.email}
              </a>
            )}
            {personalInfo.phone && (
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-purple-200">
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

          <div className="flex justify-center gap-6 mt-8">
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {personalInfo.website && (
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                <Globe className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}