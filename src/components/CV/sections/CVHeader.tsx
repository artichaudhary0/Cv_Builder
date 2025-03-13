import { Mail, Phone, MapPin } from 'lucide-react';
import type { FormData } from '../../../types/form';

interface CVHeaderProps {
  contact: FormData['contact'];
}

export function CVHeader({ contact }: CVHeaderProps) {
  return (
    <div className="cv-header bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-6">
      <h1 className="text-2xl font-bold mb-2">{contact.name}</h1>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          {contact.email}
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          {contact.phone}
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {contact.location}
        </div>
      </div>
    </div>
  );
}