export type TemplateId = 
  | 'modern'
  | 'classic'
  | 'minimal'
  | 'executive'
  | 'creative'
  | 'professional'
  | 'elegant'
  | 'tech'
  | 'academic'
  | 'compact';

export interface Template {
  id: TemplateId;
  name: string;
  description: string;
  thumbnail: string;
  headerComponent: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
}