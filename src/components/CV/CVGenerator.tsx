import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { CVLayout } from './CVLayout';
import type { FormData } from '../../types/form';

interface CVGeneratorProps {
  data: FormData;
}

export function CVGenerator({ data }: CVGeneratorProps) {
  const handleDownload = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${data.contact.name}'s CV`,
          text: 'Check out my CV',
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="py-8 max-w-[210mm] mx-auto print:p-0 print:m-0">
      <div className="flex justify-end gap-4 mb-8 px-6 print:hidden">
        <button
          onClick={handleShare}
          className="flex items-center px-4 py-2 text-indigo-600 border border-indigo-600 
                   rounded-lg hover:bg-indigo-50 transition-colors"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white 
                   rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </button>
      </div>

      <CVLayout data={data} />
    </div>
  );
}