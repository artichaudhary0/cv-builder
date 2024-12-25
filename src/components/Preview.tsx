import { CV } from '../types/cv';
import {  Mail, Phone, MapPin, GraduationCap, Briefcase, Wrench } from 'lucide-react';

interface Props {
  cv: CV;
}

export function Preview({ cv }: Props) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-600 text-white p-8">
        <h1 className="text-3xl font-bold">{cv.personalInfo.fullName}</h1>
        <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{cv.personalInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{cv.personalInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{cv.personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {cv.personalInfo.summary && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
            <p className="text-gray-600">{cv.personalInfo.summary}</p>
          </section>
        )}

        {cv.experience.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Experience
            </h2>
            <div className="space-y-4">
              {cv.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">{exp.position}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {cv.education.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </h2>
            <div className="space-y-4">
              {cv.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-gray-600">{edu.field}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {cv.skills.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Wrench className="w-5 h-5 mr-2" />
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {cv.skills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}