import type { Experience } from '../../../types/index';

interface CVExperienceProps {
  experience: Experience[];
}

export function CVExperience({ experience }: CVExperienceProps) {
  if (experience.length === 0) return null;

  return (
    <div className="cv-section">
      <h2 className="text-lg font-bold mb-3 text-gray-800">Experience</h2>
      <div className="space-y-3">
        {experience.map(exp => (
          <div key={exp.id} className="bg-gray-50 p-3 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-indigo-600">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="text-gray-600 mt-1 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}