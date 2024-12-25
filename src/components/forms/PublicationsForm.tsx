import { Publication } from '../../types/cv';
import { BookOpen, Plus, Trash2 } from 'lucide-react';

interface Props {
  publications: Publication[];
  onChange: (publications: Publication[]) => void;
}

export function PublicationsForm({ publications, onChange }: Props) {
  const handleAdd = () => {
    onChange([...publications, { title: '', authors: [], date: '', publisher: '' }]);
  };

  const handleChange = (index: number, field: keyof Publication, value: string | string[]) => {
    const newPublications = publications.map((pub, i) =>
      i === index ? { ...pub, [field]: value } : pub
    );
    onChange(newPublications);
  };

  const handleAuthorsChange = (index: number, value: string) => {
    const authors = value.split(',').map(author => author.trim());
    handleChange(index, 'authors', authors);
  };

  const handleRemove = (index: number) => {
    onChange(publications.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Publications</h2>
        <button
          onClick={handleAdd}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Publication</span>
        </button>
      </div>

      {publications.map((publication, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-3 bg-gray-50">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={publication.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                placeholder="Publication Title"
                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <input
            type="text"
            value={publication.authors.join(', ')}
            onChange={(e) => handleAuthorsChange(index, e.target.value)}
            placeholder="Authors (comma-separated)"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="text"
            value={publication.publisher}
            onChange={(e) => handleChange(index, 'publisher', e.target.value)}
            placeholder="Publisher"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="date"
            value={publication.date}
            onChange={(e) => handleChange(index, 'date', e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="url"
            value={publication.url || ''}
            onChange={(e) => handleChange(index, 'url', e.target.value)}
            placeholder="URL (optional)"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="text"
            value={publication.doi || ''}
            onChange={(e) => handleChange(index, 'doi', e.target.value)}
            placeholder="DOI (optional)"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <textarea
            value={publication.abstract || ''}
            onChange={(e) => handleChange(index, 'abstract', e.target.value)}
            placeholder="Abstract (optional)"
            rows={3}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ))}
    </div>
  );
}