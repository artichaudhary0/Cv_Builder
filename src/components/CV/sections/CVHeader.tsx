import { Mail, Phone, MapPin } from 'lucide-react';
import type { FormData } from '../../../types/form';

interface CVHeaderProps {
  contact: FormData['contact'];
}

export function CVHeader({ contact }: CVHeaderProps) {
  return (
    <div className="cv-header bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-6 print:bg-indigo-600 print:from-indigo-600 print:to-purple-600">
      <h1 className="text-2xl font-bold mb-4 print:text-white">{contact.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm print:grid-cols-3 print:text-white">
        <div className="flex items-center print:text-white">
          <Mail className="w-4 h-4 mr-2 shrink-0 print:text-white" />
          <span className="truncate print:text-white">{contact.email}</span>
        </div>
        <div className="flex items-center print:text-white">
          <Phone className="w-4 h-4 mr-2 shrink-0 print:text-white" />
          <span className="truncate print:text-white">{contact.phone}</span>
        </div>
        <div className="flex items-center print:text-white">
          <MapPin className="w-4 h-4 mr-2 shrink-0 print:text-white" />
          <span className="truncate print:text-white">{contact.location}</span>
        </div>
      </div>
    </div>
  );
}