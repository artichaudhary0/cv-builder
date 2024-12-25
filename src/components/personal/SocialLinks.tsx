import { Input } from '../common/Input';
import { Globe, Linkedin, Github } from 'lucide-react';

interface Props {
  website?: string;
  linkedin?: string;
  github?: string;
  onChange: (field: string, value: string) => void;
}

export function SocialLinks({ website, linkedin, github, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Input
        icon={Globe}
        type="url"
        placeholder="Portfolio Website"
        value={website}
        onChange={(e) => onChange('website', e.target.value)}
      />
      <Input
        icon={Linkedin}
        type="url"
        placeholder="LinkedIn Profile"
        value={linkedin}
        onChange={(e) => onChange('linkedin', e.target.value)}
      />
      <Input
        icon={Github}
        type="url"
        placeholder="GitHub Profile"
        value={github}
        onChange={(e) => onChange('github', e.target.value)}
      />
    </div>
  );
}