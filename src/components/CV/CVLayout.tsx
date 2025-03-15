import { CVHeader } from './sections/CVHeader';
import { CVSkills } from './sections/CVSkills';
import { CVExperience } from './sections/CVExperience';
import { CVProjects } from './sections/CVProjects';
import type { FormData } from '../../types/form';

interface CVLayoutProps {
  data: FormData;
}

export function CVLayout({ data }: CVLayoutProps) {
  return (
    <div id="cv-content" className="bg-white w-[210mm] mx-auto shadow-lg print:shadow-none print:w-[210mm] print:m-0">
      <CVHeader contact={data.contact} />
      <div className="cv-body p-8 text-sm space-y-6 print:pt-6">
        <CVSkills skills={data.skills} />
        <CVExperience experience={data.experience} />
        <CVProjects projects={data.projects} />
      </div>
    </div>
  );
}