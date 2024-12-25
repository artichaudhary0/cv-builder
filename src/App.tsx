import  { useState } from 'react';
import { CV } from './types/cv';
import { TemplateId } from './templates/types';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { ExperienceForm } from './components/ExperienceForm';
import { EducationForm } from './components/EducationForm';
import { SkillsForm } from './components/SkillsForm';
import { AwardsForm } from './components/forms/AwardsForm';
import { PublicationsForm } from './components/forms/PublicationsForm';
import { VolunteerForm } from './components/forms/VolunteerForm';
import { Preview } from './components/preview/Preview';
import { TemplateSelector } from './components/templates/TemplateSelector';
import { FileText } from 'lucide-react';

// ... (keep existing initialCV)
const initialCV: CV = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    title: '',
    summary: '',
    location: ''
  },
  experience: [],
  education: [],
  skills: [],
  awards: [],
  publications: [],
  volunteer: [],
  projects: [],
  certifications: [],
  languages: []
};

function App() {
  const [cv, setCV] = useState<CV>(initialCV);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>('modern');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">CV Builder</h1>
            </div>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {showPreview ? 'Edit CV' : 'Preview CV'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!showPreview ? (
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose a Template</h2>
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                onSelect={setSelectedTemplate}
              />
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <PersonalInfoForm
                  personalInfo={cv.personalInfo}
                  onChange={(personalInfo) => setCV({ ...cv, personalInfo })}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ExperienceForm
                  experience={cv.experience}
                  onChange={(experience) => setCV({ ...cv, experience })}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <EducationForm
                  education={cv.education}
                  onChange={(education) => setCV({ ...cv, education })}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <SkillsForm
                  skills={cv.skills}
                  onChange={(skills) => setCV({ ...cv, skills })}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <AwardsForm
                  awards={cv.awards || []}
                  onChange={(awards) => setCV({ ...cv, awards })}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <PublicationsForm
                  publications={cv.publications || []}
                  onChange={(publications) => setCV({ ...cv, publications })}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <VolunteerForm
                  volunteer={cv.volunteer || []}
                  onChange={(volunteer) => setCV({ ...cv, volunteer })}
                />
              </div>
            </div>
          </div>
        ) : (
          <Preview cv={cv} templateId={selectedTemplate} />
        )}
      </main>
    </div>
  );
}

export default App;