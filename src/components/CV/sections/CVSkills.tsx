
import { groupSkillsByCategory } from '../../../utils/skillsUtil';
import type { Skill } from '../../../types/form';

interface CVSkillsProps {
  skills: Skill[];
}

export function CVSkills({ skills }: CVSkillsProps) {
  if (skills.length === 0) return null;

  const skillsByCategory = groupSkillsByCategory(skills);

  return (
    <div className="cv-section">
      <h2 className="text-lg font-bold mb-3 text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={`cv-category-${category}`} className="bg-gray-50 p-3 rounded print:bg-gray-50">
            <h3 className="font-medium mb-2 capitalize text-indigo-600">{category}</h3>
            <div className="space-y-2">
              {skills.map(skill => (
                <div key={skill.uniqueId} className="flex items-center justify-between">
                  <span>{skill.name}</span>
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full print:bg-gray-200">
                    <div 
                      className="h-full bg-indigo-600 rounded-full print:bg-indigo-600"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}