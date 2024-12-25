import { Template } from './types';

export const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and contemporary design with bold typography',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
    headerComponent: 'ModernHeader',
    colors: {
      primary: 'from-blue-600 to-blue-800',
      secondary: 'blue-100',
      accent: 'blue-500',
      background: 'white',
      text: 'gray-800'
    }
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional and timeless design for formal industries',
    thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&q=80',
    headerComponent: 'ClassicHeader',
    colors: {
      primary: 'from-gray-800 to-gray-900',
      secondary: 'gray-100',
      accent: 'gray-700',
      background: 'white',
      text: 'gray-900'
    }
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant with focus on content',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
    headerComponent: 'MinimalHeader',
    colors: {
      primary: 'from-gray-50 to-gray-100',
      secondary: 'gray-800',
      accent: 'gray-900',
      background: 'white',
      text: 'gray-800'
    }
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Sophisticated design for senior positions',
    thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&q=80',
    headerComponent: 'ExecutiveHeader',
    colors: {
      primary: 'from-slate-800 to-slate-900',
      secondary: 'slate-100',
      accent: 'slate-700',
      background: 'white',
      text: 'slate-900'
    }
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Bold and artistic design for creative professionals',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
    headerComponent: 'CreativeHeader',
    colors: {
      primary: 'from-purple-600 to-pink-600',
      secondary: 'purple-100',
      accent: 'pink-500',
      background: 'white',
      text: 'gray-800'
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean and professional design for corporate roles',
    thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&q=80',
    headerComponent: 'ProfessionalHeader',
    colors: {
      primary: 'from-indigo-600 to-indigo-800',
      secondary: 'indigo-100',
      accent: 'indigo-500',
      background: 'white',
      text: 'gray-800'
    }
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Refined and sophisticated design',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
    headerComponent: 'ElegantHeader',
    colors: {
      primary: 'from-emerald-600 to-emerald-800',
      secondary: 'emerald-100',
      accent: 'emerald-500',
      background: 'white',
      text: 'gray-800'
    }
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'Modern design for tech professionals',
    thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&q=80',
    headerComponent: 'TechHeader',
    colors: {
      primary: 'from-cyan-600 to-blue-600',
      secondary: 'cyan-100',
      accent: 'blue-500',
      background: 'white',
      text: 'gray-800'
    }
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Professional design for academic and research positions',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
    headerComponent: 'AcademicHeader',
    colors: {
      primary: 'from-red-800 to-red-900',
      secondary: 'red-100',
      accent: 'red-700',
      background: 'white',
      text: 'gray-900'
    }
  },
  {
    id: 'compact',
    name: 'Compact',
    description: 'Space-efficient design for detailed CVs',
    thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&q=80',
    headerComponent: 'CompactHeader',
    colors: {
      primary: 'from-orange-600 to-red-600',
      secondary: 'orange-100',
      accent: 'red-500',
      background: 'white',
      text: 'gray-800'
    }
  }
];